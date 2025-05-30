import React from 'react';
import HeroSection from '../components/features/HeroSection';
import ValuesSection from '../components/features/ValuesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuesSection /> {/*  <-- الجديد */}
      {/* لاحقاً: أقسام أخرى… */}
    </>
  );
}
