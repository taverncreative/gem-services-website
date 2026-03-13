import Link from 'next/link'
import Image from 'next/image'
import { getTownImageFilename } from '@/lib/images/sourceTownImage'

const targetTowns = [
  'ashford',
  'canterbury',
  'maidstone',
  'dover',
  'folkestone',
  'sevenoaks',
  'tunbridge-wells',
  'medway'
]

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

import { FadeIn } from '@/components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger'

export const HomeAreasGrid = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-10 text-neutral-dark">Areas we cover across Kent</h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {targetTowns.map((town) => (
            <StaggerItem key={town} className="h-full">
              <Link 
                href={`/areas/${town}`}
                className="group relative overflow-hidden bg-neutral-dark rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-neutral-100 flex flex-col h-48 block w-full"
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
      </div>
    </section>
  )
}
