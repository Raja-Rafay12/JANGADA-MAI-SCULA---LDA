'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { blogPostsData } from '@/data/blogPosts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const { t, language, isRTL } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      {/* Header */}
      <section className="bg-forest-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emeraldGreen-400 block mb-3">
            {t.nav.blog}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {language === 'ar'
              ? 'دليل وتجارب البستنة وتنسيق الحدائق'
              : language === 'pt'
              ? 'Artigos e Dicas de Jardinagem & Paisagismo'
              : 'Landscaping & Irrigation Insights'}
          </h1>
          <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
            {language === 'ar'
              ? 'نصائح وإرشادات هندسية متخصصة حول اختيار النباتات المقاومة للحرارة، ترشيد مياه الري، وتحسين خصوبة التربة الصحراوية.'
              : language === 'pt'
              ? 'Orientações práticas e agronómicas sobre conservação de água, solos arenosos e espécies resistentes ao clima árido.'
              : 'Practical agronomic guidance on drought-resistant planting, smart cloud irrigation, and sandy soil restoration for private villas and estates.'}
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => {
            const title =
              language === 'pt' ? post.titlePt : language === 'ar' ? post.titleAr : post.titleEn;
            const excerpt =
              language === 'pt'
                ? post.excerptPt
                : language === 'ar'
                ? post.excerptAr
                : post.excerptEn;
            const category =
              language === 'pt'
                ? post.categoryPt
                : language === 'ar'
                ? post.categoryAr
                : post.categoryEn;

            return (
              <article
                key={post.slug}
                className="bg-white border border-cream-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                    <img
                      src={post.image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 start-4">
                      <span className="text-[10px] uppercase font-semibold tracking-wider bg-forest-950/80 backdrop-blur-md text-emeraldGreen-400 px-3 py-1 rounded-full border border-emeraldGreen-500/30">
                        {category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-mutedDark mb-3">
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Calendar className="w-3 h-3 text-emeraldGreen-600" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="w-3 h-3 text-emeraldGreen-600" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-darkTxt mb-3 group-hover:text-emeraldGreen-700 transition-colors line-clamp-2">
                      {title}
                    </h2>

                    <p className="text-mutedDark text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                      {excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emeraldGreen-600 group-hover:text-emeraldGreen-700 transition-colors"
                  >
                    <span>
                      {language === 'ar'
                        ? 'قراءة المقال كاملاً'
                        : language === 'pt'
                        ? 'Ler Artigo'
                        : 'Read Article'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
