import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { PageSection } from "@/components/page-section";
import { ProductCard } from "@/components/prtoduct-card";
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

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Passenger Lift"
  }
]

const lifts = [
  {
    label: "MD-K001",
    src: "http://en.mdunks.com/uploads/allimg/181224/MD_K001-50.jpg",
    href: "",
    type: ""
  },
  {
    label: "MD-K002",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_K002.jpg",
  },
  {
    label: "MD-K003",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_K003.jpg",
  },
  {
    label: "MD-K004",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_K004.jpg",
  },
  {
    label: "MD-K005",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_K005.jpg",
  },
  {
    label: "MD-K006",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_K006.jpg",
  },
  {
    label: "MD-K007",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_K007.jpg",
  },
  {
    label: "MD-K008",
    src: "http://en.mdunks.com/uploads/allimg/181225/MD_K008.jpg",
  },
  {
    label: "RJ-011",
    src: "/img/products/RJ-011.webp"
  },
  {
    label: "RJ-013",
    src: "/img/products/RJ-013.webp",
    type: "360",
    href: "http://www.shinesweb.com/quanjing/pre/xinglicai/srh/RJ013/"
  },
  {
    label: "RJ-016",
    src: "/img/products/RJ-016.webp"
  },
  {
    label: "RJ-039",
    src: "/img/products/RJ-039.webp"
  }
]

export default function PassengerLift() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_passenger_m.webp)] md:bg-[url(/img/hero_passenger.webp)]" 
        heading="Passenger Lift" 
        breadcrumb={breadcrumb}
      />

      <PageSection heading="Catalogues">
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12">
          {
            lifts.map((lift, index) => (
              <ProductCard key={index}
                src={lift.src}
                label={lift.label}
                href={lift.href}
                type={lift.type}
                aspectRatio="aspect-[300/475]"
              />
            ))
          }
        </div>
      </PageSection>
    </PageLayout>
  );
}
