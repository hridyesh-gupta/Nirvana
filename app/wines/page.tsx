
'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../LanguageProvider';

export default function WinesPage() {
  const { t } = useLanguage();

  const wineCategories = [
    {
      title: t('wines.category.white.title'),
      description: t('wines.category.white.description'),
      href: '/wines/white-wines',
      bgColor: '#BD8E21'
    },
    {
      title: t('wines.category.rose.title'),
      description: t('wines.category.rose.description'),
      href: '/wines/rose-wines',
      bgColor: '#751140'
    },
    {
      title: t('wines.category.red.title'),
      description: t('wines.category.red.description'),
      href: '/wines/red-wines',
      bgColor: '#BD8E21'
    },
    {
      title: t('wines.category.world.title'),
      description: t('wines.category.world.description'),
      href: '/wines/world-wines',
      bgColor: '#751140'
    },
    {
      title: t('wines.category.champagne.title'),
      description: t('wines.category.champagne.description'),
      href: '/wines/champagne',
      bgColor: '#BD8E21'
    },
    {
      title: t('wines.category.magnums.title'),
      description: t('wines.category.magnums.description'),
      href: '/wines/magnums',
      bgColor: '#751140'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 font-['fairdisplay']" style={{ color: '#751140' }}>
                {t('wines.title')}
              </h1>
              <div className="text-2xl mb-8" style={{ color: '#BD8E21' }}>{t('wines.subtitle')}</div>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }} />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                {t('wines.intro')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wineCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:scale-105"
                  style={{ borderColor: category.bgColor }}
                >
                  <div className="h-32 relative" style={{ backgroundColor: category.bgColor }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="ri-wine-glass-line text-white text-3xl"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 transition-colors" style={{ color: '#751140' }}>
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }} />
                        <span className="text-sm text-gray-500 font-medium">{t('wines.curatedSelection')}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 font-medium" style={{ color: '#BD8E21' }}>
                        <span>{t('wines.explore')}</span>
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
