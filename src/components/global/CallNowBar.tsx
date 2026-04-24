import Link from 'next/link'
import { Phone } from 'lucide-react'

export const CallNowBar = () => {
  return (
    <div className="bg-neutral-dark text-white text-[13px] border-b border-neutral-body/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-semibold text-brand-primary">Emergency Pest Control Across Kent</span>
          <span className="hidden sm:inline text-neutral-muted">|</span>
          <span className="hidden sm:inline text-neutral-300">Same Day Available</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:07400372204"
            className="flex items-center gap-1.5 font-bold hover:text-brand-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>07400 372204</span>
          </a>
          <span className="text-neutral-muted font-bold hidden lg:inline">|</span>
          <Link
            href="/contact"
            className="font-medium hover:text-brand-primary transition-colors hidden lg:inline"
          >
            Request Callback
          </Link>
        </div>
      </div>
    </div>
  )
}
