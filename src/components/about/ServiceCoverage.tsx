import Link from 'next/link'
import { towns } from '@/lib/data/towns'

export const ServiceCoverage = () => {
  // Grab a few towns to highlight
  const highlightTowns = towns.slice(0, 8)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Service coverage across Kent</h2>
        <p className="text-lg text-neutral-muted mb-8">
          Based centrally, we can reach properties across the entire county rapidly. We provide comprehensive coverage to homes and businesses in major local areas.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {highlightTowns.map((town) => (
            <Link 
              key={town}
              href={`/areas/${town}`}
              className="px-4 py-2 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-sm font-medium capitalize shadow-sm hover:shadow-md"
            >
              {town.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>

        <Link 
          href="/areas"
          className="text-brand-primary font-bold hover:underline inline-flex items-center"
        >
          View All Areas <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
