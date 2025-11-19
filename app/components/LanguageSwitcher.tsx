'use client';

import { useLanguage } from '../LanguageProvider';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="w-full flex justify-center">
    <div className="flex items-center justify-end space-x-2 text-xs sm:text-sm">
      <span className="text-gray-600">{language === "en" ? "Langue : " : "Language : "}</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-full border text-xs sm:text-sm transition-colors whitespace-nowrap ${
          language === 'en'
            ? 'bg-primary text-white border-primary'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        className={`px-2 py-1 rounded-full border text-xs sm:text-sm transition-colors whitespace-nowrap ${
          language === 'fr'
            ? 'bg-primary text-white border-primary'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        }`}
      >
        FR
      </button>
    </div>
    </div>
  );
}
