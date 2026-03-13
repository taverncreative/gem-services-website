export const SiteNavigationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Home',
        url: 'https://www.gemservices.uk/'
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Services',
        url: 'https://www.gemservices.uk/services'
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Areas',
        url: 'https://www.gemservices.uk/areas'
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Guides',
        url: 'https://www.gemservices.uk/guides'
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Contact',
        url: 'https://www.gemservices.uk/contact'
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
