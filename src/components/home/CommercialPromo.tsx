import Link from 'next/link'
import Image from 'next/image'

export const CommercialPromo = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-neutral-dark rounded-3xl overflow-hidden flex flex-col md:flex-row relative shadow-xl">
          <div className="md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center text-white relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Commercial pest control</h2>
            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
              Protect your business reputation, maintain health code compliance, and secure your facilities with our discreet, heavy-duty commercial pest management contracts.
            </p>
            <ul className="mb-10 space-y-3 font-semibold text-neutral-200">
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Retail & Hospitality</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Warehouses & Logistics</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Office Buildings</li>
              <li className="flex items-center gap-3"><span className="text-brand-primary">✓</span> Landlords & Property Management</li>
            </ul>
            <div className="flex gap-4">
              <Link href="/commercial" className="bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block w-max">
                View Commercial Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[300px]">
            <Image 
              src="/images/commercial/warehouse-pest-control.jpg"
              alt="Commercial pest control services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark to-transparent opacity-90 md:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
