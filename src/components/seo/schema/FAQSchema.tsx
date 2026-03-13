import { SchemaInjector } from '../SchemaInjector'

type FAQ = {
  question: string
  answer: string
}

type Props = {
  faqs: FAQ[]
}

export const FAQSchema = ({ faqs }: Props) => {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return <SchemaInjector schema={schema} />
}
