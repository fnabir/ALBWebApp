import { HeroSection } from "@/components/hero-section";
import PageLayout from "@/components/page-layout";
import { PageSection } from "@/components/page-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PartnerImage from "@/images/partner";
import { BreadcrumbInterface } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

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

const reasons = [
  {
    title: "Dedicated Client Focus",
    details: "We invest in your long-term satisfaction, not just new business.",
  },
  {
    title: "Guaranteed Results",
    details: "Our approach is built on delivering tangible, positive outcomes.",
  },
  {
    title: "Seamless Expertise",
    details: "Access the profound knowledge of our highly specialized team.",
  },
  {
    title: "Superior Outcomes",
    details:
      "Our seasoned professionals consistently achieve outstanding results.",
  },
  {
    title: "Informed Solutions",
    details:
      "We combine advanced knowledge with real-world experience for better solutions.",
  },
  {
    title: "Collaborative Success",
    details: "Open communication ensures we meet your goals effectively.",
  },
  {
    title: "Advanced & Secure",
    details:
      "We stay current with cutting-edge technology and rigorous safety protocols.",
  },
  {
    title: "Innovative Thinking",
    details: "Our broad perspectives spark creative and effective solutions.",
  },
];

const teamMembers = [
  {
    name: "AHSAN NOOR ASIR",
    role: "Finance and Accounts Officer",
    image: "/team/asir.webp",
  },
  {
    name: "FARHAN NOOR ABIR",
    role: "Software Engineer",
    image: "/team/abir.webp",
  },
  {
    name: "AIMAN NOOR",
    role: "Electrical Engineer",
    image: "/team/rahir.webp",
  },
  {
    name: "MOKHLESUR RAHMAN",
    role: "Manager",
    image: "/team/mokhles.webp",
  },
  {
    name: "MOHAMMAD UJJAL",
    role: "Senior Technician",
    image: "/team/ujjal.webp",
  },
  {
    name: "MUSHFIQUR RAHMAN",
    role: "Technician",
    image: "/team/tanib.webp",
  },
  {
    name: "SAMIR TAZWAR",
    role: "Technician",
    image: "/team/samir.webp",
  },
];

const breadcrumb: BreadcrumbInterface[] = [
  {
    label: "About",
  },
];

export default function About() {
  return (
    <PageLayout>
      <HeroSection
        className="min-h-[calc(60vh-64px)] bg-[url(/img/hero_about_m.webp)] md:bg-[url(/img/hero_about.webp)]"
        badge="Founded 2010"
        heading="About Us"
        breadcrumb={breadcrumb}
      />

      <PageSection
        heading="Asian Lift Bangladesh"
        className="bg-muted/60 text-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-12">
          <div className="col-span-1 my-auto">
            <Image
              src="/img/products/passenger.webp"
              alt="Passenger Lift"
              width={400}
              height={600}
              className="mx-auto h-auto"
            />
          </div>
          <div className="max-w-2xl col-span-1 text-justify space-y-6 lg:text-lg">
            <p>
              <strong>Asian Lift Bangladesh</strong> is a well-established and
              reputable elevator and escalator company in Bangladesh, founded in
              2010. Since our inception, we have built a strong reputation
              through unwavering honesty, transparency, and exceptional service.
              We have successfully installed a diverse range of lifts and
              escalators across major cities including Dhaka, Chittagong, Feni,
              Comilla, and other key towns, serving residential, industrial, and
              commercial buildings. Beyond installation, we provide
              comprehensive maintenance services and prompt technical support
              for all our projects in these regions. Explore our products page
              to view our extensive selection of elevators and generators.
            </p>
            <p>
              At Asian Lift Bangladesh, client satisfaction is our foremost
              priority. Our clients frequently recommend us, a testament to
              their trust and positive experience. We believe in complete
              transparency; therefore, we are happy to provide our client list
              upon request, allowing you to independently verify our work and
              performance. We can also facilitate direct contact with our
              project references, enabling you to hear firsthand testimonials
              about our services and assess our commitment to excellence.
            </p>
            <p>
              We operate with integrity, making only realistic commitments. We
              undertake projects where we are confident in delivering the
              required quality at mutually agreed-upon prices. Safety is
              paramount in all our endeavors; thus, we do not compromise on the
              inclusion of essential safety devices, which may sometimes
              influence pricing. Our portfolio encompasses various types of
              lifts and escalators designed to meet diverse needs. To learn more
              about our solutions or to discuss your specific requirements, we
              invite you to visit us or contact us directly.
            </p>
          </div>
        </div>
        <Link href={"/contact"}>
          <Button size="lg" className="text-lg">
            Get in Touch
          </Button>
        </Link>
      </PageSection>

      <PageSection heading="Why Choose Us" subheading="Your Partner in Success">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ul className="col-span-1 space-y-2 my-auto">
            {reasons.map((reason, index) => (
              <li key={index} className="flex gap-2">
                <FaCheck className="w-4 h-5 text-green-400 dark:text-green-600 mt-0.5 shrink-0" />
                <div>
                  <strong>{reason.title}</strong>
                  <span> : {reason.details}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="col-span-1 mx-auto">
            <PartnerImage />
          </div>
        </div>
      </PageSection>
      <PageSection heading="About Us" className="bg-muted/70">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:auto-rows-fr">
          <Card className="col-span-1 bg-background w-full max-w-sm h-full flex flex-col items-center py-4 overflow-hidden">
            <CardHeader className="w-full text-center my-auto">
              <CardDescription className="lg:text-2xl">Founded</CardDescription>
              <CardTitle className="font-bold text-2xl lg:text-6xl tracking-tighter">
                2010
              </CardTitle>
            </CardHeader>
          </Card>
          <TeamCard
            name="MOHAMMED RAFIQUL ISLAM"
            role="Proprietor"
            image="/team/rafiq.webp"
          />
          <Link href="/ahsan-enterprise" className="block h-full">
            <Card className="col-span-1 bg-background w-full max-w-sm h-full flex flex-col items-center pt-6 pb-0 overflow-hidden">
              <Image
                src="/img/ahsanenterprise.svg"
                alt="Ahsan Enterprise"
                width={230}
                height={230}
                className="mb-2 flex-1 h-auto"
              />
              <CardHeader className="w-full text-center bg-muted py-2">
                <CardTitle className="font-bold text-xl lg:text-2xl tracking-tighter">
                  AHSAN ENTERPRISE
                </CardTitle>
                <CardDescription className="lg:text-lg">
                  C&F Agent
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 items-center gap-4 col-span-full mt-8 lg:mt-16">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </PageSection>
    </PageLayout>
  );
}

function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="col-span-1 h-fit flex flex-col items-center justify-center py-2 text-center from-blue-600 via-background to-background bg-linear-to-b rounded-xl">
      <Image
        src={image}
        alt={name}
        width={230}
        height={230}
        className="my-2 h-auto rounded-xl"
      />
      <div className="font-bold text-lg lg:text-xl">{name}</div>
      <p className="text-md lg:text-lg">{role}</p>
    </div>
  );
}
