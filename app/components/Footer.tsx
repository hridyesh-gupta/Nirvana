
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="col-span-2 md:col-span-1 space-y-6"> {/* Adjusted for 2-column on mobile */}
            <div className="flex items-center md:justify-start space-x-4"> {/* Centered on mobile, left on md+ */}
              {/* Replaced round circle and h3 text with logo.png */}
              <img src="/images/logo.png" alt="Nirvana Logo" className="h-16 w-auto" /> 
            </div>
            <div className="col-span-2 flex justify-start space-x-4 sm:justify-start mb-8">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-line text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-google-line text-xl"></i>
              </a>
              <a 
                href="https://wa.me/+41788432132?text=Hello%20Nirvana,%20I%20have%20a%20question: " 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-xl"></i>
              </a>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-6"> {/* Contact Info - spans 2 columns on mobile, 1 on md+ */}
            <h4 className="text-xl font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line text-secondary"></i>
                </div>
                <div>
                  <p className="text-gray-300">375, Route de Meyrin</p>
                  <p className="text-gray-300">1217 Meyrin, Switzerland</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-phone-line text-secondary"></i>
                </div>
                <a href="tel:+41227821010" className="text-gray-300 hover:text-secondary transition-colors">
                  022 782 10 10
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-mail-line text-secondary"></i>
                </div>
                <a href="mailto:contact@nirvana-geneve.ch" className="text-gray-300 hover:text-secondary transition-colors">
                contact@nirvana-geneve.ch
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/menu" className="block text-gray-300 hover:text-secondary transition-colors cursor-pointer">
                View Menu
              </Link>
              <Link href="/order" className="block text-gray-300 hover:text-secondary transition-colors cursor-pointer">
                Order Online
              </Link>
              <Link href="/reservations" className="block text-gray-300 hover:text-secondary transition-colors cursor-pointer">
                Reserve Table
              </Link>
              <Link href="/fresh-produce" className="block text-gray-300 hover:text-secondary transition-colors cursor-pointer">
                Fresh Produce
              </Link>
              <Link href="/news" className="block text-gray-300 hover:text-secondary transition-colors cursor-pointer">
                News
              </Link>
              {/* <Link href="/partners" className="block text-gray-300 hover:text-secondary transition-colors cursor-pointer">
                Partners
              </Link> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-white-400">
              <span>Made with ❤️ for great food by <strong><a href="https://ai.hridx.tech/" className="text-secondary underline underline-offset-4">HridxAI</a></strong>...</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Nirvana Restaurant. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-secondary transition-colors cursor-pointer">Privacy Policy</Link>
              <Link href="/legal-notices" className="hover:text-secondary transition-colors cursor-pointer">Legal Notices</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
