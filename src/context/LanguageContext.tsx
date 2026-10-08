'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, Translations } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
  isQuoteModalOpen: boolean;
  prefilledService: string | undefined;
  openQuoteModal: (service?: string) => void;
  closeQuoteModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Check URL query param first, then localStorage
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const paramLang = params.get('lang') as Language;
      if (paramLang && (paramLang === 'en' || paramLang === 'pt' || paramLang === 'ar')) {
        setLanguageState(paramLang);
        try {
          localStorage.setItem('jm_language', paramLang);
        } catch {}
        return;
      }
    }
    const saved = localStorage.getItem('jm_language') as Language;
    if (saved === 'en' || saved === 'pt' || saved === 'ar') {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    // Update document HTML attributes for RTL/LTR and language code
    const isArabic = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    if (isArabic) {
      document.documentElement.classList.add('font-arabic');
    } else {
      document.documentElement.classList.remove('font-arabic');
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('jm_language', lang);
    } catch {
      // ignore
    }
  };

  const openQuoteModal = (service?: string) => {
    setPrefilledService(service);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPrefilledService(undefined);
  };

  const isRTL = language === 'ar';
  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isRTL,
        isQuoteModalOpen,
        prefilledService,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
