import Link from 'next/link'
import { towns } from '@/lib/data/towns'
import { visibleServices } from '@/lib/data/services'

type Props = {
  town: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const TownAuthorityContent = ({ town }: Props) => {
  const townName = formatTitle(town)
  const nearbyTowns = towns.filter(t => t !== town).sort().slice(0, 3)
  
  // Contextual internal linking to primary pest problems
  const service1 = visibleServices[0] || 'rat-control'
  const service2 = visibleServices[1] || 'wasp-nest-removal'

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section 1 */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Leading pest control solutions in {townName}</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              Like many vibrant, diverse areas across Kent, private properties and rapidly expanding business districts located throughout {townName} occasionally experience severe, highly unwanted pest activity. The localised climate, combined perfectly with dense urban infrastructure situated right beside sprawling rural environments, continuously generates an unparalleled habitat for aggressive wildlife incursions. 
              As a BPCA-certified service, we possess a deep, localised geographical understanding of these unique topographical challenges and frequently respond to urgent emergency callouts for{' '}
              <Link href={`/areas/${town}/${service1}`} className="font-semibold text-brand-primary hover:underline">
                {formatTitle(service1)} in {townName}
              </Link>{' '}
              and complex, multi-site interventions regarding{' '}
              <Link href={`/areas/${town}/${service2}`} className="font-semibold text-brand-primary hover:underline">
                {formatTitle(service2)} in {townName}
              </Link>. 
              Proactively addressing these hazardous infestations with immediate, scientifically backed eradication strategies helps to crucially protect the long-term structural integrity of local homes, definitively secure the unblemished reputation of high-street businesses, and completely safeguard the physical health of local residents from dangerous zoonotic diseases.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Why persistent pests target {townName} properties</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              The intricate mix of highly susceptible historic Victorian buildings, contemporary glass-fronted commercial centres, and heavily insulated new residential developments in {townName} actively provides virtually unlimited opportunities for foraging pests to locate a stable, undisturbed shelter boasting constant access to rich food and water sources. Older architectural structures notoriously suffer from slowly degrading lime mortar, naturally shifting foundations, compromised roofing eaves, and physically eroded sub-floor vents. Because pests possess incredible biological agility—mice can easily squeeze entirely through a gap the width of a standard pencil—these minute structural failures essentially act as an open door straight into the warm, isolated cavities of your property.
            </p>
            <p>
              Simultaneously, the bustling modern business parks, thriving local hospitality venues, and busy food-processing outlets scattered continuously around {townName} offer highly abundant, high-calorie foraging opportunities for opportunistic rodent scavengers and flying insects. The immense volume of commercial waste securely generated daily operates as a constant, irresistible beacon for local wildlife. Once the environmental temperature noticeably drops during the wet Kent Autumn, these pest populations inevitably migrate aggressively inward from the exterior perimeters, seeking a hospitable ecosystem to overwinter, rapidly reproduce, and drastically multiply out of control without expert intervention.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Professional residential pest control services</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              Your personal family home should always operate as a totally safe, sanitary sanctuary, completely isolated from external biological threats. When a terrifying pest emergency visibly shatters that peace of mind, we explicitly understand the intense distress and sheer physiological panic it causes. We strictly deliver highly discreet, 100% physically guaranteed residential pest control meticulously tailored to your exact internal environment. Whether you are actively battling a severe wasp swarm entrenched deep within the loft space of your suburban detached house, or fighting a relentless, highly destructive rodent colony gnawing relentlessly beneath your kitchen floorboards, we ensure rapid, highly ethical eradication. 
            </p>
            <p>
              We pride ourselves continuously on our extreme discretion; our vehicle remains purposely unmarked upon your visual request, absolutely ensuring your private pest issue is firmly kept confidential from the surrounding Neighbourhood. After completely neutralizing the immediate active threat, we apply state-of-the-art, heavy-duty proofing architecture—such as specialised galvanized mesh barriers and impenetrable sealant compounds—to decisively prevent any future generational incursions.
            </p>
          </div>
        </div>
        
        {/* Section 4 */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Specialised commercial pest control services</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              In extreme contrast to private domestic properties, a significant commercial pest outbreak inside a working {townName} facility can instantly trigger a cascade of devastating operational consequences, including horrific PR nightmares, immediate catastrophic loss of customer confidence, completely ruined inventory supply chains, and potentially crippling Environmental Health closures. GEM Services provides robust, intensely proactive commercial pest management contracts deliberately engineered to flawlessly satisfy the incredibly strict compliance requirements set deliberately by modern industry hygiene auditors.
            </p>
            <p>
              We carry out regular site surveys and install safe, tamper-proof bait stations and effective insect control systems. By keeping a close eye on activity and providing clear reporting, we help ensure your hospitality business, warehouse, or retail storefront remains pest-free, fully operational, and compliant all year round.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="bg-background-soft p-10 rounded-xl border border-neutral-100 mt-16 shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-neutral-dark">Expansive local coverage around {townName}</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              Because we are deeply embedded geographically, we exclusively don't just cover the immediate inner-city centre limit of {townName}. We provide rapid emergency callouts continuously across the entire rural perimeter, responding directly to the loosely connected surrounding local village communities, specifically including robust operations within the districts of {' '}
              {nearbyTowns.map((t, idx) => (
                <span key={t}>
                  <Link href={`/areas/${t}`} className="font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors hover:underline">
                    {formatTitle(t)}
                  </Link>
                  {idx < nearbyTowns.length - 2 ? ', ' : idx === nearbyTowns.length - 2 ? ' and ' : ''}
                </span>
              ))}.
            </p>
            <p className="mt-8 mb-0">
              <Link href="/areas" className="font-bold text-lg text-brand-primary hover:text-brand-primary-dark hover:underline group inline-flex items-center">
                Explore our local Kent service areas fully <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
