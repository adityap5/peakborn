'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { NavigationItem } from '@/types';

interface DesktopNavProps {
  items: NavigationItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <nav ref={navRef} className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isMultiColumn = hasChildren && item.children!.length > 7;
        const isActive =
          pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(item.href));
        const isOpen = openDropdown === item.label;

        if (!hasChildren) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'text-brand-primary font-semibold'
                  : 'text-brand-dark/90 hover:text-brand-primary hover:bg-cream-50'
              }`}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center">
              <Link
                href={item.href}
                className={`flex items-center gap-1 pl-3.5 pr-1.5 py-2 text-sm font-medium rounded-l-md transition-colors ${
                  isActive
                    ? 'text-brand-primary font-semibold'
                    : 'text-brand-dark/90 hover:text-brand-primary hover:bg-cream-50'
                }`}
                aria-expanded={isOpen}
              >
                <span>{item.label}</span>
              </Link>
              <button
                type="button"
                onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                className={`p-2 rounded-r-md transition-colors text-brand-dark/70 hover:text-brand-primary hover:bg-cream-50 ${
                  isOpen ? 'text-brand-primary' : ''
                }`}
                aria-label={`Toggle ${item.label} dropdown menu`}
                aria-expanded={isOpen}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-primary' : ''
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div
                className={`absolute top-full mt-1 bg-white/98 backdrop-blur-xs border border-line shadow-2xl rounded-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                  isMultiColumn
                    ? 'left-1/2 -translate-x-1/2 w-[620px] xl:w-[680px] p-4'
                    : 'left-0 w-80 p-2'
                }`}
                role="menu"
                aria-label={`${item.label} sub-menu`}
              >
                {/* Header banner for multi-column tour packages */}
                {isMultiColumn && (
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-line px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-serif font-bold text-sm text-brand-dark block leading-tight">
                          Private Tour Packages
                        </span>
                        <span className="text-[11px] text-gray-500 font-normal">
                          Handcrafted itineraries with private chauffeur &amp; local guide
                        </span>
                      </div>
                    </div>
                    <Link
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary hover:underline"
                    >
                      <span>View All (10)</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}

                <div className={isMultiColumn ? 'grid grid-cols-2 gap-1.5' : 'space-y-0.5'}>
                  {item.children
                    ?.filter((child) => !isMultiColumn || child.href !== item.href)
                    .map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`group flex flex-col p-2.5 rounded-xl transition-all duration-150 ${
                            isChildActive
                              ? 'bg-brand-primary/10 text-brand-primary'
                              : 'hover:bg-cream-100/90 text-brand-dark'
                          }`}
                          role="menuitem"
                        >
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="group-hover:text-brand-primary transition-colors leading-snug">
                              {child.label}
                            </span>
                            <ArrowRight
                              className={`w-3 h-3 shrink-0 ml-1 transition-transform group-hover:translate-x-0.5 ${
                                isChildActive
                                  ? 'text-brand-primary'
                                  : 'opacity-30 group-hover:opacity-100 group-hover:text-brand-primary'
                              }`}
                            />
                          </div>
                          {child.description && (
                            <span className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 font-normal">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                </div>

                {/* Footer link for multi-column dropdown */}
                {isMultiColumn && (
                  <div className="mt-3 pt-2.5 border-t border-line/80 flex items-center justify-between text-xs px-2 text-gray-600 bg-cream-50/60 rounded-xl p-2">
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>Need a custom route or dates?</span>
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setOpenDropdown(null)}
                      className="font-bold text-brand-primary hover:underline text-[11px]"
                    >
                      Request Custom Trip &rarr;
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

