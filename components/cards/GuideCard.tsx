import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { TravelGuideArticle } from '@/types';
import { Badge } from '@/components/ui/badge';

export interface GuideCardProps {
  guide: TravelGuideArticle;
  className?: string;
}

export function GuideCard({ guide, className = '' }: GuideCardProps) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl bg-white border border-line shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      {/* 4:3 Aspect Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <Link href={`/travel-guide/${guide.slug}`} tabIndex={-1} aria-hidden="true">
          <Image
            src={guide.thumbnailImage || guide.heroImage}
            alt={guide.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="cream" className="shadow-xs font-medium text-[11px]">
            {guide.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
          <Clock className="w-3.5 h-3.5" />
          <span>{guide.readTimeMinutes} min read</span>
        </div>

        <h3 className="font-serif text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug mb-2">
          <Link href={`/travel-guide/${guide.slug}`}>
            {guide.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4 flex-1">
          {guide.excerpt}
        </p>

        <div className="pt-3 border-t border-line mt-auto">
          <Link
            href={`/travel-guide/${guide.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary group-hover:text-brand-primary-hover transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
