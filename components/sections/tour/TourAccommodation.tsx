import React from 'react';
import { BedDouble, Car } from 'lucide-react';
import { TourPackage } from '@/types';

interface TourAccommodationProps {
  tour?: TourPackage;
}

export function TourAccommodation({}: TourAccommodationProps = {}) {
  return (
    <section className="space-y-6">
      <div className="border-b border-line pb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-1">
          Service Standards
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
          Accommodation &amp; Transport Standards
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Hotel Standards Card */}
        <div className="p-5 rounded-2xl bg-white border border-line shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center">
            <BedDouble className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-brand-dark">
            Tailored Hotel Categories
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Choose between verified <strong>3-Star Comfort</strong>, <strong>4-Star Superior</strong>, or <strong>5-Star Luxury &amp; Heritage Havelis</strong>. All properties are vetted for hygiene, service excellence, and verified guest reviews.
          </p>
        </div>

        {/* Private Chauffeur Vehicle Standards */}
        <div className="p-5 rounded-2xl bg-white border border-line shadow-xs space-y-3">
          <div className="w-9 h-9 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary flex items-center justify-center">
            <Car className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-brand-dark">
            Dedicated Private AC Vehicle
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Travel exclusively with your own private party in modern, air-conditioned sedans, SUVs, or luxury passenger coaches driven by seasoned, courteous English-speaking chauffeurs.
          </p>
        </div>
      </div>
    </section>
  );
}
