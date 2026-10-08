'use client';

import React, { useState } from 'react';
import Link from '@/components/Link';
import { ROUTES } from '@/config/routes';
import { useLanguage } from '@/context/LanguageContext';
import { materialsData, MaterialItem } from '@/data/materials';
import { Leaf, ArrowRight } from 'lucide-react';

function MaterialCard({ item }: { item: MaterialItem }) {
  const { language, isRTL } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const name =
    language === 'pt' ? item.namePt : language === 'ar' ? item.nameAr : item.nameEn;
  const category =
    language === 'pt' ? item.categoryPt : language === 'ar' ? item.categoryAr : item.categoryEn;
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

  const quoteButtonLabel =
    language === 'ar'
      ? 'طلب عرض أسعار'
      : language === 'pt'
      ? 'Solicitar Orçamento'
      : 'Request a Quote';

  const whereUsedLabel =
    language === 'ar'
      ? "أماكن الاستخدام:"
      : language === 'pt'
      ? "Onde é utilizado:"
      : "Where it's used:";

  return (
    <div className="bg-white border border-cream-300 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full justify-between">
      <div>
        {/* Fixed 4/3 Aspect Ratio Image with Dark Green Leaf-Icon Placeholder */}
        <div className="relative aspect-[4/3] w-full bg-forest-950 overflow-hidden shrink-0">
          {imageError ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-forest-950">
              <div className="w-12 h-12 rounded-full bg-forest-900 border border-emeraldGreen-500/30 flex items-center justify-center mb-2.5">
                <Leaf className="w-6 h-6 text-emeraldGreen-400" />
              </div>
              <span className="text-xs font-serif text-white/80 font-medium line-clamp-1">
                {name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emeraldGreen-400/70 font-semibold mt-1">
                Jangada Maiúscula
              </span>
            </div>
          ) : (
            <img
              src={item.image}
              alt=""
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>

        {/* Content Container */}
        <div className="p-6">
          {/* Category Label */}
          <span className="text-[11px] uppercase tracking-wider font-semibold text-emeraldGreen-600 block mb-2">
            {category}
          </span>

          {/* Plain-language Name */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-darkTxt mb-3">
            {name}
          </h3>

          {/* One Short General Sentence */}
          <p className="text-mutedDark text-xs sm:text-sm leading-relaxed mb-4">
            {desc}
          </p>

          {/* Short Where it's used line */}
          <div className="pt-3 border-t border-cream-200 text-xs">
            <span className="font-semibold text-darkTxt me-1.5">
              {whereUsedLabel}
            </span>
            <span className="text-mutedDark">{whereUsed}</span>
          </div>
        </div>
      </div>

      {/* Button: Request a Quote linking to Contact page with prefilled item in message */}
      <div className="p-6 pt-0">
        <Link
          href={`${ROUTES.contact}?item=${encodeURIComponent(name)}`}
          className="w-full bg-forest-900 hover:bg-forest-800 text-white py-3 px-5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
        >
          <span>{quoteButtonLabel}</span>
          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
        </Link>
      </div>
    </div>
  );
}

export default function MaterialsPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', labelEn: 'All', labelPt: 'Todos', labelAr: 'الكل' },
    { key: 'palms', labelEn: 'Palms', labelPt: 'Palmeiras', labelAr: 'النخيل' },
    { key: 'trees', labelEn: 'Trees', labelPt: 'Árvores', labelAr: 'الأشجار' },
    { key: 'turf', labelEn: 'Turf', labelPt: 'Relva', labelAr: 'المسطحات العشبية' },
    { key: 'irrigation', labelEn: 'Irrigation', labelPt: 'Irrigação', labelAr: 'أنظمة الري' },
  ];

  const filtered = materialsData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categoryKey === activeCategory;
  });

  return (
    <div className="pt-28 pb-20 bg-cream-200 min-h-screen">
      {/* Header Banner */}
      <section className="bg-forest-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emeraldGreen-400 block mb-3">
            {t.nav.materials}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {language === 'ar'
              ? 'المواد والمعدات'
              : language === 'pt'
              ? 'Equipamentos e Materiais'
              : 'Materials & Equipment'}
          </h1>
          <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
            {language === 'ar'
              ? 'أصناف نباتية وشبكات ري مختارة لمشاريع الحدائق والمساحات الخضراء.'
              : language === 'pt'
              ? 'Espécies botânicas e sistemas de rega para projetos de paisagismo e espaços verdes.'
              : 'Plant selections, turf and irrigation components for gardens and landscaped spaces.'}
          </p>
        </div>
      </section>

      {/* Showcase Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
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

        {/* 3-Column Grid (2 on tablet, 1 on mobile) with Equal Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="h-full">
              <MaterialCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
