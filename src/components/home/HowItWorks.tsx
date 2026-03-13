export const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-bold text-xl mb-6">1</div>
            <h3 className="font-bold text-xl mb-3">Contact Us</h3>
            <p className="text-neutral-muted">Call us or request a quote online for a rapid, hassle-free response.</p>
          </div>
          <div className="p-6 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-neutral-200 -z-10" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-bold text-xl mb-6">2</div>
            <h3 className="font-bold text-xl mb-3">Inspection</h3>
            <p className="text-neutral-muted">We will safely survey your property to identify the pest issue.</p>
          </div>
          <div className="p-6 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-neutral-200 -z-10" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-bold text-xl mb-6">3</div>
            <h3 className="font-bold text-xl mb-3">Treatment</h3>
            <p className="text-neutral-muted">We apply highly effective, safe eradication and future prevention measures.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
