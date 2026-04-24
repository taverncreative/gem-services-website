import { serviceContent } from '@/lib/data/serviceContent'
import { townData } from '@/lib/data/towns'
import { microLocationData } from '@/lib/data/microLocations'

const formatTitle = (slug: string) =>
  slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

// Deterministic hash for consistent variation
function hash(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length]
}

// ─── H2 Variations ───
// Each returns a unique heading based on the hash of town+service

type H2Set = {
  signs: string
  whyHere: string
  treatment: string
  prevention: string
  cta: string
}

export function getVariedH2s(town: string, service: string, parentTown?: string): H2Set {
  const sc = serviceContent[service]
  const td = parentTown ? townData[parentTown] : townData[town]
  const microData = parentTown
    ? microLocationData[parentTown]?.find(m => m.slug === town)
    : null

  const pestName = sc?.commonName || formatTitle(service)
  const pestLower = sc?.pestName || pestName.toLowerCase()
  const areaName = microData?.name || formatTitle(town)
  const seed = hash(town + service + (parentTown || ''))

  const propertyType = td?.propertyTypes?.[seed % (td.propertyTypes.length || 1)] || 'local properties'

  const signsVariants = [
    `Signs of ${pestLower} activity in ${areaName}`,
    `How to spot ${pestLower}s in your ${areaName} property`,
    `${pestName} warning signs ${areaName} residents should know`,
    `Recognising a ${pestLower} problem in ${areaName}`,
    `Common ${pestLower} indicators in ${propertyType.toLowerCase()}`,
  ]

  const whyHereVariants = [
    `Why ${pestLower} problems occur in ${areaName}`,
    `What makes ${areaName} vulnerable to ${pestLower}s`,
    `${pestName} pressure in ${areaName} — the local factors`,
    `Why ${areaName} homes attract ${pestLower}s`,
    `Local conditions driving ${pestLower} activity in ${areaName}`,
  ]

  const treatmentVariants = [
    `How we treat ${pestLower} problems in ${areaName}`,
    `Our ${pestLower} treatment process for ${areaName} properties`,
    `Professional ${pestLower} removal in ${areaName}`,
    `${pestName} control methods we use in ${areaName}`,
    `Step-by-step ${pestLower} treatment in ${areaName}`,
  ]

  const preventionVariants = [
    `Preventing ${pestLower} problems in your ${areaName} home`,
    `How to keep ${pestLower}s out of your ${areaName} property`,
    `${pestName} prevention tips for ${areaName} residents`,
    `Stop ${pestLower}s returning to your ${areaName} home`,
    `Proofing your ${areaName} property against ${pestLower}s`,
  ]

  const ctaVariants = [
    sc?.isEmergencyCommon ? `Emergency ${pestLower} callouts in ${areaName}` : `Need ${pestLower} help in ${areaName}?`,
    `Get fast ${pestLower} treatment in ${areaName} today`,
    `${areaName} ${pestLower} problem? We can help now`,
    `Book ${pestLower} control in ${areaName}`,
    `Same-day ${pestLower} response in ${areaName}`,
  ]

  return {
    signs: pick(signsVariants, seed),
    whyHere: pick(whyHereVariants, seed + 1),
    treatment: pick(treatmentVariants, seed + 2),
    prevention: pick(preventionVariants, seed + 3),
    cta: pick(ctaVariants, seed + 4),
  }
}

// ─── Intro Paragraph Variations ───

