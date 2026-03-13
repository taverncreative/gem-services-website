type Props = {
  service: string
}

export const TreatmentProcess = ({ service }: Props) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-neutral-dark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">How our {service.split('-').join(' ')} treatment works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6">1</div>
            <h3 className="text-xl font-bold mb-4">Inspection</h3>
            <p className="text-neutral-300">
              We conduct a thorough property survey to identify the extent and source of the infestation.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6">2</div>
            <h3 className="text-xl font-bold mb-4">Eradication</h3>
            <p className="text-neutral-300">
              Safe, targeted treatments are applied to remove the pests rapidly and discreetly.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto bg-brand-primary rounded-full flex items-center justify-center font-bold text-2xl mb-6">3</div>
            <h3 className="text-xl font-bold mb-4">Prevention</h3>
            <p className="text-neutral-300">
              We implement proofing strategies and provide expert advice to stop them returning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
