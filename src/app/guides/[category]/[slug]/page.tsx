import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { guides } from '@/lib/data/guides'
import { GuideLayout } from '@/components/layouts/GuideLayout'

type Props = {
  params: Promise<{ category: string, slug: string }>
}

export function generateStaticParams() {
  return guides.map((guide) => ({
    category: guide.category,
    slug: guide.slug,
  }))
}

import { getCanonicalPath } from '@/lib/seo/canonical'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const guide = guides.find(g => g.slug === resolvedParams.slug && g.category === resolvedParams.category)

  if (!guide) {
    return {
      title: 'Guide Not Found | GEM Services Pest Control'
    }
  }

  return {
    title: `${guide.title} | GEM Services Pest Control`,
    description: guide.intro,
    alternates: {
      canonical: getCanonicalPath(`/guides/${guide.category}/${guide.slug}`),
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const resolvedParams = await params
  const guide = guides.find(g => g.slug === resolvedParams.slug && g.category === resolvedParams.category)

  if (!guide) {
    notFound()
  }

  return (
    <>
      <GuideLayout guide={guide} />
    </>
  )
}
