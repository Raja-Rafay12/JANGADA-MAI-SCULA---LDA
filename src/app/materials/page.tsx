'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { materialsData } from '@/data/materials';
import { Layers, ArrowRight, Info, CheckCircle2 } from 'lucide-react';

export default function MaterialsPage() {
  const { t, language, isRTL, openQuoteModal } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', labelEn: 'All Showcase', labelPt: 'Todos os Materiais', labelAr: 'كافة المواد' },
    { key: 'plants-trees', labelEn: 'Plants & Trees', labelPt: 'Plantas e Palmeiras', labelAr: 'الأشجار والنخيل' },
    { key: 'turf', labelEn: 'Turf & Lawns', labelPt: 'Relva Natural e Sintética', labelAr: 'العشب والمسطحات' },
    { key: 'irrigation', labelEn: 'Smart Irrigation', labelPt: 'Sistemas de Rega', labelAr: 'شبكات الري الذكي' },
    { key: 'soil-fertilizers', labelEn: 'Soil & Fertilizers', labelPt: 'Solos e Adubos', labelAr: 'التربة والأسمدة' },
    { key: 'machinery-tools', labelEn: 'Machinery & Tools', labelPt: 'Máquinas e Ferramentas', labelAr: 'المعدات والآلات' },
  ];

  const filtered = materialsData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      {/* Header */}
      <section className="bg-forest-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emeraldGreen-400 block mb-3">
            {t.nav.materials}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {t.materials.title}
          </h1>
          <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
            {t.materials.subtitle}
          </p>
        </div>
      </section>

      {/* Showcase Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notice Banner (Strictly Showcase, No e-commerce per brief) */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-forest-900 text-white border border-forest-750 flex items-start gap-4">
          <Info className="w-5 h-5 text-emeraldGreen-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-white/85 leading-relaxed">
            {t.materials.noPricingNotice}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const label =
              language === 'pt' ? cat.labelPt : language === 'ar' ? cat.labelAr : cat.labelEn;
            const active = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                  active
                    ? 'bg-forest-900 text-white shadow-sm font-semibold'
                    : 'bg-white text-darkTxt border border-cream-300 hover:bg-cream-100'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Materials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => {
            const name =
              language === 'pt' ? item.namePt : language === 'ar' ? item.nameAr : item.nameEn;
            const desc =
              language === 'pt'
                ? item.descriptionPt
                : language === 'ar'
                ? item.descriptionAr
                : item.descriptionEn;
            const whereUsed =
              language === 'pt'
                ? item.whereUsedPt
                : language === 'ar'
                ? item.whereUsedAr
                : item.whereUsedEn;
            const specs =
              language === 'pt'
                ? item.specificationsPt
                : language === 'ar'
                ? item.specificationsAr
                : item.specificationsEn;

            return (
              <div
                key={item.id}
                className="bg-white border border-cream-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                    <img
                      src={item.image}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-darkTxt mb-2 group-hover:text-emeraldGreen-700 transition-colors">
                      {name}
                    </h3>

                    <p className="text-mutedDark text-xs leading-relaxed mb-4">
                      {desc}
                    </p>

                    {/* Where it's used */}
                    <div className="p-3 rounded-xl bg-cream-50 border border-cream-200 text-xs mb-4">
                      <span className="font-semibold text-emeraldGreen-800 block mb-0.5">
                        {language === 'ar'
                          ? 'موقع الاستخدام والتطبيق:'
                          : language === 'pt'
                          ? 'Onde é Utilizado:'
                          : 'Where it is used:'}
                      </span>
                      <span className="text-darkTxt">{whereUsed}</span>
                    </div>

                    {/* Key Specs */}
                    <div className="space-y-1.5 mb-6">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-mutedDark block">
                        {language === 'ar'
                          ? 'المواصفات الفنية:'
                          : language === 'pt'
                          ? 'Especificações:'
                          : 'Key Specifications:'}
                      </span>
                      {specs.map((s, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-darkTxt">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen-500 mt-0.5 shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Request Quote Button (No Price, No Cart per brief) */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => openQuoteModal(`Material Specification: ${name}`)}
                    className="w-full bg-forest-900 hover:bg-forest-800 group-hover:bg-emeraldGreen-600 text-white py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>{t.materials.requestSpecQuote}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
