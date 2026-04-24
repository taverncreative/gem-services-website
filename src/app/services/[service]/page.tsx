import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/data/services'
import { emergencyServices } from '@/lib/data/emergencyServices'
import { generateSEOMetadata } from '@/lib/seo/metadata'
import { getCanonicalPath } from '@/lib/seo/canonical'
import { ServiceLayout } from '@/components/layouts/ServiceLayout'
import { EmergencyServiceLayout } from '@/components/layouts/EmergencyServiceLayout'

type Props = {
  params: Promise<{ service: string }>
}

export function generateStaticParams() {
  const standardServices = services.map((service) => ({ service }))
  const emergencySlugs = emergencyServices.map((e) => ({ service: e.slug }))
  return [...standardServices, ...emergencySlugs]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params

  // Emergency service pages
  const emergencyMatch = emergencyServices.find(e => e.slug === service)
  if (emergencyMatch) {
    return {
      title: `${emergencyMatch.title} Kent | Same Day Callouts`,
      description: emergencyMatch.description,
      alternates: {
        canonical: getCanonicalPath(`/services/${service}`),
      },
    }
  }

  return generateSEOMetadata({
    type: 'service',
    service,
    path: `/services/${service}`,
  })
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params

  const emergencyMatch = emergencyServices.find(e => e.slug === service)
  if (emergencyMatch) {
    return <EmergencyServiceLayout service={emergencyMatch} />
  }

  if (!services.includes(service)) {
    notFound()
  }

  return <ServiceLayout service={service} />
}
