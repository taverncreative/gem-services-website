import Link from 'next/link'
import { TownServiceHero } from '@/components/locations/TownServiceHero'
import { LocalAreaContent } from '@/components/locations/LocalAreaContent'
import { TownServiceFAQs } from '@/components/locations/TownServiceFAQs'
import { ReviewSection } from '@/components/global/ReviewSection'
import { ReviewSchema } from '@/components/seo/schema/ReviewSchema'
import { LazySection } from '@/components/global/LazySection'
import { services } from '@/lib/data/services'
import { towns } from '@/lib/data/towns'
import { RecentJobs } from '@/components/global/RecentJobs'
import { TownGuideLinks } from '@/components/global/TownGuideLinks'

type Props = {
  town: string
  service: string
  parentTown?: string
}

import { getServiceImageFilename } from '@/lib/images/sourceImage'

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const TownServiceLayout = ({ town, service, parentTown }: Props) => {
  const relatedServices = services.filter(s => s !== service).slice(0, 8)
  const nearbyTowns = towns.filter(t => t !== town && t !== parentTown).slice(0, 8)
  
  const basePath = parentTown ? `/areas/${parentTown}/${town}` : `/areas/${town}`
  const townName = formatTitle(town)
  const serviceName = formatTitle(service)

  const filename = getServiceImageFilename(service, 'town')
  const imagePath = `/images/services/${filename}`

  return (
    <div>
      <TownServiceHero 
        title={`${serviceName} in ${townName}`}
        subtitle={`Professional ${serviceName.toLowerCase()} services across ${townName}. Fast response for homes and businesses. Fully insured and BPCA certified experts.`}
        image={imagePath}
        town={town}
        service={service}
      />
      <LocalAreaContent town={town} service={service} parentTown={parentTown} />
      <RecentJobs town={town} service={service} />
      <TownServiceFAQs town={town} service={service} />
      <LazySection>
        <TownGuideLinks serviceSlug={service} />
      </LazySection>
      <ReviewSchema />
      <ReviewSection />
      
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
    </div>
  )
}

