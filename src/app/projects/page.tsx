import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { PageSection } from "@/components/page-section";
import { Card } from "@/components/ui/card";
import { BreadcrumbInterface } from "@/lib/interfaces";
import Image from "next/image";

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

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Projects"
  }
]

const portfolio = [
  {
    label: "Projects",
    count: 100
  },
  {
    label: "Happy Clients",
    count: 1000
  }
]

export default function Projects() {
  return (
    <PageLayout>
      <HeroSection 
        className="h-[calc(60vh-64px)] bg-[url(/img/hero_projects.webp)]" 
        heading="Our Projects"
        breadcrumb={breadcrumb}
      />
      <PageSection heading="Our Portfolio"
        className="bg-muted/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            portfolio.map((item, index) => (
              <Card className="bg-background shadow-md hover:shadow-xl dark:shadow-black/50 text-center transition-all duration-300" key={index}>
                <div className="text-2xl lg:text-7xl font-bold tracking-tighter">{item.count}+</div>
                <div className="text-muted-foreground text-xl lg:text-3xl">{item.label}</div>
              </Card>
            ))
          }
          
        </div>
      </PageSection>

      <PageSection heading="Our Projects: Elevating Across Bangladesh">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 mx-auto my-auto">
            <Image src="/img/maps.png"
              alt = "Project Location"
              width={400}
              height={0}
              className="h-auto max-w-full"
            />
          </div>
          <div className="col-span-1 text-justify space-y-4">
            <p>
              At Asian Lift Bangladesh, we&apos;re proud to have delivered reliable vertical transportation solutions across key districts, 
              building a strong reputation for excellent service and a proven track record. 
              Our commitment to safety and efficiency is reflected in every project we undertake.
            </p>
            <div>
              <strong>Key Installations Across Prominent Districts</strong>
            </div>
            <ul className="space-y-4">
              <li>
                <strong>Passenger Lifts: </strong>
                 We have extensive experience installing passenger lifts in both residential and commercial buildings across <strong>Dhaka, 
                 Chittagong, Feni, and Comilla</strong>. These systems are designed for seamless, comfortable, and safe vertical mobility.
              </li>
              <li>
                <strong>Cargo Lifts (Freight Elevators): </strong>
                Essential for industrial operations, our heavy-duty cargo lifts are vital for logistics. 
                Notably, we have provided robust cargo lift solutions within <strong>Chittagong Export Processing Zone (CEPZ)</strong> 
                and <strong>Karnaphuli Export Processing Zone (KEPZ)</strong>, ensuring efficient material handling for businesses.
              </li>
              <li>
                <strong>Escalators: </strong>
                Escalators: For high-traffic public areas, our escalators enhance connectivity and convenience. 
                We proudly installed escalators in a prominent <strong>shopping mall</strong>, improving pedestrian flow and accessibility in a bustling commercial space.
              </li>
            </ul>
            <div>
              <strong>Dedicated Maintenance & Support</strong>
            </div>
            <p>
              Our commitment extends beyond installation. We provide comprehensive <strong>maintenance services</strong> to ensure the long-term 
              reliability and safety of your vertical transportation systems. We currently manage active maintenance projects 
              in <strong>Chittagong, Feni, and Comilla</strong>, guaranteeing consistent performance and prompt technical support.
            </p>
            <p>
              Our diverse project portfolio highlights our versatility and dedication to delivering technologically advanced 
              and dependable lift and escalator solutions throughout Bangladesh.
            </p>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
