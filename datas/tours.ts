export interface Activity {
  title: string;
  detail: string;
  tag: 'culture' | 'cuisine' | 'adventure' | 'wellness' | 'nightlife' | 'photography' | 'signature';
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  image: string;
  tagline: string;
  description: string;
  fromPrice: number;
  bestSeason: string;
  flightTime: string;
  rating: number;
  reviews: number;
  daysRecommended: [number, number];
  highlights: string[];
  signature: Activity[];
  pool: Activity[];
}

export const INTERESTS = [
  { id: 'culture', label: 'Culture & Heritage' },
  { id: 'cuisine', label: 'Local Cuisine' },
  { id: 'adventure', label: 'Wildlife & Adventure' },
  { id: 'wellness', label: 'Spiritual & Wellness' },
  { id: 'nightlife', label: 'Evening Experiences' },
  { id: 'photography', label: 'Photography' },
] as const;

export type InterestId = (typeof INTERESTS)[number]['id'];

export const arrivalNotes: Record<string, string> = {
  'golden-triangle':
    'Meet-and-greet at Delhi IGI Airport, private transfer to your hotel. Briefing with your driver on Yamuna Expressway timing and Taj Mahal entry windows for your dates.',
  'taj-mahal':
    'Arrive in Agra or Delhi — we align your Taj visit for the quietest light (often first 45 minutes after opening). Your guide confirms Friday closure rules before you travel.',
  'agra-day-tours':
    'Early pickup from your Delhi hotel via Yamuna Expressway. Buffer time included in winter fog season so you still reach the Taj in good daylight.',
  rajasthan:
    'Land in Jaipur or Delhi — private car to your heritage hotel. Your guide outlines fort visits, desert camp options, and Ranthambore season (closed July–September).',
  'south-india':
    'Arrive Kochi or Trivandrum — transfer to your hotel or houseboat. Slower pacing from day one: backwaters, tea country, and temple towns without long highway days.',
  'north-india':
    'Arrive Delhi — private transfer and overview of your extended North India route, whether Varanasi ghats, Amritsar, or Himalayan foothills after the Golden Triangle.',
};

export const departureNotes: Record<string, string> = {
  'golden-triangle':
    'Final morning at leisure or last monument stop, then private transfer to Delhi airport. WhatsApp support until you board your international flight.',
  'taj-mahal':
    'Optional Mehtab Bagh sunset the evening before departure, then relaxed transfer to Delhi or Jaipur for your onward flight.',
  'agra-day-tours':
    'Return to Delhi by evening — dropped at your hotel or airport with time for a late dinner after Agra sightseeing.',
  rajasthan:
    'Last heritage breakfast, then transfer to Jaipur or Delhi airport. Many guests add a final market stop for textiles or gems en route.',
  'south-india':
    'Slow morning — perhaps one last backwater view or spice garden walk — then transfer to your departure airport.',
  'north-india':
    'Private transfer from your final city (often Delhi) with monument entry assistance completed and all tolls settled upfront.',
};

