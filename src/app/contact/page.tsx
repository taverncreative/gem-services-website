import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactPageSchema } from '@/components/seo/schema/ContactPageSchema'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactDetails } from '@/components/contact/ContactDetails'
import { TrustBar } from '@/components/global/TrustBar'
import { towns } from '@/lib/data/towns'
import { visibleServices } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Contact Emergency Kent Service | GEM Services Pest Control',
  description: 'Need rapid pest control in Kent? Contact GEM Services for absolute discretion and immediate dispatch. Domestic & commercial emergency callouts available.',
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

const faqs = [
  {
    q: "Do you offer emergency pest control callouts?",
    a: "Yes. We offer emergency pest control. If you have an immediate severe threat—such as a large wasp nest or active indoor rodents—we can respond to your property securely."
  },
  {
    q: "What areas of Kent do you cover?",
    a: "We actively serve the entirety of East and West Kent. From major hubs like Maidstone, Ashford, and Canterbury, straight down to smaller coastal villages around Dover and Folkestone."
  },
  {
    q: "How fast will I receive a quote?",
    a: "If you submit a digital request during business hours, our command centre routinely responds with a reliable telephone quote within exactly two hours."
  },
  {
    q: "Is it safe to stay in my property during treatment?",
    a: "Absolutely. We strictly deploy heavily restricted professional chemistry via highly isolated baiting and targeted treatments specifically designed to guarantee children and pets remain completely safe."
  }
]

export default function ContactPage() {
  const displayTowns = ['maidstone', 'ashford', 'canterbury', 'dover', 'folkestone']

  return (
    <>
      <ContactPageSchema />

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-20 lg:py-24 text-center px-4 bg-neutral-dark text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contact GEM Pest Control
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Immediate coordination completely across Kent. Contact us directly to completely secure your home or commercial business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <a 
              href="tel:07400372204" 
              className="flex items-center justify-center bg-brand-primary text-white border border-brand-primary px-8 py-3 min-h-[56px] rounded-md font-bold text-lg hover:bg-brand-primary-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Call Now: 07400 372204
            </a>
            <a 
              href="#form" 
              className="flex items-center justify-center bg-white text-neutral-dark border border-white px-8 py-3 min-h-[56px] rounded-md font-bold text-lg hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
      <TrustBar />

      {/* CONTACT INFO AND FORM SECTION */}
      <section id="form" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="mb-10 lg:mb-12">
                <h2 className="text-3xl font-bold text-neutral-dark mb-4">Request pest control assistance</h2>
                <p className="text-neutral-muted leading-relaxed">
                  Fill out our secure dispatch request below. Ensure you accurately detail exactly which town you are located in and what specific biological threat you have observed.
                </p>
              </div>
              <ContactForm />
            </div>

            <div className="lg:mt-8">
              <ContactDetails />

              {/* EMERGENCY SECTION */}
              <div className="mt-12 bg-red-50 border border-red-100 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-red-700 mb-3">Emergency pest control</h2>
                <p className="text-red-900 mb-6 leading-relaxed">
                  If you are experiencing an immediately highly dangerous situation—such as an exceedingly aggressive swarm of wasps, an expansive rat migration indoors, or an actively biting flea infestation—please physically dial our emergency line. We maintain extreme readiness to deploy effectively.
                </p>
                <a 
                  href="tel:07400372204" 
                  className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition-colors shadow-md"
                >
                  Emergency Line: 07400 372204
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS WE COVER SECTION */}
      <section className="py-12 md:py-16 px-4 bg-background-soft border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-dark">Pest control across Kent</h2>
          <p className="text-lg text-neutral-muted max-w-3xl mx-auto mb-10">
            We explicitly serve properties throughout the entirety of Kent. Explore our primary dedicated deployment towns directly below.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {displayTowns.map((town) => (
              <Link 
                key={town}
                href={`/areas/${town}`}
                className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm hover:border-brand-primary hover:text-brand-primary font-bold transition-all text-center block"
              >
                {formatTitle(town)}
              </Link>
            ))}
          </div>
          <div className="mt-8">
             <Link href="/areas" className="text-brand-primary font-bold inline-flex items-center hover:underline group">
               View All Kent Service Areas <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
             </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-neutral-dark">Our pest control services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
            {visibleServices.map(service => (
              <Link 
                key={service}
                href={`/services/${service}`}
                className="p-5 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-[16px] font-bold shadow-sm hover:shadow-md block"
              >
                {formatTitle(service)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-dark">Contact and service FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-3 pl-4 border-l-4 border-brand-primary text-neutral-dark">
                  {faq.q}
                </h3>
                <p className="text-neutral-body pl-4 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 px-4 bg-brand-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need immediate local assistance?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Don't let a minor nuisance rapidly escalate. Call anytime for urgent pest issues. We are heavily equipped to immediately eradicate your pest issue completely and permanently.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
            <a 
              href="tel:07400372204"
              className="flex items-center justify-center bg-white text-brand-primary px-10 py-4 min-h-[56px] rounded-md font-extrabold text-xl hover:bg-neutral-100 transition-colors shadow-xl w-full md:w-auto"
            >
              Call 07400 372204
            </a>
            <a 
              href="#form"
              className="flex items-center justify-center bg-brand-primary-dark border-2 border-brand-primary-dark text-white hover:bg-white hover:text-brand-primary hover:border-white px-10 py-4 min-h-[56px] rounded-md font-bold text-xl transition-all shadow-xl w-full md:w-auto"
            >
              Request a Fast Quote
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
