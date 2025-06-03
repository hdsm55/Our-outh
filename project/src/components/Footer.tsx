import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Send, Globe2, ChevronDown } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const isRTL = i18n.dir() === 'rtl';

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' }
  ];

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    document.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    setIsLanguageMenuOpen(false);
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/globalyouth', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/globalyouth', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/globalyouth', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/globalyouth', label: 'YouTube' },
  ];

  const footerLinks = [
    {
      title: t('footer.about_us'),
      links: [
        { label: t('footer.mission'), href: '/about#mission' },
        { label: t('footer.team'), href: '/about#team' },
        { label: t('footer.impact'), href: '/about#impact' },
        { label: t('footer.partners'), href: '/partners' },
      ],
    },
    {
      title: t('footer.get_involved'),
      links: [
        { label: t('footer.volunteer'), href: '/volunteer' },
        { label: t('footer.donate'), href: '/donate' },
        { label: t('footer.events'), href: '/events' },
        { label: t('footer.projects'), href: '/projects' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.blog'), href: '/blog' },
        { label: t('footer.press'), href: '/press' },
        { label: t('footer.reports'), href: '/reports' },
        { label: t('footer.faq'), href: '/faq' },
      ],
    },
  ];

  const renderNewsletterSection = () => (
    <div className="lg:col-span-1">
      <h3 className="text-lg font-semibold mb-4">
        {t('footer.newsletter')}
      </h3>
      <p className="text-white/80 mb-4">
        {t('footer.newsletter_desc')}
      </p>
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="relative group">
          <input
            type="email"
            placeholder={t('footer.email_placeholder')}
            className={`w-full px-4 py-2 bg-white/10 rounded-lg placeholder-white/50 text-white border border-white/20 focus:outline-none focus:border-white/40 transition-all duration-300 group-hover:border-white/30 ${
              isRTL ? 'text-right pl-12 pr-4' : 'text-left pr-12 pl-4'
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
          />
          <button
            type="submit"
            className={`absolute ${isRTL ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110 transform`}
            aria-label={t('footer.subscribe')}
          >
            <Send className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </form>
    </div>
  );

  const renderOrganizationInfo = () => (
    <div className="lg:col-span-2">
      <Link to="/" className="inline-block">
        <img
          src="/Shababuna-Logo-1.1.svg.svg"
          alt={t('footer.logo_alt')}
          className="h-12 w-auto mb-6"
          loading="lazy"
        />
      </Link>
      <p className="text-white/80 mb-6">
        {t('footer.tagline')}
      </p>
      <div className={`flex ${isRTL ? 'justify-start space-x-reverse' : 'justify-start'} space-x-4`}>
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform"
              aria-label={social.label}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );

  const renderFooterLinks = () => (
    footerLinks.map((section) => (
      <div key={section.title} className="lg:col-span-1">
        <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
        <ul className="space-y-3">
          {section.links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`text-white/80 hover:text-white transition-colors duration-300 inline-block ${
                  isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'
                } transform`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))
  );

  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {isRTL ? (
              <>
                {renderNewsletterSection()}
                {renderFooterLinks()}
                {renderOrganizationInfo()}
              </>
            ) : (
              <>
                {renderOrganizationInfo()}
                {renderFooterLinks()}
                {renderNewsletterSection()}
              </>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-white/60 text-sm">
              {t('footer.copyright_full', { year: currentYear })}
            </div>
            <div className={`flex flex-wrap ${isRTL ? 'md:justify-start' : 'md:justify-end'} gap-6 text-sm text-white/60`}>
              <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">
                {t('footer.terms')}
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300 group"
                  aria-expanded={isLanguageMenuOpen}
                  aria-haspopup="true"
                >
                  <Globe2 className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  <span>{getCurrentLanguage().nativeName}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg py-2 min-w-[160px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700 ${
                          lang.code === i18n.language ? 'font-semibold bg-gray-50' : ''
                        }`}
                      >
                        <span className="block text-sm">{lang.nativeName}</span>
                        <span className="block text-xs text-gray-500">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}