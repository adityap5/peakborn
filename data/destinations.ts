import { tours as rawDestinations, arrivalNotes, departureNotes } from '@/datas/tours';
import { Destination } from '@/types';

/**
 * Normalized destinations dataset adapted directly from the raw source of truth (datas/tours.ts).
 * Preserves 100% of the factual fields without duplicate aliases or public pricing data.
 * Uses local verified assets from /public/images/.
 */
export const destinationsData: Destination[] = rawDestinations.map((dest) => ({
  id: dest.id,
  name: dest.name,
  country: dest.country,
  region: dest.region,
  image: dest.image,
  tagline: dest.tagline,
  description: dest.description,
  bestSeason: dest.bestSeason,
  flightTime: dest.flightTime,
  rating: dest.rating,
  reviews: dest.reviews,
  daysRecommended: dest.daysRecommended,
  highlights: dest.highlights,
  signature: dest.signature,
  pool: dest.pool,
  arrivalNote: arrivalNotes[dest.id],
  departureNote: departureNotes[dest.id],
}));
