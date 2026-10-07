'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export default function ProjectsPage() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-cream-200 min-h-screen">
      {/* Header Banner */}
      <section className="bg-forest-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emeraldGreen-400 block mb-3">
            {t.portfolio.tag}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {t.portfolio.title}
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            {language === 'ar'
              ? 'مجموعة منتقاة من أرقى مشاريعنا المنفذة في الفلل السكنية الفاخرة والمنتجعات والمساحات الخضراء.'
              : language === 'pt'
              ? 'Portfólio de empreitadas e projetos de paisagismo executados em moradias de luxo e empreendimentos de referência.'
              : 'Explore our portfolio of completed landscape architecture, irrigation networks, and estate gardens across all our project locations.'}
          </p>
        </div>
      </section>

      {/* Main Content with Static Emirates Pill */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end pb-8 border-b border-cream-300">
          {/* Static Non-Interactive "Emirates" Pill (Aligned to end of row: right in LTR, left in RTL) */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-emeraldGreen-600/30 bg-white text-emeraldGreen-700 shadow-xs select-none pointer-events-none">
            {t.portfolio.emirates}
          </span>
        </div>

        {/* Display-Only Project Cards Grid: 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-10">
          {projectsData.map((proj) => (
            <div key={proj.id} className="h-full">
              <ProjectCard project={proj} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
