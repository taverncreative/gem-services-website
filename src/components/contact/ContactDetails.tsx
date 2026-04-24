import { Phone, Mail, MapPin } from 'lucide-react'

export const ContactDetails = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact information</h2>
        <p className="text-neutral-muted mb-6">
          We are available to assist you with any pest-related inquiries. We prioritise rapid response across all Kent locations.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-dark">Emergency Phone</h3>
            <a href="tel:07400372204" className="text-brand-primary font-semibold hover:underline block mb-1">07400 372204</a>
            <p className="text-sm text-neutral-muted">Call anytime for urgent pest issues.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-dark">Email Enquiries</h3>
            <a href="mailto:nate@gemservices.uk" className="text-brand-primary font-semibold hover:underline block mb-1">nate@gemservices.uk</a>
            <p className="text-sm text-neutral-muted">We aim to reply within 2 hours.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary flex-shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-dark">Our Address</h3>
            <address className="not-italic text-neutral-body leading-relaxed">
              GEM Services<br />
              28 Sheldwich Cl<br />
              Ashford, Kent<br />
              TN23 5RX
            </address>
            <p className="text-sm text-neutral-muted mt-2">Based in Ashford, covering all of Kent.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
