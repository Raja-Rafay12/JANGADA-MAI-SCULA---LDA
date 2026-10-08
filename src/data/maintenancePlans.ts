export interface MaintenancePlan {
  id: string;
  slug: string;
  tierEn: string;
  tierPt: string;
  tierAr: string;
  suitableForEn: string;
  suitableForPt: string;
  suitableForAr: string;
  cadenceEn: string;
  cadencePt: string;
  cadenceAr: string;
  featuresEn: string[];
  featuresPt: string[];
  featuresAr: string[];
  isPopular?: boolean;
}

export const maintenancePlansData: MaintenancePlan[] = [
  {
    id: "plan-1",
    slug: "villa-essential",
    tierEn: "Villa Essential Care",
    tierPt: "Manutenção Residencial Essencial",
    tierAr: "باقة رعاية الفلل الأساسية",
    suitableForEn: "Standard private villas and townhouses (up to 500 sqm)",
    suitableForPt: "Moradias unifamiliares e geminadas até 500 m²",
    suitableForAr: "الفلل والتاون هاوس الخاصة حتى مساحة 500 متر مربع",
    cadenceEn: "Weekly Visits (4 visits / month)",
    cadencePt: "Visitas Semanais (4 visitas / mês)",
    cadenceAr: "زيارات أسبوعية مجدولة (4 زيارات شهرياً)",
    featuresEn: [
      "Precision lawn mowing, edging, and debris clearing",
      "Hedge shaping and deadheading ornamental flowers",
      "Irrigation controller check and nozzle unclogging",
      "Seasonal weed prevention and spot treatment",
      "Basic organic liquid feeding"
    ],
    featuresPt: [
      "Corte do relvado, rebordos e limpeza de resíduos",
      "Poda de sebes e limpeza de flores secas",
      "Verificação do programador e bicos de rega",
      "Controlo preventivo de ervas infestantes",
      "Aplicação de adubação líquida orgânica"
    ],
    featuresAr: [
      "قص وتنسيق أطراف المسطحات الخضراء وجمع المخلفات",
      "تهذيب الأسيجة والشجيرات وإزالة الأزهار الذابلة",
      "فحص دوري لمحبس ولوحة التحكم وتنظيف فوهات الرشاشات",
      "مكافحة وقائية للحشائش الضارة والأعشاب الدخيلة",
      "تسميد سائل عضوي لتعزيز اخضرار الأوراق"
    ]
  },
  {
    id: "plan-2",
    slug: "estate-signature",
    tierEn: "Luxury Estate Signature",
    tierPt: "Manutenção Premium Estate",
    tierAr: "باقة القصور والمجمعات الفاخرة (سيجنتشر)",
    suitableForEn: "Large private estates, beachfront villas (500 - 3,000+ sqm)",
    suitableForPt: "Grandes propriedades, moradias de luxo e quintas",
    suitableForAr: "القصور الفاخرة والفلل الشاطئية الكبيرة (أكثر من 500 م²)",
    cadenceEn: "Twice Weekly Dedicated Squad (8-10 visits / month)",
    cadencePt: "2 Visitas Semanais com Equipa Dedicada",
    cadenceAr: "زيارتان أسبوعياً مع فريق هندسي متخصص",
    isPopular: true,
    featuresEn: [
      "Dedicated bilingual horticultural supervisor",
      "Comprehensive turf aeration, dethatching, and overseeding",
      "Date palm and ancient specimen tree health management",
      "Soil moisture testing and seasonal water volume audits",
      "Priority 4-hour emergency response for irrigation leaks",
      "Custom seasonal flowering pot replacements"
    ],
    featuresPt: [
      "Supervisor de horticultura dedicado",
      "Arejamento mecânico do relvado e escarificação",
      "Tratamento e limpeza técnica de palmeiras adultas",
      "Auditoria de consumo de água e sondas de humidade",
      "Assistência prioritária em 4 horas para fugas de rega",
      "Renovação sazonal de floreiras e canteiros"
    ],
    featuresAr: [
      "مشرف زراعي معتمد ومتابع لحالة الحديقة",
      "تهوية ميكانيكية دورية للتربة وتجديد بذور المسطحات",
      "عناية تخصصية بأشجار النخيل المعمرة والأشجار المستوردة",
      "فحص ملوحة ورطوبة التربة وضبط استهلاك المياه",
      "استجابة طارئة خلال 4 ساعات لمعالجة انكسار أنابيب الري",
      "تغيير موسمي للأزهار الحولية وأحواض الزينة"
    ]
  },
  {
    id: "plan-3",
    slug: "commercial-hospitality",
    tierEn: "Commercial & Hospitality Grounds",
    tierPt: "Manutenção Comercial e Hoteleira",
    tierAr: "باقة المنتجعات والمشاريع التجارية",
    suitableForEn: "Hotels, resorts, corporate headquarters, and residential communities",
    suitableForPt: "Hotéis, resorts, edifícios de escritórios e condomínios",
    suitableForAr: "الفنادق، المنتجعات، المقار المؤسسية، والمجمعات السكنية الكبرى",
    cadenceEn: "Permanent On-Site Team or Daily Scheduled Maintenance",
    cadencePt: "Equipa Residente ou Visitas Diárias Programadas",
    cadenceAr: "فريق مقيم دائم أو زيارات يومية مخصصة",
    featuresEn: [
      "Full-time uniformed gardeners with silent battery machinery",
      "Treated Sewage Effluent (TSE) filtration maintenance",
      "Efficiency reports on water conservation and plant vitality",
      "Preventive arborist and wind safety bracing",
      "Monthly landscape audit reports with high-resolution drone imagery"
    ],
    featuresPt: [
      "Jardineiros fardados a tempo inteiro com equipamento silencioso",
      "Manutenção e limpeza de filtros de água reciclada (TSE)",
      "Relatórios periódicos de conservação hídrica e vitalidade botânica",
      "Amarração e segurança de árvores para ventos fortes",
      "Relatórios mensais de evolução e inspeção aérea"
    ],
    featuresAr: [
      "عمال بستنة بزي موحد متواجدون بمعدات هادئة صديقة للبيئة",
      "صيانة دورية لمحطات تنقية مياه الصرف الصحي المعالجة (TSE)",
      "تقارير دورية لكفاءة استهلاك المياه وصحة الغطاء النباتي",
      "تدعيم وحماية الأشجار العالية من الرياح والعواصف الرملية",
      "تقرير شهري شامل مدعم بلقطات وصور جوية للموقع"
    ]
  }
];
