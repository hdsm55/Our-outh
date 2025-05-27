import React from 'react';

function About() {
  return (
    <section className="max-w-3xl mx-auto text-center mt-12 px-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">من نحن</h1>
      <p className="text-gray-700 leading-relaxed">
        الهيئة العالمية للشباب هي منظمة شبابية دولية تسعى لتمكين الشباب المسلم
        في مختلف دول العالم، من خلال تقديم برامج نوعية، ومشاريع تنموية، وفرص
        للتفاعل المجتمعي والمساهمة الحضارية.
      </p>
      <p className="mt-4 text-gray-700">
        رؤيتنا: شباب واعٍ... قادر... مؤثر.
        <br />
        رسالتنا: بناء جيل شبابي ينهض بالأمة من خلال القيادة والمعرفة والعمل.
      </p>
    </section>
  );
}

export default About;
