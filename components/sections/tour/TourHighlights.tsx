import React from 'react';
import { Send, Sparkles } from 'lucide-react';
import { TourPackage } from '@/types';

interface TourHighlightsProps {
  tour: TourPackage;
}

export function TourHighlights({ tour }: TourHighlightsProps) {
  const hasHighlights = tour.highlights && tour.highlights.length > 0;
  const hasSignatures = tour.signatureExperiences && tour.signatureExperiences.length > 0;

  if (!hasHighlights && !hasSignatures) return null;

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-dust-grey shadow-xs space-y-5">
      <div className="border-b border-dust-grey pb-3">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-jet-black flex items-center gap-2">
          <Send className="w-5 h-5 text-burnt-peach shrink-0" />
          <span>Highlights</span>
        </h3>
      </div>

      {/* Bullet Highlights Grid */}
      {hasHighlights && (
        <div className="space-y-3">
          {tour.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl bg-platinum/60 border border-dust-grey/70"
            >
              <div className="w-6 h-6 rounded-md bg-burnt-peach/15 text-burnt-peach flex items-center justify-center shrink-0 mt-0.5">
                <Send className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-jet-black leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Signature Experiences Cards */}
      {hasSignatures && (
        <div className="space-y-3 pt-3 border-t border-dust-grey/70">
          <h4 className="text-xs font-bold uppercase tracking-wider text-burnt-peach flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-burnt-peach" />
            <span>Signature Experiences Included</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {tour.signatureExperiences!.map((exp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-platinum/40 border border-dust-grey shadow-2xs space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <h5 className="font-serif font-bold text-sm text-jet-black">
                    {exp.title}
                  </h5>
                  {exp.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-desert-sand/25 text-jet-black border border-desert-sand/60 shrink-0">
                      {exp.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-jet-black/80 leading-relaxed">
                  {exp.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
