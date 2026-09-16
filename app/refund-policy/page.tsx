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
  title: `Cancellation & Refund Policy | ${company.name}`,
  description: 'Our policy regarding tour cancellations, modifications, and refund processes.',
  alternates: {
    canonical: '/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'Refund Policy' }]} />

      <main id="main-content" className="flex-1 py-12 sm:py-16 bg-cream-50">
        <Container className="max-w-3xl">
          <article className="bg-white rounded-2xl p-6 sm:p-10 border border-line shadow-xs space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-xs text-gray-400">Last updated: January 2026</p>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              <p>
                At <strong>{company.name}</strong>, we understand that travel plans may sometimes need to be adjusted. Our cancellation and refund guidelines are structured to be fair, transparent, and aligned with our partner hotels and transport providers.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                1. Trip Amendments &amp; Postponements
              </h2>
              <p>
                If your arrival dates shift, we will endeavor to reschedule your vehicle and guide services without administrative penalties, subject to vehicle availability and hotel partner policies.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                2. Cancellations
              </h2>
              <p>
                Specific cancellation windows and refund timelines are clearly specified in each formal custom tour proposal provided by our customer care team before confirmation.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                3. Contacting Us About a Change
              </h2>
              <p>
                To request any change, cancellation, or refund review, please notify your designated trip coordinator in writing via email at <a href={`mailto:${company.email}`} className="text-brand-primary underline">{company.email}</a>.
              </p>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
