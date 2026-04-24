import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { microLocations } from '@/lib/data/microLocations'
import { services } from '@/lib/data/services'
import { towns } from '@/lib/data/towns'
import { generateSEOMetadata } from '@/lib/seo/metadata'
import { TownServiceLayout } from '@/components/layouts/TownServiceLayout'

type Props = {
  params: Promise<{ town: string; location: string; service: string }>
}

export function generateStaticParams() {
  const paths: Array<{ town: string; location: string; service: string }> = []

  for (const [town, areas] of Object.entries(microLocations)) {
    if (!towns.includes(town)) continue
    for (const area of areas) {
      for (const service of services) {
        paths.push({ town, location: area, service })
      }
    }
  }

  return paths
}

const formatTitle = (slug: string) =>
  slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town, location, service } = await params
  const base = generateSEOMetadata({
    type: 'microLocation',
    service,
    town: location,
    location,
    parentTown: town,
    path: `/areas/${town}/${location}/${service}`,
  })
  // Noindex suburb-level pages until each has genuinely unique content
  return {
    ...base,
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default async function MicroLocationPage({ params }: Props) {
  const { town, location, service } = await params

  const locationAreas = microLocations[town]
  if (!locationAreas || !locationAreas.includes(location) || !services.includes(service)) {
    notFound()
  }

  const serviceName = formatTitle(service)
  const townName = formatTitle(town)

  return (
    <>
      <div className="bg-background-soft pt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link
            href={`/areas/${town}/${service}`}
            className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors bg-brand-primary/10 px-4 py-2 rounded-full"
          >
            &larr; View all {serviceName} services across {townName}
          </Link>
        </div>
      </div>

      <TownServiceLayout
        town={location}
        service={service}
        parentTown={town}
      />
    </>
  )
}
