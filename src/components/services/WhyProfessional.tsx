type Props = {
  service: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const WhyProfessional = ({ service }: Props) => {
  const serviceName = formatTitle(service)
  const pestTitle = serviceName.replace(' Control', '').replace(' Removal', '').replace(' Treatment', '').replace(' Nest', '')

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Why professional {pestTitle.toLowerCase()} control is important</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              Attempting to eliminate an infestation alone frequently makes the structural problem worse. DIY pest control methods, such as over-the-counter sprays and standard traps, usually lack the chemical potency required to completely destroy the underlying colony. Instead of eradicating the {pestTitle.toLowerCase()} permanently, these attempts often simply scatter the colony deeper into your building's infrastructure, turning a single concentrated nest into a widely dispersed, systemic issue.
            </p>
            <p>
              In contrast, a professional pest control service possesses the legally restricted commercial-grade bait systems, targeted tracking dusts, and highly specialized physical exclusion techniques needed to permanently resolve the issue. We correctly diagnose the biological conditions that drew the {pestTitle.toLowerCase()} indoors, safely neutralize the entire population, and apply physical mesh sealing or proofing strategies. Hiring a trained professional guarantees peace of mind and permanently safeguards your property's value from severe structural degradation or devastating biological contamination.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
