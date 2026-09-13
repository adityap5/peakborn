import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, MessageSquare, Phone } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { HeroEnquiryForm } from '@/components/forms/HeroEnquiryForm';
import { getCompanyInfo } from '@/lib/data-access';

export function HeroSection() {
  const company = getCompanyInfo();
  const hasWhatsApp = Boolean(company.whatsappNumber && company.whatsappNumber.trim());

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-xs border border-white/20 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-brand-gold" />
              <span>Tailored Journeys · Unforgettable Memories</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Discover the World with <br />
              <span className="text-brand-gold">{company.name}</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-xl font-sans">
              Tailor-made India journeys crafted just for you. From iconic Golden Triangle heritage circuits to royal Rajasthan havelis, wild tiger safaris, and serene Kerala backwaters.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="/tour-packages">
                <Button variant="primary" size="lg" className="shadow-lg font-bold">
                  <span>Explore Packages</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>

              {hasWhatsApp ? (
                <a
                  href={`https://wa.me/${company.whatsappNumber!.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    company.whatsappDefaultMessage || 'Hello, I need information regarding India tour packages.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-sm font-bold shadow-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Talk to Expert</span>
                </a>
              ) : company.phone ? (
                <a
                  href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 rounded-md bg-cream-100 hover:bg-cream-200 text-brand-dark px-5 py-3 text-sm font-bold shadow-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>Talk to Expert</span>
                </a>
              ) : null}
            </div>

            {/* Floating Quick Preview Cards */}
            <div className="hidden sm:grid grid-cols-3 gap-3 pt-4 max-w-lg">
              <Link
                href="/tour-packages/delhi-agra-jaipur-5-days-golden-triangle-tour"
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/20 p-3 flex flex-col justify-end transition-transform hover:-translate-y-1"
              >
                <Image
                  src="/images/taj-mahal.jpg"
                  alt="Taj Mahal 5 Days"
                  fill
                  sizes="180px"
                  className="object-cover object-center opacity-60 group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="relative z-10 text-white">
                  <span className="text-[10px] text-amber-300 font-bold block uppercase tracking-wider">05 Days</span>
                  <strong className="text-xs font-serif block truncate">Taj Mahal &amp; GT</strong>
                </div>
              </Link>

              <Link
                href="/tour-packages/taj-mahal-sunrise-tour-from-delhi-by-car"
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/20 p-3 flex flex-col justify-end transition-transform hover:-translate-y-1"
              >
                <Image
                  src="/images/delhi-agra.webp"
                  alt="Taj Mahal Sunrise Excursion"
                  fill
                  sizes="180px"
                  className="object-cover object-center opacity-60 group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="relative z-10 text-white">
                  <span className="text-[10px] text-amber-300 font-bold block uppercase tracking-wider">Same Day</span>
                  <strong className="text-xs font-serif block truncate">Agra Sunrise</strong>
                </div>
              </Link>

              <Link
                href="/tour-packages/delhi-agra-jaipur-3-days-golden-triangle-tour"
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/20 p-3 flex flex-col justify-end transition-transform hover:-translate-y-1"
              >
                <Image
                  src="/images/golden-triangle-portrait.webp"
                  alt="Jaipur & Golden Triangle 3 Days"
                  fill
                  sizes="180px"
                  className="object-cover object-center opacity-60 group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="relative z-10 text-white">
                  <span className="text-[10px] text-amber-300 font-bold block uppercase tracking-wider">03 Days</span>
                  <strong className="text-xs font-serif block truncate">3 Days GT</strong>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Lead Capture Box (5 cols) */}
          <div id="quote-form" className="lg:col-span-5 w-full">
            <HeroEnquiryForm />
          </div>
        </div>
      </Container>

      {/* Greenlandwey-Style Stats Bar */}
      <div className="relative z-10 bg-black/60 backdrop-blur-md text-white border-t border-white/15">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 py-4 text-center">
            <div className="p-3">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">10+</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 uppercase tracking-wider">
                Years Experience
              </div>
            </div>

            <div className="p-3">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">40+</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 uppercase tracking-wider">
                Destinations Visited
              </div>
            </div>

            <div className="p-3">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">5K+</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 uppercase tracking-wider">
                Happy Travelers
              </div>
            </div>

            <div className="p-3">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">100%</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 uppercase tracking-wider">
                Custom Private Tours
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
