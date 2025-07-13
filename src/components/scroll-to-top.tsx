"use client"

import { useState, useEffect } from "react"
import { FaChevronUp } from "react-icons/fa6"

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${showScrollTop ? "opacity-100" : "opacity-0"}`}
      aria-label="Scroll to top"
    >
      <FaChevronUp className="size-4 lg:size-6" />
    </button>
  )
}
