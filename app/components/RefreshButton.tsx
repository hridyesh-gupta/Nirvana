'use client';

import { useLanguage } from '../LanguageProvider';

interface RefreshButtonProps {
  sessionId: string;
}

export default function RefreshButton({ sessionId }: RefreshButtonProps) {
  const { language } = useLanguage();
  return (
    <button 
      onClick={() => window.location.reload()} 
      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all"
    >
      {language === 'fr' ? 'Rafraîchir la page' : 'Refresh Page'}
    </button>
  );
}
