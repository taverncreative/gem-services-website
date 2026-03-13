'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics/events'

export const MobileCallBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)] p-3 z-50 flex gap-3">
      <a 
        href="tel:01234567890" 
        onClick={() => trackEvent('phone_click', { location: 'mobile_bar' })}
        className="flex-1 bg-brand-primary text-white text-center py-3 rounded-md font-bold active:scale-95 transition"
      >
        Call Pest Expert
      </a>
      <Link 
        href="/contact" 
        onClick={() => trackEvent('cta_click', { location: 'mobile_bar', action: 'quote' })}
        className="flex-1 bg-neutral-dark text-white text-center py-3 rounded-md font-bold transition-colors"
      >
        Request Quote
      </Link>
    </div>
  )
}
