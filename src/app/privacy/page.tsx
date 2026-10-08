'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      <section className="bg-forest-950 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            {language === 'ar'
              ? 'سياسة الخصوصية وحماية البيانات'
              : language === 'pt'
              ? 'Política de Privacidade'
              : 'Privacy Policy & Data Protection'}
          </h1>
          <p className="text-white/60 text-xs">
            Last Updated: January 2026 • In accordance with EU GDPR and International Privacy Standards
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm space-y-8 text-xs sm:text-sm text-mutedDark leading-relaxed">
          <div>
            <h2 className="font-serif text-xl font-bold text-darkTxt mb-3">1. Identification of the Data Controller</h2>
            <p>
              This website is operated by <strong>{siteConfig.company.legalName}</strong>, a company incorporated in Portugal ({siteConfig.locations.registeredOffice.labelEn}: {siteConfig.locations.registeredOffice.fullAddress}), executing landscape engineering and gardening services across all project locations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-darkTxt mb-3">2. Data We Collect</h2>
            <p>We only collect personal information voluntarily submitted via our quote request and contact forms, including:</p>
            <ul className="list-disc ps-5 mt-2 space-y-1">
              <li>Full Name and contact details (email address, telephone / WhatsApp number).</li>
              <li>Site location for landscape assessments.</li>
              <li>Project scope specifications and optional site photographs.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-darkTxt mb-3">3. Purpose and Legal Basis for Processing</h2>
            <p>
              Your data is processed strictly for the purpose of preparing tailored landscape proposals, responding to technical inquiries, and coordinating on-site visits. We do not sell, rent, or trade your personal data to any third-party marketing entities.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-darkTxt mb-3">4. International Data Transfers & Protection</h2>
            <p>
              Given our cross-border operational presence, information is processed securely in accordance with European General Data Protection Regulation (GDPR) and applicable international data protection standards.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-darkTxt mb-3">5. Your Legal Rights</h2>
            <p>
              Under applicable laws, you hold the right to access, rectify, or request the deletion of your personal data at any time. To exercise these rights, please contact our privacy representative at: <a href={siteConfig.contact.email.href} className="text-emeraldGreen-600 underline" dir="ltr">{siteConfig.contact.email.address}</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
