import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const team = [
  {
    nameKey: 'about.team.ahmed',
    roleKey: 'about.team.role.ceo',
    img: '/images/team/ahmed.jpg',
  },
  {
    nameKey: 'about.team.sara',
    roleKey: 'about.team.role.ops',
    img: '/images/team/sara.jpg',
  },
  {
    nameKey: 'about.team.ali',
    roleKey: 'about.team.role.eng',
    img: '/images/team/ali.jpg',
  },
  // أضِف/عدِّل كما تشاء
];

export default function TeamGrid() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-light dark:bg-dark/40">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t('about.meetTeam')}
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto">
        {team.map(({ nameKey, roleKey, img }) => (
          <div key={nameKey} className="flex flex-col items-center text-center">
            <img
              src={img}
              alt={t(nameKey)}
              className="w-40 h-40 object-cover rounded-full shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold">{t(nameKey)}</h3>
            <p className="text-sm text-dark/70 dark:text-light/70">
              {t(roleKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
