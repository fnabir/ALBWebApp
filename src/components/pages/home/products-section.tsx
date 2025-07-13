import { PageSection } from "@/components/page-section"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    label: "Passenger Lift",
    href: "/passenger-lift",
    image: "/img/products/passenger.webp",
  },
  {
    label: "Cargo Lift",
    href: "/cargo-lift",
    image: "/img/products/cargo.webp",
  },
  {
    label: "Hospital Lift",
    href: "/hospital-lift",
    image: "/img/products/hospital.webp",
  },
  {
    label: "Capsule Lift",
    href: "/capsule-lift",
    image: "/img/products/capsule.webp",
  },
  {
    label: "Escalators",
    href: "/escalators",
    image: "/img/products/escalator.webp",
  },
  {
    label: "Dumbwaiter",
    href: "/dumbwaiter",
    image: "/img/products/dumbwaiter.webp",
  },
  {
    label: "Generators",
    href: "/generators",
    image: "/img/products/generator.webp",
  },
  {
    label: "Lift Accessories",
    href: "/lift-accessories",
    image: "/img/products/accessories.webp",
  },
]
  
export default function ProductsSection() {
  return (
    <PageSection 
        id="products"
        className="bg-muted/50"
        heading="Products"
        subheading="Explore our full range of elevator and vertical transport solutions designed for performance, safety, and style."
      >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-4 lg:gap-6">
        {products.map((product, index) => (
          <Link
            href={product.href}
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full aspect-[9/16]">
              <Image
                src={product.image}
                alt={product.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:blur-sm group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 w-full h-full
                              bg-gradient-to-t from-black/80 to-transparent
                              group-hover:bg-black/40
                              transition-all duration-500
                              pointer-events-none"
              />
              <div className="absolute w-full left-1/2 transform -translate-x-1/2
                              top-[85%] group-hover:top-1/2
                              transition-all duration-500
                              text-white text-lg font-semibold text-center">
                {product.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageSection>
  )
}
