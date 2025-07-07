import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import styles from './LanguageSwitcher.module.css';

const languages = [
  { code: 'he', label: 'עברית' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ru', label: 'Русский' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', closeMenu);
    return () => document.removeEventListener('mousedown', closeMenu);
  }, [open]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const active = languages.find(l => l.code === i18n.language) || languages[1];

  return (
    <div className={styles.switcher} ref={menuRef}>
      <button
        className={styles.toggle}
        onClick={() => setOpen(o => !o)}
        aria-label="Change language"
      >
        <FaGlobe style={{ marginRight: 7, fontSize: 19 }} />
        {active.label}
      </button>
      {open && (
        <ul className={styles.menu}>
          {languages.map(lang => (
            <li key={lang.code}>
              <button
                className={lang.code === i18n.language ? styles.active : ''}
                onClick={() => changeLanguage(lang.code)}
                disabled={lang.code === i18n.language}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
