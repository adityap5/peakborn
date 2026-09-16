import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { Container } from './Container';
import { getCompanyInfo } from '@/lib/data-access';

export function UtilityBar() {
  const company = getCompanyInfo();

  return (
    <aside aria-label="Quick contact and company registration" className="bg-jet-black text-platinum text-xs border-b border-white/10">
      <Container className="flex flex-col md:flex-row items-center justify-between py-2 gap-2 text-center md:text-left">
        {/* Company Branding & Government Registration */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-x-2 gap-y-1 text-xs">
          <span className="font-bold text-white tracking-wide">
            {company.name}
          </span>
          {company.udyamRegistrationNumber && (
            <span className="text-dust-grey/85 text-[11px] sm:text-xs">
              <span className="hidden sm:inline text-dust-grey/50">|</span> UDYAM Registration No. : <span className="text-desert-sand font-medium">{company.udyamRegistrationNumber}</span>
            </span>
          )}
        </div>

        {/* Direct Contact Channels */}
        <div className="flex items-center flex-wrap justify-center gap-3.5 sm:gap-5 text-xs">
          <a
            href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-1.5 hover:text-desert-sand transition-colors text-platinum"
            title={`Call ${company.name}`}
          >
            <Phone className="w-3.5 h-3.5 text-desert-sand" />
            <span>{company.displayPhone || company.phone}</span>
          </a>

          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-1.5 hover:text-desert-sand transition-colors text-platinum"
            title={`Email ${company.name}`}
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
              title="Chat on WhatsApp"
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
