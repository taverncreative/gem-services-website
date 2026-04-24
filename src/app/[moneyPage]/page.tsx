import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/lib/data/services'
import { towns } from '@/lib/data/towns'
import { generateSEOMetadata } from '@/lib/seo/metadata'
import { MoneyPageLayout } from '@/components/layouts/MoneyPageLayout'

type Props = {
  params: Promise<{ moneyPage: string }>
}

type MoneyPageMatch = {
  service: string
  town: string
}

function parseMoneyPage(slug: string): MoneyPageMatch | null {
  for (const service of services) {
    for (const townSlug of towns) {
      if (slug === `${service}-${townSlug}`) {
        return { service, town: townSlug }
      }
    }
  }
  return null
}

export function generateStaticParams() {
  const params: Array<{ moneyPage: string }> = []
  const topServices = services.slice(0, 6)
  const topTowns = towns.filter(t => t !== 'kent')

  for (const service of topServices) {
    for (const town of topTowns) {
      params.push({ moneyPage: `${service}-${town}` })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { moneyPage } = await params
  const match = parseMoneyPage(moneyPage)
  if (!match) return {}

  return generateSEOMetadata({
    type: 'moneyPage',
    service: match.service,
    town: match.town,
    path: `/${moneyPage}`,
  })
}

export default async function MoneyPage({ params }: Props) {
  const { moneyPage } = await params
  const match = parseMoneyPage(moneyPage)

  if (!match) {
    notFound()
  }

  return <MoneyPageLayout town={match.town} service={match.service} />
}
