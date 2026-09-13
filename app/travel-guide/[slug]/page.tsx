import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, Calendar, User, CheckCircle } from 'lucide-react';
import { getAllTravelGuides, getTravelGuideBySlug, getTourPackageBySlug, getCompanyInfo } from '@/lib/data-access';
import { generateArticleJsonLd } from '@/lib/seo';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { TourCard } from '@/components/cards/TourCard';

interface TravelGuideArticleProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guides = getAllTravelGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: TravelGuideArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getTravelGuideBySlug(slug);
  const company = getCompanyInfo();

  if (!guide) {
    return {
      title: `Article Not Found | ${company.name}`,
    };
  }

  return {
    title: `${guide.title} | ${company.name}`,
    description: guide.excerpt,
    alternates: {
      canonical: `/travel-guide/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | ${company.name}`,
      description: guide.excerpt,
      images: [
        {
          url: guide.heroImage,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
  };
}

export default async function TravelGuideArticlePage({ params }: TravelGuideArticleProps) {
  const { slug } = await params;
  const guide = getTravelGuideBySlug(slug);
  const company = getCompanyInfo();

  if (!guide) {
    notFound();
  }

  const jsonLd = generateArticleJsonLd(guide, company, 'https://company-domain.com');

  const recommendedTours = (guide.recommendedTourSlugs || [])
    .map((tourSlug) => getTourPackageBySlug(tourSlug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

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
          { label: 'Travel Guide', href: '/travel-guide' },
          { label: guide.title },
        ]}
      />

      <main id="main-content" className="flex-1 py-12 sm:py-16 bg-platinum/40">
        <Container className="max-w-4xl">
          {/* Article Header */}
          <article className="bg-white rounded-2xl p-6 sm:p-10 border border-dust-grey shadow-xs space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="gold" className="text-xs font-semibold">
                {guide.category}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-jet-black/60">
                <Clock className="w-3.5 h-3.5" />
                <span>{guide.readTimeMinutes} min read</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-jet-black/60">
                <Calendar className="w-3.5 h-3.5" />
                <span>{guide.publishedAt}</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jet-black tracking-tight leading-tight">
              {guide.title}
            </h1>

            <p className="text-base sm:text-lg text-jet-black/85 leading-relaxed font-serif italic border-l-4 border-desert-sand pl-4 py-1">
              {guide.excerpt}
            </p>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-platinum">
              <Image
                src={guide.heroImage}
                alt={guide.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-[center_35%]"
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-8 pt-4">
              {guide.contentSections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  {section.heading && (
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-jet-black pt-2">
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-jet-black/85 leading-relaxed font-sans">
                      {p}
                    </p>
                  ))}

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2 pt-2">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-2.5 text-sm text-jet-black/85">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Author box */}
            <div className="pt-8 border-t border-dust-grey flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-burnt-peach/15 text-burnt-peach flex items-center justify-center font-bold font-serif text-sm">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm text-jet-black">{guide.author.name}</div>
                <div className="text-xs text-jet-black/60">{guide.author.role} &middot; {company.name}</div>
              </div>
            </div>
          </article>

          {/* Recommended Tours Section */}
          {recommendedTours.length > 0 && (
            <div className="mt-14 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-burnt-peach block mb-1">
                  Connected Journeys
                </span>
                <h2 className="font-serif text-2xl font-bold text-jet-black">
                  Recommended Tour Packages
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
}
