import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function LegalNoticesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto p-6 bg-white text-gray-800">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-6">Legal Notices</h1>

        <section className="mb-8">
          <p className="mb-4">
            The Internet user who uses this website fully accepts and respects the conditions below:
          </p>
          <p className="mb-4"><strong>Company name:</strong> Nirvana</p>
          <p className="mb-4">375, Route de Meyrin<br />1217 Meyrin</p>
          <p className="mb-4"><strong>Tel:</strong> <a href="tel:+41227821010" className="text-primary hover:underline">022 782 10 10</a></p>
          <p className="mb-4"><strong>Email:</strong> <a href="mailto:contact@nirvana-geneve.ch" className="text-primary hover:underline">contact@nirvana-geneve.ch</a></p>
          <p><strong>Publication Directors:</strong> Mr ASHRAN KHAN</p>
        </section>

        <section className="mb-8">
          <p>
            The publication manager provides information to Internet users and attempts to ensure its accuracy.
            Our company cannot be held responsible for any damages related to the consultation of this information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Hosting</h2>
          <p className="mb-4">
            <strong>Host:</strong> NETISSIME – elb Multimedia Group
          </p>
          <p className="mb-4">
            <strong>Head office:</strong> 45/47 rue Francis de Pressensé, 69100 Villeurbanne, France
          </p>
          <p>
            Lyon Trade Register – France – 429.999.030.000.50
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Domain Name</h2>
          <p className="mb-4">
            The domain name <a href="https://www.nirvana-geneve.ch" className="text-primary hover:underline">www.nirvana-geneve.ch</a> is managed by:
          </p>
          <p className="mb-4">
            <strong>OVH, SAS</strong> with capital of €10,000,000<br />
            RCS Roubaix – Tourcoing 424 761 419 00045<br />
            APE Code 6202A, VAT No.: FR 22 424 761 419<br />
            Head office: 2 rue Kellermann – 59100 Roubaix – France
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Article 1: Data Protection</h2>
          <p>
            Information entered by the user on this site may be recorded for processing by our company.
            The user has the right to access, modify and delete the data collected on this site,
            under the conditions provided for by the law relating to data protection, files and freedoms.
            To exercise this right, please send a letter to our company; you can find our contact details above.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Article 2: Hypertext Links, Conditions of Use and Security</h2>
          <p className="mb-4">
            This website may have links to other websites. Our company has no means of control over other external sites
            and cannot be held responsible for damages of any kind (virus, loss of data, etc.) suffered by the user's computer,
            resulting from an Internet user's visit to these other sites, nor from the information on these sites.
          </p>
          <p>
            The risks and damages linked to an Internet user's visit to our site are the sole responsibility of the Internet user,
            who must keep his equipment and anti-virus software up to date to be protected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-4">Article 3: Content, Trademark Law</h2>
          <p className="mb-4">
            This site is operated in compliance with the law. If you notice an error or malfunction, please report it to our company.
            The photos on this site are not contractual.
          </p>
          <p>
            The content of this site, including photos, images, text, videos, animations, sounds, and logos,
            are the responsibility of the Director of Publication of this site.
            Any reproduction, adaptation, or publication of these elements is strictly prohibited without our express consent.
            Failure to comply with this prohibition constitutes an infringement that may incur the liability of the infringer.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
