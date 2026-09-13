import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getAllTourPackages, getCompanyInfo } from '@/lib/data-access';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TourPackageFilterGrid } from '@/components/sections/tour/TourPackageFilterGrid';

const company = getCompanyInfo();

export const metadata: Metadata = {
  title: `India Tour Packages & Private Itineraries | ${company.name}`,
  description:
    'Browse our complete collection of private, customizable India tour packages. From classic Golden Triangle circuits to Rajasthan heritage havelis, Kerala backwaters, and Central India tiger safaris.',
  alternates: {
    canonical: '/tour-packages',
  },
  openGraph: {
    title: `India Tour Packages & Private Itineraries | ${company.name}`,
    description:
      'Browse our complete collection of private, customizable India tour packages. Handcrafted journeys with private chauffeur and local guide.',
  },
};

export default function TourPackagesPage() {
  const tours = getAllTourPackages();

  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'Tour Packages' }]} />

      <main id="main-content" className="flex-1">
        {/* Header Banner */}
        <section className="py-12 sm:py-16 bg-cream-100/70 border-b border-line">
          <Container>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
                Handcrafted Private Journeys
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-4">
                India Tour Packages
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                Each itinerary below is a road-tested starting point. Our destination specialists will tailor the pacing, hotel tier, and route sights to match your personal vision and schedule.
              </p>
            </div>
          </Container>
        </section>

        {/* Interactive Filter & Packages Grid */}
        <section className="py-14 sm:py-20 bg-cream-50">
          <Container>
            <SectionHeading
              kicker="Explore By Interest"
              title="All Available Journeys"
              subtitle="Every tour includes dedicated private chauffeur transport, verified stays, and certified local monument guides."
            />

            <React.Suspense fallback={<div className="py-12 text-center text-sm text-gray-500">Loading tour packages...</div>}>
              <TourPackageFilterGrid tours={tours} company={company} />
            </React.Suspense>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
