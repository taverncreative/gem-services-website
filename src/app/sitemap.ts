import { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { towns } from '@/lib/data/towns'
import { guides } from '@/lib/data/guides'
import { commercialIndustries } from '@/lib/data/commercialIndustries'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gemservices.uk'
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/areas',
    '/guides',
    '/commercial',
    '/services'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Conversion Pages (Services)
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Local Authority Pages (Towns)
  const townRoutes = towns.map((town) => ({
    url: `${baseUrl}/areas/${town}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // High-Intent Pages (Town + Service Combinations)
  const townServiceRoutes = []
  for (const town of towns) {
    for (const service of services) {
      townServiceRoutes.push({
        url: `${baseUrl}/areas/${town}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
      })
    }
  }

  // Informational Traffic (Guides)
  const guideRoutes = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.publishDate),
    changeFrequency: 'never' as const,
    priority: 0.6,
  }))

  // Commercial Pages
  const commercialRoutes = commercialIndustries.map((ind) => ({
    url: `${baseUrl}/commercial/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...townRoutes,
    ...commercialRoutes,
    ...townServiceRoutes,
    ...guideRoutes
  ]
}
