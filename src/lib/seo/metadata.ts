import type { Metadata } from 'next'
import { serviceContent } from '@/lib/data/serviceContent'
import { townData } from '@/lib/data/towns'
import { microLocationData } from '@/lib/data/microLocations'

const SITE_NAME = 'GEM Services'
const MAX_TITLE_LENGTH = 60
const MAX_DESC_LENGTH = 155

const formatTitle = (slug: string) =>
  slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

// Truncate to max length at word boundary
function truncate(str: string, max: number): string {
  if (str.length <= max) return str
  const trimmed = str.slice(0, max)
  const lastSpace = trimmed.lastIndexOf(' ')
  return (lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed).replace(/[.,;:!?\s]+$/, '')
}

type PageType =
  | 'service'
  | 'town'
  | 'townService'
  | 'moneyPage'
  | 'microLocation'
  | 'guide'
  | 'commercial'
  | 'static'

type SEOInput = {
  type: PageType
  service?: string
  town?: string
  location?: string
  parentTown?: string
  title?: string         // for guides/static pages
  description?: string   // for guides/static pages
  path: string
}

/**
 * Generates unique, SEO-optimised metadata for every page type.
 * Ensures no duplicate titles/descriptions across the site.
 */
export function generateSEOMetadata(input: SEOInput): Metadata {
  const { type, service, town, location, parentTown, path } = input

  let title = ''
  let description = ''

  const serviceName = service ? formatTitle(service) : ''
  const townName = town ? formatTitle(town) : ''
  const locationName = location ? formatTitle(location) : ''
  const parentTownName = parentTown ? formatTitle(parentTown) : ''

  const sc = service ? serviceContent[service] : null
  const td = town ? townData[town] : parentTown ? townData[parentTown] : null
  const pestName = sc?.commonName || serviceName

  switch (type) {
    case 'service': {
      // "{Service} in Kent | Fast Local Pest Control"
      title = `${pestName} in Kent | Fast Local Pest Control`
      if (title.length > MAX_TITLE_LENGTH) {
        title = `${pestName} Kent | Local Pest Control`
      }

      const seasonal = sc?.peakSeasons?.length
        ? ` Peak season: ${sc.peakSeasons.join(' & ')}.`
        : ''
      description = `Need ${pestName.toLowerCase()} help in Kent? BPCA certified, fully insured. Same-day callouts for homes and businesses. Call 07400 372204 for a free quote.${seasonal}`
      break
    }

    case 'town': {
      // "Pest Control in {Town}, Kent | Local Experts"
      title = `Pest Control in ${townName}, Kent | Local Experts`
      if (title.length > MAX_TITLE_LENGTH) {
        title = `Pest Control ${townName} | Kent Experts`
      }

      const popNote = td?.populationBand === 'large' ? 'the wider' : ''
      description = `Local pest control covering ${popNote} ${townName} area. Fast response, BPCA certified. Rats, mice, wasps & more for homes and businesses.`
      break
    }

    case 'townService': {
      // "{Service} in {Town}, Kent | Same Day Pest Control"
      title = `${pestName} in ${townName} | Same Day Pest Control`
      if (title.length > MAX_TITLE_LENGTH) {
        title = `${pestName} ${townName} | Fast Pest Control`
      }
      if (title.length > MAX_TITLE_LENGTH) {
        title = `${pestName} in ${townName}, Kent`
      }

      description = `Got ${pestName.toLowerCase()} in ${townName}? Fast, guaranteed pest removal. Same-day available. BPCA certified, fully insured. Call now.`
      break
    }

    case 'moneyPage': {
      // High-CTR titles with emotional + urgency triggers
      title = `${pestName} ${townName} | Fast Local Pest Removal`
      if (title.length > MAX_TITLE_LENGTH) {
        title = `${pestName} ${townName} | Call Today`
      }

      description = `Need ${pestName.toLowerCase()} in ${townName}? Fast, discreet pest removal with same-day appointments. BPCA certified. Call now for a free quote.`
      break
    }

    case 'microLocation': {
      // "{Service} in {Location}, {Town} | GEM Services"
      title = `${pestName} in ${locationName}, ${parentTownName}`
      if (title.length > MAX_TITLE_LENGTH) {
        title = `${pestName} ${locationName} | ${parentTownName}`
      }
      if (title.length > MAX_TITLE_LENGTH) {
        title = `${pestName} in ${locationName}`
      }

      const microData = parentTown ? microLocationData[parentTown]?.find(m => m.slug === location) : null
      const localDetail = microData ? ` Covering ${microData.name} and surrounding areas.` : ''
      description = `${pestName} services in ${locationName}, ${parentTownName}. Fast local callouts, BPCA certified.${localDetail}`
      break
    }

    case 'guide': {
      title = input.title || 'Pest Control Guide'
      description = input.description || 'Expert pest control advice and guidance from GEM Services in Kent.'
      break
    }

    case 'commercial': {
      title = input.title || `Commercial Pest Control Kent | ${SITE_NAME}`
      description = input.description || 'Professional commercial pest control services across Kent. Restaurants, offices, warehouses and retail.'
      break
    }

    case 'static': {
      title = input.title || SITE_NAME
      description = input.description || 'Professional pest control services across Kent. Fast, discreet, BPCA certified.'
      break
    }
  }

  // Enforce length limits
  title = truncate(title, MAX_TITLE_LENGTH)
  description = truncate(description, MAX_DESC_LENGTH)

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
