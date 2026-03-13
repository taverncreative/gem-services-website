import Link from 'next/link'
import Image from 'next/image'
import { towns } from '@/lib/data/towns'
import { getTownImageFilename } from '@/lib/images/sourceTownImage'

import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger'

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const TownGrid = () => {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {[...towns].sort().map((town) => (
        <StaggerItem key={town} className="h-full w-full">
          <Link 
            href={`/areas/${town}`}
            className="group relative overflow-hidden bg-neutral-dark rounded-xl shadow-sm hover:scale-[1.02] hover:shadow-lg border border-neutral-100 transition-all duration-300 flex flex-col h-48 block w-full"
          >
            <Image 
              src={`/images/towns/${getTownImageFilename(town)}`}
              alt={`${formatTitle(town)} pest control`}
              fill
              loading="lazy"
              className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-5 w-full z-10 text-white">
              <span className="font-bold text-lg group-hover:text-brand-primary transition-colors block">
                {formatTitle(town)}
              </span>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
