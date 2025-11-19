"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "en" | "fr";

type TranslationMap = Record<string, string>;

const translations: Record<Language, TranslationMap> = {
  en: {
    // Hero section
    "hero.title.line1": "Discover the Indian Restaurant",
    "hero.title.line2": "and Bar-Lounge",
    "hero.description":
      "Come discover our new establishment in a cozy and warm environment. Nirvana Geneva is the new meeting place for all of Geneva residents.",
    "hero.cta.reservation": "Reservation",
    "hero.cta.order": "Order",

    // Footer
    "footer.contactInfo": "Contact Info",
    "footer.quickLinks": "Quick Links",
    "footer.viewMenu": "View Menu",
    "footer.orderOnline": "Order Online",
    "footer.reserveTable": "Reserve Table",
    "footer.freshProduce": "Fresh Produce",
    "footer.news": "News",
    "footer.allRights": "© 2024 Nirvana Restaurant. All rights reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.legalNotices": "Legal Notices",

    // Menu page
    "menu.title": "Menu & Wine Collection",
    "menu.dailyMenu": "Daily Menu from CHF 19.90",
    "menu.lunchFrom": "Lunch from CHF 29.30",
    "menu.intro":
      "Discover our authentic Indian cuisine and carefully curated wine selection. Choose from our extensive food menu or explore our wine collection.",
    "menu.foodItems.title": "Food Items",
    "menu.foodItems.subtitle": "Authentic Indian Cuisine",
    "menu.foodItems.description":
      "Explore our traditional Indian dishes prepared with authentic recipes and finest spices. From appetizing starters to satisfying main courses and sweet desserts.",
    "menu.foodItems.starters": "Starters",
    "menu.foodItems.mainCourses": "Main Courses",
    "menu.foodItems.thalisBiryani": "Thalis & Biryani",
    "menu.foodItems.vegetarian": "Vegetarian",
    "menu.foodItems.vegan": "Vegan",
    "menu.foodItems.accompaniments": "Accompaniments",
    "menu.foodItems.desserts": "Desserts",

    "menu.wineCollection.title": "Wine Collection",
    "menu.wineCollection.subtitle": "Curated Wine Selection",
    "menu.wineCollection.description":
      "Discover our carefully curated wine collection featuring exceptional bottles from Swiss, France and around the world, perfectly paired with Indian cuisine.",
    "menu.wineCollection.white": "White Wines",
    "menu.wineCollection.rose": "Rosé Wines",
    "menu.wineCollection.red": "Red Wines",
    "menu.wineCollection.champagne": "Champagnes",

    // Wines page
    "wines.title": "Wine Collection",
    "wines.subtitle": "Wine List",
    "wines.intro":
      "Explore our carefully curated wine selection, featuring exceptional bottles from France and around the world, perfectly paired with Indian cuisine.",
    "wines.category.white.title": "White Wines",
    "wines.category.white.description":
      "Crisp and elegant white wines perfect with Indian cuisine",
    "wines.category.rose.title": "Rosé Wines",
    "wines.category.rose.description":
      "Refreshing rosé wines with delicate flavors",
    "wines.category.red.title": "Red Wines",
    "wines.category.red.description":
      "Rich red wines from prestigious French regions",
    "wines.category.world.title": "World Wines",
    "wines.category.world.description":
      "International selections from around the globe",
    "wines.category.champagne.title": "Champagnes",
    "wines.category.champagne.description":
      "Celebrate with our selection of fine champagnes",
    "wines.category.magnums.title": "Magnums",
    "wines.category.magnums.description":
      "Large format wines for special occasions",
    "wines.curatedSelection": "Curated Selection",
    "wines.explore": "Explore",
  },
  fr: {
    // Hero section
    "hero.title.line1": "Découvrez le restaurant indien",
    "hero.title.line2": "et le bar-lounge",
    "hero.description":
      "Venez découvrir notre nouvel établissement dans une ambiance chaleureuse et conviviale. Nirvana Genève est le nouveau lieu de rendez-vous de tous les Genevois.",
    "hero.cta.reservation": "Réserver",
    "hero.cta.order": "Commander",

    // Footer
    "footer.contactInfo": "Informations de contact",
    "footer.quickLinks": "Liens rapides",
    "footer.viewMenu": "Voir le menu",
    "footer.orderOnline": "Commander en ligne",
    "footer.reserveTable": "Réserver une table",
    "footer.freshProduce": "Produits frais",
    "footer.news": "Actualités",
    "footer.allRights": "© 2024 Restaurant Nirvana. Tous droits réservés.",
    "footer.privacyPolicy": "Politique de confidentialité",
    "footer.legalNotices": "Mentions légales",

    // Menu page
    "menu.title": "Menu & Carte des vins",
    "menu.dailyMenu": "Menu du jour dès CHF 19.90",
    "menu.lunchFrom": "Déjeuner dès CHF 29.30",
    "menu.intro":
      "Découvrez notre cuisine indienne authentique et une carte des vins soigneusement sélectionnée. Choisissez parmi notre vaste menu ou explorez notre collection de vins.",
    "menu.foodItems.title": "Plats",
    "menu.foodItems.subtitle": "Cuisine indienne authentique",
    "menu.foodItems.description":
      "Découvrez nos plats traditionnels préparés avec des recettes authentiques et des épices de qualité. Des entrées gourmandes aux plats principaux généreux et aux desserts raffinés.",
    "menu.foodItems.starters": "Entrées",
    "menu.foodItems.mainCourses": "Plats principaux",
    "menu.foodItems.thalisBiryani": "Thalis & Biryani",
    "menu.foodItems.vegetarian": "Végétarien",
    "menu.foodItems.vegan": "Vegan",
    "menu.foodItems.accompaniments": "Accompagnements",
    "menu.foodItems.desserts": "Desserts",

    "menu.wineCollection.title": "Carte des vins",
    "menu.wineCollection.subtitle": "Sélection de vins",
    "menu.wineCollection.description":
      "Découvrez notre sélection de vins d'exception de Suisse, de France et du reste du monde, parfaitement accordés à la cuisine indienne.",
    "menu.wineCollection.white": "Vins blancs",
    "menu.wineCollection.rose": "Vins rosés",
    "menu.wineCollection.red": "Vins rouges",
    "menu.wineCollection.champagne": "Champagnes",

    // Wines page
    "wines.title": "Carte des vins",
    "wines.subtitle": "Liste des vins",
    "wines.intro":
      "Explorez notre sélection de vins, composée de bouteilles d'exception de France et du monde entier, soigneusement choisies pour accompagner notre cuisine indienne.",
    "wines.category.white.title": "Vins blancs",
    "wines.category.white.description":
      "Vins blancs frais et élégants, parfaits avec la cuisine indienne",
    "wines.category.rose.title": "Vins rosés",
    "wines.category.rose.description":
      "Vins rosés rafraîchissants aux arômes délicats",
    "wines.category.red.title": "Vins rouges",
    "wines.category.red.description":
      "Vins rouges riches issus de prestigieuses régions françaises",
    "wines.category.world.title": "Vins du monde",
    "wines.category.world.description":
      "Sélection internationale de vins du monde entier",
    "wines.category.champagne.title": "Champagnes",
    "wines.category.champagne.description":
      "Célébrez avec notre sélection de champagnes d'exception",
    "wines.category.magnums.title": "Magnums",
    "wines.category.magnums.description":
      "Grands formats pour les grandes occasions",
    "wines.curatedSelection": "Sélection soignée",
    "wines.explore": "Découvrir",
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("nirvana_language");
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("nirvana_language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

   const t = (key: string): string => {
     const dict = translations[language] ?? translations.en;
     return dict[key] ?? key;
   };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
