export type Job = {
  town: string
  area: string
  service: string
  description: string
  date: string
}

export const jobs: Job[] = [
  {
    town: 'maidstone',
    area: 'bearsted',
    service: 'rat-control',
    description: 'Cleared severe rat infestation in domestic kitchen and sealed entry points.',
    date: '2023-11-12'
  },
  {
    town: 'canterbury',
    area: 'sturry',
    service: 'wasp-nest-removal',
    description: 'Safely treated and removed large wasp nest from residential loft space.',
    date: '2023-08-05'
  },
  {
    town: 'ashford',
    area: 'kingsnorth',
    service: 'mouse-control',
    description: 'Three-part baiting program implemented to eradicate mice in garage.',
    date: '2023-10-21'
  },
  {
    town: 'dover',
    area: 'whitfield',
    service: 'rat-control',
    description: 'Emergency response for rats in garden shed. Burrow baiting completed.',
    date: '2023-12-04'
  },
  {
    town: 'maidstone',
    area: 'allington',
    service: 'wasp-nest-removal',
    description: 'Treated wasp nest located under roof eaves in semi-detached house.',
    date: '2023-07-28'
  },
  {
    town: 'sevenoaks',
    area: 'riverhead',
    service: 'squirrel-control',
    description: 'Trapped and removed grey squirrels from loft and proofed access holes.',
    date: '2023-09-15'
  },
  {
    town: 'tunbridge-wells',
    area: 'southborough',
    service: 'bed-bug-control',
    description: 'Full heat treatment and chemical spray for bed bugs in 2-bedroom flat.',
    date: '2023-11-02'
  },
  {
    town: 'gravesend',
    area: 'northfleet',
    service: 'bird-control',
    description: 'Installed solar panel bird proofing mesh to prevent pigeon nesting.',
    date: '2023-10-10'
  }
]
