import Link from 'next/link'
import Image from 'next/image'
import { getServiceImageFilename } from '@/lib/images/sourceImage'

const jobs = [
  { title: 'Urgent Rat Eradication', town: 'Ashford', service: 'rat-control', desc: 'Rapid deployment and complete clearing of a severe rat infestation within a domestic real estate property.' },
  { title: 'Commercial Bird Proofing', town: 'Maidstone', service: 'bird-control', desc: 'Extensive, highly durable netting and spike installation strictly securing a local commercial warehouse facility.' },
  { title: 'Emergency Wasp Removal', town: 'Canterbury', service: 'wasp-nest-removal', desc: 'Secure, fully protected extraction of a massive active wasp nest from a family garden building.' },
]

export const RecentJobs = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-background-soft">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-neutral-dark">Recent activity in Kent</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, idx) => {
            const filename = getServiceImageFilename(job.service, 'hero')
            return (
              <Link key={idx} href={`/services/${job.service}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-lg transition-all group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={`/images/services/${filename}`} alt={job.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">{job.town}</div>
                </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-neutral-dark group-hover:text-brand-primary transition-colors">{job.title}</h3>
                <p className="text-neutral-muted leading-relaxed">{job.desc}</p>
                <div className="mt-4 pt-4 border-t border-neutral-100 text-sm font-semibold text-brand-primary flex items-center">
                  View Service Detail <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
