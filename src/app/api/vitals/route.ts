import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Silently accept web vitals data
  // In production, forward to your analytics service
  // e.g. Google Analytics, Vercel Analytics, or a custom dashboard
  try {
    const data = await request.json()
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vital]', data)
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true })
  }
}
