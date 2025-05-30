import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const items = [
  { key: 'values.empower', img: '/images/values/empower.svg' },
  { key: 'values.innovate', img: '/images/values/innovate.svg' },
  { key: 'values.collaborate', img: '/images/values/collaborate.svg' },
];

export default function ValuesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-light dark:bg-dark/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('home.ourValues')}
        </h2>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key, img }) => (
            <div
              key={key}
              className="flex flex-col items-center text-center p-8 rounded-2xl shadow-lg bg-white dark:bg-dark/70 hover:-translate-y-1 transition"
            >
              <img
                src={img}
                alt={t(`${key}.title`)}
                className="w-24 h-24 mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm text-dark/70 dark:text-light/70">
                {t(`${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
