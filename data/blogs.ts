export interface BlogEntry {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  slug: string;
}

/** From India with Guide blog */
export const blogs: BlogEntry[] = [
  {
    id: 'golden-triangle-days',
    image: '/images/blog-golden-triangle-days.webp',
    category: 'Planning',
    title: 'How Many Days Do You Need for the Golden Triangle Tour India?',
    excerpt:
      'After 35 years in Agra, we break down the honest day count by traveler type — families, seniors, honeymooners, and business layovers — plus what you miss when you rush.',
    readTime: '11 min read',
    date: 'June 2026',
    slug: 'how-many-days-do-you-need-for-the-golden-triangle-tour-india',
  },
  {
    id: 'old-delhi-guide',
    image: '/images/blog-old-delhi.webp',
    category: 'Field Notes',
    title: 'The Complete Guide to Exploring Old Delhi',
    excerpt:
      'Morning walks through Lahori Gate, Chandni Chowk, spice lanes, and the living chaos of Delhi — how we plan Old Delhi for first-time international visitors.',
    readTime: '9 min read',
    date: 'July 2026',
    slug: 'the-complete-guide-to-exploring-old-delhi',
  },
  {
    id: 'ganga-aarti',
    image: '/images/blog-varanasi-aarti.webp',
    category: 'Spiritual India',
    title: 'Ganga Aarti at Varanasi: What to Expect at Dashashwamedh Ghat',
    excerpt:
      'The evening fire and chant ceremony on the Ganges — timing, viewing spots, and how we weave Varanasi into Golden Triangle extensions.',
    readTime: '12 min read',
    date: 'July 2026',
    slug: 'ganga-aarti-at-varanasi-what-to-expect-at-dashashwamedh-ghat',
  },
  {
    id: 'golden-triangle-food',
    image: '/images/blog-food-gt.webp',
    category: 'Food & Culture',
    title: 'What to Eat on the Golden Triangle Tour: A Food Guide for International Visitors',
    excerpt:
      'From Old Delhi street food to Mughlai feasts in Agra and Rajasthani thalis in Jaipur — what to try, what to skip, and how we keep meals comfortable for every palate.',
    readTime: '14 min read',
    date: 'July 2026',
    slug: 'what-to-eat-on-the-golden-triangle-tour-a-food-guide-for-international-visitors',
  },
];
