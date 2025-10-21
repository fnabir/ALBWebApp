import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { PageSection } from "@/components/page-section";
import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { BreadcrumbInterface } from "@/lib/interfaces";

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

const ceilings = [
  {
    label: "RD-006"
  },
  {
    label: "RD-011"
  }, 
  {
    label: "RD-013"
  },
  {
    label: "RD-014"
  },
  {
    label: "RD-015"
  },
  {
    label: "RD-016"
  },
  {
    label: "RD-017"
  },
  {
    label: "RD-018"
  }
]

const floors = [
  {
    label: "PRV002"
  },
  {
    label: "PRV004"
  },
  {
    label: "PRV008"
  }, 
  {
    label: "PRV010"
  },
  {
    label: "PRV011"
  },
  {
    label: "PRV012"
  },
  {
    label: "PRV013"
  },
  {
    label: "PRV014"
  },
  {
    label: "PRV015"
  },
  {
    label: "PRV016"
  },
  {
    label: "PRV017"
  },
  {
    label: "PRV018"
  },
  {
    label: "PRV019"
  },
  {
    label: "PRV020"
  },
  {
    label: "PRV021"
  },
  {
    label: "PRV022"
  },
  {
    label: "PRV023"
  },
  {
    label: "PRV024"
  },
  {
    label: "PRV025"
  },
  {
    label: "PRV026"
  },
  {
    label: "PRV027"
  },
  {
    label: "PRV028"
  },
  {
    label: "PRV029"
  },
  {
    label: "PRV030"
  }
]

const handrails = [
  {
    label: "RF-001"
  },
  {
    label: "RF-002"
  }, 
  {
    label: "RF-003"
  },
  {
    label: "RF-004"
  },
  {
    label: "RF-005"
  },
  {
    label: "RF-007"
  }
]

const doors = [
  {
    label: "RT-011"
  }, 
  {
    label: "RT-012"
  },
  {
    label: "RT-014"
  },
  {
    label: "RT-015"
  },
  {
    label: "RT-016"
  },
  {
    label: "RT-100"
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

      <PageSection heading="Ceilings">
        <ProductGallery className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12"
                        lifts={ceilings} 
                        category="Ceilings" 
                        aspectRatio="aspect-[300/100]"/>
      </PageSection>

      <PageSection heading="Floors" className="bg-muted/50">
        <ProductGallery className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8"
                        lifts={floors} 
                        category="Floors" 
                        aspectRatio="aspect-square"/>
      </PageSection>

      <PageSection heading="Handrails">
        <ProductGallery className="grid grid-cols-2 lg:grid-cols-6 gap-8"
                        lifts={handrails} 
                        category="Handrails" 
                        aspectRatio="aspect-[5/2]"/>
      </PageSection>

      <PageSection heading="Doors" className="bg-muted/50">
        <ProductGallery className="grid grid-cols-2 lg:grid-cols-6 gap-8"
                        lifts={doors} 
                        category="Doors" 
                        aspectRatio="aspect-[3/4]"/>
      </PageSection>
    </PageLayout>
  );
}
