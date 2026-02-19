"use client";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useLanguage } from "../LanguageProvider";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto p-6 bg-white text-gray-800">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-6">
          {language === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === 'fr' ? '1. INTRODUCTION' : '1. INTRODUCTION'}
          </h2>
          {language === "fr" ? (
            <>
              <p className="mb-4">
                Nous, Restaurant Nirvana, société d&apos;Aman &amp; Nirvana Sàrl, établie à
                Genève (Suisse), nous engageons à protéger la confidentialité de vos
                données personnelles tout en améliorant en permanence les services que
                nous vous proposons.
              </p>
              <p className="mb-4">
                Tout traitement de Données personnelles est effectué dans le strict
                respect du droit applicable en matière de protection des données, en
                particulier la loi fédérale suisse sur la protection des données du 19
                juin 1992 et, le cas échéant, le nouveau Règlement général sur la
                protection des données (RGPD) en vigueur dans l&apos;Union européenne.
              </p>
              <p className="mb-4">
                La présente Politique de confidentialité illustre notre engagement et a
                pour objet de garantir la protection de votre vie privée et la
                confidentialité de vos données personnelles lorsque vous utilisez notre
                site{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                ou que vous communiquez avec nous. Elle vise également à vous fournir
                toutes les informations relatives au traitement de toute donnée
                personnelle que nous pouvons collecter via nos plateformes en ligne
                (sites web, applications, réseaux sociaux), nos formulaires ou
                inscriptions en ligne, ou par tout autre type d&apos;interaction.
              </p>
              <p className="mb-4">
                Lorsque vous accédez à notre site{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                et/ou communiquez avec nous par son intermédiaire, par e-mail ou par
                tout autre moyen, vous acceptez la présente Politique de
                confidentialité. Si vous n&apos;êtes pas d&apos;accord avec certaines parties de
                cette Politique, vous devez nous en informer et/ou cesser d&apos;utiliser
                notre site. Dans ce cas, nous ne pourrons plus continuer à vous offrir
                nos services.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                We, Restaurant Nirvana, a company of Aman &amp; Nirvana Sàrl, established in
                Geneva, Switzerland, are committed to protecting the confidentiality of
                your personal data while continuously improving the services we offer you.
              </p>
              <p className="mb-4">
                All processing of Personal Data is carried out in strict compliance with
                applicable data protection law, in particular the Swiss Federal Act on
                Data Protection of June 19, 1992 and, where applicable, the new General
                Data Protection Regulation (GDPR) in force in the EU.
              </p>
              <p className="mb-4">
                This Privacy Policy demonstrates our commitment, and its purpose is to
                ensure the protection of your privacy and the confidentiality of your
                personal data when you use our website{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                or communicate with us. It also aims to provide you with all the
                information relating to the processing of any personal data that we may
                collect via our online platforms (websites, applications, social
                networks), our online forms or registrations, or through any other type
                of interaction.
              </p>
              <p className="mb-4">
                When you access our website{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                and/or communicate with us through it, by email or by any other means,
                you accept this Privacy Policy. In the event that you do not agree with
                certain parts of this Privacy Policy, you must inform us and/or cease
                using our website. In this case, we will not be able to continue to offer
                you our services.
              </p>
            </>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === 'fr' ? '2. DONNÉES PERSONNELLES' : '2. PERSONAL DATA'}
          </h2>
          {language === "fr" ? (
            <>
              <p className="mb-4">
                Le terme &quot;Données personnelles&quot; désigne toute information se
                rapportant à une personne physique identifiée ou identifiable, telle
                qu&apos;un nom, un numéro d&apos;identification, des données de localisation, un
                identifiant en ligne, une date et un lieu de naissance, des informations
                professionnelles, ou un ou plusieurs éléments spécifiques à l&apos;identité
                physique, physiologique, génétique, psychique, économique, culturelle ou
                sociale de cette personne physique. Ces Données personnelles peuvent vous
                concerner, ainsi que vos employés ou mandataires.
              </p>
              <p className="mb-4">
                Le site{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                peut collecter des Données personnelles que vous nous fournissez
                activement (par exemple vos nom, adresse, numéro de téléphone, adresse
                e-mail et/ou date de naissance) lorsque vous remplissez des formulaires
                ou procédez à une inscription en ligne. Nous pouvons également collecter
                d&apos;autres types d&apos;informations lorsque vous, ou un système automatisé,
                accédez à notre site (types et version de navigateur utilisés, système
                d&apos;exploitation, sites de provenance, sous-sites consultés, date et heure
                d&apos;accès au site, adresse IP, fournisseur d&apos;accès à Internet, etc.).
              </p>
              <p className="mb-4">
                Vous pouvez recevoir des informations sur notre entreprise en cliquant
                sur &quot;S&apos;inscrire à la newsletter&quot; sur notre site. Pour vous abonner et
                recevoir nos actualités, vous devrez remplir un formulaire sur notre site
                et confirmer votre inscription par e-mail. Si vous ne souhaitez plus
                recevoir nos actualités, vous pouvez vous désabonner à tout moment en
                cliquant sur le lien figurant au bas de la newsletter. En cas de
                désinscription, vos Données personnelles seront supprimées.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                The term &quot;Personal Data&quot; means any information relating to an
                identified or identifiable natural person, such as a name,
                identification number, location data, online identifier, date and place
                of birth, professional information, or one or more factors specific to
                the physical, physiological, genetic, mental, economic, cultural or
                social identity of the natural person. This Personal Data may concern
                you, as well as your employees or agents.
              </p>
              <p className="mb-4">
                The website{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                may collect Personal Data that you actively provide to us (e.g., your
                name, address, telephone number, email address, and/or date of birth)
                when you fill out forms or register online. We may also collect other
                types of information when you, or an automated system, access our website
                (browser types and version used, operating system, referring websites,
                sub-websites, date and time of website access, IP address, internet
                service provider, etc.).
              </p>
              <p className="mb-4">
                You can receive news about our company by clicking on &quot;Subscribe to the
                newsletter&quot; on our website. To subscribe to receive our news, you will
                need to fill out a form on our website and confirm your subscription by
                email. If you no longer wish to receive our news, you can unsubscribe at
                any time by clicking on the link at the bottom of the newsletter. If you
                unsubscribe, your Personal Data will be deleted.
              </p>
            </>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === 'fr' ? '3. UTILISATION ET STOCKAGE DE VOS DONNÉES PERSONNELLES' : '3. USE AND STORAGE OF YOUR PERSONAL DATA'}
          </h2>
          {language === "fr" ? (
            <>
              <p className="mb-4">
                Nous traitons vos Données personnelles uniquement dans le but de fournir
                des sites web fonctionnels, ainsi que nos contenus et services.
              </p>
              <p className="mb-4">
                Nous pouvons utiliser les Données personnelles que vous nous fournissez
                aux fins suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Gérer nos relations et nos communications avec vous ;</li>
                <li>
                  Des finalités marketing et promotionnelles adaptées à votre profil
                  personnel (communications clients, invitations personnelles à des
                  conférences et événements, communications institutionnelles et
                  marketing, contenus et newsletters de nos sociétés) ;
                </li>
                <li>Analyses et statistiques ;</li>
                <li>Finalités commerciales, service et support client ;</li>
                <li>
                  Finalités juridiques (prévention de la fraude et d&apos;autres activités
                  interdites ou illégales).
                </li>
              </ul>
              <p className="mb-4">
                À moins qu&apos;une durée différente ne soit requise par la loi ou pour des
                impératifs de sécurité, nous pouvons conserver ou traiter vos Données
                personnelles aussi longtemps que nous le jugeons nécessaire, pour autant
                que vous ne retiriez pas votre consentement à leur traitement (pour un ou
                plusieurs motifs déterminés) ou que vous n&apos;exerciez pas votre droit à
                l&apos;oubli avant l&apos;expiration de ces différentes périodes.
              </p>
              <p className="mb-4">
                Nous limitons l&apos;utilisation et l&apos;accès à vos Données personnelles.
                Elles ne seront utilisées que par nous-mêmes et par nos prestataires
                technologiques, également tenus de protéger vos Données personnelles. Nous
                ne vendons ni ne transférons vos Données personnelles à des tiers, sauf
                avec votre consentement préalable ou lorsque la loi ou la réglementation
                applicable l&apos;exige. Nous ne suivons pas votre comportement ni votre
                localisation géographique et ne vous soumettons pas à un profilage ou à
                une prise de décision automatisée.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                We process your Personal Data solely for the purpose of providing
                functional websites, as well as our content and services.
              </p>
              <p className="mb-4">
                We may use the Personal Data you provide to us for the following
                purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Managing our relationships and communications with you;</li>
                <li>
                  Marketing and promotional purposes tailored to your personal profile
                  (customer communications, personal invitations to conferences and
                  events, corporate and marketing communications, content and newsletters
                  from our companies);
                </li>
                <li>Analytics and statistics;</li>
                <li>Business purposes, customer service and support;</li>
                <li>
                  Legal purposes (to prevent fraud and other prohibited or illegal
                  activities).
                </li>
              </ul>
              <p className="mb-4">
                Unless required by law or due to security imperatives for another
                specified period, we may store or process your Personal Data for as long
                as we deem necessary, provided that you do not withdraw your consent to
                their processing (for one or more specified reasons) or exercise your
                right to be forgotten before the expiry date of all these periods.
              </p>
              <p className="mb-4">
                We limit the use of and access to your Personal Data. They will be used
                only by ourselves and our technology providers, who are also obligated to
                protect your Personal Data. We do not sell or transfer your Personal Data
                to third parties, except with your prior consent or, when required to do
                so, in accordance with any applicable legal and regulatory provisions. We
                do not monitor your behavior or track your geographical location, nor do
                we subject you to profiling or automated decision-making.
              </p>
            </>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === 'fr' ? '4. TRAITEMENT DES DONNÉES PERSONNELLES' : '4. PROCESSING OF PERSONAL DATA'}
          </h2>
          {language === "fr" ? (
            <>
              <p className="mb-4">
                Nous conservons et traitons vos Données personnelles aux fins pour
                lesquelles vous nous avez donné votre consentement et en lien avec les
                services que nous proposons, sauf lorsqu&apos;il est pratiquement impossible
                d&apos;obtenir un consentement préalable ou dans les cas où le traitement de
                vos données est autorisé par la loi. La conservation de vos Données
                personnelles doit être effectuée d&apos;une manière compatible avec les
                obligations légales et les technologies disponibles.
              </p>
              <p className="mb-4">
                Les Données personnelles relatives à vos communications avec nous sont
                enregistrées afin de pouvoir répondre à vos demandes.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                We store and process your Personal Data for the purposes for which you
                have given us your consent and in relation to the services we offer,
                except where it is practically impossible to obtain prior consent or in
                cases where the processing of your data is authorized by law. The storage
                of your Personal Data must be carried out in a manner compatible with
                legal obligations and available technologies.
              </p>
              <p className="mb-4">
                Personal Data relating to communications with you will be recorded in
                order to respond to your requests.
              </p>
            </>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === 'fr' ? '5. COOKIES' : '5. COOKIES'}
          </h2>
          {language === "fr" ? (
            <>
              <p className="mb-4">
                Les pages web du site{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                utilisent des cookies qui sont téléchargés sur votre appareil lorsque
                vous le visitez. Les cookies nous permettent d&apos;offrir aux utilisateurs
                de notre site des services conviviaux, afin d&apos;enregistrer les
                préférences, d&apos;analyser les connexions au site, y compris au moyen de
                cookies tiers, et à des fins publicitaires.
              </p>
              <p className="mb-4">
                Vous pouvez désactiver les cookies via notre site{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                en utilisant le paramètre correspondant dans le navigateur que vous
                utilisez, et ainsi refuser de manière permanente l&apos;utilisation de
                cookies. En outre, les cookies déjà installés peuvent être supprimés à
                tout moment via un navigateur Internet ou des programmes logiciels. Si
                vous désactivez l&apos;utilisation des cookies dans votre navigateur Internet,
                il est possible que vous ne puissiez pas utiliser toutes les fonctions de
                notre site.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                The web pages of the website{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                use cookies that are downloaded to your device when you visit it. Cookies
                allow us to offer users of our website user-friendly services, with the
                aim of recording preferences, analyzing site connections, including
                third-party cookies, and for advertising purposes.
              </p>
              <p className="mb-4">
                You can disable cookies via our website{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>{" "}
                using the corresponding setting in the browser you are using, and thus
                permanently refuse the use of cookies. In addition, cookies already set
                can be deleted at any time via an internet browser or software programs.
                If you disable the use of cookies in your internet browser, you may not
                be able to use all the functions of our website.
              </p>
            </>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === 'fr' ? '6. PARAMÈTRES DES COOKIES' : '6. COOKIE SETTINGS'}
          </h2>
          {language === "fr" ? (
            <>
              <p className="mb-4">
                Lorsque vous visitez notre site, des données peuvent être stockées dans
                votre navigateur ou en être extraites, généralement sous forme de
                cookies. Ces informations peuvent concerner vos préférences, votre
                appareil et sont principalement utilisées pour assurer le bon
                fonctionnement du site. Bien que ces informations ne permettent
                généralement pas de vous identifier directement, elles contribuent à
                personnaliser votre expérience de navigation.
              </p>
              <p className="mb-4">
                Afin de respecter votre droit à la vie privée, nous avons mis en place
                un outil de consentement aux cookies fourni par un tiers, à savoir la
                bannière &quot;CookieYes - Cookie Banner for Cookie Consent (Easy to setup
                GDPR/CCPA Compliant Cookie Notice)&quot;. Cette bannière facilite la mise en
                œuvre d&apos;un bandeau de consentement aux cookies conforme au RGPD et au
                CCPA, offrant aux utilisateurs une gestion simple et transparente de
                leurs préférences en matière de cookies.
              </p>
              <p className="mb-4">
                Vous avez la possibilité de refuser certains types de cookies en cliquant
                sur les différentes catégories de la bannière, d&apos;obtenir davantage de
                détails sur chacune d&apos;elles et de modifier les paramètres par défaut.
                Toutefois, veuillez noter que le blocage de certains types de cookies
                peut affecter votre expérience de navigation et les services que nous
                sommes en mesure de vous offrir.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                When you visit our website, data may be stored in your browser or
                retrieved from it, usually in the form of cookies. This information may
                concern your preferences, your device, and is primarily used to ensure
                the proper functioning of the site. While this information does not
                generally allow us to identify you directly, it helps to personalize your
                web experience.
              </p>
              <p className="mb-4">
                In order to respect your right to privacy, we have implemented a
                third-party cookie consent tool, specifically the &quot;CookieYes - Cookie
                Banner for Cookie Consent (Easy to setup GDPR/CCPA Compliant Cookie
                Notice)&quot; banner. This banner facilitates the implementation of a cookie
                consent notice compliant with GDPR and CCPA, offering users simple and
                transparent management of their cookie preferences.
              </p>
              <p className="mb-4">
                You have the option to disallow certain types of cookies by clicking on
                the different categories in the banner, to obtain more details on each of
                them, and modify the default settings. However, please note that
                blocking certain types of cookies may impact your browsing experience and
                the services we are able to offer you.
              </p>
            </>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === 'fr' ? '7. DISPOSITIONS RELATIVES À LA PROTECTION DES DONNÉES RELATIVES À L\'APPLICATION ET À L\'UTILISATION DE GOOGLE ANALYTICS (AVEC FONCTION D\'ANONYMISATION)' : '7. DATA PROTECTION PROVISIONS RELATING TO THE APPLICATION AND USE OF GOOGLE ANALYTICS (WITH ANONYMIZATION FUNCTION)'}
          </h2>
          {language === "fr" ? (
            <>
              <p className="mb-4">
                Des composants Google Analytics sont intégrés à notre site{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>
                . L&apos;adresse IP de votre connexion Internet est raccourcie par Google et
                anonymisée lorsque vous accédez à notre site depuis un État membre de
                l&apos;Union européenne ou un autre État partie à l&apos;Accord sur l&apos;Espace
                économique européen.
              </p>
              <p className="mb-4">
                Le composant Google Analytics a pour objet d&apos;analyser le trafic sur
                notre site. À chaque visite de l&apos;une des pages individuelles de notre
                site, votre navigateur (par l&apos;utilisation de cookies) transmet
                automatiquement des données à Google via le composant Google Analytics à
                des fins de publicité en ligne et de règlement de commissions. Au cours
                de ce processus technique, Google collecte certaines informations
                personnelles sur les utilisateurs, telles que votre adresse IP, ce qui
                lui permet notamment de comprendre l&apos;origine des visiteurs et des
                clics, puis d&apos;établir des accords de commission.
              </p>
              <p className="mb-4">
                Vous pouvez empêcher à tout moment l&apos;utilisation de cookies sur notre
                site en utilisant le paramètre correspondant dans votre navigateur et
                ainsi refuser de manière permanente l&apos;utilisation de cookies.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                Google Analytics components are integrated into our website{" "}
                <a
                  href="https://www.nirvana-geneve.ch/"
                  className="text-secondary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.nirvana-geneve.ch/
                </a>
                . The IP address of your internet connection is shortened by Google and
                anonymized when accessing our website from a member state of the European
                Union or another contracting state to the Agreement on the European
                Economic Area.
              </p>
              <p className="mb-4">
                The purpose of the Google Analytics component is to analyze traffic on
                our website. With each visit to one of the individual pages of our
                website, your browser (through the use of cookies) will automatically
                send data via the Google Analytics component for the purpose of online
                advertising and commission settlement to Google. During this technical
                process, Google collects certain personal information from users, such as
                your IP address, which allows Google, among other things, to understand
                the origin of visitors and clicks, and then to establish commission
                agreements.
              </p>
              <p className="mb-4">
                You can prevent the use of cookies on our website at any time using the
                corresponding setting in your browser and thus permanently refuse the use
                of cookies.
              </p>
            </>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === 'fr' ? '8. VOS DROITS' : '8. YOUR RIGHTS'}
          </h2>
          {language === "fr" ? (
            <>
              <p className="mb-4">
                Vos droits concernant vos Données personnelles sont les suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Demander l&apos;accès aux Données personnelles collectées ;</li>
                <li>Demander la rectification des Données personnelles inexactes ;</li>
                <li>
                  Vous opposer au traitement de vos Données personnelles (en tout ou en
                  partie) ;
                </li>
                <li>
                  Être oublié, notamment lorsque vous ne consentez plus au traitement de
                  vos Données personnelles (vous avez le droit de retirer votre
                  consentement à tout moment) ;
                </li>
                <li>Limiter le traitement de vos Données personnelles ;</li>
                <li>
                  Demander le transfert de vos Données personnelles vers un autre système
                  de traitement électronique ;
                </li>
                <li>
                  Ne pas faire l&apos;objet d&apos;une décision fondée exclusivement sur un
                  traitement automatisé ;
                </li>
                <li>Introduire des réclamations auprès d&apos;une autorité de contrôle.</li>
              </ul>
              <p className="mb-4">
                Ces droits peuvent être soumis à des exceptions ou limitations (par
                exemple lorsque vos Données personnelles sont traitées à des fins de
                sécurité ou conservées pour des raisons légales ou contractuelles) et en
                tenant compte des technologies disponibles et des coûts de mise en
                œuvre. Dans tous les cas, nous nous engageons à vérifier
                systématiquement votre identité avant de traiter toute demande fondée sur
                les droits précités.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                Your rights regarding your Personal Data are as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Request access to the Personal Data collected;</li>
                <li>Request the correction of inaccurate Personal Data;</li>
                <li>
                  To object to the processing of your Personal Data (in whole or in
                  part);
                </li>
                <li>
                  To be forgotten, particularly when you no longer consent to the
                  processing of your Personal Data (you have the right to withdraw your
                  consent at any time);
                </li>
                <li>To restrict the processing of your Personal Data;</li>
                <li>
                  To request the transfer of your Personal Data to another electronic
                  processing system;
                </li>
                <li>
                  Not to be subject to a decision based solely on automated processing;
                </li>
                <li>To lodge complaints with a supervisory authority.</li>
              </ul>
              <p className="mb-4">
                These rights may be subject to exceptions or limitations (e.g., when your
                Personal Data is processed for security purposes or is stored for legal or
                contractual reasons) and taking into account the available technologies
                and the cost of implementation. In all cases, we undertake to
                systematically verify your identity before processing any request based
                on the rights mentioned above.
              </p>
            </>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">
            {language === 'fr' ? '9. CONTACT' : '9. CONTACT'}
          </h2>
          {language === "fr" ? (
            <>
              <p className="mb-4">
                Si vous souhaitez exercer vos droits tels que décrits dans la présente
                Politique de confidentialité, ou si vous avez des questions ou des
                préoccupations à son sujet, veuillez contacter le Délégué à la protection
                des données.
              </p>
              <p>
                AMAN &amp; NIRVANA SÀRL
                <br />
                Route de Meyrin 375
                <br />
                CH-1217 Meyrin
                <br />
                Suisse
                <br />
                <a
                  href="mailto:contact@nirvana-geneve.ch"
                  className="text-secondary underline"
                >
                  contact@nirvana-geneve.ch
                </a>
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                If you wish to exercise your rights as described in this Privacy Policy
                or if you have any questions or concerns about it, please contact the
                Data Protection Officer.
              </p>
              <p>
                AMAN &amp; NIRVANA SÀRL
                <br />
                Route de Meyrin 375
                <br />
                CH-1217 Meyrin
                <br />
                Switzerland
                <br />
                <a
                  href="mailto:contact@nirvana-geneve.ch"
                  className="text-secondary underline"
                >
                  contact@nirvana-geneve.ch
                </a>
              </p>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

