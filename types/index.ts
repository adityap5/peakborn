/**
 * @file types/index.ts
 * Domain models for the travel marketing platform.
 */

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: string;
  // Optional contact channels and corporate fields
  whatsappNumber?: string;
  whatsappDefaultMessage?: string;
  legalName?: string;
  cin?: string;
  gstin?: string;
  operatingHours?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    tripadvisor?: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface ValueBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

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
  bestSeason: string;
  flightTime: string;
  rating?: number;
  reviews?: number;
  daysRecommended: [number, number];
  highlights: string[];
  signature: Activity[];
  pool: Activity[];
  arrivalNote?: string;
  departureNote?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  location: string;
  description: string;
  highlights?: string[];
  mealsIncluded?: string[];
  overnightStay?: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  durationNights: number;
  durationDays: number;
  durationLabel: string; // e.g. "05N / 06D"
  routeOverview: string; // e.g. "Delhi · Jaipur · Agra · Delhi"
  routeCities: string[];
  heroImage: string;
  thumbnailImage: string;
  galleryImages?: string[];
  shortDescription: string;
  fullOverview: string;
  tourType: string;
  startingPoint: string;
  endingPoint: string;
  bestFor: string;
  travelStyleSlugs: string[];
  destinationSlugs: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
}

export interface TravelStyle {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  heroImage: string;
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorCountry: string;
  authorLocation?: string;
  rating: number; // 1 - 5
  tripTitle: string;
  tourSlug?: string;
  date: string;
  comment: string;
  avatarUrl?: string;
  verified: boolean;
}

export interface TravelGuideArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTimeMinutes: number;
  publishedAt: string;
  heroImage: string;
  thumbnailImage: string;
  author: {
    name: string;
    role: string;
  };
  contentSections: {
    heading?: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  recommendedTourSlugs?: string[];
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  tourTitle?: string;
  tourSlug?: string;
  travelDate?: string;
  numberOfTravelers?: number;
  duration?: string;
  preferredStyle?: string;
  specialRequirements?: string;
  consentAgreed: boolean;
  honeypot?: string;
}
