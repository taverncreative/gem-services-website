export const Certifications = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Trusted & certified professionals</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
            <div className="w-16 h-16 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary text-2xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3">BPCA Membership</h3>
            <p className="text-neutral-muted text-sm">
              We operate strictly according to the guidelines set by the British Pest Control Association, ensuring humane and responsible practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
            <div className="w-16 h-16 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary text-2xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">Fully Insured</h3>
            <p className="text-neutral-muted text-sm">
              We are fully insured, giving you complete peace of mind while we operate on your residential or commercial property.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
            <div className="w-16 h-16 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary text-2xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-3">Safe Treatments</h3>
            <p className="text-neutral-muted text-sm">
              We utilize targeted, industry-approved eradication methods designed to protect your family, pets, and the surrounding environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
