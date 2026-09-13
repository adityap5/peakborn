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
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border border-dust-grey shadow-xs ${className}`}
    >
      <Quote className="absolute top-5 right-5 w-8 h-8 text-dust-grey/50 -scale-x-100" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-desert-sand mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating ? 'fill-desert-sand text-desert-sand' : 'text-dust-grey'
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <blockquote className="text-sm text-jet-black/85 leading-relaxed italic mb-6 font-sans">
          &ldquo;{testimonial.comment}&rdquo;
        </blockquote>
      </div>

      {/* Author details */}
      <div className="pt-4 border-t border-dust-grey flex items-center justify-between gap-2">
        <div>
          <div className="font-serif font-bold text-sm text-jet-black">
            {testimonial.authorName}
          </div>
          <div className="text-xs text-jet-black/60">
            {testimonial.authorCountry} &middot; <span className="text-burnt-peach font-medium">{testimonial.tripTitle}</span>
          </div>
        </div>

        {testimonial.verified && (
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-full shrink-0">
            <CheckCircle className="w-3 h-3" />
            <span>Verified</span>
          </div>
        )}
      </div>
    </div>
  );
}
