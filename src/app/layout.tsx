import type { Metadata } from 'next'
import './globals.css'
import { PageLayout } from '@/components/layouts/PageLayout'
import { MobileCallBar } from '@/components/global/MobileCallBar'
import { Inter } from 'next/font/google'
import { SiteNavigationSchema } from '@/components/seo/schema/SiteNavigationSchema'
import { LocalBusinessSchema } from '@/components/seo/schema/LocalBusinessSchema'
import { ServiceAreaSchema } from '@/components/seo/schema/ServiceAreaSchema'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gemservices.uk'),
  title: 'GEM Services Pest Control | Pest Control in Kent',
  description: 'Professional pest control services covering families and businesses across Kent safely and rapidly.',
  openGraph: {
    type: 'website',
    siteName: 'GEM Services',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GEM Services Kent'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
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
        <PageLayout>
          {children}
        </PageLayout>
        <MobileCallBar />
      </body>
    </html>
  )
}
