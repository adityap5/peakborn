import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { getCompanyInfo } from '@/lib/data-access';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const company = getCompanyInfo();

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Private India Tours & Custom Holiday Packages`,
    template: `%s | ${company.name}`,
  },
  description:
    'Handcrafted, private tailor-made India tours and holidays. Explore the Golden Triangle, Rajasthan, Kerala backwaters, Himalayan retreats, and tiger safaris with dedicated local travel experts.',
  keywords: [
    'India holiday packages',
    'private India tours',
    'custom India travel',
    'Golden Triangle tours',
    'Rajasthan heritage tour',
    'Kerala backwaters tour',
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  metadataBase: new URL('https://company-domain.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-cream-50 text-brand-dark antialiased">
        {children}
      </body>
    </html>
  );
}
