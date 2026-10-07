'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { fadeUpVariant, VIEWPORT_REVEAL, EASE_PREMIUM } from '@/lib/motion';

export function CtaSection() {
  const { t, openQuoteModal, isRTL, language } = useLanguage();

  const registeredOfficeLabel =
    language === 'ar'
      ? siteConfig.locations.registeredOffice.labelAr
      : language === 'pt'
      ? siteConfig.locations.registeredOffice.labelPt
      : siteConfig.locations.registeredOffice.labelEn;

  return (
    <section className="relative bg-forest-950 text-white py-20 lg:py-24 overflow-hidden">
      {/* Background Gardener Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage: `url(${siteConfig.images.ctaGardener})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_REVEAL}
          variants={fadeUpVariant}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Text & CTA Button */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              {t.cta.title}
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-light">
              {t.cta.subtitle}
            </p>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE_PREMIUM }}
              onClick={() => openQuoteModal()}
              className="group inline-flex items-center gap-3 bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white font-medium px-8 py-3.5 rounded-full text-sm sm:text-base transition-colors duration-200 shadow-lg hover:shadow-glow"
            >
              <span>{t.cta.button}</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${
                  isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`}
              />
            </motion.button>
          </div>

          {/* Right Direct Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col space-y-4 text-sm font-light text-white/90">
            {/* Phone 1: Primary */}
            <a
              href={siteConfig.contact.primaryPhone.href}
              className="flex items-center gap-3 hover:text-emeraldGreen-300 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-forest-900 border border-emeraldGreen-500/40 flex items-center justify-center group-hover:border-emeraldGreen-400 shrink-0">
                <Phone className="w-4 h-4 text-emeraldGreen-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[10px] bg-emeraldGreen-500/20 text-emeraldGreen-400 border border-emeraldGreen-500/40 px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                  {language === 'ar' ? siteConfig.contact.primaryPhone.labelAr : language === 'pt' ? siteConfig.contact.primaryPhone.labelPt : siteConfig.contact.primaryPhone.labelEn}
                </span>
                <span className="font-mono text-sm font-semibold text-white" dir="ltr">
                  {siteConfig.contact.primaryPhone.display}
                </span>
              </div>
            </a>

            {/* Phone 2: Secondary */}
            <a
              href={siteConfig.contact.secondaryPhone.href}
              className="flex items-center gap-3 hover:text-emeraldGreen-300 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-forest-900 border border-forest-700 flex items-center justify-center group-hover:border-emeraldGreen-400 shrink-0">
                <Phone className="w-4 h-4 text-white/70" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 rounded font-medium uppercase tracking-wider">
                  {language === 'ar' ? siteConfig.contact.secondaryPhone.labelAr : language === 'pt' ? siteConfig.contact.secondaryPhone.labelPt : siteConfig.contact.secondaryPhone.labelEn}
                </span>
                <span className="font-mono text-sm text-white/85" dir="ltr">
                  {siteConfig.contact.secondaryPhone.display}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={siteConfig.contact.email.href}
              className="flex items-center gap-3 hover:text-emeraldGreen-300 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-forest-900 border border-forest-700 flex items-center justify-center group-hover:border-emeraldGreen-400 shrink-0">
                <Mail className="w-4 h-4 text-emeraldGreen-400" />
              </div>
              <span dir="ltr">{siteConfig.contact.email.address}</span>
            </a>

            {/* Registered Office (Portugal) */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-forest-900 border border-forest-700 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-emeraldGreen-400" />
              </div>
              <div>
                <span className="text-[11px] text-emeraldGreen-400 font-semibold uppercase block">
                  {registeredOfficeLabel}
                </span>
                <span className="text-xs text-white/75 leading-relaxed block">
                  {siteConfig.locations.registeredOffice.fullAddress}
                </span>
              </div>
            </div>

            {/* Social Icons (Only show if non-empty URL) */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-forest-900/80 border border-forest-700 flex items-center justify-center hover:bg-emeraldGreen-500 hover:border-emeraldGreen-400 text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-forest-900/80 border border-forest-700 flex items-center justify-center hover:bg-emeraldGreen-500 hover:border-emeraldGreen-400 text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-forest-900/80 border border-forest-700 flex items-center justify-center hover:bg-emeraldGreen-500 hover:border-emeraldGreen-400 text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