export function getVariedIntro(town: string, service: string, parentTown?: string): string {
  const sc = serviceContent[service]
  const td = parentTown ? townData[parentTown] : townData[town]
  const microData = parentTown
    ? microLocationData[parentTown]?.find(m => m.slug === town)
    : null

  const pestName = sc?.pestName || formatTitle(service).toLowerCase()
  const areaName = microData?.name || formatTitle(town)
  const seed = hash(town + service + (parentTown || '') + 'intro')

  const propertyRef = td?.propertyTypes?.[seed % (td.propertyTypes.length || 1)]?.toLowerCase() || 'homes'
  const localFeature = td?.localFeatures?.[seed % (td.localFeatures.length || 1)] || ''

  const intros = [
    `${areaName} residents dealing with ${pestName} problems need fast, reliable help. Our BPCA-certified team operates locally and understands the specific challenges that ${propertyRef} face in this area.${localFeature ? ` Proximity to ${localFeature.toLowerCase()} is a known factor in local pest activity.` : ''}`,

    `If you have spotted signs of ${pestName} activity in your ${areaName} property, acting quickly prevents the problem getting worse. We provide same-day callouts across ${areaName} and treat both homes and businesses.${td ? ` The ${td.geography.split('.')[0].toLowerCase()} means certain pest pressures are more common here than elsewhere in Kent.` : ''}`,

    `${pestName.charAt(0).toUpperCase() + pestName.slice(1)} infestations in ${areaName} tend to follow predictable patterns linked to local property types and geography.${microData ? ` In ${microData.name}, ${microData.character.split('.')[0].toLowerCase()}, which creates specific conditions for pest entry.` : ''} Our technicians know the area and can respond fast.`,

    `We regularly attend ${pestName} callouts in ${areaName} and the surrounding area. Each property is different — ${propertyRef} present particular vulnerabilities that our technicians are trained to identify and address on the first visit.`,

    `Dealing with ${pestName}s in ${areaName}? You are not alone — this is one of our most common callouts in the area.${td ? ` ${td.pestPressureNote.split('.')[0]}.` : ''} Our local team can usually attend same day.`,
  ]

  return pick(intros, seed)
}

// ─── CTA Variations ───

export function getVariedCTA(town: string, service: string, parentTown?: string): { heading: string; body: string } {
  const sc = serviceContent[service]
  const areaName = parentTown
    ? (microLocationData[parentTown]?.find(m => m.slug === town)?.name || formatTitle(town))
    : formatTitle(town)
  const pestName = sc?.pestName || formatTitle(service).toLowerCase()
  const seed = hash(town + service + (parentTown || '') + 'cta')

  const ctas = [
    {
      heading: `Get fast ${pestName} treatment in ${areaName}`,
      body: `Our team covers ${areaName} daily. Call now for a same-day appointment or request a free callback.`,
    },
    {
      heading: `${areaName} ${pestName} problem? We are ready`,
      body: `BPCA certified, fully insured, discreet unmarked vehicles. Phone us now on 07400 372204.`,
    },
    {
      heading: `Book ${pestName} control in ${areaName} today`,
      body: `We aim to respond within hours, not days. No call-out fee. Free, no-obligation quote available now.`,
    },
    {
      heading: `Need urgent ${pestName} help in ${areaName}?`,
      body: `Same-day service available. We arrive in an unmarked vehicle for your privacy. Call us or fill in the form.`,
    },
    {
      heading: `Stop ${pestName} damage in ${areaName} — call now`,
      body: `The longer you wait, the worse it gets. Our local technicians can usually attend today.`,
    },
  ]

  return pick(ctas, seed)
}

// ─── Section Order Variation ───
// Returns indices 0-6 in a deterministic but varied order

export function getVariedSectionOrder(town: string, service: string, parentTown?: string): number[] {
  const seed = hash(town + service + (parentTown || '') + 'order')
  // 7 sections: signs(0), whyHere(1), seasonal(2), siblings(3), treatment(4), risks(5), prevention(6)
  const orders = [
    [0, 1, 2, 4, 5, 6, 3],  // standard
    [1, 0, 4, 2, 6, 5, 3],  // why-first
    [4, 0, 1, 5, 2, 6, 3],  // treatment-first
    [0, 4, 1, 6, 2, 5, 3],  // signs → treatment → why
    [1, 4, 0, 2, 5, 6, 3],  // why → treatment → signs
    [0, 1, 4, 6, 5, 2, 3],  // signs → why → treatment → prevention
    [4, 1, 0, 5, 6, 2, 3],  // treatment → why → signs
  ]
  return pick(orders, seed)
}
