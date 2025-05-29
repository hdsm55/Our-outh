import React from 'react';

function Support() {
  const tiers = [
    { name: 'داعم فضي', desc: 'دعم بقيمة رمزية شهريًا، يظهر شعارك في الموقع.' },
    {
      name: 'داعم ذهبي',
      desc: 'رعاية مشروع محدد أو فعالية سنوية مع ترويج إعلامي.',
    },
    {
      name: 'شريك استراتيجي',
      desc: 'تعاون شامل في برامج ومبادرات الهيئة طويلة الأجل.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
        خيارات الدعم
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, i) => (
          <div key={i} className="border rounded-lg p-4 shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {tier.name}
            </h3>
            <p className="text-gray-600">{tier.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-700">
          للتواصل بشأن الدعم: <strong>support@youthglobal.org</strong>
        </p>
      </div>
    </section>
  );
}

export default Support;
