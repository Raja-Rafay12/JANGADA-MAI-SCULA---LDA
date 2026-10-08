'use client';

import React, { useState, useEffect } from 'react';
import Link from './Link';
import { ROUTES } from '@/config/routes';
import { useLanguage } from '@/context/LanguageContext';
import { Shield } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('jm_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('jm_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('jm_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    en: {
      text: "We use essential cookies and anonymized analytics to enhance your experience, in compliance with international privacy standards and GDPR.",
      accept: "Accept All",
      decline: "Necessary Only",
      privacy: "Privacy Policy",
    },
    pt: {
      text: "Utilizamos cookies para assegurar a melhor experiência de navegação, em conformidade com o RGPD da UE e as normas internacionais de proteção de dados.",
      accept: "Aceitar Todos",
      decline: "Apenas Necessários",
      privacy: "Política de Privacidade",
    },
    ar: {
      text: "نستخدم ملفات تعريف الارتباط الأساسية لتحسين تجربة الاستخدام وفقاً للائحة حماية البيانات العامة والمعايير المعتمدة لخصوصية البيانات.",
      accept: "قبول الكل",
      decline: "الضرورية فقط",
      privacy: "سياسة الخصوصية",
    },
  }[language] || {
    text: "We use cookies to improve your browsing experience.",
    accept: "Accept All",
    decline: "Necessary Only",
    privacy: "Privacy Policy",
  };

  return (
    <div className="fixed bottom-4 inset-x-4 sm:start-auto sm:end-6 sm:max-w-md z-40 animate-in slide-in-from-bottom duration-300">
      <div className="bg-forest-950/95 backdrop-blur-md border border-forest-750 p-4 sm:p-5 rounded-2xl shadow-2xl text-white text-xs space-y-3">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-emeraldGreen-400 shrink-0 mt-0.5" />
          <p className="text-white/80 leading-relaxed font-light">
            {content.text}{' '}
            <Link
              href={ROUTES.privacy}
              className="text-emeraldGreen-400 hover:text-emeraldGreen-300 underline font-normal"
            >
              {content.privacy}
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 rounded-lg border border-forest-700 hover:bg-forest-900 text-white/70 hover:text-white transition-colors text-[11px]"
          >
            {content.decline}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-lg bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white font-medium transition-colors text-[11px] shadow-sm"
          >
            {content.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
