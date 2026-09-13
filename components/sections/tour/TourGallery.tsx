import React from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

interface TourGalleryProps {
  images?: string[];
  title: string;
}

export function TourGallery({ images, title }: TourGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-line shadow-xs space-y-4">
      <div className="border-b border-line pb-3">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark flex items-center gap-2">
          <Camera className="w-5 h-5 text-brand-gold shrink-0" />
          <span>Tour Photo Gallery</span>
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-200 border border-line shadow-2xs group cursor-pointer"
          >
            <Image
              src={src}
              alt={`${title} - Photo ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-108"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
