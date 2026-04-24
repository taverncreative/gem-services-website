import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { guides } from '@/lib/data/guides'
import { GuideLayout } from '@/components/layouts/GuideLayout'
import { getCanonicalPath } from '@/lib/seo/canonical'

type Props = {
  params: Promise<{ category: string; slug: string }>
}

export function generateStaticParams() {
  return guides.map((guide) => ({
    category: guide.category,
    slug: guide.slug,
  }))
}

/**
 * Detect whether a guide is auto-generated template content.
 * Templated guides have section headings that stuff the full title
 * e.g. "Signs of the How To Get Rid Of Rats In Your Garden problem"
 */
function isTemplatedGuide(guide: typeof guides[number]): boolean {
  if (!guide.sections?.length) return true
  const firstHeading = guide.sections[0].heading
  // Templated guides start with "Signs of the {TITLE} problem"
  return firstHeading.includes(guide.title) || firstHeading.startsWith('Signs of the ')
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, category } = await params
  const guide = guides.find(g => g.slug === slug && g.category === category)

  if (!guide) {
    return {
      title: 'Guide Not Found | GEM Services Pest Control',
    }
  }

  const meta: Metadata = {
    title: `${guide.title} | GEM Services Pest Control`,
    description: guide.intro.length > 155
      ? guide.intro.slice(0, 152) + '...'
      : guide.intro,
    alternates: {
      canonical: getCanonicalPath(`/guides/${guide.category}/${guide.slug}`),
    },
  }

  // Noindex templated guides until they're properly rewritten
  if (isTemplatedGuide(guide)) {
    meta.robots = {
      index: false,
      follow: true,
    }
  }

  return meta
}

export default async function GuidePage({ params }: Props) {
  const { slug, category } = await params
  const guide = guides.find(g => g.slug === slug && g.category === category)

  if (!guide) {
    notFound()
  }

  return <GuideLayout guide={guide} />
}
