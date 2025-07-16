import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Cargo Lift | Asian Lift Bangladesh",
  description:
    "Find robust cargo lifts and freight elevators at Asian Lift Bangladesh. We provide heavy-duty, efficient vertical transport solutions for industrial, warehouse, and commercial needs, with expert installation and maintenance.",
  keywords:
    "cargo lift Bangladesh, freight elevator, goods lift, industrial lift, warehouse lift, heavy-duty elevator, cargo lift installation, cargo lift maintenance, factory lift, commercial cargo lift, Asian Lift cargo, Bangladesh industrial elevator",
  alternates: {
    canonical: "https://asianliftbd.com/cargo-lift",
  },
};

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Cargo Lift"
  }
]

export default function CargoLift() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(75vh-64px)] bg-[url(/img/hero_cargo_m.webp)] md:bg-[url(/img/hero_cargo.webp)]" 
        heading="Cargo Lift" 
        breadcrumb={breadcrumb}
      />
    </PageLayout>
  );
}
