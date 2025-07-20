import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Asian Lift Bangladesh",
  description:
    "Review the terms of use for Asian Lift Bangladesh's website and digital services, outlining user responsibilities and company policies for fair and secure engagement.",
  keywords:
    "Asian Lift Bangladesh terms of service, website terms and conditions, legal policy, user agreement, digital services terms, online service terms",
  alternates: {
    canonical: "https://asianliftbd.com/terms-of-use",
  },
};

export default function TermsOfUse() {
  const breadcrumb: BreadcrumbInterface[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Terms of Use"
    }
  ]

  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_terms_m.webp)] md:bg-[url(/img/hero_terms.webp)]"
        heading="Terms of Use"
        subheading="Last updated 01 Aug 2025" 
        breadcrumb={breadcrumb}/>
      
      <section className="py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-6">

          <p>These Terms of Use govern your use of our website and services. By accessing or using our site, you agree to be bound by these terms.</p>

          <h2 className="text-2xl font-semibold mt-8">Acceptance of Terms</h2>
          <p>By accessing or using any part of the site, you agree to become bound by these terms. If you do not agree to all the terms, then you may not access the website or use any services.</p>

          <h2 className="text-2xl font-semibold mt-8">Modification of Terms</h2>
          <p>We reserve the right to change or update these Terms at any time without prior notice. Your continued use of the site after any such changes constitutes your acceptance of the new Terms.</p>

          <h2 className="text-2xl font-semibold mt-8">User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You agree to use the site only for lawful purposes.</li>
            <li>You agree not to disrupt the site or servers connected to the site.</li>
            <li>You are responsible for maintaining the confidentiality of any account credentials.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Intellectual Property</h2>
          <p>All content on this site, including text, graphics, logos, and images, is the property of Asian Lift Bangladesh or its content suppliers and is protected by copyright and intellectual property laws.</p>

          <h2 className="text-2xl font-semibold mt-8">Prohibited Activities</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Unauthorized access or use of our servers or data.</li>
            <li>Impersonation or misrepresentation of your affiliation with any person or entity.</li>
            <li>Uploading or distributing malicious software or content.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Disclaimer of Warranties</h2>
          <p>The site and services are provided "as is" and "as available" without warranties of any kind. We do not warrant that the service will be uninterrupted, secure, or error-free.</p>

          <h2 className="text-2xl font-semibold mt-8">Limitation of Liability</h2>
          <p>Asian Lift Bangladesh shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of the service or website.</p>

          <h2 className="text-2xl font-semibold mt-8">Third-Party Links</h2>
          <p>Our service may contain links to third-party websites that are not owned or controlled by us. We assume no responsibility for the content or practices of any third-party sites.</p>

          <h2 className="text-2xl font-semibold mt-8">Termination</h2>
          <p>We may terminate or suspend access to our site immediately, without prior notice or liability, for any reason, including if you breach the Terms.</p>

          <h2 className="text-2xl font-semibold mt-8">Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-semibold mt-8">Entire Agreement</h2>
          <p>These Terms constitute the entire agreement between you and Asian Lift Bangladesh regarding the use of our services and supersede any prior agreements.</p>

          <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
          <p>If you have any questions about these Terms:</p>
          <ul className="list-none space-y-1">
            <li>Email: <a href="mailto:contact@asianliftbd.com" className="text-blue-400 hover:underline">contact@asianliftbd.com</a></li>
            <li>Visit: <Link href="/contact" className="text-blue-400 hover:underline">asianliftbd.com/contact</Link></li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
