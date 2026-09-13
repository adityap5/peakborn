import React from 'react';
import Link from 'next/link';
import {
  Landmark,
  Compass,
  Waves,
  Mountain,
  Sparkles,
  Heart,
  Users,
  Camera,
  LucideIcon,
} from 'lucide-react';
import { TravelStyle } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Compass,
  Waves,
  Mountain,
  Sparkles,
  Heart,
  Users,
  Camera,
};

export interface TravelStyleCardProps {
  style: TravelStyle;
  className?: string;
}

export function TravelStyleCard({ style, className = '' }: TravelStyleCardProps) {
  const IconComponent = iconMap[style.iconName] || Compass;

  return (
    <Link
      href={`/travel-styles/${style.slug}`}
      className={`group flex flex-col items-center text-center p-5 sm:p-6 rounded-xl bg-cream-100/80 border border-line hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-brand-primary mb-3.5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
        <IconComponent className="w-6 h-6" />
      </div>

      <h3 className="font-serif font-bold text-sm sm:text-base text-brand-dark group-hover:text-brand-primary transition-colors mb-1">
        {style.title}
      </h3>

      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
        {style.shortDescription}
      </p>
    </Link>
  );
}
