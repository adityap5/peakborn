import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllDestinations,
  getDestinationBySlug,
  getTourPackagesByDestination,
  getCompanyInfo,
} from '@/lib/data-access';
import { generateDestinationJsonLd } from '@/lib/seo';
import { SITE_URL } from '@/lib/config';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DestinationHero } from '@/components/sections/destination/DestinationHero';
import { DestinationOverview } from '@/components/sections/destination/DestinationOverview';
import { SignatureExperiences } from '@/components/sections/destination/SignatureExperiences';
import { ExperiencePool } from '@/components/sections/destination/ExperiencePool';
import { ArrivalDepartureInfo } from '@/components/sections/destination/ArrivalDepartureInfo';
import { RelatedTourPackages } from '@/components/sections/destination/RelatedTourPackages';
import { DestinationCTA } from '@/components/sections/destination/DestinationCTA';

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const destinations = getAllDestinations();
  return destinations.map((dest) => ({
    slug: dest.id,
  }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  const company = getCompanyInfo();

  if (!destination) {
    return {
      title: `Destination Not Found | ${company.name}`,
    };
  }

  // Factual SEO description derived from destination data without fabricated claims
  const metaDescription =
    destination.description.length > 155
      ? `${destination.description.substring(0, 152)}...`
      : destination.description;

  return {
    title: `${destination.name} Tour Packages & Travel Guide | ${company.name}`,
    description: metaDescription,
    alternates: {
      canonical: `/destinations/${destination.id}`,
    },
    openGraph: {
      title: `${destination.name} Tours | ${company.name}`,
      description: metaDescription,
      images: [
        {
          url: destination.image,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
  };
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedTours = getTourPackagesByDestination(destination.id);
  const jsonLd = generateDestinationJsonLd(destination, SITE_URL);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UtilityBar />
      <Header />
      <Breadcrumbs
        items={[
          { label: 'Destinations', href: '/destinations' },
          { label: destination.name },
        ]}
      />

      <main id="main-content" className="flex-1">
        <DestinationHero destination={destination} />
        <DestinationOverview destination={destination} />
        <SignatureExperiences destination={destination} />
        <ExperiencePool destination={destination} />
        <ArrivalDepartureInfo destination={destination} />
        <RelatedTourPackages destination={destination} tours={relatedTours} />
        <DestinationCTA destination={destination} />
      </main>

      <Footer />
    </>
  );
}
