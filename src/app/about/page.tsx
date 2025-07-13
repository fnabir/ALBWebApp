import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "About | Asian Lift Bangladesh",
  description:
    "Learn about Asian Lift Bangladesh, a leading elevator and lift company established in 2010. Discover our commitment to quality, safety, and expert vertical transport solutions delivered by skilled engineers across Bangladesh.",
  keywords:
    "Asian Lift Bangladesh company profile, Bangladesh elevator industry, lift company history Bangladesh, Asian Lift expertise, elevator solutions Bangladesh, trusted lift provider, quality elevator services, our mission vision, best elevator company Bangladesh",
  alternates: {
    canonical: "https://asianliftbd.com/about",
  },
};

export default function About() {
  const breadcrumb: BreadcrumbInterface[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About"
    }
  ]

  return (
    <PageLayout>
      <HeroSection 
        className="min-h-[calc(60vh-64px)] bg-[url(/img/hero_about_m.webp)] md:bg-[url(/img/hero_about.webp)]" 
        badge="Founded 2010"
        heading="About Us"
        breadcrumb={breadcrumb}
      />
    </PageLayout>
  );
}
