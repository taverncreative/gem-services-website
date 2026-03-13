import { SchemaInjector } from '../SchemaInjector'

import { towns } from '@/lib/data/towns'

export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GEM Services',
    url: 'https://www.gemservices.uk',
    telephone: '+447400372204',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '28 Sheldwich Cl',
      addressLocality: 'Ashford',
      addressRegion: 'Kent',
      postalCode: 'TN23 5RX',
      addressCountry: 'UK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.1378',
      longitude: '0.8647'
    },
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00',
    areaServed: towns.map(town => ({
      '@type': 'City',
      name: town.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    })),
    priceRange: '££',
    serviceType: 'Pest Control',
    sameAs: [
      'https://www.facebook.com/gemservices',
      'https://twitter.com/gemservices'
    ],
    founder: {
      '@type': 'Person',
      name: 'Michael George'
    }
  }

  return <SchemaInjector schema={schema} />
}
