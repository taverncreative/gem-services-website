import { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { towns } from '@/lib/data/towns'
import { guides } from '@/lib/data/guides'
import { commercialIndustries } from '@/lib/data/commercialIndustries'
import { microLocations } from '@/lib/data/microLocations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gemservices.uk'
  
  // Static Core Routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/areas',
    '/guides',
    '/commercial',
    '/services',
    '/cookie-policy',
    '/privacy-policy',
    '/terms-of-use'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Services
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // services might update
    priority: 0.9,
  }))

  // Commercial
  const commercialRoutes = commercialIndustries.map((ind) => ({
    url: `${baseUrl}/commercial/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Towns (from towns array)
  const townRoutes = towns.map((town) => ({
    url: `${baseUrl}/areas/${town}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Town + Service
  const townServiceRoutes: MetadataRoute.Sitemap = []
  for (const town of towns) {
    for (const service of services) {
      townServiceRoutes.push({
        url: `${baseUrl}/areas/${town}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    }
  }

  // MicroLocations (Town + Area + Service)
  const microLocationRoutes: MetadataRoute.Sitemap = []
  for (const [town, areas] of Object.entries(microLocations)) {
    if (!towns.includes(town)) continue;
    for (const area of areas) {
      for (const service of services) {
        microLocationRoutes.push({
          url: `${baseUrl}/areas/${town}/${area}/${service}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        })
      }
    }
  }

  // Guides
  const guideRoutes = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.category}/${guide.slug}`,
    lastModified: new Date(guide.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...townRoutes,
    ...commercialRoutes,
    ...townServiceRoutes,
    ...microLocationRoutes,
    ...guideRoutes
  ]
}
