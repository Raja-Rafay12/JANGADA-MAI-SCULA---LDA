'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, Upload } from 'lucide-react';
import { CitySelect } from '@/components/CitySelect';

export default function ContactPage() {
  const { t, language } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [otherCity, setOtherCity] = useState('');
  const [service, setService] = useState('Landscaping');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    if (!fullName || !email || !phone || !city) {
      setError(
        language === 'pt'
          ? 'Por favor, preencha o seu nome, email, telefone e selecione uma cidade.'
          : language === 'ar'
          ? 'يرجى تعبئة الاسم، البريد الإلكتروني، رقم الهاتف واختيار المدينة.'
          : 'Please provide your name, email, phone number, and select a city.'
      );
      return;
    }

    if (city === 'Other' && !otherCity.trim()) {
      setError(
        language === 'pt'
          ? 'Por favor, especifique a sua cidade.'
          : language === 'ar'
          ? 'يرجى تحديد اسم المدينة.'
          : 'Please specify your city.'
      );
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          city: city === 'Other' ? otherCity.trim() : city,
          otherCity: city === 'Other' ? otherCity.trim() : undefined,
          emirate: city === 'Other' ? otherCity.trim() : city,
          service,
          message,
          language,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to submit quote request. Please try again.');
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-cream-200">
      {/* Header */}
      <section className="bg-forest-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emeraldGreen-400 block mb-3">
            {t.nav.contact}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {language === 'ar'
              ? 'تواصل معنا لطلب استشارة أو عرض أسعار'
              : language === 'pt'
              ? 'Fale Connosco e Solicite um Orçamento'
              : 'Connect with Our Landscape Engineering Team'}
          </h1>
          <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
            {language === 'ar'
              ? 'يسعدنا استقبال استفساراتكم لكافة مشاريعكم وفللكم الخاصة. يتواصل معكم مهندس مختص خلال 24 ساعة.'
              : language === 'pt'
              ? 'Equipas especializadas para moradias, hotéis e empreendimentos de excelência.'
              : 'Ready to elevate your outdoor space? Request a site consultation or send an inquiry to our landscape specialists.'}
          </p>
        </div>
      </section>

      {/* Main Content: Form & Office Locations */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact & Quote Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-darkTxt mb-2">
              {t.quoteModal.title}
            </h2>
            <p className="text-mutedDark text-xs sm:text-sm mb-6 leading-relaxed">
              {t.quoteModal.subtitle}
            </p>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emeraldGreen-100 text-emeraldGreen-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-darkTxt">
                  {t.quoteModal.successTitle}
                </h3>
                <p className="text-mutedDark text-sm max-w-md mx-auto leading-relaxed">
                  {t.quoteModal.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                />

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-darkTxt font-medium mb-1.5">
                      {t.quoteModal.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. João Silva"
                      className="w-full bg-cream-50 border border-cream-300 rounded-xl px-3.5 py-2.5 text-darkTxt focus:outline-none focus:border-emeraldGreen-500"
                    />
                  </div>

                  <div>
                    <label className="block text-darkTxt font-medium mb-1.5">
                      {t.quoteModal.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+351 912 345 678"
                      dir="ltr"
                      className="w-full bg-cream-50 border border-cream-300 rounded-xl px-3.5 py-2.5 text-darkTxt focus:outline-none focus:border-emeraldGreen-500 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-darkTxt font-medium mb-1.5">
                      {t.quoteModal.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@domain.pt"
                      dir="ltr"
                      className="w-full bg-cream-50 border border-cream-300 rounded-xl px-3.5 py-2.5 text-darkTxt focus:outline-none focus:border-emeraldGreen-500"
                    />
                  </div>

                  <div>
                    <label className="block text-darkTxt font-medium mb-1.5">
                      {t.quoteModal.city || t.quoteModal.emirate || 'City'} *
                    </label>
                    <CitySelect
                      value={city}
                      onChange={setCity}
                      theme="light"
                      placeholder={t.quoteModal.selectCity || 'Select a city'}
                      isRTL={language === 'ar'}
                      required
                    />
                    {city === 'Other' && (
                      <div className="mt-2 animate-in fade-in duration-200">
                        <input
                          type="text"
                          required
                          value={otherCity}
                          onChange={(e) => setOtherCity(e.target.value)}
                          placeholder={t.quoteModal.specifyCity || 'Please specify the city'}
                          className="w-full bg-cream-50 border border-cream-300 rounded-xl px-3.5 py-2 text-darkTxt focus:outline-none focus:border-emeraldGreen-500 text-xs"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-darkTxt font-medium mb-1.5">
                    {t.quoteModal.service}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-cream-50 border border-cream-300 rounded-xl px-3.5 py-2.5 text-darkTxt focus:outline-none focus:border-emeraldGreen-500"
                  >
                    <option value="Landscaping">Landscape Architecture & Hardscaping</option>
                    <option value="Gardening">Horticulture & Gardening</option>
                    <option value="Irrigation">Smart Water-Saving Irrigation</option>
                    <option value="Maintenance">Annual Maintenance Contract</option>
                    <option value="Agriculture">Agricultural Support & Cultivation</option>
                    <option value="Equipment-Materials">Equipment & Materials Supply</option>
                  </select>
                </div>

                <div>
                  <label className="block text-darkTxt font-medium mb-1.5">
                    {t.quoteModal.message}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.quoteModal.messagePlaceholder || "Tell us about the property, garden area, key preferences or deadlines..."}
                    className="w-full bg-cream-50 border border-cream-300 rounded-xl p-3 text-darkTxt focus:outline-none focus:border-emeraldGreen-500 resize-none"
                  />
                </div>

                {/* Optional Photo Attachment Placeholder */}
                <div>
                  <label className="block text-darkTxt font-medium mb-1.5 flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-emeraldGreen-600" />
                    <span>
                      {language === 'ar'
                        ? 'إرفاق صورة للموقع أو المخطط (اختياري)'
                        : language === 'pt'
                        ? 'Anexar Foto ou Planta do Terreno (Opcional)'
                        : 'Attach Site Photo or Masterplan (Optional)'}
                    </span>
                  </label>
                  <div className="border border-dashed border-cream-400 rounded-xl p-4 text-center bg-cream-50/60 hover:bg-cream-100 transition-colors cursor-pointer">
                    <p className="text-[11px] text-mutedDark">
                      PNG, JPG, PDF up to 15MB.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white font-medium py-3.5 rounded-xl text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>{t.quoteModal.submitting}</span>
                    ) : (
                      <>
                        <span>{t.quoteModal.submit}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Operational Hubs & Service Areas */}
          <div className="lg:col-span-5 space-y-6">
            {/* Operations & Execution Card */}
            <div className="bg-forest-900 text-white rounded-3xl p-8 border border-forest-750 shadow-md space-y-5">
              <div className="flex items-center justify-between border-b border-forest-800 pb-3">
                <span className="text-[10px] uppercase font-semibold tracking-widest text-emeraldGreen-400 block">
                  {language === 'ar' ? 'الخدمة الميدانية' : language === 'pt' ? 'Serviço Direto' : 'On-Site Execution'}
                </span>
                <span className="text-[10px] bg-emeraldGreen-500/20 text-emeraldGreen-300 border border-emeraldGreen-500/30 px-2.5 py-0.5 rounded-full font-medium">
                  {language === 'ar' ? 'منطقة الخدمة المباشرة' : language === 'pt' ? 'Zona de Serviço Direto' : 'Primary Service Area'}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold">
                  {language === 'ar' ? 'مركز العمليات الميدانية' : language === 'pt' ? 'Operações e Execução' : 'Operations & Execution'}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mt-1 leading-relaxed">
                  {language === 'ar'
                    ? 'تنفيذ وإشراف ميداني كامل لكافة مشاريع الفلل والحدائق في جميع مواقع عملنا.'
                    : language === 'pt'
                    ? 'Execução e supervisão no terreno para todas as moradias e projetos em todas as nossas localizações.'
                    : 'Turnkey on-site execution and landscape management across all our project locations.'}
                </p>
              </div>

              {/* Direct Contacts with Primary first & Secondary second */}
              <div className="space-y-3 text-xs text-white/90">
                {/* Phone 1: Primary */}
                <div className="flex items-center justify-between bg-forest-950/60 border border-forest-800 rounded-xl p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emeraldGreen-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 text-emeraldGreen-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-emeraldGreen-400 font-bold uppercase tracking-wider block">
                        {language === 'ar' ? siteConfig.contact.primaryPhone.labelAr : language === 'pt' ? siteConfig.contact.primaryPhone.labelPt : siteConfig.contact.primaryPhone.labelEn}
                      </span>
                      <a
                        href={siteConfig.contact.primaryPhone.href}
                        dir="ltr"
                        className="font-mono text-sm text-white hover:text-emeraldGreen-300 font-semibold"
                      >
                        {siteConfig.contact.primaryPhone.display}
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emeraldGreen-500 text-white font-bold px-2 py-0.5 rounded-md">
                    {language === 'ar' ? siteConfig.contact.primaryPhone.labelAr : language === 'pt' ? siteConfig.contact.primaryPhone.labelPt : siteConfig.contact.primaryPhone.labelEn}
                  </span>
                </div>

                {/* Phone 2: Secondary */}
                <div className="flex items-center justify-between bg-forest-950/40 border border-forest-800 rounded-xl p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 text-white/60" />
                    </div>
                    <div>
                      <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider block">
                        {language === 'ar' ? siteConfig.contact.secondaryPhone.labelAr : language === 'pt' ? siteConfig.contact.secondaryPhone.labelPt : siteConfig.contact.secondaryPhone.labelEn}
                      </span>
                      <a
                        href={siteConfig.contact.secondaryPhone.href}
                        dir="ltr"
                        className="font-mono text-sm text-white/90 hover:text-emeraldGreen-300"
                      >
                        {siteConfig.contact.secondaryPhone.display}
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] text-white/50 border border-white/20 px-2 py-0.5 rounded-md">
                    {language === 'ar' ? siteConfig.contact.secondaryPhone.labelAr : language === 'pt' ? siteConfig.contact.secondaryPhone.labelPt : siteConfig.contact.secondaryPhone.labelEn}
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 bg-forest-950/40 border border-forest-800 rounded-xl p-3">
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-emeraldGreen-400" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-white/60 uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href={siteConfig.contact.email.href}
                      dir="ltr"
                      className="text-sm text-white hover:text-emeraldGreen-300 truncate block font-medium"
                    >
                      {siteConfig.contact.email.address}
                    </a>
                  </div>
                </div>

                {/* Working Hours TODO */}
                <div className="flex items-center gap-3 bg-forest-950/40 border border-forest-800 rounded-xl p-3">
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-emeraldGreen-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/60 uppercase tracking-wider block">
                      Working Hours
                    </span>
                    <span className="text-xs text-white/70 italic">
                      {siteConfig.contact.workingHours}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Direct Action */}
                <a
                  href={siteConfig.contact.whatsapp.getUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider"
                >
                  <span>Chat on WhatsApp ({siteConfig.contact.whatsapp.display})</span>
                </a>
              </div>

            </div>

            {/* Registered Office (Portugal) */}
            <div className="bg-white rounded-3xl p-8 border border-cream-300 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-cream-200 pb-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emeraldGreen-700 bg-emeraldGreen-50 px-2.5 py-1 rounded-md border border-emeraldGreen-200 block">
                  {language === 'ar'
                    ? siteConfig.locations.registeredOffice.labelAr
                    : language === 'pt'
                    ? siteConfig.locations.registeredOffice.labelPt
                    : siteConfig.locations.registeredOffice.labelEn}
                </span>
                <span className="text-[10px] text-mutedDark font-medium">Portugal</span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-darkTxt">
                  {siteConfig.company.legalName}
                </h3>
                <p className="text-mutedDark text-xs leading-relaxed mt-1 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emeraldGreen-600 shrink-0 mt-0.5" />
                  <span>{siteConfig.locations.registeredOffice.fullAddress}</span>
                </p>
              </div>

              {/* Registered Office Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-cream-300 shadow-inner bg-cream-100">
                <iframe
                  title="Registered Office - Castanheira do Ribatejo, Portugal"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Rua%20Padre%20Ant%C3%B3nio%20Bianchi%206%2C%20Castanheira%20do%20Ribatejo%2C%20Portugal&t=&z=14&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              {/* Legal Notes & Corporate Registration Details */}
              <div className="pt-2 text-[11px] text-mutedDark border-t border-cream-200 space-y-1">
                <p>
                  <strong>Entity:</strong> {siteConfig.company.legalName}
                </p>
                <p>
                  <strong>NIF / VAT:</strong> {siteConfig.company.nif}
                </p>
                <p className="text-emeraldGreen-700 text-[10px]">
                  * {language === 'ar'
                    ? 'المقر الرئيسي المسجل للشؤون القانونية والإدارية. تنفيذ المشاريع يتم ميدانياً في مواقع العمل.'
                    : language === 'pt'
                    ? 'Sede registada para efeitos societários e contratuais. Todas as operações de terreno realizam-se diretamente nas áreas de projeto.'
                    : 'Registered office for legal and corporate governance. Field works and projects are executed on-site across all service areas.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
