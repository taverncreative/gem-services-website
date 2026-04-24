import Link from 'next/link'
import { townData } from '@/lib/data/towns'
import { visibleServices } from '@/lib/data/services'
import { serviceContent } from '@/lib/data/serviceContent'

type Props = {
  town: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const TownAuthorityContent = ({ town }: Props) => {
  const td = townData[town]
  const townName = td?.name || formatTitle(town)
  const nearbyTowns = td?.nearbyTowns?.slice(0, 3) || []

  // Pick the top 4 most relevant services to link to
  const topServices = visibleServices.slice(0, 4)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section 1: Local geography and pest context */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Pest control in {townName}</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            {td && <p>{td.geography}</p>}
            {td && <p>{td.pestPressureNote}</p>}
            {!td && (
              <p>
                As a BPCA-certified pest control service, we provide fast, reliable callouts across {townName} for homes and businesses.
                We understand the local area and respond quickly to all pest emergencies.
              </p>
            )}
          </div>
        </div>

        {/* Section 2: Common pest problems — links to services */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Common pest problems in {townName}</h2>
          <div className="prose prose-lg text-neutral-body max-w-none mb-8">
            <p>
              The most common callouts we attend in {townName} include rodent control, wasp nest removal, and insect treatments.
              Each pest requires a different approach — follow the links below for details on how we treat specific problems in your area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topServices.map(service => {
              const sc = serviceContent[service]
              return (
                <Link
                  key={service}
                  href={`/areas/${town}/${service}`}
                  className="p-5 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-neutral-dark group-hover:text-brand-primary transition-colors mb-2">
                    {sc?.commonName || formatTitle(service)} in {townName}
                  </h3>
                  <p className="text-sm text-neutral-body line-clamp-2">
                    {sc?.residentialRisks?.split('.')[0] || `Professional ${formatTitle(service).toLowerCase()} services`}.
                  </p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Section 3: Property types */}
        {td?.propertyTypes && td.propertyTypes.length > 0 && (
          <div>
            <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Properties we service in {townName}</h2>
            <div className="prose prose-lg text-neutral-body max-w-none mb-6">
              <p>{td.propertyNote}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {td.propertyTypes.map((pt, idx) => (
                <span key={idx} className="bg-background-soft text-neutral-dark text-sm font-medium px-4 py-2 rounded-full border border-neutral-100">
                  {pt}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Residential and commercial */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Residential and commercial pest control</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              We treat homes and businesses across {townName} with the same level of care. For homeowners, we provide discreet, effective treatments — our vehicle is unmarked on request. For businesses, we offer one-off treatments and ongoing pest management contracts to keep you compliant and pest-free.
            </p>
            <p>
              If you run a food business, hotel, or retail premises in {townName}, a proactive pest management plan protects your reputation and keeps Environmental Health happy. <Link href="/commercial" className="font-semibold text-brand-primary hover:underline">Learn about our commercial services</Link>.
            </p>
          </div>
        </div>

        {/* Section 5: Nearby areas */}
        {nearbyTowns.length > 0 && (
          <div className="bg-background-soft p-10 rounded-xl border border-neutral-100 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-neutral-dark">Coverage beyond {townName}</h2>
            <div className="prose prose-lg text-neutral-body max-w-none">
              <p>
                We cover {townName} and the surrounding areas, including{' '}
                {nearbyTowns.map((t, idx) => (
                  <span key={t}>
                    <Link href={`/areas/${t}`} className="font-semibold text-brand-primary hover:underline">
                      {formatTitle(t)}
                    </Link>
                    {idx < nearbyTowns.length - 2 ? ', ' : idx === nearbyTowns.length - 2 ? ' and ' : ''}
                  </span>
                ))}.
              </p>
              <p className="mt-4 mb-0">
                <Link href="/areas" className="font-bold text-lg text-brand-primary hover:underline group inline-flex items-center">
                  View all areas we cover <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
