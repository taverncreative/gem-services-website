type Props = {
  service: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const ServiceFAQs = ({ service }: Props) => {
  const pestName = formatTitle(service)

  const faqs = [
    {
      q: `How quickly can you treat my ${pestName.toLowerCase()} problem?`,
      a: `We aim for same-day or next-day callouts across Kent for all ${pestName.toLowerCase()} emergencies.`
    },
    {
      q: `Are your ${pestName.toLowerCase()} treatments safe for pets?`,
      a: `Yes. We use industry-approved, secure baiting and treatment methods to ensure the safety of your family and pets.`
    },
    {
      q: `How do I know if the ${pestName.toLowerCase()} are gone?`,
      a: `We provide follow-up visits when necessary and supply complete documentation of the eradication.`
    },
    {
      q: `Can I try to remove the ${pestName.toLowerCase()} myself?`,
      a: `DIY methods often fail to completely eradicate the nest and can scatter the pests, making professional treatment harder. Always use a qualified expert.`
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">{pestName} FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neutral-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
              <h3 className="font-bold text-lg mb-2 pl-4 border-l-4 border-brand-primary text-neutral-dark">
                {faq.q}
              </h3>
              <p className="text-neutral-muted pl-4">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
