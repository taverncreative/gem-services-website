import { SchemaInjector } from '../SchemaInjector'
import { services } from '@/lib/data/services'

const formatServiceTitle = (slug: string) => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const ServiceSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': services.map((slug) => ({
      '@type': 'Service',
      name: formatServiceTitle(slug),
      provider: {
        '@type': 'LocalBusiness',
        name: 'GEM Services',
      },
      areaServed: {
        '@type': 'State',
        name: 'Kent',
      },
      url: `https://www.gemservices.uk/services/${slug}`,
    }))
  }

  return <SchemaInjector schema={schema} />
}
