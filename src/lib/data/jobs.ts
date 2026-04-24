export type Job = {
  town: string
  area: string
  service: string
  description: string
  date: string
}

export const jobs: Job[] = [
  // Maidstone area
  { town: 'maidstone', area: 'bearsted', service: 'rat-control', description: 'Cleared rat infestation in kitchen and utility room of a detached house. Sealed entry points around pipes and fitted mesh to air bricks.', date: '2025-01-12' },
  { town: 'maidstone', area: 'allington', service: 'wasp-nest-removal', description: 'Treated large wasp nest in the soffit of a semi-detached house. Nest was above the front door and causing daily sting risk.', date: '2025-08-05' },
  { town: 'maidstone', area: 'penenden-heath', service: 'mouse-control', description: 'Baiting programme for mice in a 1930s semi. Entry via gap around boiler flue. Proofed with wire wool and steel plates.', date: '2025-11-21' },
  { town: 'maidstone', area: 'loose', service: 'mole-control', description: 'Trapped two moles causing extensive damage to a large lawn in the Loose valley.', date: '2025-04-15' },
  { town: 'maidstone', area: 'barming', service: 'flea-treatment', description: 'Full house flea treatment in a rental property between tenants. Previous occupants had two cats.', date: '2025-09-30' },
  { town: 'maidstone', area: 'coxheath', service: 'bed-bug-treatment', description: 'Two-visit bed bug treatment in a terraced cottage. Infestation traced to second-hand headboard.', date: '2025-06-18' },
  { town: 'maidstone', area: 'bearsted', service: 'squirrel-removal', description: 'Trapped three grey squirrels in a loft space. Gnawed cables found and entry points sealed with galvanised mesh.', date: '2025-10-08' },
  { town: 'maidstone', area: 'allington', service: 'ant-control', description: 'Gel bait treatment for persistent ant trail from garden into kitchen of a 1960s house.', date: '2025-07-22' },

  // Canterbury area
  { town: 'canterbury', area: 'sturry', service: 'wasp-nest-removal', description: 'Emergency wasp nest removal from a garden shed roof during a family barbecue.', date: '2025-07-28' },
  { town: 'canterbury', area: 'chartham', service: 'rat-control', description: 'Baiting programme for rats in a period cottage near the River Stour. Damaged drain identified as entry route.', date: '2025-12-04' },
  { town: 'canterbury', area: 'littlebourne', service: 'mouse-control', description: 'Mouse proofing for a Victorian terrace near the university. Sealed 14 entry points around pipes and cable runs.', date: '2025-02-15' },
  { town: 'canterbury', area: 'bridge', service: 'moth-control', description: 'Clothes moth treatment in a period farmhouse. Extensive damage to wool carpets under heavy furniture.', date: '2025-05-20' },
  { town: 'canterbury', area: 'aylesham', service: 'flea-treatment', description: 'Flea spray treatment in a former miners\' cottage. Pet dog flea treatment coordinated with the owner\'s vet.', date: '2025-08-14' },
  { town: 'canterbury', area: 'bekesbourne', service: 'mole-control', description: 'Single mole trapped in a large country garden. Activity had spread across the main lawn over several weeks.', date: '2025-03-25' },
  { town: 'canterbury', area: 'sturry', service: 'cockroach-control', description: 'German cockroach treatment in a takeaway restaurant kitchen. Three visits to achieve full eradication.', date: '2025-11-05' },

  // Ashford area
  { town: 'ashford', area: 'kingsnorth', service: 'mouse-control', description: 'Three-part baiting programme for mice in a detached garage and adjoining utility room.', date: '2025-10-21' },
  { town: 'ashford', area: 'kennington', service: 'rat-control', description: 'Rat burrows under decking in a new-build garden. Baiting and burrow treatment over three visits.', date: '2025-01-30' },
  { town: 'ashford', area: 'willesborough', service: 'wasp-nest-removal', description: 'Wasp nest in a wall cavity accessed through a cracked air brick. Treated with insecticidal dust.', date: '2025-06-15' },
  { town: 'ashford', area: 'singleton', service: 'bed-bug-treatment', description: 'Bed bug treatment in a modern apartment. Infestation brought back from a European holiday in luggage.', date: '2025-09-02' },
  { town: 'ashford', area: 'godinton', service: 'bird-control', description: 'Solar panel bird proofing on a detached house. Pigeons nesting underneath had blocked gutters.', date: '2025-04-10' },
  { town: 'ashford', area: 'sevington', service: 'fly-control', description: 'Identified dead bird in chimney flue as source of heavy bluebottle infestation. Removed and treated.', date: '2025-07-05' },
  { town: 'ashford', area: 'kennington', service: 'ant-control', description: 'Ant colony nesting under kitchen floor tiles in a 1980s house. Bait treatment eliminated the colony within two weeks.', date: '2025-06-28' },

  // Dartford area
  { town: 'dartford', area: 'wilmington', service: 'rat-control', description: 'Emergency response for rats in a kitchen. Entry via damaged drain inspection chamber in the garden.', date: '2025-12-04' },
  { town: 'dartford', area: 'greenhithe', service: 'mouse-control', description: 'Mice in a waterfront apartment block. Coordinated treatment across three units sharing a service riser.', date: '2025-02-18' },
  { town: 'dartford', area: 'joydens-wood', service: 'squirrel-removal', description: 'Grey squirrel trapped in loft of a 1950s detached house bordering the woodland. Chewed wiring repaired.', date: '2025-10-25' },
  { town: 'dartford', area: 'stone', service: 'wasp-nest-removal', description: 'Underground wasp nest in a front garden near a school path. Treated same-day due to child safety concerns.', date: '2025-08-12' },
  { town: 'dartford', area: 'darenth', service: 'mole-control', description: 'Mole causing damage to a riverside garden in the Darent valley. Trapped within five days.', date: '2025-03-18' },
  { town: 'dartford', area: 'hawley', service: 'flea-treatment', description: 'Flea treatment in a bungalow. Owner\'s cat had stopped responding to over-the-counter flea drops.', date: '2025-09-08' },

  // Sevenoaks area
  { town: 'sevenoaks', area: 'riverhead', service: 'squirrel-removal', description: 'Trapped and removed grey squirrels from loft and proofed three access points along the roofline.', date: '2025-09-15' },
  { town: 'sevenoaks', area: 'seal', service: 'rat-control', description: 'Rat activity in a rural outbuilding. Baiting programme and proofing of stone wall gaps.', date: '2025-11-28' },
  { town: 'sevenoaks', area: 'otford', service: 'wasp-nest-removal', description: 'Two wasp nests found during a pre-purchase property survey. Both treated and removed before completion.', date: '2025-07-20' },
  { town: 'sevenoaks', area: 'weald', service: 'mole-control', description: 'Moles across a large garden with formal lawn. Three moles trapped over two weeks.', date: '2025-04-22' },
  { town: 'sevenoaks', area: 'dunton-green', service: 'mouse-control', description: 'Mice entering a Victorian house through gaps around original sash windows. Proofed and baited.', date: '2025-01-05' },
  { town: 'sevenoaks', area: 'brasted', service: 'moth-control', description: 'Carpet moth damage to wool rugs in a period house. Residual spray and pheromone monitoring traps placed.', date: '2025-05-14' },

  // Tonbridge area
  { town: 'tonbridge', area: 'hildenborough', service: 'rat-control', description: 'Rats from the orchard margins entering a 1930s house through a cracked drain. Drain repaired and rats baited.', date: '2025-12-10' },
  { town: 'tonbridge', area: 'hadlow', service: 'wasp-nest-removal', description: 'Large wasp nest in a barn conversion loft. Treated with insecticidal dust through the eaves gap.', date: '2025-08-22' },
  { town: 'tonbridge', area: 'leigh', service: 'mole-control', description: 'Mole trapping on a village cricket ground. Two moles caught and pitch repaired before the season.', date: '2025-03-08' },
  { town: 'tonbridge', area: 'shipbourne', service: 'mouse-control', description: 'Mice in an oast house conversion. Entry via the cowl ventilation gaps. Sealed with fine mesh.', date: '2025-11-15' },
  { town: 'tonbridge', area: 'golden-green', service: 'bird-control', description: 'Pigeon proofing on a barn conversion with solar panels. Mesh fitted around all panel edges.', date: '2025-05-30' },
  { town: 'tonbridge', area: 'tudeley', service: 'squirrel-removal', description: 'Squirrel accessing a cottage loft via overhanging oak branches. Trapped and tree branches cut back.', date: '2025-10-18' },

  // Tunbridge Wells area
  { town: 'tunbridge-wells', area: 'southborough', service: 'bed-bug-treatment', description: 'Two-visit bed bug treatment in a Victorian flat. Source traced to a second-hand wardrobe.', date: '2025-11-02' },
  { town: 'tunbridge-wells', area: 'rusthall', service: 'wasp-nest-removal', description: 'Wasp nest in a sandstone crevice near Toad Rock. Treated carefully due to the public footpath.', date: '2025-07-14' },
  { town: 'tunbridge-wells', area: 'pembury', service: 'rat-control', description: 'Rats in a garden compost area spreading into the garage. Baiting and compost bin replacement advice.', date: '2025-01-22' },
  { town: 'tunbridge-wells', area: 'langton-green', service: 'mole-control', description: 'Persistent mole on a large formal lawn. Single mole trapped on the second visit.', date: '2025-04-05' },
  { town: 'tunbridge-wells', area: 'speldhurst', service: 'mouse-control', description: 'Mice in a period village house. Multiple entry points around original timber window frames sealed.', date: '2025-02-28' },
  { town: 'tunbridge-wells', area: 'frant', service: 'squirrel-removal', description: 'Two squirrels in a large Victorian loft. Extensive insulation damage found and repaired after trapping.', date: '2025-10-30' },

  // Medway area
  { town: 'medway', area: 'rochester', service: 'rat-control', description: 'Rats in a Victorian terrace near the river. Shared wall cavity treatment coordinated with neighbour.', date: '2025-12-15' },
  { town: 'medway', area: 'chatham', service: 'cockroach-control', description: 'German cockroach eradication in a restaurant kitchen. Gel bait and spray over three visits.', date: '2025-09-20' },
  { town: 'medway', area: 'gillingham', service: 'wasp-nest-removal', description: 'Wasp nest behind fascia board of a 1960s semi. Access required careful ladder work on a sloped driveway.', date: '2025-08-08' },
  { town: 'medway', area: 'rainham', service: 'mouse-control', description: 'Mouse problem in a 1930s bungalow. Mice entering through the garage connecting door.', date: '2025-01-18' },
  { town: 'medway', area: 'strood', service: 'flea-treatment', description: 'Flea treatment in a rental house before new tenants moved in. Previous owner had multiple pets.', date: '2025-06-25' },
  { town: 'medway', area: 'rochester', service: 'bird-control', description: 'Pigeon netting installed on a commercial building in Rochester High Street. Cleaned heavy fouling from the frontage.', date: '2025-05-10' },

  // Additional coverage for less common services
  { town: 'maidstone', area: 'penenden-heath', service: 'silverfish-control', description: 'Silverfish treatment in a damp bathroom. Insecticidal dust applied and ventilation improvements recommended.', date: '2025-03-12' },
  { town: 'canterbury', area: 'sturry', service: 'carpet-beetles', description: 'Carpet beetle larvae found under sofas in a period house. Residual spray and bird nest in eaves removed as source.', date: '2025-05-28' },
  { town: 'ashford', area: 'willesborough', service: 'stored-product-insects', description: 'Indian meal moth infestation in a kitchen pantry. Contaminated food removed and cupboards treated.', date: '2025-08-18' },
  { town: 'dartford', area: 'stone', service: 'cluster-flies', description: 'Cluster fly smoke treatment in a loft space. Hundreds of flies hibernating behind the fascia boards.', date: '2025-10-05' },
  { town: 'sevenoaks', area: 'weald', service: 'drain-flies', description: 'Drain flies in a guest bathroom. Infrequently used shower drain was the breeding source. Cleaned and treated.', date: '2025-07-10' },
  { town: 'tonbridge', area: 'hildenborough', service: 'cockroach-control', description: 'Oriental cockroaches in a damp basement of a Victorian house. Two treatments plus damp-proofing advice.', date: '2025-11-22' },
  { town: 'tunbridge-wells', area: 'pembury', service: 'fly-control', description: 'Cluster flies emerging in large numbers in a converted farmhouse bedroom. Loft smoke treatment applied.', date: '2025-02-10' },
  { town: 'medway', area: 'chatham', service: 'ant-control', description: 'Pharaoh ant infestation in a block of flats near the dockyard. Specialist bait treatment over six weeks.', date: '2025-06-04' },

  // More commercial jobs
  { town: 'maidstone', area: 'allington', service: 'fly-control', description: 'Electric fly killer units installed in a commercial bakery. Monthly maintenance contract set up.', date: '2025-04-20' },
  { town: 'canterbury', area: 'canterbury', service: 'rat-control', description: 'Rat management contract for a city centre restaurant. Monthly bait station checks and proofing audit.', date: '2025-10-15' },
  { town: 'ashford', area: 'ashford', service: 'bird-control', description: 'Pigeon spike installation across the front ledge of a retail unit at the Designer Outlet.', date: '2025-03-28' },
  { town: 'medway', area: 'gillingham', service: 'stored-product-insects', description: 'Grain weevil infestation in a pet food warehouse. Full stock audit, fumigation, and prevention plan.', date: '2025-09-12' },
  { town: 'dartford', area: 'dartford', service: 'cockroach-control', description: 'Cockroach treatment in a hotel kitchen near Bluewater. Emergency callout after guest complaint.', date: '2025-07-02' },
  { town: 'sevenoaks', area: 'sevenoaks', service: 'moth-control', description: 'Moth treatment at a boutique clothing store. Pheromone traps and residual spray to protect stock.', date: '2025-06-12' },

  // A few more to fill gaps
  { town: 'ashford', area: 'kennington', service: 'silverfish-control', description: 'Silverfish in a bathroom and under-stairs cupboard. Treated with residual dust and humidity advice given.', date: '2025-02-22' },
  { town: 'tonbridge', area: 'hadlow', service: 'flea-treatment', description: 'Emergency flea treatment in a holiday let between guests. Full carpet spray and hot wash of all linens.', date: '2025-08-30' },
  { town: 'medway', area: 'rochester', service: 'bed-bug-treatment', description: 'Bed bug treatment in a B&B. Two affected rooms treated with residual spray. Follow-up clear.', date: '2025-11-08' },
  { town: 'canterbury', area: 'chartham', service: 'bird-control', description: 'Jackdaw nest removal from a chimney in a riverside cottage. Cowl fitted to prevent return.', date: '2025-04-02' },
  { town: 'dartford', area: 'greenhithe', service: 'drain-flies', description: 'Drain flies in a new-build apartment. Slow shower drain with biofilm build-up cleared and treated.', date: '2025-05-18' },
]
