import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="lang-toggle-horizontal" onClick={toggleLanguage}>
      <span className={i18n.language === 'en' ? 'active' : ''}>EN</span>
      <span className="separator">|</span>
      <span className={i18n.language === 'id' ? 'active' : ''}>ID</span>
    </div>
  );
}

export default LanguageToggle;
