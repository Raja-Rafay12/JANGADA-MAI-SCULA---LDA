export interface ServiceDetail {
  slug: string;
  iconName: string;
  titleEn: string;
  titlePt: string;
  titleAr: string;
  shortDescEn: string;
  shortDescPt: string;
  shortDescAr: string;
  fullDescEn: string;
  fullDescPt: string;
  fullDescAr: string;
  image: string;
  deliverablesEn: string[];
  deliverablesPt: string[];
  deliverablesAr: string[];
  uaeClimateNotesEn: string;
  uaeClimateNotesPt: string;
  uaeClimateNotesAr: string;
  faqs: {
    questionEn: string;
    questionPt: string;
    questionAr: string;
    answerEn: string;
    answerPt: string;
    answerAr: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "gardening",
    iconName: "Leaf",
    titleEn: "Gardening & Horticulture",
    titlePt: "Jardinagem",
    titleAr: "العناية بالحدائق والبستنة",
    shortDescEn: "Cultivating vibrant, resilient gardens with native and desert-adapted flora.",
    shortDescPt: "Cuidamos do seu jardim com profissionalismo, garantindo saúde e beleza às suas plantas.",
    shortDescAr: "نعتني بحديقتكم باحترافية أوروبية، مع ضمان نمو نباتات مقاومة للحرارة وصحية طوال العام.",
    fullDescEn: "Our European-trained horticultural specialists bring artful care to luxury private gardens. We select climate-resilient species, nurture healthy soil microbiology, and craft lush botanical arrangements that thrive in extreme temperatures without excessive water demands.",
    fullDescPt: "A nossa equipa de horticultura e jardinagem garante que cada espaço verde atinja o seu potencial máximo de beleza e vitalidade. Cuidamos desde o enriquecimento do solo arenoso até à seleção botânica de espécies resistentes ao calor.",
    fullDescAr: "يقوم مهندسونا المتخصصون في علوم البستنة بتصميم وتنسيق الحدائق النباتية المتلائمة مع المناخ الصحراوي الحار، باختيار أنواع نباتية مقاومة لدرجات الحرارة العالية مع إضفاء لمسة جمالية ساحرة.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    deliverablesEn: [
      "Custom botanical selection (bougainvillea, desert roses, frangipani, jasmine)",
      "Seasonal flowerbed rotation and soil enrichment",
      "Organic fertilization and biological root stimulants",
      "Arborist tree care and palm tree grooming",
      "Integrated pest prevention without harsh toxic runoff"
    ],
    deliverablesPt: [
      "Seleção botânica personalizada para climas áridos e quentes",
      "Rotação sazonal de canteiros de flores",
      "Fertilização orgânica e corretivos biológicos",
      "Podas técnicas de árvores e palmeiras",
      "Controlo integrado de pragas ecológico"
    ],
    deliverablesAr: [
      "اختيار نباتات مخصصة ومقاومة للملوحة والتربة الرملية",
      "تجديد موسمي لأحواض الزهور والشجيرات",
      "تسميد عضوي ومعالجة ميكروبيولوجية للجذور",
      "تقليم احترافي للنخيل والأشجار المعمرة",
      "مكافحة وقائية متكاملة للآفات بدون مواد ضارة"
    ],
    uaeClimateNotesEn: "In summer, ambient temperatures often exceed 45°C. We utilize thermal-reflective organic mulching and deep root hydration to protect root systems from scorch.",
    uaeClimateNotesPt: "No verão, onde as temperaturas superam os 45°C, aplicamos técnicas avançadas de mulching para proteger as raízes contra o calor extremo.",
    uaeClimateNotesAr: "في فصل الصيف تتجاوز درجات الحرارة 45 درجة مئوية؛ لذلك نستخدم طبقات النشارة العضوية ونظم ترطيب الجذور العميقة لحمايتها من الإجهاد الحراري.",
    faqs: [
      {
        questionEn: "Can European flowering plants thrive in Dubai?",
        questionPt: "As plantas com flor europeias sobrevivem no Dubai?",
        questionAr: "هل يمكن للزهور الأوروبية أن تنمو وتزهر في دبي؟",
        answerEn: "Yes, when paired with shaded micro-climates, windbreaks, and drought-tolerant Mediterranean varieties such as oleanders, bougainvilleas, and olive trees.",
        answerPt: "Sim, através de microclimas sombreados e seleção de variedades mediterrânicas resistentes, como oliveiras, buganvílias e loendros.",
        answerAr: "نعم، من خلال توفير بيئات مظللة جزئياً واختيار أصناف البحر الأبيض المتوسط المقاومة للجفاف كأشجار الزيتون والجهنمية الدائمة الإزهار."
      }
    ]
  },
  {
    slug: "landscaping",
    iconName: "Trees",
    titleEn: "Landscape Architecture",
    titlePt: "Paisagismo",
    titleAr: "هندسة وتصميم اللاندسكيب",
    shortDescEn: "Designing and transforming outdoor living spaces, uniting aesthetics with functionality.",
    shortDescPt: "Criamos e transformamos espaços exteriores, unindo estética e funcionalidade.",
    shortDescAr: "نبتكر ونحول المساحات الخارجية إلى لوحات طبيعية خلابة تجمع بين الفخامة والوظيفة العملية.",
    fullDescEn: "We turn private villas and commercial venues into luxurious outdoor retreats. Our comprehensive architecture covers hardscaping, natural stone pathways, custom pergolas, soothing water features, and subtle architectural landscape illumination.",
    fullDescPt: "Transformamos propriedades em refúgios ao ar livre com sofisticação contemporânea. Desenvolvemos o projeto 3D completo, pavimentos em pedra natural, pérgolas personalizadas e espelhos de água relaxantes.",
    fullDescAr: "نحول الفلل والمنتجعات إلى واحات عصرية استثنائية. يشمل تصميمنا المساحات الصلبة، الممرات الحجرية الفاخرة، المظلات، النوافير والمسطحات المائية، مع إضاءة ليلية ساحرة.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    deliverablesEn: [
      "Comprehensive 3D architectural rendering and spatial planning",
      "Natural stone pavers, travertine decks, and porcelain outdoor tiling",
      "Custom aluminum & timber pergolas with integrated misting systems",
      "Architectural water features, reflecting ponds, and fountains",
      "Low-voltage LED landscape lighting with smart home integration"
    ],
    deliverablesPt: [
      "Modelação 3D foto-realista e planeamento de áreas",
      "Calçadas de pedra natural, decks em travertino e cerâmica exterior",
      "Pérgolas modernas com sistemas de nebulização integrados",
      "Espelhos de água, cascatas e fontes arquitetónicas",
      "Iluminação LED de baixa voltagem integrada com domótica"
    ],
    deliverablesAr: [
      "تصميم ثلاثي الأبعاد واقعي ومخططات معمارية تفصيلية",
      "أرضيات حجرية طبيعية وترافرتين وبورسلان خارجي عالي المتانة",
      "مظلات (بيرجولا) عصرية مع أنظمة رذاذ التبريد المدمجة",
      "نوافير وشلالات ومسطحات مائية معمارية هادئة",
      "إضاءة لاندسكيب ذكية منخفضة الجهد قابلة للتحكم عبر الهاتف"
    ],
    uaeClimateNotesEn: "Materials must withstand intense UV index and thermal expansion. We specify non-slip, heat-deflecting surfaces that remain comfortable underfoot.",
    uaeClimateNotesPt: "Todos os materiais selecionados possuem proteção UV reforçada e baixa retenção térmica, ideais para o sol intenso da região.",
    uaeClimateNotesAr: "تخضع جميع المواد المختارة لاختبارات مقاومة الأشعة فوق البنفسجية وتشتيت الحرارة لتظل مريحة للمشي في الصيف.",
    faqs: [
      {
        questionEn: "How long does a complete villa landscaping project take?",
        questionPt: "Quanto tempo demora um projeto completo de paisagismo?",
        questionAr: "كم يستغرق تنفيذ مشروع اللاندسكيب لفيلا كاملة؟",
        answerEn: "Standard private villa installations typically range from 4 to 8 weeks depending on hardscape complexity and water feature civil works.",
        answerPt: "Normalmente entre 4 a 8 semanas, dependendo da complexidade das construções em pedra e espelhos de água.",
        answerAr: "عادة ما يستغرق التنفيذ من 4 إلى 8 أسابيع بحسب تفاصيل الأعمال الإنشائية والمسطحات المائية."
      }
    ]
  },
  {
    slug: "maintenance",
    iconName: "Scissors",
    titleEn: "Estate Maintenance",
    titlePt: "Manutenção",
    titleAr: "الصيانة الدورية الشاملة",
    shortDescEn: "Pruning, lawn mowing, soil fertilization, and phytosanitary care for immaculate grounds.",
    shortDescPt: "Poda, corte, limpeza, fertilização e controlo fitossanitário para espaços sempre cuidados.",
    shortDescAr: "تقليم، تهذيب العشب، تسميد، ومعالجة وقائية لتبقى المساحات الخضراء دائماً في أبهى حلة.",
    fullDescEn: "A luxury landscape is a living, evolving ecosystem that demands expert ongoing stewardship. Our dedicated maintenance squads ensure your grass remains green, your palms clean, and your irrigation operating at peak efficiency 365 days a year.",
    fullDescPt: "A manutenção rigorosa é essencial para preservar o investimento do seu jardim. Oferecemos contratos mensais e anuais com técnicos experientes que cuidam de todos os pormenores.",
    fullDescAr: "تتطلب الحدائق رعاية دورية متواصلة لحماية النباتات من الجفاف والأمراض. توفر فرقنا المتخصصة زيارات منتظمة لصيانة العشب، النخيل، وشبكات الري بأعلى كفاءة.",
    image: "https://images.unsplash.com/photo-1759355787144-46638450cb0c?auto=format&fit=crop&w=1200&q=80",
    deliverablesEn: [
      "Weekly or bi-weekly scheduled groundskeeping visits",
      "Lawn edging, precision mowing, aerating, and verticutting",
      "Date palm pollination, frond pruning, and fruit bagging",
      "Bi-monthly chemical and organic soil nutrition schedules",
      "Rapid-response emergency callout for irrigation or weather damage"
    ],
    deliverablesPt: [
      "Visitas programadas semanais ou quinzenais",
      "Corte do relvado, arejamento e controlo de infestantes",
      "Limpeza e cuidados fitossanitários de palmeiras",
      "Adubação equilibrada e testes regulares de humidade",
      "Linha de assistência rápida para avarias de rega"
    ],
    deliverablesAr: [
      "زيارات دورية أسبوعية أو نصف شهرية مجدولة",
      "قص وتهوية العشب الطبيعي ومعالجة الفراغات",
      "تلقيح وتنظيف النخيل وتكييس الثمار",
      "برامج تسميد دورية عضوية ومغذيات صلبة وسائلة",
      "فريق طوارئ سريع لإصلاح أعطال الري والتسربات"
    ],
    uaeClimateNotesEn: "Our irrigation schedules shift dynamically between winter (1 cycle/day) and midsummer (2-3 cycles/night) to avoid evaporation and fungal root rot.",
    uaeClimateNotesPt: "Os ciclos de rega são reprogramados continuamente entre as estações fria e quente para evitar desperdício e doenças fúngicas.",
    uaeClimateNotesAr: "تتم إعادة برمجة دورات الري أوتوماتيكياً بين فصلي الشتاء والصيف لمنع التبخر وحماية الجذور من التعفن.",
    faqs: [
      {
        questionEn: "Do you supply your own professional equipment and organic fertilizers?",
        questionPt: "A empresa fornece os equipamentos e fertilizantes?",
        questionAr: "هل تتضمن باقة الصيانة كافة المعدات والأسمدة العضوية؟",
        answerEn: "Yes, our mobile crews arrive fully equipped with professional battery/petrol machinery and certified organic treatment products.",
        answerPt: "Sim, as nossas carrinhas estão totalmente equipadas com maquinaria profissional e produtos fitossanitários certificados.",
        answerAr: "نعم، تصل فرقنا مزودة بأحدث المعدات ومواد التغذية العضوية المعتمدة بيئياً دون أي تكلفة إضافية."
      }
    ]
  },
  {
    slug: "irrigation",
    iconName: "Droplet",
    titleEn: "Smart Irrigation Systems",
    titlePt: "Irrigação",
    titleAr: "أنظمة الري الذكية والمستدامة",
    shortDescEn: "Installing and maintaining water-efficient, sustainable irrigation networks.",
    shortDescPt: "Instalamos e mantemos sistemas de rega eficientes e sustentáveis.",
    shortDescAr: "توريد وتركيب أحدث شبكات الري بالتنقيط والرذاذ الذكي الموفر للمياه والمبرمج رقمياً.",
    fullDescEn: "Water stewardship is both an economic necessity and an environmental duty. We engineer smart, weather-reactive irrigation systems that cut water consumption by 30% to 50% while providing optimal hydration directly to plant roots.",
    fullDescPt: "A água é o recurso mais valioso nas regiões áridas. Projetamos redes de rega inteligentes com controlo digital via Wi-Fi, sensores de humidade no solo e gotejadores autocompensantes de alta durabilidade.",
    fullDescAr: "الماء ثروة أساسية ومورد ثمين. نصمم شبكات ري ذكية متصلة بالأقمار الصناعية ومتحكمات الواي فاي تقلل استهلاك المياه بنسبة تصل إلى 50% مع تأمين رطوبة مثالية للجذور.",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1200&q=80",
    deliverablesEn: [
      "Smart WiFi-enabled irrigation controllers (Hunter, Rain Bird) with app control",
      "Pressure-compensating subsurface drip irrigation for lawns and shrubs",
      "Soil moisture probes and solar rain/freeze sensors",
      "Centralized hydraulic balancing and backflow prevention",
      "Treated Sewage Effluent (TSE) filtration and UV sterilization units"
    ],
    deliverablesPt: [
      "Controladores inteligentes com conectividade Wi-Fi e app móvel",
      "Tubagens de gotejo subterrâneo autocompensantes",
      "Sondas de humidade e sensores meteorológicos",
      "Válvulas solenóides de alta pressão e filtros de segurança",
      "Sistemas de filtragem para água reciclada (TSE)"
    ],
    deliverablesAr: [
      "لوحات تحكم ذكية تعمل بالواي فاي من Hunter و Rain Bird وتطبيقات الجوال",
      "أنابيب تنقيط مدفونة ذاتية التنظيف ومقاومة للانسداد",
      "حساسات رطوبة التربة ومحطات رصد الطقس المصغرة",
      "صمامات كهربائية ومحابس أمان لمنع التسريب",
      "فلاتر متقدمة لمعالجة مياه الصرف الصحي المعالجة (TSE)"
    ],
    uaeClimateNotesEn: "We install backflow preventers and multi-disc filters capable of handling desert dust and mineralized water without clogging.",
    uaeClimateNotesPt: "Filtros de discos duplos e válvulas anti-retorno protegem as tubagens contra a sedimentação da areia do deserto.",
    uaeClimateNotesAr: "نعتمد فلاتر قرصية مزدوجة متطورة قادرة على حجب حبيبات الرمل الدقيقة وأملاح المياه ومنع انسداد المنقطات.",
    faqs: [
      {
        questionEn: "Can you retrofit my existing villa irrigation system?",
        questionPt: "É possível modernizar um sistema de rega já existente?",
        questionAr: "هل يمكن ترقية وتحديث شبكة الري الحالية في فيلتي؟",
        answerEn: "Yes, we regularly perform irrigation audits to replace old inefficient sprays with pressure-regulated drip networks and smart controllers.",
        answerPt: "Sim, realizamos auditorias e substituímos aspersores desajustados por sistemas eficientes e controladores inteligentes.",
        answerAr: "نعم، نقوم بفحص الشبكة القائمة واستبدال الرشاشات القديمة بنظم تقطير ذكية ومتحكمات رقمية توفر فواتير المياه بشكل ملموس."
      }
    ]
  },
  {
    slug: "agriculture",
    iconName: "Sprout",
    titleEn: "Agricultural Support",
    titlePt: "Agricultura",
    titleAr: "الدعم والإنتاج الزراعي",
    shortDescEn: "Agricultural production support and specialized advisory services for private farms.",
    shortDescPt: "Apoio à produção agrícola e serviços auxiliares para o setor.",
    shortDescAr: "رعاية النخيل، الزراعة المائية، استصلاح التربة الرملية والخدمات المساندة للقطاع الزراعي والمزارع الخاصة.",
    fullDescEn: "We support private desert estates, boutique farms, and agricultural investors with high-yield horticultural consulting. From date palm orchards to hydroponic greenhouse setups and organic composting, we bring science-backed productivity to arid lands.",
    fullDescPt: "Apoiamos propriedades rurais, quintas privadas e projetos agrícolas com consultoria técnica, melhoramento de solos arenosos e gestão especializada de pomares e palmeirais.",
    fullDescAr: "نقدم حلولاً زراعية متقدمة للمزارع الخاصة والمشاريع الإنتاجية، تشمل زراعة النخيل الإنتاجي، البيوت المحمية المبردة، الزراعة المائية، وتحسين خصوبة التربة.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80",
    deliverablesEn: [
      "Commercial and luxury date palm plantation management (Medjool, Ajwa, Khalas)",
      "Controlled Environment Agriculture (CEA) and cooling greenhouse design",
      "Saline water desalination advice and soil desalinization flushing",
      "Biological soil conditioning with mycorrhizal fungi and organic compost",
      "Hydroponic and vertical farming installations for fresh culinary herbs"
    ],
    deliverablesPt: [
      "Gestão técnica de palmeirais de tâmaras de alta qualidade",
      "Instalação de estufas com controlo climático e refrigeração",
      "Tratamento de solos salinos e lixiviação controlada",
      "Adubação microbiológica e produção de composto orgânico",
      "Projetos de hidroponia e cultivo vertical de ervas aromáticas"
    ],
    deliverablesAr: [
      "إدارة متكاملة لمزارع نخيل التمور الممتازة (المجهول، الإخلاص، عجوة)",
      "إنشاء البيوت المحمية ذات التبريد الصحراوي للإنتاج المستمر",
      "معالجة ملوحة التربة والمياه ببرامج علمية دقيقة",
      "تنشيط التربة بالكائنات الحية الدقيقة والكمبوست العضوي المعالج",
      "أنظمة الزراعة المائية والعمودية لإنتاج الخضروات والأعشاب العطرية"
    ],
    uaeClimateNotesEn: "Arid soil typically has pH > 8.0 and negligible organic matter. We systematically incorporate sulfur, humates, and organic mulch to create optimal root microbiology.",
    uaeClimateNotesPt: "O solo do deserto possui pH elevado e escassa matéria orgânica; corrigimos a sua estrutura com compostos húmicos e minerais biológicos.",
    uaeClimateNotesAr: "تتميز التربة الرملية الصحراوية بقلوية مرتفعة ونقص المادة العضوية؛ لذا نطبق برامج تصحيح بالهيومات والجبس الزراعي لتهيئة بيئة خصبة لنمو الجذور.",
    faqs: [
      {
        questionEn: "Can you assist with setting up a private fruit orchard in Al Ain or Dubai?",
        questionPt: "É possível criar um pomar privado de citrinos e frutas em Al Ain ou Dubai?",
        questionAr: "هل يمكن تأسيس بستان فواكه وحمضيات خاص في العين أو دبي؟",
        answerEn: "Yes, we specialize in microclimate orchards including pomegranates, figs, citrus, and mango varieties suited to arid inland microclimates.",
        answerPt: "Sim, criamos pomares com romãzeiras, figueiras, citrinos e mangueiras adaptados aos microclimas locais.",
        answerAr: "نعم، ننجز بساتين خاصة بأشجار التين والرمان والحمضيات والمانجو المتوافقة مع مناخ واحات العين والمزارع الداخلية."
      }
    ]
  },
  {
    slug: "equipment-materials",
    iconName: "Settings",
    titleEn: "Equipment & Materials",
    titlePt: "Equipamentos e Materiais",
    titleAr: "المعدات والمواد الزراعية",
    shortDescEn: "Supplying premium nursery stock, certified soils, smart hardware, and machinery.",
    shortDescPt: "Comercialização de máquinas, ferramentas e materiais para jardinagem e agricultura.",
    shortDescAr: "عرض متميز للنباتات النادرة، العشب المقاوم، شبكات الري ومعدات التنسيق الفاخرة للمشاريع.",
    fullDescEn: "We source and showcase the finest botanical and engineering assets for luxury landscaping projects across all our project locations. We provide project contractors and estate managers with commercial-grade machinery, certified organic soils, and premium nursery palms.",
    fullDescPt: "Disponibilizamos uma vasta gama de equipamentos profissionais, ferramentas de corte, redes de rega e materiais botânicos para empreiteiros e clientes particulares.",
    fullDescAr: "نوفر لعملائنا ومقاولي المشاريع أرقى أصناف النباتات والأشجار المعتمدة، معدات القص والتقليم الاحترافية، وأنظمة الري ذات الاعتماد العالمي لمشاريع اللاندسكيب الفاخرة.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80",
    deliverablesEn: [
      "Acclimatized specimen palm trees and ornamental desert shrubs",
      "Paspalum and Bermuda heat-tested natural grass rolls and luxury artificial turf",
      "Hunter, Rain Bird, and Netafim drip lines, valves, and smart sensors",
      "Sterilized potting soils, volcanic perlite, peat moss, and organic slow-release feeds",
      "Professional battery-powered silent trimmers, chainsaws, and mowers"
    ],
    deliverablesPt: [
      "Palmeiras de grande porte e árvores ornamentais aclimatadas",
      "Relva natural em rolo de alta densidade e relva sintética de luxo",
      "Tubagens e acessórios Hunter, Rain Bird e Netafim",
      "Substratos enriquecidos, terra vegetal certificada e adubos",
      "Maquinaria profissional a bateria e a gasolina"
    ],
    deliverablesAr: [
      "أشجار نخيل ونباتات زينة معمرة متأقلمة ومفحوصة صحياً",
      "لفائف عشب طبيعي من نوع باسبالوم وبيرمودا معتمد، وعشب صناعي فائق النعومة",
      "محابس وخطوط ري معتمدة من Hunter و Rain Bird و Netafim",
      "تربة زراعية معقمة وخالية من النيماتودا وبيرلايت بركاني",
      "معدات قص وتقليم هادئة صديقة للبيئة تعمل ببطاريات الليثيوم"
    ],
    uaeClimateNotesEn: "All botanical stock undergoes strict quarantine and heat hardening in our regional holding yards before installation.",
    uaeClimateNotesPt: "Todas as plantas passam por um período de aclimatação antes da plantação definitiva nos projetos.",
    uaeClimateNotesAr: "تخضع جميع النباتات لفترة أقلمة ومراقبة حجرية صارمة في مشاتلنا للتأكد من خلوها التام من الآفات وتكيفها مع الشمس المباشرة.",
    faqs: [
      {
        questionEn: "Can clients order materials directly with delivery across all service areas?",
        questionPt: "Fazem fornecimento e entrega direta em todas as áreas de projeto?",
        questionAr: "هل تقدمون خدمات توريد المواد والمعدات مع التوصيل لكافة مناطق ومواقع المشاريع؟",
        answerEn: "Yes, we provide bulk supply and scheduled delivery with full installation support for villas, hotels, and landscape contractors.",
        answerPt: "Sim, fornecemos materiais a granel com entrega e apoio técnico de instalação para obras e residências.",
        answerAr: "نعم، نقوم بتوريد المواد والمعدات بالكميات المطلوبة مع خدمات النقل والإشراف الهندسي على التركيب."
      }
    ]
  }
];
