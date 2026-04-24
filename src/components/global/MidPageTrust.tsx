import { reviews } from '@/lib/data/reviews'

/**
 * Mid-page trust + social proof block.
 * Shows a review snippet, trust badges, and quick-contact.
 * Server component — zero JS.
 */
export const MidPageTrust = () => {
  // Pick the first review with 5 stars
  const topReview = reviews.find(r => r.rating === 5) || reviews[0]

  return (
    <section className="py-10 px-4 bg-brand-primary/5 border-y border-brand-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Trust badges */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="text-brand-primary font-bold text-lg">&#x2713;</span>
              <span className="text-neutral-dark font-semibold">BPCA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-primary font-bold text-lg">&#x2713;</span>
              <span className="text-neutral-dark font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-primary font-bold text-lg">&#x2713;</span>
              <span className="text-neutral-dark font-semibold">Same Day Available</span>
            </div>
          </div>

          {/* Review snippet */}
          {topReview && (
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-2 text-brand-primary">
                {[...Array(topReview.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-neutral-body italic mb-1">
                &ldquo;{topReview.text.length > 100 ? topReview.text.slice(0, 100) + '...' : topReview.text}&rdquo;
              </blockquote>
              <p className="text-xs text-neutral-muted font-medium">{topReview.name}, {topReview.town}</p>
            </div>
          )}

          {/* Quick contact */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="tel:07400372204"
              className="bg-brand-primary text-white px-6 py-3 rounded-md font-bold hover:bg-brand-primary-dark transition-colors"
            >
              Call 07400 372204
            </a>
            <span className="text-xs text-neutral-muted">Free quote, no obligation</span>
          </div>

        </div>
      </div>
    </section>
  )
}
