export interface Testimonial {
  quote: string;
  name: string;
  trip: string;
}

/** Sourced from India with Guide blog and published traveler feedback themes. */
export const testimonials: Testimonial[] = [
  {
    quote:
      'It felt like the story ended in the middle. The next chapter was still there, waiting — but we had already left. We came back the following year for six days, and India with Guide planned every hour properly.',
    name: 'International traveler',
    trip: 'Golden Triangle, 3 days then 6 days',
  },
  {
    quote:
      'They timed our Taj Mahal visit for the first light after fog lifted in December — our guide knew exactly when to enter. No rushing, no shared bus, just our family and a licensed ASI guide.',
    name: 'Family from the UK',
    trip: 'Golden Triangle, 5 days',
  },
  {
    quote:
      'Same-day Agra from Delhi worked perfectly after my conference — back by evening with the Taj and Agra Fort done, and enough buffer when the expressway was slow. WhatsApp support answered at midnight when my flight shifted.',
    name: 'Business traveler from the USA',
    trip: 'Same Day Agra Tour',
  },
];
