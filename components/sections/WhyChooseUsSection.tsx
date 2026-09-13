import React from 'react';
import Image from 'next/image';
import { Sliders, Compass, UserCheck, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export function WhyChooseUsSection() {
  const points = [
    {
      icon: Sliders,
      title: '100% Tailor-Made Pacing',
      description: 'Handcrafted itineraries shaped around your personal interests, preferred hotel styles, and schedule.',
    },
    {
      icon: UserCheck,
      title: 'Dedicated Chauffeur & Guides',
      description: 'Private air-conditioned transport with vetted chauffeurs and licensed local monument historians.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliable On-Ground Coordination',
      description: 'Continuous trip monitoring and responsive local support from airport greeting through departure.',
    },
    {
      icon: Compass,
      title: 'Genuine Local Perspective',
      description: 'Carefully curated dining, heritage walks, and artisan interactions free from forced commercial detours.',
    },
  ];

  return (
    <section className="relative bg-jet-black text-white overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/parallax-taj.jpg"
          alt="Taj Mahal Agra India"
          fill
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jet-black/95 via-jet-black/90 to-jet-black/95 lg:bg-gradient-to-r lg:from-jet-black/95 lg:via-jet-black/90 lg:to-jet-black/80" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-desert-sand block">
              Why Travel With Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Your India. <br />
              <span className="text-desert-sand">Our Expertise.</span>
            </h2>
            <p className="text-sm sm:text-base text-dust-grey leading-relaxed font-sans pt-2">
              We design personal, meaningful, and unforgettable India journeys with meticulous care, deep on-ground knowledge, and unhurried pacing.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs hover:border-desert-sand/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-desert-sand/15 text-desert-sand flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-platinum mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-dust-grey leading-relaxed font-sans">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
