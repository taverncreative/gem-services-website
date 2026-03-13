import Link from 'next/link'
import Image from 'next/image'
import { Guide } from '@/lib/data/guides'
import { ArticleSchema } from '@/components/seo/schema/ArticleSchema'
import { FAQSchema } from '@/components/seo/schema/FAQSchema'
import { LazySection } from '@/components/global/LazySection'
import { RelatedServices } from '@/components/global/RelatedServices'
import { RelatedGuides } from '@/components/global/RelatedGuides'

type Props = {
  guide: Guide
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const GuideLayout = ({ guide }: Props) => {
  const serviceName = formatTitle(guide.relatedService)
  const imagePath = guide.image || `/images/blogimages/69680.jpeg`

  return (
    <article className="py-12 md:py-16 lg:py-20 px-4">
      <ArticleSchema guide={guide} />
      <FAQSchema faqs={guide.faqs} />
      
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-12 text-center">
          <p className="text-brand-primary font-bold mb-4 tracking-wider uppercase text-sm">Published: {guide.publishDate}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark leading-tight">{guide.title}</h1>
          <p className="text-xl text-neutral-muted leading-relaxed max-w-3xl mx-auto">{guide.intro}</p>
        </header>

        <div className="rounded-xl overflow-hidden mb-12 shadow-md">
          <Image 
            src={imagePath}
            alt={`${guide.title} overview`}
            width={1200}
            height={700}
            className="w-full object-cover"
          />
        </div>

        <div className="prose prose-lg text-neutral-body max-w-3xl mx-auto mb-16 space-y-8">
          {guide.sections.map((section, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-neutral-100 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">{section.heading}</h2>
              <p className="leading-relaxed">{section.content}</p>
            </div>
          ))}

          <RelatedServices serviceSlug={guide.relatedService} />
          <RelatedGuides category={guide.category} currentSlug={guide.slug} />
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-neutral-dark border-b pb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {guide.faqs?.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                <h3 className="text-lg font-bold text-neutral-dark mb-3">Q: {faq.question}</h3>
                <p className="text-neutral-body leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <LazySection>
          <div className="bg-background-soft rounded-xl p-8 sm:p-12 text-center border border-neutral-200">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Need Help with {serviceName}?</h3>
            <p className="text-neutral-muted mb-8 max-w-xl mx-auto">
              We provide rapid, discreet, and guaranteed {serviceName.toLowerCase()} solutions across Kent.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link 
                href={`/services/${guide.relatedService}`}
                className="bg-brand-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-brand-primary-dark transition-colors shadow-sm"
              >
                Learn More
              </Link>
              <Link 
                href="/contact"
                className="bg-neutral-dark text-white px-8 py-4 rounded-md font-semibold hover:bg-neutral-body transition-colors shadow-sm"
              >
                Request a Callout
              </Link>
            </div>
          </div>
        </LazySection>
      </div>
    </article>
  )
}
