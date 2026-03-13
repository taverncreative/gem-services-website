import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/data/services'
import { emergencyServices } from '@/lib/data/emergencyServices'

type Props = {
  params: Promise<{ service: string }>
}

export function generateStaticParams() {
  const standardServices = services.map((service) => ({ service }))
  const emergencySlugs = emergencyServices.map((e) => ({ service: e.slug }))
  
  return [...standardServices, ...emergencySlugs]
}

import { getCanonicalPath } from '@/lib/seo/canonical'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  
  // Check if it's an emergency service
  const emergencyMatch = emergencyServices.find(e => e.slug === resolvedParams.service)
  
  if (emergencyMatch) {
    return {
      title: `${emergencyMatch.title} Kent | Same Day Callouts | GEM Services Pest Control`,
      description: emergencyMatch.description,
      alternates: {
        canonical: getCanonicalPath(`/services/${resolvedParams.service}`),
      },
    }
  }

  // Standard service logic
  const service = resolvedParams.service.replace(/-/g, ' ')
  
  const title = service
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return {
    title: `${title} in Kent | GEM Services Pest Control`,
    description: `Professional ${service} services across Kent. Fast response for homes and businesses.`,
    alternates: {
      canonical: getCanonicalPath(`/services/${resolvedParams.service}`),
    },
  }
}

import { ServiceLayout } from '@/components/layouts/ServiceLayout'
import { EmergencyServiceLayout } from '@/components/layouts/EmergencyServiceLayout'

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params

  const emergencyMatch = emergencyServices.find(e => e.slug === resolvedParams.service)

  if (emergencyMatch) {
    return <EmergencyServiceLayout service={emergencyMatch} />
  }

  if (!services.includes(resolvedParams.service)) {
    notFound()
  }

  return (
    <>
      <ServiceLayout service={resolvedParams.service} />
    </>
  )
}
