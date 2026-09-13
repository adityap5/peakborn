import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Destination } from '@/types';

export interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export function DestinationCard({ destination, className = '' }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.id}`}
      className={`group relative block overflow-hidden rounded-xl bg-white border border-dust-grey shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-desert-sand/60 ${className}`}
    >
      {/* 1:1 Aspect Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-platinum">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
        />
        {/* Soft bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      </div>

      {/* Caption info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
        <h3 className="font-serif font-bold text-sm sm:text-base lg:text-lg leading-snug group-hover:text-desert-sand transition-colors drop-shadow-xs">
          {destination.name}
        </h3>
        <p className="text-[11px] sm:text-xs text-platinum/90 truncate mt-0.5 font-sans">
          {destination.region}
        </p>
      </div>
    </Link>
  );
}
