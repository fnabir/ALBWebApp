import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { PageSection } from "@/components/page-section";
import { BreadcrumbInterface } from "@/lib/interfaces";
import Image from "next/image";

export const metadata = {
  title: "About | Asian Lift Bangladesh",
  description:
    "Learn about Asian Lift Bangladesh, a leading elevator and lift company established in 2010. Discover our commitment to quality, safety, and expert vertical transport solutions delivered by skilled engineers across Bangladesh.",
  keywords:
    "Asian Lift Bangladesh company profile, Bangladesh elevator industry, lift company history Bangladesh, Asian Lift expertise, elevator solutions Bangladesh, trusted lift provider, quality elevator services, our mission vision, best elevator company Bangladesh",
  alternates: {
    canonical: "https://asianliftbd.com/about",
  },
};

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About"
  }
]

export default function About() {

  return (
    <PageLayout>
      <HeroSection 
        className="min-h-[calc(60vh-64px)] bg-[url(/img/hero_about_m.webp)] md:bg-[url(/img/hero_about.webp)]" 
        badge="Founded 2010"
        heading="About Us"
        breadcrumb={breadcrumb}
      />

      <PageSection heading="Asian Lift Bangladesh">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <Image src="/img/products/passenger.webp"
              alt="Passenger Lift"
              fill
              className="w-auto max-h-[300px] object-contain aspect-[9/16] col-span-1"
                    />
          <div className="max-w-2xl col-span-1">
            Hello
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
