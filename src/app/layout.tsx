import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuoteModal } from '@/components/QuoteModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CookieBanner } from '@/components/CookieBanner';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: {
    default: 'Jangada Maiúscula | Luxury Landscaping, Gardening & Irrigation',
    template: '%s | Jangada Maiúscula, Lda.',
  },
  description:
    'Premier landscaping, horticulture, smart water-saving irrigation, and estate maintenance for private luxury villas, hotels, and corporate developments across Dubai and Abu Dhabi.',
  keywords: [
    'Landscaping Dubai',
    'Garden design',
    'Irrigation systems Abu Dhabi',
    'Villa garden maintenance Dubai',
    'Palm tree care',
    'Paisagismo',
    'Jardinagem Dubai',
    'تنسيق حدائق دبي',
    'لاندسكيب أبوظبي',
    'شبكات ري ذكية',
  ],
  authors: [{ name: siteConfig.company.legalName }],
  metadataBase: new URL('https://jangada-maiuscula.com'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/?lang=en',
      ar: '/?lang=ar',
      pt: '/?lang=pt',
    },
  },
  openGraph: {
    title: 'Jangada Maiúscula | Luxury Landscaping & Gardening',
    description:
      'European horticultural heritage and precision irrigation engineering for luxury residential estates and commercial landscapes across all project locations.',
    url: 'https://jangada-maiuscula.com',
    siteName: siteConfig.company.legalName,
    images: [
      {
        url: siteConfig.images.heroGarden,
        width: 1200,
        height: 630,
        alt: 'Jangada Maiúscula Luxury Landscaping',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.company.legalName,
    description:
      'Specialist landscaping, gardening, smart water conservation irrigation, and estate maintenance contractor for private villas and commercial sites.',
    url: 'https://jangada-maiuscula.com',
    telephone: siteConfig.contact.primaryPhone.display,
    email: siteConfig.contact.email.address,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.locations.registeredOffice.street,
      addressLocality: siteConfig.locations.registeredOffice.locality,
      addressCountry: siteConfig.locations.registeredOffice.countryCode,
    },
    areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain'],
    priceRange: '$$$$',
    sameAs: Object.values(siteConfig.socials).filter(Boolean),
  };

  return (
    <html lang="en" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-cream-200 text-darkTxt antialiased selection:bg-emeraldGreen-500 selection:text-white"
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <QuoteModal />
          <WhatsAppButton />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
