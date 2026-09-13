import React from 'react';
import { MapPin, Utensils, BedDouble, CalendarDays } from 'lucide-react';
import { TourItineraryDay } from '@/types';

interface TourItineraryProps {
  itinerary: TourItineraryDay[];
}

export function TourItinerary({ itinerary }: TourItineraryProps) {
  if (!itinerary || itinerary.length === 0) return null;

  return (
    <div id="itinerary" className="p-6 sm:p-7 rounded-2xl bg-white border border-line shadow-xs space-y-6 scroll-mt-24">
      <div className="border-b border-line pb-3">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-brand-gold shrink-0" />
          <span>Itinerary</span>
        </h3>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-primary/20 space-y-7 ml-3 sm:ml-4">
        {itinerary.map((day) => (
          <div key={day.dayNumber} className="relative group">
            {/* Timeline Polygon/Circle Step Badge */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-navy text-white font-serif font-bold text-xs flex items-center justify-center shadow-md border-2 border-white">
              {day.dayNumber}
            </div>

            {/* Day Content */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="font-serif text-base sm:text-lg font-bold text-brand-dark leading-snug">
                  {day.title}
                </h4>
                {day.location && (
                  <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1 shrink-0">
                    <MapPin className="w-3 h-3 text-brand-gold" />
                    <span>{day.location}</span>
                  </span>
                )}
              </div>

              {day.time && (
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold block">
                  {day.time}
                </span>
              )}

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans pt-1">
                {day.description}
              </p>

              {/* Meals & Stay Line */}
              {(day.mealsIncluded || day.overnightStay) && (
                <div className="flex items-center gap-4 pt-2 text-xs text-gray-500 flex-wrap">
                  {day.mealsIncluded && day.mealsIncluded.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>
                        <strong className="text-gray-700">Meals:</strong> {day.mealsIncluded.join(', ')}
                      </span>
                    </div>
                  )}

                  {day.overnightStay && (
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>
                        <strong className="text-gray-700">Stay:</strong> {day.overnightStay}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
