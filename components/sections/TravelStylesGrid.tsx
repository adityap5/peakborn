import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TravelStyleCard } from '@/components/cards/TravelStyleCard';
import { getAllTravelStyles } from '@/lib/data-access';

export function TravelStylesGrid() {
  const styles = getAllTravelStyles();

  return (
    <section className="py-16 sm:py-24 bg-cream-50">
      <Container>
        <SectionHeading
          kicker="Travel By Interest"
          title="Explore India Your Way"
          subtitle="Whether you seek wildlife safaris, palace heritage, romantic backwaters, or mountain tranquility, we tailor the journey around your passion."
          viewAllHref="/travel-styles"
          viewAllLabel="View All Experiences"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {styles.map((style) => (
            <TravelStyleCard key={style.id} style={style} />
          ))}
        </div>
      </Container>
    </section>
  );
}
