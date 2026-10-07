'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { EASE_PREMIUM } from '@/lib/motion';

export function Hero() {
  const { t, openQuoteModal, isRTL } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const heroImagePath = '/images/hero.jpg';

  const { scrollY } = useScroll();
  // Subtle parallax: background moves slower than page
  const yPhoto = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : 120]);

  const handleImageError = () => {
    console.warn(
      `[Jangada Hero Warning]: Background image failed to load or file missing at ${heroImagePath}. Displaying dark green fallback (#0b2a20).`
    );
    setImageError(true);
  };

  // Mask styles using logical direction for RTL / LTR
  const photoMaskStyle: React.CSSProperties = isRTL
    ? {
        WebkitMaskImage:
          'linear-gradient(to left, transparent 0%, transparent 25%, black 65%, black 100%)',
        maskImage:
          'linear-gradient(to left, transparent 0%, transparent 25%, black 65%, black 100%)',
      }
    : {
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, transparent 25%, black 65%, black 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, transparent 25%, black 65%, black 100%)',
      };

  const blurMaskStyle: React.CSSProperties = isRTL
    ? {
        WebkitMaskImage:
          'linear-gradient(to left, black 0%, black 35%, transparent 75%, transparent 100%)',
        maskImage:
          'linear-gradient(to left, black 0%, black 35%, transparent 75%, transparent 100%)',
      }
    : {
        WebkitMaskImage:
          'linear-gradient(to right, black 0%, black 35%, transparent 75%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, black 0%, black 35%, transparent 75%, transparent 100%)',
      };

  // Stagger variants for content
  const heroContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-0 overflow-hidden bg-[#0b2a20]">
      {/* 1. Base Layer: Solid Dark Forest Green (#0b2a20) */}
      <div className="absolute inset-0 z-0 bg-[#0b2a20]" />

      {!imageError && (
        <motion.div
          style={{ y: yPhoto }}
          className="absolute inset-0 z-0 select-none overflow-hidden"
        >
          {/* Background photo slowly zooms from 1.08 to 1 over ~2s, then stays still */}
          <motion.div
            initial={{ scale: shouldReduceMotion ? 1 : 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 2.0, ease: EASE_PREMIUM }}
            className="absolute inset-0 w-full h-full"
          >
            {/* 4. Blur Layer: Behind main photo, filter blur(28px), scale(1.1), masked opposite way */}
            <div
              className="absolute inset-0 hidden md:block scale-110 pointer-events-none transition-transform duration-1000"
              style={{
                filter: 'blur(28px)',
                ...blurMaskStyle,
              }}
            >
              <Image
                src={heroImagePath}
                alt=""
                fill
                priority
                quality={60}
                sizes="100vw"
                className="object-cover object-[right_center]"
                onError={handleImageError}
              />
            </div>

            {/* 2 & 3. Photo Layer with Fade Mask: bright on right side, dissolving into dark green on left */}
            <div
              className="absolute inset-0 hidden md:block pointer-events-none"
              style={photoMaskStyle}
            >
              <Image
                src={heroImagePath}
                alt="Jangada Maiúscula Luxury Landscaping"
                fill
                priority
                quality={92}
                sizes="100vw"
                className="object-cover object-[right_center]"
                onError={handleImageError}
              />
            </div>

            {/* Mobile Photo: centered with clean visibility */}
            <div className="absolute inset-0 md:hidden pointer-events-none">
              <Image
                src={heroImagePath}
                alt="Jangada Maiúscula Luxury Landscaping"
                fill
                priority
                quality={85}
                sizes="100vw"
                className="object-cover object-center"
                onError={handleImageError}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* 5. Overlay Layer */}
      {/* Mobile Strong Dark Overlay for crystal clear readability */}
      <div className="absolute inset-0 z-10 bg-[#0b2a20]/80 md:hidden pointer-events-none" />

      {/* Desktop Dark Green Gradient Overlay */}
      <div
        className={`absolute inset-0 z-10 hidden md:block pointer-events-none ${
          isRTL
            ? 'bg-gradient-to-l from-[#0b2a20]/85 via-[#0b2a20]/45 to-[#0b2a20]/10'
            : 'bg-gradient-to-r from-[#0b2a20]/85 via-[#0b2a20]/45 to-[#0b2a20]/10'
        }`}
      />

      {/* Thin Dark Gradient at the very top so the sticky header stays readable */}
      <div className="absolute inset-x-0 top-0 h-32 z-10 bg-gradient-to-b from-[#0b2a20]/95 via-[#0b2a20]/40 to-transparent pointer-events-none" />

      {/* 6. Content Layer: Sits above everything (z-20) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-12">
        <motion.div
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:max-w-3xl"
        >
          {/* Tag Line Badge */}
          <motion.div variants={heroItemVariants} className="inline-flex items-center gap-2 mb-5">
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-semibold uppercase text-emeraldGreen-400 bg-[#0b2a20]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-emeraldGreen-500/30 shadow-sm">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={heroItemVariants}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            className="font-serif font-bold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={heroItemVariants}
            className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl font-light leading-relaxed mb-10 drop-shadow"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* Two Action Buttons with micro-interactions */}
          <motion.div variants={heroItemVariants} className="flex flex-wrap items-center gap-4">
            {/* Primary Filled Green Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE_PREMIUM }}
              onClick={() => openQuoteModal()}
              className="group inline-flex items-center gap-3 bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white font-medium px-8 py-3.5 rounded-full text-xs sm:text-sm lg:text-base transition-colors duration-200 shadow-xl hover:shadow-glow"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${
                  isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`}
              />
            </motion.button>

            {/* Secondary Outlined Button */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE_PREMIUM }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/35 text-xs sm:text-sm lg:text-base font-medium px-7 py-3.5 rounded-full transition-colors duration-200 backdrop-blur-sm"
              >
                <span>{t.hero.ctaSecondary}</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator: Gently bobs up and down */}
        <div className="mt-14 sm:mt-18 flex justify-end">
          <motion.a
            href="#services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-widest transition-colors duration-300 group"
          >
            <span>{t.hero.scrollDown}</span>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-emeraldGreen-400 group-hover:bg-[#0b2a20]/70 transition-colors"
            >
              <ArrowDown className="w-3.5 h-3.5 text-white/70 group-hover:text-emeraldGreen-400" />
            </motion.div>
          </motion.a>
        </div>
      </div>

      {/* 7. Bottom: Curved Cream (#f3efe6) Divider flowing into Services section */}
      <div className="relative z-20 w-full overflow-hidden leading-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 text-[#f3efe6] block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,80 720,95 1440,20 L1440,90 L0,90 Z"
            fill="#f3efe6"
          />
        </svg>
      </div>
    </section>
  );
}
