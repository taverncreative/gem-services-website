import { FadeIn } from '@/components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger'

export const ReviewModule = () => {
  return (
    <section className="bg-background-soft py-12 md:py-16 lg:py-20 px-4 mb-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-12">What our customers say</h2>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          <StaggerItem className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-neutral-100">
            <div className="text-brand-primary mb-4 text-xl tracking-widest">★★★★★</div>
            <p className="text-neutral-body italic mb-6">"Fast, friendly, and completely solved our wasp problem within hours. Extremely impressed with the service."</p>
            <div className="font-semibold text-neutral-dark">- Sarah, Maidstone</div>
          </StaggerItem>
          
          <StaggerItem className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-neutral-100">
            <div className="text-brand-primary mb-4 text-xl tracking-widest">★★★★★</div>
            <p className="text-neutral-body italic mb-6">"Very professional service. The technician came out the same day and explained everything clearly."</p>
            <div className="font-semibold text-neutral-dark">- David, Ashford</div>
          </StaggerItem>
          
          <StaggerItem className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 border border-neutral-100">
            <div className="text-brand-primary mb-4 text-xl tracking-widest">★★★★★</div>
            <p className="text-neutral-body italic mb-6">"Highly recommend GEM Pest Control. They arrived discreetly and effectively cleared the rat issue in our warehouse."</p>
            <div className="font-semibold text-neutral-dark">- Emma, Canterbury</div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
