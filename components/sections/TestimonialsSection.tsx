import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { getFeaturedTestimonials } from '@/lib/data-access';

export function TestimonialsSection() {
  const testimonials = getFeaturedTestimonials();

  return (
    <section className="py-16 sm:py-24 bg-cream-50 border-b border-line">
      <Container>
        <SectionHeading
          kicker="Guest Experiences"
          title="What Our Travelers Say"
          subtitle="Genuine reflections from travelers who experienced India with our dedicated chauffeurs and local guides."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
