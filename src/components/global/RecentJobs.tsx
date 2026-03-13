import { jobs } from '@/lib/data/jobs'

type Props = {
  town?: string
  service?: string
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const RecentJobs = ({ town, service }: Props) => {
  let filteredJobs = jobs
  
  if (town) {
    filteredJobs = filteredJobs.filter(job => job.town === town)
  }
  
  if (service) {
    filteredJobs = filteredJobs.filter(job => job.service === service)
  }

  if (filteredJobs.length === 0) return null

  // Sort by most recent
  filteredJobs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  // Take top 4
  const displayJobs = filteredJobs.slice(0, 4)

  const sectionTitle = town 
    ? `Recent pest control jobs in ${formatTitle(town)}` 
    : 'Recent pest control jobs'

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4" aria-label="Recent pest control jobs">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-neutral-dark">{sectionTitle}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayJobs.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-neutral-100 flex flex-col h-full transition-shadow">
              <div className="text-brand-primary font-bold mb-2 text-lg">
                {formatTitle(job.service)}
              </div>
              <div className="text-sm font-semibold text-neutral-dark mb-3 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {formatTitle(job.area)}, {formatTitle(job.town)}
              </div>
              <p className="text-sm text-neutral-body flex-grow mb-6">
                {job.description}
              </p>
              <div className="text-xs text-neutral-muted mt-auto pt-4 border-t border-neutral-100 font-medium">
                {new Date(job.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
