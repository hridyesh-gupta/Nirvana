
'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    'https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-7.jpg',
    'https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/IMG_0063.jpg',
    'https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-3.jpg',
    'https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-25.jpg'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) {
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Google Maps */}
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5519.8241691534095!2d6.059736!3d46.232093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2eb4c611acb9580!2sNirvana!5e0!3m2!1sen!2smu!4v1551184219106"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ background: 'linear-gradient(to right, #751140, #BD8E21)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Contact Us
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #751140, #BD8E21)' }} />
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl p-8" style={{ border: '1px solid #751140' }}>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
                  
                  {submitMessage && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      {submitMessage}
                    </div>
                  )}
                  
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none transition-all"
                        style={{ focusBorderColor: '#751140' }}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message * ({formData.message.length}/500)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        maxLength={500}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none transition-all resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || formData.message.length > 500}
                      className="w-full text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:opacity-90 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                      style={{ background: 'linear-gradient(to right, #751140, #BD8E21)' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Restaurant Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8" style={{ border: '1px solid #751140' }}>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Restaurant Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <i className="ri-map-pin-line" style={{ color: '#751140' }}></i>
                        <span>Address</span>
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Nirvana Lounge</p>
                        <p>375, Route de Meyrin</p>
                        <p>1217 Meyrin</p>
                        <p>Geneva, Switzerland</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <i className="ri-phone-line" style={{ color: '#751140' }}></i>
                        <span>Phone</span>
                      </h3>
                      <div className="text-gray-600">
                        <a 
                          href="tel:+41227821010" 
                          className="text-lg font-medium hover:opacity-80 transition-colors"
                          style={{ color: '#751140' }}
                        >
                          022 782 10 10
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8" style={{ border: '1px solid #751140' }}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                    <i className="ri-time-line" style={{ color: '#751140' }}></i>
                    <span>Opening Hours</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Lunch:</span>
                      <span className="font-medium text-gray-800">12:00 - 14:30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Dinner:</span>
                      <span className="font-medium text-gray-800">19:00 - 22:30</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-center font-medium" style={{ color: '#BD8E21' }}>Open 7 days a week</p>
                    </div>
                  </div>
                </div>

                {/* Image Carousel */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ border: '1px solid #751140' }}>
                  <div className="relative">
                    <img
                      src={galleryImages[currentImageIndex]}
                      alt={`Restaurant Image ${currentImageIndex + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all cursor-pointer"
                    >
                      <i className="ri-arrow-left-line text-xl text-gray-700"></i>
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all cursor-pointer"
                    >
                      <i className="ri-arrow-right-line text-xl text-gray-700"></i>
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="tel:+41227821010"
                  className="text-white p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                  style={{ background: 'linear-gradient(to right, #751140, #BD8E21)' }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-phone-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call for Reservation</h3>
                  <p className="opacity-90">022 782 10 10</p>
                </a>

                <a
                  href="/menu/starters"
                  className="bg-white hover:bg-gray-50 text-gray-800 p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                  style={{ border: '2px solid #751140' }}
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#751140' }}>
                    <i className="ri-restaurant-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">View Menu</h3>
                  <p className="text-gray-600">Explore Our Dishes</p>
                </a>

                <a
                  href="/gallery"
                  className="bg-white hover:bg-gray-50 text-gray-800 p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                  style={{ border: '2px solid #BD8E21' }}
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#BD8E21' }}>
                    <i className="ri-gallery-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Photo Gallery</h3>
                  <p className="text-gray-600">See Our Restaurant</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
