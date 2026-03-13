export type EmergencyService = {
  slug: string
  title: string
  description: string
}

export const emergencyServices: EmergencyService[] = [
  {
    slug: 'emergency-rat-control',
    title: 'Emergency Rat Control',
    description: 'Rapid response rat control for homes and businesses. We will be with you the same day.'
  },
  {
    slug: 'emergency-wasp-removal',
    title: 'Emergency Wasp Removal',
    description: 'Fast, safe removal of active wasp nests posing an immediate threat.'
  },
  {
    slug: 'emergency-mouse-control',
    title: 'Emergency Mouse Control',
    description: 'Immediate mouse extermination services to stop active infestations fast.'
  },
  {
    slug: 'emergency-pest-control',
    title: 'Emergency Pest Control',
    description: 'Emergency pest control response across Kent. Fully insured and BPCA certified.'
  }
]
