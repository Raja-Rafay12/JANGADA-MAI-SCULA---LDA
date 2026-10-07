'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';
import { ShieldCheck, Award, Leaf, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { t, openQuoteModal, isRTL, language } = useLanguage();

  const leadershipTeam = [
    {
      name: "Mr. Navid Ansar Raja",
      roleEn: "Client Acquisition & Technical Support Director",
      rolePt: "Diretor Comercial e de Suporte Técnico",
      roleAr: "مدير استقطاب العملاء والدعم الفني",
      bioEn: "Strengthens client acquisition, supplier coordination, equipment sourcing, and after-sales technical support.",
      bioPt: "Potencia a angariação de clientes, coordenação com fornecedores, aquisição de equipamentos e suporte técnico pós-venda.",
      bioAr: "تعزيز استقطاب العملاء، والتنسيق مع الموردين، وتوفير المعدات، والدعم الفني المتميز بعد البيع.",
      image: "/images/team/raja_naveed.jpeg",
    },
    {
      name: "Mr. Farhan Shehzad",
      roleEn: "Technical Director & Agricultural Engineer",
      rolePt: "Diretor Técnico e Engenheiro Agrónomo",
      roleAr: "المدير الفني وهندسة اللاندسكيب الزراعي",
      bioEn: "Anchors the technical credibility with 23 years in landscaping and agricultural engineering.",
      bioPt: "Garante a credibilidade e solidez técnica com 23 anos de experiência em engenharia agronómica e paisagismo.",
      bioAr: "يقود الجدارة والخبرة الفنية مع أكثر من 23 عاماً في هندسة اللاندسكيب والمشاريع الزراعية.",
      image: "/images/team/farhan_shehzad.png",
    },
    {
      name: "Mr. Waqas Ansar Raja",
      roleEn: "Brand Positioning & Design Director",
      rolePt: "Diretor de Marca e Design",
      roleAr: "مدير العلامة التجارية والتصميم",
      bioEn: "Contributes brand positioning, design sensibility, and client-facing presentation (important in hospitality and premium residential contracts).",
      bioPt: "Contribui para o posicionamento da marca, sensibilidade de design e apresentação ao cliente (essencial em contratos de hotelaria e projetos residenciais de topo).",
      bioAr: "تطوير هوية ومكانة العلامة التجارية، واللمسة الجمالية في التصميم، وتقديم العروض للعملاء في قطاع الضيافة والمشاريع السكنية الفاخرة.",
      image: "/images/team/raja_waqas.jpeg",
    },
  ];

  const certifications = [
    {
      titleEn: "European Horticultural Guild Certification",
      titlePt: "Certificação da Associação Europeia de Horticultura",
      titleAr: "شهادة الرابطة الأوروبية للبستنة وعلوم النبات",
      descEn: "Strict adherence to EU environmental stewardship and organic soil fertility standards.",
      descPt: "Cumprimento rigoroso das normas europeias de fertilidade biológica do solo.",
      descAr: "التزام كامل بمعايير الاتحاد الأوروبي للسلامة البيئية وخصوبة التربة العضوية.",
    },
    {
      titleEn: "Certified Irrigation Designer (CID - Smart Water)",
      titlePt: "Projetista de Rega Certificado (Eficiência Hídrica)",
      titleAr: "مصمم شبكات ري معتمد دولياً (ترشيد المياه)",
      descEn: "Recognized expertise in pressure-compensating drip technologies and evapotranspiration calculations.",
      descPt: "Especialização reconhecida em gotejamento de precisão e cálculo de evapotranspiração.",
      descAr: "خبرة معتمدة في تقنيات الري بالتنقيط المتوازن وحسابات التبخر الصحراوي.",
    },
    {
      titleEn: "Municipality Approved Contractor",
      titlePt: "Empreiteiro Aprovado pelos Municípios",
      titleAr: "مقاول معتمد لدى البلديات",
      descEn: "Registered for civil landscaping, date palm transplantation, and TSE pipeline connections.",
      descPt: "Habilitado para obras de paisagismo, transplante de palmeiras e ligação a redes TSE.",
      descAr: "مرخص لتنفيذ أعمال اللاندسكيب، نقل وزراعة النخيل، وتوصيل شبكات المياه المعالجة.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      {/* Page Header */}
      <section className="bg-forest-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emeraldGreen-400 block mb-3">
            {t.nav.about}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
            {language === 'ar'
              ? 'تاريخ أوروبي عريق في رعاية الطبيعة يلتقي مع الابتكار الهندسي'
              : language === 'pt'
              ? 'Herança Botânica Europeia com Precisão e Excelência'
              : 'European Horticultural Heritage Engineered for Distinctive Climates'}
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            {language === 'ar'
              ? 'تأسست شركة جانغادا مايوسكولا في البرتغال، وتكرس خبراتها الهندسية الميدانية لتطوير أروع المساحات الخضراء والحدائق للفلل الخاصة والمشاريع الرائدة في دبي وأبوظبي.'
              : language === 'pt'
              ? 'Fundada em Portugal, a Jangada Maiúscula Lda. combina o rigor da engenharia agronómica europeia com o conhecimento profundo do clima árido e desafiante.'
              : 'Registered in Portugal and operating dedicated execution squads, Jangada Maiúscula, Lda. bridges refined continental landscape craftsmanship with advanced arid-climate hydraulic science.'}
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-emeraldGreen-600 block">
              {language === 'ar' ? 'قصتنا ورؤيتنا' : language === 'pt' ? 'A Nossa História' : 'Our Story & Purpose'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-darkTxt">
              {language === 'ar'
                ? 'تحويل التحدي الصحراوي إلى واحات حية مستدامة'
                : language === 'pt'
                ? 'Transformar o desafio do deserto em oásis vivos e sustentáveis'
                : 'Transforming Desert Challenges into Enduring Living Sanctuaries'}
            </h2>
            <div className="space-y-4 text-mutedDark text-sm sm:text-base leading-relaxed">
              <p>
                {language === 'ar'
                  ? 'ندرك أن حديقة الفيلا الخاصة ليست مجرد مساحة إضافية، بل هي ملاذ عائلي يعزز جودة الحياة وقيمة العقار. المناخ القاسي يتطلب أسلوباً علمياً دقيقاً في اختيار النباتات ونظم الري.'
                  : language === 'pt'
                  ? 'Acreditamos que um jardim de excelência é muito mais do que um espaço exterior; é um santuário de serenidade e bem-estar. O clima exigente exige um equilíbrio perfeito entre ciência agronómica, conservação de água e estética luxuosa.'
                  : 'We believe a luxury outdoor living space is more than an amenity; it is a restorative sanctuary for family life and a statement of architectural refinement. The demanding climate requires an exacting synergy of agronomic science, biological soil health, and intelligent water conservation.'}
              </p>
              <p>
                {language === 'ar'
                  ? 'من خلال مقرنا المسجل في البرتغال وفرق عملياتنا الميدانية، نوفر لعملائنا أفضل الكفاءات المتخصصة في زراعة النخيل، العشب المقاوم للملوحة، وشبكات الري السحابية ذات الكفاءة القصوى.'
                  : language === 'pt'
                  ? 'Através da nossa sede registada em Portugal e das operações em campo no Dubai e Abu Dhabi, fornecemos equipas qualificadas para transformar residências e projetos com total compromisso de sustentabilidade.'
                  : 'From our registered office in Portugal to our active operational depots in Dubai and Abu Dhabi, our teams provide turnkey execution: from soil desalinization and palm tree selection to automated micro-irrigation and year-round preventative estate care.'}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openQuoteModal()}
                className="inline-flex items-center gap-3 bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white font-medium px-8 py-3 rounded-full text-sm shadow-md transition-all"
              >
                <span>{t.nav.requestQuote}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-cream-300">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${siteConfig.images.aboutVilla})` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Specialists */}
      <section className="py-20 bg-cream-100 border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-emeraldGreen-600 block mb-2">
              {language === 'ar' ? 'فريق العمل' : language === 'pt' ? 'A Nossa Equipa' : 'Specialist Leadership'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-darkTxt">
              {language === 'ar'
                ? 'خبرات هندسية وبستانية معتمدة'
                : language === 'pt'
                ? 'Liderança Agronómica e Arquitetura Paisagista'
                : 'Agronomic Expertise & Design Precision'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => {
              const role =
                language === 'pt'
                  ? member.rolePt
                  : language === 'ar'
                  ? member.roleAr
                  : member.roleEn;
              const bio =
                language === 'pt'
                  ? member.bioPt
                  : language === 'ar'
                  ? member.bioAr
                  : member.bioEn;

              return (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-emeraldGreen-500 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-darkTxt mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-emeraldGreen-600 mb-3 block">
                    {role}
                  </span>
                  <p className="text-mutedDark text-xs leading-relaxed font-light">
                    {bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-emeraldGreen-600 block mb-2">
            {language === 'ar' ? 'الاعتمادات والجودة' : language === 'pt' ? 'Certificações' : 'Standards & Accreditations'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-darkTxt">
            {language === 'ar'
              ? 'معايير أوروبية متوافقة مع المتطلبات التنظيمية والمعايير المعتمدة'
              : language === 'pt'
              ? 'Padrões Europeus e Conformidade Local'
              : 'European Rigor, Full Regulatory Compliance'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const title =
              language === 'pt'
                ? cert.titlePt
                : language === 'ar'
                ? cert.titleAr
                : cert.titleEn;
            const desc =
              language === 'pt'
                ? cert.descPt
                : language === 'ar'
                ? cert.descAr
                : cert.descEn;

            return (
              <div
                key={cert.titleEn}
                className="bg-white border border-cream-300 rounded-2xl p-6 shadow-sm hover:border-emeraldGreen-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emeraldGreen-50 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-emeraldGreen-600" />
                </div>
                <h3 className="font-serif text-lg font-bold text-darkTxt mb-2">
                  {title}
                </h3>
                <p className="text-mutedDark text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
