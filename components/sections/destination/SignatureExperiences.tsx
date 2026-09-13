import React from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { Destination } from '@/types';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';

export interface SignatureExperiencesProps {
  destination: Destination;
}

export function SignatureExperiences({ destination }: SignatureExperiencesProps) {
  if (!destination.signature || destination.signature.length === 0) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-dust-grey">
      <Container>
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-burnt-peach mb-2">
            <Sparkles className="w-4 h-4 text-burnt-peach" />
            <span>Curated Moments</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-jet-black tracking-tight leading-tight">
            Signature Experiences in {destination.name}
          </h2>
          <p className="text-sm text-jet-black/75 mt-2">
            Unmissable encounters handcrafted by our local destination specialists to give you an authentic perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destination.signature.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col p-6 sm:p-8 rounded-2xl bg-platinum/40 border border-dust-grey shadow-xs hover:border-desert-sand transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <Badge variant="gold" className="uppercase text-[10px] tracking-wider">
                  Signature Experience
                </Badge>
                <Compass className="w-5 h-5 text-burnt-peach" />
              </div>

              <h3 className="font-serif text-xl font-bold text-jet-black mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-jet-black/85 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
