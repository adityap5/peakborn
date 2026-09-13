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
      className={`group flex flex-col items-center text-center p-5 sm:p-6 rounded-xl bg-platinum/70 border border-dust-grey hover:border-desert-sand/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-burnt-peach mb-3.5 group-hover:bg-burnt-peach group-hover:text-jet-black transition-colors duration-300 border border-dust-grey/40">
        <IconComponent className="w-6 h-6" />
      </div>

      <h3 className="font-serif font-bold text-sm sm:text-base text-jet-black group-hover:text-burnt-peach transition-colors mb-1">
        {style.title}
      </h3>

      <p className="text-xs text-jet-black/65 line-clamp-2 leading-relaxed font-sans">
        {style.shortDescription}
      </p>
    </Link>
  );
}
