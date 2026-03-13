import Link from 'next/link'
import Image from 'next/image'
import { guides } from '@/lib/data/guides'
import { FadeIn } from '@/components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger'

export const GuidesPromo = () => {
  const latestGuides = guides.slice(0, 3)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-neutral-dark">Pest control guides & advice</h2>
            <p className="text-neutral-500 text-lg">Learn how to explicitly spot and proactively prevent common pest issues early.</p>
          </div>
          <Link href="/guides" className="hidden md:inline-flex font-bold text-brand-primary hover:text-brand-primary-dark items-center gap-2 group">
            View All Guides <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {latestGuides.map((guide) => (
            <StaggerItem key={guide.slug} className="h-full">
              <Link 
                href={`/guides/${guide.category}/${guide.slug}`} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-neutral-100 group flex flex-col h-full"
              >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image 
                  src={guide.image} 
                  alt={guide.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-primary mb-3 block">
                  {guide.category.replace('-', ' ')}
                </span>
                <h3 className="font-bold text-xl mb-3 text-neutral-dark group-hover:text-brand-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-neutral-muted line-clamp-3 leading-relaxed mb-4">
                  {guide.intro}
                </p>
                <div className="mt-auto pt-4 border-t border-neutral-100 text-sm font-semibold text-neutral-500 flex justify-between items-center group-hover:text-brand-primary transition-colors">
                  Read Full Article
                  <span className="text-brand-primary group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn className="mt-8 md:hidden text-center" delay={0.2}>
           <Link href="/guides" className="font-bold text-brand-primary hover:text-brand-primary-dark inline-flex items-center gap-2 group">
            View All Guides <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
