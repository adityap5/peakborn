import React from 'react';
import { TourCard } from '@/components/cards/TourCard';
import { getRelatedTourPackages } from '@/lib/data-access';

interface RelatedToursProps {
  currentSlug: string;
}

export function RelatedTours({ currentSlug }: RelatedToursProps) {
  const relatedTours = getRelatedTourPackages(currentSlug, 3);

  if (!relatedTours || relatedTours.length === 0) return null;

  return (
    <section className="space-y-6 pt-6 border-t border-dust-grey">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-burnt-peach block mb-1">
          Explore Alternatives
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-jet-black">
          Similar &amp; Related Tour Packages
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
