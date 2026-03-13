import Link from 'next/link'

export const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-brand-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold mb-6">Ready to resolve your pest issue?</h2>
        <p className="text-xl mb-10 text-white/90">
          We are standing by to provide expert advice and rapid callouts. 
          Contact us today for a free, no-obligation survey and quote.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:01234567890" 
            className="bg-white text-brand-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-neutral-100 transition-colors shadow-lg shadow-black/10"
          >
            Call Now: 01234 567 890
          </a>
          <Link 
            href="/contact" 
            className="bg-neutral-dark text-white border border-neutral-dark hover:border-white px-8 py-4 rounded-md font-bold text-lg hover:bg-transparent transition-all"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
