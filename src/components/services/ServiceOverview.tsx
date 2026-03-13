import { ElementType } from 'react'

type Props = {
  service: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const ServiceOverview = ({ service }: Props) => {
  const serviceName = formatTitle(service)
  const pestTitle = serviceName.replace(' Control', '').replace(' Removal', '').replace(' Treatment', '').replace(' Nest', '')

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">Professional {serviceName.toLowerCase()} services</h2>
          <div className="prose prose-lg text-neutral-body max-w-none">
            <p>
              When a {pestTitle.toLowerCase()} infestation takes hold, it rapidly becomes a highly stressful and invasive experience. {pestTitle}s are complex pests that exploit vulnerabilities in your property to find food, water, and shelter. Changes in weather, accessible waste, and unsealed entry points are the primary reasons these infestations occur indoors.
            </p>
            <p>
              Our professional {serviceName.toLowerCase()} service is designed to thoroughly inspect your property, identify the exact source of the incursion, and apply highly targeted, commercial-grade treatments. We focus not only on rapid eradication but also on implementing robust structural proofing so that the pests cannot return.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
