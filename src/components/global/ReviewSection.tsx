import { reviews } from '@/lib/data/reviews'
import { LazySection } from '@/components/global/LazySection'

export const ReviewSection = () => {
  return (
    <LazySection>
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft" aria-label="Customer Reviews">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center text-neutral-dark">Trusted by Kent residents</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-neutral-100 flex flex-col">
                <div className="flex items-center gap-1 mb-4 text-brand-primary">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-neutral-body flex-grow mb-6 italic">
                  "{review.text}"
                </blockquote>
                <div className="border-t border-neutral-100 pt-4 mt-auto">
                  <p className="font-bold text-neutral-dark">{review.name}</p>
                  <p className="text-sm text-neutral-muted">{review.town}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazySection>
  )
}
