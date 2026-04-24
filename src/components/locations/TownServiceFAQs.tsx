import { FAQSchema } from '@/components/seo/schema/FAQSchema'
import { serviceContent } from '@/lib/data/serviceContent'
import { townData } from '@/lib/data/towns'
import { microLocationData } from '@/lib/data/microLocations'

type Props = {
  town: string
  service: string
  parentTown?: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const TownServiceFAQs = ({ town, service, parentTown }: Props) => {
  const townName = formatTitle(town)
  const sc = serviceContent[service]
  const td = parentTown ? townData[parentTown] : townData[town]
  const microData = parentTown
    ? microLocationData[parentTown]?.find(m => m.slug === town)
    : null

  const pestName = sc?.commonName || formatTitle(service)
  const areaName = microData?.name || townName
  const serviceLower = pestName.toLowerCase()

  // Build location-specific FAQs by injecting town/area names into service FAQs
  // plus adding unique local questions
  const localFaqs: Array<{ question: string; answer: string }> = []

  // Location-specific response time FAQ
  localFaqs.push({
    question: `How quickly can you respond to ${serviceLower} problems in ${areaName}?`,
    answer: `We cover ${areaName}${parentTown ? ` and the wider ${formatTitle(parentTown)} area` : ', Kent'} and typically respond same day or next day. ${sc?.responseTimeNote || 'Call us for the fastest available appointment.'}`,
  })

  // Localised service FAQs from serviceContent (take first 3, inject location)
  if (sc?.faqs?.length) {
    sc.faqs.slice(0, 3).forEach(faq => {
      localFaqs.push({
        question: faq.question.replace(/in Kent/gi, `in ${areaName}`),
        answer: faq.answer,
      })
    })
  }

  // Cost FAQ with local context
  localFaqs.push({
    question: `How much does ${serviceLower} cost in ${areaName}?`,
    answer: `Costs depend on the severity of the problem and property size. ${td ? `Properties in ${areaName} are typically ${td.propertyTypes[0]?.toLowerCase() || 'mixed'}, which can affect treatment scope.` : ''} Contact us for a free, no-obligation quote.`,
  })

  // Property-specific FAQ if we have town data
  if (td) {
    localFaqs.push({
      question: `Why are ${serviceLower} common in ${areaName}?`,
      answer: `${td.pestPressureNote} ${sc?.behavior ? sc.behavior.split('.')[0] + '.' : ''}`,
    })
  }

  // Safety FAQ
  localFaqs.push({
    question: `Are your ${serviceLower} treatments safe for pets and children?`,
    answer: `Yes. All treatments are BPCA certified and applied safely. We provide clear aftercare instructions to keep your family and pets protected.`,
  })

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
      <FAQSchema faqs={localFaqs} />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">
          {pestName} in {areaName} — Common Questions
        </h2>
        <div className="space-y-4">
          {localFaqs.map((faq, idx) => (
            <details key={idx} className="bg-background-soft rounded-xl border border-neutral-100 group">
              <summary className="p-6 cursor-pointer font-bold text-neutral-dark flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="text-brand-primary transition-transform group-open:rotate-45 flex-shrink-0 text-2xl leading-none">+</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-neutral-body leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
