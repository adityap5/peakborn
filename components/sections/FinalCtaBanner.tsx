import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { getCompanyInfo } from '@/lib/data-access';

export function FinalCtaBanner() {
  const company = getCompanyInfo();
  const hasWhatsApp = Boolean(company.whatsappNumber && company.whatsappNumber.trim());

  return (
    <section className="relative bg-jet-black text-white overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lower_banner.webp"
          alt="Taj Mahal Silhouette India"
          fill
          sizes="100vw"
          className="object-cover object-[center_40%] opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-jet-black/90 to-black/90" />
      </div>

      <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-desert-sand bg-black/40 px-3.5 py-1 rounded-full border border-white/10">
          Start Your Custom Holiday
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Let’s Plan Your India Journey
        </h2>

        <p className="text-sm sm:text-base text-platinum/90 leading-relaxed font-sans max-w-xl mx-auto">
          Share your dates, interests, and preferred pacing. Our destination specialists will craft a complimentary customized itinerary tailored to your vision.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="shadow-lg font-bold">
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>

          {hasWhatsApp && (
            <a
              href={`https://wa.me/${company.whatsappNumber!.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                company.whatsappDefaultMessage || 'Hi, I would like to enquire about an India tour package.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="shadow-lg">
                <MessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </Button>
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
