import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DestinationCard } from '@/components/cards/DestinationCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getAllDestinations, getCompanyInfo } from '@/lib/data-access';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const company = getCompanyInfo();

export const metadata: Metadata = {
  title: `India Travel Destinations | Private Tours & Regional Circuits | ${company.name}`,
  description:
    'Explore India’s premier travel destinations with private custom itineraries. From Rajasthan’s majestic forts and Kerala backwaters to the Golden Triangle, Varanasi, and tiger safaris.',
};

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'Destinations' }]} />

      <main id="main-content" className="flex-1">
        {/* Editorial Index Header */}
        <section className="py-12 sm:py-16 bg-cream-100/70 border-b border-line">
          <Container>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
                Explore By Region
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-4">
                India Travel Destinations
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                Browse our curated, road-tested travel destinations across India. Each region offers distinct cultural character, monumental architecture, varied landscapes, and dedicated local guide support.
              </p>
            </div>
          </Container>
        </section>

        {/* Destinations Grid */}
        <section className="py-14 sm:py-20 bg-cream-50">
          <Container>
            <SectionHeading
              kicker="Handcrafted Circuits"
              title="Featured Travel Destinations"
              subtitle="Select a destination to explore detailed regional highlights, signature experiences, and available itineraries."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
