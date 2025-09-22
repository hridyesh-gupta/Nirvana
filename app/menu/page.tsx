
'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                Menu & Wine Collection
              </h1>
              <div className="text-center text-lg md:text-xl font-serif leading-relaxed text-gray-700 mb-8">
                <p className="mb-2 text-lg font-light"><span className="font-lato">Daily Menu from CHF 19.90</span></p>
                <p className="text-lg font-light"><span className="font-lato">Lunch from CHF 29.30</span></p>
              </div>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Discover our authentic Indian cuisine and carefully curated wine selection. 
                Choose from our extensive food menu or explore our wine collection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Food Items Section */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 group border-primary">
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ 
                    backgroundImage: `url(https://readdy.ai/api/search-image?query=authentic%20indian%20food%20platter%20with%20various%20colorful%20curries%20rice%20naan%20bread%20and%20appetizers%20beautifully%20arranged%20on%20traditional%20thali%20plate%20with%20aromatic%20spices%20and%20garnishes%2C%20vibrant%20colors%20and%20appetizing%20presentation&width=600&height=400&seq=menufood1&orientation=landscape)` 
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2">Food Items</h2>
                    <p className="text-white/90 text-lg">Authentic Indian Cuisine</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 text-lg font-light mb-8">
                    Explore our traditional Indian dishes prepared with authentic recipes and finest spices. 
                    From appetizing starters to satisfying main courses and sweet desserts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link href="/menu/starters" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Starters</div>
                    </Link>
                    <Link href="/menu/main-courses" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Main Courses</div>
                    </Link>
                    <Link href="/menu/thalis-biryani" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Thalis & Biryani</div>
                    </Link>
                    <Link href="/menu/vegetarian" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Vegetarian</div>
                    </Link>
                    <Link href="/menu/vegan" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Vegan</div>
                    </Link>
                    <Link href="/menu/accompaniments" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Accompaniments</div>
                    </Link>
                    <Link href="/menu/desserts" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Desserts</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Wine Collection Section */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 group border-secondary">
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ 
                    backgroundImage: `url(https://readdy.ai/api/search-image?query=elegant%20wine%20collection%20display%20with%20various%20wine%20bottles%20red%20white%20rose%20and%20champagne%20arranged%20on%20wooden%20shelves%20in%20upscale%20restaurant%20setting%20with%20soft%20lighting%20and%20professional%20presentation&width=600&height=400&seq=menuwine1&orientation=landscape)` 
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2">Wine Collection</h2>
                    <p className="text-white/90 text-lg">Curated Wine Selection</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 text-lg font-light mb-8">
                    Discover our carefully curated wine collection featuring exceptional bottles 
                    from Swiss, France and around the world, perfectly paired with Indian cuisine.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link href="/wines/white-wines" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">White Wines</div>
                    </Link>
                    <Link href="/wines/rose-wines" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Rosé Wines</div>
                    </Link>
                    <Link href="/wines/red-wines" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Red Wines</div>
                    </Link>
                    {/* <Link href="/wines/world-wines" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">World Wines</div>
                    </Link> */}
                    <Link href="/wines/champagne" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Champagnes</div>
                    </Link>
                    {/* <Link href="/wines/magnums" className="flex items-center justify-center text-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-md border-transparent bg-gradient-to-r from-primary to-secondary text-white">
                      <div className="font-medium">Magnums</div>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
