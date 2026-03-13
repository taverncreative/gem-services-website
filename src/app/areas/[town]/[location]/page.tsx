import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { towns } from '@/lib/data/towns'
import { services } from '@/lib/data/services'
import { TownServiceLayout } from '@/components/layouts/TownServiceLayout'

type Props = {
  params: Promise<{ town: string; location: string }>
}

export function generateStaticParams() {
  const paths: Array<{ town: string; location: string }> = []
  for (const town of towns) {
    for (const service of services) {
      paths.push({ town, location: service })
    }
  }
  return paths
}

import { getCanonicalPath } from '@/lib/seo/canonical'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const town = resolvedParams.town.replace(/-/g, ' ')
  const service = resolvedParams.location.replace(/-/g, ' ')
  
  const townTitle = town.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const serviceTitle = service.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return {
    title: `${serviceTitle} in ${townTitle} | GEM Services Pest Control`,
    description: `Professional ${service} in ${town}. Fast pest control for homes and businesses.`,
    alternates: {
      canonical: getCanonicalPath(`/areas/${resolvedParams.town}/${resolvedParams.location}`),
    },
  }
}

export default async function TownServicePage({ params }: Props) {
  const resolvedParams = await params

  if (!towns.includes(resolvedParams.town) || !services.includes(resolvedParams.location)) {
    notFound()
  }

  return (
    <>
      <TownServiceLayout 
        town={resolvedParams.town} 
        service={resolvedParams.location} 
      />
    </>
  )
}
