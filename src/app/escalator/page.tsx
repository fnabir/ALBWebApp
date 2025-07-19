import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Escalator | Asian Lift Bangladesh",
  description:
    "Asian Lift Bangladesh offers premium escalators for high-traffic commercial and public spaces. Get expert installation, reliable maintenance, and modern escalator solutions designed for efficiency and safety.",
  keywords:
    "escalator Bangladesh, buy escalator, escalator installation, escalator maintenance, commercial escalator, public space escalator, moving staircase, escalator repair, Asian Lift escalator, Bangladesh escalator solutions",
  alternates: {
    canonical: "https://asianliftbd.com/escalator",
  },
};

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Escalator"
  }
]

export default function Escalator() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_escalator_m.webp)] md:bg-[url(/img/hero_escalator.webp)]"
        heading="Escalator" 
        breadcrumb={breadcrumb}
      />
    </PageLayout>
  );
}
