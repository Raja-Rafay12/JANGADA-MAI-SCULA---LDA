'use client';

import React from 'react';
import Link from '@/components/Link';
import { ROUTES } from '@/config/routes';
import { siteConfig } from '@/config/siteConfig';
import { useLanguage } from '@/context/LanguageContext';

interface UnderMaintenanceScreenProps {
  pageName?: 'services' | 'projects' | 'maintenance' | 'contact' | 'insights' | 'blog';
}

export function UnderMaintenanceScreen({ pageName }: UnderMaintenanceScreenProps) {
  const { language, isRTL, openQuoteModal } = useLanguage();

  const content = {
    en: {
      title: 'Sorry for the inconvenience',
      desc: 'This section of our website is being updated. We will be back shortly, and in the meantime our team is happy to help with any enquiry.',
      backHome: 'Back to home',
      quote: 'Request a quote',
      tagline: 'Landscaping, irrigation and estate maintenance',
    },
    pt: {
      title: 'Pedimos desculpa pelo incómodo',
      desc: 'Esta secção do nosso website está a ser atualizada. Voltamos em breve e, entretanto, a nossa equipa está disponível para ajudar em qualquer questão.',
      backHome: 'Voltar ao início',
      quote: 'Pedir orçamento',
      tagline: 'Paisagismo, rega e manutenção de propriedades',
    },
    ar: {
      title: 'نعتذر عن أي إزعاج',
      desc: 'يجري حالياً تحديث هذا القسم من موقعنا. سنعود قريباً، وفريقنا يسعد دائماً بالإجابة على أي استفسار.',
      backHome: 'العودة إلى الرئيسية',
      quote: 'طلب عرض أسعار',
      tagline: 'تنسيق الحدائق وشبكات الري وصيانة العقارات',
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="relative min-h-[calc(100vh-140px)] w-full flex flex-col justify-between pt-32 sm:pt-36 pb-12 px-4 sm:px-8 lg:px-12 bg-[#0f1a14] text-[#eef0e6] overflow-hidden selection:bg-[#d6b56a] selection:text-[#0f1a14]">
      {/* Background Radial Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(90% 70% at 80% 40%, #16271d 0%, #0f1a14 70%)',
        }}
      />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy Section */}
          <div className="lg:col-span-7 max-w-xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#eef0e6] leading-[1.08] anim-rise" style={{ animationDelay: '0.4s' }}>
              {t.title}
            </h1>

            {/* Golden Animated Rule */}
            <div className={`w-16 h-[2px] bg-[#d6b56a] mt-6 mb-6 anim-grow ${isRTL ? 'origin-right' : 'origin-left'}`} />

            <p className="text-base sm:text-lg text-[#eef0e6]/75 font-light leading-relaxed anim-rise" style={{ animationDelay: '0.8s' }}>
              {t.desc}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-2 anim-rise" style={{ animationDelay: '1.1s' }}>
              <Link
                href={ROUTES.home}
                className="inline-flex items-center justify-center font-sans font-semibold text-sm sm:text-base px-6 py-3 rounded-[3px] bg-[#d6b56a] text-[#17211a] border border-[#d6b56a] hover:bg-[#eef0e6] hover:border-[#eef0e6] hover:text-[#17211a] transition-all duration-300 shadow-md"
              >
                {t.backHome}
              </Link>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center font-sans font-semibold text-sm sm:text-base px-6 py-3 rounded-[3px] bg-transparent text-[#eef0e6] border border-[#d6b56a] hover:bg-[#eef0e6] hover:border-[#eef0e6] hover:text-[#17211a] transition-all duration-300"
              >
                {t.quote}
              </button>
            </div>
          </div>

          {/* Animated SVG Fine Line-Art Branch */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="art-box w-[240px] sm:w-[280px] lg:w-[320px]">
              <svg viewBox="0 0 200 300" className="w-full h-auto overflow-visible">
                <path className="st" pathLength="1" d="M30 292 L170 292" />
                <g className="sway">
                  <path
                    className="st"
                    pathLength="1"
                    style={{ animationDelay: '0.4s', animationDuration: '3.2s' }}
                    d="M100 290 C98 230 106 180 98 130 C92 90 100 50 104 14"
                  />
                  <g style={{ ['--d' as string]: '1.2s', ['--e' as string]: '1.9s' }}>
                    <path className="lf" pathLength="1" d="M99 235 C70 232 48 214 40 190 C68 190 92 204 99 235Z" />
                    <path className="mr" pathLength="1" d="M99 235 L48 195" />
                  </g>
                  <g style={{ ['--d' as string]: '1.7s', ['--e' as string]: '2.4s' }}>
                    <path className="lf" pathLength="1" d="M102 200 C132 197 154 179 162 155 C134 155 109 169 102 200Z" />
                    <path className="mr" pathLength="1" d="M102 200 L156 160" />
                  </g>
                  <g style={{ ['--d' as string]: '2.2s', ['--e' as string]: '2.9s' }}>
                    <path className="lf" pathLength="1" d="M97 165 C72 162 54 146 48 126 C70 126 90 138 97 165Z" />
                    <path className="mr" pathLength="1" d="M97 165 L54 130" />
                  </g>
                  <g style={{ ['--d' as string]: '2.7s', ['--e' as string]: '3.4s' }}>
                    <path className="lf" pathLength="1" d="M99 130 C124 127 142 112 148 92 C126 92 106 104 99 130Z" />
                    <path className="mr" pathLength="1" d="M99 130 L143 96" />
                  </g>
                  <g style={{ ['--d' as string]: '3.2s', ['--e' as string]: '3.9s' }}>
                    <path className="lf" pathLength="1" d="M98 95 C78 92 64 80 60 64 C78 64 92 74 98 95Z" />
                    <path className="mr" pathLength="1" d="M98 95 L65 68" />
                  </g>
                  <g style={{ ['--d' as string]: '3.7s', ['--e' as string]: '4.4s' }}>
                    <path className="lf" pathLength="1" d="M103 62 C92 48 92 28 104 12 C116 28 114 48 103 62Z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Contact Strip */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-6 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#eef0e6]/70">
        <div className="flex flex-wrap items-center gap-6 font-mono" dir="ltr">
          <a href={siteConfig.contact.secondaryPhone.href} className="hover:text-[#d6b56a] transition-colors">
            {siteConfig.contact.secondaryPhone.display}
          </a>
          <a href={siteConfig.contact.primaryPhone.href} className="hover:text-[#d6b56a] transition-colors">
            {siteConfig.contact.primaryPhone.display}
          </a>
          <a href={`mailto:${siteConfig.contact.emailGeneral}`} className="hover:text-[#d6b56a] transition-colors font-sans">
            {siteConfig.contact.emailGeneral}
          </a>
        </div>
        <span className="font-light text-white/50">{t.tagline}</span>
      </div>

      {/* Embedded Scoped Keyframe Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes grow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes sway {
          from {
            transform: rotate(-0.9deg);
          }
          to {
            transform: rotate(0.9deg);
          }
        }
        @keyframes draw {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes tint {
          from {
            fill: rgba(169, 196, 160, 0);
          }
          to {
            fill: rgba(169, 196, 160, 0.12);
          }
        }

        .anim-grow {
          animation: grow 1s ease-out 0.6s both;
        }
        .anim-rise {
          animation: rise 0.9s ease-out both;
        }

        .sway {
          transform-box: view-box;
          transform-origin: 100px 290px;
          animation: sway 9s ease-in-out 5s infinite alternate;
        }

        .st {
          fill: none;
          stroke: #d6b56a;
          stroke-width: 1.2;
          stroke-linecap: round;
          stroke-dasharray: 1;
          animation: draw 1.6s cubic-bezier(0.4, 0.1, 0.2, 1) both;
        }

        .lf {
          fill: rgba(169, 196, 160, 0.12);
          stroke: #d6b56a;
          stroke-width: 1.2;
          stroke-linejoin: round;
          stroke-dasharray: 1;
          animation: draw 1.3s ease-out var(--d) both, tint 1.2s ease var(--e) both;
        }

        .mr {
          fill: none;
          stroke: #a9c4a0;
          stroke-width: 0.8;
          stroke-linecap: round;
          stroke-dasharray: 1;
          opacity: 0.8;
          animation: draw 1s ease-out var(--e) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-grow,
          .anim-rise,
          .sway,
          .st,
          .lf,
          .mr {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `,
        }}
      />
    </div>
  );
}
