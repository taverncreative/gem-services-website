import { towns } from '@/lib/data/towns'

export const ServiceAreaSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ServiceArea',
    '@id': 'https://www.gemservices.uk/#service-area',
    name: 'Kent, United Kingdom',
    geo: {
      '@type': 'GeoShape',
      region: 'Kent',
      addressCountry: 'UK'
    },
    containsPlace: towns.map(town => ({
      '@type': 'City',
      name: town.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
