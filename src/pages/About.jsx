import React from 'react';
import Timeline from '../components/features/Timeline';
import TeamGrid from '../components/features/TeamGrid';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Banner صغير */}
      <section className="h-56 bg-primary text-light flex items-center justify-center">
        <h1 className="text-4xl font-extrabold">{t('nav.about')}</h1>
      </section>

      {/* رسالة المنظمة */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t('about.missionTitle')}</h2>
        <p className="text-lg leading-relaxed">{t('about.missionBody')}</p>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Team */}
      <TeamGrid />
    </>
  );
}
