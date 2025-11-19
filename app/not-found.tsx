"use client";

import { useLanguage } from "./LanguageProvider";

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-5xl md:text-5xl font-semibold text-gray-100">404</h1>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6">
        {language === "fr" ? "Cette page n'a pas été générée" : "This page has not been generated"}
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-500">
        {language === "fr" ? "Dites-nous ce que vous souhaitez voir sur cette page" : "Tell me what you would like on this page"}
      </p>
    </div>
  );
}