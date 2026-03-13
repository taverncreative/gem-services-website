import type { Metadata } from 'next'
import Link from 'next/link'
import { towns } from '@/lib/data/towns'
import { visibleServices } from '@/lib/data/services'
import { TrustBar } from '@/components/global/TrustBar'

export const metadata: Metadata = {
  title: 'Pest Control Services Across Kent | GEM Services Pest Control',
  description: 'Expert local pest control services covering Maidstone, Ashford, Canterbury, Dover, and all surrounding areas in Kent. Fast, effective, and fully insured.',
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

const faqs = [
  {
    q: "How fast can you attend a pest emergency in Kent?",
    a: "We offer rapid same-day or next-day callouts across all major Kent towns, including Maidstone, Ashford, Canterbury, and Medway. We are based locally for minimal response times."
  },
  {
    q: "Are your pest control treatments guaranteed?",
    a: "Yes. All of our professional eradication treatments come with robust guarantees when our technician's proofing and prevention advice is strictly followed."
  },
  {
    q: "Do you provide commercial pest control in Kent?",
    a: "Absolutely. We manage discreet, fully compliant pest control contracts for restaurants, offices, warehouses, and agricultural sites across the entire Kent region."
  },
  {
    q: "Are the treatments safe for my family and pets?",
    a: "Yes. We operate under strict health and safety protocols using safely secured bait stations, approved chemical applications, and pet-friendly formulations where available."
  }
]

export default function AreasIndexPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-20 lg:py-24 text-center px-4 bg-neutral-dark text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pest control services across Kent
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional, highly effective pest eradication covering Maidstone, Ashford, Canterbury, Dover, Folkestone, Medway, and all surrounding Kent areas. 
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">📍 Local Expertise</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">⚡ Fast Response</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">🛡️ Fully Insured</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">🏢 Domestic & Commercial</span>
          </div>

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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Local pest control experts covering Kent</h2>
          <p className="text-lg text-neutral-body leading-relaxed">
            GEM Services provides highly targeted, legally compliant pest control solutions for both residential homes and commercial businesses across the entire county of Kent. Whether you are dealing with a swarm of wasps in Sevenoaks, an aggressive rat infestation in Medway, or persistent bed bugs in Canterbury, our BPCA-trained pest control service is constantly active and ready to securely resolve your biological emergency. We pride ourselves on rapid response times, absolute discretion, and permanent structural eradication methodologies.
          </p>
        </div>
      </section>

      {/* TOWN COVERAGE */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-dark">Pest control in towns across Kent</h2>
            <p className="text-neutral-muted max-w-2xl mx-auto">
              Select your specific local area below to access highly targeted geographic coverage details, specific community service records, and local emergency response rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {towns.map((town) => (
              <Link 
                key={town}
                href={`/areas/${town}`}
                className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:border-brand-primary hover:shadow-md transition-all font-semibold text-neutral-dark hover:text-brand-primary text-center group"
              >
                {formatTitle(town)} Pest Control
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-neutral-dark">Pest control services we provide</h2>
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

      {/* LOCAL PEST PROBLEMS */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-neutral-dark">Common pest problems in Kent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            <Link href="/guides/rats/how-to-get-rid-of-rats-in-your-garden" className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-brand-primary shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2 text-neutral-dark group-hover:text-brand-primary">How to get rid of rats</h3>
              <p className="text-neutral-muted text-sm line-clamp-2">Learn the structural secrets to permanently sealing your property and actively destroying complex colonies.</p>
              <span className="text-brand-primary text-sm font-semibold mt-4 block">Read Guide &rarr;</span>
            </Link>
            <Link href="/guides/wasps/how-to-get-rid-of-a-wasp-nest" className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-brand-primary shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2 text-neutral-dark group-hover:text-brand-primary">How to get rid of wasps</h3>
              <p className="text-neutral-muted text-sm line-clamp-2">Learn more about safely removing a wasp nest from your property without getting stung.</p>
              <span className="text-brand-primary text-sm font-semibold mt-4 block">Read Guide &rarr;</span>
            </Link>
            <Link href="/guides/fleas/flea-bites-vs-bed-bug-bites" className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-brand-primary shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2 text-neutral-dark group-hover:text-brand-primary">Flea bites vs bed bugs</h3>
              <p className="text-neutral-muted text-sm line-clamp-2">Accurately diagnose your exact indoor insect issue by strictly analyzing aggressive bite pattern geography.</p>
              <span className="text-brand-primary text-sm font-semibold mt-4 block">Read Guide &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* AREA COVERAGE */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-dark">Areas we cover</h2>
          <div className="prose prose-lg text-neutral-body max-w-none mb-8">
            <p>
              Our primary operational footprint entirely blankets the Kent district map. However, if your specific rural village or isolated estate borders these zones, we will readily expand our service area to successfully secure your environment in an emergency.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
             {towns.map((t) => (
               <span key={t} className="bg-neutral-100 px-4 py-2 rounded-lg text-sm font-medium text-neutral-700">{formatTitle(t)}</span>
             ))}
             <span className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-lg text-sm font-bold border border-brand-primary/20">+ All Surrounding Villages</span>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-dark">Pest control in Kent FAQs</h2>
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
            Don't let a minor nuisance rapidly escalate into an enormous structural crisis. We are continuously on standby, heavily equipped to immediately eradicate your pest issue completely permanently.
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
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
