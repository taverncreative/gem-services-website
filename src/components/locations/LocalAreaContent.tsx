import Link from 'next/link'
import { microLocationData } from '@/lib/data/microLocations'
import { townData } from '@/lib/data/towns'
import { serviceContent } from '@/lib/data/serviceContent'
import { guides } from '@/lib/data/guides'
import { getVariedH2s, getVariedIntro, getVariedCTA, getVariedSectionOrder } from '@/lib/seo/contentVariation'

type Props = {
  town: string
  service: string
  parentTown?: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const LocalAreaContent = ({ town, service, parentTown }: Props) => {
  const townName = formatTitle(town)
  const sc = serviceContent[service]
  const td = parentTown ? townData[parentTown] : townData[town]
  const microData = parentTown && microLocationData[parentTown]
    ? microLocationData[parentTown].find(m => m.slug === town)
    : null

  const relevantGuide = guides.find(g => g.relatedService === service)
  const siblings = parentTown && microLocationData[parentTown]
    ? microLocationData[parentTown].filter(a => a.slug !== town).slice(0, 2)
    : []

  const pestName = sc?.commonName || formatTitle(service)
  const areaName = microData?.name || townName
  const parentName = parentTown ? formatTitle(parentTown) : null

  // Get varied content
  const h2s = getVariedH2s(town, service, parentTown)
  const intro = getVariedIntro(town, service, parentTown)
  const ctaContent = getVariedCTA(town, service, parentTown)
  const sectionOrder = getVariedSectionOrder(town, service, parentTown)

  // Build sections as an array, render in varied order
  const sections: Record<number, React.ReactNode> = {}

  // Section 0: Signs
  if (sc?.signs && sc.signs.length > 0) {
    sections[0] = (
      <div key="signs">
        <h2 className="text-4xl font-bold mb-6 text-neutral-dark">{h2s.signs}</h2>
        <div className="prose prose-lg text-neutral-body max-w-none mb-8">
          <p>
            Knowing what to look for is the first step to dealing with a {sc.pestName} problem.
            {td ? ` In ${areaName}, ${td.propertyTypes.slice(0, 2).join(' and ').toLowerCase()} are common, and each has different vulnerabilities.` : ''}
            {' '}Here are the key signs to watch for:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sc.signs.map((s, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-neutral-100 shadow-sm">
              <h3 className="font-bold text-neutral-dark mb-2 text-base">{s.sign}</h3>
              <p className="text-sm text-neutral-body leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Section 1: Why here
  sections[1] = (
    <div key="why-here">
      <h2 className="text-4xl font-bold mb-6 text-neutral-dark">{h2s.whyHere}</h2>
      <div className="prose prose-lg text-neutral-body max-w-none">
        {sc && <p>{sc.behavior}</p>}
        {td && (
          <p>
            {td.pestPressureNote}
            {td.localFeatures.length > 0 && (
              <> Local features like {td.localFeatures.slice(0, 2).join(' and ')} influence where {sc?.pestName || 'pest'}s are most active in the area.</>
            )}
          </p>
        )}
        {microData && (
          <p>
            {microData.character} Properties here are {microData.predominantProperties.toLowerCase()}.
            {microData.localFeature && <> {microData.localFeature} can influence pest activity in the immediate area.</>}
          </p>
        )}
      </div>
    </div>
  )

  // Section 2: Seasonal
  if (sc?.seasonalExplanation) {
    sections[2] = (
      <div key="seasonal" className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-2 text-neutral-dark">Seasonal pattern in {areaName}</h3>
        <p className="text-neutral-body">{sc.seasonalExplanation}</p>
      </div>
    )
  }

  // Section 3: Siblings / wider area
  if (parentTown && siblings.length > 0) {
    sections[3] = (
      <div key="siblings" className="bg-brand-primary/5 p-6 rounded-xl border-l-4 border-brand-primary">
        <h3 className="text-xl font-bold mb-2">Covering the wider {parentName} area</h3>
        <p className="text-neutral-body">
          Our team works across the {parentName} area, so we are never far away.
          Alongside {areaName}, we also service <strong>{siblings[0].name}</strong>{siblings[1] && <> and <strong>{siblings[1].name}</strong></>} for {sc?.pestName || 'pest'} problems.
        </p>
      </div>
    )
  }

  // Section 4: Treatment
  if (sc?.treatmentSteps && sc.treatmentSteps.length > 0) {
    sections[4] = (
      <div key="treatment">
        <h2 className="text-4xl font-bold mb-6 text-neutral-dark">{h2s.treatment}</h2>
        <div className="space-y-4">
          {sc.treatmentSteps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-bold text-neutral-dark text-lg mb-1">{step.step}</h3>
                <p className="text-neutral-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        {sc.treatmentDuration && (
          <p className="mt-6 text-sm text-neutral-muted italic">{sc.treatmentDuration}</p>
        )}
      </div>
    )
  }

  // Section 5: Health risks
  if (sc?.healthRisks && sc.healthRisks.length > 0 && sc.urgencyLevel !== 'low') {
    sections[5] = (
      <div key="risks" className="bg-red-50 border border-red-200 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-3 text-red-900">Health and safety risks in {areaName}</h3>
        <ul className="space-y-2">
          {sc.healthRisks.map((risk, idx) => (
            <li key={idx} className="flex gap-2 items-start text-neutral-body">
              <span className="text-red-500 mt-1 flex-shrink-0">&#x26A0;</span>
              <span>{risk}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // Section 6: Prevention
  if (sc?.preventionTips && sc.preventionTips.length > 0) {
    sections[6] = (
      <div key="prevention">
        <h2 className="text-4xl font-bold mb-6 text-neutral-dark">{h2s.prevention}</h2>
        <ul className="space-y-3">
          {sc.preventionTips.map((tip, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="text-brand-primary font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
              <span className="text-neutral-body">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Unique intro paragraph */}
        <div className="prose prose-lg text-neutral-body max-w-none">
          <p>{intro}</p>
        </div>

        {/* Render sections in varied order */}
        {sectionOrder.map(idx => sections[idx] || null)}

        {/* Guide link if available */}
        {relevantGuide && (
          <div className="bg-neutral-100 p-6 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold mb-2">Want to learn more?</h3>
            <p className="text-neutral-body">
              Read our detailed guide on{' '}
              <Link href={`/guides/${relevantGuide.category}/${relevantGuide.slug}`} className="font-bold text-brand-primary hover:underline">
                {relevantGuide.title}
              </Link>{' '}
              for help identifying and understanding this pest.
            </p>
          </div>
        )}

        {/* Varied CTA */}
        <div className="bg-neutral-dark text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{ctaContent.heading}</h2>
          <div className="prose prose-lg text-neutral-300 max-w-none">
            <p>{ctaContent.body}</p>
            <p>
              We operate across {parentTown ? `${areaName} and the wider ${parentName} area` : `${areaName} and the surrounding Kent area`}, arriving in an unmarked vehicle if you prefer discretion.
            </p>
            <p>
              Beyond {sc?.pestName || 'pest'} services, we handle all types of pest control locally. Visit our{' '}
              <Link href={parentTown ? `/areas/${parentTown}` : `/areas/${town}`} className="font-semibold text-white hover:text-brand-primary transition-colors underline">
                Pest Control in {parentTown ? parentName : townName}
              </Link>{' '}
              page for the full range.
            </p>
            <p className="mt-6 font-bold text-xl text-white">
              Call us today on <a href="tel:07400372204" className="text-brand-primary hover:text-white transition-colors">07400 372204</a> for a fast quote.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
