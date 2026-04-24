export type TownData = {
  slug: string
  name: string
  geography: string
  propertyTypes: string[]
  propertyNote: string
  localFeatures: string[]
  pestPressureNote: string
  nearbyTowns: string[]
  populationBand: 'small' | 'medium' | 'large'
}

export const townData: Record<string, TownData> = {
  kent: {
    slug: 'kent',
    name: 'Kent',
    geography: 'Kent stretches from the Thames estuary in the north to the chalk cliffs of Dover in the south, covering a mix of coastal towns, historic cities, farmland, and the Weald.',
    propertyTypes: ['Victorian terraces', 'Edwardian semis', 'Oast house conversions', 'New-build estates', 'Coastal bungalows', 'Rural farmhouses'],
    propertyNote: 'Kent\'s property stock is enormously varied — from medieval timber-framed houses in Canterbury to 1960s concrete estates in Medway and modern developments around Ebbsfleet.',
    localFeatures: ['River Medway corridor', 'North Kent marshes', 'Channel Tunnel terminal at Folkestone', 'Kent Downs AONB', 'Extensive fruit orchards and hop gardens'],
    pestPressureNote: 'Kent\'s mild maritime climate and mix of urban, rural, and coastal environments supports a wide range of pest species year-round. The county\'s ports and transport links also introduce non-native pest species.',
    nearbyTowns: ['maidstone', 'canterbury', 'ashford', 'dartford', 'medway'],
    populationBand: 'large'
  },
  ashford: {
    slug: 'ashford',
    name: 'Ashford',
    geography: 'Ashford sits at the junction of the Great Stour and East Stour rivers in central Kent, surrounded by farmland with the North Downs to the north and Romney Marsh to the south.',
    propertyTypes: ['Victorian terraces in the town centre', 'Post-war council estates', 'Large new-build developments at Finberry and Chilmington Green', 'Rural cottages on the outskirts'],
    propertyNote: 'Ashford has seen rapid residential expansion since the 2000s, with major new estates at Singleton, Park Farm, and Finberry. These modern builds sit alongside the older Victorian and Edwardian town centre.',
    localFeatures: ['River Stour running through the town', 'Ashford International Station (HS1)', 'Designer Outlet shopping centre', 'Victoria Park', 'Surrounding hop and arable farmland'],
    pestPressureNote: 'The rivers attract rats and other waterside pests, while Ashford\'s rapid expansion has disturbed agricultural land, pushing field mice and moles into new housing estates. Large construction sites also create harbourage opportunities.',
    nearbyTowns: ['canterbury', 'maidstone', 'folkestone', 'hythe', 'faversham'],
    populationBand: 'large'
  },
  maidstone: {
    slug: 'maidstone',
    name: 'Maidstone',
    geography: 'Maidstone is the county town of Kent, sitting on the River Medway in the heart of the county. The town centre sits in a valley with residential areas climbing the surrounding hills.',
    propertyTypes: ['Victorian and Edwardian terraces near the centre', '1930s semis in Bearsted and Barming', 'Post-war estates at Shepway and Park Wood', 'Rural properties on the Downs fringe'],
    propertyNote: 'Maidstone has a dense mix of housing ages, from the medieval buildings along the river to large 1960s council estates and modern infill developments. Older properties around the centre are particularly susceptible to pest entry through aging fabric.',
    localFeatures: ['River Medway running through the centre', 'Mote Park (180 acres)', 'Town centre restaurant and bar district', 'Lockmeadow leisure complex', 'Leeds Castle nearby'],
    pestPressureNote: 'The River Medway corridor is a well-established rat habitat. Maidstone\'s busy town centre hospitality district generates food waste that attracts rodents. Older Victorian properties near the centre have the cavity walls and aging mortar that pests exploit.',
    nearbyTowns: ['tonbridge', 'sevenoaks', 'ashford', 'canterbury', 'medway'],
    populationBand: 'large'
  },
  canterbury: {
    slug: 'canterbury',
    name: 'Canterbury',
    geography: 'Canterbury is a historic cathedral city on the River Stour in east Kent. The city centre is compact and largely within the medieval city walls, with suburbs spreading outwards along main roads.',
    propertyTypes: ['Medieval and Tudor buildings in the city centre', 'Victorian terraces in Wincheap and St Dunstans', 'Post-war housing at Hales Place and Rough Common', 'Student HMOs near the universities'],
    propertyNote: 'Canterbury has a high concentration of historic buildings in the centre, many with timber frames and old stonework. The city\'s three universities create a large student rental market, and HMOs require particular attention to pest management.',
    localFeatures: ['Canterbury Cathedral and UNESCO World Heritage Site', 'River Stour', 'Three universities (Kent, CCCU, UCA)', 'Busy high street and restaurant district', 'Surrounding agricultural land'],
    pestPressureNote: 'The combination of historic buildings with aging fabric, a high density of restaurants and takeaways serving the student population, and the River Stour makes Canterbury a persistent hotspot for rats and mice. Student properties often have fast tenant turnover, allowing problems to go unreported.',
    nearbyTowns: ['ashford', 'maidstone', 'herne-bay', 'whitstable', 'faversham'],
    populationBand: 'medium'
  },
  dartford: {
    slug: 'dartford',
    name: 'Dartford',
    geography: 'Dartford lies in north-west Kent on the River Darent near its confluence with the Thames. The town is close to the M25/Dartford Crossing and has strong transport links to London.',
    propertyTypes: ['Victorian terraces near the centre', 'Inter-war semis in Temple Hill', 'Large new-build estates at Ebbsfleet and The Bridge', 'Industrial conversions near the river'],
    propertyNote: 'Dartford is a mix of traditional town centre housing and major new developments driven by Ebbsfleet Valley. The proximity to marshland and the Thames brings particular pest challenges to riverside and low-lying properties.',
    localFeatures: ['River Darent', 'Dartford Crossing and M25 junction', 'Bluewater Shopping Centre nearby', 'Dartford Marshes', 'Ebbsfleet International (HS1)'],
    pestPressureNote: 'Dartford\'s position near the Thames marshes and River Darent creates a high-moisture environment that attracts rats. New-build estates on previously undeveloped land often experience rodent problems as displaced populations seek food and shelter in new buildings.',
    nearbyTowns: ['gravesend', 'medway', 'sevenoaks', 'maidstone', 'strood'],
    populationBand: 'large'
  },
  sevenoaks: {
    slug: 'sevenoaks',
    name: 'Sevenoaks',
    geography: 'Sevenoaks sits on the greensand ridge in west Kent, overlooking the Weald. It is a prosperous commuter town surrounded by extensive woodland, parkland, and countryside.',
    propertyTypes: ['Large detached houses and period properties', 'Edwardian villas along the Vine', '1920s-1930s semis in Riverhead and Dunton Green', 'Rural properties in the surrounding villages'],
    propertyNote: 'Sevenoaks has a high proportion of large, detached properties with extensive gardens. Older houses in the town centre have cellars, large loft spaces, and mature gardens — all features that provide harbourage for pests.',
    localFeatures: ['Knole Park (1,000-acre deer park)', 'Extensive mature woodland and greensand ridge', 'The Vine cricket ground', 'Proximity to the M25 and London commuter belt', 'Rural villages including Seal, Otford, and Weald'],
    pestPressureNote: 'Sevenoaks\' abundant green spaces and mature woodland support large squirrel, mole, and rodent populations. Large properties with extensive gardens and older construction are particularly vulnerable to pest entry. Knole Park\'s wildlife spills into surrounding residential areas.',
    nearbyTowns: ['tonbridge', 'maidstone', 'dartford', 'tunbridge-wells', 'west-malling'],
    populationBand: 'medium'
  },
  tonbridge: {
    slug: 'tonbridge',
    name: 'Tonbridge',
    geography: 'Tonbridge is a market town on the River Medway in west Kent, with the town centre clustered around the medieval castle and High Street. Residential areas spread north and south along the river valley.',
    propertyTypes: ['Period properties near the castle', 'Victorian and Edwardian terraces along the High Street', '1960s-1970s estates in Higham Wood', 'Village houses in Hadlow, Hildenborough, and surrounding areas'],
    propertyNote: 'Tonbridge has a compact town centre with older housing stock, surrounded by newer suburban development and rural villages. Properties along the Medway flood plain face particular challenges with damp and pest ingress.',
    localFeatures: ['River Medway and flood plain', 'Tonbridge Castle', 'Haysden Country Park', 'Surrounding orchards and farmland', 'Rail links to London Bridge'],
    pestPressureNote: 'The River Medway supports an active rat population along its banks and into properties near the water. Periodic flooding pushes rodents into higher ground. The surrounding farmland and orchards attract field mice, wasps, and other rural pests into the edges of the town.',
    nearbyTowns: ['tunbridge-wells', 'sevenoaks', 'maidstone', 'west-malling', 'ashford'],
    populationBand: 'medium'
  },
  'tunbridge-wells': {
    slug: 'tunbridge-wells',
    name: 'Tunbridge Wells',
    geography: 'Royal Tunbridge Wells sits on high sandstone ridges in the far west of Kent near the Sussex border. The town is set among ancient woodland and heathland, with the Pantiles historic colonnade at its centre.',
    propertyTypes: ['Georgian and Regency villas in the town centre', 'Large Victorian houses in Calverley and Mount Ephraim', '1930s semis in Southborough and Pembury', 'Rural properties in surrounding villages'],
    propertyNote: 'Tunbridge Wells has some of the finest period architecture in Kent, with large houses dating from the town\'s 18th-century spa days. These older properties have complex roof structures, cellars, and large gardens that present multiple pest entry points.',
    localFeatures: ['The Pantiles historic colonnade', 'Tunbridge Wells Common and High Rocks', 'Dunorlan Park', 'Surrounding High Weald AONB', 'Independent shops and restaurant scene'],
    pestPressureNote: 'Surrounded by ancient woodland and heathland, Tunbridge Wells has significant squirrel, mouse, and wasp pressure. Large period houses with complex rooflines and cellars provide many pest entry opportunities. The restaurant district in the town centre attracts urban rodent populations.',
    nearbyTowns: ['tonbridge', 'sevenoaks', 'maidstone', 'ashford', 'canterbury'],
    populationBand: 'medium'
  },
  medway: {
    slug: 'medway',
    name: 'Medway',
    geography: 'Medway is a conurbation of five towns — Rochester, Chatham, Gillingham, Rainham, and Strood — clustered along the River Medway estuary in north Kent. It is the largest urban area in the county.',
    propertyTypes: ['Victorian and Edwardian terraces in Rochester and Chatham', 'Naval dockyard conversions', 'Post-war estates across Gillingham and Chatham', 'New developments at Rochester Riverside'],
    propertyNote: 'Medway\'s housing stock is predominantly Victorian terraces and 20th-century council estates, with significant ongoing regeneration along the river. The high density of older terraced housing means pest problems can easily spread between adjoining properties through shared wall cavities.',
    localFeatures: ['River Medway estuary', 'Historic Dockyard Chatham', 'Rochester Castle and Cathedral', 'Medway Valley railway line', 'Proximity to Thames marshes'],
    pestPressureNote: 'Medway\'s density, older housing stock, river estuary, and proximity to marshland create persistent pest pressure. Terraced streets allow rats and mice to travel through shared cavities between properties. The dockyard and river areas have established rat populations.',
    nearbyTowns: ['maidstone', 'dartford', 'gravesend', 'sittingbourne', 'faversham'],
    populationBand: 'large'
  }
}

// Backwards-compatible export of town slugs
export const towns = Object.keys(townData)
