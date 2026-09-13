import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TravelStyleCard } from '@/components/cards/TravelStyleCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getAllTravelStyles, getCompanyInfo } from '@/lib/data-access';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const company = getCompanyInfo();

export const metadata: Metadata = {
  title: `Travel Styles & Holiday Themes | ${company.name}`,
  description:
    'Explore India tailored around your travel style. Wildlife safaris, cultural heritage circuits, luxury palace journeys, romantic honeymoons, and peaceful mountain holidays.',
};

export default function TravelStylesPage() {
  const styles = getAllTravelStyles();

  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'Travel Styles' }]} />

      <main id="main-content" className="flex-1">
        {/* Banner */}
        <section className="py-12 sm:py-16 bg-cream-100/70 border-b border-line">
          <Container>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
                Travel Your Way
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-4">
                India Travel Styles
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                Every traveler experiences India through a unique lens. Select a theme below to discover tailored itineraries, private stays, and curated experiential moments.
              </p>
            </div>
          </Container>
        </section>

        {/* Styles Grid */}
        <section className="py-14 sm:py-20 bg-cream-50">
          <Container>
            <SectionHeading
              kicker="Themes &amp; Interests"
              title="Browse by Experience"
              subtitle="All journeys are 100% customizable to your desired pacing, dates, and group size."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {styles.map((style) => (
                <TravelStyleCard key={style.id} style={style} />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
