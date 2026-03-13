import Link from 'next/link'
import { towns } from '@/lib/data/towns'

type Props = {
  service: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const ServiceAreas = ({ service }: Props) => {
  const serviceName = formatTitle(service)
  const displayTowns = towns.slice(0, 8)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{serviceName} across Kent</h2>
        <p className="text-neutral-muted mb-10 max-w-3xl mx-auto">
          We provide rapid {serviceName.toLowerCase()} response across Kent. Find your local area below.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 text-left">
          {displayTowns.map((town) => (
            <Link 
              key={town}
              href={`/areas/${town}/${service}`}
              className="p-4 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-[15px] font-medium shadow-sm hover:shadow-md block text-center"
            >
              {serviceName} {town.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Link>
          ))}
        </div>

        <Link 
          href="/areas"
          className="text-brand-primary font-bold hover:underline"
        >
          View All Coverage Areas &rarr;
        </Link>
      </div>
    </section>
  )
}
