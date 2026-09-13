import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { Container } from './Container';
import { getCompanyInfo } from '@/lib/data-access';

export function UtilityBar() {
  const company = getCompanyInfo();

  return (
    <aside aria-label="Quick contact" className="bg-jet-black text-platinum text-xs border-b border-white/10">
      <Container className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2 text-center sm:text-left">
        <p className="text-dust-grey font-medium tracking-wide">
          {company.tagline || 'Explore India with Local Experts | Personalized Journeys | Authentic Experiences'}
        </p>

        <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-1.5 hover:text-desert-sand transition-colors text-platinum"
          >
            <Phone className="w-3.5 h-3.5 text-desert-sand" />
            <span>{company.displayPhone || company.phone}</span>
          </a>

          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-1.5 hover:text-desert-sand transition-colors text-platinum"
          >
            <Mail className="w-3.5 h-3.5 text-desert-sand" />
            <span>{company.email}</span>
          </a>

          {/* Conditional WhatsApp Channel */}
          {company.whatsappNumber && (
            <a
              href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                company.whatsappDefaultMessage || 'Hello, I am interested in planning a tour.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </Container>
    </aside>
  );
}
