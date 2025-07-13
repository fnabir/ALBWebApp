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

export default function Generator() {
  const breadcrumb: BreadcrumbInterface[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Generator"
    }
  ]

  return (
    <PageLayout>
      <HeroSection img="hero_generator" heading="Generator" breadcrumb={breadcrumb}/>
    </PageLayout>
  );
}
