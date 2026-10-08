'use client';

import React, { useState } from 'react';
import Link from '@/components/Link';
import { ROUTES } from '@/config/routes';

export interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'header' | 'footer' | 'default';
  priority?: boolean;
  className?: string;
}

export function Logo({
  variant = 'light',
  size = 'default',
  className = '',
}: LogoProps) {
  const isLight = variant === 'light';

  // Leaves icon from public/images/logo/
  const initialIcon = isLight
    ? '/images/logo/logo-icon-light.png'
    : '/images/logo/logo-icon-dark.png';

  const [iconSrc, setIconSrc] = useState(initialIcon);

  // Height configurations:
  // Header: 44px on desktop, 36px on mobile
  // Footer: 52px on desktop, 44px on mobile
  const isHeader = size === 'header';
  const isFooter = size === 'footer';

  const iconClasses = isFooter
    ? 'h-[44px] sm:h-[52px] w-auto object-contain shrink-0'
    : isHeader
    ? 'h-[36px] sm:h-[44px] w-auto object-contain shrink-0'
    : 'h-[36px] sm:h-[44px] w-auto object-contain shrink-0';

  const headingClasses = isFooter
    ? 'text-xl sm:text-2xl font-bold font-serif tracking-wider leading-none'
    : isHeader
    ? 'text-base sm:text-lg lg:text-xl font-bold font-serif tracking-wider leading-none'
    : 'text-base sm:text-lg font-bold font-serif tracking-wider leading-none';

  const subtitleClasses = isFooter
    ? 'text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.22em] uppercase leading-tight mt-1'
    : isHeader
    ? 'text-[8.5px] sm:text-[9.5px] font-sans font-semibold tracking-[0.22em] uppercase leading-tight mt-0.5 sm:mt-1'
    : 'text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.22em] uppercase leading-tight mt-0.5';

  return (
    <Link
      href={ROUTES.home}
      className={`inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldGreen-400 focus-visible:ring-offset-2 rounded-lg transition-transform hover:opacity-95 select-none ${className}`}
      aria-label="JANGADA MAIÚSCULA – LDA."
    >
      {/* 1. Leaves icon image directly on background */}
      <img
        src={iconSrc}
        alt=""
        onError={() => setIconSrc('/images/logo-dark.png')}
        className={iconClasses}
      />

      {/* 2. Real text company name lockup */}
      <div className="flex flex-col justify-center text-start">
        <span
          className={`${headingClasses} ${
            isLight ? 'text-[#f3efe6]' : 'text-forest-950'
          }`}
        >
          JANGADA
        </span>
        <span
          className={`${subtitleClasses} ${
            isLight ? 'text-emeraldGreen-400' : 'text-emeraldGreen-600'
          }`}
        >
          MAIÚSCULA • LDA.
        </span>
      </div>
    </Link>
  );
}

export default Logo;
