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
  title: `Disclaimer & Security Advisory | ${company.name}`,
  description: 'Official disclaimer, security guidelines, and fraud prevention advisory for our travelers.',
};

export default function DisclaimerPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'Disclaimer' }]} />

      <main id="main-content" className="flex-1 py-12 sm:py-16 bg-cream-50">
        <Container className="max-w-3xl">
          <article className="bg-white rounded-2xl p-6 sm:p-10 border border-line shadow-xs space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Website Disclaimer &amp; Security Advisory
            </h1>
            <p className="text-xs text-gray-400">Last updated: January 2026</p>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              <p>
                The information provided on this website is for general marketing, informational, and trip planning purposes only.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                1. Security &amp; Fraud Prevention Advisory
              </h2>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
                <p>
                  <strong>Important Notice:</strong> Our staff and travel planners will only contact you using the official telephone and email details provided on this website. Our team will <strong>never</strong> ask for your banking passwords, OTPs, credit card CVV codes, or request transfers to unverified personal bank accounts, nor will we ask you to install remote-desktop software (e.g. AnyDesk or TeamViewer).
                </p>
              </div>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                2. Content &amp; Itinerary Accuracy
              </h2>
              <p>
                While we strive to keep all factual information regarding monuments, seasons, and routes up to date, regional authorities may update monument opening days or entry regulations. Detailed logistics will be re-confirmed directly during your holiday planning process.
              </p>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
