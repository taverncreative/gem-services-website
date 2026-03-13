import { Hero } from '@/components/home/Hero'
import { ServiceGrid } from '@/components/home/ServiceGrid'
import { HomeAreasGrid } from '@/components/home/HomeAreasGrid'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { CommercialPromo } from '@/components/home/CommercialPromo'
import { RecentJobs } from '@/components/home/RecentJobs'
import { GuidesPromo } from '@/components/home/GuidesPromo'
import { CTASection } from '@/components/home/CTASection'
import { LocalBusinessSchema } from '@/components/seo/schema/LocalBusinessSchema'
import { ServiceSchema } from '@/components/seo/schema/ServiceSchema'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEM Services Pest Control | Pest Control in Kent',
  description: 'Fast, discreet, and reliable pest control services covering families and businesses across Kent.',
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema />
      <Hero />
      <ServiceGrid />
      <HomeAreasGrid />
      <WhyChooseUs />
      <CommercialPromo />
      <RecentJobs />
      <GuidesPromo />
      <CTASection />
    </>
  )
}
