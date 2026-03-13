'use client'

import Link from 'next/link'
import Image from 'next/image'
import { trackEvent } from '@/lib/analytics/events'
import { TrustBar } from '@/components/global/TrustBar'

import { FadeIn } from '@/components/animations/FadeIn'

type Props = {
  title: string
  subtitle: string
  image: string
  cta?: React.ReactNode
  town?: string
}

export const TownHero = ({ title, subtitle, image, cta, town }: Props) => {
  return (
    <>
      <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center justify-center py-12 md:py-16 lg:py-20 text-center px-4 text-white overflow-hidden">
        <Image 
          src={image}
          alt={`${title} pest control service`}
          width={1200}
          height={700}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-neutral-dark/50 pointer-events-none" />
        <FadeIn className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg leading-relaxed max-w-[750px] mx-auto text-neutral-300 mb-10">
            {subtitle}
          </p>
          
          {cta ? (
            cta
          ) : (
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
              <a 
                href="tel:07400372204"
                onClick={() => trackEvent('phone_click', { location: 'town_hero', town: town || 'unknown' })}
                className="flex items-center justify-center bg-brand-primary text-white px-6 py-3 min-h-[56px] rounded-md font-semibold hover:bg-brand-primary-dark hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 w-full sm:w-auto px-8"
              >
                Call Now
              </a>
              <Link 
                href="/contact" 
                onClick={() => trackEvent('cta_click', { location: 'town_hero', action: 'quote', town: town || 'unknown' })}
                className="flex items-center justify-center bg-neutral-dark border border-neutral-muted text-white px-6 py-3 min-h-[56px] rounded-md font-semibold hover:bg-neutral-body hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 w-full sm:w-auto px-8"
              >
                Request Quote
              </Link>
            </div>
          )}
        </FadeIn>
      </section>
      <TrustBar />
    </>
  )
}
