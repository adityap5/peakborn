import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Clock,
  Compass,
  Users,
  MapPin,
  ShieldCheck,
  Phone,
  MessageSquare,
  Award,
  Globe,
  Navigation,
  CheckCircle2,
} from 'lucide-react';
import { getAllTourPackages, getTourPackageBySlug, getCompanyInfo } from '@/lib/data-access';
import { generateTourJsonLd } from '@/lib/seo';
import { SITE_URL } from '@/lib/config';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TourHero } from '@/components/sections/tour/TourHero';
import { TourOverview } from '@/components/sections/tour/TourOverview';
import { TourPickupDrop } from '@/components/sections/tour/TourPickupDrop';
import { TourGuideLanguage } from '@/components/sections/tour/TourGuideLanguage';
import { TourHighlights } from '@/components/sections/tour/TourHighlights';
import { TourItinerary } from '@/components/sections/tour/TourItinerary';
import { TourInclusions } from '@/components/sections/tour/TourInclusions';
import { TourAccommodation } from '@/components/sections/tour/TourAccommodation';
import { TourGallery } from '@/components/sections/tour/TourGallery';
import { TourFAQ } from '@/components/sections/tour/TourFAQ';
import { RelatedTours } from '@/components/sections/tour/RelatedTours';
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

  const jsonLd = generateTourJsonLd(tour, company, SITE_URL);
  const hasWhatsApp = Boolean(company.whatsappNumber && company.whatsappNumber.trim());

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
        {/* Greenlandwey-Style Tour Hero Banner */}
        <TourHero tour={tour} company={company} />

        {/* 2-Column Main Content & Sticky Sidebar Grid */}
        <section className="py-12 sm:py-16 bg-platinum/40">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
              {/* Left Main Content Column (2/3) */}
              <div className="lg:col-span-2 space-y-8 sm:space-y-10">
                {/* 1. Overview */}
                <TourOverview tour={tour} />

                {/* 2. Pick-up & Drop Location */}
                <TourPickupDrop tour={tour} />

                {/* 3. Tour Guide Language */}
                <TourGuideLanguage tour={tour} />

                {/* 4. Highlights & Signature Experiences */}
                <TourHighlights tour={tour} />

                {/* 5. Inclusions & Exclusions */}
                <TourInclusions tour={tour} />

                {/* 6. Detailed Day-by-Day Itinerary */}
                <TourItinerary itinerary={tour.itinerary} />

                {/* 7. Accommodation & Transport Standards */}
                <TourAccommodation tour={tour} />

                {/* 8. Photo Gallery */}
                <TourGallery images={tour.galleryImages} title={tour.title} />

                {/* 9. FAQs */}
                <TourFAQ faqs={tour.faqs} />
              </div>

              {/* Right Sticky Sidebar (1/3) */}
              <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-28">
                {/* Quick Facts Card */}
                <div className="p-6 rounded-2xl bg-white border border-dust-grey shadow-xs space-y-4">
                  <h3 className="font-serif text-lg font-bold text-jet-black pb-3 border-b border-dust-grey flex items-center gap-2">
                    <Award className="w-4 h-4 text-burnt-peach" />
                    <span>Quick Tour Facts</span>
                  </h3>

                  <dl className="space-y-3.5 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                      <div>
                        <dt className="text-jet-black/60 font-medium">Duration</dt>
                        <dd className="font-semibold text-jet-black mt-0.5">
                          {tour.durationLabel}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Compass className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                      <div>
                        <dt className="text-jet-black/60 font-medium">Tour Routing</dt>
                        <dd className="font-semibold text-jet-black mt-0.5">
                          {tour.startingPoint || tour.routeCities[0]} &rarr;{' '}
                          {tour.endingPoint || tour.routeCities[tour.routeCities.length - 1]}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                      <div>
                        <dt className="text-jet-black/60 font-medium">Tour Type</dt>
                        <dd className="font-semibold text-jet-black mt-0.5">
                          {tour.tourType} (100% Private)
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                      <div>
                        <dt className="text-jet-black/60 font-medium">Best Suited For</dt>
                        <dd className="font-semibold text-jet-black mt-0.5">
                          {tour.bestFor}
                        </dd>
                      </div>
                    </div>

                    {tour.pickupLocation && (
                      <div className="flex items-start gap-3">
                        <Navigation className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                        <div>
                          <dt className="text-jet-black/60 font-medium">Pickup &amp; Drop</dt>
                          <dd className="font-semibold text-jet-black mt-0.5">
                            {tour.pickupLocation}
                          </dd>
                        </div>
                      </div>
                    )}

                    {tour.languages && tour.languages.length > 0 && (
                      <div className="flex items-start gap-3">
                        <Globe className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                        <div>
                          <dt className="text-jet-black/60 font-medium">Guide Languages</dt>
                          <dd className="font-semibold text-jet-black mt-0.5">
                            {tour.languages.join(', ')}
                          </dd>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-burnt-peach shrink-0 mt-0.5" />
                      <div>
                        <dt className="text-jet-black/60 font-medium">Destinations</dt>
                        <dd className="font-semibold text-jet-black mt-0.5">
                          {tour.routeOverview}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                {/* Interactive Sticky Enquiry Form Card */}
                <div id="enquiry-form" className="scroll-mt-28">
                  <TourEnquiryForm
                    tourTitle={tour.title}
                    tourSlug={tour.slug}
                    className="shadow-md"
                  />
                </div>

                {/* Why Book With Us Card */}
                <div className="p-6 rounded-2xl bg-jet-black text-white shadow-xs space-y-4">
                  <h3 className="font-serif text-base font-bold text-desert-sand flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-desert-sand" />
                    <span>Why Book With {company.name}</span>
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-platinum/90">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-desert-sand shrink-0 mt-0.5" />
                      <span><strong>100% Tailored:</strong> Customize pacing, hotel tiers, and route sights freely.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-desert-sand shrink-0 mt-0.5" />
                      <span><strong>Private AC Vehicles:</strong> Courteous English-speaking chauffeurs dedicated to you.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-desert-sand shrink-0 mt-0.5" />
                      <span><strong>Inspected Stays:</strong> Verified 3-star, 4-star, and 5-star luxury heritage properties.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-desert-sand shrink-0 mt-0.5" />
                      <span><strong>24/7 Trip Support:</strong> Dedicated concierge assistance throughout your travels.</span>
                    </li>
                  </ul>
                </div>

                {/* Direct Contact Card (Conditional) */}
                {(company.phone || hasWhatsApp) && (
                  <div className="p-5 rounded-xl bg-white border border-dust-grey shadow-xs space-y-3 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-jet-black/60 block">
                      Prefer To Speak Directly?
                    </span>
                    <div className="flex flex-col gap-2">
                      {company.phone && (
                        <a
                          href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-desert-sand/25 hover:bg-desert-sand/40 text-jet-black px-4 py-2 text-xs font-bold transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-burnt-peach" />
                          <span>Call: {company.phone}</span>
                        </a>
                      )}
                      {hasWhatsApp && (
                        <a
                          href={`https://wa.me/${company.whatsappNumber!.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hi, I have a question about the tour: ${tour.title}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-xs font-bold transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Instant WhatsApp Chat</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </aside>
            </div>

            {/* Bottom Related Tours Section */}
            <div className="mt-16 sm:mt-20">
              <RelatedTours currentSlug={tour.slug} />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
