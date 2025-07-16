import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Hospital Lift | Asian Lift Bangladesh",
  description:
    "Asian Lift Bangladesh offers specialized hospital lifts designed for safe patient transport, smooth medical equipment movement, and hygienic operation. Trust our expert installation & 24/7 maintenance services.",
  keywords:
    "hospital lift Bangladesh, medical elevator, stretcher lift, hospital lift installation, hospital lift maintenance, patient transport elevator, hygienic lift, medical facility elevator, Asian Lift hospital, Bangladesh healthcare lifts",
  alternates: {
    canonical: "https://asianliftbd.com/hospital-lift",
  },
};

export default function HospitalLift() {
  const breadcrumb: BreadcrumbInterface[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Hospital Lift"
    }
  ]

  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(75vh-64px)] bg-[url(/img/hero_hospital_m.webp)] md:bg-[url(/img/hero_hospital.webp)]" 
        heading="Hospital Lift" 
        breadcrumb={breadcrumb}
      />
    </PageLayout>
  );
}
