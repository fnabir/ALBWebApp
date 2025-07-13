"use client"

import type { ReactNode } from "react"
import { FaChevronDown } from "react-icons/fa6"
import { Button } from "./ui/button"

interface ScrollToSectionProps {
  targetId: string
  children?: ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  ariaLabel?: string
}

export function ScrollToSection({
  targetId,
  children,
  className = "",
  variant = "outline",
  size = "default",
  ariaLabel,
}: ScrollToSectionProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 64

      window.scrollTo({
        top: y,
        behavior: "smooth",
      })
    }
  }

  return (
    <Button
      onClick={scrollToSection}
      variant={variant}
      size={size}
      className={className}
      aria-label={ariaLabel || `Scroll to ${targetId} section`}
    >
      {children || <FaChevronDown className="h-5 w-5" />}
    </Button>
  )
}
