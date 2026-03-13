import Link from 'next/link'
import { guides } from '@/lib/data/guides'

type Props = {
  serviceSlug: string
}

const serviceCategoryMap: Record<string, string> = {
  'rat-control': 'rats',
  'mouse-control': 'mice',
  'wasp-nest-removal': 'wasps',
  'bed-bug-treatment': 'bed-bugs',
  'flea-treatment': 'fleas',
  'bird-control': 'birds',
  'moth-control': 'moths',
  'fly-control': 'flies',
  'mole-control': 'moles',
  'squirrel-removal': 'squirrels',
  'ant-control': 'ants',
  'silverfish-control': 'silverfish',
  'cockroach-control': 'cockroaches'
}

export const TownGuideLinks = ({ serviceSlug }: Props) => {
  const category = serviceCategoryMap[serviceSlug]
  if (!category) return null

  const relatedGuides = guides.filter(g => g.category === category).slice(0, 4)
  
  if (relatedGuides.length === 0) return null

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4" aria-label="Pest control advice">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-neutral-dark">Pest control advice</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {relatedGuides.map(g => (
            <Link 
              key={g.slug} 
              href={`/guides/${g.category}/${g.slug}`} 
              className="p-4 bg-white border border-neutral-200 rounded-xl hover:border-brand-primary hover:text-brand-primary transition-colors text-sm font-medium shadow-sm hover:shadow-md h-full flex items-center"
            >
              {g.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
