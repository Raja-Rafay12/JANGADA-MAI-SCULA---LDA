'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Leaf, Users, Star, Compass } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import {
  fadeUpVariant,
  staggerContainer,
  staggerItem,
  VIEWPORT_REVEAL,
} from '@/lib/motion';

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, VIEWPORT_REVEAL);
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState('0');

  // Extract numeric prefix and any suffix like +, %, °
  const match = value.match(/(\d+)(.*)/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion || target === 0) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    const duration = 1500; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Cubic ease out curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target, suffix, value, shouldReduceMotion]);

  return <span ref={ref}>{displayValue}</span>;
}

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      value: siteConfig.stats.yearsExperience,
      label: t.numbers.years,
      icon: <Leaf className="w-6 h-6 text-emeraldGreen-400 mb-3" strokeWidth={1.75} />,
    },
    {
      value: siteConfig.stats.projectsCompleted,
      label: t.numbers.projects,
      icon: <Users className="w-6 h-6 text-emeraldGreen-400 mb-3" strokeWidth={1.75} />,
    },
    {
      value: siteConfig.stats.clientRetentionRate,
      label: t.numbers.satisfaction,
      icon: <Star className="w-6 h-6 text-emeraldGreen-400 mb-3" strokeWidth={1.75} />,
    },
    {
      value: siteConfig.stats.endToEndSolutions,
      label: t.numbers.solutions,
      icon: <Compass className="w-6 h-6 text-emeraldGreen-400 mb-3" strokeWidth={1.75} />,
    },
  ];

  return (
    <section className="bg-forest-900 text-white py-20 relative overflow-hidden border-y border-forest-800">
      {/* Decorative leaf watermark */}
      <div className="absolute -end-16 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M10 90C10 90 20 40 60 20C60 20 80 50 60 80C45 100 10 90 10 90Z" fill="#2f9e5f" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Section Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_REVEAL}
            variants={fadeUpVariant}
            className="lg:col-span-4"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              {t.numbers.title}
            </h2>
          </motion.div>

          {/* 4 Stat columns with count-up animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_REVEAL}
            variants={staggerContainer(0.1, 0.1)}
            className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="flex flex-col items-start border-s border-forest-800 ps-6 group"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-1">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-white/70 text-xs sm:text-sm font-light leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
