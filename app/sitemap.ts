import type { MetadataRoute } from 'next';
import {
  getAllDestinations,
  getAllTourPackages,
  getAllTravelStyles,
  getAllTravelGuides,
} from '@/lib/data-access';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://company-domain.com';
  const currentDate = new Date().toISOString();

  // Core static marketing and legal pages
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/tour-packages',
    '/destinations',
    '/travel-styles',
    '/travel-guide',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/tour-packages') || route.startsWith('/destinations') ? 0.9 : 0.7,
  }));

  // Destinations
  const destinations = getAllDestinations().map((dest) => ({
    url: `${baseUrl}/destinations/${dest.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Tour Packages
  const tours = getAllTourPackages().map((tour) => ({
    url: `${baseUrl}/tour-packages/${tour.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Travel Styles
  const styles = getAllTravelStyles().map((style) => ({
    url: `${baseUrl}/travel-styles/${style.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Travel Guides
  const guides = getAllTravelGuides().map((guide) => ({
    url: `${baseUrl}/travel-guide/${guide.slug}`,
    lastModified: guide.publishedAt ? new Date(guide.publishedAt).toISOString() : currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...destinations, ...tours, ...styles, ...guides];
}
