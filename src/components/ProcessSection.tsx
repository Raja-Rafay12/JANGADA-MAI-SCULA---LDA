'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { MessageSquare, ClipboardCheck, Settings, Sprout, ArrowRight } from 'lucide-react';
import {
  fadeUpVariant,
  staggerContainer,
  staggerItem,
  VIEWPORT_REVEAL,
  EASE_PREMIUM,
} from '@/lib/motion';

export function ProcessSection() {
  const { t, isRTL } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const stepIcons = [
    <MessageSquare key="msg" className="w-5 h-5 text-emeraldGreen-600" strokeWidth={1.75} />,
    <ClipboardCheck key="clip" className="w-5 h-5 text-emeraldGreen-600" strokeWidth={1.75} />,
    <Settings key="cog" className="w-5 h-5 text-emeraldGreen-600" strokeWidth={1.75} />,
    <Sprout key="sprout" className="w-5 h-5 text-emeraldGreen-600" strokeWidth={1.75} />,
  ];

  return (
    <section className="bg-cream-200 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Fade Up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_REVEAL}
          variants={fadeUpVariant}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20"
        >
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-emeraldGreen-600 block mb-3">
              {t.process.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-darkTxt tracking-tight leading-tight">
              {t.process.title}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-mutedDark text-sm sm:text-base leading-relaxed">
              {t.process.subtitle}
            </p>
          </div>
        </motion.div>

        {/* 4 Process Steps: Staggered reveal + drawing connecting line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_REVEAL}
          variants={staggerContainer(0.15, 0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {t.process.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative flex flex-col items-start group"
            >
              {/* Top Row: Number pill + Icon + Arrow with drawing connecting line */}
              <div className="flex items-center gap-3 mb-6 w-full">
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-forest-900 text-white font-mono text-sm font-semibold flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className="w-10 h-10 rounded-full bg-white border border-cream-300 flex items-center justify-center shrink-0 group-hover:border-emeraldGreen-500 transition-colors shadow-sm">
                  {stepIcons[idx]}
                </div>

                {/* Connecting line drawing across using scaleX (60fps transform) */}
                {idx < t.process.steps.length - 1 && (
                  <div className="hidden lg:flex items-center flex-1 ps-2 pe-4 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: shouldReduceMotion ? 1 : 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={VIEWPORT_REVEAL}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.65,
                        delay: shouldReduceMotion ? 0 : idx * 0.15 + 0.25,
                        ease: EASE_PREMIUM,
                      }}
                      style={{ transformOrigin: isRTL ? 'right' : 'left' }}
                      className="h-[1.5px] bg-gradient-to-r from-emeraldGreen-500 to-cream-300 flex-1"
                    />
                    <ArrowRight
                      className={`w-3.5 h-3.5 text-emeraldGreen-600 ms-1 shrink-0 ${
                        isRTL ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-darkTxt mb-2 group-hover:text-emeraldGreen-700 transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-mutedDark text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
