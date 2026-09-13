export interface CityTour {
  id: string;
  name: string;
  region: string;
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
  sourcePath: string;
}

/** Tour-by-city summaries. */
export const cities: CityTour[] = [
  {
    id: 'new-delhi',
    name: 'New Delhi',
    region: 'National Capital, North India',
    image: '/images/new-delhi.jpg',
    tagline: 'Mughal history meets modern India',
    description:
      'Explore India’s capital with private city tours — Old and New Delhi monuments, heritage walks, food tours, and spiritual sites with licensed local guides.',
    highlights: ['Red Fort & Chandni Chowk', 'Qutub Minar & Humayun’s Tomb', 'Old Delhi food walks'],
    sourcePath: '/new-delhi-tour-packages',
  },
  {
    id: 'agra',
    name: 'Agra',
    region: 'Uttar Pradesh · Taj Mahal',
    image: '/images/agra-tour.webp',
    tagline: 'City of the Taj Mahal',
    description:
      'Agra is home to some of India most iconic heritage sites, including the world-famous Taj Mahal, Agra Fort, and the historic city of Fatehpur Sikri. Our Agra Tour Packages are designed for travelers who want to experience the best of Agra history, architecture, and culture in a comfortable and well-planned way. If you are travelling from Delhi and want to focus specifically on the Taj Mahal, explore our Taj Mahal tour packages from Delhi — by car, by train, sunrise visits, and same-day returns. Whether you are looking for a quick Agra Tour from Delhi, a private Agra Day Tour, or an overnight stay for a more relaxed experience, Pioneer Holidays offers carefully curated itineraries with private transportation, expert local guides, and flexible tour options. From sunrise Taj Mahal visits to extended Agra sightseeing tours, we ensure a smooth journey from Delhi to Agra and beyond.',
    highlights: ['Taj Mahal sunrise timing', 'Agra Fort & Baby Taj', 'Same-day tours from Delhi'],
    sourcePath: '/agra-tour-packages',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    region: 'Rajasthan · Pink City',
    image: '/images/rajasthan.jpg',
    tagline: 'Forts, palaces, and bazaars',
    description:
      'Amber Fort, City Palace, Hawa Mahal, and artisan markets — the third corner of the Golden Triangle, best explored at an unhurried pace.',
    highlights: ['Amber Fort & Nahargarh', 'City Palace & Hawa Mahal', 'Textile & gem bazaars'],
    sourcePath: '/jaipur-tour-packages',
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    region: 'Uttar Pradesh · Spiritual India',
    image: '/images/varanasi.jpg',
    tagline: 'Ghats, temples, and Ganga Aarti',
    description:
      'Dawn boat rides on the Ganges, ancient ghats, and the evening Ganga Aarti at Dashashwamedh Ghat — often added to longer North India itineraries.',
    highlights: ['Ganga Aarti ceremony', 'Sunrise boat on the Ganges', '1–3 day private tours'],
    sourcePath: '/varanasi-tour-packages',
  },
];
