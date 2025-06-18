import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false); // закрыть после выбора
  };

  return (
    <div className={styles.switcher}>
      <button className={styles.mainButton} onClick={() => setOpen(!open)}>
        🌍 Language
      </button>
      {open && (
        <div className={styles.dropdown}>
          <button onClick={() => changeLanguage('he')}>עברית</button>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('fr')}>Français</button>
          <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
