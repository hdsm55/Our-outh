import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { label: 'الرئيسية', path: '/' },
    { label: 'من نحن', path: '/about' },
    { label: 'الأنشطة', path: '/activities' },
    { label: 'الدعم', path: '/support' },
    { label: 'اتصل بنا', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-lg md:text-xl font-bold text-blue-600">
        <Link to="/" className="hover:text-blue-700 transition">
          الهيئة العالمية للشباب
        </Link>
      </div>
      <ul className="flex flex-wrap gap-4 text-sm md:text-base font-medium text-gray-700">
        {links.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={`hover:text-blue-600 visited:text-inherit transition duration-200 ${
                pathname === path ? 'text-blue-600 font-semibold underline' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
