import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Elevator & Lift Projects | Asian Lift Bangladesh",
  description:
    "Explore successful elevator & lift installation projects by Asian Lift Bangladesh. See our expertise in passenger, cargo, and hospital lifts across Bangladesh.",
  keywords:
    "elevator projects Bangladesh, lift installation projects, completed lift projects, passenger lift projects, cargo lift projects, hospital lift projects, escalator projects, Bangladesh elevator portfolio, Asian Lift Bangladesh projects",
  alternates: {
    canonical: "https://asianliftbd.com/projects",
  },
};

export default function Projects() {
  const breadcrumb: BreadcrumbInterface[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Projects"
    }
  ]

  return (
    <PageLayout>
      <HeroSection img="hero_projects" heading="Our Projects" breadcrumb={breadcrumb}/>
    </PageLayout>
  );
}
