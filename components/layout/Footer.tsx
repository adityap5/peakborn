import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldAlert } from 'lucide-react';
import { Container } from './Container';
import { getCompanyInfo, getFooterNavigation } from '@/lib/data-access';

export function Footer() {
  const company = getCompanyInfo();
  const footerNav = getFooterNavigation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jet-black text-platinum border-t border-dust-grey/20 pt-16 pb-12">
      <Container>
        {/* Main 5-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-dust-grey/20">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-dust-grey/10 text-burnt-peach border border-dust-grey/30 flex items-center justify-center font-serif font-bold text-lg">
                {company.name.charAt(0)}
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-platinum tracking-tight block">
                  {company.name}
                </span>
                <span className="text-[10px] font-semibold text-desert-sand uppercase tracking-wider block">
                  Journeys for a Richer You
                </span>
              </div>
            </div>

            <p className="text-sm text-dust-grey leading-relaxed max-w-sm">
              Tailor-made, private India journeys crafted with local expertise. We design authentic itineraries across heritage monuments, scenic backwaters, tiger reserves, and serene mountain valleys.
            </p>

            <div className="pt-2 space-y-2 text-xs text-dust-grey">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-desert-sand shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-desert-sand shrink-0" />
                <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-burnt-peach transition-colors">
                  {company.displayPhone || company.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-desert-sand shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-burnt-peach transition-colors">
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-platinum text-base mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-dust-grey">
              {footerNav.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-burnt-peach transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h3 className="font-serif font-semibold text-platinum text-base mb-4 tracking-wide">
              Destinations
            </h3>
            <ul className="space-y-2.5 text-xs text-dust-grey">
              {footerNav.topDestinations.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-burnt-peach transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h3 className="font-serif font-semibold text-platinum text-base mb-4 tracking-wide">
              Tour Packages
            </h3>
            <ul className="space-y-2.5 text-xs text-dust-grey">
              {footerNav.popularPackages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-burnt-peach transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security & Fraud-Prevention Notice */}
        <div className="py-6 border-b border-dust-grey/20 flex flex-col sm:flex-row items-start gap-3 text-xs text-dust-grey leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-desert-sand shrink-0 mt-0.5" />
          <p>
            <strong className="text-platinum">Security Advisory:</strong> Our travel specialists will only contact you using the official details you submit through this website’s enquiry forms. Company representatives will never ask for confidential banking OTPs, net-banking credentials, or fund transfers to unverified personal accounts.
          </p>
        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dust-grey/80">
          <p>
            &copy; {currentYear} {company.name}. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-platinum transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
