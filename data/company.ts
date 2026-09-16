import { CompanyInfo, ValueBenefit } from '@/types';

export const companyData: CompanyInfo = {
  name: 'Peakborn Holidays',
  tagline: 'Journeys for a Richer You',
  phone: '+917900740963',
  displayPhone: '+91 79007 40963',
  email: 'peakbornholidays@gmail.com',
  address:
    'S/O Rohitas Singh Tomar, Rajan Kunj Nagla Kishan Lal, Hathras Road, Naraich, Kuberpur, PO: Yamuna Bridge, DIST: Agra, Uttar Pradesh - 282006',
  udyamRegistrationNumber: 'UDYAM-UP-01-0211734',
  whatsappNumber: '+917900740963',
  whatsappDefaultMessage: 'Hello Peakborn Holidays, I would like to enquire about a private tour package.',
  operatingHours: 'Monday - Saturday: 9:00 AM - 7:00 PM IST',
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
