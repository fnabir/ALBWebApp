import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { PageSection } from "@/components/page-section";
import { ProductGallery } from "@/components/product-gallery";
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

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Hospital Lift",
  },
];

const lifts: { src: string; label: string; href?: string; type?: string }[] = [
  {
    label: "RJ-017",
    src: "https://cdn.globalso.com/srh-elevator/GRB-2019.3.26-11.png",
  },
  {
    label: "RJ-021",
    src: "https://cdn.globalso.com/srh-elevator/GRB-2019.3.26-12.png",
  },
];

export default function HospitalLift() {
  return (
    <PageLayout>
      <HeroSection
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_hospital_m.webp)] md:bg-[url(/img/hero_hospital.webp)]"
        heading="Hospital Lift"
        breadcrumb={breadcrumb}
      />

      <PageSection heading="Catalogues">
        <ProductGallery
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          lifts={lifts}
          category="Hospital Lift"
          aspectRatio="aspect-square"
        />
      </PageSection>
    </PageLayout>
  );
}
