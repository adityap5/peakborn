import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from './Container';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <div className={`bg-platinum/60 border-b border-dust-grey/70 py-3 ${className || ''}`}>
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs text-jet-black/60">
            <li className="flex items-center gap-1.5">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-burnt-peach transition-colors"
                title="Home"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="sr-only">Home</span>
              </Link>
            </li>

            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={index} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-jet-black/40 shrink-0" aria-hidden="true" />
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-burnt-peach transition-colors max-w-[200px] sm:max-w-none truncate"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className="font-medium text-jet-black max-w-[240px] sm:max-w-none truncate"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
