import Link from 'next/link'
import { towns } from '@/lib/data/towns'

export const CoverageMap = () => {
  const popularTowns = towns.slice(0, 10)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Areas we cover</h2>
          <p className="text-neutral-muted mb-10">
            We provide professional pest control services across Kent from local bases.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {popularTowns.map((town) => (
              <Link 
                key={town}
                href={`/areas/${town}`}
                className="px-5 py-2 border border-neutral-200 rounded-full hover:border-brand-primary hover:text-brand-primary font-medium text-sm transition-colors capitalize"
              >
                {town.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>

          <Link 
            href="/areas"
            className="inline-flex items-center text-brand-primary font-bold hover:text-brand-primary-dark hover:underline transition-colors"
          >
            View Complete Coverage Area
            <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
