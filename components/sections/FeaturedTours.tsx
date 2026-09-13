import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TourCard } from '@/components/cards/TourCard';
import { getFeaturedTourPackages } from '@/lib/data-access';

export function FeaturedTours() {
  const tours = getFeaturedTourPackages();

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-line">
      <Container>
        <SectionHeading
          kicker="Top Tours"
          title="Most Popular India Tour Packages"
          subtitle="Explore our most sought-after private journeys, including same-day Agra excursions, classic Golden Triangle circuits, Rajasthan palaces, and wildlife tiger safaris."
          viewAllHref="/tour-packages"
          viewAllLabel="View All Tour Packages"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </Container>
    </section>
  );
}
