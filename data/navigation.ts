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
    label: 'Packages',
    href: '/tour-packages',
    children: [
      { label: 'All Tour Packages', href: '/tour-packages', description: 'Browse all curated tour packages' },
      { label: 'Taj Mahal Tours', href: '/tour-packages?category=taj-mahal-tours', description: 'World Wonder & Sunrise Excursions' },
      { label: 'Jaipur Tour Packages', href: '/tour-packages?category=jaipur-tour-packages', description: 'Pink City, Forts & Royal Palaces' },
      { label: 'Same Day Tours', href: '/tour-packages?category=same-day-tours', description: 'Express Same-Day Excursions from Delhi' },
      { label: 'Delhi Tour Packages', href: '/tour-packages?category=delhi-tour-packages', description: 'Old & New Delhi Sightseeing Tours' },
      { label: 'Overnight Tours', href: '/tour-packages?category=overnight-tours', description: '2 Days Weekend & Overnight Escapes' },
      { label: 'Golden Triangle Tours', href: '/tour-packages?category=golden-triangle-tours', description: 'Delhi, Agra & Jaipur Signature Circuits' },
      { label: 'Rajasthan Tour Packages', href: '/tour-packages?category=rajasthan-tour-packages', description: 'Royal Forts, Desert Dunes & Havelis' },
      { label: 'Heritage Tour Packages', href: '/tour-packages?category=heritage-tour-packages', description: 'UNESCO Monuments & Cultural Wonders' },
      { label: 'Wildlife Tour Packages', href: '/tour-packages?category=wildlife-tour-packages', description: 'Ranthambore Tiger Safaris & Jungle Lodges' },
      { label: 'South India Tours', href: '/tour-packages?category=south-india-tours', description: 'Kerala Backwaters & Tropical Landscapes' },
      { label: 'Shopping Tours', href: '/tour-packages?category=shopping-tours', description: 'Bazaars, Textiles & Artisan Handicrafts' },
      { label: 'Luxury Tours', href: '/tour-packages?category=luxury-tours', description: 'Grand Palace Stays & Private Luxury Cars' },
      { label: 'Customized Tours', href: '/contact', description: '100% Tailor-made Journeys to Your Wishes' },
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
    { label: 'Packages', href: '/tour-packages' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Travel Styles', href: '/travel-styles' },
    { label: 'Travel Guide', href: '/travel-guide' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ],
  popularPackages: [
    { label: 'Taj Mahal Sunrise tour from Delhi by Car', href: '/tour-packages/taj-mahal-sunrise-tour-from-delhi-by-car' },
    { label: 'Delhi Agra Jaipur 3 Days Golden triangle tour', href: '/tour-packages/delhi-agra-jaipur-3-days-golden-triangle-tour' },
    { label: 'Delhi Agra Jaipur 4 Days Golden triangle tour', href: '/tour-packages/delhi-agra-jaipur-4-days-golden-triangle-tour' },
    { label: 'Delhi Agra Jaipur 5 Days Golden triangle tour', href: '/tour-packages/delhi-agra-jaipur-5-days-golden-triangle-tour' },
    { label: 'Delhi Agra Jaipur Ranthambore 7 Days Golden triangle tour', href: '/tour-packages/delhi-agra-jaipur-ranthambore-7-days-golden-triangle-tour' },
    { label: 'Golden triangle tour with Varanasi', href: '/tour-packages/golden-triangle-tour-with-varanasi' },
    { label: 'Golden triangle tour with Udaipur 8 Days', href: '/tour-packages/golden-triangle-tour-with-udaipur-8-days' },
    { label: 'Ultimate Classical Rajasthan Tour 13 Days', href: '/tour-packages/ultimate-classical-rajasthan-tour-13-days' },
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
