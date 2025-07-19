import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Dumbwaiter | Asian Lift Bangladesh",
  description:
    "Asian Lift Bangladesh provides compact and efficient dumbwaiter lifts for restaurants, offices, and homes. Ensure smooth, quick, and safe transport of food, documents, and small goods between floors.",
  keywords:
    "dumbwaiter Bangladesh, small goods lift, food lift, restaurant dumbwaiter, office dumbwaiter, residential dumbwaiter, dumbwaiter installation, dumbwaiter maintenance, mini elevator, service lift Bangladesh, Asian Lift dumbwaiter",
  alternates: {
    canonical: "https://asianliftbd.com/dumbwaiter",
  },
};

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Dumbwaiter"
  }
]

export default function Dumbwaiter() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_dumbwaiter_m.webp)] md:bg-[url(/img/hero_dumbwaiter.webp)]" 
        heading="Dumbwaiter" 
        breadcrumb={breadcrumb}
      />
    </PageLayout>
  );
}
