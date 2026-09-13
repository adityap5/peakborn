import { NavigationItem } from '@/types';

export const mainNavigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Destinations',
    href: '/destinations',
    children: [
      { label: 'All Destinations', href: '/destinations', description: 'Explore all iconic Indian regions' },
      { label: 'Golden Triangle', href: '/destinations/golden-triangle', description: 'Delhi, Agra & Jaipur circuit' },
      { label: 'Taj Mahal & Agra', href: '/destinations/taj-mahal', description: 'World wonder & Mughal heritage' },
      { label: 'Agra Day Tours', href: '/destinations/agra-day-tours', description: 'Same-day express excursions' },
      { label: 'Rajasthan', href: '/destinations/rajasthan', description: 'Royal forts, palaces & havelis' },
      { label: 'South India', href: '/destinations/south-india', description: 'Kerala backwaters & temples' },
      { label: 'North India', href: '/destinations/north-india', description: 'Varanasi ghats & Himalayas' },
    ],
  },
  {
    label: 'Tour Packages',
    href: '/tour-packages',
    children: [
      { label: 'All Tour Packages', href: '/tour-packages', description: 'Browse all curated itineraries' },
      { label: 'Golden Triangle (5 Nights)', href: '/tour-packages/golden-triangle-5-nights', description: 'Classic heritage circuit' },
      { label: 'Rajasthan Heritage & Haveli', href: '/tour-packages/rajasthan-heritage-haveli', description: 'Royal palace & desert journey' },
      { label: 'Kerala Backwaters & Tea', href: '/tour-packages/kerala-backwaters-tea-plantations', description: 'Serene coastal paradise' },
      { label: 'Central India Tiger Safari', href: '/tour-packages/central-india-tiger-safari', description: 'Wildlife & national parks' },
      { label: 'Kumaon Himalayan Hills', href: '/tour-packages/kumaon-himalayan-hills', description: 'Himalayan mountain serenity' },
      { label: 'Varanasi Spiritual Trail', href: '/tour-packages/varanasi-spiritual-buddhist-trail', description: 'Sacred Ganges & Buddhist roots' },
    ],
  },
  { label: 'Travel Styles', href: '/travel-styles' },
  { label: 'Travel Guide', href: '/travel-guide' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Tour Packages', href: '/tour-packages' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Travel Styles', href: '/travel-styles' },
    { label: 'Travel Guide', href: '/travel-guide' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ],
  popularPackages: [
    { label: '5 Nights Golden Triangle Tour', href: '/tour-packages/golden-triangle-5-nights' },
    { label: 'Rajasthan Heritage & Haveli Circuit', href: '/tour-packages/rajasthan-heritage-haveli' },
    { label: 'Kerala Backwaters & Tea Plantations', href: '/tour-packages/kerala-backwaters-tea-plantations' },
    { label: 'Central India Tiger Safari', href: '/tour-packages/central-india-tiger-safari' },
    { label: 'Varanasi Spiritual & Buddhist Trail', href: '/tour-packages/varanasi-spiritual-buddhist-trail' },
  ],
  topDestinations: [
    { label: 'Golden Triangle (Delhi, Agra, Jaipur)', href: '/destinations/golden-triangle' },
    { label: 'Taj Mahal & Agra Excursions', href: '/destinations/taj-mahal' },
    { label: 'Same Day Agra Tours', href: '/destinations/agra-day-tours' },
    { label: 'Rajasthan (Forts & Palaces)', href: '/destinations/rajasthan' },
    { label: 'South India & Kerala Backwaters', href: '/destinations/south-india' },
    { label: 'North India & Varanasi Ghats', href: '/destinations/north-india' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
};
