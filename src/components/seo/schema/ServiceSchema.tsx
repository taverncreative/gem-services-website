import { SchemaInjector } from '../SchemaInjector'
import { services } from '@/lib/data/services'
import { serviceContent } from '@/lib/data/serviceContent'

const formatServiceTitle = (slug: string) =>
  slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

export const ServiceSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': services.map(slug => {
      const sc = serviceContent[slug]
      return {
        '@type': 'Service',
        name: sc?.commonName ? `${sc.commonName} Control` : formatServiceTitle(slug),
        description: sc
          ? `Professional ${sc.pestName} control services across Kent. ${sc.treatmentDuration || ''}`
          : `Professional ${formatServiceTitle(slug).toLowerCase()} services across Kent.`,
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://www.gemservices.uk/#business',
          name: 'GEM Services',
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Kent',
          addressCountry: 'GB',
        },
        serviceType: 'Pest Control',
        url: `https://www.gemservices.uk/services/${slug}`,
      }
    }),
  }

  return <SchemaInjector schema={schema} />
}
