import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { t, switchLang, lang } = useLanguage();

  const pages = ['home', 'about', 'projects', 'donate', 'contact'];

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold text-primary">
          Shaababna
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {pages.map((k) => (
            <li key={k}>
              <NavLink to={k === 'home' ? '/' : `/${k}`}>
                {t(`nav.${k}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button onClick={switchLang} className="btn btn-sm btn-outline">
          {lang === 'en' ? 'AR' : 'EN'}
        </button>
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={() => document.documentElement.classList.toggle('dark')}
          />
          <svg className="swap-on w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M5 0h14v24H5z" />
          </svg>
          <svg className="swap-off w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 3a9 9 0 0 0 0 18 9 9 0 0 1 0-18z" />
          </svg>
        </label>
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {pages.map((k) => (
              <li key={k}>
                <NavLink to={k === 'home' ? '/' : `/${k}`}>
                  {t(`nav.${k}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
