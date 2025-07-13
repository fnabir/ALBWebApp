import { PageSection } from "@/components/page-section";
import Image from "next/image";

const services = [
  {
    label: "Full Project",
  },
  {
    label: "Installation",
  },
  {
    label: "Maintenance",
  }
];

export default function ServicesSection() {
  return (
    <PageSection 
      id="services"
      className="bg-muted"
      heading="Our Services"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3">

      </div>
    </PageSection>
  )
}