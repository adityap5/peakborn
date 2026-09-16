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
  title: `Privacy Policy | ${company.name}`,
  description: 'Our privacy policy details how we handle, protect, and respect your personal enquiry information.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <main id="main-content" className="flex-1 py-12 sm:py-16 bg-cream-50">
        <Container className="max-w-3xl">
          <article className="bg-white rounded-2xl p-6 sm:p-10 border border-line shadow-xs space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-400">Last updated: January 2026</p>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              <p>
                At <strong>{company.name}</strong>, we are committed to respecting and protecting the privacy of our visitors and customers. This Privacy Policy outlines the types of personal information we collect and how we use, safeguard, and disclose that data.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                1. Information We Collect
              </h2>
              <p>
                When you submit an enquiry on our website, we may collect personal details such as your full name, email address, telephone number, approximate travel dates, preferred destinations, and any specific trip requests you provide.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information you provide solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Respond to your travel enquiries and create tailored tour itineraries.</li>
                <li>Communicate with you regarding your trip arrangements, hotels, and vehicle coordination.</li>
                <li>Provide customer care support before, during, and after your holiday.</li>
              </ul>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                3. Data Protection &amp; Confidentiality
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. Your details are accessed exclusively by authorized travel planners and on-ground coordinators strictly for the purpose of fulfilling your travel arrangements.
              </p>

              <h2 className="font-serif text-xl font-bold text-brand-dark pt-4">
                4. Contact Us
              </h2>
              <p>
                If you have questions regarding this policy or wish to request the removal of your contact information from our records, please reach out to us at <a href={`mailto:${company.email}`} className="text-brand-primary underline">{company.email}</a>.
              </p>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
