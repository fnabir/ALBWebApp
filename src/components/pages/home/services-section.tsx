"use client"

import { PageSection } from "@/components/page-section";
import { useRouter } from "next/navigation";
import { FaBuilding, FaWrench } from "react-icons/fa6";
import { IconType } from "react-icons";
import { FaTools } from "react-icons/fa";

const services = [
  {
    label: "Full Project",
    id: "full-project",
    icon: FaBuilding,
  },
  {
    label: "Installation",
    id: "installation",
    icon: FaTools,
  },
  {
    label: "Maintenance",
    id: "maintenance",
    icon: FaWrench,
  },
];

export default function ServicesSection() {
  return (
    <PageSection 
      id="services"
      className="bg-muted"
      heading="Our Services"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {
          services.map((item, index) => (
            <ServicesCard key={index} label={item.label} targetId={item.id} Icon={item.icon} />
          ))
        }
      </div>
    </PageSection>
  )
}

function ServicesCard({
  label,
  targetId,
  Icon,
}: {
  label: string;
  targetId: string;
  Icon: IconType;
}) {
  const router = useRouter();

  const handleClick = () => {
    sessionStorage.setItem("scrollTo", targetId);
    router.push("/services");
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-2xl p-6 text-center border bg-background shadow-md hover:shadow-lg shadow-black/50 flex flex-col items-center transition-all hover:scale-105 duration-300 cursor-pointer"
    >
      <Icon className="text-4xl mb-4 lg:mb-6 lg:size-14" />
      <div className="text-lg lg:text-2xl font-medium">{label}</div>
    </div>
  );
}