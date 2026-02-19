'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';

const LanguageSwitcherBar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="bg-gray-100 border-b border-gray-200 text-xs sm:text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-end space-x-3">
        <span className="hidden sm:inline">{t('ui.languageLabel')}</span>
        <div className="inline-flex rounded-full border border-gray-300 bg-white overflow-hidden">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
              language === 'en' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage('fr')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
              language === 'fr' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            FR
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcherBar;
