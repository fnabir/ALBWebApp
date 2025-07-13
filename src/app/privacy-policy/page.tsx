import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Terms of Use | Asian Lift Bangladesh",
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
      <HeroSection img="hero_privacy_policy" heading="Privacy Policy" breadcrumb={breadcrumb}/>
    </PageLayout>
  );
}
