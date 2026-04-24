import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { towns } from '@/lib/data/towns'
import { services } from '@/lib/data/services'
import { generateSEOMetadata } from '@/lib/seo/metadata'
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town, location } = await params
  if (!towns.includes(town) || !services.includes(location)) {
    return { title: 'Page Not Found | GEM Services' }
  }
  const canonicalPath = town === 'kent'
    ? `/services/${location}`
    : `/areas/${town}/${location}`
  return generateSEOMetadata({
    type: 'townService',
    service: location,
    town,
    path: canonicalPath,
  })
}

export default async function TownServicePage({ params }: Props) {
  const { town, location } = await params

  if (!towns.includes(town) || !services.includes(location)) {
    notFound()
  }

  return (
    <TownServiceLayout
      town={town}
      service={location}
    />
  )
}
