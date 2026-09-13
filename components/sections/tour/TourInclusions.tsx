import React from 'react';
import { CheckSquare, XSquare, CheckCheck } from 'lucide-react';
import { TourPackage } from '@/types';

interface TourInclusionsProps {
  tour: TourPackage;
}

export function TourInclusions({ tour }: TourInclusionsProps) {
  const hasInclusions = tour.inclusions && tour.inclusions.length > 0;
  const hasExclusions = tour.exclusions && tour.exclusions.length > 0;

  if (!hasInclusions && !hasExclusions) return null;

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-line shadow-xs space-y-5">
      <div className="border-b border-line pb-3">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark flex items-center gap-2">
          <CheckCheck className="w-5 h-5 text-brand-gold shrink-0" />
          <span>Includes &amp; Excludes</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inclusions Box */}
        {hasInclusions && (
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-2">
              <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Package Includes</span>
            </span>

            <ul className="space-y-2.5">
              {tour.inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-snug">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Exclusions Box */}
        {hasExclusions && (
          <div className="space-y-3 md:border-l md:border-line/70 md:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5 mb-2">
              <XSquare className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Package Excludes</span>
            </span>

            <ul className="space-y-2.5">
              {tour.exclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-snug">
                  <XSquare className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
