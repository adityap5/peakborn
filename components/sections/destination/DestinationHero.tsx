import React from 'react';
import Image from 'next/image';
import { Clock, Calendar, Plane, MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '@/types';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface DestinationHeroProps {
  destination: Destination;
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden bg-brand-navy text-white py-16 sm:py-20">
      {/* Background Image with Cinematic Overlay */}
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Tagline kicker */}
        {destination.tagline && (
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300 mb-3 bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-xs border border-white/10">
            {destination.tagline}
          </span>
        )}

        {/* Destination Name */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
          {destination.name}
        </h1>

        {/* Region */}
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-slate-200 mb-6 font-medium">
          <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
          <span>{destination.region}</span>
        </div>

        {/* Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <Badge variant="dark" className="bg-black/60 border border-white/20 px-3 py-1.5 text-xs">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{destination.daysRecommended[0]}–{destination.daysRecommended[1]} Days Recommended</span>
          </Badge>

          <Badge variant="dark" className="bg-black/60 border border-white/20 px-3 py-1.5 text-xs">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Best: {destination.bestSeason}</span>
          </Badge>

          {destination.flightTime && (
            <Badge variant="dark" className="bg-black/60 border border-white/20 px-3 py-1.5 text-xs">
              <Plane className="w-3.5 h-3.5 text-amber-400" />
              <span>{destination.flightTime}</span>
            </Badge>
          )}
        </div>

        {/* Hero CTAs */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a href="#enquiry-form">
            <Button variant="primary" size="lg" className="shadow-lg">
              <span>Plan {destination.name} Trip</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
          <a href="#tours">
            <Button variant="outlineInvert" size="lg">
              <span>View Packages</span>
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
