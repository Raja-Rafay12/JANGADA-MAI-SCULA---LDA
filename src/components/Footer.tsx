'use client';

import React, { useState } from 'react';
import Link from './Link';
import { ROUTES } from '@/config/routes';
import { useLanguage } from '@/context/LanguageContext';
import { Logo } from './Logo';
import { ArrowRight, Check, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function Footer() {
  const { t, isRTL, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const registeredOfficeLabel =
    language === 'ar'
      ? siteConfig.locations.registeredOffice.labelAr
      : language === 'pt'
      ? siteConfig.locations.registeredOffice.labelPt
      : siteConfig.locations.registeredOffice.labelEn;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (!consent) {
      setError('Please agree to privacy terms');
      return;
    }
    setError('');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
      setConsent(false);
    }, 4000);
  };

  return (
    <footer className="bg-forest-950 text-white pt-16 pb-12 border-t border-forest-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-forest-800/80">
          {/* Col 1: Brand, Registered Office & Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="footer" />
            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            {/* Registered Office (Portugal) */}
            <div className="pt-2 text-xs text-white/75 space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emeraldGreen-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-emeraldGreen-400 block mb-0.5">
                    {registeredOfficeLabel}
                  </span>
                  <p className="text-white/80 leading-relaxed">
                    {siteConfig.locations.registeredOffice.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email with dir="ltr" for Arabic compliance */}
            <div className="pt-2 space-y-2 text-xs text-white/85">
              {/* Primary Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-emeraldGreen-400 shrink-0" />
                <span className="text-[10px] bg-emeraldGreen-500/20 text-emeraldGreen-400 border border-emeraldGreen-500/40 px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider">
                  {language === 'ar' ? siteConfig.contact.primaryPhone.labelAr : language === 'pt' ? siteConfig.contact.primaryPhone.labelPt : siteConfig.contact.primaryPhone.labelEn}
                </span>
                <a
                  href={siteConfig.contact.primaryPhone.href}
                  dir="ltr"
                  className="font-mono text-white font-semibold hover:text-emeraldGreen-300 transition-colors"
                >
                  {siteConfig.contact.primaryPhone.display}
                </a>
              </div>

              {/* Secondary Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-white/60 shrink-0" />
                <span className="text-[10px] border border-white/20 text-white/60 px-1.5 py-0.5 rounded font-medium uppercase tracking-wider">
                  {language === 'ar' ? siteConfig.contact.secondaryPhone.labelAr : language === 'pt' ? siteConfig.contact.secondaryPhone.labelPt : siteConfig.contact.secondaryPhone.labelEn}
                </span>
                <a
                  href={siteConfig.contact.secondaryPhone.href}
                  dir="ltr"
                  className="font-mono text-white/85 hover:text-emeraldGreen-300 transition-colors"
                >
                  {siteConfig.contact.secondaryPhone.display}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-emeraldGreen-400 shrink-0" />
                <a
                  href={siteConfig.contact.email.href}
                  dir="ltr"
                  className="text-white hover:text-emeraldGreen-300 transition-colors"
                >
                  {siteConfig.contact.email.address}
                </a>
              </div>
            </div>

            {/* Social Icons (Only rendered if URL is not empty) */}
            <div className="flex items-center gap-3 pt-3">
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-forest-900 border border-forest-750 flex items-center justify-center hover:bg-emeraldGreen-500 text-white/80 hover:text-white transition-all"
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
                  className="w-8 h-8 rounded-full bg-forest-900 border border-forest-750 flex items-center justify-center hover:bg-emeraldGreen-500 text-white/80 hover:text-white transition-all"
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
                  className="w-8 h-8 rounded-full bg-forest-900 border border-forest-750 flex items-center justify-center hover:bg-emeraldGreen-500 text-white/80 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-emeraldGreen-400 font-semibold">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs font-light text-white/75">
              <li>
                <Link href={ROUTES.servicesList.gardening} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.services.items[0]?.title || 'Gardening'}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.servicesList.landscaping} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.services.items[1]?.title || 'Landscaping'}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.servicesList.irrigation} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.services.items[3]?.title || 'Irrigation'}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.servicesList.maintenance} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.services.items[2]?.title || 'Maintenance'}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.servicesList.agriculture} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.services.items[4]?.title || 'Agriculture'}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.materials} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.services.items.find((i) => i.slug === 'equipment-materials')?.title || t.nav.materials}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-emeraldGreen-400 font-semibold">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-2 text-xs font-light text-white/75">
              <li>
                <Link href={ROUTES.about} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.projects} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.maintenancePlans} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.nav.maintenance}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.blog} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.contact} className="hover:text-emeraldGreen-300 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Box with Consent Checkbox */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-emeraldGreen-400 font-semibold">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-white/70 text-xs leading-relaxed font-light">
              {t.footer.newsletterDesc}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center rounded-lg overflow-hidden border border-forest-700/80 bg-forest-900/90 focus-within:border-emeraldGreen-500 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  className="bg-transparent px-3 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none flex-1 w-full"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white px-4 py-2.5 text-xs font-medium transition-colors flex items-center justify-center shrink-0"
                  aria-label="Subscribe"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  )}
                </button>
              </div>

              {/* GDPR / Consent Checkbox */}
              <label className="flex items-start gap-2 pt-1 text-[11px] text-white/60 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-forest-700 text-emeraldGreen-500 focus:ring-0 bg-forest-900"
                />
                <span>{t.footer.newsletterConsent}</span>
              </label>

              {error && <p className="text-[11px] text-red-400">{error}</p>}
              {subscribed && (
                <p className="text-[11px] text-emeraldGreen-400">
                  Subscribed successfully! Thank you.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Exact Legal Line required in Rule 6 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/50">
          <p>© 2026 {siteConfig.company.legalName} All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href={ROUTES.privacy} className="hover:text-emeraldGreen-400 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href={ROUTES.cookies} className="hover:text-emeraldGreen-400 transition-colors">
              {t.footer.cookies}
            </Link>
            <Link href={ROUTES.terms} className="hover:text-emeraldGreen-400 transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
