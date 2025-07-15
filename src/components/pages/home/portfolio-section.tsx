"use client"

import { FaBuilding, FaElevator, FaUsers } from "react-icons/fa6"
import { animate, motion, useMotionValue } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { PageSection } from "@/components/page-section"

const portfolio = [
  {
    label: "Projects",
    count: 100,
    icon: FaBuilding,
  },
  {
    label: "Clients",
    count: 1000,
    icon: FaUsers,
  },
  {
    label: "Lifts",
    count: 250,
    icon: FaElevator,
  },
]

export default function PortfolioSection() {
  return (
    <PageSection 
      id="portfolio"
      badge="Portfolio"
      heading="Our Work"
      subheading="With a track record of 100% completed projects and zero negative feedback, 
                  our portfolio reflects not just the volume of our work — but the trust 
                  we&apos;ve earned along the way."
    >
      <div className="flex flex-wrap gap-8 justify-center">
        {portfolio.map((item, index) => (
          <MorphismCard key={index} icon={item.icon} count={item.count} label={item.label} />
        ))}
      </div>
    </PageSection>
  )
}

function MorphismCard({
  icon: Icon,
  count,
  label
}: {
  icon: React.ElementType;
  count: number;
  label: string;
}) {
  return (
    <div
      className="w-52 max-w-1/2 rounded-2xl backdrop-blur-lg bg-accent dark:bg-white shadow-md dark:shadow-white p-4 text-center flex flex-col justify-center items-center transition-all hover:scale-105 hover:shadow-xl duration-300"
    >
      <Icon className="size-12 text-blue-500 mb-6" />
      <div className="text-4xl font-bold text-black translate-x-3">
        <AnimatedCounter to={count} />
      </div>
      <div className="lg:text-2xl font-medium text-muted-foreground">{label}</div>
    </div>
  )
}

function AnimatedCounter({ to }: { to: number }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [displayValue, setDisplayValue] = useState(0)

  const count = useMotionValue(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          setDisplayValue(value)
        },
      })
      return () => controls.stop()
    }
  }, [inView, to, count])

  return (
    <motion.span ref={ref}>
      {displayValue.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}
      +
    </motion.span>
  )
}