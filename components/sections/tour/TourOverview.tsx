import React from 'react';
import { BookOpen } from 'lucide-react';
import { TourPackage } from '@/types';

interface TourOverviewProps {
  tour: TourPackage;
}

export function TourOverview({ tour }: TourOverviewProps) {
  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-dust-grey shadow-xs space-y-4">
      <div className="border-b border-dust-grey pb-3">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-jet-black flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-burnt-peach shrink-0" />
          <span>Overview</span>
        </h3>
      </div>

      <div className="text-xs sm:text-sm text-jet-black/85 leading-relaxed space-y-3 font-sans">
        <p className="leading-relaxed">
          {tour.fullOverview || tour.shortDescription}
        </p>
      </div>
    </div>
  );
}
