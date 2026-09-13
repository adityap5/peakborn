'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MessageSquare, ArrowRight, ChevronDown } from 'lucide-react';
import { NavigationItem, CompanyInfo } from '@/types';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  items: NavigationItem[];
  company: CompanyInfo;
}

const emptySubscribe = () => () => {};

export function MobileNav({ items, company }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const pathname = usePathname();

  // Determine whether a section is expanded (defaults to active path match)
  const isSectionExpanded = (label: string, href: string) => {
    if (expandedSections[label] !== undefined) {
      return expandedSections[label];
    }
    return href !== '/' && pathname.startsWith(href);
  };

  const toggleSection = (label: string, currentlyExpanded: boolean) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !currentlyExpanded,
    }));
  };

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center p-2 rounded-md text-brand-dark hover:text-brand-primary hover:bg-cream-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        aria-label="Open main navigation menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Render via Portal directly to body to escape any header backdrop-filter containing block */}
      {isMounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex justify-end"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Backdrop with minimal blur - clicking outside closes drawer */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Half-screen Mobile Drawer with minimal blur */}
            <div
              className="relative z-10 w-1/2 min-w-[220px] max-w-[85vw] sm:w-72 h-full bg-cream-50/98 backdrop-blur-xs text-brand-dark shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 ease-in-out border-l border-line"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-line bg-white/95 shrink-0">
                <div className="min-w-0 pr-2">
                  <span className="font-serif font-bold text-base sm:text-lg text-brand-dark tracking-tight truncate block">
                    {company.name}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] text-brand-gold uppercase tracking-wider font-semibold truncate">
                    Journeys for a Richer You
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 sm:p-2 rounded-md text-gray-500 hover:text-brand-dark hover:bg-cream-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary shrink-0"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list with dropdown accordions */}
              <nav className="flex-1 overflow-y-auto px-3 py-4 sm:px-4 sm:py-5 space-y-1">
                {items.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isActive =
                    pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href));
                  const isExpanded = hasChildren ? isSectionExpanded(item.label, item.href) : false;

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 rounded-md font-medium text-xs sm:text-sm transition-colors ${
                          isActive
                            ? 'bg-brand-primary text-white font-semibold'
                            : 'text-brand-dark hover:bg-cream-100 hover:text-brand-primary'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="truncate">{item.label}</span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 shrink-0 ml-1 opacity-60 ${
                            isActive ? 'text-white' : ''
                          }`}
                        />
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label} className="space-y-1">
                      <div
                        className={`flex items-center justify-between px-3 py-2 rounded-md font-medium text-xs sm:text-sm transition-colors ${
                          isActive
                            ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                            : 'text-brand-dark hover:bg-cream-100 hover:text-brand-primary'
                        }`}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex-1 truncate"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleSection(item.label, isExpanded)}
                          className="p-1 -mr-1 rounded hover:bg-black/5 text-gray-500 hover:text-brand-dark transition-colors"
                          aria-label={`Toggle ${item.label} list`}
                          aria-expanded={isExpanded}
                        >
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-brand-primary' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Accordion Sub-items */}
                      {isExpanded && (
                        <div className="pl-3 ml-2 border-l border-brand-gold/40 space-y-0.5 py-1 animate-in fade-in duration-150">
                          {item.children?.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-2.5 py-1.5 rounded-md text-[11px] sm:text-xs transition-colors truncate ${
                                  isChildActive
                                    ? 'bg-brand-primary text-white font-semibold'
                                    : 'text-gray-700 hover:bg-cream-100 hover:text-brand-primary'
                                }`}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="mt-5 pt-3.5 border-t border-line space-y-2">
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full block">
                    <Button variant="primary" size="sm" className="w-full justify-center text-xs sm:text-sm">
                      Plan Your Trip
                    </Button>
                  </Link>
                </div>
              </nav>

              {/* Quick thumb contact footer in drawer */}
              <div className="p-3 sm:p-4 border-t border-line bg-white/95 space-y-1.5 text-[11px] sm:text-xs text-gray-600 shrink-0">
                <a
                  href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 py-1 hover:text-brand-primary truncate"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                  <span className="font-medium truncate">{company.displayPhone || company.phone}</span>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 py-1 hover:text-brand-primary truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                  <span className="truncate">{company.email}</span>
                </a>

                {company.whatsappNumber && (
                  <a
                    href={`https://wa.me/${company.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      company.whatsappDefaultMessage || 'Hello, I am interested in planning a tour.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-1 text-emerald-700 font-semibold truncate"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                    <span className="truncate">WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

