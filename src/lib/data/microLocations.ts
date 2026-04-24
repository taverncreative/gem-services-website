export type MicroLocationData = {
  slug: string
  name: string
  parentTown: string
  character: string
  predominantProperties: string
  localFeature: string
}

function ml(slug: string, name: string, parentTown: string, character: string, predominantProperties: string, localFeature: string): MicroLocationData {
  return { slug, name, parentTown, character, predominantProperties, localFeature }
}

export const microLocationData: Record<string, MicroLocationData[]> = {
  ashford: [
    ml('kennington', 'Kennington', 'ashford', 'A large residential suburb south of Ashford town centre, one of the most populated areas of the borough.', '1970s-1990s detached and semi-detached houses with gardens', 'Adjacent to open farmland on its southern edge'),
    ml('kingsnorth', 'Kingsnorth', 'ashford', 'A village south-east of Ashford that has grown significantly with new housing estates in recent years.', 'Mix of traditional village properties and modern new-build estates', 'Surrounded by arable farmland and the Kingsnorth industrial area'),
    ml('singleton', 'Singleton', 'ashford', 'A modern residential development on the south-eastern edge of Ashford built in the early 2000s.', 'Almost entirely modern new-build houses and apartments', 'Near Singleton Lake and the Stour Valley Walk'),
    ml('willesborough', 'Willesborough', 'ashford', 'A historic suburb east of Ashford with a mix of period and modern housing around the old village core.', 'Victorian cottages in the old village, 1950s-1970s estates, and newer infill', 'Willesborough Windmill, a Grade II listed smock mill'),
    ml('godinton', 'Godinton', 'ashford', 'A residential area north-west of the town centre, close to Godinton House and Park.', '1980s-2000s housing estates with some older farmhouses', 'Adjacent to Godinton Park estate and its mature parkland'),
    ml('sevington', 'Sevington', 'ashford', 'A small area south-east of Ashford that has changed significantly with the development of the Sevington inland border facility.', 'Traditional rural properties alongside newer development', 'Close to junction 10A of the M20 and the former farmland now used for logistics'),
  ],
  canterbury: [
    ml('sturry', 'Sturry', 'canterbury', 'A large village north-east of Canterbury on the River Stour, with a rail station and good links to the city.', '1950s-1970s council housing, Victorian cottages, and modern estates', 'Bordered by the River Stour and Stour Valley Walk'),
    ml('littlebourne', 'Littlebourne', 'canterbury', 'A village east of Canterbury along the Nailbourne stream, with a traditional village centre.', 'Period cottages around the green, 1960s-1980s estates on the edges', 'The Nailbourne stream and surrounding orchards'),
    ml('bridge', 'Bridge', 'canterbury', 'A village south of Canterbury on the Nailbourne, known for its attractive high street and rural character.', 'Brick and flint cottages, Georgian houses, and some modern infill', 'Set in the Nailbourne valley with chalk downland nearby'),
    ml('aylesham', 'Aylesham', 'canterbury', 'A planned village built in the 1920s to house Snowdown Colliery miners, now expanded with modern estates.', 'Original 1920s miners\' cottages and large new-build housing developments', 'Former colliery village with new community facilities'),
    ml('chartham', 'Chartham', 'canterbury', 'A linear village along the River Stour south-west of Canterbury, with a Norman church and paper mill heritage.', 'Period cottages along the main road, post-war housing, and modern estates', 'The River Stour runs through the village and surrounding water meadows'),
    ml('bekesbourne', 'Bekesbourne', 'canterbury', 'A small rural village south-east of Canterbury with a rail halt and scattered farms.', 'Detached houses, converted agricultural buildings, and period properties', 'Rural setting with Howletts Wild Animal Park nearby'),
  ],
  chatham: [
    ml('walderslade', 'Walderslade', 'chatham', 'A large residential area on the southern edge of Chatham, built primarily from the 1960s onwards on the North Downs escarpment.', '1960s-1980s detached and semi-detached houses, many with large gardens', 'Bordered by Walderslade Woods and North Downs woodland'),
    ml('lordswood', 'Lordswood', 'chatham', 'A residential suburb between Chatham and Maidstone built mainly in the 1970s-1990s.', '1970s-1990s estate housing, primarily detached and semi-detached', 'Near Lordswood Country Park and surrounded by rural fringe'),
    ml('luton', 'Luton', 'chatham', 'A residential area in south Chatham known for its proximity to the town centre and Luton Recreation Ground.', 'Victorian terraces and post-war council housing', 'Luton Recreation Ground and the River Medway nearby'),
    ml('capstone', 'Capstone', 'chatham', 'A semi-rural area south of Chatham centred around Capstone Farm Country Park.', 'Scattered residential properties and 1980s-1990s estates on the edges', 'Capstone Farm Country Park with 114 hectares of chalk grassland'),
    ml('wayfield', 'Wayfield', 'chatham', 'A residential area in central Chatham with a mix of older terraces and newer social housing.', 'Victorian and Edwardian terraces, 1960s maisonettes, and modern social housing', 'Close to Chatham town centre and The Pentagon shopping centre'),
    ml('brompton', 'Brompton', 'chatham', 'A historic area adjacent to the Royal Engineers barracks, with well-preserved Victorian military architecture.', 'Victorian terraces, military quarters, and converted historic buildings', 'Adjacent to the Royal School of Military Engineering and Brompton Barracks'),
  ],
  dartford: [
    ml('joydens-wood', 'Joydens Wood', 'dartford', 'A suburban area in south Dartford known for its proximity to ancient woodland.', '1930s-1960s semi-detached houses with generous plots', 'Joydens Wood ancient woodland on the doorstep'),
    ml('wilmington', 'Wilmington', 'dartford', 'A village south of Dartford with a mix of old village character and modern estates.', 'Period properties near the church, 1960s-1990s estate houses', 'Wilmington Grammar School area and Hawley Manor'),
    ml('darenth', 'Darenth', 'dartford', 'A small village in the Darent Valley south of Dartford with a long history.', 'Rural cottages, period houses, and converted farm buildings', 'The River Darent runs through the village — a chalk stream habitat'),
    ml('stone', 'Stone', 'dartford', 'A parish north-east of Dartford that includes areas near the Bluewater shopping development.', '1950s-1970s housing and modern new-build developments', 'Close to Bluewater Shopping Centre and the Crossways business park'),
    ml('greenhithe', 'Greenhithe', 'dartford', 'A riverside settlement on the Thames with significant modern waterfront development at Ingress Park.', 'Victorian river workers\' cottages and major modern waterfront apartments', 'Thames riverside setting with views of the QE2 Bridge'),
    ml('hawley', 'Hawley', 'dartford', 'A small residential area between Dartford and Wilmington with a semi-rural character.', '1950s-1970s detached houses and bungalows', 'Quiet residential area near Hawley Road allotments'),
  ],
  deal: [
    ml('walmer', 'Walmer', 'deal', 'A coastal town adjoining Deal with a castle, seafront, and residential streets running back from the shore.', 'Regency and Victorian seafront villas, 1930s semis inland', 'Walmer Castle and its gardens, plus the shingle beach'),
    ml('kingsdown', 'Kingsdown', 'deal', 'A small coastal village between Deal and Dover known for its quiet beach and chalk cliffs.', 'Detached houses, bungalows, and cliff-top properties', 'Kingsdown beach and the White Cliffs coastal path'),
    ml('sholden', 'Sholden', 'deal', 'A residential area on the north-western edge of Deal with modern housing estates and an older village core.', 'Modern housing estates alongside older village properties', 'Sholden New Road area and adjacent farmland'),
    ml('great-mongeham', 'Great Mongeham', 'deal', 'A small village west of Deal with a Norman church and rural setting.', 'Period cottages around the church, scattered rural houses', 'Rural village setting with views over farmland towards Canterbury'),
    ml('betteshanger', 'Betteshanger', 'deal', 'A former colliery village now home to Betteshanger Country Park on the site of the old pit.', 'Former miners\' cottages and some modern housing', 'Betteshanger Country Park with cycling and nature trails'),
    ml('finglesham', 'Finglesham', 'deal', 'A tiny hamlet between Deal and Sandwich with a handful of historic properties.', 'Scattered farmhouses, cottages, and converted agricultural buildings', 'Peaceful rural hamlet surrounded by arable fields'),
  ],
  dover: [
    ml('river', 'River', 'dover', 'A residential area north of Dover town centre, set in the valley leading towards Whitfield.', '1950s-1970s housing, some Victorian terraces, and modern estates', 'River village sits in the Dour Valley leading to the town centre'),
    ml('temple-ewell', 'Temple Ewell', 'dover', 'A village north-west of Dover in the Dour Valley, with a historic church and rural surroundings.', 'Period village houses, 1960s-1980s infill, and rural properties', 'The Dour stream runs through the village — a wildlife corridor'),
    ml('whitfield', 'Whitfield', 'dover', 'A large and expanding residential area north of Dover with major new housing developments.', 'Modern new-build estates alongside 1970s-1990s housing', 'Whitfield is the primary growth area for Dover with ongoing development'),
    ml('guston', 'Guston', 'dover', 'A small village on the cliffs between Dover and Deal.', 'Traditional village properties and some newer housing', 'Close to the South Foreland lighthouse and White Cliffs'),
    ml('st-radigunds', 'St Radigunds', 'dover', 'A hillside residential area overlooking Dover with views towards the castle and harbour.', 'Victorian terraces and inter-war housing on steep streets', 'Elevated position with views of Dover Castle and the harbour'),
    ml('buckland', 'Buckland', 'dover', 'An area north of Dover town centre between the town and River.', '1930s-1960s semi-detached houses and some Victorian housing', 'Adjacent to Buckland Valley and close to the A2 corridor'),
  ],
  faversham: [
    ml('ospringe', 'Ospringe', 'faversham', 'A village on the western approach to Faversham along Watling Street, the ancient Roman road.', 'Period properties along the main road, 1960s-1980s estates behind', 'Historic position on Watling Street with medieval Maison Dieu'),
    ml('boughton-under-blean', 'Boughton under Blean', 'faversham', 'A village west of Faversham on the old London road, surrounded by ancient Blean woodland.', 'Period cottages along the main street, mixed housing behind', 'Surrounded by Blean Woods — one of the largest ancient woodlands in southern England'),
    ml('selling', 'Selling', 'faversham', 'A small rural village south of Faversham with orchards and farmland.', 'Traditional Kentish farmhouses, oast conversions, and cottages', 'Surrounded by cherry and apple orchards'),
    ml('graveney', 'Graveney', 'faversham', 'A small village north of Faversham near the marshes and Graveney Marshes nature reserve.', 'Scattered rural properties and period cottages', 'Close to Graveney Marshes, a key bird habitat on the Swale'),
    ml('hernhill', 'Hernhill', 'faversham', 'A hilltop village south of Faversham with far-reaching views across orchards and farmland.', 'Traditional village properties, some new builds on the edges', 'Mount Ephraim Gardens and surrounding fruit orchards'),
    ml('davington', 'Davington', 'faversham', 'A residential area on the northern edge of Faversham close to the creek and marshes.', 'Victorian and Edwardian terraces, some converted industrial buildings', 'Davington Priory and proximity to Faversham Creek'),
  ],
  folkestone: [
    ml('cheriton', 'Cheriton', 'folkestone', 'A large residential area north of Folkestone town centre and close to the Channel Tunnel terminal.', '1920s-1960s semis and terraces, with some newer infill', 'Adjacent to the Channel Tunnel terminal and Cheriton High Street'),
    ml('sandgate', 'Sandgate', 'folkestone', 'A coastal village west of Folkestone along the shoreline, known for its antique shops and Martello towers.', 'Regency and Victorian seafront properties, fishermen\'s cottages, and modern flats', 'The Sandgate seafront and Martello tower heritage'),
    ml('hawkinge', 'Hawkinge', 'folkestone', 'A village on the North Downs above Folkestone, site of a former Battle of Britain airfield.', '1970s-2000s residential estates on the former airfield site', 'Kent Battle of Britain Museum and the North Downs Way'),
    ml('capel-le-ferne', 'Capel-le-Ferne', 'folkestone', 'A clifftop village between Folkestone and Dover with the Battle of Britain Memorial.', 'Mix of bungalows, detached houses, and some older village properties', 'Battle of Britain Memorial on the White Cliffs and coastal walking'),
    ml('etchinghill', 'Etchinghill', 'folkestone', 'A small village on the escarpment above the Elham Valley with a golf course.', 'Detached houses, bungalows, and rural properties', 'Etchinghill Golf Club and views over the Elham Valley'),
    ml('newington-folkestone', 'Newington', 'folkestone', 'A village north of Folkestone between the town and the Elham Valley.', 'Traditional village housing, some 1960s-1980s estates', 'Rural village setting with quick access to the M20'),
  ],
  gillingham: [
    ml('twydall', 'Twydall', 'gillingham', 'A residential area in east Gillingham with a mix of council and private housing.', '1930s-1960s semi-detached houses and post-war council housing', 'Twydall recreation grounds and allotments'),
    ml('hempstead', 'Hempstead', 'gillingham', 'A residential area on the southern edge of Gillingham, developed mainly from the 1970s.', '1970s-1990s detached and semi-detached housing', 'Near Hempstead Valley Shopping Centre and Capstone Country Park'),
    ml('darland', 'Darland', 'gillingham', 'A hillside area in south Gillingham with views across the Medway valley.', '1950s-1970s housing, a mix of semi-detached and terraces', 'Darland Banks nature reserve — chalk grassland habitat'),
    ml('rainham', 'Rainham', 'gillingham', 'A district east of Gillingham with a distinct village centre and mix of housing.', 'Victorian centre, 1930s-1960s estates, and modern development at Rainham Mark', 'Rainham has its own distinct high street and community identity'),
    ml('wigmore', 'Wigmore', 'gillingham', 'A residential area south of Gillingham, developed primarily in the 1960s-1980s.', '1960s-1980s semi-detached houses and some newer infill', 'Close to Hempstead Valley and the rural fringe towards Bredhurst'),
    ml('parkwood', 'Parkwood', 'gillingham', 'A residential estate in south-west Gillingham built mainly in the 1960s-1970s.', '1960s-1970s houses and maisonettes', 'Close to Rainham Mark and the edge of the Medway urban area'),
  ],
  gravesend: [
    ml('northfleet', 'Northfleet', 'gravesend', 'An industrial and residential area west of Gravesend on the Thames with ongoing waterfront regeneration.', 'Victorian terraces, 1930s-1960s estates, and new riverside developments', 'Ebbsfleet United football ground and the Northfleet Embankment'),
    ml('chalk', 'Chalk', 'gravesend', 'A village east of Gravesend with Dickensian connections and a marshland setting.', 'Traditional village houses, some 1960s-1980s housing', 'Charles Dickens connections — he honeymooned in Chalk and set parts of Great Expectations here'),
    ml('shorne', 'Shorne', 'gravesend', 'A village south of Gravesend surrounded by Shorne Woods Country Park.', 'Period cottages, rural properties, and some modern development', 'Shorne Woods Country Park — 288 acres of ancient woodland'),
    ml('ifield', 'Ifield', 'gravesend', 'A residential area south of Gravesend near the A2.', '1960s-1980s housing estates', 'Close to Jeskyns Community Woodland and the North Downs'),
    ml('singlewell', 'Singlewell', 'gravesend', 'A residential area on the southern edge of Gravesend near the A2 corridor.', '1950s-1980s housing with some newer development', 'Close to the A2 and Cyclopark community facility'),
    ml('riverview-park', 'Riverview Park', 'gravesend', 'A modern residential development on the eastern edge of Gravesend.', 'Modern detached and semi-detached houses built from the 2000s onwards', 'New-build estate near the Thames marshes and canal basin'),
  ],
  'herne-bay': [
    ml('beltinge', 'Beltinge', 'herne-bay', 'A residential area east of Herne Bay along the clifftop.', '1920s-1960s bungalows and semi-detached houses', 'Clifftop position with sea views towards Reculver'),
    ml('greenhill', 'Greenhill', 'herne-bay', 'A residential area on the western side of Herne Bay.', '1930s-1970s semi-detached houses and bungalows', 'Close to Herne Bay town centre and the seafront'),
    ml('broomfield', 'Broomfield', 'herne-bay', 'A village south of Herne Bay with a rural character.', 'Traditional village properties and some newer estate housing', 'Surrounded by farmland with orchards and soft fruit growing'),
    ml('reculver', 'Reculver', 'herne-bay', 'A coastal area east of Herne Bay famous for its ruined Roman fort and twin church towers.', 'Scattered properties and caravan parks near the coast', 'Reculver Towers — ruined medieval church within Roman fort remains'),
    ml('studd-hill', 'Studd Hill', 'herne-bay', 'A residential area on the eastern clifftop of Herne Bay.', 'Bungalows and chalets, many dating from the 1930s-1960s', 'Clifftop setting overlooking the Thames estuary'),
    ml('hampton', 'Hampton', 'herne-bay', 'A small residential area between Herne Bay and Swalecliffe.', '1960s-1980s housing and some older properties', 'Close to the coast path and Hampton Pier'),
  ],
  hythe: [
    ml('saltwood', 'Saltwood', 'hythe', 'A village above Hythe with a Norman castle and attractive village green.', 'Period stone and brick cottages, some larger detached properties', 'Saltwood Castle and the village green'),
    ml('sellindge', 'Sellindge', 'hythe', 'A village north of Hythe on the A20, close to the Channel Tunnel.', 'Traditional village housing with modern infill and new estates', 'Close to the M20 Junction 11 and Channel Tunnel access'),
    ml('stanford', 'Stanford', 'hythe', 'A small village near the M20 junction between Hythe and Ashford.', 'Rural cottages, farmhouses, and some modern development', 'Set in the Elham Valley with views of the North Downs'),
    ml('pedlinge', 'Pedlinge', 'hythe', 'A tiny hamlet north of Hythe in the hills above the Romney Marsh.', 'Scattered rural properties and converted farm buildings', 'Remote rural setting between the Downs and the Marsh'),
    ml('palmarsh', 'Palmarsh', 'hythe', 'A small area between Hythe and Dymchurch on the edge of Romney Marsh.', 'Bungalows and detached houses, some near the Royal Military Canal', 'Adjacent to the Royal Military Canal and the edge of Romney Marsh'),
    ml('postling', 'Postling', 'hythe', 'A small village in the folds of the North Downs behind Hythe.', 'Traditional Kentish farmhouses, cottages, and rural homes', 'Secluded Downs village with Postling Wold above'),
  ],
  maidstone: [
    ml('bearsted', 'Bearsted', 'maidstone', 'A large village east of Maidstone centred around The Green, with a strong community identity.', '1930s-1970s detached and semi-detached houses, period properties near The Green', 'Bearsted Green and close proximity to Leeds Castle'),
    ml('allington', 'Allington', 'maidstone', 'A suburb north-west of Maidstone on the River Medway, known for Allington Castle.', '1950s-1970s housing estates and some newer development', 'Allington Castle and Lock on the River Medway'),
    ml('penenden-heath', 'Penenden Heath', 'maidstone', 'A suburb north of Maidstone centre around an historic heathland meeting place.', '1930s-1960s semi-detached houses with mature gardens', 'Historic Penenden Heath — a Saxon assembly point'),
    ml('barming', 'Barming', 'maidstone', 'A village west of Maidstone on the River Medway, now largely absorbed into the town.', '1960s-1980s estate housing with some older village properties', 'Barming Bridge over the Medway and Teston Country Park nearby'),
    ml('loose', 'Loose', 'maidstone', 'A picturesque village in the Loose Valley south of Maidstone with a stream and historic wool mills.', 'Period houses along the stream, ragstone cottages, and some modern infill', 'The Loose Stream and the historic Wool House'),
    ml('coxheath', 'Coxheath', 'maidstone', 'A large village south of Maidstone on a ridge with views over the Weald.', '1960s-1990s housing estates and some older village properties', 'Elevated position with views south over the Low Weald'),
  ],
  margate: [
    ml('cliftonville', 'Cliftonville', 'margate', 'A residential area east of Margate seafront with a mix of grand Victorian villas and flats.', 'Large Victorian and Edwardian houses, many converted to flats and HMOs', 'The Oval bandstand and Cliftonville Lido area'),
    ml('westbrook', 'Westbrook', 'margate', 'A coastal area west of Margate with a sandy bay.', '1920s-1960s bungalows and semi-detached houses along the coast', 'Westbrook Bay — a sheltered sandy beach'),
    ml('garlinge', 'Garlinge', 'margate', 'A residential area south-west of Margate, mainly post-war development.', '1950s-1970s semi-detached houses and estates', 'Quiet residential area between Margate and Westgate'),
    ml('birchington', 'Birchington', 'margate', 'A coastal village west of Margate with a traditional village square and seaside character.', 'Victorian and Edwardian villas, 1930s bungalows, and modern development', 'Birchington village square and the Rossetti grave at All Saints Church'),
    ml('westgate-on-sea', 'Westgate-on-Sea', 'margate', 'A small Victorian seaside town between Margate and Birchington with two sandy bays.', 'Victorian and Edwardian houses, many substantial detached properties', 'St Mildred\'s Bay and West Bay — popular sandy beaches'),
    ml('palm-bay', 'Palm Bay', 'margate', 'A residential area east of Cliftonville with a coastal path and small bay.', '1930s-1960s houses and bungalows near the coast', 'Palm Bay beach and the Viking Coastal Trail'),
  ],
  ramsgate: [
    ml('broadstairs', 'Broadstairs', 'ramsgate', 'A seaside town between Margate and Ramsgate known for Viking Bay and strong Dickens connections.', 'Victorian and Edwardian seafront properties, residential streets inland', 'Viking Bay, Bleak House, and the annual Dickens Festival'),
    ml('cliffsend', 'Cliffsend', 'ramsgate', 'A small village west of Ramsgate, close to the old Hovercraft terminal site.', '1960s-1980s housing and some newer development', 'Close to Pegwell Bay National Nature Reserve'),
    ml('minster-in-thanet', 'Minster in Thanet', 'ramsgate', 'A village south-west of Ramsgate with a fine abbey church and agricultural surroundings.', 'Traditional village housing, bungalows, and some modern estates', 'Minster Abbey — one of the oldest inhabited buildings in England'),
    ml('pegwell-bay', 'Pegwell Bay', 'ramsgate', 'A small coastal area south of Ramsgate known for its nature reserve and chalk cliffs.', 'Scattered properties near the bay, mainly residential', 'Pegwell Bay National Nature Reserve — important for wading birds'),
    ml('st-lawrence', 'St Lawrence', 'ramsgate', 'A residential area on the southern edge of Ramsgate.', '1930s-1970s housing, mix of detached and semi-detached', 'Close to St Lawrence College grounds'),
    ml('nethercourt', 'Nethercourt', 'ramsgate', 'A residential area north-west of Ramsgate centre.', '1950s-1980s housing estates', 'Near Nethercourt Estate and Ramsgate Football Club'),
  ],
  rochester: [
    ml('borstal', 'Borstal', 'rochester', 'A residential area south of Rochester, historically known for the former young offenders\' institution.', 'Victorian terraces and 1930s-1960s semi-detached houses', 'Elevated position with views over the Medway valley'),
    ml('chattenden', 'Chattenden', 'rochester', 'A village on the Hoo Peninsula north of Rochester, site of a former military establishment.', 'Military housing, 1960s-1980s estates, and new development on the former barracks site', 'Located on the Hoo Peninsula with marshland and woodland nearby'),
    ml('hoo-st-werburgh', 'Hoo St Werburgh', 'rochester', 'A large village on the Hoo Peninsula with a Saxon church and growing residential area.', 'Traditional village properties, 1970s-1990s estates, and major new development', 'Gateway to the Hoo Peninsula marshes and RSPB nature reserves'),
    ml('cuxton', 'Cuxton', 'rochester', 'A village south of Rochester on the Medway, tucked into the North Downs.', 'Mix of period cottages, 1960s-1980s houses, and some newer builds', 'On the Medway Valley Walk and close to North Downs Way'),
    ml('halling', 'Halling', 'rochester', 'A village on the west bank of the Medway between Rochester and Maidstone.', 'Victorian terraces from the cement industry era, modern riverside housing', 'Former cement works heritage and riverside setting'),
    ml('stoke', 'Stoke', 'rochester', 'A small village on the Hoo Peninsula with marshland views.', 'Traditional rural properties and scattered houses', 'Stoke Marshes and views across the Thames estuary'),
  ],
  sevenoaks: [
    ml('riverhead', 'Riverhead', 'sevenoaks', 'A suburb at the western end of Sevenoaks along the A25, close to Bessels Green.', '1930s-1960s semi-detached houses and some larger properties', 'Near the River Darent source and Montreal Park'),
    ml('dunton-green', 'Dunton Green', 'sevenoaks', 'A village north of Sevenoaks with a rail station and residential streets.', '1920s-1960s semi-detached houses and some modern development on the former brickworks', 'Dunton Green station provides direct trains to London'),
    ml('seal', 'Seal', 'sevenoaks', 'A village east of Sevenoaks with a long main street and rural surroundings.', 'Period cottages, 1950s-1980s houses, and rural properties', 'Close to the Greensand Way walking trail and surrounding orchards'),
    ml('weald', 'Weald', 'sevenoaks', 'A large village south of Sevenoaks on the ridge above the Low Weald.', '1930s-1970s detached and semi-detached houses with large gardens', 'Elevated ridge position with views south over the Weald'),
    ml('otford', 'Otford', 'sevenoaks', 'A village north of Sevenoaks with a duck pond, historic palace remains, and a strong village identity.', 'Period village properties around the green, 1950s-1970s estates', 'Otford village green and duck pond, and the ruins of the Archbishop\'s Palace'),
    ml('brasted', 'Brasted', 'sevenoaks', 'A village west of Sevenoaks on the A25 with a traditional high street.', 'Period properties along the main road, some larger houses with grounds', 'Brasted village high street and proximity to Emmetts Garden (National Trust)'),
  ],
  sheerness: [
    ml('minster-on-sea', 'Minster on Sea', 'sheerness', 'A town in the centre of the Isle of Sheppey with a historic abbey and residential areas.', 'Victorian terraces, 1930s-1970s estates, and modern development', 'Minster Abbey and views across the Swale'),
    ml('halfway-houses', 'Halfway Houses', 'sheerness', 'A residential area between Minster and Sheerness on the main road across Sheppey.', '1960s-1980s housing estates and some newer builds', 'Central location on the island with Sheppey Leisure Complex'),
    ml('queenborough', 'Queenborough', 'sheerness', 'A small historic harbour town on the south coast of Sheppey.', 'Victorian and Georgian houses around the harbour, some modern infill', 'Queenborough harbour and creek — a historic port'),
    ml('eastchurch', 'Eastchurch', 'sheerness', 'A village in the east of Sheppey, known for its aviation history.', 'Village houses, bungalows, and some social housing', 'Site of one of the earliest aviation centres in Britain'),
    ml('leysdown-on-sea', 'Leysdown-on-Sea', 'sheerness', 'A small seaside resort on the eastern tip of Sheppey with caravan parks and holiday homes.', 'Chalets, bungalows, and caravan parks', 'Leysdown beach and the Shell Ness nature reserve'),
    ml('warden', 'Warden', 'sheerness', 'A small coastal settlement on the eastern cliffs of Sheppey.', 'Bungalows, chalets, and some mobile homes', 'Warden Point — dramatic clay cliffs with fossil finds'),
  ],
  sittingbourne: [
    ml('murston', 'Murston', 'sittingbourne', 'A residential area east of Sittingbourne town centre along the old brickfield sites.', '1950s-1970s housing estates and modern development on former industrial land', 'Former brickfield landscape, now partly nature reserve'),
    ml('chalkwell', 'Chalkwell', 'sittingbourne', 'A small area between Sittingbourne and Milton Regis.', '1930s-1960s semi-detached houses', 'Close to Sittingbourne recreation ground'),
    ml('milton-regis', 'Milton Regis', 'sittingbourne', 'An ancient parish north of Sittingbourne with a rich history predating the town itself.', 'Historic buildings around the High Street, 1950s-1970s estates', 'Milton Regis Court Hall — one of the oldest court buildings in England'),
    ml('kemsley', 'Kemsley', 'sittingbourne', 'A village north of Sittingbourne originally built to house paper mill workers.', '1920s-1930s garden village housing with distinctive layout', 'Purpose-built garden village for the former paper mill workers'),
    ml('bobbing', 'Bobbing', 'sittingbourne', 'A village west of Sittingbourne near the A249 junction.', 'Traditional village properties and modern development near the bypass', 'Village church and proximity to major road links'),
    ml('tunstall', 'Tunstall', 'sittingbourne', 'A village south of Sittingbourne with orchards and rural character.', 'Traditional village houses, oast conversions, and rural properties', 'Surrounded by fruit orchards — a traditional Kent landscape'),
  ],
  strood: [
    ml('frindsbury', 'Frindsbury', 'strood', 'A historic area on the hill above Strood with a Norman church and older village core.', 'Period properties near the church, 1930s-1970s housing estates', 'Frindsbury Church and views over the Medway'),
    ml('cliffe-woods', 'Cliffe Woods', 'strood', 'A residential village on the Hoo Peninsula north of Strood.', '1960s-1980s detached and semi-detached housing', 'Close to Cliffe Pools RSPB reserve — a major bird habitat'),
    ml('higham', 'Higham', 'strood', 'A village east of Strood with Dickens connections and marshland views.', 'Period village properties, rural houses, and some newer development', 'Higham Marshes and Gad\'s Hill Place — Charles Dickens\' last home'),
    ml('upnor', 'Upnor', 'strood', 'A riverside village overlooking the Medway with a Tudor castle.', 'Period cottages, converted boathouses, and some modern housing', 'Upnor Castle and the Medway waterfront'),
    ml('cobham', 'Cobham', 'strood', 'A village south of Strood with a manor house, inn, and Dickens connections.', 'Period village properties, larger detached houses, and rural estates', 'Cobham Hall (now a school) and the Leather Bottle pub featured by Dickens'),
    ml('sharnal-street', 'Sharnal Street', 'strood', 'A small hamlet on the Hoo Peninsula.', 'Scattered rural properties and some modern housing', 'Rural Hoo Peninsula setting with marshland nearby'),
  ],
  tonbridge: [
    ml('hildenborough', 'Hildenborough', 'tonbridge', 'A large village north of Tonbridge with a rail station and strong community.', '1930s-1970s detached and semi-detached houses with gardens', 'Hildenborough station and surrounding orchards and farmland'),
    ml('hadlow', 'Hadlow', 'tonbridge', 'A village east of Tonbridge dominated by the folly tower of Hadlow Castle.', 'Period village properties, some modern estates, and rural houses', 'Hadlow Tower — a striking 150-foot Gothic folly'),
    ml('golden-green', 'Golden Green', 'tonbridge', 'A small hamlet south-east of Tonbridge in the Medway valley.', 'Scattered rural properties, cottages, and converted farm buildings', 'Rural Medway valley setting with hop gardens'),
    ml('tudeley', 'Tudeley', 'tonbridge', 'A tiny hamlet south of Tonbridge known for its Chagall church windows.', 'Period rural properties and scattered houses', 'All Saints Church with windows designed by Marc Chagall'),
    ml('leigh', 'Leigh', 'tonbridge', 'A village south-west of Tonbridge with a green, a cricket ground, and a river setting.', 'Period cottages around the green, 1950s-1970s houses, and rural properties', 'Leigh village green and the River Medway with its flood barrier'),
    ml('shipbourne', 'Shipbourne', 'tonbridge', 'A hilltop village north of Tonbridge on the Greensand Ridge.', 'Traditional Kentish houses, oast conversions, and larger rural properties', 'Fairlawne estate and the Greensand Way walking trail'),
  ],
  'tunbridge-wells': [
    ml('langton-green', 'Langton Green', 'tunbridge-wells', 'A village west of Tunbridge Wells with a large green and cricket ground.', 'Large detached properties, period houses, and some 1950s-1970s housing', 'Langton Green village green and the Hare pub'),
    ml('rusthall', 'Rusthall', 'tunbridge-wells', 'A village west of Tunbridge Wells known for the Toad Rock sandstone formation.', '1920s-1960s semis and terraces, with period properties near the common', 'Toad Rock — a natural sandstone formation on Rusthall Common'),
    ml('pembury', 'Pembury', 'tunbridge-wells', 'A large village east of Tunbridge Wells, home to the Tunbridge Wells Hospital.', '1930s-1970s housing, modern estates near the hospital, and older village core', 'Tunbridge Wells Hospital and Pembury village green'),
    ml('southborough', 'Southborough', 'tunbridge-wells', 'A town north of Tunbridge Wells with its own high street and common.', 'Victorian and Edwardian houses, 1930s-1960s semis, and modern infill', 'Southborough Common and the independent high street'),
    ml('speldhurst', 'Speldhurst', 'tunbridge-wells', 'A village north-west of Tunbridge Wells with a green and rural surroundings.', 'Period village houses, larger detached properties, and rural homes', 'Speldhurst village green and the George & Dragon pub'),
    ml('frant', 'Frant', 'tunbridge-wells', 'A village south of Tunbridge Wells on the Sussex border with a green and inn.', 'Period houses around the green, larger rural properties', 'Frant village green and proximity to Eridge Park'),
  ],
  whitstable: [
    ml('tankerton', 'Tankerton', 'whitstable', 'A residential area east of Whitstable known for the slopes and its shingle street.', '1920s-1950s detached houses along the slopes, bungalows inland', 'Tankerton Slopes — grassy clifftop with the "Street" shingle spit extending into the sea'),
    ml('seasalter', 'Seasalter', 'whitstable', 'A coastal area west of Whitstable with marshland, a golf course, and the Sportsman pub.', 'Scattered coastal properties, bungalows, and converted buildings', 'Seasalter marshes and the Michelin-starred Sportsman pub'),
    ml('yorkletts', 'Yorkletts', 'whitstable', 'A small rural area south-west of Whitstable in the Blean woodland fringe.', 'Scattered rural properties and woodland-edge houses', 'Blean Woods National Nature Reserve — ancient woodland'),
    ml('swalecliffe', 'Swalecliffe', 'whitstable', 'A coastal residential area east of Whitstable towards Herne Bay.', '1950s-1970s bungalows and semi-detached houses', 'Swalecliffe beach and the coastal path to Herne Bay'),
    ml('dargate', 'Dargate', 'whitstable', 'A tiny hamlet south of Whitstable known for its pub and orchard setting.', 'Scattered rural cottages and farmhouses', 'The Dove pub and surrounding cherry orchards'),
    ml('blean-woods', 'Blean Woods', 'whitstable', 'A residential area south of Whitstable near the Blean village and ancient woodland.', 'Rural properties, some 1960s-1980s housing near the village', 'Blean Woods — one of the largest areas of ancient woodland in southern England'),
  ],
  'west-malling': [
    ml('east-malling', 'East Malling', 'west-malling', 'A village adjoining West Malling, home to the East Malling Research station for horticulture.', '1950s-1970s housing, period village properties, and some modern development', 'East Malling Research — a major fruit and horticultural research centre'),
    ml('kings-hill', 'Kings Hill', 'west-malling', 'A large modern development on the former RAF West Malling airfield.', 'Modern detached houses, apartments, and commercial buildings built from the 1990s', 'Purpose-built community on the former RAF airfield with business park'),
    ml('mereworth', 'Mereworth', 'west-malling', 'A village south of West Malling with a Palladian-style castle.', 'Period cottages, estate houses, and rural properties', 'Mereworth Castle — an 18th-century Palladian villa'),
    ml('ryarsh', 'Ryarsh', 'west-malling', 'A small village east of West Malling in the Medway valley.', 'Traditional village houses and rural properties', 'Quiet village near the Pilgrims\' Way and North Downs'),
    ml('birling', 'Birling', 'west-malling', 'A small village east of West Malling on the North Downs escarpment.', 'Traditional Kentish houses, farm conversions, and rural cottages', 'On the North Downs scarp with views over the Medway valley'),
    ml('addington', 'Addington', 'west-malling', 'A village east of West Malling with Neolithic long barrows nearby.', 'Period village houses, 1960s-1980s development, and rural properties', 'Addington and Chestnuts long barrows — Neolithic burial monuments'),
  ],
}

// Backwards-compatible export: Record<string, string[]> of just slugs
export const microLocations: Record<string, string[]> = Object.fromEntries(
  Object.entries(microLocationData).map(([town, locations]) => [
    town,
    locations.map(l => l.slug)
  ])
)
