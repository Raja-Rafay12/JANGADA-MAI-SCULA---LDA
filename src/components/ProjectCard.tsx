'use client';

import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { ProjectItem } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const title =
    language === 'pt'
      ? project.titlePt
      : language === 'ar'
      ? project.titleAr
      : project.titleEn;

  const category =
    language === 'pt'
      ? project.categoryPt
      : language === 'ar'
      ? project.categoryAr
      : project.category;

  const description =
    language === 'pt'
      ? project.descriptionPt
      : language === 'ar'
      ? project.descriptionAr
      : project.descriptionEn;

  const altText =
    language === 'pt'
      ? project.altPt || project.titlePt
      : language === 'ar'
      ? project.altAr || project.titleAr
      : project.altEn || project.titleEn;

  return (
    <div className="bg-white border border-cream-300 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full select-none">
      {/* 1. Image with fixed 4/3 Aspect Ratio and Dark Green Leaf Fallback */}
      <div className="relative aspect-[4/3] w-full bg-forest-950 overflow-hidden shrink-0">
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-forest-950">
            <div className="w-12 h-12 rounded-full bg-forest-900 border border-emeraldGreen-500/30 flex items-center justify-center mb-2.5">
              <Leaf className="w-6 h-6 text-emeraldGreen-400" />
            </div>
            <span className="text-xs font-serif text-white/80 font-medium line-clamp-1">
              {title}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-emeraldGreen-400/70 font-semibold mt-1">
              Jangada Maiúscula
            </span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={altText}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* Content Container - Displays only: category label, title, and description */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* 3. Category Label */}
          <div className="mb-2">
            <span className="font-semibold uppercase tracking-wider text-emeraldGreen-600 text-[11px]">
              {category}
            </span>
          </div>

          {/* 4. Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-darkTxt mb-3 line-clamp-2">
            {title}
          </h3>
        </div>

        {/* 5. Description */}
        <p className="text-xs sm:text-sm text-mutedDark leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
