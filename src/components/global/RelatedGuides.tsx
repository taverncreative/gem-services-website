import Link from 'next/link'
import { guides } from '@/lib/data/guides'

type Props = {
  category: string
  currentSlug: string
}

export const RelatedGuides = ({ category, currentSlug }: Props) => {
  const relatedGuides = guides.filter(g => g.category === category && g.slug !== currentSlug).slice(0, 5)
  
  if (relatedGuides.length === 0) return null
  
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)
  
  return (
    <div className="bg-brand-primary/5 p-8 rounded-xl border border-brand-primary/10 mt-8 mb-12">
      <h3 className="text-xl font-bold mb-4 text-brand-primary">More Advice About {categoryTitle}</h3>
      <ul className="space-y-3 font-medium text-neutral-dark">
        {relatedGuides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.category}/${g.slug}`} className="text-brand-primary hover:underline">
              {g.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
