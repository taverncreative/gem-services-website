import { SchemaInjector } from '../SchemaInjector'

type BreadcrumbItem = {
  label: string
  href: string
}

type Props = {
  items: BreadcrumbItem[]
}

export const BreadcrumbSchema = ({ items }: Props) => {
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.gemservices.uk/'
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      item: `https://www.gemservices.uk${item.href}`
    }))
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  }

  return <SchemaInjector schema={schema} />
}
