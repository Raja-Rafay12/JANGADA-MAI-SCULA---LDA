export interface MaterialItem {
  id: string;
  slug: string;
  categoryKey: 'palms' | 'trees' | 'turf' | 'irrigation';
  categoryEn: string;
  categoryPt: string;
  categoryAr: string;
  nameEn: string;
  namePt: string;
  nameAr: string;
  image: string;
  descriptionEn: string;
  descriptionPt: string;
  descriptionAr: string;
  whereUsedEn: string;
  whereUsedPt: string;
  whereUsedAr: string;
}

export const materialsData: MaterialItem[] = [
  {
    id: "mat-1",
    slug: "date-palms",
    categoryKey: "palms",
    categoryEn: "Palms",
    categoryPt: "Palmeiras",
    categoryAr: "النخيل",
    nameEn: "Date palms",
    namePt: "Palmeiras-tamareiras",
    nameAr: "نخيل التمور",
    image: "/images/materials/date-palms.jpg",
    descriptionEn: "Mature palms for entrances, courtyards and pool areas.",
    descriptionPt: "Palmeiras adultas para entradas, pátios e áreas de piscina.",
    descriptionAr: "نخيل مكتمل النمو للمداخل والأفنية ومحيط المسابح.",
    whereUsedEn: "Villa gardens and courtyards",
    whereUsedPt: "Jardins de moradias e pátios",
    whereUsedAr: "حدائق الفلل والأفنية"
  },
  {
    id: "mat-2",
    slug: "olive-trees",
    categoryKey: "trees",
    categoryEn: "Trees",
    categoryPt: "Árvores",
    categoryAr: "الأشجار",
    nameEn: "Olive trees",
    namePt: "Oliveiras",
    nameAr: "أشجار الزيتون",
    image: "/images/materials/olive-trees.jpg",
    descriptionEn: "Evergreen trees for courtyards and garden focal points.",
    descriptionPt: "Árvores de folha persistente para pátios e pontos focais do jardim.",
    descriptionAr: "أشجار دائمة الخضرة للأفنية والنقاط البارزة في الحديقة.",
    whereUsedEn: "Courtyards and garden focal points",
    whereUsedPt: "Pátios interiores e pontos focais do jardim",
    whereUsedAr: "الأفنية والنقاط البارزة في الحديقة"
  },
  {
    id: "mat-3",
    slug: "natural-turf",
    categoryKey: "turf",
    categoryEn: "Turf",
    categoryPt: "Relva",
    categoryAr: "المسطحات العشبية",
    nameEn: "Natural turf",
    namePt: "Relva natural",
    nameAr: "العشب الطبيعي",
    image: "/images/materials/natural-turf.jpg",
    descriptionEn: "Grass suited to hot climates and irrigation with limited water.",
    descriptionPt: "Relva adaptada a climas quentes e rega com consumo moderado de água.",
    descriptionAr: "عشب متوافق مع المناخ الحار وأنظمة الري المقتصدة في المياه.",
    whereUsedEn: "Villa gardens, lawns and open grounds",
    whereUsedPt: "Jardins residenciais, relvados e áreas abertas",
    whereUsedAr: "حدائق الفلل والمروج والمساحات المفتوحة"
  },
  {
    id: "mat-4",
    slug: "artificial-turf",
    categoryKey: "turf",
    categoryEn: "Turf",
    categoryPt: "Relva",
    categoryAr: "المسطحات العشبية",
    nameEn: "Artificial turf",
    namePt: "Relva artificial",
    nameAr: "العشب الصناعي",
    image: "/images/materials/artificial-turf.jpg",
    descriptionEn: "Low-maintenance grass for terraces and play areas.",
    descriptionPt: "Relva de baixa manutenção para terraços e zonas de lazer.",
    descriptionAr: "عشب منخفض الصيانة للشرفات ومناطق اللعب.",
    whereUsedEn: "Terraces and play areas",
    whereUsedPt: "Terraços e zonas de lazer",
    whereUsedAr: "الشرفات ومناطق اللعب"
  },
  {
    id: "mat-5",
    slug: "smart-irrigation-controller",
    categoryKey: "irrigation",
    categoryEn: "Irrigation",
    categoryPt: "Irrigação",
    categoryAr: "أنظمة الري",
    nameEn: "Smart irrigation controller",
    namePt: "Controlador de rega inteligente",
    nameAr: "جهاز التحكم بالري الذكي",
    image: "/images/materials/smart-irrigation-controller.jpg",
    descriptionEn: "Automatic watering schedules adjusted to the weather.",
    descriptionPt: "Programação automática de rega ajustada às condições meteorológicas.",
    descriptionAr: "جداول ري آلية تتكيف مع الظروف الجوية.",
    whereUsedEn: "Private gardens and residential estates",
    whereUsedPt: "Jardins residenciais e propriedades privadas",
    whereUsedAr: "الحدائق الخاصة والمجمعات السكنية"
  },
  {
    id: "mat-6",
    slug: "drip-irrigation-line",
    categoryKey: "irrigation",
    categoryEn: "Irrigation",
    categoryPt: "Irrigação",
    categoryAr: "أنظمة الري",
    nameEn: "Drip irrigation line",
    namePt: "Linha de rega gota a gota",
    nameAr: "خطوط الري بالتنقيط",
    image: "/images/materials/drip-irrigation-line.jpg",
    descriptionEn: "Water delivered to plant roots under lawns and shrub beds.",
    descriptionPt: "Água direcionada às raízes sob relvados e canteiros de arbustos.",
    descriptionAr: "توصيل المياه إلى جذور النباتات تحت المروج وأحواض الشجيرات.",
    whereUsedEn: "Shrub beds, flower borders and lawns",
    whereUsedPt: "Canteiros de arbustos, bordaduras e relvados",
    whereUsedAr: "أحواض الشجيرات وأشرطة الزهور والمسطحات الخضراء"
  }
];
