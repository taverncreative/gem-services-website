import Link from 'next/link'
import Image from 'next/image'
import { visibleServices } from '@/lib/data/services'
import { getServiceImageFilename } from '@/lib/images/sourceImage'
import { FadeIn } from '@/components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger'

const formatServiceTitle = (slug: string) => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const serviceDescriptions: Record<string, string> = {
  'rat-control': 'Safe and effective rat control for homes and businesses across Kent.',
  'mouse-control': 'Professional mouse removal and proofing services.',
  'wasp-nest-removal': 'Fast and safe wasp nest removal across Kent.',
  'bed-bug-treatment': 'Effective bed bug treatments for homes and hotels.',
  'flea-treatment': 'Complete flea control for homes and pets.',
  'cockroach-control': 'Professional cockroach treatment and prevention.',
  'bird-control': 'Humane bird proofing and deterrent systems.',
  'squirrel-removal': 'Safe squirrel removal and loft proofing.',
  'mole-control': 'Professional mole trapping and control.',
  'fly-control': 'Domestic and commercial fly control solutions.',
  'moth-control': 'Expert moth extermination for clothes and carpets.',
}

export const ServiceGrid = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-10 text-neutral-dark">Our services</h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleServices.map((slug) => {
            const filename = getServiceImageFilename(slug, 'grid')
            return (
              <StaggerItem key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group border border-neutral-100 font-sans overflow-hidden h-full"
                >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl bg-neutral-200">
                  <Image 
                    src={`/images/services/${filename}`}
                    alt={`${formatServiceTitle(slug)}`}
                    fill
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-t-xl"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl text-neutral-dark group-hover:text-brand-primary transition-colors mb-2">
                    {formatServiceTitle(slug)}
                  </h3>
                  <p className="text-base text-neutral-muted leading-relaxed line-clamp-2">
                    {serviceDescriptions[slug] || `Expert ${formatServiceTitle(slug).toLowerCase()} services and removal.`}
                  </p>
                </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
