import { TownHero } from '@/components/locations/TownHero'
import { TownAuthorityContent } from '@/components/locations/TownAuthorityContent'
import { TownServices } from '@/components/locations/TownServices'
import { TownFAQs } from '@/components/locations/TownFAQs'
import { ReviewSection } from '@/components/global/ReviewSection'
import { ReviewSchema } from '@/components/seo/schema/ReviewSchema'
import { TownCTA } from '@/components/locations/TownCTA'
import { RecentJobs } from '@/components/global/RecentJobs'
import { getTownImageFilename } from '@/lib/images/sourceTownImage'

type Props = {
  town: string
}

export const TownLayout = ({ town }: Props) => {
  const townName = town.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  const imagePath = `/images/towns/${getTownImageFilename(town)}`

  return (
    <div>
      <TownHero 
        title={`Pest Control in ${townName}`}
        subtitle={`Professional pest control services across ${townName}. Fast response for homes and businesses. Fully insured and BPCA certified experts.`}
        image={imagePath}
        town={town}
      />
      <TownAuthorityContent town={town} />
      <RecentJobs town={town} />
      <TownServices town={town} />
      <TownFAQs town={town} />
      <ReviewSchema />
      <ReviewSection />
      <TownCTA town={town} />
    </div>
  )
}
