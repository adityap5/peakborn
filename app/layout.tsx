import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { getCompanyInfo } from '@/lib/data-access';
import { SITE_URL } from '@/lib/config';

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

export const viewport: Viewport = {
  themeColor: '#223843',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} | Private India Tours & Custom Holiday Packages`,
    template: `%s | ${company.name}`,
  },
  description:
    'Handcrafted, private tailor-made India tours and holidays. Explore the Golden Triangle, Rajasthan, Agra, Jaipur, Varanasi, and wildlife safaris with dedicated local travel experts.',
  keywords: [
    'India holiday packages',
    'private India tours',
    'custom India travel',
    'Golden Triangle tours',
    'Taj Mahal sunrise tour',
    'Rajasthan heritage tour',
    'Agra day tours',
    'Jaipur city tours',
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: company.name,
    title: `${company.name} | Private India Tours & Custom Holiday Packages`,
    description:
      'Handcrafted, private tailor-made India tours and holidays. Explore the Golden Triangle, Rajasthan, Agra, Jaipur, Varanasi, and wildlife safaris with dedicated local travel experts.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | Private India Tours & Custom Holiday Packages`,
    description:
      'Handcrafted, private tailor-made India tours and holidays. Explore the Golden Triangle, Rajasthan, Agra, Jaipur, Varanasi, and wildlife safaris with dedicated local travel experts.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-platinum text-jet-black antialiased">
        {children}
      </body>
    </html>
  );
}
