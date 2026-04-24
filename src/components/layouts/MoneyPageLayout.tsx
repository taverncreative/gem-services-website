import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/data/services'
import { towns, townData } from '@/lib/data/towns'
import { serviceContent } from '@/lib/data/serviceContent'
import { jobs } from '@/lib/data/jobs'
import { reviews } from '@/lib/data/reviews'
import { guides } from '@/lib/data/guides'
import { FAQSchema } from '@/components/seo/schema/FAQSchema'
import { ReviewSchema } from '@/components/seo/schema/ReviewSchema'
import { getServiceImageFilename } from '@/lib/images/sourceImage'

type Props = {
  town: string
  service: string
}

const fmt = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

function hash(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length]
}

export const MoneyPageLayout = ({ town, service }: Props) => {
  const sc = serviceContent[service]
  const td = townData[town]
  const townName = td?.name || fmt(town)
  const pestName = sc?.commonName || fmt(service)
  const pestLower = sc?.pestName || pestName.toLowerCase()
  const seed = hash(town + service + 'money')
  const imagePath = `/images/services/${getServiceImageFilename(service, 'hero')}`

  // ─── Unique hero copy (NOT shared with /areas/) ───
  const heroLines = [
    `Got ${pestLower}s in ${townName}? We will be there today.`,
    `${townName} homes and businesses trust us for fast ${pestLower} removal.`,
    `${pestName} problems in ${townName} sorted quickly, discreetly, and guaranteed.`,
    `Do not let ${pestLower}s take over your ${townName} property. Call now.`,
    `${townName}'s local ${pestLower} specialists. Same day, fully insured, BPCA certified.`,
  ]
  const heroSubtitle = pick(heroLines, seed)

  // ─── Unique local intro ───
  const propertyRef = td?.propertyTypes?.[seed % (td.propertyTypes.length || 1)]?.toLowerCase() || 'local homes'
  const localFeature = td?.localFeatures?.[seed % (td.localFeatures.length || 1)] || ''

  // ─── Dedicated FAQs (entirely different from /areas/ pages) ───
  const moneyFaqs = [
    {
      question: `What is the cost of ${pestLower} treatment in ${townName}?`,
      answer: `Treatment costs depend on the severity of the infestation and the size of your property. Most domestic ${pestLower} treatments in ${townName} fall within a standard price range. We provide a free, no-obligation quote before any work begins — no hidden fees.`,
    },
    {
      question: `Can you come to ${townName} today?`,
      answer: `In most cases, yes. We operate from Ashford and cover ${townName} daily. Same-day appointments are available for urgent problems — call us on 07400 372204 and we will do our best to attend today.`,
    },
    {
      question: `Do I need to leave my ${townName} home during treatment?`,
      answer: `For most ${pestLower} treatments, you do not need to leave. We will advise you on any specific precautions for your situation. All products used are BPCA approved and safe when applied correctly.`,
    },
    {
      question: `How do I know if I have ${pestLower}s in my ${townName} property?`,
      answer: sc?.signs?.length
        ? `The most common signs are: ${sc.signs.slice(0, 3).map(s => s.sign.toLowerCase()).join(', ')}. If you spot any of these, call us for a free assessment.`
        : `Look for droppings, unusual noises, damage to materials, or sightings. If in doubt, call us — we offer free phone assessments for ${townName} residents.`,
    },
    {
      question: `Is your ${pestLower} treatment guaranteed?`,
      answer: `Yes. All treatments come with a follow-up guarantee. If the problem returns within the guarantee period, we will re-treat at no extra charge.`,
    },
    {
      question: `Do you handle commercial ${pestLower} problems in ${townName}?`,
      answer: `Absolutely. We serve restaurants, offices, warehouses, and retail premises across ${townName}. We offer one-off treatments and ongoing pest management contracts.`,
    },
  ]

  // ─── Recent jobs in this town ───
  const townJobs = jobs
    .filter(j => j.town === town)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)

  // Fallback jobs if none match this specific town
  const displayJobs = townJobs.length > 0 ? townJobs : jobs.slice(0, 4)

  // ─── Nearby towns ───
  const nearbyTowns = (td?.nearbyTowns || []).filter(t => towns.includes(t)).slice(0, 3)

  // ─── Related guide ───
  const relevantGuide = guides.find(g => g.relatedService === service)

  // ─── Related services ───
  const relatedServices = services.filter(s => s !== service).slice(0, 6)

  return (
    <div>
      {/* ═══ UNIQUE HERO (not shared with TownServiceLayout) ═══ */}
      <section className="relative min-h-[55vh] flex items-center justify-center py-16 text-center px-4 text-white overflow-hidden">
        <Image
          src={imagePath}
          alt={`${pestName} removal service in ${townName}, Kent`}
          width={1200}
          height={700}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block bg-brand-primary/90 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Same Day Service Available
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            {pestName} in {townName}
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="tel:07400372204"
              className="bg-brand-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-primary-dark transition-colors shadow-lg"
            >
              Call 07400 372204
            </a>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-bold hover:bg-white/20 transition-colors"
            >
              Request Free Quote
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span>&#x2713; BPCA Certified</span>
            <span>&#x2713; Fully Insured</span>
            <span>&#x2713; 5-Star Rated</span>
            <span>&#x2713; Local to {townName}</span>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS (3 steps — engagement signal) ═══ */}
      <section className="py-12 px-4 bg-white border-b border-neutral-100" id="how-it-works">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-neutral-dark">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Call or Book Online', desc: `Ring us on 07400 372204 or fill in our contact form. We will assess your ${pestLower} problem over the phone.` },
              { step: '2', title: 'We Visit Your Property', desc: `A BPCA-certified technician arrives at your ${townName} property — same day where possible. Discreet, unmarked vehicle.` },
              { step: '3', title: 'Problem Solved', desc: `We treat the ${pestLower} issue, proof entry points, and provide aftercare advice. Guaranteed results.` },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-neutral-dark mb-2 text-lg">{s.title}</h3>
                <p className="text-neutral-body text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ URGENCY + TRUST STRIP ═══ */}
      <section className="py-6 px-4 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-bold text-lg">Fast response in {townName}</span>
            <span className="block sm:inline sm:ml-2 text-white/80 text-sm">Same day appointments where possible</span>
          </div>
          <a href="tel:07400372204" className="bg-white text-brand-primary font-bold px-6 py-3 rounded-md hover:bg-neutral-100 transition-colors">
            Call Now
          </a>
        </div>
      </section>

      {/* ═══ WHY THIS PROBLEM IS COMMON IN {TOWN} ═══ */}
      <section className="py-14 px-4" id="why-common">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-neutral-dark">
            Why {pestLower} problems are common in {townName}
          </h2>
          <div className="prose prose-lg text-neutral-body max-w-none space-y-4">
            <p>
              {td?.geography || `${townName} is a key area in Kent with a mix of residential and commercial properties.`}
            </p>
            <p>
              {td?.pestPressureNote || `The local environment and property mix creates conditions that attract ${pestLower}s.`}
            </p>
            {sc?.behavior && (
              <p>{sc.behavior}</p>
            )}
            <p>
              Properties such as {propertyRef} are particularly vulnerable.
              {localFeature ? ` Features like ${localFeature.toLowerCase()} contribute to local pest pressure.` : ''}
              {sc?.seasonalExplanation ? ` ${sc.seasonalExplanation}` : ''}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ MID-PAGE CTA ═══ */}
      <section className="py-8 px-4 bg-neutral-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-bold mb-2">Local {townName} technician near you</p>
          <p className="text-neutral-300 mb-4">Fully insured. Serving Kent from Ashford. 5-star rated.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="tel:07400372204" className="bg-brand-primary text-white px-6 py-3 rounded-md font-bold hover:bg-brand-primary-dark transition-colors">
              Call 07400 372204
            </a>
            <Link href="/contact" className="border border-white/30 text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
              Request a Callback
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SIGNS SECTION (bullet format for scannability) ═══ */}
      {sc?.signs && sc.signs.length > 0 && (
        <section className="py-14 px-4 bg-background-soft" id="signs">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-neutral-dark">
              Signs you have {pestLower}s in your {townName} property
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sc.signs.map((s, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white p-5 rounded-xl border border-neutral-100">
                  <span className="text-brand-primary font-bold text-lg mt-0.5 flex-shrink-0">&#x26A0;</span>
                  <div>
                    <strong className="text-neutral-dark block mb-1">{s.sign}</strong>
                    <span className="text-sm text-neutral-body">{s.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ TREATMENT PROCESS ═══ */}
      {sc?.treatmentSteps && sc.treatmentSteps.length > 0 && (
        <section className="py-14 px-4" id="treatment">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-neutral-dark">
              Our {pestLower} treatment process in {townName}
            </h2>
            <div className="space-y-6">
              {sc.treatmentSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark text-lg mb-1">{step.step}</h3>
                    <p className="text-neutral-body">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {sc.treatmentDuration && (
              <p className="mt-6 text-sm text-neutral-muted italic bg-amber-50 border border-amber-200 p-4 rounded-lg">{sc.treatmentDuration}</p>
            )}
          </div>
        </section>
      )}

      {/* ═══ REVIEW SNIPPET + TRUST ═══ */}
      <ReviewSchema />
      <section className="py-12 px-4 bg-background-soft" id="reviews">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-neutral-dark">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                <div className="flex gap-0.5 mb-3 text-brand-primary">
                  {[...Array(review.rating)].map((_, s) => (
                    <svg key={s} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-neutral-body italic mb-3">
                  &ldquo;{review.text.length > 120 ? review.text.slice(0, 120) + '...' : review.text}&rdquo;
                </blockquote>
                <p className="text-xs font-bold text-neutral-dark">{review.name} — {review.town}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RECENT JOBS IN {TOWN} ═══ */}
      <section className="py-14 px-4" id="recent-jobs">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-neutral-dark">Recent Jobs in {townName}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {displayJobs.map((job, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-neutral-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-brand-primary font-bold">{fmt(job.service)}</span>
                  <span className="text-xs text-neutral-muted">
                    {new Date(job.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-dark mb-2">{fmt(job.area)}, {fmt(job.town)}</p>
                <p className="text-sm text-neutral-body">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DEDICATED FAQ (completely unique to money pages) ═══ */}
      <FAQSchema faqs={moneyFaqs} />
      <section className="py-14 px-4 bg-background-soft" id="faqs">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-neutral-dark">
            {pestName} in {townName} — Your Questions Answered
          </h2>
          <div className="space-y-3">
            {moneyFaqs.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl border border-neutral-100 group">
                <summary className="p-5 cursor-pointer font-bold text-neutral-dark flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="text-brand-primary transition-transform group-open:rotate-45 flex-shrink-0 text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-neutral-body text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PREVENTION TIPS ═══ */}
      {sc?.preventionTips && sc.preventionTips.length > 0 && (
        <section className="py-14 px-4" id="prevention">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-neutral-dark">
              Preventing {pestLower}s in your {townName} home
            </h2>
            <ul className="space-y-3">
              {sc.preventionTips.map((tip, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-brand-primary font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                  <span className="text-neutral-body">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-14 px-4 bg-neutral-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Rid of {pestName} in {townName} Today</h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Do not wait for the problem to get worse. Our local team can usually attend same day.
            Fully insured, BPCA certified, 5-star rated.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07400372204" className="bg-brand-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-primary-dark transition-colors">
              Call 07400 372204
            </a>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STRATEGIC INTERNAL LINKS ═══ */}
      <section className="py-10 px-4 bg-background-soft" aria-label="Related pages">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Parent links */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/services/${service}`} className="bg-white px-5 py-3 rounded-lg border border-neutral-200 font-medium text-brand-primary hover:border-brand-primary transition-colors text-sm">
              {pestName} Services Kent
            </Link>
            <Link href={`/areas/${town}`} className="bg-white px-5 py-3 rounded-lg border border-neutral-200 font-medium text-brand-primary hover:border-brand-primary transition-colors text-sm">
              All Pest Control in {townName}
            </Link>
            <Link href={`/areas/${town}/${service}`} className="bg-white px-5 py-3 rounded-lg border border-neutral-200 font-medium text-brand-primary hover:border-brand-primary transition-colors text-sm">
              {pestName} {townName} (Full Details)
            </Link>
          </div>

          {/* Nearby towns for this service */}
          {nearbyTowns.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3 text-center">{pestName} in Nearby Areas</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {nearbyTowns.map(t => (
                  <Link key={t} href={`/${service}-${t}`} className="text-brand-primary hover:underline text-sm font-medium">
                    {pestName} in {fmt(t)}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Other services in this town */}
          <div>
            <h3 className="text-lg font-bold text-neutral-dark mb-3 text-center">Other Services in {townName}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {relatedServices.map(s => (
                <Link key={s} href={`/areas/${town}/${s}`} className="text-brand-primary hover:underline text-sm font-medium text-center py-1">
                  {serviceContent[s]?.commonName || fmt(s)}
                </Link>
              ))}
            </div>
          </div>

          {/* Guide link */}
          {relevantGuide && (
            <div className="text-center pt-4 border-t border-neutral-200">
              <Link href={`/guides/${relevantGuide.category}/${relevantGuide.slug}`} className="text-brand-primary hover:underline font-medium">
                Read our guide: {relevantGuide.title}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ═══ JUMP LINKS (mobile navigation aid) ═══ */}
      <nav className="py-4 px-4 bg-white border-t border-neutral-100 md:hidden" aria-label="Page sections">
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { id: 'how-it-works', label: 'How It Works' },
            { id: 'signs', label: 'Signs' },
            { id: 'treatment', label: 'Treatment' },
            { id: 'reviews', label: 'Reviews' },
            { id: 'faqs', label: 'FAQs' },
          ].map(link => (
            <a key={link.id} href={`#${link.id}`} className="text-xs bg-background-soft px-3 py-1.5 rounded-full text-neutral-body hover:text-brand-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}
