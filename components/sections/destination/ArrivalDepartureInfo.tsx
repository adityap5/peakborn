import React from 'react';
import { PlaneLanding, PlaneTakeoff, ShieldCheck } from 'lucide-react';
import { Destination } from '@/types';
import { Container } from '@/components/layout/Container';

export interface ArrivalDepartureInfoProps {
  destination: Destination;
}

export function ArrivalDepartureInfo({ destination }: ArrivalDepartureInfoProps) {
  if (!destination.arrivalNote && !destination.departureNote) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-dust-grey">
      <Container>
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-burnt-peach block mb-2">
            Seamless Ground Logistics
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-jet-black tracking-tight leading-tight">
            Arrival &amp; Departure Briefing
          </h2>
          <p className="text-sm text-jet-black/75 mt-2">
            How we manage your on-ground transitions to ensure stress-free travel from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Arrival Logistics */}
          {destination.arrivalNote && (
            <div className="p-6 sm:p-8 rounded-2xl bg-platinum/40 border border-dust-grey shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <PlaneLanding className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-jet-black mb-3">
                Arrival &amp; On-Ground Welcome
              </h3>
              <p className="text-sm text-jet-black/85 leading-relaxed font-sans">
                {destination.arrivalNote}
              </p>
            </div>
          )}

          {/* Departure Logistics */}
          {destination.departureNote && (
            <div className="p-6 sm:p-8 rounded-2xl bg-platinum/40 border border-dust-grey shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-burnt-peach/15 text-burnt-peach flex items-center justify-center mb-4">
                <PlaneTakeoff className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-jet-black mb-3">
                Departure &amp; Final Transfers
              </h3>
              <p className="text-sm text-jet-black/85 leading-relaxed font-sans">
                {destination.departureNote}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-white border border-dust-grey flex items-center gap-3 text-xs text-jet-black/80 max-w-3xl">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            <strong>Dedicated Chauffeur Support:</strong> Your vehicle and driver are exclusively dedicated to your party throughout your entire journey in {destination.name}.
          </span>
        </div>
      </Container>
    </section>
  );
}
