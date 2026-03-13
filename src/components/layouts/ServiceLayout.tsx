import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceOverview } from '@/components/services/ServiceOverview'
import { WhyProfessional } from '@/components/services/WhyProfessional'
import { SignsSection } from '@/components/services/SignsSection'
import { TreatmentProcess } from '@/components/services/TreatmentProcess'
import { ServiceAreas } from '@/components/services/ServiceAreas'
import { ServiceFAQs } from '@/components/services/ServiceFAQs'
import { ReviewSection } from '@/components/global/ReviewSection'
import { ReviewSchema } from '@/components/seo/schema/ReviewSchema'
import { ServiceCTA } from '@/components/services/ServiceCTA'
import { TownGuideLinks } from '@/components/global/TownGuideLinks'
import { LazySection } from '@/components/global/LazySection'

type Props = {
  service: string
}

import { getServiceImageFilename } from '@/lib/images/sourceImage'

export const ServiceLayout = ({ service }: Props) => {
  const title = service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  
  const filename = getServiceImageFilename(service, 'hero')
  const imagePath = `/images/services/${filename}`

  return (
    <div>
      <ServiceHero 
        title={`Professional ${title} in Kent`}
        subtitle={`Fast and discreet ${title.toLowerCase()} for homes and businesses. Our verified experts are ready to resolve your issue safely today.`}
        image={imagePath}
        service={service}
      />
      <ServiceOverview service={service} />
      <SignsSection service={service} />
      <TreatmentProcess service={service} />
      <WhyProfessional service={service} />
      <ServiceAreas service={service} />
      <LazySection>
        <TownGuideLinks serviceSlug={service} />
      </LazySection>
      <ServiceFAQs service={service} />
      <ReviewSchema />
      <ReviewSection />
      <ServiceCTA />
    </div>
  )
}
