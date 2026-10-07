'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

export default function CookiesPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      <section className="bg-forest-950 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            {language === 'ar'
              ? 'سياسة ملفات تعريف الارتباط (الكوكيز)'
              : language === 'pt'
              ? 'Política de Cookies'
              : 'Cookie Policy'}
          </h1>
          <p className="text-white/60 text-xs">
            {siteConfig.company.legalName}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm space-y-6 text-xs sm:text-sm text-mutedDark leading-relaxed">
          <h2 className="font-serif text-xl font-bold text-darkTxt">What are Cookies?</h2>
          <p>
            Cookies are small text files stored on your browser to ensure website functionality, remember language preferences (English, Arabic, Portuguese), and analyze site interaction patterns.
          </p>

          <h2 className="font-serif text-xl font-bold text-darkTxt">Cookies We Use</h2>
          <ul className="list-disc ps-5 space-y-1">
            <li><strong>Strictly Necessary:</strong> Required for site navigation, language direction (LTR/RTL), and security.</li>
            <li><strong>Functional:</strong> Stores your preferred language and cookie banner consent state.</li>
            <li><strong>Performance & Analytics:</strong> Anonymized metrics to assess page performance and load speed.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-darkTxt">Managing Your Preferences</h2>
          <p>
            You may adjust or delete cookies at any time via your browser settings. Declining optional cookies will not restrict your access to core quotes or project galleries.
          </p>
        </div>
      </section>
    </div>
  );
}
