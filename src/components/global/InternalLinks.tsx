import Link from 'next/link'
import { services } from '@/lib/data/services'
import { towns, townData } from '@/lib/data/towns'
import { guides } from '@/lib/data/guides'
import { serviceContent } from '@/lib/data/serviceContent'

const formatTitle = (slug: string) =>
  slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

type Props = {
  currentService?: string
  currentTown?: string
  currentLocation?: string
  parentTown?: string
}

/**
 * Strategic internal linking mesh.
 *
 * Service pages → links to that service in EVERY town (ranking loop)
 * Town pages → links to EVERY service in that town (ranking loop)
 * Town+service pages → links to both directions
 * Guide pages → links to services AND towns
 */
export const InternalLinks = ({
  currentService,
  currentTown,
  currentLocation,
  parentTown,
}: Props) => {
  const resolveTown = parentTown || currentTown
  const td = resolveTown ? townData[resolveTown] : null

  // For service pages: link to this service in every town
  const serviceTownLinks = currentService
    ? towns
        .filter(t => t !== currentTown && t !== parentTown)
        .map(t => ({
          href: `/areas/${t}/${currentService}`,
          label: `${serviceContent[currentService]?.commonName || formatTitle(currentService)} in ${formatTitle(t)}`,
        }))
    : []

  // For town pages: link to every service in this town
  const townServiceLinks = currentTown
    ? services
        .filter(s => s !== currentService)
        .map(s => {
          const basePath = parentTown ? `/areas/${parentTown}/${currentLocation}` : `/areas/${currentTown}`
          const sc = serviceContent[s]
          return {
            href: `${basePath}/${s}`,
            label: `${sc?.commonName || formatTitle(s)} in ${formatTitle(currentTown)}`,
          }
        })
    : []

  // Nearby towns (without service — pure town links)
  const nearbyTownSlugs = td?.nearbyTowns || []
  const nearbyTowns = nearbyTownSlugs
    .filter(t => towns.includes(t) && t !== currentTown && t !== parentTown)

  // Relevant guides
  const relevantGuides = [
    ...guides.filter(g => g.relatedService === currentService),
    ...guides.filter(g => g.relatedService !== currentService),
  ].slice(0, 3)

  const serviceName = currentService
    ? (serviceContent[currentService]?.commonName || formatTitle(currentService))
    : ''

  const townName = currentTown ? formatTitle(currentTown) : ''

  return (
    <section className="py-10 px-4 bg-background-soft" aria-label="Related pages">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Service → ALL towns mesh (high SEO value) */}
        {serviceTownLinks.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-neutral-dark mb-4">
              {serviceName} Across Kent
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {serviceTownLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-primary hover:text-brand-primary-dark hover:underline text-sm font-medium py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Town → ALL services mesh (high SEO value) */}
        {townServiceLinks.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-neutral-dark mb-4">
              All Pest Control Services in {townName}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {townServiceLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-primary hover:text-brand-primary-dark hover:underline text-sm font-medium py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom row: Nearby areas + Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-200">
          {/* Nearby areas */}
          {nearbyTowns.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">Nearby Areas</h3>
              <ul className="space-y-1.5">
                {nearbyTowns.map(t => (
                  <li key={t}>
                    <Link
                      href={currentService ? `/areas/${t}/${currentService}` : `/areas/${t}`}
                      className="text-brand-primary hover:text-brand-primary-dark hover:underline text-sm font-medium"
                    >
                      {currentService ? `${serviceName} in ${formatTitle(t)}` : `Pest Control in ${formatTitle(t)}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Guides */}
          <div>
            <h3 className="text-lg font-bold text-neutral-dark mb-3">Helpful Guides</h3>
            <ul className="space-y-1.5">
              {relevantGuides.map(g => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.category}/${g.slug}`}
                    className="text-brand-primary hover:text-brand-primary-dark hover:underline text-sm font-medium"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/guides"
                  className="text-brand-primary hover:text-brand-primary-dark hover:underline text-sm font-medium"
                >
                  View All Pest Control Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
