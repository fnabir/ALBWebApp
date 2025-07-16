import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Elevator & Lift Services | Asian Lift Bangladesh",
  description:
    "Asian Lift Bangladesh provides comprehensive elevator and lift services, including expert installation, reliable maintenance, and modernizations for all types of vertical transport solutions.",
  keywords:
    "elevator services Bangladesh, lift installation service, elevator maintenance Bangladesh, lift modernization, elevator repair Bangladesh, lift servicing Chittagong, escalator maintenance, lift spare parts, vertical transport solutions",
  alternates: {
    canonical: "https://asianliftbd.com/services",
  },
};

export default function Services() {
  const breadcrumb: BreadcrumbInterface[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Services"
    }
  ]

  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_services_m.webp)] md:bg-[url(/img/hero_services.webp)]" 
        heading="Our Services" 
        breadcrumb={breadcrumb}
      />
    </PageLayout>
  );
}
