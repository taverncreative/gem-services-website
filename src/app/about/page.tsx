import type { Metadata } from 'next'
import Link from 'next/link'
import { OrganizationSchema } from '@/components/seo/schema/OrganizationSchema'
import { TrustBar } from '@/components/global/TrustBar'
import { ReviewSection } from '@/components/global/ReviewSection'
import { towns } from '@/lib/data/towns'
import { visibleServices } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'About Local Experts in Kent | GEM Services Pest Control',
  description: 'Learn about GEM Pest Control, your trusted local team for residential and commercial pest management across Kent. Fully insured, rapid response, and guaranteed results.',
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export default function AboutPage() {
  const displayTowns = towns.slice(0, 8)

  return (
    <>
      <OrganizationSchema />

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-20 lg:py-24 text-center px-4 bg-neutral-dark text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About GEM Pest Control
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your trusted, independent local pest control experts providing rapid, guaranteed eradication services for homes and businesses covering the entirety of Kent.
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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Local pest control experts in Kent</h2>
          <p className="text-lg text-neutral-body leading-relaxed">
            At GEM Pest Control, we are intensely dedicated to protecting the health, structural integrity, and peace of mind of Kent property owners. We provide formidable, legally compliant pest eradication services for both sprawling commercial businesses and delicate residential homes across the county. Whether your property has been violently compromised by aggressive <Link href="/services/rat-control" className="text-brand-primary font-semibold hover:underline">rats</Link>, structural <Link href="/services/mouse-control" className="text-brand-primary font-semibold hover:underline">mice</Link>, nesting <Link href="/services/wasp-nest-removal" className="text-brand-primary font-semibold hover:underline">wasps</Link>, highly invasive <Link href="/services/flea-treatment" className="text-brand-primary font-semibold hover:underline">fleas</Link> and <Link href="/services/bed-bug-treatment" className="text-brand-primary font-semibold hover:underline">bed bugs</Link>, or damaging <Link href="/services/bird-control" className="text-brand-primary font-semibold hover:underline">birds</Link>, we stand totally prepared to permanently neutralise the biological threat.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-y border-neutral-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 text-center">Experienced pest control service</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              Eradicating complex colonies requires significantly more than just applying standard chemicals. It demands a rigorous, highly forensic understanding of insect biology, rodent tracking psychology, and intense architectural proofing mechanics. We have spent years successfully dismantling severe, deeply rooted infestations within both fragile domestic loft spaces and dense, heavily regulated commercial logistics operations. 
            </p>
            <p>
              Using proven tracking methods and BPCA-approved treatments, we do not just temporarily remove a pest problem; we find their exact entry points and help secure your property to ensure they don't return. 
            </p>
          </div>
        </div>
      </section>

      {/* AREAS WE COVER */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-dark">Pest control across Kent</h2>
          <p className="text-lg text-neutral-muted max-w-3xl mx-auto mb-10">
            We operate daily across the entirety of Kent, providing hyper-localised, ultra-rapid responses to domestic emergencies and commercial callouts identically.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            {displayTowns.map((town) => (
              <Link 
                key={town}
                href={`/areas/${town}`}
                className="p-4 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-center font-bold shadow-sm hover:shadow-md block"
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

      {/* SERVICES */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-y border-neutral-100">
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

      {/* APPROACH */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-neutral-dark text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our approach to pest control</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6 text-white">1</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Inspection</h3>
              <p className="text-neutral-300">We run a highly detailed structural survey determining the true scale of the infestation, tracing complex nesting sites, and highlighting explicit building vulnerabilities.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6 text-white">2</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Treatment</h3>
              <p className="text-neutral-300">Using highly restricted, commercially graded chemistry and elite physical removal protocols, we rapidly break the biological breeding cycle whilst ensuring complete safety.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6 text-white">3</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Prevention</h3>
              <p className="text-neutral-300">We actively install long-term physical proofing arrays, seal architectural entry points, and hand over robust preventative intelligence to prevent any secondary incursions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOMESTIC AND COMMERCIAL */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">Domestic and commercial pest control</h2>
          <p className="text-lg text-neutral-body leading-relaxed mb-8">
            Pests do not discriminate between a small private residence and a massive corporate facility. We operate two heavily specialised divisions explicitly engineered to combat these differing threats. For homeowners, our residential service provides ultra-discrete, incredibly rapid emergency intervention designed rigorously around child and pet safety. Conversely, our commercial service deploys heavy-duty, legally compliant, long-term preventative management contracts specifically tailored to safeguard business operations from catastrophic health inspections and reputation damage.
          </p>
          <Link 
            href="/commercial" 
            className="inline-flex items-center text-brand-primary font-bold text-lg hover:underline group bg-brand-primary/5 px-6 py-3 rounded-full border border-brand-primary/20"
          >
            Explore Our Commercial Compliance Programmes <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-y border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-10 text-center">Why choose GEM Pest Control</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex items-start gap-4">
              <div className="text-brand-primary text-2xl mt-1">🛡️</div>
              <div>
                <h3 className="font-bold text-neutral-dark text-lg mb-1">Local Kent experience</h3>
                <p className="text-neutral-muted text-sm">Deeply embedded local knowledge allowing heavily optimised county-wide targeting.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex items-start gap-4">
              <div className="text-brand-primary text-2xl mt-1">⚡</div>
              <div>
                <h3 className="font-bold text-neutral-dark text-lg mb-1">Ultra-fast callouts</h3>
                <p className="text-neutral-muted text-sm">We provide incredibly rapid same-day and emergency response timelines.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex items-start gap-4">
              <div className="text-brand-primary text-2xl mt-1">✅</div>
              <div>
                <h3 className="font-bold text-neutral-dark text-lg mb-1">Guaranteed eradication</h3>
                <p className="text-neutral-muted text-sm">Our professional treatments definitively resolve the structural infestation permanently.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex items-start gap-4">
              <div className="text-brand-primary text-2xl mt-1">👪</div>
              <div>
                <h3 className="font-bold text-neutral-dark text-lg mb-1">Strict safety protocols</h3>
                <p className="text-neutral-muted text-sm">Every application strictly adheres to maximum child, family, and pet compliance boundaries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-12 md:py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-2 text-center">What our customers say</h2>
        <ReviewSection />
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
