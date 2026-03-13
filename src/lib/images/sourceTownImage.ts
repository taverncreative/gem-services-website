export const AVAILABLE_TOWN_IMAGES = [
  'ashford',
  'canterbury',
  'dartford',
  'kent',
  'maidstone',
  'medway',
  'sevenoaks',
  'tonbridge',
  'tunbridge-wells'
]

export function getTownImageFilename(town: string): string {
  const normalizedTown = town.toLowerCase()
  if (AVAILABLE_TOWN_IMAGES.includes(normalizedTown)) {
    return `${normalizedTown}-kent.jpg`
  }
  return 'kent-kent.jpg'
}
