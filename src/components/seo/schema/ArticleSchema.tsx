import { SchemaInjector } from '../SchemaInjector'
import { Guide } from '@/lib/data/guides'

type Props = {
  guide: Guide
}

export const ArticleSchema = ({ guide }: Props) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.intro,
    datePublished: guide.publishDate,
    author: {
      '@type': 'Organization',
      name: 'GEM Services'
    },
    publisher: {
      '@type': 'Organization',
      name: 'GEM Services',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.gemservices.uk/logo-black.png'
      }
    }
  }

  return <SchemaInjector schema={schema} />
}
