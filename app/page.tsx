
'use client';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation cartItemsCount={0} onCartClick={() => {}} />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
