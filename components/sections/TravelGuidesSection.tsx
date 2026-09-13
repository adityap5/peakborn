import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GuideCard } from '@/components/cards/GuideCard';
import { getFeaturedTravelGuides } from '@/lib/data-access';

export function TravelGuidesSection() {
  const guides = getFeaturedTravelGuides();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-line">
      <Container>
        <SectionHeading
          kicker="Travel Tips &amp; Inspiration"
          title="India Travel Guide"
          subtitle="Practical guidance on seasonal weather, packing checklists, first-time trip pacing, and respectful etiquette."
          viewAllHref="/travel-guide"
          viewAllLabel="View All Articles"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </Container>
    </section>
  );
}
