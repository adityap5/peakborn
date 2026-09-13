'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { TourPackage, CompanyInfo } from '@/types';
import { TourCard } from '@/components/cards/TourCard';

interface TourPackageFilterGridProps {
  tours: TourPackage[];
  company?: CompanyInfo;
}

const CATEGORIES = [
  { id: 'all', label: 'All Packages' },
  { id: 'taj-mahal-tours', label: 'Taj Mahal Tours' },
  { id: 'golden-triangle-tours', label: 'Golden Triangle Tours' },
  { id: 'same-day-tours', label: 'Same Day Tours' },
  { id: 'delhi-tour-packages', label: 'Delhi Tour Packages' },
  { id: 'jaipur-tour-packages', label: 'Jaipur Tour Packages' },
  { id: 'overnight-tours', label: 'Overnight Tours' },
  { id: 'rajasthan-tour-packages', label: 'Rajasthan Packages' },
  { id: 'wildlife-tour-packages', label: 'Wildlife Tour Packages' },
  { id: 'south-india-tours', label: 'South India Tours' },
  { id: 'heritage-tour-packages', label: 'Heritage Tour Packages' },
  { id: 'luxury-tours', label: 'Luxury Tours' },
  { id: 'shopping-tours', label: 'Shopping Tours' },
];

export function TourPackageFilterGrid({ tours, company }: TourPackageFilterGridProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [userSelectedCategory, setUserSelectedCategory] = useState<string | null>(null);

  const activeCategory =
    userSelectedCategory ??
    (categoryParam && CATEGORIES.some((c) => c.id === categoryParam)
      ? categoryParam
      : 'all');

  const matchesCategory = (tour: TourPackage, catId: string) => {
    if (catId === 'all') return true;
    if (tour.categorySlugs && tour.categorySlugs.includes(catId)) return true;
    return false;
  };

  const filteredTours = useMemo(() => {
    if (activeCategory === 'all') return tours;
    return tours.filter((t) => matchesCategory(t, activeCategory));
  }, [tours, activeCategory]);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {CATEGORIES.map((cat) => {
          const count =
            cat.id === 'all'
              ? tours.length
              : tours.filter((t) => matchesCategory(t, cat.id)).length;
          const isActive = activeCategory === cat.id;

          if (count === 0) return null;

          return (
            <button
              key={cat.id}
              onClick={() => setUserSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'bg-white text-gray-700 border border-line hover:bg-cream-100 hover:border-brand-primary/30'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/25 text-white' : 'bg-cream-200 text-gray-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results Count & Grid */}
      <div>
        <div className="text-xs text-gray-500 mb-4 flex items-center justify-between">
          <span>
            Showing <strong>{filteredTours.length}</strong> {filteredTours.length === 1 ? 'itinerary' : 'itineraries'}
          </span>
          {activeCategory !== 'all' && (
            <button
              onClick={() => setUserSelectedCategory('all')}
              className="text-xs text-brand-primary hover:underline font-semibold"
            >
              Show all packages
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}
