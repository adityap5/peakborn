import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Destination, TourPackage } from '@/types';
import { Container } from '@/components/layout/Container';
import { TourCard } from '@/components/cards/TourCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';

export interface RelatedTourPackagesProps {
  destination: Destination;
  tours: TourPackage[];
}

export function RelatedTourPackages({ destination, tours }: RelatedTourPackagesProps) {
  if (!tours || tours.length === 0) {
    return (
      <section id="tours" className="py-14 sm:py-20 bg-cream-50 border-b border-line">
        <Container className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-brand-dark mb-3">
            Custom Packages for {destination.name}
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            We build private, custom itineraries for {destination.name} according to your travel dates and pace.
          </p>
          <Link href="/tour-packages">
            <Button variant="primary">
              <span>Explore All Tour Packages</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section id="tours" className="py-14 sm:py-20 bg-cream-50 border-b border-line">
      <Container>
        <SectionHeading
          kicker="Curated Itineraries"
          title={`Tour Packages Featuring ${destination.name}`}
          subtitle={`Discover handcrafted private journeys covering ${destination.name} and surrounding heritage circuits.`}
          viewAllHref="/tour-packages"
          viewAllLabel="View All Packages"
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
