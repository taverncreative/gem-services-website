import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiting map (IP -> array of timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(req: Request) {
  try {
    // Basic IP rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    if (ip !== 'unknown') {
      const now = Date.now();
      const userRequests = rateLimitMap.get(ip) || [];
      const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);
      
      if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
      
      recentRequests.push(now);
      rateLimitMap.set(ip, recentRequests);
    }

    const body = await req.json();
    const { name, phone, email, location, pest, message, honeypot } = body;

    // Honeypot check for bots
    if (honeypot) {
       // Return success silently for bots
       return NextResponse.json({ success: true, message: 'Message sent successfully' });
    }

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'nate@gemservices.uk';

    const { data, error } = await resend.emails.send({
      from: `GEM Services <${contactEmail}>`,
      to: [contactEmail],
      replyTo: email || undefined,
      subject: `New Pest Control Request – GEM Services`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nTown: ${location || 'Not provided'}\nPest Problem: ${pest || 'Not specified'}\n\nMessage:\n${message}`,
      html: `
        <h2>New Pest Control Request – GEM Services</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Town:</strong> ${location || 'Not provided'}</p>
        <p><strong>Pest Problem:</strong> ${pest || 'Not specified'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
       console.error('Email sending error:', error);
       return NextResponse.json(
        { error: 'Failed to send message via Resend' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
