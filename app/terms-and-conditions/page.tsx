import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getCompanyInfo } from '@/lib/data-access';

const company = getCompanyInfo();

export const metadata: Metadata = {
  title: `Terms & Conditions | ${company.name}`,
  description: 'Terms and conditions governing private tour planning, vehicle reservations, and itinerary coordination.',
};

export default function TermsPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <main id="main-content" className="flex-1 py-12 sm:py-16 bg-cream-50">
        <Container className="max-w-3xl">
          <article className="bg-white rounded-2xl p-6 sm:p-10 border border-line shadow-xs space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-gray-400">Last updated: January 2026</p>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              <p>
                Welcome to <strong>{company.name}</strong>. By requesting a tour proposal or booking a private travel package through our platform, you agree to the following terms and guidelines.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                1. Custom Itinerary Proposals &amp; Quotes
              </h2>
              <p>
                All sample itineraries displayed on this website represent suggested starting frameworks. Final trip quotes, hotel tiers, inclusions, and day-by-day schedules are customized and agreed upon directly between the client and our travel desk in writing.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                2. Private Chauffeur &amp; Guide Services
              </h2>
              <p>
                Vehicles provided for your private tour are dedicated exclusively to your group. Drivers follow local traffic regulations and interstate toll rules. Local guides provided at monuments are licensed and verified.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                3. Changes to Routing &amp; Force Majeure
              </h2>
              <p>
                While we make every effort to operate all itineraries as planned, unforeseen weather occurrences (such as heavy winter fog affecting roads in North India), unexpected monument closures, or flight disruptions may require minor adjustments. In such cases, our team will coordinate alternative arrangements to protect your safety and comfort.
              </p>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