export const tours: Destination[] = [
  {
    id: 'golden-triangle',
    name: 'Golden Triangle',
    country: 'India',
    region: 'Delhi · Agra · Jaipur',
    image: '/images/golden-triangle-landscape.webp',
    tagline: 'India’s essential introduction',
    description:
      'Private Delhi, Agra, and Jaipur tours with licensed ASI guides, Taj Mahal timing expertise, and flexible 2–13 day extensions to Ranthambore, Varanasi, or Udaipur.',
    fromPrice: 825,
    bestSeason: 'Oct — Mar',
    flightTime: 'DEL · IGI Airport',
    rating: 4.9,
    reviews: 6600,
    daysRecommended: [4, 6],
    highlights: ['Taj Mahal sunrise', 'Amber Fort & Old Delhi', '100% private tours'],
    signature: [
      {
        title: 'Taj Mahal at first light',
        detail:
          'Your Agra-based team sequences entry for the quietest window — white marble in morning mist, with a licensed guide who knows ASI rules and camera restrictions.',
        tag: 'signature',
      },
      {
        title: 'Old Delhi on foot',
        detail:
          'Red Fort, Jama Masjid, and Chandni Chowk with a guide who navigates the lanes — ending with chai and street food stops suited to your comfort level.',
        tag: 'signature',
      },
    ],
    pool: [
      { title: 'Qutub Minar & Humayun’s Tomb', detail: 'UNESCO sites in Delhi with context on Mughal architecture before you reach Agra.', tag: 'culture' },
      { title: 'Agra Fort & Mehtab Bagh', detail: 'Fort palaces by day and river-view sunset garden across from the Taj.', tag: 'culture' },
      { title: 'Fatehpur Sikri en route to Jaipur', detail: 'Akbar’s abandoned capital — best visited between Agra and Jaipur with time to explore the Buland Darwaza.', tag: 'culture' },
      { title: 'Mughlai lunch in Agra', detail: 'Curated restaurant stop for kebabs and curries — we avoid commission-driven “partner” emporiums.', tag: 'cuisine' },
      { title: 'Old Delhi food tasting', detail: 'Guided tasting through Chandni Chowk with hygienic, traveler-friendly stops.', tag: 'cuisine' },
      { title: 'Jaipur bazaar afternoon', detail: 'Textiles, gems, and handicrafts in the Pink City with time to browse without pressure.', tag: 'culture' },
      { title: 'Ranthambore extension', detail: 'Add tiger safaris between Jaipur and Delhi — planned only when the park is open (Oct–Jun).', tag: 'adventure' },
      { title: 'Sunrise yoga or quiet ghat time', detail: 'Optional wellness morning before monument crowds — especially in winter.', tag: 'wellness' },
      { title: 'Evening Ganga Aarti add-on', detail: 'Extend to Varanasi for Dashashwamedh Ghat ceremony with secure ghat access guidance.', tag: 'nightlife' },
      { title: 'Golden-hour photography stops', detail: 'Guides steer you to less crowded Taj viewpoints and Amber Fort angles.', tag: 'photography' },
    ],
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal Tours',
    country: 'India',
    region: 'Agra · Uttar Pradesh',
    image: '/images/taj-mahal.jpg',
    tagline: 'When one monument is the whole trip',
    description:
      'Sunrise tours, half-day visits with Agra Fort, overnight stays for double sunrise/sunset, and same-day round trips from Delhi — every option is private.',
    fromPrice: 165,
    bestSeason: 'Oct — Mar',
    flightTime: 'DEL or AGR access',
    rating: 4.9,
    reviews: 6600,
    daysRecommended: [1, 2],
    highlights: ['Sunrise entry timing', 'Agra Fort pairing', 'Closed Fridays planned around'],
    signature: [
      {
        title: 'Sunrise at the Taj Mahal',
        detail:
          'First light on white marble — we plan around fog in Dec–Feb and secure entry logistics that shift by season.',
        tag: 'signature',
      },
      {
        title: 'Agra Fort & marble inlay',
        detail:
          'Red sandstone palaces with your licensed guide, plus optional visit to local inlay workshops using traditional methods.',
        tag: 'signature',
      },
    ],
    pool: [
      { title: 'Mehtab Bagh sunset', detail: 'Garden across the Yamuna for Taj silhouettes at golden hour.', tag: 'photography' },
      { title: 'Itimad-ud-Daulah (Baby Taj)', detail: 'Intricate marble inlay often included on relaxed 2-day Agra stays.', tag: 'culture' },
      { title: 'Same-day from Delhi by car', detail: 'Yamuna Expressway with experienced drivers who know fog delays.', tag: 'culture' },
      { title: 'Gatimaan Express day trip', detail: 'Train option for travelers who prefer rail — ~90 minutes each way.', tag: 'culture' },
      { title: 'Agra street snacks', detail: 'Petha sweets and savory stops — optional and always your choice.', tag: 'cuisine' },
      { title: 'Luxury car from Delhi', detail: 'Upgraded Mercedes/BMW options for special occasions.', tag: 'culture' },
      { title: 'Overnight for double Taj light', detail: 'Catch sunrise and sunset with a restful night between.', tag: 'photography' },
      { title: 'Accessible routes for seniors', detail: 'Electric vehicles and shorter walking paths where available.', tag: 'wellness' },
      { title: 'Evening at leisure in Agra', detail: 'Unhurried dinner and early bed before a second dawn visit.', tag: 'nightlife' },
      { title: 'Guide-only add-on in Delhi', detail: 'Pair with Old Delhi tour on a tight business schedule.', tag: 'culture' },
    ],
  },
  {
    id: 'agra-day-tours',
    name: 'Same Day Agra',
    country: 'India',
    region: 'Delhi · Agra day trip',
    image: '/images/agra-tour.webp',
    tagline: 'Perfect for short layovers',
    description:
      'Depart Delhi early, see the Taj Mahal and Agra Fort, enjoy lunch, and return by evening — air-conditioned car, trained driver, optional licensed monument guide.',
    fromPrice: 165,
    bestSeason: 'Oct — Mar',
    flightTime: '~230 km via expressway',
    rating: 4.9,
    reviews: 6600,
    daysRecommended: [1, 1],
    highlights: ['No hotel night needed', 'Yamuna Expressway experts', 'Winter fog buffers'],
    signature: [
      {
        title: 'Taj Mahal & Agra Fort in one day',
        detail:
          'Efficient sequencing so you are not racing — still the most requested experience we arrange for Delhi-based travelers.',
        tag: 'signature',
      },
      {
        title: 'Return to Delhi by evening',
        detail:
          'Ideal after conferences or before late flights — we track expressway conditions and adjust pickup times in fog season.',
        tag: 'signature',
      },
    ],
    pool: [
      { title: 'Sunrise departure option', detail: 'Earlier start for cooler Taj light and fewer crowds.', tag: 'photography' },
      { title: 'Licensed guide upgrade', detail: 'ASI-accredited commentary at Taj and Fort — worth it for first visits.', tag: 'culture' },
      { title: 'Lunch in Agra', detail: 'Sit-down Mughlai meal mid-day between monuments.', tag: 'cuisine' },
      { title: 'Hotel or airport pickup', detail: 'Flexible Delhi pickup points for international guests.', tag: 'culture' },
      { title: 'Train variant', detail: 'Superfast train option instead of car when you prefer rail.', tag: 'culture' },
      { title: 'Shopping time if desired', detail: 'Optional marble or leather stops — never mandatory commission shops.', tag: 'culture' },
      { title: 'Mehtab Bagh add-on', detail: 'When schedule allows, river-view garden opposite the Taj.', tag: 'photography' },
      { title: 'Senior-friendly pacing', detail: 'More rest breaks and shorter walks inside the Fort.', tag: 'wellness' },
      { title: 'WhatsApp driver contact', detail: 'Live updates if traffic or weather shifts your window.', tag: 'culture' },
      { title: 'Combine with Old Delhi', detail: 'Some itineraries pair Agra day with Delhi heritage on adjacent days.', tag: 'culture' },
    ],
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    region: 'Jaipur · Jodhpur · Udaipur',
    image: '/images/rajasthan.jpg',
    tagline: 'Palaces, deserts, living heritage',
    description:
      '2-day add-ons to 13-day royal circuits — forts, camel safaris, Ranthambore tigers, Pushkar, and heritage hotel stays that change how the region feels.',
    fromPrice: 1155,
    bestSeason: 'Oct — Mar',
    flightTime: 'DEL or JAI',
    rating: 4.9,
    reviews: 6600,
    daysRecommended: [7, 13],
    highlights: ['Mehrangarh & Amber Fort', 'Jaisalmer dunes', 'Heritage hotels'],
    signature: [
      {
        title: 'Camel safari & desert camp',
        detail:
          'Jaisalmer dunes at sunset, optional overnight under clear Thar Desert skies — cinematic sandstone forts still inhabited today.',
        tag: 'signature',
      },
      {
        title: 'Lake Pichola & Udaipur palaces',
        detail:
          'Boat views of whitewashed havelis and City Palace — many itineraries close on Udaipur’s romantic note.',
        tag: 'signature',
      },
    ],
    pool: [
      { title: 'Jodhpur Blue City walk', detail: 'Mehrangarh Fort towering over indigo lanes and spice stalls.', tag: 'culture' },
      { title: 'Ranthambore tiger safari', detail: 'Best planned Oct–Jun; closed monsoon season each year.', tag: 'adventure' },
      { title: 'Pushkar sacred lake', detail: 'Rare Brahma temple and spiritual atmosphere off the main triangle.', tag: 'wellness' },
      { title: 'Heritage haveli stay', detail: 'Sleep inside converted royal residences — the detail guests remember most.', tag: 'culture' },
      { title: 'Rajasthani thali dinner', detail: 'Regional dishes unlike North India’s wheat-heavy cuisine.', tag: 'cuisine' },
      { title: 'Jaipur gem & textile markets', detail: 'Unhurried shopping with no forced stops.', tag: 'culture' },
      { title: 'Hot-air balloon (seasonal)', detail: 'Optional aerial views over forts and deserts where available.', tag: 'adventure' },
      { title: 'Fort photography walks', detail: 'Golden hour at Amber and Nahargarh with crowd-avoidance tips.', tag: 'photography' },
      { title: 'Folk music evening', detail: 'Optional cultural performance at heritage properties.', tag: 'nightlife' },
      { title: 'Family-paced driving days', detail: 'Shorter road stretches and pool time for children.', tag: 'wellness' },
    ],
  },
  {
    id: 'south-india',
    name: 'South India',
    country: 'India',
    region: 'Kerala · Tamil Nadu',
    image: '/images/kerala-south-india.jpg',
    tagline: 'A different India entirely',
    description:
      'Slower, greener journeys — Alleppey houseboats, Munnar tea plantations, Madurai temples, and coconut-forward cuisine after North India or as a standalone trip.',
    fromPrice: 1155,
    bestSeason: 'Sep — Mar',
    flightTime: 'COK · Kochi',
    rating: 4.9,
    reviews: 6600,
    daysRecommended: [7, 10],
    highlights: ['Kerala backwaters', 'Munnar tea hills', 'Tamil temple architecture'],
    signature: [
      {
        title: 'Houseboat on Alleppey backwaters',
        detail:
          'Palm-lined canals at a pace set by the water — meals onboard and nights on quiet waterways.',
        tag: 'signature',
      },
      {
        title: 'Madurai temple at dawn',
        detail:
          'Centuries-old gopurams before heat and crowds — spiritual focus with respectful dress guidance.',
        tag: 'signature',
      },
    ],
    pool: [
      { title: 'Munnar spice & tea walk', detail: 'Cardamom and pepper in the open air with estate views.', tag: 'culture' },
      { title: 'Kerala thali on banana leaf', detail: 'Coconut, curry leaves, and seafood highlights many guests rave about.', tag: 'cuisine' },
      { title: 'Fort Kochi heritage', detail: 'Colonial streets, Chinese fishing nets, and church architecture.', tag: 'culture' },
      { title: 'Thanjavur bronze art', detail: 'Optional deep dive into Chola-era craftsmanship.', tag: 'culture' },
      { title: 'Ayurveda half-day', detail: 'Wellness add-on at reputable centers — arranged on request.', tag: 'wellness' },
      { title: 'Wildlife in Periyar (optional)', detail: 'Spice-scented forest walks and lake cruises.', tag: 'adventure' },
      { title: 'Cooking with a local family', detail: 'Home-style Kerala recipes you can recreate abroad.', tag: 'cuisine' },
      { title: 'Temple photography etiquette', detail: 'Guides explain where cameras are welcome.', tag: 'photography' },
      { title: 'Monsoon Kerala (Jun–Aug)', detail: 'Lush scenery with flexible rain-day plans.', tag: 'culture' },
      { title: '5-day Kerala-only shortcut', detail: 'Pairs well after a shorter North India tour.', tag: 'culture' },
    ],
  },
  {
    id: 'north-india',
    name: 'North India Extended',
    country: 'India',
    region: 'Varanasi · Amritsar · Himalaya',
    image: '/images/varanasi.jpg',
    tagline: 'Beyond the Golden Triangle',
    description:
      '10+ day routes adding Varanasi’s ghats, Amritsar’s Golden Temple, or Rishikesh and Shimla — logistics planned to avoid backtracking.',
    fromPrice: 990,
    bestSeason: 'Oct — Mar',
    flightTime: 'DEL hub',
    rating: 4.9,
    reviews: 6600,
    daysRecommended: [8, 14],
    highlights: ['Ganga Aarti', 'Golden Temple', 'Himalayan foothills'],
    signature: [
      {
        title: 'Dawn boat on the Ganges',
        detail:
          'Ghats and rituals at sunrise in Varanasi — paired with secure evening Aarti viewing guidance.',
        tag: 'signature',
      },
      {
        title: 'Golden Temple & Wagah Border',
        detail:
          'Amritsar’s luminous gurdwara and optional border ceremony — spiritual contrast to Mughal and Rajput days.',
        tag: 'signature',
      },
    ],
    pool: [
      { title: 'Dashashwamedh Ganga Aarti', detail: 'Evening ceremony timing and ghat access with local support.', tag: 'nightlife' },
      { title: 'Sarnath Buddhist site', detail: 'Quiet half-day near Varanasi for history buffs.', tag: 'culture' },
      { title: 'Rishikesh Ganges evenings', detail: 'Yoga capital atmosphere in the Himalayan foothills.', tag: 'wellness' },
      { title: 'Shimla hill break', detail: 'Cooler air and colonial-era walks after Rajasthan heat.', tag: 'adventure' },
      { title: 'Street food in Varanasi', detail: 'Carefully chosen tasting stops for international stomachs.', tag: 'cuisine' },
      { title: 'Langar at Golden Temple', detail: 'Community kitchen experience with respectful participation.', tag: 'culture' },
      { title: 'Photography at ghats', detail: 'Ethical guidance on photographing rituals and people.', tag: 'photography' },
      { title: 'Multi-faith North India', detail: 'Temples, mosques, gurdwaras — dress code briefings included.', tag: 'wellness' },
      { title: 'Flight segments when needed', detail: 'We add internal flights to save exhausting road days.', tag: 'culture' },
      { title: 'Combine with 5-day triangle base', detail: 'Classic Delhi–Agra–Jaipur then fork to spiritual North.', tag: 'culture' },
    ],
  },
];
