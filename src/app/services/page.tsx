import type { Metadata } from 'next'
import Link from 'next/link'
import { ServiceGrid } from '@/components/home/ServiceGrid'
import { TrustBar } from '@/components/global/TrustBar'
import { ServiceSchema } from '@/components/seo/schema/ServiceSchema'

export const metadata: Metadata = {
  title: 'Our Pest Control Services | GEM Services Pest Control',
  description: 'View our full range of professional pest control services available across Kent. From rat control to wasp nest removal, we offer rapid, guaranteed eradication.',
}

const faqs = [
  {
    q: "How fast can you respond to a pest emergency?",
    a: "We offer rapid same-day or next-day callouts across Kent for all major pest emergencies. We are based locally for minimal response times."
  },
  {
    q: "Are your pest control treatments guaranteed?",
    a: "Yes. All of our professional eradication treatments come with robust guarantees when our technician's proofing and prevention advice is strictly followed."
  },
  {
    q: "Are the treatments safe for my family and pets?",
    a: "We operate under strict health and safety protocols using safely secured bait stations, approved chemical applications, and pet-friendly formulations where available."
  },
  {
    q: "Do you provide commercial pest control?",
    a: "Absolutely. We manage discreet, fully compliant pest control contracts for restaurants, offices, warehouses, and agricultural sites across the entire Kent region."
  }
]

export default function ServicesIndexPage() {
  return (
    <>
      <ServiceSchema />

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-20 lg:py-24 text-center px-4 bg-neutral-dark text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional pest control services
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Highly targeted, legally compliant pest eradication services for homes and businesses covering the entirety of Kent.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:07400372204" 
              className="bg-brand-primary text-white border border-brand-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-primary-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Call Now: 07400 372204
            </a>
            <Link 
              href="/contact" 
              className="bg-white text-neutral-dark border border-white px-8 py-4 rounded-md font-bold text-lg hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
      <TrustBar />

      {/* INTRODUCTION */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Pest control for all types of pests</h2>
          <p className="text-lg text-neutral-body leading-relaxed">
            Every pest problem requires a specific approach. As BPCA-trained local experts, we provide safe and effective pest treatments designed for the exact issue at hand. From emergency wasp nest removal to keeping businesses clear of rodents, explore our professional pest control services below.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-12 md:py-16 px-4 bg-background-soft border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-dark">Our main pest control services</h2>
           <ServiceGrid />
        </div>
      </section>

      {/* DOMESTIC AND COMMERCIAL */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">Pest control for homes and businesses</h2>
          <p className="text-lg text-neutral-body leading-relaxed mb-8">
            Pests do not discriminate between a small private residence and a massive corporate facility. We operate two heavily specialised divisions explicitly engineered to combat these differing threats. For homeowners, our residential service provides ultra-discrete, incredibly rapid emergency intervention designed rigorously around child and pet safety. Conversely, our commercial service deploys heavy-duty, legally compliant, long-term preventative management contracts.
          </p>
          <Link 
            href="/commercial" 
            className="inline-flex items-center text-brand-primary font-bold text-lg hover:underline group bg-brand-primary/5 px-6 py-3 rounded-full border border-brand-primary/20"
          >
            Explore Our Commercial Compliance Division <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-dark">Pest control services FAQs</h2>
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
            Don't let a minor nuisance rapidly escalate. We are continuously on standby, heavily equipped to immediately eradicate your pest issue completely permanently.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <a 
              href="tel:07400372204"
              className="bg-white text-brand-primary px-10 py-5 rounded-md font-extrabold text-xl hover:bg-neutral-100 transition-colors shadow-xl w-full md:w-auto"
            >
              Call 07400 372204
            </a>
            <Link 
              href="/contact"
              className="bg-brand-primary-dark border-2 border-brand-primary-dark text-white hover:bg-white hover:text-brand-primary hover:border-white px-10 py-5 rounded-md font-bold text-xl transition-all shadow-xl w-full md:w-auto"
            >
              Request a Fast Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
