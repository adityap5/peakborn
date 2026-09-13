import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = 'View All',
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12',
        align === 'center' && 'text-center md:items-center md:flex-col',
        className
      )}
    >
      <div className={align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}>
        {kicker && (
          <span className="block text-xs font-bold uppercase tracking-widest text-burnt-peach mb-2">
            {kicker}
          </span>
        )}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-jet-black tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-jet-black/75 leading-relaxed font-sans">
            {subtitle}
          </p>
        )}
      </div>

      {viewAllHref && (
        <div className={cn('shrink-0', align === 'center' && 'mt-4')}>
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-burnt-peach hover:text-burnt-peach-hover transition-colors group"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
