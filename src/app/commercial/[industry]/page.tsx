import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { commercialIndustries } from '@/lib/data/commercialIndustries'
import { getCanonicalPath } from '@/lib/seo/canonical'
import { LocalBusinessSchema } from '@/components/seo/schema/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schema/ServiceSchema'
import { TrustBar } from '@/components/global/TrustBar'
import { trackEvent } from '@/lib/analytics/events'
import Image from 'next/image'

type Props = {
  params: Promise<{ industry: string }>
}

export function generateStaticParams() {
  return commercialIndustries.map((industry) => ({
    industry: industry.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const industryMatch = commercialIndustries.find(i => i.slug === resolvedParams.industry)
  
  if (!industryMatch) {
    return { title: 'Not Found' }
  }

  return {
    title: `${industryMatch.title} Kent | Commercial | GEM Services Pest Control`,
    description: industryMatch.description,
    alternates: {
      canonical: getCanonicalPath(`/commercial/${resolvedParams.industry}`),
    },
  }
}

export default async function CommercialIndustryPage({ params }: Props) {
  const resolvedParams = await params
  const industryData = commercialIndustries.find(i => i.slug === resolvedParams.industry)

  if (!industryData) {
    notFound()
  }

  const imagePath = `/images/commercial/${resolvedParams.industry}.jpg`

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema />

      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-16 lg:py-20 px-4 text-center overflow-hidden">
        <Image 
          src={imagePath}
          alt={`Commercial pest control for ${industryData.title} in Kent`}
          width={1200}
          height={700}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-neutral-dark/50 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {industryData.title} in Kent
          </h1>
          <p className="text-xl text-neutral-300 md:leading-relaxed max-w-[750px] mx-auto mb-10">
            {industryData.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link 
              href="/contact"
              className="bg-brand-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-primary-dark transition-all"
            >
              Book Commercial Survey
            </Link>
          </div>
        </div>
      </section>
      <TrustBar />

      {/* Main Content Sections */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md">
            <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Common pest risks in this industry</h2>
            <p className="text-neutral-body leading-relaxed mb-4">
              Commercial environments like yours are particularly vulnerable to sudden pest infestations due to physical size, high foot traffic, persistent food/waste availability, and numerous structural entry points.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-body">
              <li>Rodent infiltration threatening localised stock, wiring, and health safety.</li>
              <li>Insect populations multiplying fast within controlled indoor climates.</li>
              <li>Bird nesting resulting in exterior fouling and HVAC contamination.</li>
              <li>Secondary infestations causing severe reputation and compliance collapse.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md">
            <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Compliance and hygiene requirements</h2>
            <p className="text-neutral-body leading-relaxed">
              Operating a commercial entity in Kent requires strict adherence to UK health, safety, and hygiene legislation. Failure to properly manage pest risks can lead directly to Environmental Health closures, severe fines, and catastrophic brand damage. Our targeted pest control contracts provide the documented proof of due diligence and preventative action that auditors physically require.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md">
            <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Our pest management approach</h2>
            <p className="text-neutral-body leading-relaxed">
              We don't just react to problems; we help prevent them. Following an initial site survey, our BPCA-certified service will install careful monitoring stations across your premises. We pinpoint how pests are getting in and deliver targeted, discreet treatments using safe methods that minimize disruption to your business operations.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-brand-primary/10 p-8 rounded-lg border border-brand-primary/20">
            <h2 className="text-4xl font-bold mb-6 text-brand-primary text-center">Preventative pest control contracts</h2>
            <p className="text-neutral-body leading-relaxed text-center mb-8">
              A proactive, rolling commercial contract is the ultimate Defence for your business. Guarantee your compliance, ensure emergency rapid-response support, and secure complete peace of mind with GEM Services.
            </p>
            <div className="text-center">
              <Link 
                href="/contact"
                className="inline-block bg-brand-primary text-white px-8 py-4 rounded-md font-bold hover:bg-brand-primary-dark transition-all"
              >
                Assemble Your Commercial Contract
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}
