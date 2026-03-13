import { SchemaInjector } from '../SchemaInjector'

export const ContactPageSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact GEM Services',
    description: 'Contact GEM Services for fast, effective pest control in Kent.',
    url: 'https://www.gemservices.uk/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'GEM Services',
      telephone: '+447400372204',
      email: 'nate@gemservices.uk'
    }
  }

  return <SchemaInjector schema={schema} />
}
