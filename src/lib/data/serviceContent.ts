export type ServiceContent = {
  slug: string
  commonName: string
  pestName: string
  scientificName?: string
  pestCategory: 'rodent' | 'insect' | 'bird' | 'mammal' | 'invertebrate'

  // Biology
  biology: string
  behavior: string
  dietAndHabitat: string

  // Seasonal
  peakSeasons: string[]
  seasonalExplanation: string

  // Signs of infestation
  signs: Array<{ sign: string; detail: string }>

  // Treatment
  treatmentSteps: Array<{ step: string; description: string }>
  treatmentDuration: string

  // Risks
  residentialRisks: string
  commercialRisks: string
  healthRisks: string[]
  propertyDamage: string[]

  // Prevention
  preventionTips: string[]

  // Nesting
  commonNestLocations: string[]

  // FAQs
  faqs: Array<{ question: string; answer: string }>

  // Emergency
  isEmergencyCommon: boolean
  urgencyLevel: 'high' | 'medium' | 'low'
  responseTimeNote: string
}

export const serviceContent: Record<string, ServiceContent> = {
  'wasp-nest-removal': {
    slug: 'wasp-nest-removal',
    commonName: 'Wasps',
    pestName: 'wasp',
    scientificName: 'Vespula vulgaris / Vespula germanica',
    pestCategory: 'insect',

    biology: 'A wasp colony starts each spring when a single queen emerges from hibernation and builds a small paper nest. She lays eggs and rears the first batch of workers alone. By late summer a healthy nest can hold 5,000 to 10,000 wasps. The colony dies off in autumn — only newly mated queens survive winter to start the cycle again.',
    behavior: 'Wasps are territorial and will defend their nest aggressively if they feel threatened. They are most active during warm daylight hours and become increasingly irritable in late summer as the colony\'s food supply shifts from protein to sugar. This is when wasps scavenge around bins, picnics, and pub gardens.',
    dietAndHabitat: 'Adult wasps feed on sugary liquids like nectar and fruit juice. They hunt insects and caterpillars to feed their larvae. Nests are made from chewed wood pulp mixed with saliva, forming a distinctive grey papery material. They favour sheltered, dry cavities for nesting.',

    peakSeasons: ['summer', 'early autumn'],
    seasonalExplanation: 'Wasp nests grow rapidly from June through August. By September the colony is at peak size and workers become aggressive as they search for sugar. Most callouts happen between July and October.',

    signs: [
      { sign: 'Increased wasp activity around a fixed point', detail: 'If you see wasps repeatedly flying to and from the same spot — a hole in the wall, a gap under roof tiles, or a shed corner — there is likely a nest nearby.' },
      { sign: 'Visible papery nest structure', detail: 'Wasp nests start golf-ball sized in spring and can grow larger than a football by late summer. They look like grey or brown layered paper.' },
      { sign: 'Buzzing sound from a wall or ceiling', detail: 'A nest hidden in a wall cavity or loft space often produces an audible low buzzing or humming, especially on warm days.' },
      { sign: 'Chewed wood damage on fences or garden furniture', detail: 'Wasps strip wood fibres to build their nest. You may notice thin scrape marks on fence panels, shed timbers, or wooden garden furniture.' }
    ],

    treatmentSteps: [
      { step: 'Nest location and identification', description: 'We identify the species and pinpoint the exact nest location by observing flight paths. This determines the safest treatment approach.' },
      { step: 'Insecticidal dust application', description: 'We apply a professional-grade insecticidal powder directly into the nest entrance. Worker wasps carry the dust inside, spreading it through the colony.' },
      { step: 'Area secured', description: 'We advise you to keep people and pets away from the nest area for 24-48 hours while the treatment takes full effect.' },
      { step: 'Nest removal if accessible', description: 'Once the colony is dead, we can remove the nest if it is accessible. Hidden nests in wall cavities are left to decompose naturally — they will not be reused.' }
    ],
    treatmentDuration: 'The treatment itself takes 15-30 minutes. The colony typically dies within 24-48 hours.',

    residentialRisks: 'Wasp stings are painful and can trigger severe allergic reactions (anaphylaxis) in some people. Nests near doorways, windows, or garden seating areas put families at daily risk, particularly children who may accidentally disturb the nest.',
    commercialRisks: 'A wasp nest near a restaurant entrance, pub beer garden, or shop doorway drives customers away and creates a sting liability. Food businesses risk contamination if wasps enter kitchen or serving areas.',
    healthRisks: ['Painful stings', 'Anaphylactic shock in allergic individuals', 'Multiple stings from disturbed nests can require hospital treatment'],
    propertyDamage: ['Chewed wood fibres on timber structures', 'Staining from nest material in loft spaces', 'Potential ceiling damage if a large nest collapses under its own weight'],

    preventionTips: [
      'Check loft spaces, sheds, and garages in early spring for small starter nests — they are easy to remove at this stage.',
      'Seal gaps around roof tiles, soffits, and air bricks where wasps enter to nest.',
      'Keep bins tightly sealed, especially in summer when wasps are drawn to food waste.',
      'Avoid leaving sugary drinks or fruit uncovered outdoors during peak wasp season.',
      'Fit fly screens to windows if wasp activity is common near your property.'
    ],

    commonNestLocations: ['Loft spaces and roof voids', 'Wall cavities accessed through air bricks or gaps in mortar', 'Under roof tiles or in soffits', 'Garden sheds and outbuildings', 'Underground in old rodent burrows', 'Dense hedgerows and bushes'],

    faqs: [
      { question: 'Is it safe to remove a wasp nest myself?', answer: 'We strongly advise against it. Disturbing a nest without proper protective equipment and insecticide can provoke a mass attack. Professional treatment is quick, safe, and effective.' },
      { question: 'What happens to the nest after treatment?', answer: 'The colony dies within 24-48 hours. If the nest is accessible we can remove it. Nests hidden in walls are left in place — they dry out and will not be reused by future colonies.' },
      { question: 'Can wasps return to the same spot next year?', answer: 'Wasps do not reuse old nests, but the same sheltered spot can attract a new queen the following spring. We recommend sealing entry points after treatment to prevent this.' },
      { question: 'How much does wasp nest removal cost?', answer: 'The cost depends on the nest location and accessibility. Most residential wasp treatments are a fixed price. Call us for an accurate quote based on your situation.' },
      { question: 'Will the wasps die immediately after treatment?', answer: 'No. Wasps returning to the nest carry the insecticidal dust inside, which spreads through the colony over 24-48 hours. You will see reduced activity within hours and a dead colony within two days.' },
      { question: 'Are wasp stings dangerous?', answer: 'For most people a sting is painful but not dangerous. However, roughly 1 in 100 people has an allergic reaction, and in rare cases stings can cause anaphylaxis — a medical emergency. If you are allergic, avoid the nest entirely and call a professional.' }
    ],

    isEmergencyCommon: true,
    urgencyLevel: 'high',
    responseTimeNote: 'Wasp nests near doorways, play areas, or where someone is allergic are treated as emergencies. We aim for same-day treatment during peak season.'
  },

  'rat-control': {
    slug: 'rat-control',
    commonName: 'Rats',
    pestName: 'rat',
    scientificName: 'Rattus norvegicus (brown rat)',
    pestCategory: 'rodent',

    biology: 'The brown rat is the most common species in the UK. A female can produce up to five litters per year, each with 6-12 pups. Young rats reach sexual maturity at just 5 weeks old, meaning a small problem can become a serious infestation within months.',
    behavior: 'Rats are nocturnal and cautious. They follow the same routes repeatedly, leaving greasy rub marks along walls and skirting boards. They are neophobic — suspicious of new objects in their environment — which is why DIY traps often fail. They can swim, climb, and gnaw through plastic, wood, and even soft metals.',
    dietAndHabitat: 'Rats are omnivores and will eat almost anything — cereals, meat, pet food, bird seed, and food waste. They need a daily water source. They prefer to nest in warm, undisturbed areas close to food and water, which is why kitchens, outbuildings, and drains are common hotspots.',

    peakSeasons: ['autumn', 'winter'],
    seasonalExplanation: 'Rat activity indoors increases sharply from October onwards as temperatures drop and food becomes scarcer outside. They seek warmth and shelter in buildings throughout winter. Spring brings a surge in breeding activity.',

    signs: [
      { sign: 'Droppings along edges and behind appliances', detail: 'Rat droppings are dark brown, pellet-shaped, and about 10-14mm long. A single rat produces around 40 droppings per night, usually concentrated along their regular routes.' },
      { sign: 'Gnaw marks on wood, plastic, or cables', detail: 'Rats must gnaw constantly to keep their teeth worn down. Look for bite marks on skirting boards, door frames, food packaging, and electrical cables — gnawed wiring is a serious fire risk.' },
      { sign: 'Scratching noises at night', detail: 'Rats moving through wall cavities, under floorboards, or in loft insulation produce scratching and scurrying sounds, most noticeable after dark when the house is quiet.' },
      { sign: 'Greasy smear marks along walls', detail: 'Rats have oily fur and follow the same paths repeatedly. Over time this leaves dark, greasy streak marks along walls, skirting boards, and around entry holes.' },
      { sign: 'Burrow holes outside the property', detail: 'Rat burrow entrances are roughly 6-9cm in diameter, often found at the base of walls, under sheds, beside compost bins, or in overgrown garden borders.' }
    ],

    treatmentSteps: [
      { step: 'Survey and entry point identification', description: 'We inspect the property inside and out to map the extent of the infestation and identify exactly how rats are getting in — gaps under doors, broken air bricks, damaged drain covers, or holes around pipes.' },
      { step: 'Baiting programme', description: 'We place tamper-resistant bait stations in strategic locations along known rat routes. Professional rodenticide is far more effective than shop-bought products and is secured in locked stations to protect children and pets.' },
      { step: 'Monitoring visits', description: 'We return to check bait take, assess activity levels, and adjust the programme as needed. Most rat infestations require 2-3 visits over 2-4 weeks to fully resolve.' },
      { step: 'Proofing and prevention', description: 'Once the infestation is cleared, we seal entry points with galvanised wire mesh, expanding foam, or cement. This prevents reinfestation — without proofing, new rats will find the same routes.' }
    ],
    treatmentDuration: 'Most rat infestations are resolved within 2-4 weeks across 2-3 visits. Severe cases may take longer.',

    residentialRisks: 'Rats in a home contaminate food preparation areas with droppings and urine, gnaw through electrical wiring creating a fire hazard, and damage insulation and pipework in loft spaces. The noise, smell, and health risk cause significant stress for families.',
    commercialRisks: 'A rat sighting in a restaurant, hotel, or food premises can lead to immediate closure by Environmental Health. Businesses risk prosecution, fines, and devastating reputational damage. Warehouses and retail premises lose stock to contamination and gnaw damage.',
    healthRisks: ['Leptospirosis (Weil\'s disease) — spread through rat urine, potentially fatal', 'Salmonella — spread through droppings contaminating food surfaces', 'Hantavirus — rare in the UK but carried by rodents', 'Rat-bite fever — from bites or scratches'],
    propertyDamage: ['Gnawed electrical wiring — a leading cause of house fires', 'Damaged water pipes causing leaks', 'Shredded loft insulation reducing energy efficiency', 'Contaminated food stores', 'Structural damage from burrowing under foundations'],

    preventionTips: [
      'Keep food in sealed containers — never leave pet food out overnight.',
      'Fix dripping taps and pipes — rats need daily water access.',
      'Seal gaps larger than 15mm around pipes, doors, and air bricks with wire mesh or metal kick plates.',
      'Keep gardens tidy — clear overgrown areas, move compost bins away from buildings, and cut back vegetation touching walls.',
      'Ensure drain covers are intact and check for damaged or collapsed drains, a common rat entry route.'
    ],

    commonNestLocations: ['Wall cavities and behind plasterboard', 'Loft spaces, especially in insulation', 'Under garden sheds and decking', 'Inside compost heaps', 'Beneath floorboards near kitchen pipework', 'In and around damaged drainage systems'],

    faqs: [
      { question: 'How do rats get into my house?', answer: 'The most common entry points are gaps around pipes, damaged air bricks, broken drain covers, and spaces under doors. Rats can squeeze through a gap as small as 15mm — roughly the width of your thumb.' },
      { question: 'Why don\'t shop-bought rat traps work?', answer: 'Rats are neophobic — they avoid new objects in their environment. A snap trap placed in the open will often be ignored for days or weeks. Professional bait stations are placed along established rat runs and use more effective rodenticide.' },
      { question: 'How long does it take to get rid of rats?', answer: 'Most infestations are cleared within 2-4 weeks with a professional baiting programme. We visit 2-3 times to monitor bait take and adjust the treatment as activity reduces.' },
      { question: 'Will you block the entry points?', answer: 'Yes. Proofing is a key part of our service. After clearing the infestation, we seal all identified entry points with galvanised wire mesh, metal plates, or cement to prevent rats returning.' },
      { question: 'Are rat droppings dangerous?', answer: 'Yes. Rat droppings and urine can carry leptospirosis, salmonella, and other harmful bacteria. Avoid sweeping droppings (this spreads dust particles) — instead, spray with disinfectant and wipe up with disposable gloves.' },
      { question: 'Is there a smell with a rat infestation?', answer: 'A heavy rat infestation produces a distinct, stale ammonia smell from accumulated urine. If a rat dies in a wall cavity or under floorboards, the decomposition smell can be very strong for 2-3 weeks.' }
    ],

    isEmergencyCommon: true,
    urgencyLevel: 'high',
    responseTimeNote: 'Rat infestations in kitchens, near food stores, or in businesses are treated urgently. We aim for next-day visits as standard.'
  },

  'mouse-control': {
    slug: 'mouse-control',
    commonName: 'Mice',
    pestName: 'mouse',
    scientificName: 'Mus musculus (house mouse)',
    pestCategory: 'rodent',

    biology: 'The house mouse breeds rapidly — a female can produce 5-10 litters per year with 4-8 pups each. Pups reach maturity at 6 weeks. A single pair of mice can theoretically produce over 2,000 descendants in a year under ideal conditions.',
    behavior: 'Unlike rats, mice are curious and will investigate new objects quickly, making them easier to trap. They are excellent climbers and can scale rough vertical surfaces, walk along cables, and jump up to 30cm. Mice tend to stay within a small home range of about 3-5 metres from their nest.',
    dietAndHabitat: 'Mice prefer cereals and grains but will eat almost anything. They nibble small amounts from many sources rather than feeding in one spot. They need very little water and can survive on moisture in food alone. They favour warm, enclosed spaces close to food.',

    peakSeasons: ['autumn', 'winter'],
    seasonalExplanation: 'Mice move indoors from October as temperatures drop. They can enter through gaps as small as 6mm — the width of a pencil. Indoor populations remain active through winter and breed year-round in heated buildings.',

    signs: [
      { sign: 'Small dark droppings', detail: 'Mouse droppings are 3-6mm long, dark, and spindle-shaped with pointed ends. You will find them scattered along skirting boards, in cupboards, and behind kitchen appliances.' },
      { sign: 'Scratching or rustling sounds', detail: 'Mice are most active at night. You may hear light scratching in walls, under floors, or in the loft. The sound is quieter and higher-pitched than rat activity.' },
      { sign: 'Shredded materials in hidden corners', detail: 'Mice tear paper, cardboard, loft insulation, and fabric to build nests. Finding shredded material behind furniture or in the back of cupboards is a strong indicator.' },
      { sign: 'Small gnaw marks on food packaging', detail: 'Look for small, irregular teeth marks on cereal boxes, biscuit packets, and plastic food bags. Mice have smaller teeth than rats, leaving narrower marks.' },
      { sign: 'Musty, ammonia-like smell', detail: 'A mouse-inhabited area develops a characteristic stale, musky odour from their urine. This smell is strongest in enclosed spaces like cupboards and under-stair areas.' }
    ],

    treatmentSteps: [
      { step: 'Thorough property inspection', description: 'We check the entire property to assess activity levels, locate nesting sites, and identify all entry points. Mice leave UV-visible urine trails that help us map their routes.' },
      { step: 'Baiting and trapping', description: 'We deploy tamper-resistant bait stations and snap traps in targeted locations along mouse runs. We choose the method best suited to your property — for example, traps rather than poison where pets or children are present.' },
      { step: 'Follow-up monitoring', description: 'We return to check traps, assess bait take, and confirm activity is reducing. Mouse infestations typically require 1-2 follow-up visits.' },
      { step: 'Entry point proofing', description: 'We seal gaps with wire wool, metal plates, or cement. Any hole larger than 6mm is a potential mouse entry point — we identify and close them all.' }
    ],
    treatmentDuration: 'Most mouse problems are resolved within 1-3 weeks. Single-point entries are often sorted in a single visit with proofing.',

    residentialRisks: 'Mice contaminate kitchen surfaces and food with droppings and urine. They gnaw electrical cables, increasing fire risk. Their nesting in loft insulation reduces its effectiveness. The constant night-time noise causes sleep disruption and stress.',
    commercialRisks: 'Any evidence of mice in a food business can trigger enforcement action from Environmental Health. Contaminated stock must be destroyed. Retail and office environments suffer reputation damage when mice are spotted by customers or staff.',
    healthRisks: ['Salmonella and E. coli from droppings on food surfaces', 'Hantavirus (rare in UK)', 'Allergic reactions to mouse dander and droppings', 'Lymphocytic choriomeningitis virus (LCMV)'],
    propertyDamage: ['Gnawed electrical wiring', 'Damaged loft insulation', 'Contaminated stored food', 'Chewed furniture, books, and clothing', 'Soiled areas from urine trails'],

    preventionTips: [
      'Seal any gap larger than 6mm (pencil width) around pipes, cables, and door frames.',
      'Store all food in glass, metal, or heavy plastic containers with tight lids.',
      'Clear clutter from under stairs, in garages, and in loft spaces — mice nest in undisturbed areas.',
      'Keep kitchen surfaces clean and sweep up crumbs daily.',
      'Check the seals around your garage door and any utility entry points — these are common weak spots.'
    ],

    commonNestLocations: ['Behind kitchen appliances (ovens, fridges, washing machines)', 'Inside wall cavities', 'In loft insulation', 'Under-stair cupboards', 'Behind bath panels', 'Inside stored boxes and clutter'],

    faqs: [
      { question: 'How small a gap can a mouse fit through?', answer: 'A mouse can squeeze through a gap as small as 6mm — about the width of a pencil. This is why proofing is essential. We check every potential entry point and seal them.' },
      { question: 'Should I use poison or traps?', answer: 'It depends on your situation. In homes with pets or small children, we often use snap traps. In loft spaces and commercial premises, tamper-resistant bait stations are usually more effective. We advise the best approach for your property.' },
      { question: 'I only saw one mouse — is it an infestation?', answer: 'Possibly. Mice breed extremely fast and are rarely alone. If you have seen one, there are very likely more nearby. Early treatment prevents the problem from escalating.' },
      { question: 'How do mice get into my loft?', answer: 'Mice climb rough walls, squeeze through gaps around roof tiles, and follow pipework and cables up through the building. Once in the loft, warm insulation provides an ideal nesting site.' },
      { question: 'Will the mice come back after treatment?', answer: 'Not if entry points are sealed. Proofing is the most important part of mouse control — it stops new mice entering even if populations build up outside.' },
      { question: 'Are mouse droppings a health risk?', answer: 'Yes. Mouse droppings carry bacteria including salmonella and E. coli. Avoid sweeping them up — spray with disinfectant first, then wipe with disposable cloths and gloves.' }
    ],

    isEmergencyCommon: true,
    urgencyLevel: 'medium',
    responseTimeNote: 'We aim for next-day visits for mouse problems. Infestations in kitchens or food areas are prioritised.'
  },

  'mole-control': {
    slug: 'mole-control',
    commonName: 'Moles',
    pestName: 'mole',
    scientificName: 'Talpa europaea',
    pestCategory: 'mammal',

    biology: 'Moles are solitary animals that live almost entirely underground. They breed once per year in spring, producing a litter of 3-4 pups. Young moles leave the nest at around 5 weeks and must find their own territory — this dispersal period in early summer often causes a spike in new mole activity across lawns and fields.',
    behavior: 'A single mole digs an extensive tunnel network, moving up to 20 metres of soil per day. They patrol their tunnels regularly, eating any worms and grubs that fall in. Moles are active throughout the year and do not hibernate. Most of the damage you see is caused by just one or two moles.',
    dietAndHabitat: 'Moles eat earthworms, leather jackets, and soil-dwelling grubs. They need to eat roughly half their body weight each day. They prefer moist, well-drained soil that supports a good worm population — which is exactly the kind of soil found in well-maintained lawns and gardens.',

    peakSeasons: ['spring', 'autumn'],
    seasonalExplanation: 'Mole activity is most visible in spring when males extend their tunnel networks to find mates, and in autumn when worms move deeper and moles dig new tunnels to follow them. Wet weather also drives moles to push up more soil.',

    signs: [
      { sign: 'Fresh molehills on the lawn', detail: 'Molehills are mounds of loose, finely crumbled soil pushed up from below. Fresh hills appear overnight and the soil will be damp and dark. A single mole can produce several hills per day.' },
      { sign: 'Raised ridges of soil across the lawn', detail: 'Shallow surface tunnels push up visible ridges of turf. These are feeding tunnels and may only be used once, but they damage grass roots along their length.' },
      { sign: 'Soft or sinking patches in the lawn', detail: 'Walking over mole tunnels can feel spongy underfoot. Deeper tunnels may collapse under foot traffic, leaving uneven dips across the lawn.' },
      { sign: 'Disturbed flower beds or vegetable patches', detail: 'Moles tunnelling through garden beds uproot plants and damage root systems. Rows of bulbs can be displaced from below.' }
    ],

    treatmentSteps: [
      { step: 'Activity mapping', description: 'We identify which tunnels are actively in use by lightly pressing them down and checking which are repaired overnight. This tells us exactly where the mole is working.' },
      { step: 'Professional trapping', description: 'We set professional-grade mole traps in active runs. Trapping is the most humane and effective method — it targets the specific mole causing the damage without affecting other wildlife.' },
      { step: 'Checking and removal', description: 'We return to check traps, typically within 2-5 days. Most mole problems are resolved by catching 1-2 moles.' },
      { step: 'Lawn advice', description: 'After trapping, we can flatten existing molehills and advise on lawn repair. We also explain what to watch for if new mole activity appears in future.' }
    ],
    treatmentDuration: 'Most mole problems are resolved within 1-2 weeks. Simple cases with one active mole can be sorted in a single visit.',

    residentialRisks: 'Moles ruin the appearance of lawns and garden beds. Tunnelling damages grass roots, displaces plants, and creates an uneven surface that is difficult to mow and can be a trip hazard. For properties with well-kept gardens, the visual damage is significant.',
    commercialRisks: 'Moles are a serious problem for sports pitches, golf courses, and bowling greens where surface quality is critical. Agricultural land suffers from contaminated silage when soil from molehills is mixed into grass crops. Commercial grounds and parks lose their visual appeal.',
    healthRisks: ['Moles themselves pose minimal direct health risk', 'Trip hazard from uneven ground and collapsed tunnels', 'Soil contamination of silage in agricultural settings'],
    propertyDamage: ['Ruined lawns and garden beds', 'Damaged plant root systems', 'Uneven ground surfaces', 'Contaminated agricultural silage', 'Undermined paths, patios, and driveways in severe cases'],

    preventionTips: [
      'There is no reliable way to prevent moles entirely — they go where the worms are.',
      'Reducing excessive watering can lower worm populations near the surface, making the area less attractive.',
      'Physical barriers (wire mesh buried vertically around small areas) can protect specific garden beds.',
      'Sonic deterrent devices have limited evidence of effectiveness and often just move the problem.',
      'Regular monitoring and early trapping when the first hills appear prevents tunnel networks from expanding.'
    ],

    commonNestLocations: ['Under a large molehill (the fortress) usually near a hedge or fence line', 'In well-drained soil with good worm populations', 'Lawns, garden borders, and field margins', 'Not in waterlogged or very sandy soil'],

    faqs: [
      { question: 'How many moles are causing the damage?', answer: 'Usually just one or two. Moles are solitary and territorial. A single mole can produce dozens of hills across a large lawn. We identify and trap the specific moles responsible.' },
      { question: 'Do mole deterrents work?', answer: 'Sonic devices, mothballs, and home remedies have very little evidence behind them. In our experience they either do nothing or temporarily move the mole to another part of the garden. Professional trapping is the only reliable solution.' },
      { question: 'Is mole trapping humane?', answer: 'Yes. Professional mole traps are designed for a quick, clean catch. It is the method recommended by pest control industry bodies and is far more humane than poisoning, which is now restricted.' },
      { question: 'Can moles damage my foundations?', answer: 'Mole tunnels are shallow (usually 10-30cm deep) and rarely threaten building foundations. However, extensive tunnelling can undermine paths, patios, and driveways over time.' },
      { question: 'Will more moles move in after trapping?', answer: 'It is possible. Vacant mole territories can attract new moles, especially during spring dispersal. If new activity appears, early re-trapping prevents the problem from re-establishing.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'low',
    responseTimeNote: 'Mole problems are not urgent but benefit from prompt action to prevent tunnel networks spreading. We usually schedule visits within a few days.'
  },

  'bed-bug-treatment': {
    slug: 'bed-bug-treatment',
    commonName: 'Bed Bugs',
    pestName: 'bed bug',
    scientificName: 'Cimex lectularius',
    pestCategory: 'insect',

    biology: 'Bed bugs are small, flat, oval insects about 5mm long — roughly the size of an apple seed. They feed exclusively on blood, usually at night. A female lays 1-5 eggs per day and up to 500 in her lifetime. Eggs hatch in 7-10 days, and nymphs reach adulthood in about 5 weeks with regular feeding.',
    behavior: 'Bed bugs are nocturnal and hide during the day in seams, crevices, and folds close to where people sleep. They are attracted by body heat and carbon dioxide. They can survive several months without feeding, which makes them extremely persistent and difficult to starve out.',
    dietAndHabitat: 'Bed bugs feed exclusively on human blood (occasionally pets). They bite exposed skin during sleep, feeding for 5-10 minutes before retreating to their hiding spot. They are not attracted by dirt — even the cleanest homes and hotels can get bed bugs. They spread through luggage, clothing, and second-hand furniture.',

    peakSeasons: ['summer', 'autumn'],
    seasonalExplanation: 'Bed bug activity increases in summer when warmer temperatures speed up breeding. There is also a spike after holiday season as travellers unknowingly bring bed bugs home in luggage from hotels and hostels.',

    signs: [
      { sign: 'Itchy red bite marks in lines or clusters', detail: 'Bed bug bites often appear as small, red, itchy welts in a line or cluster on exposed skin — arms, shoulders, neck, and face. Not everyone reacts to bites, so absence of bites does not mean absence of bugs.' },
      { sign: 'Small dark spots on bedding', detail: 'Bed bug excrement leaves tiny dark brown or black spots on sheets, mattresses, and pillowcases. These spots bleed into fabric when dampened.' },
      { sign: 'Blood smears on sheets', detail: 'Crushing a recently fed bed bug in your sleep leaves small reddish-brown blood smears on the sheets.' },
      { sign: 'Shed skins and eggs in mattress seams', detail: 'Bed bugs moult five times before reaching adulthood. Translucent shed skins and tiny white eggs (1mm long) accumulate in mattress seams, headboard joints, and bed frame crevices.' },
      { sign: 'Sweet, musty odour', detail: 'A heavy bed bug infestation produces a distinctive sweet, sickly smell from their scent glands. This is often described as similar to coriander or mouldy raspberries.' }
    ],

    treatmentSteps: [
      { step: 'Detailed inspection', description: 'We thoroughly examine the bed frame, mattress, headboard, bedside furniture, and surrounding areas. Bed bugs hide in surprisingly narrow crevices — we know where to look.' },
      { step: 'Insecticidal spray treatment', description: 'We apply a residual insecticide to all harbourage areas. This kills bugs on contact and continues working for weeks as hidden bugs emerge to feed.' },
      { step: 'Second treatment visit', description: 'A follow-up treatment 2 weeks later is essential to catch any newly hatched nymphs that survived as eggs during the first visit. Eggs are resistant to most insecticides.' },
      { step: 'Post-treatment advice', description: 'We advise on washing bedding at 60°C, using mattress encasements, and monitoring for any residual activity over the following weeks.' }
    ],
    treatmentDuration: 'Bed bug treatment requires a minimum of 2 visits spaced 2 weeks apart. Full eradication is usually confirmed within 4-6 weeks.',

    residentialRisks: 'Bed bugs cause intense psychological distress — the anxiety of being bitten in your own bed, sleep disruption, and the stigma associated with an infestation. Bites cause itching and discomfort, and heavy scratching can lead to secondary skin infections.',
    commercialRisks: 'Hotels, B&Bs, and hostels face devastating reviews and compensation claims from guests bitten by bed bugs. Care homes and student accommodation require rapid, discreet treatment to prevent spread between rooms.',
    healthRisks: ['Itchy bite reactions causing discomfort and sleep loss', 'Secondary skin infections from excessive scratching', 'Psychological distress, anxiety, and insomnia', 'Allergic reactions in sensitive individuals'],
    propertyDamage: ['Staining on mattresses and bedding from excrement and blood', 'Bed bugs can spread to adjacent rooms through wall voids and electrical outlets if untreated'],

    preventionTips: [
      'Inspect hotel beds before unpacking when travelling — check mattress seams and headboard joints.',
      'Keep luggage on a hard surface (not the bed or carpet) in hotels.',
      'Wash all clothing at 60°C after returning from trips.',
      'Be cautious with second-hand furniture, especially mattresses and upholstered items.',
      'Use mattress encasements to reduce hiding spots and make early detection easier.'
    ],

    commonNestLocations: ['Mattress seams and piping', 'Bed frame joints and headboard crevices', 'Bedside table drawers and screw holes', 'Behind skirting boards near the bed', 'Inside electrical sockets near sleeping areas', 'In the folds of curtains close to the bed'],

    faqs: [
      { question: 'Do I need to throw away my mattress?', answer: 'Usually not. Professional insecticidal treatment is effective at clearing bed bugs from mattresses. A mattress encasement after treatment seals in any remaining bugs. We only recommend replacing a mattress if it is heavily infested and in poor condition.' },
      { question: 'How did I get bed bugs?', answer: 'Bed bugs are hitchhikers. They travel in luggage, clothing, and second-hand furniture. A stay in an infested hotel, a house guest, or a used sofa are all common sources. Bed bugs are not caused by poor hygiene.' },
      { question: 'Why are two treatments needed?', answer: 'Bed bug eggs are resistant to most insecticides. The first treatment kills all live bugs, but eggs hatch over the following 7-14 days. The second treatment catches these newly hatched nymphs before they can breed.' },
      { question: 'Can bed bugs spread to other rooms?', answer: 'Yes. If left untreated, bed bugs will spread along wall voids, through electrical conduits, and on clothing to adjacent rooms. Early treatment prevents this from happening.' },
      { question: 'Do bed bugs carry diseases?', answer: 'Bed bugs are not known to transmit diseases. Their main impact is the discomfort from bites, sleep disruption, and the significant psychological distress they cause.' },
      { question: 'Can I treat bed bugs myself?', answer: 'Over-the-counter sprays rarely work on bed bugs and can scatter them to new hiding spots, making the problem worse. Professional treatment with residual insecticides and a follow-up visit is the reliable way to clear an infestation.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'high',
    responseTimeNote: 'Bed bug treatment is not an emergency callout, but we prioritise bookings due to the distress they cause. We typically schedule the first visit within 2-3 days.'
  },

  'moth-control': {
    slug: 'moth-control',
    commonName: 'Moths',
    pestName: 'moth',
    scientificName: 'Tineola bisselliella (clothes moth) / Hofmannophila pseudospretella (brown house moth)',
    pestCategory: 'insect',

    biology: 'The common clothes moth is small (6-8mm wingspan) and golden-buff coloured. It avoids light and prefers to scuttle rather than fly. A female lays 40-100 eggs over 2-3 weeks, attaching them to natural fibres. Larvae — not adult moths — cause the damage, feeding for 2-6 months before pupating.',
    behavior: 'Clothes moth larvae feed on keratin, the protein found in wool, silk, feathers, and fur. They spin silk webbing as they feed, creating visible tubes or patches on fabrics. They prefer dark, undisturbed areas — the back of wardrobes, under heavy furniture, and in seldom-used drawers.',
    dietAndHabitat: 'Larvae eat wool, cashmere, silk, feathers, and fur. They are also attracted to soiled fabrics where food stains, sweat, or skin cells provide additional nutrients. They will not eat synthetic fabrics unless blended with natural fibres.',

    peakSeasons: ['spring', 'summer'],
    seasonalExplanation: 'Moth activity peaks from April to October when warmer temperatures speed up their life cycle. Centrally heated homes can support year-round breeding, meaning infestations are increasingly common in winter too.',

    signs: [
      { sign: 'Irregular holes in woollen clothing or carpets', detail: 'Larvae chew irregular holes in wool, cashmere, and silk garments. On carpets, you will see threadbare patches, often under furniture or along skirting boards where the carpet is undisturbed.' },
      { sign: 'Silk webbing or tubes on fabrics', detail: 'Clothes moth larvae spin silk tubes and webbing as they feed. Look for silky cases or patches on the surface of affected fabrics, especially in dark corners of wardrobes.' },
      { sign: 'Small golden-buff moths fluttering indoors', detail: 'Adult clothes moths are small, pale gold, and avoid light. If you see them walking or fluttering weakly along walls or in wardrobes, larvae are likely already feeding nearby.' },
      { sign: 'Gritty residue (frass) on shelves or in drawers', detail: 'Moth larvae produce sandy, grain-like droppings (frass) that accumulate beneath feeding sites. Check wardrobe floors and the bottoms of drawers.' }
    ],

    treatmentSteps: [
      { step: 'Inspection and identification', description: 'We identify the moth species and locate all affected areas. Clothes moths and carpet moths require different treatment approaches. We check wardrobes, carpets, soft furnishings, and any stored textiles.' },
      { step: 'Targeted insecticidal treatment', description: 'We apply a residual insecticide spray to affected carpets, wardrobe interiors, and harbourage areas. This kills larvae on contact and provides ongoing protection as eggs hatch.' },
      { step: 'Pheromone monitoring', description: 'We place pheromone traps to monitor adult moth activity after treatment. This confirms the treatment is working and catches any remaining males to disrupt breeding.' },
      { step: 'Prevention advice', description: 'We advise on fabric storage, regular vacuuming of carpet edges, and use of cedar or lavender as natural deterrents to reduce the risk of reinfestation.' }
    ],
    treatmentDuration: 'A single treatment visit with follow-up monitoring. Full cycle eradication can take 6-8 weeks due to the long larval stage.',

    residentialRisks: 'Moths destroy irreplaceable items — vintage clothing, heirloom rugs, wedding dresses stored in wardrobes, and expensive wool carpets. The damage is often discovered too late, after larvae have been feeding for weeks or months in dark, undisturbed areas.',
    commercialRisks: 'Textile retailers, museums, and clothing stores face stock damage and customer complaints. Hotels and care homes risk damage to furnishings, carpets, and stored linens.',
    healthRisks: ['Moths are not a direct health risk', 'Some people develop mild allergic reactions to moth scales and larval hairs', 'The psychological distress of damaged clothing and furnishings'],
    propertyDamage: ['Holes in wool, cashmere, and silk clothing', 'Threadbare patches on wool carpets and rugs', 'Damaged upholstery on natural-fibre furniture', 'Destruction of stored textiles, furs, and feathered items'],

    preventionTips: [
      'Wash or dry-clean clothes before long-term storage — moths are attracted to body oils and food stains.',
      'Store valuable woollens in sealed garment bags or airtight containers.',
      'Vacuum regularly along skirting boards, under heavy furniture, and in wardrobe corners where larvae hide.',
      'Cedar blocks and lavender sachets can help deter moths but will not eliminate an existing infestation.',
      'Rotate and inspect stored clothing seasonally rather than leaving it undisturbed for years.'
    ],

    commonNestLocations: ['Dark corners of wardrobes', 'Carpet edges along skirting boards', 'Under heavy furniture on wool carpets', 'Inside drawers with natural-fibre clothing', 'Stored blankets, scarves, and coats', 'Airing cupboards with wool or feather items'],

    faqs: [
      { question: 'Is it the adult moths or larvae that cause damage?', answer: 'The larvae. Adult clothes moths do not eat — their sole purpose is to mate and lay eggs. The larvae feed on natural fibres for 2-6 months before pupating, and this is when all the damage occurs.' },
      { question: 'Why are moths eating my carpet?', answer: 'Carpet moths (a related species) target wool and wool-blend carpets, especially in undisturbed areas under sofas, beds, and along skirting boards. Synthetic carpets are not affected.' },
      { question: 'Do moth balls work?', answer: 'Traditional mothballs (naphthalene) are effective but produce a strong, unpleasant smell and are toxic. Cedar and lavender are milder alternatives that can deter moths, but they will not kill an active infestation. Professional treatment is needed for established problems.' },
      { question: 'How do moths get into my house?', answer: 'Adult moths fly in through open windows, or eggs and larvae can arrive on second-hand clothing, rugs, or furniture. Once inside a warm home, they breed continuously.' },
      { question: 'Can moths damage synthetic clothing?', answer: 'No. Clothes moths only eat natural fibres containing keratin — wool, silk, cashmere, feathers, and fur. Pure synthetic fabrics are safe. Blends with natural fibres may still be attacked.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'medium',
    responseTimeNote: 'Moth treatment is not an emergency, but early action limits damage to clothing and carpets. We typically schedule visits within a week.'
  },

  'flea-treatment': {
    slug: 'flea-treatment',
    commonName: 'Fleas',
    pestName: 'flea',
    scientificName: 'Ctenocephalides felis (cat flea) / Ctenocephalides canis (dog flea)',
    pestCategory: 'insect',

    biology: 'The cat flea is the most common species found in UK homes, affecting both cats and dogs. An adult female lays up to 50 eggs per day, which fall off the pet into carpets, bedding, and soft furnishings. Eggs hatch into larvae that feed on organic debris in carpet fibres. Pupae can remain dormant for months, hatching when they detect vibration, warmth, or carbon dioxide from a passing host.',
    behavior: 'Adult fleas live on the host animal, feeding on blood. They jump up to 30cm to reach a new host. The real problem is the breeding cycle in the home — for every flea you see on a pet, there are typically 95 more in the environment as eggs, larvae, and pupae hidden in carpets and soft furnishings.',
    dietAndHabitat: 'Adult fleas feed on blood. Larvae feed on organic matter in carpet fibres, including dried blood from adult flea droppings. Fleas thrive in warm, humid conditions — centrally heated homes with carpets provide an ideal year-round breeding environment.',

    peakSeasons: ['summer', 'autumn'],
    seasonalExplanation: 'Flea populations build through summer when warm weather speeds up the breeding cycle. Infestations often peak in September-October. However, in heated homes with carpets, fleas breed year-round.',

    signs: [
      { sign: 'Pets scratching excessively', detail: 'Cats and dogs with fleas scratch, bite, and groom themselves constantly. Cats may over-groom patches of fur away. Check the fur around the neck and base of the tail.' },
      { sign: 'Tiny black specks in pet bedding', detail: 'Flea dirt (droppings) looks like fine black grit. Place specks on damp white tissue — if they dissolve into reddish-brown streaks, it is digested blood from flea droppings.' },
      { sign: 'Bites on human ankles and lower legs', detail: 'Flea bites on humans appear as small, red, itchy spots clustered around ankles and lower legs. Fleas in carpet jump onto the nearest exposed skin.' },
      { sign: 'Seeing tiny dark insects jumping in carpet', detail: 'Adult fleas are 1-3mm long, dark brown, and jump when disturbed. Walk across a suspect carpet in white socks — you may see fleas jumping onto them.' }
    ],

    treatmentSteps: [
      { step: 'Home preparation advice', description: 'Before we visit, we advise vacuuming all carpets and soft furnishings thoroughly and washing pet bedding at 60°C. This removes a large proportion of eggs and larvae and ensures the treatment reaches the carpet base.' },
      { step: 'Residual insecticidal spray', description: 'We spray all carpeted areas, rugs, and soft furnishings with a professional insecticide containing an insect growth regulator (IGR). The IGR prevents eggs and larvae developing, breaking the breeding cycle.' },
      { step: 'Advice on pet treatment', description: 'The home treatment alone is not enough — pets must be treated simultaneously with a veterinary-grade flea product. We advise on timing to ensure both home and pet treatments work together.' },
      { step: 'Post-treatment guidance', description: 'We explain that you may still see fleas for up to 2-3 weeks after treatment as dormant pupae hatch. These new fleas will die on contact with the treated surfaces. Do not vacuum for at least 14 days after treatment.' }
    ],
    treatmentDuration: 'A single professional spray visit, combined with pet treatment. Full flea eradication takes 2-4 weeks as dormant pupae hatch and contact the treated surfaces.',

    residentialRisks: 'Flea infestations cause constant itching and discomfort for both pets and people. Bites can trigger allergic reactions, and heavy infestations in young or elderly pets can cause anaemia. The psychological discomfort of living with fleas is significant.',
    commercialRisks: 'Kennels, catteries, and pet grooming businesses must maintain flea-free environments. Holiday lets and rental properties can develop flea problems between tenants, especially if previous occupants had pets.',
    healthRisks: ['Itchy bite reactions on humans', 'Flea allergy dermatitis in pets', 'Tapeworm transmission (fleas are an intermediate host)', 'Anaemia in young or elderly pets with heavy infestations', 'Secondary skin infections from scratching'],
    propertyDamage: ['No significant property damage — fleas are a health and comfort issue rather than a structural one'],

    preventionTips: [
      'Treat all pets with a vet-recommended flea product year-round, not just in summer.',
      'Vacuum carpets and soft furnishings regularly, especially around pet sleeping areas.',
      'Wash pet bedding at 60°C weekly during flea season.',
      'If your property has been empty with fleas present, the vibration of returning will trigger a mass hatching — treat before moving back in.',
      'Treat all pets in the household simultaneously — fleas will move between untreated animals.'
    ],

    commonNestLocations: ['Carpet fibres throughout the home', 'Pet bedding and blankets', 'Gaps between floorboards', 'Upholstered furniture where pets sit', 'Under-furniture carpet areas where vacuuming is missed', 'Car seats and boot linings if pets travel regularly'],

    faqs: [
      { question: 'Why am I still seeing fleas after treatment?', answer: 'Flea pupae are protected by a cocoon that resists insecticides. They hatch over the following 2-3 weeks when triggered by vibration and warmth. These newly emerged fleas will die on contact with the treated surfaces. This is normal and expected.' },
      { question: 'Do I need to leave the house during treatment?', answer: 'Yes, for approximately 2 hours while the spray dries. Pets should also be removed. The treated surfaces are safe once dry.' },
      { question: 'We don\'t have pets — how did we get fleas?', answer: 'Fleas can come from previous occupants\' pets, visiting animals, or wildlife. Dormant flea pupae can survive in empty carpets for over a year, hatching when people move in and trigger them with vibration and body heat.' },
      { question: 'Should I vacuum before or after treatment?', answer: 'Vacuum thoroughly before treatment to remove eggs and larvae. Do NOT vacuum for at least 14 days after treatment — vacuuming removes the insecticide from carpet fibres and reduces its effectiveness.' },
      { question: 'Can fleas live in hard floors?', answer: 'Fleas strongly prefer carpet but can survive in gaps between floorboards and in rugs on hard floors. Properties with all hard flooring rarely develop significant flea problems.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'medium',
    responseTimeNote: 'Flea treatment is usually scheduled within a few days. We time visits to coincide with pet flea treatment for maximum effectiveness.'
  },

  'bird-control': {
    slug: 'bird-control',
    commonName: 'Pest Birds',
    pestName: 'bird',
    scientificName: 'Columba livia (feral pigeon) / Larus argentatus (herring gull)',
    pestCategory: 'bird',

    biology: 'Feral pigeons breed year-round in the UK, producing 2 eggs per clutch and up to 6 clutches per year. Herring gulls nest from April to August and are protected under the Wildlife and Countryside Act 1981. Starlings also cause problems when they roost in large numbers on buildings.',
    behavior: 'Pigeons are habitual birds that return to the same roosting and nesting spots year after year. Once they establish a site — a ledge, balcony, or solar panel — they are very difficult to move without physical deterrents. Gulls are territorial and aggressive during nesting season, swooping at people near their nests.',
    dietAndHabitat: 'Pigeons thrive on food waste, grain, and scraps in urban areas. Gulls are opportunistic and scavenge bins, chip shops, and outdoor dining areas. Both species prefer elevated nesting sites — building ledges, flat roofs, chimney pots, and under solar panels.',

    peakSeasons: ['spring', 'summer'],
    seasonalExplanation: 'Pigeon breeding peaks in spring and summer but continues year-round. Gull nesting season runs from April to August, during which they are at their most aggressive. Starling roosts build from autumn into winter.',

    signs: [
      { sign: 'Accumulated droppings on ledges, paths, and roofs', detail: 'Bird droppings are acidic and accumulate rapidly. A roosting site builds up thick layers of fouling that damages stonework, paintwork, and metal over time.' },
      { sign: 'Nesting material in gutters and on ledges', detail: 'Twigs, feathers, and debris block gutters, downpipes, and drainage channels. Pigeon nests are loose platforms of sticks; gull nests are larger and often on flat roofs.' },
      { sign: 'Noise from cooing, squawking, or scratching', detail: 'Pigeons roosting in loft spaces or under solar panels produce constant cooing. Gulls are extremely loud during nesting season, particularly at dawn.' },
      { sign: 'Aggressive behaviour from gulls', detail: 'Nesting gulls dive-bomb and strike people walking near their nest. This is a serious problem outside shops, schools, and restaurants during breeding season.' }
    ],

    treatmentSteps: [
      { step: 'Site survey and species identification', description: 'We assess the bird species, the scale of the problem, and the property layout. Different species require different deterrent approaches, and some birds have legal protections that affect what methods we can use.' },
      { step: 'Deterrent installation', description: 'We install physical deterrents suited to the situation — spike strips on ledges, netting over larger areas, wire systems on parapets, or solar panel bird proofing mesh. These prevent birds from landing or nesting without harming them.' },
      { step: 'Fouling cleanup', description: 'We remove accumulated droppings and nesting material, which can carry harmful bacteria and fungi. Specialist biocidal cleaning is used for heavy fouling.' },
      { step: 'Ongoing monitoring', description: 'For commercial contracts, we provide regular inspections to maintain deterrents and address any new roosting attempts before they become established.' }
    ],
    treatmentDuration: 'Deterrent installation typically takes 1 day for residential properties. Commercial sites may require multiple days depending on the area covered.',

    residentialRisks: 'Pigeons nesting under solar panels damage wiring and panels while blocking gutters with nesting material. Droppings on paths and patios are slippery and unsightly. Gulls nesting on roofs create noise, mess, and can be aggressive towards residents and visitors.',
    commercialRisks: 'Bird fouling on shopfronts, entrances, and signage deters customers. Health and safety regulations require businesses to manage bird contamination on walkways. Blocked gutters from nesting cause water damage. Aggressive gulls near restaurant seating drive away trade.',
    healthRisks: ['Psittacosis — a lung infection spread by inhaling dried pigeon droppings', 'Salmonella and E. coli from droppings contaminating surfaces', 'Cryptococcosis — a fungal infection from pigeon fouling', 'Gull attacks causing injury during nesting season', 'Slip hazard from wet droppings on paths'],
    propertyDamage: ['Acidic droppings damage stone, brick, paintwork, and metal', 'Blocked gutters and downpipes causing water overflow and damp', 'Solar panel damage from nesting pigeons', 'Damaged roof tiles from gull nesting', 'Contaminated stock in warehouses and loading bays'],

    preventionTips: [
      'Install bird spikes or netting on ledges before pigeons establish a roosting habit — prevention is far easier than removal.',
      'Fit solar panel bird proofing mesh when panels are installed, not after birds have moved in.',
      'Keep bin areas clean and secured — easily accessible food waste attracts pigeons and gulls.',
      'Block access to loft spaces and roof voids where pigeons could nest.',
      'For commercial sites, a regular bird management contract prevents problems from building up.'
    ],

    commonNestLocations: ['Under solar panels', 'Building ledges and window sills', 'Flat roofs and behind parapets', 'Inside roof voids through broken tiles', 'Chimney pots and flue openings', 'Gutters and drainage hoppers'],

    faqs: [
      { question: 'Can I remove a gull nest myself?', answer: 'No. Herring gulls and their nests are protected under the Wildlife and Countryside Act 1981. It is illegal to disturb an active gull nest without a licence. We can advise on legal deterrent options and nest prevention for the following season.' },
      { question: 'How do you stop pigeons nesting under solar panels?', answer: 'We fit a galvanised mesh clip system around the edges of the solar panel array. This creates a physical barrier that prevents pigeons from getting underneath while still allowing airflow. It does not affect the panels\' performance.' },
      { question: 'Are bird droppings dangerous?', answer: 'Yes. Dried pigeon droppings can release spores that cause respiratory infections including psittacosis and cryptococcosis. We recommend professional cleaning for heavy fouling rather than attempting it yourself.' },
      { question: 'Will spikes hurt the birds?', answer: 'No. Bird spikes are a humane deterrent. They prevent birds from landing on treated surfaces but do not injure them. The birds simply move to a less protected area.' },
      { question: 'How long do bird deterrents last?', answer: 'Quality stainless steel spike strips and UV-stabilised netting last 10-15 years with minimal maintenance. We use professional-grade materials, not cheap adhesive strips that fail in weather.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'medium',
    responseTimeNote: 'Bird control is usually planned rather than emergency. We schedule surveys within a week and installation as soon as possible after approval.'
  },

  'fly-control': {
    slug: 'fly-control',
    commonName: 'Flies',
    pestName: 'fly',
    scientificName: 'Musca domestica (house fly) / Calliphora vomitoria (bluebottle)',
    pestCategory: 'insect',

    biology: 'House flies live for about 30 days and can lay up to 500 eggs in that time. Eggs hatch into maggots within 24 hours and develop into adults in 7-10 days in warm conditions. Bluebottles are larger metallic flies that breed in decomposing organic matter and meat.',
    behavior: 'Flies are attracted to food, waste, and decomposing matter. They taste with their feet, landing on surfaces to sample food. They vomit digestive fluids onto food before feeding, which is how they spread bacteria. House flies stay close to food sources and breed in warm, moist organic matter.',
    dietAndHabitat: 'Flies feed on any organic material — food waste, animal droppings, decomposing matter, and sugary liquids. They breed in rotting food, compost, animal waste, and drains. A warm, food-rich environment like a kitchen or food processing area can support rapid population growth.',

    peakSeasons: ['summer'],
    seasonalExplanation: 'Fly populations peak from June to September when warm temperatures accelerate breeding. A single pair of house flies could theoretically produce millions of descendants in one summer if unchecked.',

    signs: [
      { sign: 'Large numbers of flies indoors', detail: 'A few flies are normal in summer. Persistently large numbers, especially concentrated in one room, suggest a breeding source nearby — rotting food, a dead animal, or a drain issue.' },
      { sign: 'Maggots in bins or around food waste', detail: 'White, legless larvae (maggots) in your bin, compost, or around pet bowls confirm flies are breeding on your property.' },
      { sign: 'Clusters of flies at windows', detail: 'Flies buzzing at windows are often trying to exit. If you find the same thing every morning, they may be breeding inside the building — in a wall cavity, loft space, or hidden waste.' },
      { sign: 'Dark spots on walls and light fittings', detail: 'Fly specks (regurgitated food and droppings) leave dark spots on walls, ceilings, and light fixtures. Heavy spotting indicates a sustained fly presence.' }
    ],

    treatmentSteps: [
      { step: 'Source identification', description: 'The priority is finding and eliminating the breeding source. We inspect bins, drains, loft spaces, and potential hidden sources like a dead animal in a wall cavity or under floorboards.' },
      { step: 'Source removal', description: 'We remove or address the breeding material. This might mean cleaning a fouled drain, removing a dead bird from a chimney, or advising on waste management improvements.' },
      { step: 'Knock-down treatment', description: 'For heavy infestations, we apply a targeted insecticidal spray to kill the existing fly population quickly. This provides immediate relief while the source removal takes effect.' },
      { step: 'Prevention measures', description: 'We install electric fly units (EFKs) for commercial premises and advise on proofing, drainage maintenance, and waste management to prevent recurrence.' }
    ],
    treatmentDuration: 'Once the breeding source is eliminated, fly numbers drop rapidly within days. Commercial fly management is an ongoing service with regular unit maintenance.',

    residentialRisks: 'Flies in the kitchen contaminate food with bacteria from every surface they have landed on — bins, drains, and animal waste. A sudden increase in flies can indicate a hidden dead animal or drainage problem that needs attention.',
    commercialRisks: 'Flies in a food business are an immediate Environmental Health concern. Food contamination, customer complaints, and potential closure are serious risks. Commercial kitchens, restaurants, and food production facilities require proactive fly management.',
    healthRisks: ['Salmonella, E. coli, and other bacterial contamination of food', 'Dysentery and gastroenteritis from fly-borne pathogens', 'Flies carry bacteria on their feet and spread it by vomiting digestive fluids onto food before feeding'],
    propertyDamage: ['No significant structural damage from flies', 'Contamination of food stores and preparation areas', 'Spotting on walls, ceilings, and fabrics from fly droppings'],

    preventionTips: [
      'Keep bins sealed with tight-fitting lids and clean them regularly in summer.',
      'Clear up pet food bowls promptly — do not leave food sitting out.',
      'Fit fly screens to kitchen and dining area windows during summer months.',
      'Check drains are flowing freely — blocked or slow drains are a common breeding site.',
      'Dispose of food waste frequently and do not let it accumulate indoors.'
    ],

    commonNestLocations: ['Wheelie bins and food waste containers', 'Drains with trapped organic matter', 'Compost heaps', 'Dead animals in wall cavities, chimneys, or under floors', 'Animal housing and stables', 'Commercial kitchen waste areas'],

    faqs: [
      { question: 'Why are there suddenly so many flies in my house?', answer: 'A sudden fly invasion usually means there is a breeding source nearby. Common causes are a dead animal in a wall cavity or chimney, a blocked drain, or a bin that needs cleaning. We can identify and eliminate the source.' },
      { question: 'What is the difference between house flies and cluster flies?', answer: 'House flies breed in food waste and are active in summer. Cluster flies are a different species that hibernate in buildings over winter — they enter loft spaces in autumn and emerge on warm days, sometimes in large numbers.' },
      { question: 'Do electric fly killers work?', answer: 'Yes. Professional electric fly units are very effective in commercial kitchens and food areas. They attract and kill flies continuously without chemicals. We supply and maintain commercial-grade units.' },
      { question: 'Can flies breed in my drains?', answer: 'Some fly species, particularly drain flies, breed in the organic film that builds up inside drains. Regular drain cleaning and maintenance prevents this. We can identify whether your drains are a breeding source.' },
      { question: 'Are fly sprays from the supermarket effective?', answer: 'Aerosol fly sprays kill flies on contact but do nothing to address the breeding source. The flies will return unless you eliminate where they are breeding. Professional treatment combines knock-down with source elimination.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'medium',
    responseTimeNote: 'We prioritise fly callouts for food businesses. Residential visits are usually scheduled within a few days.'
  },

  'squirrel-removal': {
    slug: 'squirrel-removal',
    commonName: 'Squirrels',
    pestName: 'squirrel',
    scientificName: 'Sciurus carolinensis (grey squirrel)',
    pestCategory: 'mammal',

    biology: 'Grey squirrels breed twice a year — in early spring and mid-summer. Litters of 3-4 young are born after a 44-day gestation. Young squirrels leave the nest at about 10 weeks. Grey squirrels are classified as an invasive non-native species in the UK and have no legal protection.',
    behavior: 'Grey squirrels are excellent climbers and can jump over 2 metres between branches or from trees to rooftops. They enter loft spaces through gaps in soffits, broken tiles, and along rooflines. Once inside, they gnaw woodwork, strip electrical cables, and shred insulation for nesting material.',
    dietAndHabitat: 'Squirrels eat nuts, seeds, berries, bird eggs, and bark. They cache food in autumn, burying nuts across gardens and parks. In urban areas they are bold and will raid bird feeders and bins. They prefer to nest in tree holes or dreys (leaf nests) but readily move into loft spaces for warmth and shelter.',

    peakSeasons: ['spring', 'autumn'],
    seasonalExplanation: 'Squirrels enter loft spaces most frequently in autumn seeking warmth for winter, and in spring when females look for safe nesting sites to raise young. Activity in lofts peaks during these breeding periods.',

    signs: [
      { sign: 'Heavy scratching and thumping in the loft', detail: 'Squirrels are larger than rats and produce louder, heavier sounds. You will hear thumping, scurrying, and gnawing during daylight hours — unlike rats, which are nocturnal.' },
      { sign: 'Damage to soffits, fascias, or roof edges', detail: 'Squirrels gnaw holes in wooden soffits and fascias to access the loft. Look for chew marks and enlarged gaps along the roofline.' },
      { sign: 'Shredded insulation and droppings in the loft', detail: 'Squirrels tear up loft insulation to build nests. Their droppings are slightly larger than rat droppings and more rounded at the ends.' },
      { sign: 'Gnawed electrical cables in the loft', detail: 'Squirrels gnaw on cables, water pipes, and stored items. Damaged electrical wiring is a serious fire hazard — this is the most dangerous aspect of a squirrel infestation.' }
    ],

    treatmentSteps: [
      { step: 'Loft inspection', description: 'We inspect the loft space to confirm squirrel activity, assess damage, and identify all entry and exit points. Squirrels often have more than one access route.' },
      { step: 'Trapping', description: 'We set professional cage traps inside the loft space. Under UK law, grey squirrels caught in traps must be humanely dispatched — it is illegal to release them back into the wild.' },
      { step: 'Trap checking and removal', description: 'We return to check traps every 24-48 hours as required by law. Most squirrel problems are resolved by catching 1-3 animals over a few days.' },
      { step: 'Proofing and repair', description: 'Once all squirrels are removed, we seal entry points with galvanised mesh or metal plates. We can also advise on repair of any cable or insulation damage.' }
    ],
    treatmentDuration: 'Typically 1-2 weeks to trap all squirrels and proof the entry points. Straightforward cases may be resolved faster.',

    residentialRisks: 'Squirrels in the loft gnaw electrical cables (fire risk), damage water pipes (leak risk), and destroy insulation. The noise overhead is disruptive, and squirrels can cause thousands of pounds of damage if left unchecked. Females with young are particularly destructive as they build large nests.',
    commercialRisks: 'Squirrels in commercial roof spaces damage cabling, stock, and building fabric. Offices and retail units in areas with mature trees are particularly vulnerable.',
    healthRisks: ['Minimal direct health risk from squirrels', 'Squirrel droppings and urine can carry salmonella', 'Fleas and ticks from squirrels can transfer to other animals or people'],
    propertyDamage: ['Gnawed electrical wiring — serious fire risk', 'Damaged water pipes and plumbing', 'Shredded loft insulation', 'Chewed woodwork, soffits, and fascia boards', 'Damage to stored items in loft spaces'],

    preventionTips: [
      'Trim tree branches that overhang the roof or come within 2 metres of the building.',
      'Repair any gaps in soffits, fascias, and roof tiles promptly.',
      'Fit metal mesh over potential entry points — squirrels can gnaw through plastic and wood.',
      'Avoid leaving bird feeders close to the house — they attract squirrels to the property.',
      'Check your loft space regularly for signs of entry, especially in autumn and spring.'
    ],

    commonNestLocations: ['Loft spaces, especially in insulation', 'Behind fascia boards and in soffits', 'Wall cavities accessed from the roofline', 'Tree dreys (leaf nests) close to buildings', 'Garden sheds and outbuildings with roof access'],

    faqs: [
      { question: 'Can grey squirrels be relocated?', answer: 'No. Under UK law, it is illegal to release a grey squirrel back into the wild once captured. They are classified as an invasive non-native species. Trapped squirrels must be humanely dispatched.' },
      { question: 'How do squirrels get into the loft?', answer: 'They gnaw through wooden soffits, squeeze through gaps around roof tiles, and climb up walls or along overhanging tree branches. A hole as small as a tennis ball is enough for a squirrel to enter.' },
      { question: 'What damage can squirrels do in a loft?', answer: 'The biggest risk is gnawed electrical wiring, which can cause fires. They also damage water pipes, shred insulation, and contaminate the loft with droppings and urine. Repair costs can run into thousands.' },
      { question: 'I can hear noise in the daytime — is it squirrels or rats?', answer: 'If the noise is during the day, especially in the morning and late afternoon, it is likely squirrels. Rats are predominantly nocturnal. Squirrels also produce heavier, louder sounds than rats.' },
      { question: 'Will squirrels come back after removal?', answer: 'Not if entry points are properly sealed. We use galvanised mesh and metal plates that squirrels cannot gnaw through. Without proofing, a new squirrel may find the same entry point.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'high',
    responseTimeNote: 'We treat squirrel infestations promptly due to the fire risk from gnawed wiring. We aim to visit within 2-3 days.'
  },

  'cockroach-control': {
    slug: 'cockroach-control',
    commonName: 'Cockroaches',
    pestName: 'cockroach',
    scientificName: 'Blattella germanica (German cockroach) / Blatta orientalis (Oriental cockroach)',
    pestCategory: 'insect',

    biology: 'German cockroaches are the most common indoor species in the UK. A female carries an egg case (ootheca) containing 30-40 eggs. She produces 4-8 egg cases in her lifetime, and nymphs reach adulthood in 6-12 weeks. This rapid breeding means a small cockroach problem escalates quickly.',
    behavior: 'Cockroaches are nocturnal and hide in warm, dark, humid crevices during the day. Seeing cockroaches during daylight usually means the infestation is severe and harbourages are overcrowded. They are extremely flat-bodied and can squeeze into cracks as thin as a coin.',
    dietAndHabitat: 'Cockroaches eat almost anything organic — food waste, grease, paper, glue, and even soap. They need warmth and moisture, which is why they are found around kitchens, bathrooms, boiler rooms, and commercial kitchens. German cockroaches prefer heated indoor environments; Oriental cockroaches tolerate cooler, damp conditions like basements and drains.',

    peakSeasons: ['summer', 'autumn'],
    seasonalExplanation: 'Cockroach breeding accelerates in warm conditions. In heated buildings they breed year-round, but populations peak in summer. German cockroaches are almost exclusively an indoor pest in the UK climate.',

    signs: [
      { sign: 'Live cockroaches at night', detail: 'Switch on the kitchen light at night — cockroaches scatter when exposed to light. If you see even one, there are almost certainly many more hidden nearby.' },
      { sign: 'Dark smear marks along edges', detail: 'Cockroaches leave dark, irregular smear marks where they travel along walls, corners, and where surfaces meet. These are most visible on light-coloured surfaces.' },
      { sign: 'Egg cases (oothecae) in hidden areas', detail: 'Brown, capsule-shaped egg cases about 8mm long are found in crevices, behind appliances, and in cupboard corners. Each case contains 30-40 eggs.' },
      { sign: 'Musty, unpleasant odour', detail: 'A cockroach infestation produces a distinct, oily, musty smell that becomes stronger as the population grows. It clings to surfaces and contaminated items.' },
      { sign: 'Droppings resembling black pepper', detail: 'Cockroach droppings look like black pepper or ground coffee, found along edges, in drawers, and behind appliances.' }
    ],

    treatmentSteps: [
      { step: 'Species identification and inspection', description: 'We identify the cockroach species, which determines the treatment approach. German cockroaches require different methods to Oriental cockroaches. We map all harbourage areas and assess infestation levels.' },
      { step: 'Gel bait application', description: 'We apply professional gel bait in targeted spots — inside cracks, behind appliances, under sinks, and in cupboard corners. Cockroaches feed on the bait and carry it back to harbourages, spreading it to others.' },
      { step: 'Insecticidal spray to harbourages', description: 'For severe infestations, we combine gel bait with a residual spray treatment targeted at cracks, crevices, and known hiding spots.' },
      { step: 'Follow-up inspection', description: 'We return to assess the effectiveness of treatment, reapply bait if needed, and check for surviving populations. Cockroach treatment usually requires 2-3 visits to achieve full eradication.' }
    ],
    treatmentDuration: 'Cockroach treatment requires 2-3 visits over 4-6 weeks. German cockroach infestations can be particularly persistent and may need extended treatment.',

    residentialRisks: 'Cockroaches in the kitchen contaminate food and surfaces with bacteria. They trigger asthma and allergic reactions, particularly in children. The sight of cockroaches causes extreme disgust and distress. Heavy infestations spread to neighbouring properties in terraced houses and flats.',
    commercialRisks: 'Cockroaches in a food business are grounds for immediate Environmental Health enforcement. Restaurants, takeaways, and hotels face closure, prosecution, and devastating publicity. Commercial kitchens must have zero-tolerance cockroach management.',
    healthRisks: ['Salmonella, E. coli, and dysentery from contaminated surfaces', 'Asthma and allergic reactions triggered by cockroach allergens', 'Gastroenteritis from food contaminated with cockroach droppings and secretions'],
    propertyDamage: ['Contamination of food storage areas', 'Staining and odour on surfaces from cockroach secretions', 'Damage to paper, fabrics, and book bindings (cockroaches eat the glue)'],

    preventionTips: [
      'Seal cracks and gaps around pipes, behind skirting boards, and around kitchen units.',
      'Fix dripping taps and eliminate sources of standing water — cockroaches need moisture.',
      'Clean behind and under kitchen appliances regularly — grease and food debris attract cockroaches.',
      'Store food in sealed containers and clean up crumbs and spills promptly.',
      'In flats and terraced properties, coordinate treatment with neighbours to prevent cross-infestation.'
    ],

    commonNestLocations: ['Behind and under kitchen appliances (ovens, fridges, dishwashers)', 'Inside electrical equipment motors', 'Under sinks and around pipework', 'Behind skirting boards and wall tiles', 'In cracks between kitchen units and walls', 'Boiler cupboards and hot water pipe ducts'],

    faqs: [
      { question: 'I only saw one cockroach — should I be worried?', answer: 'Yes. Cockroaches are nocturnal and hide in groups. Seeing one during the day usually means the population is large and hiding spaces are overcrowded. Early treatment prevents a small problem becoming a serious infestation.' },
      { question: 'Can cockroaches spread to my neighbours?', answer: 'Yes, particularly in flats, terraced houses, and shared buildings. Cockroaches travel through wall cavities, pipe ducts, and shared drainage. If your neighbours have cockroaches, your property is at risk too.' },
      { question: 'Why are cockroaches so hard to get rid of?', answer: 'Cockroaches breed rapidly, hide in extremely tight crevices, and some species have developed resistance to common insecticides. Professional gel baits and targeted treatments are far more effective than shop-bought sprays.' },
      { question: 'Do cockroaches only live in dirty homes?', answer: 'No. While poor hygiene helps cockroaches thrive, they can infest clean properties too. They arrive via deliveries, second-hand goods, and from neighbouring properties. Cleanliness reduces their food supply but does not guarantee prevention.' },
      { question: 'Can cockroaches survive without food?', answer: 'German cockroaches can survive about a month without food but only about two weeks without water. Eliminating water sources is an important part of control — fix leaks and mop up standing water.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'high',
    responseTimeNote: 'Cockroach problems in food businesses are treated urgently. Residential cases are prioritised within 2-3 days due to health risks.'
  },

  'ant-control': {
    slug: 'ant-control',
    commonName: 'Ants',
    pestName: 'ant',
    scientificName: 'Lasius niger (black garden ant) / Monomorium pharaonis (pharaoh ant)',
    pestCategory: 'insect',

    biology: 'A black garden ant colony can contain up to 15,000 workers, all daughters of a single queen who may live for 15 years. The colony produces winged males and females in summer for mating flights (known as "flying ant day"). Pharaoh ants are a tropical species that survives in heated buildings in the UK and has multiple queens per colony.',
    behavior: 'Ants follow chemical scent trails between the nest and food sources. When a scout finds food, she lays a pheromone trail that guides the rest of the colony to it — this is why you see long lines of ants heading to a specific spot. They are persistent and will find new routes if you block the existing one.',
    dietAndHabitat: 'Garden ants eat sugary foods, honeydew from aphids, and protein sources. They nest in soil, under paving slabs, in wall cavities, and in the foundations of buildings. Pharaoh ants need constant warmth and nest inside heated buildings — in wall voids, behind tiles, and near hot water pipes.',

    peakSeasons: ['spring', 'summer'],
    seasonalExplanation: 'Ant activity indoors peaks from March to September as colonies wake from winter dormancy and forage intensively. Flying ant swarms occur on humid days in July-August. Pharaoh ants are active year-round in heated buildings.',

    signs: [
      { sign: 'Lines of ants trailing across floors or worktops', detail: 'Ants follow pheromone trails in orderly lines between their nest and a food source. Trails often lead to kitchen areas, pet bowls, or sugar-rich foods.' },
      { sign: 'Small piles of fine soil around cracks', detail: 'Ants excavate soil as they extend their nest, pushing it out through gaps in paving, walls, or between floor tiles. Small mounds of sandy soil near the house indicate a nearby nest.' },
      { sign: 'Flying ants emerging indoors', detail: 'Winged ants emerging inside the house — especially from a crack in a wall or floor — confirm that a nest is located within the building fabric, not just visiting from the garden.' },
      { sign: 'Ants swarming around food sources', detail: 'Finding clusters of ants around a spilled drink, fruit bowl, or open food container in the kitchen. They appear quickly once a scout has found the source.' }
    ],

    treatmentSteps: [
      { step: 'Trail tracking and nest location', description: 'We follow ant trails back to locate the nest. The nest may be under the property, in wall cavities, or in the garden near the building. Knowing the nest location is key to effective treatment.' },
      { step: 'Bait treatment', description: 'We place professional ant bait gel along active trails. Worker ants carry the bait back to the nest and feed it to the queen and larvae, collapsing the entire colony from within. This is far more effective than killing individual ants with spray.' },
      { step: 'Residual spray for severe infestations', description: 'For heavy infestations or where bait alone is insufficient, we apply a residual insecticidal spray to entry points, trails, and nest entrances.' },
      { step: 'Proofing advice', description: 'We advise on sealing entry points — gaps in door frames, where pipes enter the building, and cracks in external walls — to prevent future ant invasions.' }
    ],
    treatmentDuration: 'Bait treatment takes 1-2 weeks to eliminate the colony as workers gradually carry poison back to the nest. Spray treatments provide faster knockdown for severe cases.',

    residentialRisks: 'Ants in the kitchen are a persistent nuisance, contaminating food and surfaces. Large numbers are distressing, particularly when they swarm. Ants nesting in wall cavities can damage mortar and wiring insulation over time.',
    commercialRisks: 'Ants in food businesses contaminate stock and preparation areas. Pharaoh ants in hospitals are a serious infection control risk as they can carry pathogens between wards. Any visible ant activity in customer-facing environments damages perception.',
    healthRisks: ['Garden ants are primarily a nuisance rather than a health risk', 'Pharaoh ants can carry harmful bacteria including salmonella and streptococcus', 'Food contamination from ants trailing across kitchen surfaces'],
    propertyDamage: ['Minor mortar damage from ants nesting in walls', 'Soil displacement under paving slabs causing subsidence', 'Contamination of food stores'],

    preventionTips: [
      'Wipe up sugary spills immediately — ants can detect sugar from a considerable distance.',
      'Store sweet foods (jam, honey, sugar) in sealed containers.',
      'Seal gaps around doors, windows, pipes, and where the wall meets the floor.',
      'Clear away pet food bowls after feeding rather than leaving them out.',
      'Address aphid infestations on garden plants near the house — ants farm aphids for honeydew and their presence attracts ant colonies closer to the building.'
    ],

    commonNestLocations: ['Under paving slabs and patios near the house', 'In soil against foundations', 'Inside wall cavities', 'Under kitchen floor tiles', 'In gardens near the building perimeter', 'Pharaoh ants: in heated internal wall voids near hot water pipes'],

    faqs: [
      { question: 'Why do ants keep coming back after I spray them?', answer: 'Killing the ants you can see does nothing to the thousands in the nest. The queen continues laying eggs and the colony replaces its losses within days. Bait treatment is the only way to destroy the colony — workers carry the bait back and it kills the queen.' },
      { question: 'What are flying ants?', answer: 'Flying ants are the reproductive males and females produced by the colony for mating. They swarm on warm, humid days in summer. Flying ants inside your house confirm a nest in or very near the building.' },
      { question: 'Are pharaoh ants different from garden ants?', answer: 'Yes. Pharaoh ants are tiny (2mm), pale yellow, and live exclusively in heated buildings. They have multiple queens per colony, which makes them much harder to treat. Standard ant sprays actually make pharaoh ant problems worse by causing the colony to split. They require specialist bait treatment.' },
      { question: 'Can ants damage my house?', answer: 'Garden ants rarely cause structural damage, but large colonies nesting in wall cavities can erode mortar over time. The main issue is nuisance and food contamination rather than structural harm.' },
      { question: 'Do boiling water or vinegar home remedies work?', answer: 'Pouring boiling water on an ant nest kills some workers but rarely reaches the queen deep underground. The colony recovers quickly. Vinegar disrupts scent trails temporarily but does not eliminate the nest. Professional bait treatment is the reliable solution.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'low',
    responseTimeNote: 'Ant problems are not emergencies but are best treated promptly before the colony grows. We typically schedule visits within a week.'
  },

  'silverfish-control': {
    slug: 'silverfish-control',
    commonName: 'Silverfish',
    pestName: 'silverfish',
    scientificName: 'Lepisma saccharina',
    pestCategory: 'insect',

    biology: 'Silverfish are small (10-12mm), wingless, silver-grey insects with a distinctive fish-like shape and movement. They can live for up to 8 years — unusually long for an insect. Females lay small clusters of eggs in cracks and crevices, and nymphs take 3-4 months to reach adulthood.',
    behavior: 'Silverfish are nocturnal and extremely fast-moving. They avoid light and hide in damp, dark crevices during the day. They are most active at night and are often spotted when you turn on a bathroom or kitchen light. They can survive for months without food.',
    dietAndHabitat: 'Silverfish eat starchy materials — paper, wallpaper paste, book bindings, cardboard, cotton, and even dried food like flour and oats. They need high humidity (75%+) and prefer temperatures of 20-25°C. Bathrooms, kitchens, basements, and poorly ventilated spaces are their ideal habitat.',

    peakSeasons: ['autumn', 'winter'],
    seasonalExplanation: 'Silverfish are present year-round but are noticed more in autumn and winter when we spend more time indoors and humid conditions build up in poorly ventilated bathrooms and kitchens.',

    signs: [
      { sign: 'Fast-moving silver insects in bathrooms or kitchens', detail: 'Silverfish dart away when you switch on the light. You will most often see them in bathrooms, under sinks, or in kitchen cupboards — wherever there is moisture.' },
      { sign: 'Irregular holes or surface scraping on paper and wallpaper', detail: 'Silverfish feed by scraping the surface of paper, leaving irregular holes, thin patches, and notched edges on books, documents, and wallpaper.' },
      { sign: 'Yellow stains on fabrics and paper', detail: 'Silverfish leave small yellow stains and tiny black pepper-like droppings on affected materials.' },
      { sign: 'Shed skins in cupboards and drawers', detail: 'Silverfish moult throughout their lives. Tiny, translucent shed skins in cupboards, drawers, and behind bathroom fittings indicate a population.' }
    ],

    treatmentSteps: [
      { step: 'Inspection of damp areas', description: 'We identify where silverfish are concentrated and assess humidity levels. The presence of silverfish often indicates an underlying damp or ventilation problem.' },
      { step: 'Insecticidal treatment', description: 'We apply a residual insecticidal dust or spray to harbourage areas — under baths, behind sinks, along skirting boards in bathrooms, and in cupboard voids. This kills silverfish on contact and remains effective for weeks.' },
      { step: 'Humidity advice', description: 'We advise on reducing humidity — improving ventilation, using extractor fans, fixing leaks, and reducing condensation. Silverfish cannot thrive in dry conditions.' },
      { step: 'Monitoring', description: 'Sticky traps in key areas help monitor whether the population has been eliminated or if there is ongoing activity.' }
    ],
    treatmentDuration: 'A single treatment visit is usually sufficient for silverfish. Reducing humidity prevents their return. Severe infestations in damp properties may need a follow-up.',

    residentialRisks: 'Silverfish damage books, documents, photographs, and wallpaper. While not a direct health risk, their presence usually signals a humidity or damp problem that should be addressed. Large populations in bathrooms and kitchens are unsettling.',
    commercialRisks: 'Libraries, archives, and museums face damage to irreplaceable documents and collections. Commercial storage facilities with humidity issues can develop silverfish problems that affect paper-based stock.',
    healthRisks: ['Silverfish do not bite or transmit diseases', 'They are a nuisance pest', 'Their presence indicates humidity problems that may encourage mould growth — which is a health risk'],
    propertyDamage: ['Damage to books, documents, and photographs', 'Surface damage to wallpaper and wallpaper paste', 'Staining on fabrics and papers', 'Indicates underlying damp issues that may cause wider problems'],

    preventionTips: [
      'Reduce humidity in bathrooms and kitchens — use extractor fans, open windows, and fix any leaks.',
      'Seal gaps around pipes and behind skirting boards where silverfish hide.',
      'Store valuable papers, books, and photographs in sealed containers in dry conditions.',
      'Ventilate cupboards under sinks — leave doors open periodically to allow airflow.',
      'Address any condensation or damp issues in the property — silverfish cannot survive below 60% humidity.'
    ],

    commonNestLocations: ['Behind bathroom tiles and under baths', 'Under kitchen sinks and around pipework', 'In cupboard voids and behind skirting boards', 'In bookcases and stored paper boxes', 'In damp basements and cellars', 'Behind wallpaper in humid rooms'],

    faqs: [
      { question: 'Are silverfish harmful?', answer: 'Silverfish do not bite, sting, or transmit diseases. They are a nuisance pest that damages paper, wallpaper, and starchy materials. Their main significance is that they indicate a humidity problem in your home.' },
      { question: 'Why do I have silverfish in my bathroom?', answer: 'Silverfish need high humidity to survive. Bathrooms provide the warm, damp conditions they thrive in. Poor ventilation, leaking pipes, and condensation all create an ideal silverfish habitat.' },
      { question: 'Can silverfish damage my books?', answer: 'Yes. Silverfish eat the starch in paper, glue in book bindings, and even photographic prints. Valuable books and documents should be stored in dry, sealed conditions away from damp areas.' },
      { question: 'Will fixing the damp get rid of silverfish?', answer: 'Reducing humidity below 60% makes conditions unsuitable for silverfish and they will die out or move on. Fixing damp and improving ventilation is the most effective long-term solution.' },
      { question: 'How long do silverfish live?', answer: 'Silverfish can live up to 8 years, which is exceptionally long for an insect. This means a population can persist for years in a damp property, even with low breeding rates.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'low',
    responseTimeNote: 'Silverfish are not urgent and are usually booked within a week. We often address them alongside damp and ventilation advice.'
  },

  'carpet-beetles': {
    slug: 'carpet-beetles',
    commonName: 'Carpet Beetles',
    pestName: 'carpet beetle',
    scientificName: 'Anthrenus verbasci (varied carpet beetle)',
    pestCategory: 'insect',

    biology: 'The varied carpet beetle is the most common species in UK homes. Adults are small (2-4mm), rounded, and mottled brown/cream. They fly well and are often seen on windowsills in spring. Females lay 20-100 eggs on natural fibres. The larvae — known as "woolly bears" due to their hairy appearance — are the damaging stage, feeding for 9-12 months before pupating.',
    behavior: 'Adult carpet beetles feed on pollen and nectar outdoors and are harmless. They fly into homes through open windows in spring and summer to lay eggs. The larvae feed on natural fibres in dark, undisturbed areas — under furniture, along carpet edges, and in wardrobes.',
    dietAndHabitat: 'Larvae eat keratin-based materials — wool carpets, animal fur, feathers, silk, and dried animal products. They are also found in bird nests (their natural habitat), which is why homes with bird nests in the eaves are particularly vulnerable. They prefer dark, undisturbed areas where they can feed undetected.',

    peakSeasons: ['spring', 'summer'],
    seasonalExplanation: 'Adult carpet beetles are most active from April to June, flying into homes to lay eggs. Larvae feed throughout the year in heated homes, but damage is often discovered in spring when cleaning or when adults appear on windowsills.',

    signs: [
      { sign: 'Small, round beetles on windowsills', detail: 'Adult carpet beetles are attracted to light and are often found on windowsills in spring. They are 2-4mm long, oval, and mottled brown/cream with a distinctive pattern.' },
      { sign: 'Threadbare patches on carpets', detail: 'Carpet beetle larvae eat the pile of wool carpets, creating bald patches. Damage is concentrated along skirting boards and under furniture where the carpet is undisturbed.' },
      { sign: 'Small hairy larvae (woolly bears)', detail: 'The larvae are 4-5mm long, oval, and covered in fine brown hairs. Finding these stripy, hairy grubs in carpet edges, drawers, or wardrobes confirms an infestation.' },
      { sign: 'Shed larval skins', detail: 'As larvae grow, they shed their hairy skins. Accumulations of tiny, bristly cast skins in cupboards, under furniture, or along carpet edges indicate feeding activity.' }
    ],

    treatmentSteps: [
      { step: 'Inspection and source identification', description: 'We locate all areas of larval activity and check for external sources — bird nests in eaves, soffits, or chimney pots are a common origin point for carpet beetle infestations.' },
      { step: 'Residual insecticidal spray', description: 'We apply a residual insecticide to affected carpets, wardrobe bases, and harbourage areas. The spray kills larvae on contact and provides ongoing protection as eggs hatch over the following weeks.' },
      { step: 'Source removal', description: 'If bird nests are the source, we remove disused nests from eaves and roof spaces (outside nesting season) and proof the openings to prevent birds returning.' },
      { step: 'Prevention advice', description: 'We advise on regular vacuuming of carpet edges, checking stored textiles, and sealing entry points for adult beetles flying in from outside.' }
    ],
    treatmentDuration: 'A single spray treatment with follow-up advice. Due to the long larval lifecycle (up to 12 months), monitoring for 2-3 months after treatment is recommended.',

    residentialRisks: 'Carpet beetle larvae cause the same type of damage as clothes moths — holes in wool carpets, damaged clothing, and destroyed natural-fibre items. The damage is often discovered late because larvae feed in hidden, undisturbed areas.',
    commercialRisks: 'Museums, textile retailers, and historic properties face damage to collections and stock. Hotels and care homes risk damage to carpets and furnishings. Commercial properties near nesting bird sites are particularly vulnerable.',
    healthRisks: ['Carpet beetle larvae hairs can cause allergic skin reactions (dermatitis) in some people', 'Inhaling larval hairs may trigger respiratory irritation', 'Not a direct disease risk'],
    propertyDamage: ['Bald patches on wool carpets', 'Holes in woollen clothing and furnishings', 'Damage to taxidermy, feathered items, and natural-fibre collections', 'Damage to insulation containing animal hair or feathers'],

    preventionTips: [
      'Vacuum carpet edges, under furniture, and along skirting boards regularly — these are the areas larvae prefer.',
      'Remove old bird nests from eaves, soffits, and roof spaces (outside nesting season) — they are a primary source of carpet beetles.',
      'Store wool and natural-fibre clothing in sealed bags or containers.',
      'Fit fly screens to windows in rooms with valuable carpets or textiles to prevent adult beetles entering.',
      'Check stored items seasonally — do not leave boxes of clothing or textiles undisturbed for long periods.'
    ],

    commonNestLocations: ['Carpet edges along skirting boards', 'Under heavy furniture on wool carpets', 'Old bird nests in eaves, soffits, and chimneys', 'Inside wardrobes with woollen clothing', 'In stored boxes of textiles, feathers, or furs', 'Behind radiators on carpeted floors'],

    faqs: [
      { question: 'What is the difference between carpet beetles and clothes moths?', answer: 'Both damage natural fibres, but carpet beetles are beetles (hard-shelled, round), while clothes moths are small golden moths. Carpet beetle larvae are hairy "woolly bears" while moth larvae are smooth white caterpillars. Treatment approaches are similar but identification matters for monitoring.' },
      { question: 'Can carpet beetles damage synthetic carpets?', answer: 'No. Carpet beetles only eat natural fibres — wool, silk, and feathers. Synthetic carpets are safe. However, blended carpets with a wool content can still be attacked.' },
      { question: 'How do carpet beetles get into my house?', answer: 'Adult beetles fly in through open windows in spring, attracted by light. They also come from old bird nests in your eaves or roof space. Once inside, they lay eggs on suitable natural fibres.' },
      { question: 'Are carpet beetle larvae harmful to people?', answer: 'The tiny hairs on carpet beetle larvae can cause allergic skin reactions (itchy red bumps) in some people, often mistaken for insect bites. They do not bite but their shed hairs are irritants.' },
      { question: 'Why do I keep finding beetles on my windowsill?', answer: 'Adult carpet beetles are attracted to light. Finding them on windowsills in spring means they are either flying in from outside or emerging from pupae inside your home. Either way, it confirms carpet beetles are present and larvae may be feeding on your carpets or textiles.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'low',
    responseTimeNote: 'Carpet beetle treatment is not urgent but benefits from prompt action to limit textile damage. Usually scheduled within a week.'
  },

  'stored-product-insects': {
    slug: 'stored-product-insects',
    commonName: 'Stored Product Insects',
    pestName: 'stored product insect',
    scientificName: 'Various — Plodia interpunctella (Indian meal moth), Sitophilus granarius (grain weevil), Tribolium castaneum (flour beetle)',
    pestCategory: 'insect',

    biology: 'Stored product insects (SPIs) include moths, beetles, and weevils that infest dried food. The Indian meal moth is the most common in UK homes — a small moth (8-10mm wingspan) whose larvae spin silky webbing in food. Grain weevils and flour beetles infest cereals, flour, and grain at every life stage. Breeding cycles are fast in warm, dry conditions.',
    behavior: 'SPIs are introduced to homes and businesses in already-infested food products — a bag of flour, packet of rice, or box of cereal from the shop may already contain eggs or larvae. Once established, they spread to other stored food products nearby. Adults may fly or crawl to new food sources.',
    dietAndHabitat: 'Different species target different foods: Indian meal moths eat cereals, nuts, dried fruit, chocolate, and pet food. Grain weevils bore into wheat, rice, and maize kernels. Flour beetles infest flour, spices, and dried baking ingredients. They thrive in warm kitchen cupboards and commercial food stores.',

    peakSeasons: ['summer', 'autumn'],
    seasonalExplanation: 'Warmer kitchen temperatures in summer speed up breeding cycles. However, in heated buildings, SPIs can breed year-round. Infestations are often discovered when cupboards are sorted through in autumn.',

    signs: [
      { sign: 'Small moths flying in the kitchen', detail: 'Indian meal moths are small with a distinctive two-tone wing pattern — pale grey at the base, coppery-brown at the tips. Finding these moths near food cupboards is the most common first sign.' },
      { sign: 'Silky webbing in food packets', detail: 'Indian meal moth larvae spin silk threads and webbing through infested food, creating clumps of cereal, flour, or dried fruit stuck together with silk.' },
      { sign: 'Small beetles or weevils in dried food', detail: 'Tiny brown or black beetles found inside flour, rice, pasta, or cereal packets indicate a beetle or weevil infestation. Grain weevils leave small round exit holes in individual grains.' },
      { sign: 'Fine dust or powder in food cupboards', detail: 'Larval feeding produces fine, flour-like frass and cast skins that accumulate on cupboard shelves around infested products.' }
    ],

    treatmentSteps: [
      { step: 'Identification and disposal', description: 'We identify the species and locate all infested food products. All contaminated items are disposed of in sealed bags. Every packet and container in affected cupboards must be checked.' },
      { step: 'Deep cleaning', description: 'Cupboards are thoroughly cleaned, paying attention to cracks, joints, and shelf supports where larvae and pupae hide. Vacuuming removes hidden eggs and larvae from corners.' },
      { step: 'Residual treatment', description: 'We apply a residual insecticide to cupboard surfaces, cracks, and crevices. This kills any remaining life stages and prevents reinfestation from eggs that survived cleaning.' },
      { step: 'Pheromone monitoring', description: 'We place species-specific pheromone traps to monitor for any residual moth or beetle activity over the following weeks, confirming the infestation is fully eliminated.' }
    ],
    treatmentDuration: 'A single treatment visit with monitoring traps. Full eradication is confirmed over 4-6 weeks of monitoring.',

    residentialRisks: 'SPIs contaminate and waste food stocks. Infested food is unfit for consumption. In kitchens with large dry food stores — bulk buying, baking supplies, pet food — the contamination can spread through multiple products before being noticed.',
    commercialRisks: 'Bakeries, restaurants, food retailers, and warehouses face serious consequences. Contaminated stock must be destroyed. Environmental Health inspections can result in enforcement action. Food manufacturers risk product recalls and brand damage.',
    healthRisks: ['Contaminated food is unfit for consumption', 'Allergic reactions to insect fragments and droppings in food', 'No serious disease transmission risk from stored product insects'],
    propertyDamage: ['Destruction and contamination of food stores', 'No structural damage'],

    preventionTips: [
      'Inspect food packaging before buying — check for small holes, webbing, or damaged seals.',
      'Transfer dried goods (flour, rice, cereals, pasta) into airtight glass or plastic containers at home.',
      'Rotate stock — use older products first and do not let items sit untouched for months.',
      'Clean kitchen cupboards regularly, clearing crumbs and spills from shelves and corners.',
      'Do not mix new stock with old — always check existing supplies before adding fresh purchases.'
    ],

    commonNestLocations: ['Kitchen cupboards with dried food', 'Pantries and larders', 'Pet food storage areas', 'Commercial food warehouses and bakeries', 'Bird seed and animal feed stores', 'Spice racks and baking ingredient shelves'],

    faqs: [
      { question: 'How did insects get into my sealed food?', answer: 'Most stored product insects arrive in food that was already infested before you bought it. Eggs and larvae are tiny and impossible to see in packaging. Once hatched, they can also chew through thin plastic and cardboard to reach new food sources.' },
      { question: 'Do I need to throw away all my food?', answer: 'Only contaminated items need to be disposed of. We help you identify which products are affected. As a precaution, check every packet in the affected cupboard. Sealed glass or metal containers are usually safe.' },
      { question: 'Can stored product insects make me ill?', answer: 'Eating food contaminated with insect fragments, droppings, and webbing is unpleasant and may cause mild stomach upset, but stored product insects are not known to transmit serious diseases.' },
      { question: 'How do I prevent this happening again?', answer: 'Store all dried goods in airtight containers, inspect purchases before storing, and rotate stock so nothing sits untouched for months. Regular cupboard cleaning removes any hidden eggs or larvae.' },
      { question: 'What are the tiny moths in my kitchen?', answer: 'Most likely Indian meal moths. They are small (8-10mm wingspan) with two-tone wings — pale at the base, bronze-brown at the tips. Their larvae spin silk webbing through cereal, flour, and dried fruit.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'low',
    responseTimeNote: 'Stored product insect treatment is booked within a week. Commercial food premises are prioritised.'
  },

  'cluster-flies': {
    slug: 'cluster-flies',
    commonName: 'Cluster Flies',
    pestName: 'cluster fly',
    scientificName: 'Pollenia rudis',
    pestCategory: 'insect',

    biology: 'Cluster flies are parasites of earthworms during their larval stage. Adult females lay eggs in soil in late summer, and the larvae burrow into earthworms to feed. Adults emerge in autumn and seek sheltered overwintering sites — which is when they enter buildings in large numbers. They are slightly larger and slower than house flies.',
    behavior: 'Cluster flies hibernate in buildings over winter, congregating in loft spaces, wall cavities, and behind window frames — often in the same building year after year. On warm winter days they become active and emerge into rooms, clustering on windows trying to reach the light. In spring they leave to breed outdoors.',
    dietAndHabitat: 'Adult cluster flies do not feed on food or waste — they are not a hygiene risk. They are attracted to warm, south-facing buildings for hibernation. Properties surrounded by grassland (where earthworms are abundant) are most affected.',

    peakSeasons: ['autumn', 'winter'],
    seasonalExplanation: 'Cluster flies enter buildings from September to November seeking hibernation sites. They are noticed during warm spells in winter and early spring when they emerge from hiding to cluster on windows and light fittings.',

    signs: [
      { sign: 'Large numbers of sluggish flies at windows', detail: 'Cluster flies are slow, sluggish, and cluster on warm, south-facing windows in winter. They are slightly larger than house flies with overlapping wings and a golden-haired thorax.' },
      { sign: 'Buzzing in the loft on warm days', detail: 'On sunny winter days, warmth in the loft space rouses hibernating cluster flies. You may hear buzzing or find dozens of flies on loft windows.' },
      { sign: 'Dead flies accumulating on windowsills', detail: 'Cluster flies that emerge during winter often die on windowsills and light fittings. Finding accumulations of dead flies indoors, particularly in upper rooms, is a telltale sign.' },
      { sign: 'Sweet, sickly smell in the loft', detail: 'Large hibernating populations of cluster flies produce a distinctive sweet, cloying smell in confined spaces like loft rooms and wall cavities.' }
    ],

    treatmentSteps: [
      { step: 'Inspection of hibernation sites', description: 'We identify where cluster flies are entering and hibernating — loft spaces, behind fascias, in wall cavities, and around window frames. South and west-facing walls are typically worst affected.' },
      { step: 'Smoke treatment or ULV fog', description: 'We apply insecticidal smoke or ultra-low volume (ULV) mist in loft spaces and roof voids to kill hibernating flies. This provides immediate knockdown of large populations.' },
      { step: 'Residual spray to entry points', description: 'We treat the external surfaces around windows, soffits, and eaves with a residual insecticide in late summer before flies arrive. This kills or deters flies as they land, reducing the numbers entering to hibernate.' },
      { step: 'Proofing advice', description: 'Sealing gaps around windows, soffits, and rooflines reduces fly entry. However, complete proofing is difficult and annual preventive treatment is often the most practical solution.' }
    ],
    treatmentDuration: 'A single loft treatment kills the current population. Annual preventive treatment in late summer is recommended for properties that experience recurring cluster fly problems.',

    residentialRisks: 'Cluster flies are a nuisance — not a health risk. Large numbers emerging on warm winter days are distressing and unsightly. Dead flies accumulate on windowsills and in light fittings. The sweet smell in heavily infested loft spaces is unpleasant.',
    commercialRisks: 'Holiday cottages, churches, village halls, and rural commercial properties are commonly affected. Large numbers of flies in guest rooms or public spaces are unacceptable. Annual preventive treatment is usually necessary.',
    healthRisks: ['Cluster flies are not a health risk', 'They do not feed on food or waste', 'They are a nuisance pest only'],
    propertyDamage: ['No structural damage', 'Dead flies stain curtains, carpets, and light fittings', 'Unpleasant odour in heavily infested spaces'],

    preventionTips: [
      'The most effective prevention is a residual insecticide spray applied to external walls, soffits, and around windows in late August — before flies arrive to hibernate.',
      'Seal gaps around window frames, soffits, and fascia boards where flies enter.',
      'Fit fine mesh to loft ventilation openings to reduce fly entry.',
      'Properties surrounded by grassland or farmland are most vulnerable and benefit from annual preventive treatment.',
      'UV fly traps in loft spaces can reduce populations that make it inside.'
    ],

    commonNestLocations: ['Loft spaces and roof voids', 'Behind fascia boards and soffits', 'Wall cavities, especially south-facing', 'Around window frames', 'Inside church towers and village hall roof spaces', 'Behind cladding on buildings'],

    faqs: [
      { question: 'Are cluster flies the same as house flies?', answer: 'No. Cluster flies are a completely different species. They are slightly larger, slower, and have a distinctive golden-haired thorax. Unlike house flies, they do not breed in food waste — their larvae are earthworm parasites.' },
      { question: 'Why do cluster flies come back every year?', answer: 'Cluster flies leave chemical scent markers (pheromones) at hibernation sites. These attract flies back to the same building year after year. Annual preventive treatment is the most practical way to manage recurring problems.' },
      { question: 'Are cluster flies a hygiene risk?', answer: 'No. Cluster flies do not feed on food or waste. They are purely a nuisance pest — unpleasant in large numbers but not a contamination risk.' },
      { question: 'When should I get cluster fly treatment?', answer: 'Reactive treatment can be done at any time to kill flies already in the building. For prevention, external treatment in late August or early September is most effective — applied before the flies arrive to hibernate.' },
      { question: 'Can I stop cluster flies permanently?', answer: 'Complete prevention is very difficult because flies enter through tiny gaps. Annual preventive treatment combined with sealing the most obvious entry points gives the best long-term control.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'low',
    responseTimeNote: 'Cluster fly treatment is usually scheduled within a week. For preventive treatment, book in August before the autumn arrival.'
  },

  'drain-flies': {
    slug: 'drain-flies',
    commonName: 'Drain Flies',
    pestName: 'drain fly',
    scientificName: 'Psychodidae family (moth flies)',
    pestCategory: 'insect',

    biology: 'Drain flies (also called moth flies or sewer gnats) are small (2-5mm), fuzzy, moth-like flies with broad, leaf-shaped wings. They breed in the organic slime film that builds up inside drains, pipes, and sewage systems. A female lays 30-100 eggs in drain sludge, and the lifecycle from egg to adult takes 8-24 days.',
    behavior: 'Drain flies are weak fliers and tend to hop rather than fly. They rest on walls and ceilings near their breeding site, often in bathrooms and kitchens. They are most active in the evening and are attracted to light. They do not bite.',
    dietAndHabitat: 'Larvae feed on the organic biofilm, bacteria, and fungi that coat the inside of drains. Anywhere there is standing water with organic matter — shower drains, sink drains, floor drains, septic tanks, and sewage filter beds — is a potential breeding site.',

    peakSeasons: ['summer', 'autumn'],
    seasonalExplanation: 'Drain flies breed faster in warm conditions. They are noticed most in summer and early autumn but can be present year-round in heated bathrooms with slow or infrequently used drains.',

    signs: [
      { sign: 'Small, moth-like flies resting on bathroom walls', detail: 'Drain flies rest with wings flat, creating a moth-like silhouette. They are fuzzy, grey-brown, and about 2-5mm long. You will typically find them on walls near sinks, showers, and toilets.' },
      { sign: 'Flies appearing from drains', detail: 'If you see small flies emerging from a plughole or floor drain, the breeding site is inside the drain itself. Place tape over the drain overnight — trapped flies on the underside confirm the source.' },
      { sign: 'Recurring flies despite cleaning', detail: 'Drain flies return even after swatting because the larvae are protected inside the drain. Surface cleaning does not reach the breeding site in the pipe.' },
      { sign: 'Flies concentrated in one room', detail: 'Drain flies stay close to their breeding drain. If flies are confined to one bathroom or kitchen area, the nearest drain is the likely source.' }
    ],

    treatmentSteps: [
      { step: 'Drain identification', description: 'We identify which drain is the breeding source using observation and tape tests. There may be more than one affected drain, especially in properties with infrequently used guest bathrooms or floor drains.' },
      { step: 'Drain cleaning', description: 'We recommend professional drain cleaning or enzymatic drain treatments to remove the organic biofilm where larvae live. This is the essential step — insecticide alone will not solve the problem if the breeding medium remains.' },
      { step: 'Insecticidal treatment', description: 'We treat the areas around the drains and resting surfaces with a residual spray to kill adult flies and break the breeding cycle while the drain treatment takes effect.' },
      { step: 'Prevention advice', description: 'We advise on regular drain maintenance, running water through unused drains weekly, and installing drain covers to prevent adults accessing the pipes.' }
    ],
    treatmentDuration: 'Drain flies are eliminated once the breeding source in the drain is cleaned. Adults die off within 2-3 weeks once no new flies are emerging. Ongoing drain maintenance prevents recurrence.',

    residentialRisks: 'Drain flies are a nuisance rather than a health risk. Their presence indicates drain hygiene issues — a build-up of organic material in pipes. In bathrooms and kitchens, they are unsightly and concerning for homeowners.',
    commercialRisks: 'Drain flies in restaurant kitchens, hotel bathrooms, and food production areas are an Environmental Health concern. They indicate drainage maintenance problems that must be addressed. Customers seeing flies in bathrooms or dining areas affects perception of cleanliness.',
    healthRisks: ['Drain flies do not bite or transmit diseases directly', 'They breed in unsanitary drain conditions', 'In large numbers they can trigger respiratory irritation in sensitive individuals'],
    propertyDamage: ['No structural property damage', 'Indicates drain hygiene issues that may lead to blockages if unaddressed'],

    preventionTips: [
      'Run water through all drains weekly — unused drains dry out and allow organic buildup where flies breed.',
      'Clean drains regularly with enzymatic drain cleaner to break down the organic biofilm.',
      'Fix slow-draining sinks and showers — standing water encourages fly breeding.',
      'Install fine mesh drain covers to prevent adult flies accessing the inside of pipes.',
      'In commercial kitchens, include drain cleaning in regular maintenance schedules.'
    ],

    commonNestLocations: ['Shower and bath drains', 'Sink drains (kitchen and bathroom)', 'Floor drains in utility rooms and basements', 'Infrequently used guest bathroom drains', 'Septic tank vents and sewage systems', 'Commercial kitchen floor drains'],

    faqs: [
      { question: 'Why do drain flies keep coming back?', answer: 'Drain flies breed inside the organic slime in your drain pipes. Killing adult flies does not address the larvae in the drain. You must clean the drain itself — enzymatic treatments or professional drain cleaning removes the breeding material.' },
      { question: 'Can I just pour bleach down the drain?', answer: 'Bleach kills some bacteria but does not remove the organic biofilm where larvae live. It provides temporary relief at best. Enzymatic drain cleaners are more effective because they break down the organic material that sustains the larvae.' },
      { question: 'Are drain flies harmful?', answer: 'Drain flies do not bite or transmit diseases. They are a nuisance pest that indicates poor drain hygiene. Fixing the underlying drain issue resolves both the flies and the potential for drain blockages.' },
      { question: 'How do I know if flies are coming from my drain?', answer: 'Place sticky tape over the suspect drain overnight with a small gap for airflow. If drain flies are breeding inside, you will find adults stuck to the underside of the tape in the morning.' },
      { question: 'Can drain flies come from other sources?', answer: 'Occasionally. Drain flies can breed in any stagnant organic water — air conditioning drip trays, leaking pipes behind walls, and even saucers under plant pots. If drain cleaning does not solve the problem, we investigate other potential sources.' }
    ],

    isEmergencyCommon: false,
    urgencyLevel: 'low',
    responseTimeNote: 'Drain fly treatment is usually scheduled within a week. We recommend combining our visit with a drain cleaning service for the most effective result.'
  }
}
