import React from 'react';

function Activities() {
  const activities = [
    {
      title: 'ملتقى الشباب العالمي',
      date: 'يونيو 2025',
      desc: 'تجمع شبابي من 30 دولة لطرح مبادرات وتبادل خبرات.',
    },
    {
      title: 'برنامج القيادة الواعية',
      date: 'مايو 2025',
      desc: 'تدريب مكثف حول مفاهيم القيادة والتأثير الإيجابي.',
    },
    {
      title: 'حملة رمضان للعمل التطوعي',
      date: 'رمضان 1446هـ',
      desc: 'مشاريع لخدمة المجتمعات المحتاجة بالتعاون مع مؤسسات محلية.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        أنشطتنا
      </h2>
      <ul className="space-y-6">
        {activities.map((act, i) => (
          <li key={i} className="border p-4 rounded-md shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-gray-800">{act.title}</h3>
            <p className="text-sm text-gray-500">{act.date}</p>
            <p className="mt-2 text-gray-700">{act.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
