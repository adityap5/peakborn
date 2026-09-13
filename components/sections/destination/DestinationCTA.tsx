import React from 'react';
import { Destination } from '@/types';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/forms/ContactForm';

export interface DestinationCTAProps {
  destination: Destination;
}

export function DestinationCTA({ destination }: DestinationCTAProps) {
  return (
    <section id="enquiry-form" className="py-16 sm:py-24 bg-white">
      <Container className="max-w-4xl">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
            Start Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
            Plan Your Custom {destination.name} Holiday
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl mx-auto">
            Tell us about your dates, group size, and preferred pacing. Our destination specialists will craft a tailored proposal within 24 hours.
          </p>
        </div>

        <ContactForm className="shadow-lg border-line" />
      </Container>
    </section>
  );
}
