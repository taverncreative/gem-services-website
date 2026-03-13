import Link from 'next/link'
import { microLocations } from '@/lib/data/microLocations'
import { guides } from '@/lib/data/guides'

type Props = {
  town: string
  service: string
  parentTown?: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const LocalAreaContent = ({ town, service, parentTown }: Props) => {
  const townName = formatTitle(town)
  const serviceName = formatTitle(service)
  const parentName = parentTown ? formatTitle(parentTown) : null
  
  const relevantGuide = guides.find(g => g.relatedService === service)
  const siblings = parentTown && microLocations[parentTown] 
    ? microLocations[parentTown].filter(a => a !== town).slice(0, 2)
    : []

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Intro */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Local {serviceName.toLowerCase()} experts in {townName}</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              When you are confronted with a pest issue, you need a local expert who is intimately familiar with the geography. 
              We provide rapid emergency callouts directly to residential, commercial, 
              and agricultural properties strictly situated across {townName}{parentName ? ` and the wider ${parentName} area` : ' alongside the surrounding Kent county routes'}.
              In the event of a severe infestation, speed is paramount to protect your physical health and real estate investment.
            </p>
            <p>
              We fully understand the unique specific challenges directly caused by Kent's shifting terrain and local climate. 
              We come equipped with decades of experience, meaning we can eradicate the root cause of the infestation completely, 
              safely, and discreetly. At GEM Services, implementing safe and effective pest treatments remains our absolute priority, actively ensuring your home or business remains fully protected over the longest possible term.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Why {serviceName.toLowerCase()} problems occur in {townName}</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              The dense clustering of historic Victorian properties alongside rapid modern housing estate developments, combined perfectly with our beautiful county-wide green spaces, makes {townName} a highly attractive place for modern families to settle. 
              Unfortunately, this identical combination of variables actively creates an unparalleled, highly abundant habitat for rapid pest population expansion. Older buildings often feature tiny structural gaps in masonry, eroded weep holes, or compromised rooflines, and busy local commercial centres readily provide near infinite food and foraging opportunities for opportunistic scavengers.
            </p>
            <p>
              Seasonal weather changes, notably autumn temperature drops across Kent, constantly drive uninvited pests indoors as they become increasingly desperate in their frantic search for residual warmth and shelter. 
              Once these pests breach your home interior, they immediately enter a dormant breeding phase, which can rapidly spiral into an uncontainable colony structure if not promptly intercepted by a highly trained professional {serviceName.toLowerCase()} operative possessing an active treatment license.
            </p>
            <p>
              If you want to immediately learn more regarding our highly specific eradication formulations and targeted physical trapping methods, 
              we strongly recommend you read our{' '}
              <Link href={`/services/${service}`} className="font-semibold text-brand-primary hover:underline">
                central {serviceName} platform hub
              </Link>{' '}
              for an expansive breakdown detailing our exact treatment solutions.
            </p>
          </div>
        </div>

        {/* Dynamic Context Hook (If Micro Location) */}
        {parentTown && siblings.length > 0 && (
          <div className="bg-brand-primary/5 p-6 rounded-xl border-l-4 border-brand-primary">
            <h3 className="text-xl font-bold mb-2">Covering the wider {parentName} community</h3>
            <p className="text-neutral-body">
              Because our network operation is completely localised to the {parentName} radius, our vans are never far away. If you reside slightly outside {townName}, we also directly service properties in neighbouring sectors such as <strong>{formatTitle(siblings[0])}</strong> and <strong>{formatTitle(siblings[1])}</strong>, allowing us to accurately track broader pest migration patterns through the suburbs.
            </p>
          </div>
        )}

        {/* Dynamic Context Hook (If Guide is available) */}
        {relevantGuide && (
          <div className="bg-neutral-100 p-6 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold mb-2">Concerned about early signs?</h3>
            <p className="text-neutral-body">
              If you suspect an issue but aren't entirely sure, check out our expert guide on{' '}
              <Link href={`/guides/${relevantGuide.category}/${relevantGuide.slug}`} className="font-bold text-brand-primary hover:underline">
                {relevantGuide.title}
              </Link>{' '}
              to visually identify the danger signs before they escalate further.
            </p>
          </div>
        )}

        {/* Section 2 */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Where {serviceName.toLowerCase()} nests are frequently found in {townName} homes</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              The most persistent pests are biologically adapted through centuries of evolution to aggressively seek out the quietest, darkest, and most completely undisturbed architectural areas of your specific property limits. 
              Inside typical {townName} properties, heavy infestations almost invariably begin directly inside the central loft space. Here, raw fibreglass insulation actively serves as the perfect thermal nesting insulation, remaining entirely free from frequent human disruption.
            </p>
            <p>
              Outdoors, mature unkempt gardens, neglected compost bin structures, rotting garden sheds, and hollow wooden decking frames provide highly optimal, long-term sheltered structural harbourages. 
              Navigating back inside the core house blueprint, deep internal wall cavities, heavily inaccessible voids located completely beneath wooden floorboards, and the perpetually warm external motor housing frames sitting behind bulky mechanical kitchen appliances operate as highly desirable prime targets for nesting queens. If you are experiencing heavy scratching audio reverberations at night or rapidly discover unexplained structural property damage, the central nexus nest is realistically situated within proximity.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Our methodical {serviceName.toLowerCase()} removal process in {townName}</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              We pride ourselves on offering reliable and effective emergency pest control for properties in {townName}. The moment you book an urgent {serviceName.toLowerCase()} callout, our local pest control service will arrive at your property fully equipped to handle the situation quickly and safely. 
            </p>
            <p>
              The treatment process begins with a detailed survey of your property's exterior and interior to accurately identify the extent of the infestation and locate how they are getting in. Once we have assessed the area, we apply safe and effective pest treatments to resolve the issue. Finally, we offer professional advice on how to pest-proof your property to protect it moving forward.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-neutral-dark text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Emergency {serviceName.toLowerCase()} callouts in {townName}</h2>
          <div className="prose prose-lg text-neutral-300 max-w-none">
            <p>
              Significant pest emergencies always require rapid immediate intervention. We operate fluidly on a localised basis directly within {townName}, ensuring we consistently reach your property with exceptional speed to resolve the problem safely. We can arrive within a discreet, explicitly unmarked utility vehicle if requested, ensuring we protect your confidentiality and personal privacy completely from neighbours or active commercial clientele.
            </p>
            <p>
              Beyond our {serviceName.toLowerCase()} removal solutions, we have extensive local experience helping homeowners and businesses deal with pest problems of all kinds. You can find out more about our local pest control across Kent by navigating to our general{' '}
              <Link href={parentTown ? `/areas/${parentTown}` : `/areas/${town}`} className="font-semibold text-white hover:text-brand-primary transition-colors underline">
                Pest Control in {parentTown ? parentName : townName}
              </Link>{' '}
              hub today.
            </p>
            <p className="mt-6 font-bold text-xl text-white">
              Do not let the problem escalate. Call our local {townName} service securely today on <a href="tel:01234567890" className="text-brand-primary hover:text-white transition-colors">01234 567 890</a> to secure an immediate rapid quotation!
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
