import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  getAllTravelStyles,
  getTravelStyleBySlug,
  getTourPackagesByTravelStyle,
  getCompanyInfo,
} from '@/lib/data-access';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TourCard } from '@/components/cards/TourCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';

interface TravelStylePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const styles = getAllTravelStyles();
  return styles.map((style) => ({
    slug: style.slug,
  }));
}

export async function generateMetadata({ params }: TravelStylePageProps): Promise<Metadata> {
  const { slug } = await params;
  const style = getTravelStyleBySlug(slug);
  const company = getCompanyInfo();

  if (!style) {
    return {
      title: `Travel Style Not Found | ${company.name}`,
    };
  }

  return {
    title: `${style.title} Tours & Holidays | ${company.name}`,
    description: style.fullDescription,
    alternates: {
      canonical: `/travel-styles/${style.slug}`,
    },
    openGraph: {
      title: `${style.title} Tours | ${company.name}`,
      description: style.fullDescription,
      images: [
        {
          url: style.heroImage,
          width: 1200,
          height: 630,
          alt: style.title,
        },
      ],
    },
  };
}

export default async function TravelStyleDetailPage({ params }: TravelStylePageProps) {
  const { slug } = await params;
  const style = getTravelStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  const matchingTours = getTourPackagesByTravelStyle(style.slug);

  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs
        items={[
          { label: 'Travel Styles', href: '/travel-styles' },
          { label: style.title },
        ]}
      />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden bg-jet-black text-white py-14">
          <Image
            src={style.heroImage}
            alt={style.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />

          <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-desert-sand bg-black/40 px-3.5 py-1 rounded-full border border-white/10">
              Travel Theme
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md">
              {style.title}
            </h1>

            <p className="text-sm sm:text-base text-platinum/90 leading-relaxed font-sans max-w-xl mx-auto">
              {style.fullDescription}
            </p>
          </Container>
        </section>

        {/* Packages Section */}
        <section className="py-14 sm:py-20 bg-platinum/40 border-b border-dust-grey">
          <Container>
            <SectionHeading
              kicker="Handpicked Journeys"
              title={`${style.title} Packages`}
              subtitle={`Tailor-made itineraries designed specifically for travelers interested in ${style.title.toLowerCase()}.`}
              viewAllHref="/tour-packages"
              viewAllLabel="View All Packages"
            />

            {matchingTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {matchingTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-dust-grey p-8 max-w-md mx-auto">
                <p className="text-sm text-jet-black/80 mb-4">
                  We create bespoke private itineraries for {style.title}. Tell us your preferences and we will curate a custom holiday plan for you.
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-16 sm:py-24 bg-white">
          <Container className="max-w-3xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-burnt-peach block mb-1">
                Custom Curation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-jet-black tracking-tight">
                Plan Your {style.title} Holiday
              </h2>
            </div>

            <ContactForm className="shadow-lg border-dust-grey" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
