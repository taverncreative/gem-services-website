import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { towns } from '@/lib/data/towns'
import { generateSEOMetadata } from '@/lib/seo/metadata'
import { TownLayout } from '@/components/layouts/TownLayout'

type Props = {
  params: Promise<{ town: string }>
}

export function generateStaticParams() {
  return towns.map((town) => ({ town }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town } = await params
  return generateSEOMetadata({
    type: 'town',
    town,
    path: `/areas/${town}`,
  })
}

export default async function TownPage({ params }: Props) {
  const { town } = await params

  if (!towns.includes(town)) {
    notFound()
  }

  return <TownLayout town={town} />
}
