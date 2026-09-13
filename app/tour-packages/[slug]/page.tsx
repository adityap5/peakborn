import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Clock,
  MapPin,
  Check,
  X,
  Compass,
  Users,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { getAllTourPackages, getTourPackageBySlug, getCompanyInfo } from '@/lib/data-access';
import { generateTourJsonLd } from '@/lib/seo';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TourEnquiryForm } from '@/components/forms/TourEnquiryForm';

interface TourPackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tours = getAllTourPackages();
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: TourPackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourPackageBySlug(slug);
  const company = getCompanyInfo();

  if (!tour) {
    return {
      title: `Tour Package Not Found | ${company.name}`,
    };
  }

  return {
    title: `${tour.title} | ${tour.durationLabel} | ${company.name}`,
    description: tour.shortDescription,
    alternates: {
      canonical: `/tour-packages/${tour.slug}`,
    },
    openGraph: {
      title: `${tour.title} | ${company.name}`,
      description: tour.shortDescription,
      images: [
        {
          url: tour.heroImage,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
  };
}

export default async function TourPackageDetailPage({ params }: TourPackagePageProps) {
  const { slug } = await params;
  const tour = getTourPackageBySlug(slug);
  const company = getCompanyInfo();

  if (!tour) {
    notFound();
  }

  const jsonLd = generateTourJsonLd(tour, company, 'https://company-domain.com');

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
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: tour.title },
        ]}
      />

      <main id="main-content" className="flex-1">
        {/* Tour Hero Banner */}
        <section className="relative min-h-[440px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-navy text-white py-14 sm:py-18">
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

          <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="dark" className="bg-black/60 border border-white/20 py-1 px-3 text-xs">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{tour.durationLabel}</span>
              </Badge>

              <Badge variant="dark" className="bg-black/60 border border-white/20 py-1 px-3 text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{tour.tourType}</span>
              </Badge>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              {tour.title}
            </h1>

            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-slate-200 font-medium">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{tour.routeOverview}</span>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3 flex-wrap">
              <a href="#enquiry-form">
                <Button variant="primary" size="lg" className="shadow-lg font-bold">
                  <span>Enquire About This Tour</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>

              <a href="#itinerary">
                <Button variant="outlineInvert" size="lg">
                  <span>View Itinerary</span>
                </Button>
              </a>
            </div>
          </Container>
        </section>

        {/* Overview & Quick Facts Section */}
        <section className="py-12 sm:py-16 bg-cream-50 border-b border-line">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
              {/* Left Overview Column */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-1.5">
                    Tour Overview
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight">
                    About This Itinerary
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                  {tour.fullOverview || tour.shortDescription}
                </p>

                {/* Key Highlights */}
                {tour.highlights && tour.highlights.length > 0 && (
                  <div className="pt-3">
                    <h3 className="font-serif text-lg font-bold text-brand-dark mb-3">
                      Tour Highlights
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {tour.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-white p-3 rounded-lg border border-line shadow-xs font-medium"
                        >
                          <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Quick Facts Box */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-line shadow-xs">
                <h3 className="font-serif text-lg font-bold text-brand-dark pb-3 border-b border-line mb-4">
                  Quick Facts
                </h3>

                <dl className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-gray-500 font-medium">Duration</dt>
                      <dd className="font-semibold text-brand-dark mt-0.5">
                        {tour.durationLabel}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Compass className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-gray-500 font-medium">Starting &amp; Ending City</dt>
                      <dd className="font-semibold text-brand-dark mt-0.5">
                        {tour.startingPoint} &rarr; {tour.endingPoint}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-gray-500 font-medium">Best For</dt>
                      <dd className="font-semibold text-brand-dark mt-0.5">
                        {tour.bestFor}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-gray-500 font-medium">Destinations Visited</dt>
                      <dd className="font-semibold text-brand-dark mt-0.5">
                        {tour.routeOverview}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </Container>
        </section>

        {/* Day-by-Day Itinerary Section */}
        <section id="itinerary" className="py-14 sm:py-20 bg-white border-b border-line">
          <Container className="max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
                Day-by-Day Plan
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
                Detailed Itinerary
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Every day is paced comfortably with your private vehicle and dedicated local guide.
              </p>
            </div>

            <div className="space-y-6">
              {tour.itinerary.map((day) => (
                <div
                  key={day.dayNumber}
                  className="p-6 sm:p-7 rounded-2xl bg-cream-50/60 border border-line shadow-xs hover:border-brand-primary/40 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant="gold" className="font-bold text-xs uppercase tracking-wider">
                      Day {day.dayNumber}
                    </Badge>
                    <span className="text-xs font-semibold text-brand-dark/70 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                      <span>{day.location}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark mb-2.5">
                    {day.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans mb-3">
                    {day.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-3 border-t border-line/60">
                    {day.mealsIncluded && day.mealsIncluded.length > 0 && (
                      <div>
                        <strong>Meals:</strong> {day.mealsIncluded.join(', ')}
                      </div>
                    )}
                    {day.overnightStay && (
                      <div>
                        <strong>Stay:</strong> {day.overnightStay}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Visual Journey / Gallery Showcase */}
        {tour.galleryImages && tour.galleryImages.length > 0 && (
          <section className="py-14 sm:py-20 bg-cream-50/70 border-b border-line">
            <Container className="max-w-5xl">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
                  Visual Journey
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
                  Experience Highlights
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {tour.galleryImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-200 border border-line shadow-xs group"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${tour.title} scene ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Inclusions & Exclusions */}
        <section className="py-14 sm:py-20 bg-white border-b border-line">
          <Container className="max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
                What’s Covered
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
                Inclusions &amp; Exclusions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-line shadow-xs">
                <h3 className="font-serif text-lg font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Package Inclusions</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                  {tour.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-line shadow-xs">
                <h3 className="font-serif text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-gray-400 shrink-0" />
                  <span>Package Exclusions</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                  {tour.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        {tour.faqs && tour.faqs.length > 0 && (
          <section className="py-14 sm:py-20 bg-white border-b border-line">
            <Container className="max-w-4xl">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>Common Questions</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {tour.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 sm:p-6 rounded-xl bg-cream-50 border border-line">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-brand-dark mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Contextual Enquiry Form Section */}
        <section id="enquiry-form" className="py-16 sm:py-24 bg-cream-100/60">
          <Container className="max-w-3xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-1">
                Custom Planning
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight">
                Request Custom Itinerary &amp; Quote
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Share your dates and preferences to receive a tailored itinerary and private quote.
              </p>
            </div>

            <TourEnquiryForm tourTitle={tour.title} tourSlug={tour.slug} className="shadow-lg" />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
