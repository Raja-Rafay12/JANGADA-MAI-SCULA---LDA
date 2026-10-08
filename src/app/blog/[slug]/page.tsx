'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from '@/components/Link';
import { ROUTES } from '@/config/routes';
import { useLanguage } from '@/context/LanguageContext';
import { blogPostsData } from '@/data/blogPosts';
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';

export default function BlogPostDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, language, isRTL, openQuoteModal } = useLanguage();

  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const title =
    language === 'pt' ? post.titlePt : language === 'ar' ? post.titleAr : post.titleEn;
  const content =
    language === 'pt' ? post.contentPt : language === 'ar' ? post.contentAr : post.contentEn;
  const category =
    language === 'pt' ? post.categoryPt : language === 'ar' ? post.categoryAr : post.categoryEn;

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      {/* Header */}
      <section className="bg-forest-950 text-white py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href={ROUTES.blog}
            className="inline-flex items-center gap-2 text-emeraldGreen-400 hover:text-emeraldGreen-300 text-xs font-medium mb-6 transition-colors"
          >
            <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            <span>{t.nav.blog}</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase font-semibold tracking-wider bg-emeraldGreen-500/20 text-emeraldGreen-300 border border-emeraldGreen-500/40 px-3 py-1 rounded-full">
              {category}
            </span>
            <span className="text-white/60 text-xs flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-white/60 text-xs flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-sm space-y-8">
          <div className="rounded-2xl overflow-hidden aspect-[16/9]">
            <img src={post.image} alt={title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-emerald max-w-none text-mutedDark text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
            {content}
          </div>

          {/* Consultation CTA Inside Post */}
          <div className="mt-12 p-8 rounded-2xl bg-forest-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold mb-1">
                {language === 'ar'
                  ? 'ترغب في تطبيق هذه الحلول على حديقة فيلتك؟'
                  : language === 'pt'
                  ? 'Deseja implementar estas soluções no seu jardim?'
                  : 'Looking to apply these solutions to your property?'}
              </h3>
              <p className="text-white/70 text-xs leading-relaxed">
                {language === 'ar'
                  ? 'طلب تقييم فني واستشارة متخصصة لموقعك وتربتك وشبكة الري.'
                  : language === 'pt'
                  ? 'Solicite uma avaliação técnica de solo e rega para a sua propriedade.'
                  : 'Request a site consultation and technical soil and irrigation assessment for your property.'}
              </p>
            </div>
            <button
              onClick={() => openQuoteModal(`Blog Article Follow-up: ${title}`)}
              className="bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white text-xs font-semibold px-6 py-3 rounded-full shrink-0 flex items-center gap-2 shadow-md"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
