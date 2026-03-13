import Link from 'next/link'
import Image from 'next/image'
import { commercialIndustries } from '@/lib/data/commercialIndustries'
import { FadeIn } from '@/components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger'

export const IndustryGrid = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-12 text-neutral-dark">
            Industries we serve
          </h2>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialIndustries.map((industry) => (
            <StaggerItem key={industry.slug} className="h-full">
              <Link 
                href={`/commercial/${industry.slug}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] border border-neutral-100 transition-all duration-300 flex flex-col overflow-hidden h-full"
              >
                <div className="relative w-full h-48 overflow-hidden bg-neutral-200">
                <Image 
                  src={`/images/commercial/${industry.slug}.jpg`}
                  alt={industry.title}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-neutral-dark mb-4 group-hover:text-brand-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-neutral-body text-sm leading-relaxed flex-grow">
                  {industry.description}
                </p>
                <div className="mt-6 font-semibold text-brand-primary inline-flex items-center text-sm">
                  View Sector <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
