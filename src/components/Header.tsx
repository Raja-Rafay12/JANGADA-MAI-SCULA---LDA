'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { ArrowRight, Menu, X, ChevronDown, Leaf, Phone, Mail } from 'lucide-react';
import { Language } from '@/translations';
import { siteConfig } from '@/config/siteConfig';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_PREMIUM } from '@/lib/motion';

export function Header() {
  const { t, language, setLanguage, openQuoteModal, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setServicesDropdown(false);
      }
    };

    // Close on Escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    // 150ms delay so moving mouse into panel doesn't close it
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 150);
  };

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    {
      label: t.nav.services,
      href: '/services',
      hasDropdown: true,
      subItems: [
        { label: t.services.items[0]?.title || 'Gardening & Horticulture', href: '/services/gardening' },
        { label: t.services.items[1]?.title || 'Landscape Architecture', href: '/services/landscaping' },
        { label: t.services.items[2]?.title || 'Estate Maintenance', href: '/services/maintenance' },
        { label: t.services.items[3]?.title || 'Smart Irrigation Systems', href: '/services/irrigation' },
        { label: t.services.items[4]?.title || 'Agricultural Support', href: '/services/agriculture' },
        { label: t.services.items[5]?.title || 'Equipment & Materials', href: '/services/equipment-materials' },
      ],
    },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.maintenance, href: '/maintenance' },
    { label: t.nav.contact, href: '/contact' },
  ];

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header
      className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b2a20] shadow-xl border-b border-[#2f9e5f]/20'
          : 'bg-[#0b2a20]/90 backdrop-blur-md border-b border-white/10'
      }`}
    >
      {/* Top Bar for Direct Contact: Primary & Secondary */}
      <div className="hidden md:block border-b border-white/10 bg-[#071a13]/80 text-[11px] text-white/80 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* Primary Phone */}
            <a
              href={siteConfig.contact.primaryPhone.href}
              className="flex items-center gap-1.5 hover:text-emeraldGreen-400 transition-colors group"
            >
              <Phone className="w-3 h-3 text-emeraldGreen-400 shrink-0" />
              <span className="text-[10px] bg-emeraldGreen-500/20 text-emeraldGreen-400 border border-emeraldGreen-500/30 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                {language === 'ar' ? siteConfig.contact.primaryPhone.labelAr : language === 'pt' ? siteConfig.contact.primaryPhone.labelPt : siteConfig.contact.primaryPhone.labelEn}
              </span>
              <span className="font-mono text-white/95 group-hover:text-emeraldGreen-400 font-medium" dir="ltr">
                {siteConfig.contact.primaryPhone.display}
              </span>
            </a>

            {/* Secondary Phone */}
            <a
              href={siteConfig.contact.secondaryPhone.href}
              className="flex items-center gap-1.5 hover:text-emeraldGreen-400 transition-colors group"
            >
              <Phone className="w-3 h-3 text-white/50 shrink-0" />
              <span className="text-[10px] text-white/70 border border-white/20 px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider">
                {language === 'ar' ? siteConfig.contact.secondaryPhone.labelAr : language === 'pt' ? siteConfig.contact.secondaryPhone.labelPt : siteConfig.contact.secondaryPhone.labelEn}
              </span>
              <span className="font-mono text-white/80 group-hover:text-emeraldGreen-400" dir="ltr">
                {siteConfig.contact.secondaryPhone.display}
              </span>
            </a>

            {/* Email */}
            <a
              href={siteConfig.contact.email.href}
              className="flex items-center gap-1.5 hover:text-emeraldGreen-400 transition-colors group"
            >
              <Mail className="w-3 h-3 text-emeraldGreen-400 shrink-0" />
              <span className="text-white/85 group-hover:text-emeraldGreen-400" dir="ltr">
                {siteConfig.contact.email.address}
              </span>
            </a>
          </div>

          {/* WhatsApp Direct Link */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.contact.whatsapp.getUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emeraldGreen-400 hover:text-emeraldGreen-300 font-medium transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emeraldGreen-400 animate-pulse" />
              <span>WhatsApp:</span>
              <span className="font-mono" dir="ltr">{siteConfig.contact.whatsapp.numberDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Green Leaf */}
          <BrandLogo variant="light" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    ref={dropdownContainerRef}
                    className="relative py-2 group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdown(!servicesDropdown)}
                      aria-expanded={servicesDropdown}
                      aria-haspopup="true"
                      className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emeraldGreen-400 rounded-sm relative ${
                        isActive || pathname.startsWith('/services')
                          ? 'text-emeraldGreen-400'
                          : 'text-white/85 hover:text-white'
                      }`}
                    >
                      <Link href={item.href} onClick={(e) => e.stopPropagation()}>
                        <span>{item.label}</span>
                      </Link>
                      <motion.div
                        animate={{ rotate: servicesDropdown ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: EASE_PREMIUM }}
                      >
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </motion.div>

                      {/* Underline grows from center on hover or active */}
                      <span
                        className={`absolute -bottom-2 inset-x-0 h-[2px] bg-emeraldGreen-400 rounded-full transition-transform duration-200 origin-center ${
                          isActive || pathname.startsWith('/services')
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Panel: fade and slide down 8px */}
                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2, ease: EASE_PREMIUM }}
                          className="absolute top-full start-0 pt-2 z-[60]"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div
                            style={{ backgroundColor: '#0b2a20' }}
                            className="w-[290px] min-w-[280px] rounded-[12px] border border-[#2f9e5f]/25 shadow-2xl p-2 space-y-1 overflow-hidden"
                          >
                            {item.subItems?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setServicesDropdown(false)}
                                className="group/item flex items-center px-4 py-2.5 rounded-lg text-[15px] font-normal text-[#f3efe6] hover:text-[#2f9e5f] hover:bg-[rgba(47,158,95,0.14)] transition-all duration-150 whitespace-nowrap focus:outline-none focus:bg-[rgba(47,158,95,0.18)]"
                              >
                                <Leaf className="w-3.5 h-3.5 text-[#2f9e5f]/60 group-hover/item:text-[#2f9e5f] group-hover/item:scale-110 transition-all shrink-0 me-3" />
                                <span className="truncate">{sub.label}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={item.href} className="relative py-2 group">
                  <Link
                    href={item.href}
                    className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 flex items-center gap-1.5 relative ${
                      isActive ? 'text-emeraldGreen-400' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* Underline grows from center on hover or active */}
                    <span
                      className={`absolute -bottom-2 inset-x-0 h-[2px] bg-emeraldGreen-400 rounded-full transition-transform duration-200 origin-center ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Controls: Language Switcher & Quote Button */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher with sliding pill */}
            <div className="relative flex items-center bg-[#071a13] border border-white/15 rounded-md p-0.5 text-[11px] font-semibold">
              {(['pt', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleLangChange(lang)}
                  className="relative px-2.5 py-1 rounded transition-colors"
                >
                  {language === lang && (
                    <motion.div
                      layoutId="activeLangPillDesktop"
                      className="absolute inset-0 bg-emeraldGreen-600 rounded shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 font-bold ${
                      language === lang ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>

            {/* Request a Quote Button with micro-interactions */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE_PREMIUM }}
              onClick={() => openQuoteModal()}
              className="group inline-flex items-center gap-2 bg-[#2f9e5f] hover:bg-[#25854f] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-glow"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowRight
                className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 ${
                  isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`}
              />
            </motion.button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="relative flex items-center bg-[#071a13] border border-white/20 rounded-md p-0.5 text-[10px]">
              {(['pt', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLangChange(lang)}
                  className="relative px-2 py-0.5 rounded transition-colors"
                >
                  {language === lang && (
                    <motion.div
                      layoutId="activeLangPillMobile"
                      className="absolute inset-0 bg-emeraldGreen-600 rounded"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 font-bold ${
                      language === lang ? 'text-white' : 'text-white/70'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg bg-black/40 hover:bg-black/60 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 8. Mobile Drawer with Slide-in Panel and Staggered Links */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.28, ease: EASE_PREMIUM }}
            style={{ backgroundColor: '#0b2a20' }}
            className="lg:hidden border-b border-[#2f9e5f]/25 px-5 pt-4 pb-6 space-y-3 shadow-2xl overflow-hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
              }}
              className="flex flex-col space-y-1.5"
            >
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <motion.div
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: isRTL ? 15 : -15 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="space-y-1"
                    >
                      <div className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-bold tracking-wider uppercase text-white/95 hover:bg-forest-800/60 transition-colors">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex-1"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1 rounded-md text-emeraldGreen-400 hover:text-white"
                          aria-label="Toggle services submenu"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 transform ${
                              mobileServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable list on mobile */}
                      {mobileServicesOpen && (
                        <div className="ps-4 space-y-1.5 border-s-2 border-emeraldGreen-500/30 ms-4 py-1">
                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-2 py-2 text-[14px] text-[#f3efe6] hover:text-emeraldGreen-400 font-light"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emeraldGreen-400/60" />
                              <span>{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: isRTL ? 15 : -15 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-sm font-bold tracking-wider uppercase rounded-lg px-3 transition-colors ${
                        pathname === item.href
                          ? 'bg-forest-800/80 text-emeraldGreen-400'
                          : 'text-white/90 hover:bg-forest-800/60'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#2f9e5f] hover:bg-[#25854f] text-white font-bold uppercase tracking-wider py-3 rounded-lg text-xs shadow-md"
              >
                <span>{t.nav.requestQuote}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Quick Contact Links */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                <a
                  href={siteConfig.contact.primaryPhone.href}
                  className="flex items-center justify-center gap-1.5 bg-[#071a13] border border-white/15 py-2 px-2 rounded-lg text-white/90 hover:text-emeraldGreen-400"
                >
                  <Phone className="w-3 h-3 text-emeraldGreen-400 shrink-0" />
                  <span className="font-mono text-[11px]" dir="ltr">{siteConfig.contact.primaryPhone.display}</span>
                </a>
                <a
                  href={siteConfig.contact.whatsapp.getUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366]/20 border border-[#25D366]/40 py-2 px-2 rounded-lg text-emeraldGreen-300 hover:text-white"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
