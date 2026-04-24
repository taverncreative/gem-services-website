import Link from 'next/link'
import Image from 'next/image'
import { Guide } from '@/lib/data/guides'
import { ArticleSchema } from '@/components/seo/schema/ArticleSchema'
import { FAQSchema } from '@/components/seo/schema/FAQSchema'
import { LazySection } from '@/components/global/LazySection'
import { RelatedServices } from '@/components/global/RelatedServices'
import { RelatedGuides } from '@/components/global/RelatedGuides'
import { GuideFunnel } from '@/components/global/GuideFunnel'
import { MidPageTrust } from '@/components/global/MidPageTrust'

type Props = {
  guide: Guide
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const GuideLayout = ({ guide }: Props) => {
  const serviceName = formatTitle(guide.relatedService)
  const imagePath = guide.image || `/images/blogimages/69680.jpeg`

  // Insert the funnel CTA after the 2nd section (or after last if fewer)
  const funnelInsertIndex = Math.min(2, guide.sections.length)

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
            <div key={idx}>
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-neutral-100 shadow-sm">
                <h2 className="text-2xl font-bold text-neutral-dark mb-4">{section.heading}</h2>
                <p className="leading-relaxed">{section.content}</p>
              </div>

              {/* Insert funnel CTA after 2nd section */}
              {idx === funnelInsertIndex - 1 && (
                <GuideFunnel serviceSlug={guide.relatedService} />
              )}
            </div>
          ))}

          <RelatedServices serviceSlug={guide.relatedService} />
          <RelatedGuides category={guide.category} currentSlug={guide.slug} />
        </div>

        {/* Mid-page trust */}
        <MidPageTrust />

        {/* FAQ SECTION */}
        <div className="max-w-3xl mx-auto mb-16 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-neutral-dark border-b pb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {guide.faqs?.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl border border-neutral-100 group">
                <summary className="p-5 cursor-pointer font-bold text-neutral-dark flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                  <span>Q: {faq.question}</span>
                  <span className="text-brand-primary transition-transform group-open:rotate-45 flex-shrink-0 text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-neutral-body leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Bottom funnel CTA */}
        <LazySection>
          <GuideFunnel serviceSlug={guide.relatedService} />
        </LazySection>
      </div>
    </article>
  )
}
