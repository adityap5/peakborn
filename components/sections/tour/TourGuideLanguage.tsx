import React from 'react';
import { Globe } from 'lucide-react';
import { TourPackage } from '@/types';

interface TourGuideLanguageProps {
  tour: TourPackage;
}

export function TourGuideLanguage({ tour }: TourGuideLanguageProps) {
  const languagesList =
    tour.languages && tour.languages.length > 0
      ? tour.languages.join(', ')
      : 'English, Spanish, German, French, Russian, Japanese, Italian, & Hindi.';

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-line shadow-xs space-y-3">
      <div className="border-b border-line pb-3">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark flex items-center gap-2">
          <Globe className="w-5 h-5 text-brand-gold shrink-0" />
          <span>Tour Guide Language</span>
        </h3>
      </div>

      <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
          <Globe className="w-4 h-4" />
        </div>
        <p className="leading-relaxed">
          Live Speaking Tour Guides are available in{' '}
          <strong className="text-brand-dark">{languagesList}</strong>
        </p>
      </div>
    </div>
  );
}
