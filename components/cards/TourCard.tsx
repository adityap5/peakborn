import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, ArrowRight, MessageSquare, Send } from 'lucide-react';
import { TourPackage, CompanyInfo } from '@/types';
import { Badge } from '@/components/ui/badge';
import { getCompanyInfo } from '@/lib/data-access';

export interface TourCardProps {
  tour: TourPackage;
  company?: CompanyInfo;
  className?: string;
}

export function TourCard({ tour, company: providedCompany, className = '' }: TourCardProps) {
  const company = providedCompany || getCompanyInfo();
  const hasWhatsApp = Boolean(company.whatsappNumber && company.whatsappNumber.trim());

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl bg-white border border-line shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      {/* 4:3 Aspect Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <Link href={`/tour-packages/${tour.slug}`} tabIndex={-1} aria-hidden="true">
          <Image
            src={tour.thumbnailImage || tour.heroImage}
            alt={tour.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Floating Duration Pill */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="dark" className="shadow-md flex items-center gap-1.5 py-1 px-2.5">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>{tour.durationLabel || `${tour.durationNights}N / ${tour.durationDays}D`}</span>
          </Badge>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Category Kicker */}
        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-1.5 block">
          {tour.tourType || 'Private Tour'}
        </span>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug">
          <Link href={`/tour-packages/${tour.slug}`}>
            {tour.title}
          </Link>
        </h3>

        {/* Route line */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2 mb-3">
          <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
          <span className="truncate">{tour.routeOverview}</span>
        </div>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed flex-1">
          {tour.shortDescription}
        </p>

        {/* Action Buttons Row */}
        <div className="mt-auto pt-3 border-t border-line flex items-center justify-between gap-2 flex-wrap">
          <Link
            href={`/tour-packages/${tour.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-dark hover:text-brand-primary transition-colors py-1.5"
          >
            <span>View Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Conditional Action: WhatsApp if configured, else Enquire CTA */}
          {hasWhatsApp ? (
            <a
              href={`https://wa.me/${company.whatsappNumber!.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `Hi, I would like to enquire about the package: ${tour.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1.5 text-xs font-semibold hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-[#25D366]" />
              <span>Ask on WhatsApp</span>
            </a>
          ) : (
            <Link
              href={`/tour-packages/${tour.slug}#enquiry-form`}
              className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 text-brand-dark border border-line px-3 py-1.5 text-xs font-semibold hover:bg-brand-primary hover:text-white hover:border-transparent transition-colors"
            >
              <Send className="w-3 h-3 text-brand-primary group-hover:text-white" />
              <span>Enquire Now</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
