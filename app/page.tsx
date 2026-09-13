import React from 'react';
import type { Metadata } from 'next';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PopularDestinations } from '@/components/sections/PopularDestinations';
import { FeaturedTours } from '@/components/sections/FeaturedTours';
import { TravelStylesGrid } from '@/components/sections/TravelStylesGrid';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TravelGuidesSection } from '@/components/sections/TravelGuidesSection';
import { FinalCtaBanner } from '@/components/sections/FinalCtaBanner';
import { getCompanyInfo } from '@/lib/data-access';
import { generateTravelAgencyJsonLd } from '@/lib/seo';

const company = getCompanyInfo();

export const metadata: Metadata = {
  title: `${company.name} | Private India Tours & Custom Holiday Packages`,
  description:
    'Plan a private, custom India holiday with local experts. Golden Triangle, Rajasthan, Kerala, tiger safaris, Himalayan retreats, and more — handcrafted itineraries tailored to your pace.',
};

export default function HomePage() {
  const jsonLd = generateTravelAgencyJsonLd(company, 'https://company-domain.com');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UtilityBar />
      <Header />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <PopularDestinations />
        <FeaturedTours />
        <TravelStylesGrid />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <TravelGuidesSection />
        <FinalCtaBanner />
      </main>

      <Footer />
    </>
  );
}
