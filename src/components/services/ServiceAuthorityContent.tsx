import Link from 'next/link'
import { towns } from '@/lib/data/towns'
import { serviceContent } from '@/lib/data/serviceContent'

type Props = {
  service: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const ServiceAuthorityContent = ({ service }: Props) => {
  const sc = serviceContent[service]
  const pestName = sc?.commonName || formatTitle(service).replace(/\s*(Control|Removal|Treatment|Nest)$/i, '')
  const serviceName = sc ? `${sc.pestName} control` : formatTitle(service).toLowerCase()
  const displayTowns = [...towns].sort()
  
  // Pick two random towns for contextual linking or use the first two
  const town1 = displayTowns[0]
  const town2 = displayTowns[1]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section 1 */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-neutral-dark">Signs of a {pestName.toLowerCase()} infestation</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              Identifying a pest problem early is critical to preventing extensive property damage or health risks.
              The signs of a {pestName.toLowerCase()} issue can vary, but generally include unusual noises,
              visible droppings, property damage, or actual sightings. If you suspect an issue, rapid intervention is essential.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-neutral-dark">Where {pestName.toLowerCase()} problems usually occur</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              Pests often seek out areas that provide shelter, warmth, and access to food and water. 
              Common harbourage points in homes and businesses include lofts, wall cavities, under floorboards, 
              behind appliances, and in undisturbed outbuildings or sheds.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-neutral-dark">Our {serviceName} Treatment Process</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              We follow a strict, BPCA-approved methodology for every {serviceName.toLowerCase()} callout. 
              Our technicians begin with a thorough survey to identify the extent of the infestation and locate entry points. 
              We then implement a targeted eradication strategy using professional-grade treatments that are safe for your family and pets.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-neutral-dark">Preventing {pestName.toLowerCase()} problems returning</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              Eradication is only half the battle. To ensure long-term protection, our experts will provide detailed proofing recommendations. 
              This may involve sealing entry points, fixing structural gaps, or advising on habitat modification to make your property 
              less attractive to pests in the future.
            </p>
          </div>
        </div>

        {/* Section 5 & Contextual Links */}
        <div className="bg-background-soft p-8 rounded-lg border border-neutral-100">
          <h2 className="text-2xl font-bold mb-4 text-neutral-dark">Emergency {serviceName} in Kent</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              If you require urgent assistance, our rapid-response team operates across the whole of Kent. 
              For example, you can learn more about our specific local response times by visiting our dedicated{' '}
              <Link href={`/areas/${town1}/${service}`} className="font-semibold text-brand-primary hover:underline">
                {serviceName} in {formatTitle(town1)}
              </Link>{' '}
              page, or our covering area for{' '}
              <Link href={`/areas/${town2}/${service}`} className="font-semibold text-brand-primary hover:underline">
                {serviceName} in {formatTitle(town2)}
              </Link>.
            </p>
            <p className="mt-6 mb-0">
              <Link href="/areas" className="font-bold text-brand-primary hover:underline group inline-flex items-center">
                View all our Kent coverage areas <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
