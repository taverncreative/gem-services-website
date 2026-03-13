import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger'

export const Hero = () => {
  const imagePath = `/images/hero/homepage.jpg`

  return (
    <section className="relative min-h-[65vh] md:min-h-[70vh] flex items-center justify-center py-12 md:py-16 lg:py-24 text-center px-4 text-white overflow-hidden">
      <Image 
        src={imagePath}
        alt="GEM Pest Control Services in Kent"
        width={1600}
        height={900}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.35))' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn yOffset={30}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">
            Pest Control in Kent for Homes and Businesses
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-sm">
            Fast, discreet, and effective pest control solutions across Kent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a 
              href="tel:07400372204" 
              className="flex items-center justify-center bg-brand-primary text-white px-8 py-3 min-h-[56px] rounded-md font-semibold hover:bg-brand-primary-dark hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              Call Now
            </a>
            <Link 
              href="/contact" 
              className="flex items-center justify-center bg-neutral-dark border border-neutral-muted text-white px-8 py-3 min-h-[56px] rounded-md font-semibold hover:bg-neutral-body hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </FadeIn>
        <StaggerContainer className="flex flex-wrap justify-center gap-3 md:gap-4 items-center mt-4">
          <StaggerItem className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-xs md:text-sm font-medium text-white/90 shadow-sm">
            <span className="text-brand-primary font-bold">✓</span> BPCA Certified
          </StaggerItem>
          <StaggerItem className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-xs md:text-sm font-medium text-white/90 shadow-sm">
            <span className="text-brand-primary font-bold">✓</span> Fully Insured
          </StaggerItem>
          <StaggerItem className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-xs md:text-sm font-medium text-white/90 shadow-sm">
            <span className="text-brand-primary font-bold">✓</span> Local Kent Expertise
          </StaggerItem>
          <StaggerItem className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-xs md:text-sm font-medium text-white/90 shadow-sm">
            <span className="text-brand-primary font-bold">✓</span> Same Day Callouts
          </StaggerItem>
          <StaggerItem className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-xs md:text-sm font-medium text-white/90 shadow-sm">
            <span className="text-brand-primary font-bold">✓</span> 5 Star Rated
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
