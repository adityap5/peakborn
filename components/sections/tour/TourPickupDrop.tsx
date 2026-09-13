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
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-dust-grey shadow-xs space-y-4">
      <div className="border-b border-dust-grey pb-3">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-jet-black flex items-center gap-2">
          <MapPin className="w-5 h-5 text-burnt-peach shrink-0" />
          <span>Pick-up &amp; Drop Location</span>
        </h3>
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-jet-black">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-burnt-peach/15 text-burnt-peach flex items-center justify-center shrink-0 mt-0.5">
            <PlaneTakeoff className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-jet-black block mb-0.5">Pick-up Location:</span>
            <p className="leading-relaxed text-jet-black/80">{pickup}</p>
          </div>
        </div>

        <hr className="border-dust-grey" />

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-desert-sand/35 text-jet-black flex items-center justify-center shrink-0 mt-0.5">
            <PlaneLanding className="w-4 h-4 text-jet-black" />
          </div>
          <div>
            <span className="font-bold text-jet-black block mb-0.5">Drop-off Location:</span>
            <p className="leading-relaxed text-jet-black/80">{drop}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
