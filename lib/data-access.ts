import { companyData, valueBenefits } from '@/data/company';
import { mainNavigation, footerNavigation } from '@/data/navigation';
import { tourPackagesData } from '@/data/tours';
import { travelStylesData } from '@/data/travel-styles';
import { testimonialsData } from '@/data/testimonials';
import { travelGuidesData } from '@/data/guides';
import { destinationsData } from '@/data/destinations';
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

// Tour Packages (Primary Application Tourism Entity)
export function getAllTourPackages(): TourPackage[] {
  return tourPackagesData;
}

export function getFeaturedTourPackages(): TourPackage[] {
  return tourPackagesData.filter((t) => t.featured);
}

export function getTourPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackagesData.find((t) => t.slug === slug);
}

export function getTourPackagesByCategory(categorySlug: string): TourPackage[] {
  return tourPackagesData.filter((t) =>
    t.categorySlugs.includes(categorySlug) ||
    t.travelStyleSlugs?.includes(categorySlug)
  );
}

// Backward compatibility alias
export function getTourPackagesByTravelStyle(styleSlug: string): TourPackage[] {
  return getTourPackagesByCategory(styleSlug);
}

export function getRelatedTourPackages(currentSlug: string, limit = 3): TourPackage[] {
  const currentTour = tourPackagesData.find((t) => t.slug === currentSlug);
  if (!currentTour) return tourPackagesData.slice(0, limit);

  return tourPackagesData
    .filter((t) => t.slug !== currentSlug)
    .map((tour) => {
      let score = 0;
      // Category overlap
      const sharedCategories = tour.categorySlugs.filter((c) =>
        currentTour.categorySlugs.includes(c)
      ).length;
      score += sharedCategories * 3;

      // Route city overlap
      const sharedCities = tour.routeCities.filter((city) =>
        currentTour.routeCities.includes(city)
      ).length;
      score += sharedCities * 2;

      // Duration proximity
      const dayDiff = Math.abs(tour.durationDays - currentTour.durationDays);
      if (dayDiff <= 2) score += 1;

      return { tour, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.tour);
}

// Legacy Destination Helpers (Preserved during transition until Phase E removal)
export function getAllDestinations(): Destination[] {
  return destinationsData;
}

export function getFeaturedDestinations(limit = 6): Destination[] {
  return destinationsData.slice(0, limit);
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinationsData.find((d) => d.id === slug);
}

export function getTourPackagesByDestination(destId: string): TourPackage[] {
  return tourPackagesData.filter((t) =>
    t.destinationSlugs?.includes(destId) ||
    t.routeCities.some((c) => c.toLowerCase().includes(destId.replace(/-/g, ' ')))
  );
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
