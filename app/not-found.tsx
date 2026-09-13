import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { UtilityBar } from '@/components/layout/UtilityBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <UtilityBar />
      <Header />

      <main id="main-content" className="flex-1 flex items-center justify-center py-24 sm:py-32 bg-cream-50">
        <Container className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto mb-6">
            <Compass className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">
            Page Not Found
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-3">
            Lost on the Trail?
          </h1>

          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/">
              <Button variant="primary">
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Return to Home</span>
              </Button>
            </Link>

            <Link href="/tour-packages">
              <Button variant="outline">
                <span>Browse Tour Packages</span>
              </Button>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
