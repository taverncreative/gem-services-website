import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger'

export const TrustStrip = () => {
  return (
    <section className="bg-background-soft py-10 px-4 mb-16">
      <div className="max-w-6xl mx-auto px-6">
        <StaggerContainer className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-sm md:text-base font-semibold text-neutral-muted">
          <StaggerItem className="flex items-center gap-2">
            <span className="text-brand-primary">✓</span> Fully Insured
          </StaggerItem>
          <StaggerItem className="flex items-center gap-2">
            <span className="text-brand-primary">✓</span> BPCA Certified Experts
          </StaggerItem>
          <StaggerItem className="flex items-center gap-2">
            <span className="text-brand-primary">✓</span> Same Day Callouts
          </StaggerItem>
          <StaggerItem className="flex items-center gap-2">
            <span className="text-brand-primary">✓</span> Discreet Vehicles
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
