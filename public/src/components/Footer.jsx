import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-20 text-sm text-gray-600">
      © {new Date().getFullYear()} الهيئة العالمية للشباب. جميع الحقوق محفوظة.
    </footer>
  );
}

export default Footer;
