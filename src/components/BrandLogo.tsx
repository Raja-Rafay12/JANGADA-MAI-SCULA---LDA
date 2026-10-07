'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function BrandLogo({ variant = 'light', className = '' }: BrandLogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Botanical Leaf Emblem matching the mockup */}
      <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        >
          {/* Outer elegant leaf curve */}
          <path
            d="M8 32C8 32 10 18 24 10C24 10 28 20 22 28C17 34 8 32 8 32Z"
            fill="#2f9e5f"
            className="transition-colors duration-300 group-hover:fill-emeraldGreen-400"
          />
          {/* Inner accent leaf */}
          <path
            d="M20 28C20 28 24 14 34 8C34 8 36 18 30 24C25 29 20 28 20 28Z"
            fill="#7fd99f"
            fillOpacity="0.85"
          />
          {/* Subtle stem */}
          <path
            d="M10 33C14 26 21 21 28 17"
            stroke="#0b2a20"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col text-start">
        <span
          className={`font-serif tracking-wider font-semibold text-base uppercase leading-tight ${
            isLight ? 'text-white' : 'text-forest-900'
          }`}
        >
          Jangada
        </span>
        <span
          className={`text-[9px] tracking-[0.2em] font-medium uppercase leading-tight ${
            isLight ? 'text-emeraldGreen-400' : 'text-forest-700'
          }`}
        >
          Maiúscula – Lda.
        </span>
      </div>
    </Link>
  );
}
