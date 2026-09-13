import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { Testimonial } from '@/types';

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = '' }: TestimonialCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border border-line shadow-xs ${className}`}
    >
      <Quote className="absolute top-5 right-5 w-8 h-8 text-cream-200/80 -scale-x-100" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-amber-500 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <blockquote className="text-sm text-gray-700 leading-relaxed italic mb-6">
          &ldquo;{testimonial.comment}&rdquo;
        </blockquote>
      </div>

      {/* Author details */}
      <div className="pt-4 border-t border-line flex items-center justify-between gap-2">
        <div>
          <div className="font-serif font-bold text-sm text-brand-dark">
            {testimonial.authorName}
          </div>
          <div className="text-xs text-gray-500">
            {testimonial.authorCountry} &middot; <span className="text-brand-primary">{testimonial.tripTitle}</span>
          </div>
        </div>

        {testimonial.verified && (
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
            <CheckCircle className="w-3 h-3" />
            <span>Verified</span>
          </div>
        )}
      </div>
    </div>
  );
}
