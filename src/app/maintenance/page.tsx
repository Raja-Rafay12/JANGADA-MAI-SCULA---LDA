'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { maintenancePlansData } from '@/data/maintenancePlans';
import { Check, ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';

export default function MaintenancePage() {
  const { t, language, isRTL, openQuoteModal } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      {/* Header */}
      <section className="bg-forest-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emeraldGreen-400 block mb-3">
            {t.nav.maintenance}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {t.maintenance.title}
          </h1>
          <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
            {t.maintenance.subtitle}
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {maintenancePlansData.map((plan) => {
            const tier =
              language === 'pt' ? plan.tierPt : language === 'ar' ? plan.tierAr : plan.tierEn;
            const suitable =
              language === 'pt'
                ? plan.suitableForPt
                : language === 'ar'
                ? plan.suitableForAr
                : plan.suitableForEn;
            const cadence =
              language === 'pt' ? plan.cadencePt : language === 'ar' ? plan.cadenceAr : plan.cadenceEn;
            const features =
              language === 'pt'
                ? plan.featuresPt
                : language === 'ar'
                ? plan.featuresAr
                : plan.featuresEn;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-forest-900 text-white border-2 border-emeraldGreen-500 shadow-xl'
                    : 'bg-white text-darkTxt border border-cream-300 shadow-sm'
                }`}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="absolute -top-4 start-1/2 -translate-x-1/2 bg-emeraldGreen-500 text-white text-[11px] uppercase tracking-widest font-semibold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>
                      {language === 'ar'
                        ? 'الأكثر طلباً'
                        : language === 'pt'
                        ? 'Mais Solicitado'
                        : 'Most Requested'}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3
                      className={`font-serif text-2xl font-bold mb-2 ${
                        plan.isPopular ? 'text-white' : 'text-darkTxt'
                      }`}
                    >
                      {tier}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed font-light ${
                        plan.isPopular ? 'text-white/70' : 'text-mutedDark'
                      }`}
                    >
                      {suitable}
                    </p>
                  </div>

                  {/* Frequency Pill */}
                  <div
                    className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg mb-8 ${
                      plan.isPopular
                        ? 'bg-forest-800 text-emeraldGreen-300'
                        : 'bg-cream-100 text-emeraldGreen-700'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cadence}</span>
                  </div>

                  {/* Scope Checklist */}
                  <div className="space-y-3 mb-10">
                    <h4
                      className={`text-xs uppercase tracking-wider font-semibold ${
                        plan.isPopular ? 'text-emeraldGreen-400' : 'text-emeraldGreen-700'
                      }`}
                    >
                      {language === 'ar'
                        ? 'الخدمات المشمولة:'
                        : language === 'pt'
                        ? 'Serviços Incluídos:'
                        : 'Included Care:'}
                    </h4>
                    <ul className="space-y-2.5">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              plan.isPopular ? 'text-emeraldGreen-400' : 'text-emeraldGreen-600'
                            }`}
                          />
                          <span
                            className={
                              plan.isPopular ? 'text-white/90 font-light' : 'text-darkTxt'
                            }
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quote Button (No prices shown, per brief) */}
                <div className="pt-6 border-t border-forest-800/20">
                  <button
                    onClick={() => openQuoteModal(`Maintenance Plan: ${tier}`)}
                    className={`w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                      plan.isPopular
                        ? 'bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white hover:shadow-glow'
                        : 'bg-forest-900 hover:bg-forest-800 text-white'
                    }`}
                  >
                    <span>{t.maintenance.requestCustomQuote}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Contracts Banner */}
        <div className="mt-16 bg-white border border-cream-300 rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-sm">
          <ShieldCheck className="w-10 h-10 text-emeraldGreen-600 mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-bold text-darkTxt mb-2">
            {language === 'ar'
              ? 'هل تحتاج إلى عقد مخصص لمنتجع أو فندق أو مجمع سكني؟'
              : language === 'pt'
              ? 'Necessita de um Plano Personalizado para Resorts ou Condomínios?'
              : 'Need a Bespoke Commercial SLA or Resort Contract?'}
          </h3>
          <p className="text-mutedDark text-sm max-w-xl mx-auto mb-6">
            {language === 'ar'
              ? 'نصمم اتفاقيات مستوى خدمة (SLA) مخصصة مع مهندسين مقيمين وفحوصات جودة مياه ري دورية.'
              : language === 'pt'
              ? 'Elaboramos acordos de nível de serviço à medida com equipas residentes e relatórios técnicos mensais.'
              : 'We structure tailored Service Level Agreements (SLAs) with dedicated on-site personnel and monthly agronomic water audit reports.'}
          </p>
          <button
            onClick={() => openQuoteModal('Commercial Custom Maintenance Contract')}
            className="bg-forest-900 hover:bg-forest-800 text-white text-xs sm:text-sm font-medium px-8 py-3 rounded-full transition-all"
          >
            {t.nav.requestQuote}
          </button>
        </div>
      </section>
    </div>
  );
}
