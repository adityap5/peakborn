import React from 'react';
import Image from 'next/image';
import { Clock, ShieldCheck, MapPin, ArrowRight, MessageSquare, Star, Globe, Navigation } from 'lucide-react';
import { TourPackage, CompanyInfo } from '@/types';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TourHeroProps {
  tour: TourPackage;
  company: CompanyInfo;
}

export function TourHero({ tour, company }: TourHeroProps) {
  const hasWhatsApp = Boolean(company.whatsappNumber && company.whatsappNumber.trim());

  return (
    <section className="relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden bg-jet-black text-white py-14 sm:py-20">
      <Image
        src={tour.heroImage}
        alt={tour.title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
        {/* Top Badges Row */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Badge variant="dark" className="bg-black/60 border border-white/20 py-1 px-3 text-xs flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-desert-sand" />
            <span>{tour.durationLabel}</span>
          </Badge>

          <Badge variant="dark" className="bg-black/60 border border-white/20 py-1 px-3 text-xs flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{tour.tourType}</span>
          </Badge>

          <div className="inline-flex items-center gap-1 bg-black/60 border border-white/20 rounded-full px-3 py-1 text-xs text-desert-sand font-semibold">
            <Star className="w-3 h-3 fill-desert-sand text-desert-sand" />
            <span>5.0</span>
            <span className="text-white/70 text-[11px]">(Verified Private Tour)</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight">
          {tour.title}
        </h1>

        {/* Route Line */}
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-platinum/90 font-medium">
          <MapPin className="w-4 h-4 text-desert-sand shrink-0" />
          <span>{tour.routeOverview}</span>
        </div>

        {/* Secondary Metadata: Pickup & Languages */}
        {(tour.pickupLocation || (tour.languages && tour.languages.length > 0)) && (
          <div className="flex items-center justify-center gap-4 text-xs text-dust-grey flex-wrap pt-1">
            {tour.pickupLocation && (
              <div className="flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-desert-sand shrink-0" />
                <span>Pickup: {tour.pickupLocation}</span>
              </div>
            )}
            {tour.languages && tour.languages.length > 0 && (
              <div className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-desert-sand shrink-0" />
                <span>Guides: {tour.languages.join(', ')}</span>
              </div>
            )}
          </div>
        )}

        {/* Action CTAs */}
        <div className="pt-4 flex items-center justify-center gap-3 flex-wrap">
          <a href="#enquiry-form">
            <Button variant="primary" size="lg" className="shadow-lg font-bold">
              <span>Enquire About This Tour</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>

          {hasWhatsApp && (
            <a
              href={`https://wa.me/${company.whatsappNumber!.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                company.whatsappDefaultMessage || `Hi, I am interested in: ${tour.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-sm font-semibold shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          )}

          <a href="#itinerary">
            <Button variant="outlineInvert" size="lg">
              <span>View Itinerary</span>
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
