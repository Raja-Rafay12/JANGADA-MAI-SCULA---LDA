'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { servicesData } from '@/data/services';
import { CheckCircle2, HelpCircle, Sun, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, language, isRTL, openQuoteModal } = useLanguage();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  const title =
    language === 'pt' ? service.titlePt : language === 'ar' ? service.titleAr : service.titleEn;
  const fullDesc =
    language === 'pt'
      ? service.fullDescPt
      : language === 'ar'
      ? service.fullDescAr
      : service.fullDescEn;
  const deliverables =
    language === 'pt'
      ? service.deliverablesPt
      : language === 'ar'
      ? service.deliverablesAr
      : service.deliverablesEn;
  const climateNotes =
    language === 'pt'
      ? service.uaeClimateNotesPt
      : language === 'ar'
      ? service.uaeClimateNotesAr
      : service.uaeClimateNotesEn;

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      {/* Breadcrumb & Hero */}
      <section className="bg-forest-950 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-emeraldGreen-400 hover:text-emeraldGreen-300 text-xs font-medium mb-6 transition-colors"
          >
            <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            <span>{t.nav.services}</span>
          </Link>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 max-w-3xl">
            {title}
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            {service.shortDescEn}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">
            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-cream-300 aspect-[16/9]">
              <img
                src={service.image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* In-depth Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-darkTxt">
                {language === 'ar'
                  ? 'نظرة عامة على الخدمة'
                  : language === 'pt'
                  ? 'Visão Geral do Serviço'
                  : 'Comprehensive Service Overview'}
              </h2>
              <p className="text-mutedDark text-sm sm:text-base leading-relaxed">
                {fullDesc}
              </p>

              {/* Arid Climate Adaptation Note */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-4">
                <Sun className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-bold text-amber-900 tracking-wider mb-1">
                    {language === 'ar'
                      ? 'ملاءمة المناخ وترشيد المياه'
                      : language === 'pt'
                      ? 'Adaptação Climática e Eficiência Hídrica'
                      : 'Arid Climate Adaptation & Water Efficiency'}
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">
                    {climateNotes}
                  </p>
                </div>
              </div>
            </div>

            {/* Scope Deliverables */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-darkTxt mb-6">
                {language === 'ar'
                  ? 'ما تشمله الخدمة والمخرجات'
                  : language === 'pt'
                  ? 'O Que Está Incluído no Projeto'
                  : "What's Included in the Scope"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-cream-50 border border-cream-200/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emeraldGreen-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-darkTxt leading-snug font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-darkTxt mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-emeraldGreen-600" />
                  <span>
                    {language === 'ar'
                      ? 'الأسئلة الشائعة'
                      : language === 'pt'
                      ? 'Perguntas Frequentes'
                      : 'Frequently Asked Questions'}
                  </span>
                </h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => {
                    const q =
                      language === 'pt'
                        ? faq.questionPt
                        : language === 'ar'
                        ? faq.questionAr
                        : faq.questionEn;
                    const a =
                      language === 'pt'
                        ? faq.answerPt
                        : language === 'ar'
                        ? faq.answerAr
                        : faq.answerEn;

                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-cream-50 border border-cream-200"
                      >
                        <h4 className="font-serif text-base font-bold text-darkTxt mb-2">
                          {q}
                        </h4>
                        <p className="text-mutedDark text-xs sm:text-sm leading-relaxed">
                          {a}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-forest-900 text-white rounded-3xl p-8 border border-forest-750 shadow-xl space-y-6">
              <span className="text-[10px] uppercase tracking-widest text-emeraldGreen-400 font-semibold block">
                {title}
              </span>
              <h3 className="font-serif text-2xl font-bold">
                {language === 'ar'
                  ? 'جاهز لتطوير مساحتك الخارجية؟'
                  : language === 'pt'
                  ? 'Pronto para Transformar o seu Espaço?'
                  : 'Ready to Transform Your Landscape?'}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                {language === 'ar'
                  ? 'اطلب معاينة لموقعك وسيقوم مهندسونا بتقديم دراسة تسعير واستشارة مفصلة.'
                  : language === 'pt'
                  ? 'Solicite uma visita técnica e orçamento detalhado para a sua propriedade.'
                  : 'Request a site consultation and tailored specification proposal for your villa or commercial development.'}
              </p>

              <button
                onClick={() => openQuoteModal(title)}
                className="w-full bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white font-medium py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-glow flex items-center justify-center gap-2"
              >
                <span>{t.nav.requestQuote}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <div className="pt-4 border-t border-forest-800 space-y-3 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'ضمان بقاء ونمو النباتات'
                      : language === 'pt'
                      ? 'Garantia de sobrevivência botânica'
                      : 'Botanical survival & growth warranty'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? 'خدمة سريعة في دبي وأبوظبي'
                      : language === 'pt'
                      ? 'Cobertura rápida em Dubai e Abu Dhabi'
                      : 'Rapid response squads across Dubai & Abu Dhabi'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
