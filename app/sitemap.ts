import type { MetadataRoute } from 'next';
import {
  getAllTourPackages,
  getAllTravelStyles,
  getAllTravelGuides,
} from '@/lib/data-access';
import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core static marketing and legal pages (excluding retired destination routes)
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/tour-packages',
    '/travel-styles',
    '/travel-guide',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/tour-packages') ? 0.9 : 0.7,
  }));

  // Tour Packages (18 active tours)
  const tours: MetadataRoute.Sitemap = getAllTourPackages().map((tour) => ({
    url: `${SITE_URL}/tour-packages/${tour.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Travel Styles (8 active styles)
  const styles: MetadataRoute.Sitemap = getAllTravelStyles().map((style) => ({
    url: `${SITE_URL}/travel-styles/${style.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Travel Guides (4 active guides)
  const guides: MetadataRoute.Sitemap = getAllTravelGuides().map((guide) => ({
    url: `${SITE_URL}/travel-guide/${guide.slug}`,
    lastModified: guide.publishedAt ? new Date(guide.publishedAt).toISOString() : currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...tours, ...styles, ...guides];
}
