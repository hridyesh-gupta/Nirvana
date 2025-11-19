"use client";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useLanguage } from "../LanguageProvider";

export default function LegalNoticesPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto p-6 bg-white text-gray-800">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-6">
          {language === "fr" ? "Mentions légales" : "Legal Notices"}
        </h1>

        <section className="mb-8">
          <p className="mb-4">
            {language === "fr"
              ? "L'internaute qui utilise ce site Internet accepte pleinement et respecte les conditions ci-dessous :"
              : "The Internet user who uses this website fully accepts and respects the conditions below:"}
          </p>
          <p className="mb-4">
            <strong>{language === "fr" ? "Nom de l'entreprise :" : "Company name:"}</strong> Nirvana Restaurant
          </p>
          <p className="mb-4">
            AMAN & NIRAVA SÀRL 
            <br />
            375, Route de Meyrin
            <br />
            CH-1217 Meyrin
          </p>
          <p className="mb-4">
            <strong>{language === "fr" ? "Tél :" : "Tel :"}</strong>{" "}
            <a href="tel:+41227821010" className="text-primary hover:underline">
              022 782 10 10
            </a>
          </p>
          <p className="mb-4">
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@nirvana-geneve.ch" className="text-primary hover:underline">
              contact@nirvana-geneve.ch
            </a>
            <br />
            <br />
            <p>
              <strong>
              {language === "fr" ? "Bureau central : " : "Head Office : "}
              </strong> 
              Meyrin, Geneva, Switzerland
              <br />
              <strong>
              {language === "fr" ? "Registre de commerce : " : "Trade Register : "}
              </strong>
              CH-660.2.869.012-8
              <br />
              <strong>
              {language === "fr" ? "Numéro TVA : " : "VAT Number: "}
              </strong>
              CHE-326.453.847 
            </p>
          </p>
          <p>
            <strong>
              {language === "fr" ? "Directeur de la publication : " : "Publication Director : "}
            </strong>{" "}
            Mr ASHRAN KHAN
          </p>
        </section>

        <section className="mb-8">
          <p>
            {language === "fr"
              ? "Le responsable de la publication met à disposition des internautes des informations et s'efforce d'en assurer l'exactitude. Notre société ne peut toutefois être tenue responsable des dommages résultant de la consultation de ces informations."
              : "The publication manager provides information to Internet users and attempts to ensure its accuracy. Our company cannot be held responsible for any damages related to the consultation of this information."}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === "fr" ? "Hébergement" : "Hosting"}
          </h2>
          <p className="mb-4">
            <strong>{language === "fr" ? "Hébergeur :" : "Host:"}</strong> Infomaniak Network SA
          </p>
          <p className="mb-4">
            <strong>{language === "fr" ? "Siège social :" : "Head office:"}</strong> 25, Rue Eugène Marziano <br /> CH-1227 Les Acacias <br /> Geneva – Switzerland
          </p>
          <p>
            <strong>{language === "fr" ? "Registre du commerce - " : "Trade Register - "}</strong> CH-660.0.059.996-1
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === "fr" ? "Nom de domaine et maintenance" : "Domain Name and Maintenance"}
          </h2>
          <p className="mb-4">
            {language === "fr"
              ? "Le nom de domaine et le site web "
              : "The domain name and website "}
            <a href="https://www.nirvana-geneve.ch" className="text-primary hover:underline">
              www.nirvana-geneve.ch
            </a>{" "}
            {language === "fr" ? "est hébergé, géré et maintenu par : " : "is hosted, managed and maintained by : "}
            <strong><a href="https://ai.hridx.tech/" className="text-secondary underline underline-offset-4">HridxAI</a></strong>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === "fr" ? "Article 1 : Protection des données" : "Article 1: Data Protection"}
          </h2>
          <p>
            {language === "fr"
              ? "Les informations saisies par l'utilisateur sur ce site peuvent être enregistrées pour être traitées par notre société. L'utilisateur dispose d'un droit d'accès, de modification et de suppression des données collectées sur ce site, dans les conditions prévues par la législation relative à la protection des données, aux fichiers et aux libertés. Pour exercer ce droit, veuillez adresser un courrier à notre société ; vous trouverez nos coordonnées ci-dessus."
              : "Information entered by the user on this site may be recorded for processing by our company. The user has the right to access, modify and delete the data collected on this site, under the conditions provided for by the law relating to data protection, files and freedoms. To exercise this right, please send a letter to our company; you can find our contact details above."}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === "fr"
              ? "Article 2 : Liens hypertextes, conditions d'utilisation et sécurité"
              : "Article 2: Hypertext Links, Conditions of Use and Security"}
          </h2>
          <p className="mb-4">
            {language === "fr"
              ? "Ce site Internet peut contenir des liens vers d'autres sites. Notre société ne dispose d'aucun moyen de contrôle sur ces sites externes et ne peut être tenue responsable des dommages de quelque nature que ce soit (virus, perte de données, etc.) subis par l'ordinateur de l'utilisateur, résultant de la visite de ces autres sites ou des informations qui y figurent."
              : "This website may have links to other websites. Our company has no means of control over other external sites and cannot be held responsible for damages of any kind (virus, loss of data, etc.) suffered by the user's computer, resulting from an Internet user's visit to these other sites, nor from the information on these sites."}
          </p>
          <p>
            {language === "fr"
              ? "Les risques et dommages liés à la visite de notre site sont de la seule responsabilité de l'internaute, qui doit maintenir son équipement et ses logiciels antivirus à jour afin d'être protégé."
              : "The risks and damages linked to an Internet user's visit to our site are the sole responsibility of the Internet user, who must keep his equipment and anti-virus software up to date to be protected."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === "fr" ? "Article 3 : Contenu, droit des marques" : "Article 3: Content, Trademark Law"}
          </h2>
          <p className="mb-4">
            {language === "fr"
              ? "Ce site est exploité dans le respect de la loi. Si vous constatez une erreur ou un dysfonctionnement, veuillez le signaler à notre société. Les photos présentées sur ce site ne sont pas contractuelles."
              : "This site is operated in compliance with the law. If you notice an error or malfunction, please report it to our company. The photos on this site are not contractual."}
          </p>
          <p>
            {language === "fr"
              ? "Le contenu de ce site, y compris les photos, images, textes, vidéos, animations, sons et logos, relève de la responsabilité du Directeur de la publication de ce site. Toute reproduction, adaptation ou publication de ces éléments est strictement interdite sans notre autorisation expresse. Le non-respect de cette interdiction constitue une contrefaçon susceptible d'engager la responsabilité de son auteur."
              : "The content of this site, including photos, images, text, videos, animations, sounds, and logos, are the responsibility of the Director of Publication of this site. Any reproduction, adaptation, or publication of these elements is strictly prohibited without our express consent. Failure to comply with this prohibition constitutes an infringement that may incur the liability of the infringer."}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
