import React from 'react';

function Contact() {
  return (
    <section className="max-w-xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
        اتصل بنا
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm text-gray-700">
            الاسم الكامل
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="مثال: محمد أحمد"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-700">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-700">الرسالة</label>
          <textarea
            className="w-full border rounded px-3 py-2 h-32"
            placeholder="اكتب رسالتك هنا..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          إرسال
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        أو تواصل معنا عبر البريد: <strong>contact@youthglobal.org</strong>
      </p>
    </section>
  );
}

export default Contact;
