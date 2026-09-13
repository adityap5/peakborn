import React from 'react';
import { PlaneTakeoff, PlaneLanding, MapPin } from 'lucide-react';
import { TourPackage } from '@/types';

interface TourPickupDropProps {
  tour: TourPackage;
}

export function TourPickupDrop({ tour }: TourPickupDropProps) {
  const pickup =
    tour.pickupLocation ||
    'Any hotel in Delhi, Gurgaon, Noida, or Faridabad. Pick-up is also available from Delhi Airport / Railway Station & Desired Location.';
  const drop =
    tour.dropLocation ||
    'Any hotel in Delhi, Gurgaon, Noida, or Faridabad. Drop is also available at Delhi Airport / Railway Station & Desired Location.';

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-line shadow-xs space-y-4">
      <div className="border-b border-line pb-3">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark flex items-center gap-2">
          <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
          <span>Pick-up &amp; Drop Location</span>
        </h3>
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-gray-700">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
            <PlaneTakeoff className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-brand-dark block mb-0.5">Pick-up Location:</span>
            <p className="leading-relaxed text-gray-600">{pickup}</p>
          </div>
        </div>

        <hr className="border-line/60" />

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
            <PlaneLanding className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-brand-dark block mb-0.5">Drop-off Location:</span>
            <p className="leading-relaxed text-gray-600">{drop}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
