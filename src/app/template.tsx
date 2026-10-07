'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_PREMIUM } from '@/lib/motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: EASE_PREMIUM }}
      className="w-full flex-1"
    >
      {children}
    </motion.div>
  );
}
