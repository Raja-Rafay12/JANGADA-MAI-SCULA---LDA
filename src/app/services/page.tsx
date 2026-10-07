'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { servicesData } from '@/data/services';
import { Leaf, Trees, Scissors, Droplets, Sprout, Wrench, ArrowRight } from 'lucide-react';

export default function ServicesOverviewPage() {
  const { t, language, isRTL, openQuoteModal } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    gardening: <Leaf className="w-8 h-8 text-emeraldGreen-500" strokeWidth={1.75} />,
    landscaping: <Trees className="w-8 h-8 text-emeraldGreen-500" strokeWidth={1.75} />,
    maintenance: <Scissors className="w-8 h-8 text-emeraldGreen-500" strokeWidth={1.75} />,
    irrigation: <Droplets className="w-8 h-8 text-emeraldGreen-500" strokeWidth={1.75} />,
    agriculture: <Sprout className="w-8 h-8 text-emeraldGreen-500" strokeWidth={1.75} />,
    'equipment-materials': <Wrench className="w-8 h-8 text-emeraldGreen-500" strokeWidth={1.75} />,
  };

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      {/* Header Banner */}
      <section className="bg-forest-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emeraldGreen-400 block mb-3">
            {t.services.tag}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.services.title}
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            {t.services.description}
          </p>
        </div>
      </section>

      {/* Services List with Full Details & Deliverables */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {servicesData.map((service, idx) => {
            const title =
              language === 'pt'
                ? service.titlePt
                : language === 'ar'
                ? service.titleAr
                : service.titleEn;
            const fullDesc =
              language === 'pt'
                ? service.fullDescPt
                : language === 'ar'
                ? service.fullDescAr
                : service.fullDescEn;
            const deliverables =
              language === 'pt'
                ? service.deliverablesPt
                : language === 'ar'
                ? service.deliverablesAr
                : service.deliverablesEn;

            const isEven = idx % 2 === 1;

            return (
              <div
                key={service.slug}
                className="bg-white border border-cream-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image Col */}
                <div
                  className={`lg:col-span-5 relative min-h-[300px] lg:min-h-[400px] ${
                    isEven ? 'lg:order-2' : ''
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent lg:hidden" />
                </div>

                {/* Content Col */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-cream-100 flex items-center justify-center mb-6">
                      {iconMap[service.slug] || <Leaf className="w-8 h-8 text-emeraldGreen-500" />}
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-darkTxt mb-4">
                      {title}
                    </h2>

                    <p className="text-mutedDark text-sm sm:text-base leading-relaxed mb-6">
                      {fullDesc}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-emeraldGreen-700 mb-3">
                        {language === 'ar'
                          ? 'أبرز مخرجات الخدمة:'
                          : language === 'pt'
                          ? 'O que inclui:'
                          : 'Key Deliverables:'}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-darkTxt">
                        {deliverables.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emeraldGreen-500 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-cream-200">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all"
                    >
                      <span>{t.services.learnMore}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                    </Link>

                    <button
                      onClick={() => openQuoteModal(title)}
                      className="inline-flex items-center gap-2 border border-emeraldGreen-500 hover:bg-emeraldGreen-50 text-emeraldGreen-700 text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all"
                    >
                      <span>{t.nav.requestQuote}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
