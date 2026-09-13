import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Sliders, Compass, UserCheck, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getCompanyInfo } from '@/lib/data-access';

const company = getCompanyInfo();

export const metadata: Metadata = {
  title: `About Us | Local Travel Expertise | ${company.name}`,
  description:
    'Learn about our philosophy, local travel expertise, and dedicated approach to crafting tailor-made private tours across India.',
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Sliders,
      title: 'Tailor-Made Holidays',
      description: 'Every traveler is distinct. We build each itinerary from scratch based on your preferred pacing, accommodation style, and interests.',
    },
    {
      icon: Compass,
      title: 'Local Destination Specialists',
      description: 'Our team possesses authentic on-ground knowledge of regional climates, monument timings, scenic routes, and cultural traditions.',
    },
    {
      icon: UserCheck,
      title: 'Dedicated Chauffeurs & Guides',
      description: 'We partner exclusively with licensed monument historians and seasoned private chauffeurs for maximum comfort and safety.',
    },
    {
      icon: ShieldCheck,
      title: 'Continuous Ground Coordination',
      description: 'From your airport arrival to final departure, our travel desk provides reliable assistance for complete peace of mind.',
    },
  ];

  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <main id="main-content" className="flex-1">
        {/* About Hero */}
        <section className="py-14 sm:py-20 bg-cream-100/70 border-b border-line">
          <Container className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
              Our Story &amp; Philosophy
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6">
              About {company.name}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">
              We are a dedicated travel company specializing in private, custom-crafted journeys across India. Our mission is to help curious travelers discover the extraordinary depth, heritage, and natural beauty of the subcontinent at a relaxed, thoughtful pace.
            </p>
          </Container>
        </section>

        {/* Narrative Section with Image */}
        <section className="py-16 sm:py-24 bg-white border-b border-line">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-200 shadow-md">
                <Image
                  src="/images/about-pioneer.webp"
                  alt="Heritage travel in India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_35%]"
                />
              </div>

              <div className="space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block">
                  The Travel Philosophy
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight">
                  Meaningful Travel, Thoughtfully Planned
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                  India cannot be hurried. From the sunrise light on the marble minarets of the Taj Mahal to the quiet evening rituals along the Ganges in Varanasi, authentic travel experiences require space to breathe.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                  We eliminate the stress of logistics by arranging dedicated private vehicles, vetted accommodation tiers, and licensed guides, leaving you free to immerse yourself in the culture, history, and warmth of the Indian people.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Core Pillars */}
        <section className="py-16 sm:py-24 bg-cream-50">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
                What Sets Us Apart
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-dark tracking-tight">
                Our Core Commitments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 sm:p-8 rounded-2xl bg-white border border-line shadow-xs hover:border-brand-primary/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brand-dark mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
