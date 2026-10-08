'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

export interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'header' | 'footer' | 'default';
  priority?: boolean;
  className?: string;
}

export function Logo({
  variant = 'light',
  size = 'default',
  priority = false,
  className = '',
}: LogoProps) {
  const { language } = useLanguage();
  const [hasError, setHasError] = useState(false);

  // User-provided logo file in public/images/logo.jpeg
  const logoSrc = '/images/logo.jpeg';

  const href = language && language !== 'en' ? `/?lang=${language}` : '/';

  // Sizing definitions:
  // Desktop header: 44px (width 73px), Mobile header: 36px (width 60px)
  // Footer: 56px (width 93px)
  const isHeader = size === 'header';
  const isFooter = size === 'footer';

  const width = isFooter ? 93 : 73;
  const height = isFooter ? 56 : 44;

  const imageClasses = isHeader
    ? 'h-[36px] sm:h-[44px] w-auto object-contain rounded-md'
    : isFooter
    ? 'h-[56px] w-auto object-contain rounded-md'
    : 'h-[44px] w-auto object-contain rounded-md';

  return (
    <Link
      href={href}
      className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldGreen-400 focus-visible:ring-offset-2 rounded-lg transition-transform hover:opacity-95 ${className}`}
      aria-label={siteConfig.company.legalName}
    >
      {hasError ? (
        <span
          className={`font-serif font-bold tracking-wider text-base uppercase ${
            variant === 'light' ? 'text-white' : 'text-forest-900'
          }`}
        >
          {siteConfig.company.legalName}
        </span>
      ) : (
        <Image
          src={logoSrc}
          alt="JANGADA MAIÚSCULA – LDA."
          width={width}
          height={height}
          priority={priority}
          onError={() => setHasError(true)}
          className={imageClasses}
        />
      )}
    </Link>
  );
}

export default Logo;
