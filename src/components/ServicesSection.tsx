'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Leaf, Trees, Scissors, Droplets, Sprout, Wrench, ArrowRight } from 'lucide-react';
import {
  fadeUpVariant,
  staggerContainer,
  staggerItem,
  VIEWPORT_REVEAL,
  EASE_PREMIUM,
} from '@/lib/motion';

export function ServicesSection() {
  const { t, isRTL } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    gardening: <Leaf className="w-6 h-6 text-emeraldGreen-500" strokeWidth={1.75} />,
    landscaping: <Trees className="w-6 h-6 text-emeraldGreen-500" strokeWidth={1.75} />,
    maintenance: <Scissors className="w-6 h-6 text-emeraldGreen-500" strokeWidth={1.75} />,
    irrigation: <Droplets className="w-6 h-6 text-emeraldGreen-500" strokeWidth={1.75} />,
    agriculture: <Sprout className="w-6 h-6 text-emeraldGreen-500" strokeWidth={1.75} />,
    'equipment-materials': <Wrench className="w-6 h-6 text-emeraldGreen-500" strokeWidth={1.75} />,
  };

  return (
    <section id="services" className="bg-cream-200 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Fade Up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_REVEAL}
          variants={fadeUpVariant}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16"
        >
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-emeraldGreen-600 block mb-3">
              {t.services.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-darkTxt tracking-tight leading-tight">
              {t.services.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-mutedDark text-sm sm:text-base leading-relaxed">
              {t.services.description}
            </p>
          </div>
        </motion.div>

        {/* 6 Services Cards Grid: Staggered Fade Up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_REVEAL}
          variants={staggerContainer(0.09, 0.05)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.services.items.map((service) => {
            const icon = iconMap[service.slug] || <Leaf className="w-6 h-6 text-emeraldGreen-500" />;

            return (
              <motion.div
                key={service.slug}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: EASE_PREMIUM }}
                className="bg-white/80 hover:bg-white border border-cream-300 hover:border-emeraldGreen-500/40 rounded-2xl p-8 transition-colors duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center mb-6 group-hover:bg-emeraldGreen-50 transition-colors">
                    {icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-darkTxt mb-3 group-hover:text-emeraldGreen-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-mutedDark text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Arrow Link */}
                <div className="pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emeraldGreen-600 group-hover:text-emeraldGreen-700 transition-colors"
                  >
                    <span>{t.services.learnMore}</span>
                    <ArrowRight
                      className={`w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200 ${
                        isRTL ? 'rotate-180 group-hover:-translate-x-1.5' : ''
                      }`}
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
