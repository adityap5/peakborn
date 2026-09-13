import { TravelGuideArticle } from '@/types';

export const travelGuidesData: TravelGuideArticle[] = [
  {
    id: 'guide-1',
    slug: 'best-time-to-visit-india',
    title: 'Best Time to Visit India: Season-by-Season Guide',
    excerpt: 'Understand India’s diverse climates, from the cool winters in Rajasthan and the plains to the lush monsoon landscapes of Kerala and the summer tranquility of the Himalayas.',
    category: 'Travel Advice',
    readTimeMinutes: 6,
    publishedAt: '2025-11-15',
    heroImage: '/images/blog-golden-triangle-days.webp',
    thumbnailImage: '/images/blog-golden-triangle-days.webp',
    author: {
      name: 'Editorial Team',
      role: 'Destination Specialist',
    },
    contentSections: [
      {
        heading: 'Winter Season (October to March) — Ideal for Most Regions',
        paragraphs: [
          'The months from October through March represent the most pleasant period for touring North India, Rajasthan, Central India, and the Golden Triangle. Daytime temperatures are comfortably mild with sunny skies and cool evenings, making sightseeing across forts and outdoor heritage sites enjoyable.',
          'This is also the peak season for wildlife game drives in national parks such as Ranthambore, Bandhavgarh, and Kanha, where dry forest foliage improves animal sightings.',
        ],
      },
      {
        heading: 'Spring & Summer (April to June) — Head to the Mountains',
        paragraphs: [
          'While temperatures rise across the central and northern plains, the spring and early summer months are ideal for visiting the Himalayan hill stations of Uttarakhand, Himachal Pradesh, and Sikkim. Towns like Nainital, Shimla, and Ranikhet offer crisp mountain air and panoramic mountain vistas.',
        ],
      },
      {
        heading: 'Monsoon (July to September) — Verdant Landscapes & Wellness',
        paragraphs: [
          'The southwest monsoon breathes vibrant life into Kerala and the Western Ghats. Waterfalls flow in abundance and the countryside turns into a lush green carpet. This is widely considered the best season for traditional Ayurvedic therapies and peaceful backwater retreats.',
        ],
      },
    ],
    recommendedTourSlugs: ['delhi-agra-jaipur-5-days-golden-triangle-tour', 'ultimate-classical-rajasthan-tour-13-days', 'golden-triangle-tour-with-udaipur-8-days'],
    featured: true,
    metaTitle: 'Best Time to Visit India | Travel Guide | Company-Name',
    metaDescription: 'Find the ideal season for your India journey with our comprehensive guide to weather, regional climates, and top travel months.',
  },
  {
    id: 'guide-2',
    slug: 'first-time-visitors-guide',
    title: 'First-Time Visitor’s Guide: Planning Your First Trip to India',
    excerpt: 'Essential advice on pacing, transportation, visas, currency, and what to expect when experiencing India for the very first time.',
    category: 'Essential Tips',
    readTimeMinutes: 8,
    publishedAt: '2025-12-01',
    heroImage: '/images/blog-old-delhi.webp',
    thumbnailImage: '/images/blog-old-delhi.webp',
    author: {
      name: 'Editorial Team',
      role: 'Senior Travel Planner',
    },
    contentSections: [
      {
        heading: 'Choose the Right Circuit for Your Pacing',
        paragraphs: [
          'India is vast and multifaceted. For a first visit, focusing on one well-defined region (such as the classic Golden Triangle of Delhi, Agra, and Jaipur, optionally paired with rural Rajasthan or a week in Kerala) gives you time to absorb the atmosphere without feeling rushed.',
        ],
      },
      {
        heading: 'The Advantage of a Dedicated Chauffeur and Local Guides',
        paragraphs: [
          'Having a private air-conditioned vehicle with an experienced local driver eliminates the stress of navigating transport between sights. Certified local guides at monuments offer rich historical context and facilitate effortless entry into heritage complexes.',
        ],
      },
      {
        heading: 'Health, Hydration & Cuisine',
        paragraphs: [
          'Always drink bottled or filtered mineral water, readily provided in your private vehicle. Indian cuisine offers immense regional variety; start with milder curries and freshly cooked tandoori dishes if your palate is sensitive to spices.',
        ],
      },
    ],
    recommendedTourSlugs: ['delhi-agra-jaipur-5-days-golden-triangle-tour'],
    featured: true,
    metaTitle: 'First-Time Visitor Guide to India | Company-Name',
    metaDescription: 'Essential planning tips for first-time travelers to India covering itineraries, pacing, transport, and local customs.',
  },
  {
    id: 'guide-3',
    slug: 'what-to-pack-for-india',
    title: 'What to Pack for an India Holiday: A Practical Checklist',
    excerpt: 'From breathable fabrics and modest clothing for temple visits to walking footwear and essential travel items.',
    category: 'Packing & Preparation',
    readTimeMinutes: 5,
    publishedAt: '2026-01-10',
    heroImage: '/images/blog-food-gt.webp',
    thumbnailImage: '/images/blog-food-gt.webp',
    author: {
      name: 'Editorial Team',
      role: 'Trip Coordinator',
    },
    contentSections: [
      {
        heading: 'Clothing: Modesty, Comfort and Breathability',
        paragraphs: [
          'Lightweight cottons and linens are best for most months. When visiting religious sites and active temples, both men and women should wear clothing that covers shoulders and knees. Carrying a lightweight scarf or pashmina is helpful for covering up when needed.',
        ],
        bulletPoints: [
          'Loose-fitting cotton trousers and breathable shirts',
          'A light sweater or fleece jacket for cool mornings in wildlife parks or hill stations',
          'Slip-on shoes or comfortable sandals for sites where shoes must be removed',
          'Sunhat, UV sunglasses, and broad-spectrum sunscreen',
        ],
      },
    ],
    recommendedTourSlugs: ['ultimate-classical-rajasthan-tour-13-days', 'delhi-agra-jaipur-ranthambore-7-days-golden-triangle-tour'],
    featured: false,
    metaTitle: 'What to Pack for an India Holiday | Travel Packing Checklist',
    metaDescription: 'Practical advice on clothing, footwear, and essentials for traveling across North and South India comfortably.',
  },
  {
    id: 'guide-4',
    slug: 'cultural-etiquette-tips',
    title: 'Cultural Etiquette & Practical Travel Tips in India',
    excerpt: 'Helpful pointers on temple visits, greetings, tipping customs, and respectful photography.',
    category: 'Culture & Etiquette',
    readTimeMinutes: 5,
    publishedAt: '2026-02-05',
    heroImage: '/images/blog-varanasi-aarti.webp',
    thumbnailImage: '/images/blog-varanasi-aarti.webp',
    author: {
      name: 'Editorial Team',
      role: 'Cultural Advisor',
    },
    contentSections: [
      {
        heading: 'Visiting Places of Worship',
        paragraphs: [
          'Remove your footwear before entering temples, mosques, and gurdwaras. At Sikh Gurdwaras (such as Bangla Sahib in Delhi or the Golden Temple in Amritsar), head coverings are required and provided at the entrance.',
        ],
      },
      {
        heading: 'Greetings & Photography',
        paragraphs: [
          'A gentle "Namaste" with hands folded together is a warm, universally recognized greeting throughout the country. When photographing local artisans or residents, asking permission beforehand is appreciated.',
        ],
      },
    ],
    recommendedTourSlugs: ['golden-triangle-tour-with-varanasi', 'delhi-agra-jaipur-5-days-golden-triangle-tour'],
    featured: false,
    metaTitle: 'Cultural Etiquette in India | Travel Advice | Company-Name',
    metaDescription: 'Practical tips on respectful cultural customs, greetings, temple visits, and etiquette when traveling in India.',
  },
];
