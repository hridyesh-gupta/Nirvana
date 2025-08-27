
'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function WinesPage() {
  const wineCategories = [
    {
      title: 'White Wines',
      description: 'Crisp and elegant white wines perfect with Indian cuisine',
      href: '/wines/white-wines',
      bgColor: '#BD8E21'
    },
    {
      title: 'Rosé Wines',
      description: 'Refreshing rosé wines with delicate flavors',
      href: '/wines/rose-wines',
      bgColor: '#751140'
    },
    {
      title: 'Red Wines',
      description: 'Rich red wines from prestigious French regions',
      href: '/wines/red-wines',
      bgColor: '#BD8E21'
    },
    {
      title: 'World Wines',
      description: 'International selections from around the globe',
      href: '/wines/world-wines',
      bgColor: '#751140'
    },
    {
      title: 'Champagnes',
      description: 'Celebrate with our selection of fine champagnes',
      href: '/wines/champagne',
      bgColor: '#BD8E21'
    },
    {
      title: 'Magnums',
      description: 'Large format wines for special occasions',
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
                Wine Collection
              </h1>
              <div className="text-2xl mb-8" style={{ color: '#BD8E21' }}>Wine List</div>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }} />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Explore our carefully curated wine selection, featuring exceptional bottles 
                from France and around the world, perfectly paired with Indian cuisine.
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
                        <span className="text-sm text-gray-500 font-medium">Curated Selection</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 font-medium" style={{ color: '#BD8E21' }}>
                        <span>Explore</span>
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
