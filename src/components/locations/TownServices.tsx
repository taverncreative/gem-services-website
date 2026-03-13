import Link from 'next/link'
import { visibleServices } from '@/lib/data/services'

type Props = {
  town: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const TownServices = ({ town }: Props) => {
  const townName = formatTitle(town)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Pest control services in {townName}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => (
            <Link
              key={service}
              href={`/areas/${town}/${service}`}
              className="flex flex-col items-center justify-center p-6 border border-neutral-200 rounded-xl hover:border-brand-primary focus:border-brand-primary hover:shadow-md transition-all group bg-white"
            >
              <h3 className="font-semibold text-[15px] text-center text-neutral-dark group-hover:text-brand-primary transition-colors">
                {formatTitle(service)} {townName}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
