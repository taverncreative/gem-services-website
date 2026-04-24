import { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { towns } from '@/lib/data/towns'
import { guides } from '@/lib/data/guides'
import { commercialIndustries } from '@/lib/data/commercialIndustries'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gemservices.uk'
  const now = new Date().toISOString()

  // ── Static core pages ──
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/areas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/commercial`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
  // Exclude thin legal pages (cookie-policy, privacy-policy, terms-of-use) from sitemap

  // ── Service pages (high priority) ──
  const serviceRoutes: MetadataRoute.Sitemap = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // ── Commercial pages ──
  const commercialRoutes: MetadataRoute.Sitemap = commercialIndustries.map(ind => ({
    url: `${baseUrl}/commercial/${ind.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // ── Town pages ──
  const townRoutes: MetadataRoute.Sitemap = towns.map(town => ({
    url: `${baseUrl}/areas/${town}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // ── Town + Service pages ──
  const townServiceRoutes: MetadataRoute.Sitemap = []
  for (const town of towns) {
    for (const service of services) {
      townServiceRoutes.push({
        url: `${baseUrl}/areas/${town}/${service}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  }

  // ── Micro-location pages excluded from sitemap (noindexed until unique content added) ──

  // ── Money pages (high-intent combined slugs) ──
  const topServices = services.slice(0, 6)
  const topTowns = towns.filter(t => t !== 'kent')
  const moneyPageRoutes: MetadataRoute.Sitemap = []
  for (const service of topServices) {
    for (const town of topTowns) {
      moneyPageRoutes.push({
        url: `${baseUrl}/${service}-${town}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  // ── Guide pages ──
  const guideRoutes: MetadataRoute.Sitemap = guides.map(guide => ({
    url: `${baseUrl}/guides/${guide.category}/${guide.slug}`,
    lastModified: guide.publishDate ? new Date(guide.publishDate).toISOString() : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...commercialRoutes,
    ...townRoutes,
    ...townServiceRoutes,
    ...moneyPageRoutes,
    ...guideRoutes,
  ]
}
