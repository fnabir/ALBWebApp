import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { PageSection } from "@/components/page-section";
import { ProductCard } from "@/components/prtoduct-card";
import { BreadcrumbInterface, ProductInterface } from "@/lib/interfaces";

export const metadata = {
  title: "Lift Accessories | Asian Lift Bangladesh",
  description:
    "Find high-quality lift accessories & elevator parts at Asian Lift Bangladesh. We offer a range of components for performance, safety & modern upgrades. Get expert solutions!",
  keywords:
    "lift accessories Bangladesh, elevator parts Bangladesh, lift safety accessories, lift interior accessories, elevator modernization parts, lift door operators, elevator control systems, Asian Lift Bangladesh accessories, elevator spare parts Bangladesh, passenger lift maintenance, comfortable passenger lifts, lift repair Bangladesh",
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

const ceilings = ["RD-006", "RD-011", "RD-013", "RD-014", "RD-015", "RD-016", "RD-017", "RD-018"]

const floors = ["PRV002", "PRV004", "PRV008", "PRV010", "PRV011", "PRV012", 
                "PRV013", "PRV014", "PRV015", "PRV016", "PRV017", "PRV018",
                "PRV019", "PRV020", "PRV021", "PRV022", "PRV023", "PRV024",
                "PRV025", "PRV026", "PRV027", "PRV028", "PRV029", "PRV030"]

const handrails = ["RF-001", "RF-002", "RF-003", "RF-004", "RF-005", "RF-007"]

const doors = ["RT-011", "RT-012", "RT-014", "RT-015", "RT-016", "RT-100"]

export default function LiftAccessories() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_accessories_m.webp)] md:bg-[url(/img/hero_accessories.webp)]" 
        heading="Lift Accessories" 
        breadcrumb={breadcrumb}
      />

      <PageSection heading="Ceilings">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
          {
            ceilings.map((item, index) => (
              <ProductCard key={index}
                src={`/img/products/${item}.webp`}
                label={item}
                aspectRatio="aspect-[300/100]"
              />
            ))
          }
        </div>
      </PageSection>

      <PageSection heading="Floors"
                  className="bg-muted/50">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8">
          {
            floors.map((item, index) => (
              <ProductCard key={index}
                src={`/img/products/${item}.webp`}
                label={item}
                aspectRatio="aspect-square"
              />
            ))
          }
        </div>
      </PageSection>

      <PageSection heading="Handrails">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {
            handrails.map((item, index) => (
              <ProductCard key={index}
                src={`/img/products/${item}.webp`}
                label={item}
                aspectRatio="aspect-[5/2]"
              />
            ))
          }
        </div>
      </PageSection>

      <PageSection heading="Doors"
                  className="bg-muted/50">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {
            doors.map((item, index) => (
              <ProductCard key={index}
                src={`/img/products/${item}.webp`}
                label={item}
                aspectRatio="aspect-[3/4]"
              />
            ))
          }
        </div>
      </PageSection>
    </PageLayout>
  );
}
