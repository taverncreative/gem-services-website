import type { Metadata } from 'next'
import './globals.css'
import { PageLayout } from '@/components/layouts/PageLayout'
import { MobileCallBar } from '@/components/global/MobileCallBar'
import { Inter } from 'next/font/google'
import { SiteNavigationSchema } from '@/components/seo/schema/SiteNavigationSchema'
import { LocalBusinessSchema } from '@/components/seo/schema/LocalBusinessSchema'
import { ServiceAreaSchema } from '@/components/seo/schema/ServiceAreaSchema'
import { WebVitals } from '@/components/global/WebVitals'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gemservices.uk'),
  title: 'GEM Services Pest Control | Pest Control in Kent',
  description: 'Need pest control in Kent? GEM Services provides fast, discreet removal for rats, mice, wasps and more. BPCA certified, same-day callouts. Call 07400 372204.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'GEM Services Pest Control',
    locale: 'en_GB',
    url: 'https://www.gemservices.uk',
    title: 'GEM Services Pest Control | Pest Control in Kent',
    description: 'Need pest control in Kent? Fast, discreet removal for rats, mice, wasps and more. BPCA certified, same-day callouts. Call now.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GEM Services — Professional Pest Control in Kent',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEM Services Pest Control | Kent',
    description: 'Fast, BPCA-certified pest control across Kent. Same-day callouts for homes and businesses. Call 07400 372204.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <SiteNavigationSchema />
        <LocalBusinessSchema />
        <ServiceAreaSchema />
      </head>
      <body className="flex min-h-screen flex-col font-sans pb-20 md:pb-0">
        <WebVitals />
        <PageLayout>
          {children}
        </PageLayout>
        <MobileCallBar />
      </body>
    </html>
  )
}
