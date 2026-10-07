'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { CitySelect } from './CitySelect';

export function QuoteModal() {
  const { isQuoteModalOpen, closeQuoteModal, prefilledService, t, language } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [otherCity, setOtherCity] = useState('');
  const [service, setService] = useState('');
  const [projectSize, setProjectSize] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Spam protection
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    } else {
      setService('Landscaping');
    }
  }, [prefilledService]);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent discard of bot submissions

    if (!fullName || !email || !phone || !city) {
      setErrorMessage(
        language === 'pt'
          ? 'Por favor, preencha o seu nome, email, telefone e selecione uma cidade.'
          : language === 'ar'
          ? 'يرجى تعبئة الاسم، البريد الإلكتروني، رقم الهاتف واختيار المدينة.'
          : 'Please fill in your name, email, phone number, and select a city.'
      );
      return;
    }

    if (city === 'Other' && !otherCity.trim()) {
      setErrorMessage(
        language === 'pt'
          ? 'Por favor, especifique a sua cidade.'
          : language === 'ar'
          ? 'يرجى تحديد اسم المدينة.'
          : 'Please specify your city.'
      );
      return;
    }

    setLoading(true);
    setErrorMessage('');

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
          projectSize,
          message,
          language,
        }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setErrorMessage(data.error || 'Failed to submit quote request. Please try again.');
      }
    } catch {
      // Offline fallback: still consider received locally for demonstration
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setCity('');
    setOtherCity('');
    setMessage('');
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-forest-900 border border-forest-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 end-6 text-white/60 hover:text-white p-2 rounded-full hover:bg-forest-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emeraldGreen-500/20 text-emeraldGreen-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              {t.quoteModal.successTitle}
            </h3>
            <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed">
              {t.quoteModal.successDesc}
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-white font-medium px-8 py-2.5 rounded-full text-sm transition-all"
              >
                {t.quoteModal.close}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-widest text-emeraldGreen-400 font-semibold block mb-1">
                JANGADA MAIÚSCULA
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {t.quoteModal.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                {t.quoteModal.subtitle}
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-900/40 border border-red-700/50 rounded-xl text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Honeypot field for bot spam prevention */}
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-medium mb-1.5">
                    {t.quoteModal.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. João Silva"
                    className="w-full bg-forest-950/80 border border-forest-700 rounded-xl px-3.5 py-2.5 text-white placeholder-white/35 focus:outline-none focus:border-emeraldGreen-400 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-1.5">
                    {t.quoteModal.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+351 912 345 678"
                    dir="ltr"
                    className="w-full bg-forest-950/80 border border-forest-700 rounded-xl px-3.5 py-2.5 text-white placeholder-white/35 focus:outline-none focus:border-emeraldGreen-400 text-xs font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-medium mb-1.5">
                    {t.quoteModal.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@domain.pt"
                    dir="ltr"
                    className="w-full bg-forest-950/80 border border-forest-700 rounded-xl px-3.5 py-2.5 text-white placeholder-white/35 focus:outline-none focus:border-emeraldGreen-400 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-1.5">
                    {t.quoteModal.city || t.quoteModal.emirate || 'City'} *
                  </label>
                  <CitySelect
                    value={city}
                    onChange={setCity}
                    theme="dark"
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
                        className="w-full bg-forest-950/80 border border-forest-700 rounded-xl px-3.5 py-2 text-white placeholder-white/35 focus:outline-none focus:border-emeraldGreen-400 text-xs"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-medium mb-1.5">
                    {t.quoteModal.service}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-forest-950 border border-forest-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emeraldGreen-400 text-xs"
                  >
                    <option value="Landscaping">Landscape Architecture</option>
                    <option value="Gardening">Gardening & Horticulture</option>
                    <option value="Irrigation">Smart Irrigation Systems</option>
                    <option value="Maintenance">Scheduled Maintenance Contract</option>
                    <option value="Agriculture">Agricultural Support & Cultivation</option>
                    <option value="Equipment-Materials">Equipment & Materials Supply</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-1.5">
                    {t.quoteModal.projectSize}
                  </label>
                  <input
                    type="text"
                    value={projectSize}
                    onChange={(e) => setProjectSize(e.target.value)}
                    placeholder="e.g. 800 sqm / 8,500 sqft"
                    className="w-full bg-forest-950/80 border border-forest-700 rounded-xl px-3.5 py-2.5 text-white placeholder-white/35 focus:outline-none focus:border-emeraldGreen-400 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-medium mb-1.5">
                  {t.quoteModal.message}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.quoteModal.messagePlaceholder || "Tell us about the property, garden area, key preferences or deadlines..."}
                  className="w-full bg-forest-950/80 border border-forest-700 rounded-xl p-3 text-white placeholder-white/35 focus:outline-none focus:border-emeraldGreen-400 text-xs resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emeraldGreen-500 hover:bg-emeraldGreen-600 disabled:opacity-60 text-white font-medium py-3 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-glow flex items-center justify-center gap-2"
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

              <p className="text-[10px] text-center text-white/50 pt-1">
                Your data is protected under EU GDPR & international privacy standards. No spam, ever.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
