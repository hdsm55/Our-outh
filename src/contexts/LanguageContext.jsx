import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import ar from '../locales/ar.json';

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

const Ctx = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(i18n.language);

  const switchLang = () => {
    const next = lang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
    setLang(next);
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <Ctx.Provider value={{ t: i18n.t, lang, isRTL: lang === 'ar', switchLang }}>
      {children}
    </Ctx.Provider>
  );
};

export const useLanguage = () => useContext(Ctx);
