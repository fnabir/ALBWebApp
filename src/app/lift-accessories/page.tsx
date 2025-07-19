import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Lift Accessories | Asian Lift Bangladesh",
  description:
    "Find high-quality lift accessories & elevator parts at Asian Lift Bangladesh. We offer a range of components for performance, safety & modern upgrades. Get expert solutions!",
  keywords:
    "passenger lift Bangladesh, buy passenger elevator, residential lift installation, commercial passenger lift, elevator service Bangladesh, passenger lift maintenance, lift solutions for buildings, comfortable passenger lifts, Asian Lift passenger, lift repair Bangladesh",
  alternates: {
    canonical: "https://asianliftbd.com/lift-accessories",
  },
};

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Lift Accessories"
  }
]

export default function LiftAccessories() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_accessories_m.webp)] md:bg-[url(/img/hero_accessories.webp)]" 
        heading="Lift Accessories" 
        breadcrumb={breadcrumb}
      />
    </PageLayout>
  );
}
