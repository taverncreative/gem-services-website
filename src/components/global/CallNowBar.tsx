import { Phone } from 'lucide-react'

export const CallNowBar = () => {
  return (
    <div className="hidden md:block bg-brand-primary text-white text-[13px] border-b border-brand-primary-dark/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-14 py-2.5 flex items-center justify-between">
        <div className="font-medium tracking-wide">
          Emergency Pest Control Across Kent
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:07400372204" className="flex items-center gap-2 font-bold hover:text-neutral-100 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>07400 372204</span>
          </a>
          <span className="text-brand-primary-dark/40 font-bold hidden lg:inline">|</span>
          <button className="font-medium hover:text-neutral-100 transition-colors hidden lg:inline">
            Request Callback
          </button>
        </div>
      </div>
    </div>
  )
}
