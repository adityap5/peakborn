import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/forms/ContactForm';
import { getCompanyInfo } from '@/lib/data-access';

const company = getCompanyInfo();

export const metadata: Metadata = {
  title: `Contact Us & Custom Trip Planner | ${company.name}`,
  description:
    'Contact our travel specialists to plan your private custom India tour. Get in touch by phone, email, or our tailored enquiry form.',
};

export default function ContactPage() {
  const hasWhatsApp = Boolean(company.whatsappNumber && company.whatsappNumber.trim());

  return (
    <>
      <UtilityBar />
      <Header />
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <main id="main-content" className="flex-1 py-12 sm:py-18 bg-cream-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
              Start Planning
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
              Contact Our Travel Desk
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Have questions about an itinerary, dates, or custom routing? Reach out to our local destination experts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Contact Information Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-line shadow-xs space-y-6">
                <h2 className="font-serif text-xl font-bold text-brand-dark pb-3 border-b border-line">
                  Direct Inquiries
                </h2>

                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-dark font-semibold">Office Address</strong>
                      <span className="text-gray-600 text-xs sm:text-sm">{company.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-dark font-semibold">Telephone Desk</strong>
                      <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="text-brand-primary hover:underline font-medium text-xs sm:text-sm">
                        {company.displayPhone || company.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-brand-dark font-semibold">Email Support</strong>
                      <a href={`mailto:${company.email}`} className="text-brand-primary hover:underline font-medium text-xs sm:text-sm">
                        {company.email}
                      </a>
                    </div>
                  </div>

                  {company.operatingHours && (
                    <div className="flex items-start gap-3.5 pt-2 border-t border-dashed border-line">
                      <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-brand-dark font-semibold">Operating Hours</strong>
                        <span className="text-gray-600 text-xs">{company.operatingHours}</span>
                      </div>
                    </div>
                  )}
                </div>

                {hasWhatsApp && (
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${company.whatsappNumber!.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        company.whatsappDefaultMessage || 'Hello, I need assistance with an India holiday package.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-sm hover:bg-emerald-100 transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4 text-[#25D366]" />
                      <span>Chat Directly on WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right Trip Planner Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm className="shadow-lg border-line" />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
