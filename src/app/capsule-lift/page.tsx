import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Capsule Lift | Asian Lift Bangladesh",
  description:
    "Elevate your building's aesthetics with premium capsule lifts from Asian Lift Bangladesh. We offer stylish, panoramic elevators for hotels, shopping malls, and modern commercial spaces, complete with expert installation and service.",
  keywords:
    "capsule lift Bangladesh, panoramic elevator, glass lift, scenic lift, architectural lift, hotel lift, shopping mall elevator, modern elevator design, luxury lift, capsule lift installation, capsule lift maintenance, Asian Lift capsule",
  alternates: {
    canonical: "https://asianliftbd.com/capsule-lift",
  },
};

export default function CapsuleLift() {
  const breadcrumb: BreadcrumbInterface[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Capsule Lift"
    }
  ]

  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_capsule_m.webp)] md:bg-[url(/img/hero_capsule.webp)]" 
        heading="Capsule Lift" 
        breadcrumb={breadcrumb}
      />
    </PageLayout>
  );
}
