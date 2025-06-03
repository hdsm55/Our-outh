import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Globe2, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import TimeDisplay from './TimeDisplay';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : i18n.language === 'ar' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <nav className="bg-base-100/80 backdrop-blur-md fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/Shababuna-Logo-1.1.svg.svg" 
                alt="Global Youth Organization"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-base-content hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-base-content hover:text-primary transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/projects" className="text-base-content hover:text-primary transition-colors">
              {t('nav.projects')}
            </Link>
            <Link to="/events" className="text-base-content hover:text-primary transition-colors">
              {t('nav.events')}
            </Link>
            <Link to="/donate" className="text-base-content hover:text-primary transition-colors">
              {t('nav.donate')}
            </Link>
            <Link to="/contact" className="text-base-content hover:text-primary transition-colors">
              {t('nav.contact')}
            </Link>

            <TimeDisplay />

            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-base-200 rounded-full transition-colors"
              aria-label="Toggle language"
            >
              <Globe2 className="w-5 h-5" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-base-200 rounded-full transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <TimeDisplay />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-base-content hover:text-primary"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.events')}
            </Link>
            <Link
              to="/donate"
              className="block px-3 py-2 rounded-md text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.donate')}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>

            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={toggleLanguage}
                className="p-2 hover:bg-base-200 rounded-full transition-colors"
                aria-label="Toggle language"
              >
                <Globe2 className="w-5 h-5" />
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-base-200 rounded-full transition-colors"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}