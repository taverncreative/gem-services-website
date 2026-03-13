import Link from 'next/link'
import { FadeIn } from '@/components/animations/FadeIn'

export const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 mb-20">
      <FadeIn className="max-w-6xl mx-auto bg-brand-primary text-white py-12 md:py-16 lg:py-20 text-center px-4 rounded-2xl">
        <h2 className="text-4xl md:text-4xl font-bold mb-6">Ready to clear out your pests?</h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Contact GEM Pest Control today for a free, no-obligation quote and get your space back to normal. We're ready to dispatch.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:07400372204" 
            className="bg-white text-brand-primary px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            Call 07400 372204
          </a>
          <Link 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            Request Quote
          </Link>
        </div>
      </FadeIn>
    </section>
  )
}
