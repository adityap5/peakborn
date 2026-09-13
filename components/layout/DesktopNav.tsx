'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';
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
                className="absolute top-full left-0 mt-1 w-80 bg-white/98 backdrop-blur-xs border border-line shadow-xl rounded-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
                aria-label={`${item.label} sub-menu`}
              >
                <div className="space-y-0.5">
                  {item.children?.map((child) => {
                    const isChildActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`group flex flex-col p-2.5 rounded-lg transition-colors ${
                          isChildActive
                            ? 'bg-brand-primary/10 text-brand-primary'
                            : 'hover:bg-cream-100/80 text-brand-dark'
                        }`}
                        role="menuitem"
                      >
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="group-hover:text-brand-primary transition-colors">
                            {child.label}
                          </span>
                          <ArrowRight
                            className={`w-3 h-3 transition-transform group-hover:translate-x-0.5 ${
                              isChildActive ? 'text-brand-primary' : 'opacity-40 group-hover:opacity-100 group-hover:text-brand-primary'
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
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
