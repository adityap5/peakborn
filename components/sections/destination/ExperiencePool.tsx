import React from 'react';
import { Layers } from 'lucide-react';
import { Destination } from '@/types';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';

export interface ExperiencePoolProps {
  destination: Destination;
}

const tagLabels: Record<string, { label: string; variant: 'default' | 'gold' | 'dark' | 'outline' | 'cream' }> = {
  culture: { label: 'Culture & Heritage', variant: 'default' },
  cuisine: { label: 'Local Cuisine', variant: 'gold' },
  adventure: { label: 'Wildlife & Adventure', variant: 'cream' },
  wellness: { label: 'Wellness & Relaxation', variant: 'outline' },
  nightlife: { label: 'Evening Experience', variant: 'dark' },
  photography: { label: 'Photography', variant: 'default' },
  signature: { label: 'Signature', variant: 'gold' },
};

export function ExperiencePool({ destination }: ExperiencePoolProps) {
  if (!destination.pool || destination.pool.length === 0) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 bg-cream-50 border-b border-line">
      <Container>
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
            <Layers className="w-4 h-4 text-brand-primary" />
            <span>Curated Catalog</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
            Things to Experience in {destination.name}
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Explore diverse activities that can be tailored into your custom itinerary based on your travel interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {destination.pool.map((item, idx) => {
            const tagConfig = tagLabels[item.tag] || { label: item.tag, variant: 'outline' };
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-white border border-line shadow-xs hover:border-brand-primary/40 transition-all duration-300"
              >
                <div>
                  <div className="mb-3">
                    <Badge variant={tagConfig.variant} className="text-[10px] uppercase tracking-wider font-semibold">
                      {tagConfig.label}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-brand-dark mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
