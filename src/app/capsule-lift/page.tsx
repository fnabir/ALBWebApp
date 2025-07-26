import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { PageSection } from "@/components/page-section";
import { ProductCard } from "@/components/prtoduct-card";
import { BreadcrumbInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Capsule Lift | Asian Lift Bangladesh",
  description:
    "Elevate your building's aesthetics with premium capsule lifts from Asian Lift Bangladesh. We offer stylish, panoramic elevators for hotels, shopping malls, and modern commercial spaces, complete with expert installation and service.",
  keywords:
    "capsule lift Bangladesh, panoramic elevator, glass lift, scenic lift, architectural lift, hotel lift, shopping mall elevator, modern elevator design, luxury lift, capsule lift installation, capsule lift maintenance, Asian Lift capsule",
  alternates: {
    canonical: "https://asianliftbd.com/capsule-lift",
  },
};

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Capsule Lift"
  }
]

const lifts : {src:string, label:string, href?:string, type?:string}[] = [
  {
    label: "MD-G001",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_G001-50.jpg",
  },
  {
    label: "MD-G002",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_G002.jpg",
  },
  {
    label: "MD-G003",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_G003.jpg",
  },
  {
    label: "MD-G004",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_G004.jpg",
  },
  {
    label: "MD-G005",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_G005.jpg",
  },
  {
    label: "MD-G006",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_G006.jpg",
  },
]

export default function CapsuleLift() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_capsule_m.webp)] md:bg-[url(/img/hero_capsule.webp)]" 
        heading="Capsule Lift" 
        breadcrumb={breadcrumb}
      />

      <PageSection heading="Catalogues">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
          {
            lifts.map((lift, index) => (
              <ProductCard key={index}
                src={lift.src}
                label={lift.label}
                href={lift.href}
                type={lift.type}
                aspectRatio="aspect-[300/500]"
              />
            ))
          }
        </div>
      </PageSection>
    </PageLayout>
  );
}
