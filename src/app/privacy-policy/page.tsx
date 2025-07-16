import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Asian Lift Bangladesh",
  description:
    "Read Asian Lift Bangladesh's Privacy Policy to understand how we collect, use, and protect your personal data across our website and digital services.",
  keywords:
    "Asian Lift Bangladesh terms of service, website terms and conditions, legal policy, user agreement, digital services terms, online service terms",
  alternates: {
    canonical: "https://asianliftbd.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  const breadcrumb: BreadcrumbInterface[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Privacy Policy"
    }
  ]

  return (
    <PageLayout>
      <HeroSection 
        className="min-h-[calc(40vh-64px)]"
        heading="Privacy Policy"
        subheading="Last updated 01 Aug 2025" 
        breadcrumb={breadcrumb}/>

      <section className="bg-muted/50 py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-6">

          <p>This Privacy Policy describes our policies on the collection, use, and disclosure of your information when you use the service. It also tells you about your privacy rights and how the law protects you.</p>

          <p>Your privacy is important to Asian Lift Bangladesh. We&apos;ve developed this Privacy Policy to describe how we collect, use, disclose, transfer, and store your personal information.</p>

          <h2 className="text-2xl font-semibold mt-8">Interpretation and Definitions</h2>
          <p><strong>Interpretation:</strong> The words where the initial letter is capitalized have meanings defined under the following conditions.</p>
          <p><strong>Definitions:</strong> For the purposes of this Privacy Policy:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>You:</strong> the individual using the service.</li>
            <li><strong>Company:</strong> refers to Asian Lift Bangladesh.</li>
            <li><strong>Account, Website, Mobile Applications, Service, Country, Service Provider, Personal Data, Cookies</strong> are all defined terms.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Collection and Use of Your Personal Data</h2>
          <p><strong>Types of Data Collected:</strong> We may collect your email address, name, phone number, and usage data.</p>
          <p><strong>Usage Data:</strong> Collected automatically when using the service, including browser type, pages visited, time and date of visit, and other diagnostic data.</p>

          <p><strong>Use of Personal Data:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and maintain our service.</li>
            <li>To manage your account.</li>
            <li>To contact you with updates, offers, and support.</li>
          </ul>

          <p><strong>Sharing Your Personal Data:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>With service providers for analysis and improvement.</li>
            <li>With other users, if you share content publicly.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Retention of Your Personal Data</h2>
          <p>We retain your personal data only as long as necessary for legal or operational purposes.</p>

          <h2 className="text-2xl font-semibold mt-8">Cookies and Other Technologies</h2>
          <p><strong>What is a Cookie?</strong> Cookies are small files stored on your device that collect standard internet log information.</p>
          <p><strong>Use of Cookies:</strong> We use cookies to improve functionality and user experience.</p>
          <p><strong>Do Not Track:</strong> We support DNT browser settings.</p>
          <p><strong>Controlling Cookies:</strong> You can control or delete cookies through your browser settings.</p>

          <h2 className="text-2xl font-semibold mt-8">Transfer of Your Personal Data</h2>
          <p>Your data may be processed outside your jurisdiction, including to countries with different data protection laws.</p>

          <h2 className="text-2xl font-semibold mt-8">Disclosure of Your Personal Data</h2>
          <p><strong>Business Transactions:</strong> Your data may be transferred in a merger or acquisition.</p>
          <p><strong>Law Enforcement:</strong> We may disclose data as required by law.</p>
          <p><strong>Other Legal Requirements:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>To comply with legal obligations.</li>
            <li>To protect our rights or property.</li>
            <li>To prevent fraud or wrongdoing.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Non-Personal Information</h2>
          <p>We may collect non-personal data such as browser language, region, or system settings for analytics.</p>

          <h2 className="text-2xl font-semibold mt-8">Your Privacy Rights</h2>
          <p>You have rights to access, correct, delete, or object to the use of your personal data.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Request access or deletion of your data.</li>
            <li>Request corrections or updates.</li>
            <li>Object to certain processing.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Our Commitment to Your Privacy</h2>
          <p>We enforce companywide privacy standards and regularly review our practices.</p>

          <h2 className="text-2xl font-semibold mt-8">Security of Your Personal Data</h2>
          <p>We use industry-standard practices to secure your personal data. However, no transmission over the internet is 100% secure.</p>

          <h2 className="text-2xl font-semibold mt-8">Children&apos;s Privacy</h2>
          <p>We do not knowingly collect personal data from anyone under the age of 18.</p>

          <h2 className="text-2xl font-semibold mt-8">Third-Party Sites</h2>
          <p>We are not responsible for the content or privacy policies of third-party websites linked from our service.</p>

          <h2 className="text-2xl font-semibold mt-8">Changes to This Policy</h2>
          <p>We may update our Privacy Policy from time to time. You will be notified of any changes via email or our website.</p>

          <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
          <p>If you have questions about this Privacy Policy:</p>
          <ul className="list-none space-y-1">
            <li>Email: <a href="mailto:contact@asianliftbd.com" className="text-blue-400 hover:underline">contact@asianliftbd.com</a></li>
            <li>Visit: <Link href="/contact" className="text-blue-400 hover:underline">asianliftbd.com/contact</Link></li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
