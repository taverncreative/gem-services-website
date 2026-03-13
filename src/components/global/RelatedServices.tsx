import Link from 'next/link'
import { towns } from '@/lib/data/towns'

type Props = {
  serviceSlug: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const RelatedServices = ({ serviceSlug }: Props) => {
  const serviceName = formatTitle(serviceSlug)
  const displayTowns = towns.slice(0, 5)
  
  return (
    <div className="bg-brand-primary/5 p-8 rounded-xl border border-brand-primary/10 mt-12 mb-8">
      <h3 className="text-xl font-bold mb-4 text-brand-primary">Related Pest Control Services</h3>
      <ul className="space-y-3 font-medium text-neutral-dark">
        <li>
          <Link href={`/services/${serviceSlug}`} className="text-brand-primary hover:underline font-semibold">
            {serviceName}
          </Link>
        </li>
        {displayTowns.map((town) => (
          <li key={town}>
            <Link href={`/areas/${town}/${serviceSlug}`} className="text-brand-primary hover:underline">
              {serviceName} in {formatTitle(town)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
