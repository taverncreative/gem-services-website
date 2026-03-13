import Link from 'next/link'
import { towns } from '@/lib/data/towns'

type Props = {
  town: string
  service: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const NearbyAreas = ({ town, service }: Props) => {
  const serviceName = formatTitle(service)
  // Simple mock: grab some areas excluding the current one
  const displayTowns = towns.filter(t => t !== town).slice(0, 10)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Other {serviceName.toLowerCase()} coverage areas</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {displayTowns.map((t) => (
            <Link 
              key={t}
              href={`/areas/${t}/${service}`}
              className="px-4 py-2 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-sm font-medium capitalize shadow-sm hover:shadow-md"
            >
              {t.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
