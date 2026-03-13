import { FastForward, MapPin, ShieldCheck, Building2 } from 'lucide-react'

const benefits = [
  { title: 'Fast Response', description: 'Emergency pest control ready for rapid dispatch.', icon: FastForward },
  { title: 'Local Kent Expertise', description: 'Deep knowledge of regional pest challenges.', icon: MapPin },
  { title: 'Safe Treatments', description: 'Regulated, pet-safe, and family-friendly procedures.', icon: ShieldCheck },
  { title: 'Commercial & Domestic', description: 'Custom plans for homes and large commercial sites.', icon: Building2 },
]

export const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft border-t border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-neutral-dark">Why choose us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-neutral-dark">{benefit.title}</h3>
                <p className="text-neutral-muted leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
