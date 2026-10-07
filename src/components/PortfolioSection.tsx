'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import {
  fadeUpVariant,
  VIEWPORT_REVEAL,
} from '@/lib/motion';

export function PortfolioSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-cream-200 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Static Emirates Pill */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_REVEAL}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-emeraldGreen-600 block mb-3">
              {t.portfolio.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-darkTxt tracking-tight">
              {t.portfolio.title}
            </h2>
          </div>

          {/* Non-Interactive Static "Emirates" Pill (Aligned to end of row: right in LTR, left in RTL) */}
          <div className="self-start sm:self-end">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-emeraldGreen-600/30 bg-white text-emeraldGreen-700 shadow-xs select-none pointer-events-none">
              {t.portfolio.emirates}
            </span>
          </div>
        </motion.div>

        {/* Display-Only Projects Grid: 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
