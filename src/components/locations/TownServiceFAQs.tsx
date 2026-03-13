import { FAQSchema } from '@/components/seo/schema/FAQSchema'

type Props = {
  town: string
  service: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const TownServiceFAQs = ({ town, service }: Props) => {
  const townName = formatTitle(town)
  const serviceName = formatTitle(service)

  const faqs = [
    {
      question: `How much does ${serviceName.toLowerCase()} cost in ${townName}?`,
      answer: `The cost of ${serviceName.toLowerCase()} in ${townName} depends on the severity of the infestation and the size of the property. Contact us today for a free, no-obligation quote tailored to your specific situation.`
    },
    {
      question: `How quickly can pest control arrive in ${townName}?`,
      answer: `We prioritise emergency callouts and aim to have a technician at your property in ${townName} as quickly as possible, often on the same day.`
    },
    {
      question: `Are your treatments safe for pets and children?`,
      answer: `Yes, all our treatments are strictly regulated and BPCA certified. We ensure that any bait or chemical treatments are placed safely and provide clear instructions on keeping your family and pets secure.`
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
      <FAQSchema faqs={faqs} />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-background-soft p-6 rounded-xl border border-neutral-100">
              <h3 className="text-lg font-bold mb-2 text-neutral-dark">{faq.question}</h3>
              <p className="text-neutral-body leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
