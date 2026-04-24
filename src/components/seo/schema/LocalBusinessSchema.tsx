import { SchemaInjector } from '../SchemaInjector'
import { towns, townData } from '@/lib/data/towns'

export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PestControlService'],
    '@id': 'https://www.gemservices.uk/#business',
    name: 'GEM Services',
    description: 'Professional pest control services across Kent. BPCA certified, fully insured. Same-day callouts for homes and businesses.',
    url: 'https://www.gemservices.uk',
    telephone: '+447400372204',
    email: 'nate@gemservices.uk',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.gemservices.uk/icon.svg',
    },
    image: 'https://www.gemservices.uk/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '28 Sheldwich Cl',
      addressLocality: 'Ashford',
      addressRegion: 'Kent',
      postalCode: 'TN23 5RX',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.1378,
      longitude: 0.8647,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
    areaServed: towns.map(townSlug => {
      const td = townData[townSlug]
      return {
        '@type': 'City',
        name: td?.name || townSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Kent',
        },
      }
    }),
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pest Control Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rat Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mouse Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wasp Nest Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bed Bug Treatment' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mole Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bird Control' } },
      ],
    },
    founder: {
      '@type': 'Person',
      name: 'Michael George',
    },
    // sameAs removed — verify social profiles exist before re-adding
  }

  return <SchemaInjector schema={schema} />
}
