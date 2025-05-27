import React from 'react';

function Home() {
  return (
    <main className="font-[Tajawal] text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#002b5b] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          نُمكّن الشباب المسلم لبناء أمة واعية ومؤثرة
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          برامج، مشاريع، تمكين... نحو جيل يحمل الرسالة ويقود التغيير في العالم
          الإسلامي.
        </p>
        <a
          href="/support"
          className="bg-white text-[#002b5b] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          كن جزءًا من الأثر
        </a>
      </section>

      {/* Vision / Mission / Values */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ['رؤيتنا', 'شباب واعٍ مؤثر، مبادر يقود مجتمعه ويخدم أمته.'],
            [
              'رسالتنا',
              'تمكين الشباب المسلم حول العالم بالمعرفة، والقيادة، والعمل المؤسسي.',
            ],
            ['قيمنا', 'الأصالة، الريادة، التمكين، الإبداع، التكامل، الأثر.'],
          ].map(([title, text], i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-[#002b5b] mb-2">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Overview */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#002b5b] mb-4">
            ماذا نقدم؟
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            مجالات متنوعة لتأهيل وتفعيل دور الشباب المسلم في بناء الأمة.
          </p>
        </div>
        <div className="font-tajawal text-center text-xl text-gray-800">
          مرحبًا بكم في موقع الهيئة العالمية للشباب
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['البرامج التدريبية', 'تطوير القيادة والهوية للشباب'],
            ['المشاريع المجتمعية', 'حملات توعوية، بيئية، إغاثية'],
            ['المبادرات الرقمية', 'تعليم المهارات التقنية والإعلامية'],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition text-center"
            >
              <h4 className="text-lg font-semibold text-[#002b5b] mb-2">
                {title}
              </h4>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#f4f6fa] py-16 text-center px-6">
        <h2 className="text-2xl font-bold text-[#002b5b] mb-4">
          انضم إلينا وساهم في التغيير
        </h2>
        <p className="mb-6 text-sm text-gray-700">
          شارك معنا في تحقيق الأثر وبناء الجيل القادم.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#002b5b] text-white px-6 py-3 rounded-full hover:bg-[#001f3f] transition"
        >
          تواصل معنا الآن
        </a>
      </section>
    </main>
  );
}

export default Home;
