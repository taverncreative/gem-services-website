import fs from 'fs'
import path from 'path'
import { services } from '../src/lib/data/services'
import { towns } from '../src/lib/data/towns'
import { commercialIndustries } from '../src/lib/data/commercialIndustries'
import { guides } from '../src/lib/data/guides'

import { getServiceImageFilename } from '../src/lib/images/sourceImage'

const SERVICE_QUERY_MAP: Record<string, string> = {
  'rat-control': 'brown rat rodent pest macro',
  'mouse-control': 'house mouse rodent pest macro',
  'wasp-nest-removal': 'wasp insect angry macro nest -bee',
  'bed-bug-treatment': 'bed bug insect mattress pest macro',
  'flea-treatment': 'flea insect macro animal pest',
  'cockroach-control': 'cockroach insect pest macro close-up',
  'bird-control': 'pigeon bird pest roof',
  'squirrel-removal': 'grey squirrel pest damage',
  'mole-control': 'mole pest soil hill',
}

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

async function downloadImage(fallbackQuery: string, fullPath: string) {
  if (fs.existsSync(fullPath)) {
    console.log(`Exists locally: ${fullPath}`)
    return
  }

  console.log(`Fetching from Unsplash: ${fullPath} for query: "${fallbackQuery}"`)
  try {
    const dir = path.dirname(fullPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const searchUrl = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(fallbackQuery)}&per_page=10&orientation=landscape`
    const res = await fetch(searchUrl, { cache: 'no-store' })
    const data = await res.json()
    
    if (data.results && data.results.length > 0) {
      let selectedResult = data.results.find((r: any) => {
        const isPremium = r.premium === true;
        const isAi = r.tags?.some((t: any) => 
          t.title?.toLowerCase().includes('ai generated') || 
          t.title?.toLowerCase().includes('ai-generated') || 
          t.title?.toLowerCase() === 'ai' ||
          t.title?.toLowerCase().includes('generative')
        );
        return !isPremium && !isAi;
      })
      
      if (!selectedResult) {
        selectedResult = data.results.find((r: any) => !r.premium) || data.results[0]
      }

      const rawUrl = selectedResult.urls.raw
      const imgUrl = `${rawUrl}&w=1600&h=900&fit=crop&q=80`
      
      const imgRes = await fetch(imgUrl)
      if (imgRes.ok) {
        const buffer = await imgRes.arrayBuffer()
        fs.writeFileSync(fullPath, Buffer.from(buffer))
        console.log(`Saved successfully: ${fullPath}`)
        return
      }
    }
    console.warn(`No results for ${fallbackQuery}`)
  } catch (error) {
    console.error(`Error fetching for ${fallbackQuery}:`, error)
  }
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public', 'images')
  
  const folders = ['hero', 'services', 'towns', 'commercial', 'guides', 'jobs']
  for (const f of folders) {
    const dir = path.join(publicDir, f)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  }

  await downloadImage('work van', path.join(publicDir, 'hero/homepage.jpg'))

  for (const service of services) {
    const title = formatTitle(service)
    const filename = getServiceImageFilename(service)
    const query = SERVICE_QUERY_MAP[service] || `${title} pest control insect animal`
    await downloadImage(query, path.join(publicDir, `services/${filename}`))
  }

  for (const town of towns) {
    await downloadImage(`village street england`, path.join(publicDir, `towns/${town}.jpg`))
  }

  for (const industry of commercialIndustries) {
    await downloadImage(`${industry.title} interior`, path.join(publicDir, `commercial/${industry.slug}.jpg`))
  }

  for (const guide of guides) {
    await downloadImage(`${guide.category} pest damage`, path.join(publicDir, `guides/${guide.slug}.jpg`))
  }
}

main().catch(console.error)
