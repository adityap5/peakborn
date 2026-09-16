/**
 * @file lib/config.ts
 * Centralized site configuration and environment parameters.
 */

export const SITE_CONFIG = {
  name: 'Peakborn Holidays',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://peakbornholidays.com',
  defaultOgImage: '/images/destinations/golden-triangle.jpg',
  locale: 'en_IN',
} as const;

export const SITE_URL = SITE_CONFIG.siteUrl;
