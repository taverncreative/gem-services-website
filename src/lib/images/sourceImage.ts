// A definitive mapping of all uploaded images matching our specific services to avoid ANY external API calls.
const SERVICE_IMAGES: Record<string, string[]> = {
  'rat-control': [
    'Homepage Image Rat Infestation.webp',
    'rat image close up.webp',
    'rat in bin.jpeg',
    'rat in trash.jpeg'
  ],
  'mouse-control': [
    'Mouse.jpeg'
  ],
  'wasp-nest-removal': [
    'wasps in ground.webp',
    'Wasp.jpg',
    'wasps nesting in wall.jpeg'
  ],
  'bed-bug-treatment': [
    'AdobeStock_515015921.jpeg'
  ],
  'flea-treatment': [
    'Flea Fleas.jpg'
  ],
  'cockroach-control': [
    'neon-wang-kfnWOD1Tbp8-unsplash.webp'
  ],
  'bird-control': [
    'Bird.jpeg',
    'bird nesting.webp'
  ],
  'mole-control': [
    'mole hills.jpeg'
  ],
  'fly-control': [
    'Flies.webp',
    'flies on food.jpeg'
  ],
  'moth-control': [
    'moth.jpeg'
  ],
  'squirrel-removal': []
}

export function getServiceImageFilename(service: string, context: 'grid' | 'hero' | 'town' = 'hero'): string {
  const images = SERVICE_IMAGES[service]
  
  // Hard fallback just in case the array is empty or undefined
  if (!images || images.length === 0) {
    return `${service}.jpg`
  }

  // If there's only one image, just return it
  if (images.length === 1) {
    return images[0]
  }

  // If we have multiple options, safely alternate based on the requested visual context
  let index = 0
  if (context === 'grid') {
    index = images.length > 1 ? 1 : 0
  } else if (context === 'town') {
    index = images.length > 2 ? 2 : 0
  }

  return images[index]
}
