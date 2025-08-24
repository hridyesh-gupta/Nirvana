
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#751140' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-light mb-4 font-serif tracking-wide">Nirvana</h4>
            <div className="space-y-2 text-gray-300 font-serif">
              <p>375, Route de Meyrin, 1217 Meyrin</p>
              <p>
                Tel: <a href="tel:+41227821010" style={{ color: '#BD8E21' }} className="hover:opacity-80 transition-colors">022 782 10 10</a>
              </p>
              <p>
                <a href="#" style={{ color: '#BD8E21' }} className="hover:opacity-80 transition-colors underline">
                  DELIVERY (click here)
                </a>
              </p>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-xl font-light mb-4 font-serif tracking-wide">Menu & Dishes</h4>
            <div className="grid grid-cols-1 gap-2 text-gray-300 font-serif">
              <Link href="/menu/starters" className="hover:text-white transition-colors">Starters</Link>
              <Link href="/menu/main-courses" className="hover:text-white transition-colors">Main Courses</Link>
              <Link href="/menu/vegan" className="hover:text-white transition-colors">Vegan</Link>
              <Link href="/menu/accompaniments" className="hover:text-white transition-colors">Accompaniments</Link>
              <Link href="/menu/thalis-biryani" className="hover:text-white transition-colors">Thalis / Biryani</Link>
              <Link href="/menu/vegetarian" className="hover:text-white transition-colors">Vegetarian Dishes</Link>
              <Link href="/menu/desserts" className="hover:text-white transition-colors">Desserts</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright - Even Darker Burgundy */}
      <div style={{ backgroundColor: '#5a0e32' }} className="py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400 font-serif">
          <p>
            © Copyright <a href="#" className="hover:text-white transition-colors">CsetID</a> 2018 - 
            Partner of portals <a href="#" className="hover:text-white transition-colors">Lemanique</a> and
            <a href="#" className="hover:text-white transition-colors"> Pays de savoie</a> - 
            <a href="#" className="hover:text-white transition-colors"> Legal Notices</a> - 
            <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
