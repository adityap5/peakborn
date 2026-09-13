import React from 'react';
import { Calendar, Clock, Plane, Compass } from 'lucide-react';
import { Destination } from '@/types';
import { Container } from '@/components/layout/Container';

export interface DestinationOverviewProps {
  destination: Destination;
}

export function DestinationOverview({ destination }: DestinationOverviewProps) {
  return (
    <section className="py-12 sm:py-16 bg-cream-50 border-b border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-1.5">
                Overview &amp; Character
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight leading-tight">
                About {destination.name}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              {destination.description}
            </p>

            {/* Highlights List */}
            {destination.highlights && destination.highlights.length > 0 && (
              <div className="pt-4">
                <h3 className="font-serif text-lg font-bold text-brand-dark mb-3">
                  Key Destination Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destination.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-white p-3 rounded-lg border border-line shadow-xs font-medium"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quick Facts Box */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-line shadow-xs">
            <h3 className="font-serif text-lg font-bold text-brand-dark pb-3 border-b border-line mb-4">
              Trip Planning Facts
            </h3>

            <dl className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <dt className="text-gray-500 font-medium">Country &amp; Region</dt>
                  <dd className="font-semibold text-brand-dark mt-0.5">
                    {destination.country} &middot; {destination.region}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <dt className="text-gray-500 font-medium">Recommended Duration</dt>
                  <dd className="font-semibold text-brand-dark mt-0.5">
                    {destination.daysRecommended[0]} to {destination.daysRecommended[1]} Days
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <dt className="text-gray-500 font-medium">Best Time to Visit</dt>
                  <dd className="font-semibold text-brand-dark mt-0.5">
                    {destination.bestSeason}
                  </dd>
                </div>
              </div>

              {destination.flightTime && (
                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <dt className="text-gray-500 font-medium">Access &amp; Airport Hub</dt>
                    <dd className="font-semibold text-brand-dark mt-0.5">
                      {destination.flightTime}
                    </dd>
                  </div>
                </div>
              )}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
