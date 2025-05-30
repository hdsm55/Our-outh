import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const navItems = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/projects', key: 'nav.projects' },
  { to: '/donate', key: 'nav.donate' },
  { to: '/contact', key: 'nav.contact' },
];

export default function BaseLayout({ children }) {
  const { t, switchLang, lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggleTheme = () => document.documentElement.classList.toggle('dark');

  return (
    <div className="min-h-screen flex flex-col bg-light dark:bg-dark text-dark dark:text-light">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-light/70 dark:bg-dark/70 backdrop-blur">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
          <Link to="/" className="font-bold text-primary text-xl">
            Shaababna
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6">
            {navItems.map(({ to, key }) => (
              <li key={key}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `hover:text-secondary transition ${
                      isActive ? 'text-secondary' : ''
                    }`
                  }
                >
                  {t(key)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button onClick={switchLang} className="text-sm font-semibold">
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={toggleTheme} aria-label="Toggle dark mode">
              🌙
            </button>
            {/* Mobile burger */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden bg-light dark:bg-dark px-4 pb-4 space-y-2">
            {navItems.map(({ to, key }) => (
              <li key={key}>
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  {t(key)}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer placeholder */}
      <footer className="py-6 text-center text-sm opacity-75">
        © {new Date().getFullYear()} Shaababna International
      </footer>
    </div>
  );
}
