import { companyData, valueBenefits } from '@/data/company';
import { mainNavigation, footerNavigation } from '@/data/navigation';
import { destinationsData } from '@/data/destinations';
import { tourPackagesData } from '@/data/tours';
import { travelStylesData } from '@/data/travel-styles';
import { testimonialsData } from '@/data/testimonials';
import { travelGuidesData } from '@/data/guides';
import { Destination, TourPackage, TravelStyle, TravelGuideArticle, Testimonial, CompanyInfo } from '@/types';

// Company & Navigation
export function getCompanyInfo(): CompanyInfo {
  return companyData;
}

export function getValueBenefits() {
  return valueBenefits;
}

export function getMainNavigation() {
  return mainNavigation;
}

export function getFooterNavigation() {
  return footerNavigation;
}

// Destinations
export function getAllDestinations(): Destination[] {
  return destinationsData;
}

export function getFeaturedDestinations(limit = 6): Destination[] {
  return destinationsData.slice(0, limit);
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinationsData.find((d) => d.id === slug);
}

// Tour Packages
export function getAllTourPackages(): TourPackage[] {
  return tourPackagesData;
}

export function getFeaturedTourPackages(): TourPackage[] {
  return tourPackagesData.filter((t) => t.featured);
}

export function getTourPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackagesData.find((t) => t.slug === slug);
}

export function getTourPackagesByDestination(destId: string): TourPackage[] {
  return tourPackagesData.filter((t) =>
    t.destinationSlugs.includes(destId) ||
    (destId === 'taj-mahal' && t.destinationSlugs.includes('golden-triangle')) ||
    (destId === 'agra-day-tours' && t.destinationSlugs.includes('golden-triangle'))
  );
}

export function getTourPackagesByTravelStyle(styleSlug: string): TourPackage[] {
  return tourPackagesData.filter((t) => t.travelStyleSlugs.includes(styleSlug));
}

// Travel Styles
export function getAllTravelStyles(): TravelStyle[] {
  return travelStylesData;
}

export function getFeaturedTravelStyles(): TravelStyle[] {
  return travelStylesData.filter((s) => s.featured);
}

export function getTravelStyleBySlug(slug: string): TravelStyle | undefined {
  return travelStylesData.find((s) => s.slug === slug);
}

// Testimonials
export function getAllTestimonials(): Testimonial[] {
  return testimonialsData;
}

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonialsData.filter((t) => t.verified);
}

// Travel Guides
export function getAllTravelGuides(): TravelGuideArticle[] {
  return travelGuidesData;
}

export function getFeaturedTravelGuides(): TravelGuideArticle[] {
  return travelGuidesData.filter((g) => g.featured);
}

export function getTravelGuideBySlug(slug: string): TravelGuideArticle | undefined {
  return travelGuidesData.find((g) => g.slug === slug);
}
