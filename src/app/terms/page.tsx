'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      <section className="bg-forest-950 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            {language === 'ar'
              ? 'الشروط والأحكام العامة'
              : language === 'pt'
              ? 'Termos e Condições'
              : 'Terms & Conditions'}
          </h1>
          <p className="text-white/60 text-xs">
            {siteConfig.company.legalName}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm space-y-6 text-xs sm:text-sm text-mutedDark leading-relaxed">
          <h2 className="font-serif text-xl font-bold text-darkTxt">1. General Information & Showcase Nature</h2>
          <p>
            This website serves exclusively as a marketing and project showcase platform for <strong>{siteConfig.company.legalName}</strong>. Products, plant specimens, and equipment presented on this site are for specification demonstration only. <strong>No online checkout, payment gateways, or direct retail transactions take place on this platform.</strong>
          </p>

          <h2 className="font-serif text-xl font-bold text-darkTxt">2. Quotations and Service Agreements</h2>
          <p>
            Any estimate generated via form submission is non-binding until confirmed through a written formal contract and on-site engineering survey.
          </p>

          <h2 className="font-serif text-xl font-bold text-darkTxt">3. Intellectual Property</h2>
          <p>
            All architectural renderings, imagery, text, and branding designs remain the exclusive intellectual property of {siteConfig.company.legalName}. Unauthorized reproduction is prohibited.
          </p>

          <h2 className="font-serif text-xl font-bold text-darkTxt">4. Governing Law</h2>
          <p>
            These terms are governed by the laws of Portugal for corporate governance, and by the relevant local jurisdiction for field contracting and site execution.
          </p>
        </div>
      </section>
    </div>
  );
}
