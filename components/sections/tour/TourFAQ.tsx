import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { TourFAQ as TourFAQType } from '@/types';

interface TourFAQProps {
  faqs?: TourFAQType[];
}

export function TourFAQ({ faqs }: TourFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-dust-grey shadow-xs space-y-4">
      <div className="border-b border-dust-grey pb-3">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-jet-black flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-burnt-peach shrink-0" />
          <span>Frequently Asked Questions</span>
        </h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-xl bg-platinum/50 border border-dust-grey p-4 transition-all duration-200 open:shadow-xs open:bg-white"
          >
            <summary className="flex items-center justify-between font-serif font-bold text-xs sm:text-sm text-jet-black cursor-pointer list-none select-none">
              <span>{faq.question}</span>
              <ChevronDown className="w-4 h-4 text-burnt-peach transition-transform duration-200 group-open:rotate-180 shrink-0 ml-2" />
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-jet-black/80 leading-relaxed border-t border-dust-grey/70 pt-3">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
