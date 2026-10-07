/**
 * JANGADA MAIÚSCULA – LDA. - Central Site Configuration
 * All official contact details, registered office, phones, and social links
 * are strictly maintained here. Every component reads directly from this file.
 */

export const PORTUGAL_CITIES = [
  "Lisboa",
  "Porto",
  "Vila Nova de Gaia",
  "Amadora",
  "Braga",
  "Setúbal",
  "Coimbra",
  "Faro",
  "Funchal",
  "Ponta Delgada",
  "Aveiro",
  "Cascais",
  "Oeiras",
  "Sintra",
  "Vila Franca de Xira",
  "Leiria",
  "Évora",
  "Viseu",
  "Guimarães",
  "Albufeira",
  "Lagos",
  "Other",
] as const;

export type PortugalCity = typeof PORTUGAL_CITIES[number];

export const siteConfig = {
  company: {
    legalName: "JANGADA MAIÚSCULA – LDA.",
    name: "JANGADA MAIÚSCULA – LDA.",
    shortName: "Jangada Maiúscula",
    tagline: "Criamos espaços. Cuidamos do verde.",
    taglineEn: "We create spaces. We care for green.",
    taglineAr: "نبتكر المساحات. ونرعى الطبيعة.",
    nif: "TODO: NIF/VAT number to be provided",
    commercialRegistry: "Conservatória do Registo Comercial",
  },

  // Registered Office (Portugal) & Active Execution
  locations: {
    registeredOffice: {
      labelEn: "Registered Office",
      labelPt: "Sede Social Registada",
      labelAr: "المقر الرئيسي المسجل",
      fullAddress: "Rua Padre António Bianchi, n.º 6, Loja B, Castanheira do Ribatejo, Vila Franca de Xira, Portugal",
      street: "Rua Padre António Bianchi, n.º 6, Loja B",
      locality: "Castanheira do Ribatejo, Vila Franca de Xira",
      postalCode: "TODO: Postal code to be provided",
      country: "Portugal",
      countryCode: "PT",
    },
    portugalCities: PORTUGAL_CITIES,
    operations: {
      labelEn: "Operations & Execution",
      labelPt: "Operações e Execução",
      labelAr: "عمليات وتنفيذ المشاريع",
      serviceAreasLabelEn: "Service Areas:",
      serviceAreasLabelPt: "Zonas de Intervenção:",
      serviceAreasLabelAr: "مناطق الخدمة المعتمدة:",
      serviceAreas: [
        "Dubai",
        "Abu Dhabi",
        "Sharjah",
        "Al Ain",
      ],
      serviceAreasPt: [
        "Dubai",
        "Abu Dhabi",
        "Sharjah",
        "Al Ain",
      ],
      serviceAreasAr: [
        "دبي",
        "أبوظبي",
        "الشارقة",
        "العين",
      ],
    },
    // Compatibility aliases
    operationsUae: {
      labelEn: "Operations & Execution",
      labelPt: "Operações e Execução",
      labelAr: "عمليات وتنفيذ المشاريع",
      serviceAreas: [
        "Dubai",
        "Abu Dhabi",
        "Sharjah",
        "Al Ain",
      ],
    },
    portugal: {
      address: "Rua Padre António Bianchi, n.º 6, Loja B, Castanheira do Ribatejo, Vila Franca de Xira, Portugal",
    },
    uae: {
      address: "Dubai & Abu Dhabi",
      serviceAreas: [
        "Dubai",
        "Abu Dhabi",
        "Sharjah",
        "Al Ain",
      ],
    },
  },

  // Contact details: Primary (+44) and Secondary (+971)
  contact: {
    // Primary Phone
    primaryPhone: {
      display: "+44 7435 818844",
      href: "tel:+447435818844",
      rawDigits: "447435818844",
      labelEn: "Primary",
      labelPt: "Principal",
      labelAr: "الرئيسي",
    },
    // Secondary Phone
    secondaryPhone: {
      display: "+971 50 567 4039",
      href: "tel:+971505674039",
      rawDigits: "971505674039",
      labelEn: "Secondary",
      labelPt: "Secundário",
      labelAr: "الثانوي",
    },
    // Email
    email: {
      address: "geral@jangada-mai.com",
      href: "mailto:geral@jangada-mai.com",
    },
    // WhatsApp configuration (Single config value: whatsappNumber)
    whatsappNumber: "971505674039",
    whatsapp: {
      number: "971505674039",
      display: "+971 50 567 4039",
      numberDisplay: "+971 50 567 4039",
      defaultPrefilledText: "Hello, I'd like a quote for a landscaping project.",
      getUrl: (customText?: string) => {
        const text = customText || "Hello, I'd like a quote for a landscaping project.";
        return `https://wa.me/971505674039?text=${encodeURIComponent(text)}`;
      },
    },
    // Working hours - clearly marked TODO
    workingHours: "TODO: Opening hours to be provided",
    // Compatibility aliases
    phoneUk: {
      display: "+44 7435 818844",
      href: "tel:+447435818844",
      rawDigits: "447435818844",
      labelEn: "Primary",
      labelPt: "Principal",
      labelAr: "الرئيسي",
    },
    phoneUae: {
      display: "+971 50 567 4039",
      href: "tel:+971505674039",
      rawDigits: "971505674039",
      labelEn: "Secondary",
      labelPt: "Secundário",
      labelAr: "الثانوي",
    },
    phoneMobile: "+44 7435 818844",
    phonePt: "+44 7435 818844",
    emailGeneral: "geral@jangada-mai.com",
    emailQuotes: "geral@jangada-mai.com",
  },

  // Social Media Links - Empty strings will be hidden automatically
  socials: {
    facebook: "", // TODO: Facebook URL
    instagram: "", // TODO: Instagram URL
    linkedin: "", // TODO: LinkedIn URL
    whatsapp: "https://wa.me/971505674039?text=Hello%2C%20I%27d%20like%20a%20quote%20for%20a%20landscaping%20project.",
  },

  // Verified metrics
  stats: {
    yearsExperience: "10+",
    projectsCompleted: "120+",
    activeContracts: "45+",
    endToEndSolutions: "360°",
    clientRetentionRate: "98%",
  },

  // Curated photography
  images: {
    heroGarden: "/images/hero.jpg",
    aboutVilla: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ctaGardener: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80",
    irrigation: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1000&q=80",
    landscaping: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    maintenance: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80",
    agriculture: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=80",
  },
};
