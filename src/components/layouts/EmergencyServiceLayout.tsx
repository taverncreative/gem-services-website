'use client'

import Link from 'next/link'
import { EmergencyBanner } from '@/components/services/EmergencyBanner'
import { trackEvent } from '@/lib/analytics/events'
import { EmergencyService } from '@/lib/data/emergencyServices'

type Props = {
  service: EmergencyService
}

export const EmergencyServiceLayout = ({ service }: Props) => {
  return (
    <div>
      <EmergencyBanner />
      
      {/* Hero Section */}
      <section className="bg-neutral-dark text-white py-12 md:py-16 lg:py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title} in Kent
          </h1>
          <p className="text-xl text-neutral-300 mb-10">
            {service.description} Fast, safe, and discreet emergency callouts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:01234567890" 
              onClick={() => trackEvent('phone_click', { location: 'emergency_hero', service: service.slug })}
              className="bg-brand-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-primary-dark transition-colors"
            >
              Call Now: 01234 567 890
            </a>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-white" aria-label="Why emergency pest control may be required">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Why emergency pest control may be required</h2>
          <p className="text-neutral-body leading-relaxed">
            Pest infestations can escalate rapidly, moving from a minor nuisance to a severe health and safety risk within hours. Emergency pest control is crucial when pests threaten the structural integrity of your property, compromise hygiene standards, or pose a direct physical danger to family members, staff, or customers. Immediate intervention stops the breeding cycle dead in its tracks and prevents costly secondary damage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Common emergency pest situations</h2>
          <ul className="list-disc pl-6 space-y-3 text-neutral-body">
            <li>Aggressive wasp nests near entryways or children's play areas.</li>
            <li>Rats breaching property interiors or chewing through electrical wiring.</li>
            <li>Sudden, severe mouse infestations contaminating food preparation areas.</li>
            <li>Fleas or bed bugs rapidly spreading through multiple rooms.</li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Rapid response treatment process</h2>
          <p className="text-neutral-body leading-relaxed mb-4">
            When you call our emergency line, our priority is to dispatch a BPCA-certified technician to your Kent property as swiftly as possible. 
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-neutral-body">
            <li><strong>Immediate Assessment:</strong> Fast identification of the pest species and entry points upon arrival.</li>
            <li><strong>Targeted Action:</strong> Deployment of professional-grade treatments to neutralize the immediate threat.</li>
            <li><strong>Sanitization & Safety:</strong> Ensuring the area is safe for re-entry and advising on immediate hygiene protocols.</li>
            <li><strong>Exclusion Recommendations:</strong> Detailing exactly what needs to be repaired to prevent identical breaches.</li>
          </ol>
        </div>

        <div className="max-w-4xl mx-auto text-center border-t border-neutral-200 pt-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Callout availability across Kent</h2>
          <p className="text-neutral-body leading-relaxed mb-8">
            We are stationed dynamically across the county, allowing us to actively reach properties in Maidstone, Ashford, Canterbury, Tonbridge, and surrounding areas often within hours.
          </p>
          <a 
            href="tel:01234567890" 
            onClick={() => trackEvent('cta_click', { location: 'emergency_bottom', action: 'call', service: service.slug })}
            className="inline-block bg-brand-primary text-white px-8 py-4 rounded-md font-bold text-lg shadow-sm hover:bg-brand-primary-dark transition-colors"
          >
            Request Emergency Callout
          </a>
        </div>
      </section>
    </div>
  )
}
