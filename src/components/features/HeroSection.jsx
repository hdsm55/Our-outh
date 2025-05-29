import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        {t('hero.noVideo')}
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-light mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-2xl text-light/90 mb-8">
          {t('hero.tagline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/donate"
            className="px-6 py-3 bg-secondary text-dark font-semibold rounded-lg hover:bg-secondary/90"
          >
            {t('cta.donate')}
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 bg-light/20 border border-light text-light rounded-lg hover:bg-light/30"
          >
            {t('cta.projects')}
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-primary text-light rounded-lg hover:bg-primary/90"
          >
            {t('cta.join')}
          </Link>
        </div>
      </div>
    </section>
  );
}
