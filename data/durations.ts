export interface Journey {
  id: string;
  name: string;
  route: string[];
  days: number;
  image: string;
  fromPrice: number;
  description: string;
  includes: string[];
  durationCategory: '1-2' | '3-5' | '6-10' | '11-15';
}

export interface DurationCategory {
  id: string;
  label: string;
  dayRange: string;
  description: string;
  image: string;
}

/** Tour-by-duration categories. */
export const durationCategories: DurationCategory[] = [
  {
    id: '1-2-days',
    label: '1–2 Days',
    dayRange: '1–2 days',
    description:
      'Same-day Taj Mahal tours from Delhi, half-day Delhi sightseeing, and quick Jaipur day trips — ideal for layovers and business add-ons.',
    image: '/images/journey-same-day-agra.jpg',
  },
  {
    id: '3-5-days',
    label: '3–5 Days',
    dayRange: '3–5 days',
    description:
      'The classic Golden Triangle window — our most-booked 5-day Delhi, Agra, and Jaipur circuit with relaxed pacing and licensed guides.',
    image: '/images/tours-3-5-days.jpg',
  },
  {
    id: '6-10-days',
    label: '6–10 Days',
    dayRange: '6–10 days',
    description:
      'Extended Golden Triangle with Ranthambore safaris, Varanasi, Udaipur, or deeper Rajasthan — built for families and first-time visitors who want more time.',
    image: '/images/journey-ranthambore.jpg',
  },
  {
    id: '11-15-days',
    label: '11–15 Days',
    dayRange: '11–15 days',
    description:
      'Royal Rajasthan circuits, wildlife and desert safaris, and multi-region India journeys across forts, palaces, and national parks.',
    image: '/images/journey-rajasthan-13.jpg',
  },
];

/** Signature multi-day routes (tour by duration). */
export const journeys: Journey[] = [
  {
    id: 'gt-3-day',
    name: '3-Day Golden Triangle Tour',
    route: ['Delhi', 'Agra', 'Jaipur'],
    days: 3,
    image: '/images/journey-3-day-gt.jpg',
    fromPrice: 495,
    description:
      'India’s essential introduction on a tight schedule — Taj Mahal, Agra Fort, Amber Fort, and Jaipur’s highlights with private car and licensed guides.',
    includes: [
      'Private air-conditioned vehicle throughout',
      'Licensed guides in Delhi, Agra, and Jaipur',
      'Hotel accommodation in your chosen tier',
    ],
    durationCategory: '3-5',
  },
  {
    id: 'gt-5-day',
    name: '5-Day Golden Triangle Tour',
    route: ['Delhi', 'Agra', 'Jaipur'],
    days: 5,
    image: '/images/six-day-golden-day.webp',
    fromPrice: 825,
    description:
      'Our most popular itinerary — two days in Delhi, proper time in Agra for Taj Mahal sunrise, and unhurried days in the Pink City.',
    includes: [
      'Most-booked route since 1990',
      'Taj Mahal timing guidance (closed Fridays)',
      'Flexible extensions to Ranthambore or Varanasi',
    ],
    durationCategory: '3-5',
  },
  {
    id: 'same-day-agra',
    name: 'Same Day Agra Tour by Car from Delhi',
    route: ['Delhi', 'Agra', 'Delhi'],
    days: 1,
    image: '/images/journey-same-day-agra.jpg',
    fromPrice: 165,
    description:
      'Early departure via Yamuna Expressway, Taj Mahal and Agra Fort in daylight, lunch in Agra, and return to Delhi by evening — no hotel night required.',
    includes: [
      'Private AC car and professional driver',
      'Optional licensed guide at monuments',
      'Winter fog buffer built into departures',
    ],
    durationCategory: '1-2',
  },
  {
    id: 'gt-ranthambore-7',
    name: 'Golden Triangle with Ranthambore — 7 Days',
    route: ['Delhi', 'Agra', 'Jaipur', 'Ranthambore'],
    days: 7,
    image: '/images/journey-ranthambore.jpg',
    fromPrice: 1155,
    description:
      'Classic triangle plus tiger safaris in Ranthambore National Park (October–June) — wildlife mornings and heritage afternoons in one private journey.',
    includes: [
      'Morning safari planning with park closures in mind',
      'Private vehicle between all cities',
      'Licensed guides at UNESCO sites',
    ],
    durationCategory: '6-10',
  },
  {
    id: 'gt-varanasi-8',
    name: 'Golden Triangle with Varanasi — 8 Days',
    route: ['Delhi', 'Agra', 'Jaipur', 'Varanasi'],
    days: 8,
    image: '/images/journey-varanasi.jpg',
    fromPrice: 1320,
    description:
      'Mughal architecture and royal Rajasthan, then spiritual Varanasi — dawn boat on the Ganges and evening Ganga Aarti at Dashashwamedh Ghat.',
    includes: [
      'Ganga Aarti and ghat timing guidance',
      'Private transport and airport transfers',
      '24/7 WhatsApp support on the ground',
    ],
    durationCategory: '6-10',
  },
  {
    id: 'rajasthan-13',
    name: 'Golden Triangle with Rajasthan — 13 Days',
    route: ['Delhi', 'Agra', 'Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer'],
    days: 13,
    image: '/images/journey-rajasthan-13.jpg',
    fromPrice: 2145,
    description:
      'The ultimate North India circuit — forts, desert camps, lakeside palaces, and heritage hotels with time to feel each city’s character.',
    includes: [
      'Heritage hotel options across Rajasthan',
      'Camel safari and desert camp arrangements',
      'No commission-shop stops — transparent pricing',
    ],
    durationCategory: '11-15',
  },
];
