import Link from 'next/link'

/**
 * Above-the-fold conversion strip.
 * Shows phone, availability, and location reassurance on every page.
 * Server component — zero JS.
 */
export const ConversionBar = () => {
  return (
    <div className="bg-neutral-dark text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-semibold text-brand-primary">Emergency Pest Control Across Kent</span>
          <span className="hidden sm:inline text-neutral-muted">|</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-brand-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Based in Ashford, covering all Kent
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:07400372204"
            className="flex items-center gap-1.5 font-bold hover:text-brand-primary transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            07400 372204
          </a>
          <span className="hidden md:inline text-neutral-muted">|</span>
          <Link
            href="/contact"
            className="hidden md:inline-flex text-brand-primary hover:text-white transition-colors font-medium"
          >
            Request Callback
          </Link>
        </div>
      </div>
    </div>
  )
}
