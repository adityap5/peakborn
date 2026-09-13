import { CompanyInfo, ValueBenefit } from '@/types';

export const companyData: CompanyInfo = {
  name: 'Company-Name',
  tagline: 'Journeys for a Richer You',
  phone: '+91 XXXXX XXXXX',
  displayPhone: '+91 XXXXX XXXXX',
  email: 'info@company-domain.com',
  address: 'Company Address',
  // WhatsApp is optional. If left undefined or empty, WhatsApp CTAs will not render.
  whatsappNumber: '+91 XXXXX XXXXX',
  whatsappDefaultMessage: 'Hello, I would like to enquire about a private tour package.',
  // Optional corporate attributes (not rendered automatically unless explicitly enabled)
  operatingHours: 'Monday - Saturday: 9:30 AM - 6:30 PM IST',
  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
};

export const valueBenefits: ValueBenefit[] = [
  {
    id: 'tailor-made',
    title: 'Tailor-Made Journeys',
    description: 'Every itinerary is thoughtfully customized around your preferences, pace, and interests.',
    iconName: 'Sliders',
  },
  {
    id: 'local-expertise',
    title: 'Local Travel Expertise',
    description: 'Direct on-the-ground knowledge ensures authentic cultural encounters and verified stays.',
    iconName: 'Compass',
  },
  {
    id: 'personalised-planning',
    title: 'Personalised Planning',
    description: 'One-on-one holiday curation with responsive assistance from planning to completion.',
    iconName: 'UserCheck',
  },
  {
    id: 'reliable-support',
    title: 'Reliable Travel Support',
    description: 'Dedicated trip coordination and local assistance throughout your entire travel duration.',
    iconName: 'ShieldCheck',
  },
];
