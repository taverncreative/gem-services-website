'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics/events'

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      location: formData.get('location'),
      pest: formData.get('pest'),
      message: formData.get('message'),
      honeypot: formData.get('honeypot'), // anti-bots
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      trackEvent('form_submit', { form_name: 'contact_main' })
      setStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
      setErrorMessage('Sorry, there was a problem sending your request. Please call us on 07400 372204.')
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
      
      {status === 'success' ? (
        <div className="p-6 bg-green-50 text-green-800 rounded-md border border-green-200">
          <h3 className="font-bold text-lg mb-2">Message Sent Successfully!</h3>
          <p>Thank you. Your pest control request has been received and our team will contact you shortly.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-4 text-sm font-medium underline text-green-700 hover:text-green-900"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Honeypot field (hidden from users, targeted by bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave this field empty</label>
            <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
          </div>

          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-800 rounded-md text-sm">
              {errorMessage}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">Full Name</label>
            <input 
              type="text" 
              name="name"
              id="name" 
              className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
              placeholder="e.g. John Smith"
              required
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                id="phone" 
                className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
                placeholder="e.g. 07400 372204"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                id="email" 
                className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
                placeholder="e.g. nate@gemservices.uk"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-neutral-dark mb-1">Town or Location</label>
              <input 
                type="text" 
                name="location"
                id="location" 
                className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
                placeholder="e.g. Maidstone"
                required
              />
            </div>
            <div>
              <label htmlFor="pest" className="block text-sm font-medium text-neutral-dark mb-1">Pest Problem</label>
              <select 
                name="pest"
                id="pest" 
                className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all bg-white"
                required
              >
                <option value="">Select Pest</option>
                <option value="Rats">Rats</option>
                <option value="Mice">Mice</option>
                <option value="Wasps">Wasps</option>
                <option value="Fleas">Fleas</option>
                <option value="Bed Bugs">Bed Bugs</option>
                <option value="Birds">Birds (Pigeons/Gulls)</option>
                <option value="Moles">Moles</option>
                <option value="Other">Other / Unsure</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">How can we help?</label>
            <textarea 
              name="message"
              id="message" 
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all resize-y"
              placeholder="Please detail the pest issue you're experiencing, including the type of pest (if known), location in your property, and how long it has been occurring..."
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-brand-primary text-white font-bold py-4 rounded-md hover:bg-brand-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Request Quote'}
          </button>
        </form>
      )}
    </div>
  )
}

