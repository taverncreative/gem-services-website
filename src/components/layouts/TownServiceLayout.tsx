import Link from 'next/link'
import { TownServiceHero } from '@/components/locations/TownServiceHero'
import { LocalAreaContent } from '@/components/locations/LocalAreaContent'
import { TownServiceFAQs } from '@/components/locations/TownServiceFAQs'
import { ReviewSection } from '@/components/global/ReviewSection'
import { ReviewSchema } from '@/components/seo/schema/ReviewSchema'
import { LazySection } from '@/components/global/LazySection'
import { services } from '@/lib/data/services'
import { towns, townData } from '@/lib/data/towns'
import { microLocationData } from '@/lib/data/microLocations'
import { RecentJobs } from '@/components/global/RecentJobs'
import { TownGuideLinks } from '@/components/global/TownGuideLinks'
import { serviceContent } from '@/lib/data/serviceContent'
import { InternalLinks } from '@/components/global/InternalLinks'
import { MidPageTrust } from '@/components/global/MidPageTrust'

type Props = {
  town: string
  service: string
  parentTown?: string
}

import { getServiceImageFilename } from '@/lib/images/sourceImage'

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

// Deterministic hash to vary layout per page
function simpleHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}

export const TownServiceLayout = ({ town, service, parentTown }: Props) => {
  const relatedServices = services.filter(s => s !== service).slice(0, 8)
  const nearbyTowns = towns.filter(t => t !== town && t !== parentTown).slice(0, 8)

  const basePath = parentTown ? `/areas/${parentTown}/${town}` : `/areas/${town}`
  const townName = formatTitle(town)
  const serviceName = formatTitle(service)

  const filename = getServiceImageFilename(service, 'town')
  const imagePath = `/images/services/${filename}`

  const sc = serviceContent[service]

  // Location-aware subtitle with unique content per page
  const td = parentTown ? townData[parentTown] : townData[town]
  const microData = parentTown
    ? microLocationData[parentTown]?.find(m => m.slug === town)
    : null

  const localDetail = microData
    ? ` Covering ${microData.name} and surrounding ${formatTitle(parentTown || town)} areas.`
    : td?.localFeatures?.[0]
      ? ` Local to ${td.localFeatures[0].toLowerCase()}.`
      : ''

  const subtitle = sc
    ? `${sc.commonName} causing problems in ${townName}? We provide fast, professional ${sc.pestName} control for homes and businesses.${localDetail} BPCA certified.`
    : `Professional ${serviceName.toLowerCase()} services across ${townName}.${localDetail} Fast response, fully insured, BPCA certified.`

  // Deterministic layout variant based on town + service combination
  // 7 variants to maximise structural uniqueness across pages
  const variant = simpleHash(town + service + (parentTown || '')) % 7

  const contentSection = <LocalAreaContent town={town} service={service} parentTown={parentTown} />
  const jobsSection = <RecentJobs town={parentTown || town} service={service} />
  const faqsSection = <TownServiceFAQs town={town} service={service} parentTown={parentTown} />
  const reviewsSection = <><ReviewSchema /><ReviewSection /></>
  const guidesSection = (
    <LazySection>
      <TownGuideLinks serviceSlug={service} />
    </LazySection>
  )

  const trustSection = <MidPageTrust />

  const renderVariant = () => {
    switch (variant) {
      case 0: return <>{contentSection}{trustSection}{jobsSection}{faqsSection}{reviewsSection}{guidesSection}</>
      case 1: return <>{faqsSection}{contentSection}{trustSection}{reviewsSection}{jobsSection}{guidesSection}</>
      case 2: return <>{contentSection}{reviewsSection}{trustSection}{faqsSection}{jobsSection}{guidesSection}</>
      case 3: return <>{reviewsSection}{contentSection}{trustSection}{jobsSection}{faqsSection}{guidesSection}</>
      case 4: return <>{contentSection}{faqsSection}{trustSection}{jobsSection}{guidesSection}{reviewsSection}</>
      case 5: return <>{jobsSection}{contentSection}{trustSection}{faqsSection}{reviewsSection}{guidesSection}</>
      case 6: return <>{faqsSection}{reviewsSection}{trustSection}{contentSection}{jobsSection}{guidesSection}</>
      default: return <>{contentSection}{trustSection}{jobsSection}{faqsSection}{reviewsSection}{guidesSection}</>
    }
  }

  return (
    <div>
      <TownServiceHero
        title={`${serviceName} in ${townName}`}
        subtitle={subtitle}
        image={imagePath}
        town={town}
        service={service}
      />

      {renderVariant()}

      <LazySection>
        <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft" aria-label="Other pest control services">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-10 text-neutral-dark">Other Pest Control Services in {formatTitle(town)}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left mb-10">
              {relatedServices.map((s) => (
                <Link
                  key={s}
                  href={`${basePath}/${s}`}
                  className="p-4 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-[15px] font-medium shadow-sm hover:shadow-md text-center block"
                >
                  {formatTitle(s)} {formatTitle(town)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        <section className="py-12 md:py-16 lg:py-20 px-4" aria-label="Nearby service areas">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-10 text-neutral-dark">{serviceName} in Nearby Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
              {nearbyTowns.map((t) => (
                <Link
                  key={t}
                  href={`/areas/${t}/${service}`}
                  className="p-4 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-[15px] font-medium shadow-sm hover:shadow-md text-center block"
                >
                  {serviceName} {formatTitle(t)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      <InternalLinks
        currentService={service}
        currentTown={town}
        currentLocation={town}
        parentTown={parentTown}
      />
    </div>
  )
}
