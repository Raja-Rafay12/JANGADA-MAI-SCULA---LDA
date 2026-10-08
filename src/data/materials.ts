export interface MaterialItem {
  id: string;
  category: 'plants-trees' | 'turf' | 'irrigation' | 'soil-fertilizers' | 'machinery-tools';
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
  specificationsEn: string[];
  specificationsPt: string[];
  specificationsAr: string[];
}

export const materialsData: MaterialItem[] = [
  {
    id: "mat-1",
    category: "plants-trees",
    nameEn: "Phoenix Dactylifera (Specimen Date Palms)",
    namePt: "Palmeiras de Grande Porte (Phoenix Dactylifera)",
    nameAr: "نخيل التمور المعمر (Phoenix Dactylifera)",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Field-grown, fully acclimatized mature specimen date palms selected for majestic architectural silhouette and heat tolerance.",
    descriptionPt: "Palmeiras adultas aclimatadas, ideais para alinhamentos imponentes e pontos focais de jardins residenciais.",
    descriptionAr: "أشجار نخيل تمور معمرة متأقلمة مع مناخ الخليج ومثالية للمداخل الرئيسية ومحيط الفلل الفخمة.",
    whereUsedEn: "Villa grand entrances, pool perimeters, and avenue alignments.",
    whereUsedPt: "Entradas nobres de moradias, perímetros de piscinas e alamedas.",
    whereUsedAr: "مداخل الفلل الفخمة، محيط المسابح، والممرات الرئيسية.",
    specificationsEn: ["Clear trunk heights tailored to site", "Root-balled and treated with bio-stimulants", "Supported with structured maintenance care"],
    specificationsPt: ["Tronco limpo adaptado ao projeto", "Mote enraizado tratado com bioestimulantes", "Acompanhamento com contrato de manutenção"],
    specificationsAr: ["ارتفاعات جذوع مناسبة لمخطط الموقع", "ملفوفة الجذور ومعالجة بمنشطات نمو حيوية", "عناية مستمرة مع عقود الصيانة"]
  },
  {
    id: "mat-2",
    category: "plants-trees",
    nameEn: "Ancient Mediterranean Olive Trees (Olea Europaea)",
    namePt: "Oliveiras Centenárias Ornamentais",
    nameAr: "أشجار الزيتون المعمرة المستوردة",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Sculptural centuries-old olive trees acclimatized for luxury garden focal points, offering silvery foliage and historic grandeur.",
    descriptionPt: "Exemplares com troncos esculturais únicos, aclimatados para resistir ao sol intenso da região.",
    descriptionAr: "أشجار زيتون معمرة ذات سيقان منحوتة طبيعياً وأوراق فضية تمنح الحديقة طابعاً كلاسيكياً عريقاً.",
    whereUsedEn: "Central courtyards, Zen garden arrangements, and minimalist modern villas.",
    whereUsedPt: "Pátios interiores, jardins minimalistas e entradas nobres.",
    whereUsedAr: "الأفنية الداخلية، الحدائق اليابانية، ومداخل القصور العصرية.",
    specificationsEn: ["Mature architectural specimens", "Full phytosanitary documentation", "Foliage thinned for low transpiration"],
    specificationsPt: ["Exemplares maduros e esculturais", "Documentação fitossanitária completa", "Copa adaptada a baixa transpiração"],
    specificationsAr: ["أشجار معمرة مميزة للموقع", "وثائق صحية نباتية رسمية", "تقليم مدروس لتقليل فقد الرطوبة"]
  },
  {
    id: "mat-3",
    category: "turf",
    nameEn: "Paspalum Vaginatum (SeaDwarf) Living Turf",
    namePt: "Relva Natural Paspalum Vaginatum",
    nameAr: "العشب الطبيعي باسبالوم المقاوم للملوحة",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "The gold standard for coastal luxury lawns. Exceptionally tolerant to high salinity and recycled irrigation water.",
    descriptionPt: "O padrão de excelência para relvados em climas quentes e costeiros. Elevada tolerância à água salobra e calor intenso.",
    descriptionAr: "المعيار الذهبي للمسطحات الخضراء الساحلية، شديد التحمل لملوحة المياه وحرارة الصيف.",
    whereUsedEn: "Beachfront villas, golf approaches, and luxury hotel parklands.",
    whereUsedPt: "Moradias costeiras, hotéis e áreas de lazer.",
    whereUsedAr: "الفلل الشاطئية، واجهات الفنادق، والحدائق العائلية.",
    specificationsEn: ["Deep emerald green color", "Handles high salinity (up to 15,000 ppm)", "High recuperative capacity from foot traffic"],
    specificationsPt: ["Verde esmeralda denso", "Suporta água com elevada salinidade", "Rápida regeneração ao pisoteio"],
    specificationsAr: ["لون أخضر زمردي كثيف", "يتحمل ملوحة مياه حتى 15,000 جزء بالمليون", "مقاومة فائقة للمشي والاستخدام اليومي"]
  },
  {
    id: "mat-4",
    category: "turf",
    nameEn: "Luxury UV-Shielded Artificial Turf (50mm)",
    namePt: "Relva Sintética Premium com Proteção UV",
    nameAr: "العشب الصناعي الفاخر المقاوم لأشعة الشمس",
    image: "https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Multi-tone realistic synthetic turf engineered with cooling micro-technology and anti-static fibers that remain lush without water.",
    descriptionPt: "Relva artificial de 50mm com fios de quatro tonalidades e tecnologia de dispersão de calor.",
    descriptionAr: "عشب صناعي بارتفاع 50 ملم بأربعة ألوان طبيعية وتقنية لتشتيت الحرارة وانعدام الحاجة للري.",
    whereUsedEn: "Shaded play areas, rooftop terraces, putting greens, and low-maintenance side courtyards.",
    whereUsedPt: "Zonas de lazer infantis, coberturas e terraços.",
    whereUsedAr: "مساحات لعب الأطفال، أسطح المباني، وممرات الفلل الجانبية.",
    specificationsEn: ["50mm pile height with dual thatch", "UV warranty up to 10 years in Gulf sun", "Non-toxic silica and organic infill"],
    specificationsPt: ["Altura do fio de 50mm", "Garantia UV de 10 anos", "Enchimento atóxico amigo do ambiente"],
    specificationsAr: ["ارتفاع 50 ملم مع ألياف سفلية داعمة", "ضمان ثبات اللون ومقاومة الشمس 10 سنوات", "حبيبات تعبئة عضوية غير سامة وآمنة للأطفال"]
  },
  {
    id: "mat-5",
    category: "irrigation",
    nameEn: "Smart Cloud Irrigation Controller (WiFi / 4G)",
    namePt: "Controlador de Rega Inteligente via Nuvem",
    nameAr: "لوحة التحكم السحابية الذكية بأنظمة الري",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Advanced automated irrigation controller connecting to local meteorological stations to adjust flow based on real-time weather and soil humidity.",
    descriptionPt: "Programador inteligente com ligação a estações meteorológicas que ajusta a rega automaticamente.",
    descriptionAr: "جهاز تحكم ذكي يتصل بمحطات الأرصاد الجوية لضبط كميات ومواعيد الري أوتوماتيكياً وتوفير المياه.",
    whereUsedEn: "Private villas, corporate headquarters, and automated landscape estates.",
    whereUsedPt: "Moradias privadas e parques empresariais com gestão remota.",
    whereUsedAr: "الفلل الخاصة، المجمعات السكنية، والمشاريع التجارية.",
    specificationsEn: ["Manages from 8 up to 54 independent zones", "Mobile app control from iOS/Android", "Flow-sensor leak and burst pipe alerts"],
    specificationsPt: ["Gere de 8 a 54 zonas independentes", "Aplicação móvel iOS/Android", "Deteção automática de fugas e roturas"],
    specificationsAr: ["يتحكم من 8 إلى 54 محطة ري مستقلة", "تطبيق تحكم مباشر عبر الهواتف الذكية", "تنبيه فوري عند حدوث تسريب أو انكسار بالأنابيب"]
  },
  {
    id: "mat-6",
    category: "irrigation",
    nameEn: "Pressure-Compensating Subsurface Drip Line",
    namePt: "Tubagem de Gotejo Subterrâneo Autocompensante",
    nameAr: "أنابيب الري بالتنقيط المدفونة الذاتية التعويض",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Heavy-wall anti-root intrusion drip tubing designed for burial under lawns and shrub beds, reducing evaporation losses to near zero.",
    descriptionPt: "Tubagem com barreira de cobre contra raízes, desenvolvida para instalação subterrânea de alta durabilidade.",
    descriptionAr: "أنابيب تنقيط متطورة مزودة بحاجز نسيجي يمنع اختراق الجذور، مخصصة للدفن تحت المسطحات الخضراء.",
    whereUsedEn: "Sloped gardens, decorative shrub beds, and water-conservation lawns.",
    whereUsedPt: "Taludes, canteiros floridos e relvados de baixo consumo.",
    whereUsedAr: "المنحدرات، أحواض الزهور الكثيفة، والمسطحات الخضراء المستدامة.",
    specificationsEn: ["Built-in chemical copper root barrier", "Self-flushing diaphragm emitters", "Discharges exactly 1.6L to 2.3L/hour at uniform pressure"],
    specificationsPt: ["Barreira anti-raízes integrada", "Gotímetro autolimpante", "Débito constante mesmo com desníveis"],
    specificationsAr: ["حاجز نحاسي مدمج مانع لاختراق الجذور", "منقطات ذاتية التنظيف تطرد الشوائب تلقائياً", "معدل تدفق ثابت وموحد على كامل طول الأنبوب"]
  },
  {
    id: "mat-7",
    category: "soil-fertilizers",
    nameEn: "Bio-Active Sandy Soil Conditioning Mix",
    namePt: "Substrato Biológico Enriquecido para Solos Arenosos",
    nameAr: "خليط المعالجة الحيوية العضوية للتربة الرملية",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Specially formulated soil amendment blending humic acid, beneficial mycorrhizae, and water-holding polymer granules to permanently improve desert sand.",
    descriptionPt: "Composto orgânico de alta fertilidade com ácidos húmicos e polímeros retentores de água.",
    descriptionAr: "مركب عضوي عالي الخصوبة معزز بالهيومات الحيوية وحبيبات الاحتفاظ بالماء لترقية رمال الصحراء.",
    whereUsedEn: "New landscape installations, tree planting pits, and lawn topdressing.",
    whereUsedPt: "Plantação de árvores, preparação de canteiros e relvados.",
    whereUsedAr: "حفر زراعة الأشجار، تجهيز أحواض الزهور، والتسميد السطحي للحدائق.",
    specificationsEn: ["Improves soil moisture retention", "Optimizes soil balance for plantings", "Screened weed-seed and nematode free"],
    specificationsPt: ["Melhora a retenção de humidade", "Otimiza o equilíbrio do solo", "Livre de sementes infestantes e nemátodos"],
    specificationsAr: ["يرفع قدرة التربة على حفظ مياه الري", "يعادل خصوبة التربة لدعم نمو النباتات", "معقم بالكامل وخالٍ من بذور الحشائش والديدان"]
  },
  {
    id: "mat-8",
    category: "machinery-tools",
    nameEn: "Commercial Zero-Emission Battery Landscape Suite",
    namePt: "Equipamentos Profissionais a Bateria (Zero Emissões)",
    nameAr: "المعدات الاحترافية الخرساء الصديقة للبيئة (بطاريات)",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Whisper-quiet, high-torque battery hedge trimmers, blowers, and aerators ideal for quiet residential villa communities.",
    descriptionPt: "Ferramentas de jardinagem ultra silenciosas com emissão zero de fumos, ideais para condomínios privados de luxo.",
    descriptionAr: "معدات تشذيب وقص فائقة الهدوء خالية من العوادم والضوضاء، مثالية للمجمعات السكنية الهادئة والفلل الخاصة.",
    whereUsedEn: "Private villas, luxury hotels, and noise-restricted residential zones.",
    whereUsedPt: "Moradias em condomínio fechado e resorts hoteleiros.",
    whereUsedAr: "الفلل في المجتمعات المغلقة، الفنادق، والمنتجعات الفاخرة.",
    specificationsEn: ["Sound levels under 75 dB(A)", "All-day swappable lithium backpack power", "Zero local carbon emissions and fuel fumes"],
    specificationsPt: ["Nível sonoro inferior a 75 dB", "Baterias profissionais de mochila", "Sem fumos nem cheiro a combustível"],
    specificationsAr: ["مستوى ضوضاء منخفض جداً أقل من 75 ديسيبل", "بطاريات ليثيوم ظهرية تدوم طوال ساعات العمل", "بدون انبعاثات كربونية أو روائح وقود مزعجة"]
  }
];
