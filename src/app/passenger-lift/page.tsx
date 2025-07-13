import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Passenger Lift | Asian Lift Bangladesh",
  description:
    "Discover premium passenger lifts from Asian Lift Bangladesh. We offer safe, comfortable, and efficient elevator solutions for residential and commercial buildings with expert installation and reliable maintenance services.",
  keywords:
    "passenger lift Bangladesh, buy passenger elevator, residential lift installation, commercial passenger lift, elevator service Bangladesh, passenger lift maintenance, lift solutions for buildings, comfortable passenger lifts, Asian Lift passenger, lift repair Bangladesh",
  alternates: {
    canonical: "https://asianliftbd.com/passenger-lift",
  },
};

export default function PassengerLift() {
  const breadcrumb: BreadcrumbInterface[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Passenger Lift"
    }
  ]

  return (
    <PageLayout>
      <HeroSection img="hero_passenger_lift" heading="Passenger Lift" breadcrumb={breadcrumb}/>
    </PageLayout>
  );
}
