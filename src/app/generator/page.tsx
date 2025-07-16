import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Generator | Asian Lift Bangladesh",
  description:
    "Ensure uninterrupted elevator operation with reliable generators from Asian Lift Bangladesh. We provide expert power backup solutions, installation, and maintenance for all types of lifts, ensuring safety during outages.",
  keywords:
    "generator for lift, elevator power backup, lift generator Bangladesh, emergency power for elevators, UPS for lifts, generator installation, generator maintenance, uninterruptible power supply, Asian Lift generator, Bangladesh power solutions",
  alternates: {
    canonical: "https://asianliftbd.com/generator",
  },
};

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Generator"
  }
]

export default function Generator() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(75vh-64px)] bg-[url(/img/hero_generator_m.webp)] md:bg-[url(/img/hero_generator.webp)]" 
        heading="Generator" 
        breadcrumb={breadcrumb}
      />
    </PageLayout>
  );
}
