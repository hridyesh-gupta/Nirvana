'use client';

import { useState } from 'react';

export default function ChefOmakaseScroll() {
  const [isOpen, setIsOpen] = useState(false);

  const omakaseItems = [
    {
      season: 'Spring',
      kanji: '春',
      dishes: [
        { name: 'Sakura Ebi Tempura', description: 'Cherry blossom shrimp in delicate batter' },
        { name: 'Bamboo Shoot Sashimi', description: 'Young bamboo with mountain herbs' },
        { name: 'Sea Bream Tai', description: 'Celebratory red snapper, salt-grilled' }
      ]
    },
    {
      season: 'Summer',
      kanji: '夏',
      dishes: [
        { name: 'Hamo Eel Sashimi', description: 'Pike conger with plum sauce' },
        { name: 'Cold Soba Zaru', description: 'Handmade buckwheat noodles' },
        { name: 'Ayu Sweetfish', description: 'River fish grilled with salt' }
      ]
    },
    {
      season: 'Autumn',
      kanji: '秋',
      dishes: [
        { name: 'Matsutake Mushroom', description: 'Pine mushrooms in clear broth' },
        { name: 'Sanma Grilled Fish', description: 'Pacific saury with daikon' },
        { name: 'Persimmon Dessert', description: 'Sweet kaki with black sesame' }
      ]
    },
    {
      season: 'Winter',
      kanji: '冬',
      dishes: [
        { name: 'Fugu Sashimi', description: 'Carefully prepared pufferfish' },
        { name: 'Crab Kaiseki', description: 'Hokkaido snow crab course' },
        { name: 'Hot Sake Pairing', description: 'Warmed sake selection' }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-light mb-4" style={{ fontFamily: 'serif' }}>
          OMAKASE
        </h2>
        <div className="text-2xl text-red-400 mb-4">お任せ</div>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Trust our chef to guide your culinary journey through seasonal selections, 
          each dish crafted with the finest ingredients at their peak.
        </p>
      </div>

      <div className="relative">
        <div 
          className={`bg-gradient-to-b from-black via-red-950/20 to-black rounded-lg border-2 border-red-400/30 p-8 cursor-pointer hover:border-red-400/50 transition-all duration-500 ${
            isOpen ? 'shadow-2xl shadow-red-400/20' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-red-400/10 rounded-full border-2 border-red-400 flex items-center justify-center">
                <span className="text-red-400 text-2xl font-bold">任</span>
              </div>
              <div>
                <h3 className="text-3xl font-light text-white" style={{ fontFamily: 'serif' }}>
                  Chef's Seasonal Selection
                </h3>
                <p className="text-red-300 text-lg">四季の料理</p>
              </div>
            </div>
            
            <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <div className="w-8 h-8 border-r-2 border-b-2 border-red-400 transform rotate-45" />
            </div>
          </div>
          
          <div className="text-gray-400 text-center">
            {isOpen ? 'Click to close the scroll' : 'Click to unroll the seasonal scroll'}
          </div>
        </div>

        <div 
          className={`overflow-hidden transition-all duration-1000 ease-out ${
            isOpen ? 'max-h-screen opacity-100 mt-8' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-8">
            {omakaseItems.map((season, index) => (
              <div
                key={season.season}
                className={`bg-gradient-to-r from-black/60 to-transparent border border-red-400/20 rounded-lg p-6 transform transition-all duration-700 ${
                  isOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-center">
                    <div className="text-4xl text-red-400 mb-2 font-bold">{season.kanji}</div>
                    <div className="text-red-300 text-sm tracking-wider">{season.season}</div>
                  </div>
                  
                  <div className="flex-1 grid gap-4">
                    {season.dishes.map((dish, dishIndex) => (
                      <div 
                        key={dishIndex}
                        className="flex items-center space-x-4 p-4 bg-black/30 rounded border border-red-400/10 hover:border-red-400/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-lg">{dish.name}</h4>
                          <p className="text-gray-400 text-sm">{dish.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center py-8">
              <div className="inline-block bg-red-400/10 border border-red-400/30 rounded-full px-8 py-4">
                <div className="text-red-400 text-3xl mb-2">認定</div>
                <div className="text-gray-300 text-sm tracking-wider">CERTIFIED AUTHENTIC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}