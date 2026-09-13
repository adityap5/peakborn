import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DestinationCard } from '@/components/cards/DestinationCard';
import { getFeaturedDestinations } from '@/lib/data-access';

export function PopularDestinations() {
  const destinations = getFeaturedDestinations();

  return (
    <section className="py-16 sm:py-24 bg-cream-50">
      <Container>
        <SectionHeading
          kicker="Explore India"
          title="Popular Destinations"
          subtitle="Browse road-tested travel destinations across iconic heritage circuits, peaceful backwaters, and pristine nature."
          viewAllHref="/destinations"
          viewAllLabel="View All Destinations"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </Container>
    </section>
  );
}
