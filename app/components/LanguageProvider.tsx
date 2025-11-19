'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'fr';

type TranslationEntry = {
  en: string;
  fr: string;
};

type Translations = Record<string, TranslationEntry>;

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.menu': { en: 'Menu', fr: 'Menu' },
  'nav.gallery': { en: 'Gallery', fr: 'Galerie' },
  'nav.reservation': { en: 'Reservation', fr: 'Réservation' },
  'nav.events': { en: 'Events', fr: 'Événements' },
  'nav.contact': { en: 'Contact', fr: 'Contact' },
  'nav.order': { en: 'Order', fr: 'Commander' },

  // Hero
  'hero.title.line1': {
    en: 'Discover the Indian Restaurant',
    fr: 'Découvrez le restaurant indien',
  },
  'hero.title.line2': {
    en: 'and Bar-Lounge',
    fr: 'et le bar-lounge',
  },
  'hero.description': {
    en: 'Come discover our new establishment in a cozy and warm environment. Nirvana Geneva is the new meeting place for all of Geneva residents.',
    fr: 'Venez découvrir notre nouvel établissement dans un cadre chaleureux et convivial. Nirvana Genève est le nouveau lieu de rendez-vous pour tous les habitants de Genève.',
  },
  'hero.cta.reservation': { en: 'Reservation', fr: 'Réservation' },
  'hero.cta.order': { en: 'Order', fr: 'Commander' },

  // Footer
  'footer.contactInfo': { en: 'Contact Info', fr: 'Informations de contact' },
  'footer.quickLinks': { en: 'Quick Links', fr: 'Liens rapides' },
  'footer.viewMenu': { en: 'View Menu', fr: 'Voir le menu' },
  'footer.orderOnline': { en: 'Order Online', fr: 'Commander en ligne' },
  'footer.reserveTable': { en: 'Reserve Table', fr: 'Réserver une table' },
  'footer.freshProduce': { en: 'Fresh Produce', fr: 'Produits frais' },
  'footer.news': { en: 'News', fr: 'Actualités' },
  'footer.madeWith': {
    en: 'Made with ❤️ for great food by',
    fr: 'Créé avec ❤️ pour la bonne cuisine par',
  },
  'footer.allRights': {
    en: '© 2024 Nirvana Restaurant. All rights reserved.',
    fr: '© 2024 Restaurant Nirvana. Tous droits réservés.',
  },
  'footer.privacyPolicy': {
    en: 'Privacy Policy',
    fr: 'Politique de confidentialité',
  },
  'footer.legalNotices': {
    en: 'Legal Notices',
    fr: 'Mentions légales',
  },

  // UI
  'ui.languageLabel': { en: 'Language:', fr: 'Langue :' },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('nirvana-language');
    if (stored === 'en' || stored === 'fr') {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('nirvana-language', lang);
    }
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
