import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

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
      <HeroSection img="hero_terms_of_use" heading="Terms of Use" breadcrumb={breadcrumb}/>
    </PageLayout>
  );
}
