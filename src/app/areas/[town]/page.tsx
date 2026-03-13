import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { towns } from '@/lib/data/towns'
import { TownLayout } from '@/components/layouts/TownLayout'

type Props = {
  params: Promise<{ town: string }>
}

export function generateStaticParams() {
  return towns.map((town) => ({
    town: town,
  }))
}

import { getCanonicalPath } from '@/lib/seo/canonical'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const town = resolvedParams.town.replace(/-/g, ' ')
  
  const title = town
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return {
    title: `Pest Control in ${title} | GEM Services Pest Control`,
    description: `Professional pest control services in ${title}. Fast response for homes and businesses.`,
    alternates: {
      canonical: getCanonicalPath(`/areas/${resolvedParams.town}`),
    },
  }
}

export default async function TownPage({ params }: Props) {
  const resolvedParams = await params
  
  if (!towns.includes(resolvedParams.town)) {
    notFound()
  }

  return (
    <>
      <TownLayout town={resolvedParams.town} />
    </>
  )
}
