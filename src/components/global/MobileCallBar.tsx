'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics/events'

export const MobileCallBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)] z-50">
      {/* Urgency strip */}
      <div className="bg-brand-primary text-white text-xs font-semibold text-center py-1.5 px-2">
        Same Day Available &bull; Local Kent Technician &bull; BPCA Certified
      </div>
      <div className="p-3 flex gap-3">
        <a
          href="tel:07400372204"
          onClick={() => trackEvent('phone_click', { location: 'mobile_bar' })}
          className="flex-1 bg-brand-primary text-white text-center py-3 rounded-md font-bold active:scale-95 transition"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          onClick={() => trackEvent('cta_click', { location: 'mobile_bar', action: 'quote' })}
          className="flex-1 bg-neutral-dark text-white text-center py-3 rounded-md font-bold transition-colors"
        >
          Free Quote
        </Link>
      </div>
    </div>
  )
}
