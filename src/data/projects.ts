export interface ProjectItem {
  id: string;
  isSample: true;
  category: 'Gardening' | 'Landscaping' | 'Irrigation';
  categoryPt: string;
  categoryAr: string;
  emirate: 'Dubai' | 'Abu Dhabi' | 'Sharjah' | 'Al Ain';
  titleEn: string;
  titlePt: string;
  titleAr: string;
  image: string;
  altEn: string;
  altPt: string;
  altAr: string;
  descriptionEn: string;
  descriptionPt: string;
  descriptionAr: string;
}

// SAMPLE PROJECTS FOR DESIGN PREVIEW ONLY
// Build-time launch guard: prevents unreviewed sample items from passing as real portfolio data in production release
export const LAUNCH_GUARD = {
  isSampleOnly: true,
  reviewedForLaunch: false,
  sampleCount: 4,
} as const;

if (typeof window === 'undefined' && process.env.NODE_ENV === 'production' && process.env.REQUIRE_PRODUCTION_PROJECTS === 'true') {
  if (LAUNCH_GUARD.isSampleOnly && !LAUNCH_GUARD.reviewedForLaunch) {
    throw new Error('[BUILD LAUNCH GUARD] Sample projects cannot be deployed when REQUIRE_PRODUCTION_PROJECTS is set.');
  }
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    isSample: true,
    category: "Landscaping",
    categoryPt: "Paisagismo",
    categoryAr: "تنسيق حدائق",
    emirate: "Dubai",
    titleEn: "Villa Garden",
    titlePt: "Jardim de Moradia",
    titleAr: "حديقة فيلا",
    image: "/images/projects/project-1.jpg",
    altEn: "Landscaped modern villa garden with travertine stone paving, manicured lawn, palm trees and swimming pool",
    altPt: "Jardim de moradia moderna com pavimento em travertino, relvado cuidado, palmeiras e piscina",
    altAr: "حديقة فيلا عصرية مع ممرات حجرية ومسطحات خضراء وأشجار نخيل ومسبح",
    descriptionEn: "Garden design with paving, planting and an irrigation system.",
    descriptionPt: "Projeto e execução de jardim com pavimentos, plantação e sistema de rega.",
    descriptionAr: "تصميم حديقة يشمل التبليط والزراعة وشبكة ري متكاملة."
  },
  {
    id: "proj-2",
    isSample: true,
    category: "Irrigation",
    categoryPt: "Rega",
    categoryAr: "شبكات الري",
    emirate: "Abu Dhabi",
    titleEn: "Irrigation System",
    titlePt: "Sistema de Rega",
    titleAr: "نظام ري",
    image: "/images/projects/project-2.jpg",
    altEn: "Rotary sprinkler system watering a green residential garden lawn in warm sunlight",
    altPt: "Aspersores de rega a irrigar relvado de jardim residencial sob luz solar suave",
    altAr: "نظام رشاشات ري يسقي مسطحاً أخضر في حديقة سكنية تحت ضوء الشمس",
    descriptionEn: "Installation of an efficient irrigation system for a residential garden.",
    descriptionPt: "Instalação de sistema de rega eficiente para jardim residencial.",
    descriptionAr: "تركيب نظام ري فعال لحديقة سكنية."
  },
  {
    id: "proj-3",
    isSample: true,
    category: "Landscaping",
    categoryPt: "Paisagismo",
    categoryAr: "تنسيق حدائق",
    emirate: "Sharjah",
    titleEn: "Green Space",
    titlePt: "Espaço Verde",
    titleAr: "مساحة خضراء",
    image: "/images/projects/project-3.jpg",
    altEn: "Sunlit gravel pathway through a community green space with grass lawns and shade trees",
    altPt: "Caminho pedonal em espaço verde comunitário ladeado por relva e árvores de sombra",
    altAr: "ممر مشاة مشمس في مساحة خضراء مجتمعية تحيط به مسطحات عشبية وأشجار ظل",
    descriptionEn: "Planting, pathways and shade trees for a community green space.",
    descriptionPt: "Plantação, caminhos pedonais e árvores de sombra para espaço verde comunitário.",
    descriptionAr: "تشجير وممرات مشاة وأشجار ظل لمساحة خضراء مجتمعية."
  },
  {
    id: "proj-4",
    isSample: true,
    category: "Gardening",
    categoryPt: "Jardinagem",
    categoryAr: "بستنة وحدائق",
    emirate: "Al Ain",
    titleEn: "Courtyard Garden",
    titlePt: "Jardim de Pátio",
    titleAr: "حديقة فناء داخلي",
    image: "/images/projects/project-4.jpg",
    altEn: "Courtyard patio garden with shaded seating under a canvas canopy, wooden deck, potted plants and trees",
    altPt: "Pátio ajardinado com zona de estar sombreada sob toldo, deck de madeira, plantas em vasos e árvores",
    altAr: "فناء حديقة مظلل مع جلسة خارجية تحت مظلة قماشية وأرضية خشبية ونباتات وأشجار",
    descriptionEn: "Courtyard garden with fruit trees and a shaded seating area.",
    descriptionPt: "Jardim interior de pátio com árvores de fruto e zona de estar sombreada.",
    descriptionAr: "حديقة فناء مع أشجار مثمرة ومنطقة جلوس مظللة."
  }
];
