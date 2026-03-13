import { SchemaInjector } from '../SchemaInjector'

export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GEM Services',
    url: 'https://www.gemservices.uk',
    logo: 'https://www.gemservices.uk/logo-black.png',
    areaServed: 'Kent',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '01234 567 890',
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'en'
    }
  }

  return <SchemaInjector schema={schema} />
}
