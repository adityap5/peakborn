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
    <section className="relative bg-brand-navy text-white overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/parallax-taj.jpg"
          alt="Taj Mahal Agra India"
          fill
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/90 to-brand-navy/95 lg:bg-gradient-to-r lg:from-brand-navy/95 lg:via-brand-navy/90 lg:to-brand-navy/80" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
              Why Travel With Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Your India. <br />
              <span className="text-amber-400">Our Expertise.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
              We design personal, meaningful, and unforgettable India journeys with meticulous care, deep on-ground knowledge, and unhurried pacing.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs hover:border-amber-400/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
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
