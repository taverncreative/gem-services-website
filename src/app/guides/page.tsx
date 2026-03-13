import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { guides } from '@/lib/data/guides'

export const metadata: Metadata = {
  title: 'Pest Control Guides | GEM Services Pest Control',
  description: 'Expert pest control advice, tips, and guides from the professionals at GEM Services.',
}

export default function GuidesIndexPage() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20 text-center px-4 bg-background-soft">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pest Control Guides
          </h1>
          <p className="text-xl text-neutral-muted">
            Expert advice and tips to help you identify and manage common pests in your property.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link 
                key={guide.slug}
                href={`/guides/${guide.category}/${guide.slug}`}
                className="bg-white flex flex-col h-full border border-neutral-200 rounded-xl overflow-hidden hover:border-brand-primary focus:border-brand-primary hover:shadow-md transition-all group"
              >
                <div className="relative w-full h-56 bg-neutral-200">
                  <Image 
                    src={guide.image || `/images/blogimages/69680.jpeg`}
                    alt={guide.title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {guide.publishDate}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold mb-3 text-neutral-dark group-hover:text-brand-primary transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-neutral-muted flex-grow text-sm leading-relaxed line-clamp-3">
                    {guide.intro}
                  </p>
                  <div className="mt-6 font-semibold text-brand-primary inline-flex items-center text-sm">
                    Read Guide <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
