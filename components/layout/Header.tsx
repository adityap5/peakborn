import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/ui/button';
import { getMainNavigation, getCompanyInfo } from '@/lib/data-access';

export function Header() {
  const navItems = getMainNavigation();
  const company = getCompanyInfo();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/98 backdrop-blur-xs border-b border-dust-grey shadow-xs">
      <Container className="flex items-center justify-between h-20">
        {/* Brand Logo & Editorial Typography */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-jet-black text-burnt-peach flex items-center justify-center shadow-xs font-serif font-bold text-xl border border-dust-grey/40">
            {company.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl sm:text-2xl text-jet-black tracking-tight leading-none group-hover:text-burnt-peach transition-colors">
              {company.name}
            </span>
            <span className="text-[11px] font-semibold text-desert-sand uppercase tracking-wider mt-1 leading-none">
              Journeys for a Richer You
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Dropdowns */}
        <DesktopNav items={navItems} />

        {/* Desktop Primary CTA and Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:inline-flex">
            <Button variant="primary" size="default" className="shadow-xs">
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>

          <MobileNav items={navItems} company={company} />
        </div>
      </Container>
    </header>
  );
}
