import Link from 'next/link'
import { serviceContent } from '@/lib/data/serviceContent'
import { towns, townData } from '@/lib/data/towns'

type Props = {
  serviceSlug: string
}

const fmt = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

/**
 * Blog → Service funnel CTA.
 * Links to relevant service page + top town pages.
 * Minimum 6 internal links with keyword-rich anchors.
 */
export const GuideFunnel = ({ serviceSlug }: Props) => {
  const sc = serviceContent[serviceSlug]
  const pestName = sc?.commonName || fmt(serviceSlug)
  const topTowns = towns.filter(t => t !== 'kent').slice(0, 4)

  return (
    <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-8 my-12">
      <h3 className="text-2xl font-bold text-neutral-dark mb-3">
        Need Professional {pestName} Help?
      </h3>
      <p className="text-neutral-body mb-6">
        If you are dealing with {sc?.pestName || pestName.toLowerCase()}s, do not wait for the problem to get worse.
        Our BPCA-certified team provides fast, guaranteed treatment across Kent.
      </p>

      {/* Primary CTA */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <Link
          href={`/services/${serviceSlug}`}
          className="bg-brand-primary text-white px-6 py-3 rounded-md font-bold text-center hover:bg-brand-primary-dark transition-colors"
        >
          {pestName} Services
        </Link>
        <a
          href="tel:07400372204"
          className="bg-neutral-dark text-white px-6 py-3 rounded-md font-bold text-center hover:bg-neutral-body transition-colors"
        >
          Call 07400 372204
        </a>
      </div>

      {/* Town links with keyword anchors */}
      <div className="border-t border-brand-primary/10 pt-4">
        <p className="text-sm font-bold text-neutral-dark mb-3">{pestName} near you:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {topTowns.map(t => (
            <Link
              key={t}
              href={`/areas/${t}/${serviceSlug}`}
              className="text-brand-primary hover:text-brand-primary-dark hover:underline text-sm font-medium"
            >
              {pestName.toLowerCase()} in {townData[t]?.name || fmt(t)}
            </Link>
          ))}
          <Link
            href="/areas"
            className="text-brand-primary hover:text-brand-primary-dark hover:underline text-sm font-medium"
          >
            View all areas
          </Link>
        </div>
      </div>
    </div>
  )
}
