'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Leaf, ShieldCheck, Users, Handshake, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import {
  VIEWPORT_REVEAL,
  EASE_PREMIUM,
  staggerContainer,
  staggerItem,
} from '@/lib/motion';

export function AboutSection() {
  const { t, isRTL } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Direction multiplier: in RTL, layout is reversed so x directions flip
  const dirMultiplier = isRTL ? -1 : 1;

  const valueIcons = [
    <Leaf key="leaf" className="w-5 h-5 text-emeraldGreen-400" strokeWidth={1.75} />,
    <ShieldCheck key="shield" className="w-5 h-5 text-emeraldGreen-400" strokeWidth={1.75} />,
    <Users key="users" className="w-5 h-5 text-emeraldGreen-400" strokeWidth={1.75} />,
    <Handshake key="handshake" className="w-5 h-5 text-emeraldGreen-400" strokeWidth={1.75} />,
  ];

  return (
    <section id="about" className="bg-forest-900 text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background subtle botanical pattern */}
      <div className="absolute -end-20 -top-20 w-96 h-96 rounded-full bg-forest-800/20 blur-3xl pointer-events-none" />
      <div className="absolute -start-20 -bottom-20 w-96 h-96 rounded-full bg-emeraldGreen-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Half: Story + Image with directional slides */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 overflow-hidden">
          {/* Text Column: slides from start side */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -45 * dirMultiplier }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_REVEAL}
            transition={{ duration: 0.75, ease: EASE_PREMIUM }}
            className="lg:col-span-6"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-emeraldGreen-400 block mb-3">
              {t.about.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {t.about.title}
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
              {t.about.description}
            </p>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE_PREMIUM }}
              className="inline-block"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white font-medium px-7 py-3 rounded-full text-sm transition-colors duration-200 shadow-md hover:shadow-glow"
              >
                <span>{t.about.cta}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image: slides from opposite side */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 45 * dirMultiplier }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_REVEAL}
            transition={{ duration: 0.75, ease: EASE_PREMIUM }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-forest-700/60 aspect-[4/3] group">
              <div
                className="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${siteConfig.images.aboutVilla})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            </div>

            {/* Decorative Stylized Leaf Emblem */}
            <div className="absolute -top-6 -end-6 w-24 h-24 pointer-events-none opacity-40 lg:opacity-75">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M10 90C10 90 20 40 60 20C60 20 80 50 60 80C45 100 10 90 10 90Z" fill="#2f9e5f" fillOpacity="0.6" />
                <path d="M50 80C50 80 65 35 95 15C95 15 100 45 85 70C70 90 50 80 50 80Z" fill="#7fd99f" fillOpacity="0.4" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bottom Half: 4 Value Cards with Staggered Fade Up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_REVEAL}
          variants={staggerContainer(0.08, 0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-forest-800"
        >
          {t.about.values.map((val, idx) => (
            <motion.div
              key={val.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: EASE_PREMIUM }}
              className="bg-forest-950/50 border border-forest-800/80 rounded-xl p-6 transition-colors duration-300 hover:border-emeraldGreen-500/50 hover:bg-forest-950/80 group"
            >
              <div className="w-10 h-10 rounded-lg bg-forest-800/70 flex items-center justify-center mb-4 group-hover:bg-emeraldGreen-500/20 transition-colors">
                {valueIcons[idx]}
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                {val.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
