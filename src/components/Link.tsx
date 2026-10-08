'use client';

import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>,
    NextLinkProps {
  children?: React.ReactNode;
  className?: string;
  locale?: string;
}

export function Link({ href, locale, children, className = '', ...props }: LinkProps) {
  const { language } = useLanguage();
  const currentLang = locale || language;

  let targetHref = href;

  if (typeof href === 'string') {
    // Only process internal relative links
    if (href.startsWith('/') && !href.startsWith('//')) {
      const [pathAndQuery, hash] = href.split('#');
      const [path, query] = pathAndQuery.split('?');

      const params = new URLSearchParams(query || '');
      if (currentLang && currentLang !== 'en') {
        params.set('lang', currentLang);
      } else if (currentLang === 'en' && params.has('lang')) {
        params.delete('lang');
      }

      const queryString = params.toString() ? `?${params.toString()}` : '';
      const hashString = hash ? `#${hash}` : '';
      targetHref = `${path}${queryString}${hashString}`;
    }
  }

  return (
    <NextLink href={targetHref} className={className} {...props}>
      {children}
    </NextLink>
  );
}

export default Link;
