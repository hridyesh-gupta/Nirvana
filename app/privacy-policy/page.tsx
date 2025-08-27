import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto p-6 bg-white text-gray-800">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-6">Privacy Policy</h1>

        <section className="mb-8">
          <p className="text-sm text-gray-600 mb-4">Last updated: May 2018</p>
          <p className="mb-4">
            This privacy policy defines and informs you of the manner in which NIRVANA uses and protects the information
            that you transmit to us, if applicable, when you use this site accessible from the following URL:{" "}
            <a href="http://www.nirvana-geneve.ch" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
              www.nirvana-geneve.ch
            </a>{" "}
            (hereinafter the “Site”).
          </p>
          <p>
            Please note that this privacy policy may be modified or supplemented at any time by NIRVANA, in particular to
            comply with any legislative, regulatory, jurisprudential or technological developments. In such a case, the date
            of its update will be clearly identified at the top of this policy. These modifications are binding on the User as
            soon as they are posted online. The User should therefore regularly consult this privacy and cookie policy to be
            aware of any possible modifications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">I. Personal Data</h2>
          <p className="mb-4">
            Generally speaking, you can visit the NIRVANA Site without providing any personal information about yourself.
            However, if you refuse, you may not be able to benefit from certain information or services that you have
            requested. As such, NIRVANA may in certain cases ask you to provide your last name, first name, email address,
            telephone number, company and position (hereinafter your "Personal Information"). By providing this information,
            you expressly agree that it may be processed by NIRVANA, for the purposes indicated below.
          </p>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">1. Identity of the data controller</h3>
          <p className="mb-4">
            The data controller is the company CsetID, with its registered office at 1847, route de la Motte, 74350 Cernex – FRANCE.
            <br /> Tel: +33 (0)450 82 03 90.
          </p>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">2. Purposes of processing</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>To provide you with the information or services you have requested (Newsletter, commercial offer, etc.)</li>
            <li>To collect information enabling us to improve our Site, products and services (cookies)</li>
            <li>To contact you about various events relating to NIRVANA (product updates, customer support)</li>
          </ul>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">3. Recipients</h3>
          <p className="mb-4">
            Only NIRVANA is the recipient of your Personal Information. This information is never transmitted to third
            parties, except subcontractors used by NIRVANA. Neither NIRVANA nor its subcontractors sell personal data.
          </p>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">4. Retention period</h3>
          <p className="mb-4">
            Your Personal Information is kept only for the time corresponding to the purpose of the collection, which may not
            exceed 24 months.
          </p>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">5. Rights</h3>
          <p className="mb-4">
            You have rights of access, rectification, and opposition regarding your data. You can exercise these rights by
            writing to the address above or via this{" "}
            <a href="https://www.csetid.com/rgpd-contact/?url=nirvana-geneve.ch" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
              contact form
            </a>.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Right of access:</strong> You may access your data (proof of identity required). Template letter:{" "}
              <a href="https://www.cnil.fr/fr/modele/courrier/exerce-son-droit-dacces" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                CNIL link
              </a>
            </li>
            <li>
              <strong>Right to rectification:</strong> Request updates or deletion of incorrect/obsolete data. Template letter:{" "}
              <a href="https://www.cnil.fr/fr/modele/courrier/rectifier-des-donnees-inexactes-obsoletes-ou-perimees" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                CNIL link
              </a>
            </li>
            <li>
              <strong>Right of opposition:</strong> Oppose data use for commercial purposes. Template letter:{" "}
              <a href="https://www.cnil.fr/fr/modele/courrier/supprimer-des-informations-vous-concernant-dun-site-internet" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                CNIL link
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">II. Cookie Policy</h2>
          <p className="mb-4">
            When you first connect to the NIRVANA website, you are warned that information relating to your browsing may be
            recorded in files called "cookies". This section explains our cookie practices.
          </p>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">1. General information</h3>
          <p className="mb-4">
            “Cookies” are small text files that allow us to recognize your device in order to personalize the services we
            offer you. They do not allow us to identify you personally.
          </p>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">2. Cookie preferences</h3>
          <p className="mb-4">You can accept or refuse cookies at any time.</p>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">a. Cookies exempt from consent</h3>
          <p className="mb-4">
            These include session cookies, authentication cookies, load balancing cookies, and customization cookies.
          </p>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">b. Cookies requiring prior consent</h3>
          <p className="mb-4">
            Audience measurement cookies (Google Analytics) and social network sharing cookies (Facebook, LinkedIn, Twitter,
            YouTube). Links:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              Google Analytics:{" "}
              <a href="https://policies.google.com/privacy/update" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                Privacy Policy
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a href="https://fr-fr.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                Cookie Policy
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/legal/cookie-policy?_l=fr_FR" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                Cookie Policy
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a href="https://support.twitter.com/articles/20170518#" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                Cookie Policy
              </a>
            </li>
            <li>
              YouTube:{" "}
              <a href="https://www.google.fr/intl/fr/policies/technologies/cookies/" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                Cookie Policy
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-playfair font-medium text-secondary mb-2">c. Browser settings</h3>
          <p className="mb-4">
            Most browsers allow you to manage or disable cookies. Links:{" "}
            <a href="https://support.google.com/chrome/answer/95647?hl=fr" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
              Chrome
            </a>
            ,{" "}
            <a href="https://support.mozilla.org/fr/kb/activate-deactivate-cookies" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
              Firefox
            </a>
            ,{" "}
            <a href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-11" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
              Internet Explorer
            </a>
            ,{" "}
            <a href="http://help.opera.com/Windows/10.20/fr/cookies.html" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
              Opera
            </a>
            ,{" "}
            <a href="https://support.apple.com/kb/PH21411?viewlocale=fr_FR&locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
              Safari
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
