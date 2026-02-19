
'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../LanguageProvider';

export default function EventsPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                {language === 'fr' ? 'Événements & célébrations' : 'Events & Celebrations'}
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full bg-secondary" />
            </div>

            {/* Event Organization Services */}
            <div className="mb-16">
              <div className="rounded-2xl shadow-xl p-8 text-white bg-gradient-to-r from-primary to-secondary">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-20 h-20 bg-white/20 rounded-full mb-6 flex items-center justify-center">
                      <i className="ri-calendar-event-line text-white text-3xl"></i>
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">
                      {language === 'fr' ? "Organisateur d'événements Nirvana" : 'Nirvana Event Organizer'}
                    </h2>
                    
                    <p className="text-lg opacity-90 mb-6">
                      {language === 'fr' ? 'Avez-vous un projet pour organiser un événement familial, anniversaire, baptême, communion, ou mariage?' : 'Do you have a project to organize a family event, birthday, baptism, communion, or wedding?'} 
                      {language === 'fr' ? 'Nous avons des paquets spéciaux à vous offrir.' : 'We have special packages to offer you.'}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:+41227821010"
                        className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2 text-primary"
                      >
                        <i className="ri-phone-line text-xl"></i>
                        <span>{language === 'fr' ? 'Appeler : +41 22 782 10 10' : 'Call: +41 22 782 10 10'}</span>
                      </a>
                      <a
                        href="/contact"
                        className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border border-white/30 flex items-center justify-center space-x-2"
                      >
                        <i className="ri-mail-line text-xl"></i>
                        <span>{language === 'fr' ? 'Nous contacter' : 'Contact Us'}</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://www.nirvana-geneve.ch/wp-content/uploads/2018/08/karishma-lounge-divonne-les-bains-table-1.jpg"
                      alt="Event Setup"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Event Information */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-primary">
                      {language === 'fr' ? 'Ce que nous proposons' : 'What We Offer'}
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        {language === 'fr' ? 'NIRVANA est organisé pour recevoir des groupes pour les anniversaires, les repas corporatifs, et les événements familiaux tels que les baptêmes, les communions, et les mariages.' : 'NIRVANA is organized to receive groups for birthdays, corporate meals, and family events suchs as baptisms, communions, and weddings.'}
                      </p>
                      <p className="text-gray-600">
                        {language === 'fr' ? 'Nos autres établissements que vous trouverez en bas de la page Restaurant vous offrent d\'autres possibilités et alternatives.' : 'Our other establishments that you will find at the bottom of the Restaurant page offer you other possibilities and alternatives.'}
                      </p>
                      <p className="text-gray-600">
                        {language === 'fr' ? 'Nous avons également des offres complètes avec service de restauration, location de voitures de luxe, et musique.' : 'We also have comprehensive offers with catering service, luxury car rental, and music.'}
                      </p>
                      <p className="text-gray-600">
                        {language === 'fr' ? 'Musiquement, nous pouvons organiser une performance avec de la musique traditionnelle ou DJ.' : 'Musically, we can organize a performance with traditional music or DJ.'}
                      </p>
                      <p className="text-gray-600">
                        {language === 'fr' ? 'Il est possible de privatizer l’un de nos établissements.' : 'It is possible to privatize one of our establishments.'}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-primary">
                      {language === 'fr' ? 'Informations de contact' : 'Contact Information'}
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        {language === 'fr'
                          ? "N'hésitez pas à nous contacter à ce sujet :"
                          : "Don't hesitate to ask us about this subject:"}
                      </p>
                      <a 
                        href="tel:+41227821010" 
                        className="text-2xl font-bold hover:opacity-80 transition-colors block text-secondary"
                      >
                        +41 22 782 10 10
                      </a>
                      <p className="text-gray-600">
                        {language === 'fr' ? "Pour plus d'informations :" : 'For more information:'}
                      </p>
                      <div className="flex flex-col space-y-2">
                        <a 
                          href="tel:+41227821010" 
                          className="text-lg hover:opacity-80 transition-colors text-primary"
                        >
                          📞 +41 22 782 10 10
                        </a>
                        <a 
                          href="/contact" 
                          className="text-lg hover:opacity-80 transition-colors text-primary"
                        >
                          ✉️ {language === 'fr' ? 'Formulaire de contact' : 'Contact Form'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Types */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-primary">
                  {language === 'fr' ? 'Types d’événements que nous organisons' : 'Event Types We Organize'}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border-2 hover:scale-105 border-primary">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                    <i className="ri-cake-3-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === 'fr' ? 'Anniversaires' : 'Birthdays'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'fr' ? 'Célébrations spéciales' : 'Special celebrations'}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border-2 hover:scale-105 border-secondary">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-secondary to-primary">
                    <i className="ri-hearts-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-secondary">
                    {language === 'fr' ? 'Mariages' : 'Weddings'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'fr' ? 'Célébrations de rêve' : 'Dream celebrations'}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border-2 hover:scale-105 border-primary">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                    <i className="ri-group-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === 'fr' ? 'Événements familiaux' : 'Family Events'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'fr' ? 'Moments mémorables' : 'Memorable moments'}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border-2 hover:scale-105 border-secondary">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-secondary to-primary">
                    <i className="ri-briefcase-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-secondary">
                    {language === 'fr' ? 'Événements d’entreprise' : 'Corporate Events'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'fr' ? 'Rencontres professionnelles' : 'Professional gatherings'}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 border-2 border-primary">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-calendar-check-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">
                  {language === 'fr' ? 'Prêt à organiser votre événement ?' : 'Ready to Plan Your Event?'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  {language === 'fr'
                    ? "Contactez-nous dès aujourd'hui pour discuter de votre projet et nous permettre de créer une expérience mémorable pour vous et vos invités."
                    : 'Contact us today to discuss your event requirements and let us create a memorable experience for you and your guests.'}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+41227821010"
                    className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary"
                  >
                    <i className="ri-phone-line text-xl"></i>
                    <span>{language === 'fr' ? 'Appeler : +41 22 782 10 10' : 'Call Now: +41 22 782 10 10'}</span>
                  </a>
                  <a
                    href="/contact"
                    className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border-2 flex items-center justify-center space-x-2 text-primary border-primary"
                  >
                    <i className="ri-mail-line text-xl"></i>
                    <span>{language === 'fr' ? 'Envoyer un message' : 'Send Message'}</span>
                  </a>
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
