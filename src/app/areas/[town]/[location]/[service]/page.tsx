import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { microLocations } from '@/lib/data/microLocations'
import { services } from '@/lib/data/services'
import { towns } from '@/lib/data/towns'
import { TownServiceLayout } from '@/components/layouts/TownServiceLayout'

type Props = {
  params: Promise<{ town: string; location: string; service: string }>
}

export function generateStaticParams() {
  const paths: Array<{ town: string; location: string; service: string }> = []
  
  for (const [town, areas] of Object.entries(microLocations)) {
    if (!towns.includes(town)) continue;
    for (const area of areas) {
      for (const service of services) {
        paths.push({ town, location: area, service })
      }
    }
  }
  
  return paths
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

import { getCanonicalPath } from '@/lib/seo/canonical'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const { town, location, service } = resolvedParams
  
  const townName = formatTitle(town)
  const areaName = formatTitle(location)
  const serviceName = formatTitle(service)

  return {
    title: `${serviceName} in ${areaName}, ${townName} | GEM Services Pest Control`,
    description: `Professional ${serviceName.toLowerCase()} in ${areaName}, ${townName}. Fast pest control callouts for homes and businesses.`,
    alternates: {
      canonical: getCanonicalPath(`/areas/${town}/${location}/${service}`),
    },
  }
}

export default async function MicroLocationPage({ params }: Props) {
  const resolvedParams = await params
  const { town, location, service } = resolvedParams

  const locationAreas = microLocations[town]

  if (!locationAreas || !locationAreas.includes(location) || !services.includes(service)) {
    notFound()
  }

  const townName = formatTitle(town)
  const areaName = formatTitle(location)
  const serviceName = formatTitle(service)

  return (
    <>
      
      {/* Contextual Backlink to Primary Location */}
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
