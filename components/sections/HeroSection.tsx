import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sliders, Compass, UserCheck, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { HeroEnquiryForm } from '@/components/forms/HeroEnquiryForm';
import { getValueBenefits } from '@/lib/data-access';

export function HeroSection() {
  const benefits = getValueBenefits();

  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      {/* Background Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_banner.webp"
          alt="Taj Mahal at sunrise, India"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/60 lg:to-black/40" />
      </div>

      <Container className="relative z-10 pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Storytelling Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-xs border border-white/15 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <span>Real India. Meaningful Journeys.</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Plan Your Journey <br />
              <span className="text-amber-400">Through India</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-xl font-sans">
              Tailor-made India tours for curious travellers. From iconic imperial cities to wild tiger safaris, serene backwaters, and majestic Himalayan valleys — we help you experience the real India with dedicated local expertise.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="/tour-packages">
                <Button variant="primary" size="lg" className="shadow-lg">
                  <span>Explore Tour Packages</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>

              <a href="#quote-form">
                <Button variant="outlineInvert" size="lg">
                  <span>Plan Custom Trip</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Lead Capture Box (5 cols) */}
          <div id="quote-form" className="lg:col-span-5 w-full">
            <HeroEnquiryForm />
          </div>
        </div>
      </Container>

      {/* Trust Feature Strip Bar */}
      <div className="relative z-10 bg-white/95 text-brand-dark border-t border-line shadow-xs">
        <Container>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line py-3">
            {benefits.map((benefit, index) => {
              const icons = [Sliders, Compass, UserCheck, ShieldCheck];
              const IconComp = icons[index % icons.length];
              return (
                <li key={benefit.id} className="flex items-center gap-3.5 px-4 py-3 sm:py-2">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs sm:text-sm font-bold text-brand-dark">
                      {benefit.title}
                    </strong>
                    <span className="block text-[11px] text-gray-500 line-clamp-1">
                      {benefit.description}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </section>
  );
}
