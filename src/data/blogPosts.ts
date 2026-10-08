export interface BlogPost {
  slug: string;
  titleEn: string;
  titlePt: string;
  titleAr: string;
  excerptEn: string;
  excerptPt: string;
  excerptAr: string;
  contentEn: string;
  contentPt: string;
  contentAr: string;
  date: string;
  readTime: string;
  categoryEn: string;
  categoryPt: string;
  categoryAr: string;
  image: string;
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "drought-tolerant-plants-dubai-gardens",
    titleEn: "Top 7 Drought-Tolerant Plants for Dubai Gardens",
    titlePt: "7 Plantas Resistentes à Seca para Jardins no Dubai",
    titleAr: "أفضل 7 نباتات مقاومة للجفاف والحرارة لحدائق دبي",
    excerptEn: "Discover botanical species that thrive under intense Gulf sunlight while offering vibrant architectural structure and color.",
    excerptPt: "Descubra espécies botânicas que prosperam sob o sol intenso do Golfo com cor e elegância.",
    excerptAr: "تعرف على أبرز النباتات التي تتحمل شمس الخليج القوية وتمنح حديقتك ألواناً زاهية وتوفيراً فائقاً في المياه.",
    date: "March 15, 2026",
    readTime: "5 min read",
    categoryEn: "Horticulture",
    categoryPt: "Horticultura",
    categoryAr: "علم البستنة",
    image: "/images/blog/drought-tolerant-plants.jpg",
    contentEn: `Gardening in Dubai and arid climates demands an informed botanical strategy. With summer temperatures regularly topping 45°C and low relative humidity inland, standard European species struggle unless properly adapted or replaced with climate-native selections.

Here are some of the best-suited species for hot, dry climates:

1. Bougainvillea Spectabilis: A vibrant climber requiring minimal water once rooted, offering cascading magenta, coral, and white blooms throughout the hottest months.
2. Frangipani (Plumeria): Known for its intoxicating scent and sculptural branches, Plumeria stores water in its fleshy stems and thrives in direct sun.
3. Desert Rose (Adenium Obesum): Featuring a swollen caudex that reservoirs moisture, this sculptural succulent produces trumpet-shaped blossoms.
4. Ghaf Tree (Prosopis Cineraria): Highly resilient and drought-tolerant, virtually indestructible, providing deep root stabilization and cooling canopy shade.
5. Olive Trees (Olea Europaea): Mediterranean olive varieties flourish in luxury villas, adding timeless sculptural prestige.
6. Agave Americana & Foxtail Agave: Architectural focal points that demand almost zero irrigation during winter months.
7. Desert Lavender (Lavandula Nimmoi): An indigenous aromatic pollinator-magnet suited for gravel beds.

Integrating these species with organic mulching and subsurface drip systems cuts landscape water requirements by over 40% while ensuring vibrant beauty year-round.`,
    contentPt: `Criar um jardim verdejante no Dubai exige uma seleção botânica meticulosa. Com temperaturas de verão que ultrapassam os 45°C, espécies tradicionais sofrem sem o devido acompanhamento. Espécies como a buganvília, oliveiras centenárias, adeniums e o icónico ghaf oferecem uma resistência ímpar com consumos de água reduzidos.`,
    contentAr: `يتطلب تنسيق الحدائق في البيئات الصحراوية الجافة رؤية هندسية بيئية متخصصة. درجات الحرارة المرتفعة تتطلب اختيار نباتات تتحمل الملوحة وشح المياه كأشجار الغاف، والجهنمية الملونة، وأشجار الزيتون المعمرة، مع تطبيق تقنيات التغطية العضوية لتقليل التبخر بنسبة تتجاوز 40%.`
  },
  {
    slug: "smart-irrigation-water-savings",
    titleEn: "How to Reduce Garden Water Consumption by 40%",
    titlePt: "Como Reduzir o Consumo de Água no Jardim em 40%",
    titleAr: "كيف تخفض استهلاك مياه الحديقة بنسبة 40%",
    excerptEn: "Smart weather-based controllers, night cycle programming, and subsurface drip lines create resilient landscapes without wasteful utility bills.",
    excerptPt: "Controladores inteligentes, rega noturna e gotejamento subterrâneo para jardins sustentáveis.",
    excerptAr: "لوحات التحكم الذكية المعتمدة على الأقمار الصناعية وشبكات التنقيط المدفونة توفر استهلاك المياه وتخفض الفواتير.",
    date: "February 28, 2026",
    readTime: "6 min read",
    categoryEn: "Irrigation",
    categoryPt: "Irrigação",
    categoryAr: "أنظمة الري",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1200&q=80",
    contentEn: `In arid climates, landscape irrigation accounts for up to 60% of total domestic water consumption in standalone villas. Inefficient spray heads operating during midday sun lose up to 50% of moisture to direct evaporation before ever reaching root level.

Modern water-saving principles:
- Subsurface Drip Irrigation: Laying driplines 10-15cm beneath lawns and shrub mulch directs 100% of moisture to root zones.
- Cloud Weather Automation: Smart controllers receive live evapotranspiration (ET) data, reducing cycles when humidity spikes or winter rains appear.
- Night Watering Regimes: Shifting cycles between 10:00 PM and 4:00 AM preserves maximum hydration and lowers thermal shock to foliage.
- Pressure Regulators: Ensuring drip zones run at 1.5 - 2.0 bar stops misting blowouts and pipe ruptures.`,
    contentPt: `A rega representa uma fatia substancial dos consumos de uma moradia em climas áridos. A transição para gotejo subterrâneo e controladores Wi-Fi conectados a estações meteorológicas previne o desperdício por evaporação e melhora a saúde das plantas.`,
    contentAr: `يشكل ري الحدائق النسبة الأكبر من استهلاك المياه في الفلل. يضمن التحول إلى شبكات التنقيط المدفونة وبرمجة الري ليلاً تجنب التبخر وحماية النباتات من الصدمات الحرارية مع توفير ملحوظ في التكاليف.`
  },
  {
    slug: "saline-sandy-soil-improvement",
    titleEn: "Treating Saline and Sandy Soil in Villa Lawns",
    titlePt: "Tratamento de Solos Salinos e Arenosos em Jardins Privados",
    titleAr: "معالجة وتحسين التربة الرملية والمالحة لحدائق الفلل",
    excerptEn: "Biological amendments, gypsum leaching, and humic acid application turn sterile desert sand into fertile, living garden loam.",
    excerptPt: "Correção de salinidade com gesso agrícola e adubação húmica biológica.",
    excerptAr: "استخدام الجبس الزراعي والهيومات الحيوية لتحويل الرمال الصحراوية إلى بيئة خصبة غنية بالمغذيات.",
    date: "January 20, 2026",
    readTime: "7 min read",
    categoryEn: "Soil Science",
    categoryPt: "Ciência do Solo",
    categoryAr: "علوم التربة",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    contentEn: `Sandy desert topsoil poses two distinct challenges: high sand ratio (rapid water drainage with zero nutrient retention) and elevated salinity (sodium buildup causing root burn).

Recommended practices for establishing enduring turf and plantings:
1. Gypsum Application: Calcium in agricultural gypsum displaces sodium ions, allowing salt to be safely flushed below the root level.
2. Humic & Fulvic Injections: Organic humates bind sand particles together, creating microscopic pore spaces that trap moisture and beneficial microbes.
3. Beneficial Mycorrhizae: Fungal inoculants form symbiotic networks with plant roots, expanding their absorption capacity by up to 300%.
4. Topdressing with High-Grade Organic Compost: A 2-inch top layer prevents surface crusting and insulates roots against summer heat.`,
    contentPt: `O solo arenoso do deserto não retém nutrientes e apresenta frequentemente níveis elevados de salinidade. As práticas recomendadas envolvem a aplicação controlada de gesso agrícola e ácidos húmicos para criar uma estrutura estável e fértil.`,
    contentAr: `تواجه التربة الرملية تحدي تصريف المياه السريع وتراكم الأملاح حول الجذور. تشمل الممارسات الموصى بها برامج متكاملة من الجبس الزراعي لغسيل الأملاح وإضافة الهيومات العضوية التي تبني قواماً متماسكاً يحفظ الرطوبة والمغذيات.`
  }
];
