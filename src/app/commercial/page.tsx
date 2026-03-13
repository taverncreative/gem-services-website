import type { Metadata } from 'next'
import Link from 'next/link'
import { towns } from '@/lib/data/towns'
import { commercialIndustries } from '@/lib/data/commercialIndustries'
import { TrustBar } from '@/components/global/TrustBar'

export const metadata: Metadata = {
  title: 'Commercial Pest Control Services in Kent | GEM Services Pest Control',
  description: 'Expert commercial pest management for restaurants, offices, retail, and warehouses across Kent. Preventative programmes and rapid response.',
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

const faqs = [
  {
    q: "How fast can you respond to a commercial pest emergency?",
    a: "We provide rapid response across Kent for commercial clients, often arriving same-day to handle critical active infestations like rodents or swarming insects that threaten your operations."
  },
  {
    q: "Are your commercial pest control services discreet?",
    a: "Absolutely. We understand that brand reputation is paramount. We can arrive in an unmarked vehicle and conduct treatments outside of your primary trading hours."
  },
  {
    q: "Do you offer preventative pest management programmes?",
    a: "Yes. We design and implement legally compliant, long-term preventative pest management contracts tailored specifically to your industry's strict auditing and health and safety requirements."
  },
  {
    q: "Are you fully insured and certified?",
    a: "Yes. GEM Services is fully insured, and we carry BPCA-approved qualifications to safely operate within complex commercial and industrial environments."
  }
]

export default function CommercialHubPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-20 lg:py-24 text-center px-4 bg-neutral-dark text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Commercial pest control services in Kent
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional, fully compliant pest control for businesses including restaurants, offices, warehouses, hotels, and retail premises.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">🛡️ Fully Insured Service</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">🤫 Discreet Commercial Service</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">📋 Preventative Programmes</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">⚡ Rapid Response Across Kent</span>
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
              Request Commercial Quote
            </Link>
          </div>
        </div>
      </section>
      <TrustBar />

      {/* INTRODUCTION */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Professional pest control for businesses</h2>
          <p className="text-lg text-neutral-body leading-relaxed">
            A single pest sighting can devastate a commercial brand, trigger failed health inspections, and lead to costly operational shutdowns. Pests such as rats, mice, and cockroaches carry severe pathogens that directly threaten food safety, employee wellbeing, and customer trust. At GEM Services, we provide legally compliant, intensely robust commercial pest control across Kent. By partnering with us, you actively secure your physical footprint against biological incursions, ensuring your business stays safe, open, and strictly aligned with all UK Environmental Health regulations.
          </p>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-dark">Commercial pest control for different industries</h2>
            <p className="text-neutral-muted max-w-2xl mx-auto">
              We engineer custom, highly tailored pest management strategies that explicitly match the unique structural risks and regulatory demands of your specific commercial sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialIndustries.map((ind) => (
              <div key={ind.slug} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:border-brand-primary transition-colors group">
                <h3 className="text-xl font-bold mb-3 text-neutral-dark">{ind.title}</h3>
                <p className="text-neutral-muted mb-6 leading-relaxed">{ind.description}</p>
                <Link 
                  href={`/commercial/${ind.slug}`}
                  className="text-brand-primary font-bold inline-flex items-center group-hover:underline"
                >
                  View Industry Solutions <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON COMMERCIAL PEST PROBLEMS */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-dark">Common pest problems in commercial premises</h2>
          <p className="text-lg text-neutral-muted max-w-3xl mx-auto mb-10">
            Commercial environments are highly vulnerable to specific local pests drawn by commercial waste, food storage, and extensive unsealed warehousing structures.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
            <Link href="/services/rat-control" className="p-5 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-[16px] font-bold shadow-sm hover:shadow-md text-center">
              Rat Control
            </Link>
            <Link href="/services/fly-control" className="p-5 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-[16px] font-bold shadow-sm hover:shadow-md text-center">
              Fly Control
            </Link>
            <Link href="/services/cockroach-control" className="p-5 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-[16px] font-bold shadow-sm hover:shadow-md text-center">
              Cockroach Control
            </Link>
            <Link href="/services/bird-control" className="p-5 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-[16px] font-bold shadow-sm hover:shadow-md text-center">
              Bird Control
            </Link>
            <Link href="/services/wasp-nest-removal" className="p-5 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-[16px] font-bold shadow-sm hover:shadow-md text-center">
              Wasp Nest Removal
            </Link>
          </div>
        </div>
      </section>

      {/* COMMERCIAL PEST CONTROL PROCESS */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-neutral-dark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our commercial pest control process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">Inspection</h3>
              <p className="text-neutral-300 text-sm">A highly forensic structural survey identifying active incursions, vulnerabilities, and hygiene risks.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6">2</div>
              <h3 className="text-xl font-bold mb-3">Treatment</h3>
              <p className="text-neutral-300 text-sm">Discrete, commercial-grade rapid eradication deployed safely during non-disruptive operational hours.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">Prevention</h3>
              <p className="text-neutral-300 text-sm">Installation of heavy-duty physical proofing arrays to permanently seal structural entry corridors.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6">4</div>
              <h3 className="text-xl font-bold mb-3">Monitoring</h3>
              <p className="text-neutral-300 text-sm">Ongoing digital reporting and routine maintenance checks to guarantee permanent legal compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREVENTATIVE PEST MANAGEMENT */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Preventative pest management for businesses</h2>
          <p className="text-lg text-neutral-body leading-relaxed">
            Reactive pest control is often too late for businesses. By the time a rat or cockroach is spotted by a customer, the damage to your reputation is already done. Our Preventative Pest Management programmes provide continuous, invisible protection. We routinely service highly secured bait arrays, monitor tracking systems, and supply the mandatory documentation required by environmental health inspectors, giving you complete peace of mind to focus purely on your operations.
          </p>
        </div>
      </section>

      {/* AREA COVERAGE */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-dark">Commercial pest control across Kent</h2>
            <p className="text-neutral-muted max-w-2xl mx-auto">
              We cover all major commercial centres and logistics hubs across the county. Find local commercial assistance below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {towns.map((town) => (
              <Link 
                key={town}
                href={`/areas/${town}`}
                className="bg-white py-4 px-3 rounded-lg border border-neutral-200 shadow-sm hover:border-brand-primary hover:text-brand-primary font-medium transition-all"
              >
                Commercial Pest Control in {formatTitle(town)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-neutral-dark">Commercial pest control FAQs</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to protect your business?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Contact GEM Services today to book a comprehensive commercial site survey and secure a robust preventative pest management contract.
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
              Request Commercial Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
