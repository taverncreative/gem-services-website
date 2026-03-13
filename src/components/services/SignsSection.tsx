import Link from 'next/link'
import { guides } from '@/lib/data/guides'

type Props = {
  service: string
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

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const SignsSection = ({ service }: Props) => {
  const pestName = formatTitle(service)

  const getDynamicSigns = (pest: string) => [
    { title: 'Unusual Noises & Sounds', desc: `Often the first sign of a ${pest.toLowerCase()} infestation is scratching or scurrying noises in walls, lofts, or under floorboards, especially at night.` },
    { title: 'Droppings & Smear Marks', desc: `Finding distinct droppings or noticing dark smear marks along skirting boards and walls is a strong indicator that ${pest.toLowerCase()}s are active in your property.` },
    { title: 'Property Damage', desc: `Look out for chewed wires, gnawed wood, or damaged packaging in cupboards, which are classic signs of ${pest.toLowerCase()} activity.` },
    { title: 'Nesting Materials', desc: `Discovering shredded paper, cardboard, or gathered debris in dark, hidden corners often suggests a ${pestName.toLowerCase().replace(' control', '')} is building a nest.` }
  ]

  const category = serviceCategoryMap[service]
  const relevantGuides = category ? guides.filter(g => g.category === category).slice(0, 3) : []

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Signs you may have {pestName.toLowerCase()}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getDynamicSigns(pestName).map((sign, idx) => (
            <div key={idx} className="bg-white border border-neutral-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-brand-primary">{sign.title}</h3>
              <p className="text-neutral-muted text-sm">
                {sign.desc}
              </p>
            </div>
          ))}
        </div>

        {relevantGuides.length > 0 && (
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Learn more about {pestName.toLowerCase()} signs</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {relevantGuides.map(g => (
                <Link key={g.slug} href={`/guides/${g.category}/${g.slug}`} className="text-brand-primary font-medium hover:underline">
                  {g.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
