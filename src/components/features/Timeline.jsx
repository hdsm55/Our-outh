import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const events = [
  { year: 2015, key: 'about.timeline.2015' },
  { year: 2018, key: 'about.timeline.2018' },
  { year: 2022, key: 'about.timeline.2022' },
];

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t('about.ourJourney')}
      </h2>

      <ol className="relative border-s-4 border-primary/20 max-w-3xl mx-auto">
        {events.map(({ year, key }, idx) => (
          <li key={year} className="ms-6 mb-10">
            <span className="absolute -start-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-4 ring-white dark:ring-dark" />
            <time className="mb-1 text-lg font-semibold leading-none">
              {year}
            </time>
            <p className="text-dark/80 dark:text-light/80">{t(key)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
