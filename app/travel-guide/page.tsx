import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { GuideCard } from '@/components/cards/GuideCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getAllTravelGuides, getCompanyInfo } from '@/lib/data-access';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const company = getCompanyInfo();

export const metadata: Metadata = {
  title: `India Travel Guide & Expert Tips | ${company.name}`,
  description:
    'Practical India travel advice from local specialists. Season-by-season climate guide, packing checklists, cultural etiquette tips, and first-time visitor recommendations.',
};

export default function TravelGuidePage() {
  const guides = getAllTravelGuides();

  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'Travel Guide' }]} />

      <main id="main-content" className="flex-1">
        {/* Header */}
        <section className="py-12 sm:py-16 bg-cream-100/70 border-b border-line">
          <Container>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
                Travel Tips &amp; Advice
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-4">
                India Travel Guide
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                Authentic, grounded insights to help you prepare for your holiday. Explore seasonal weather breakdowns, packing checklists, cultural pointers, and first-timer recommendations.
              </p>
            </div>
          </Container>
        </section>

        {/* Guides Grid */}
        <section className="py-14 sm:py-20 bg-cream-50">
          <Container>
            <SectionHeading
              kicker="In-Depth Advice"
              title="All Articles &amp; Planning Guides"
              subtitle="Written by our on-ground travel planners and trip coordinators."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {guides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
