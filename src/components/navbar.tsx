"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "@/components/theme-toggle"
import { MdMenu } from "react-icons/md"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import LogoWithText from "@/images/logo-text"
import GetQuote from "./get-quote"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems: {label: string; href: string}[] = [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const productsItems: { title: string; href: string; description: string }[] = [
    {
      title: "Passenger Lift",
      href: "/passenger-lift",
      description:
        "Reliable lifts for smooth and comfortable movement of people in any building.",
    },
    {
      title: "Cargo Lift",
      href: "/cargo-lift",
      description: "Robust lifts designed for efficient and heavy-duty material transport.",
    },
    {
      title: "Hospital Lift",
      href: "/hospital-lift",
      description: "Specialized elevators for safe patient transport and medical equipment.",
    },
    {
      title: "Capsule Lift",
      href: "/capsule-lift",
      description: "Stylish, panoramic lifts offering a unique viewing experience.",
    },
    {
      title: "Escalator",
      href: "/escalator",
      description: "Continuous vertical transport solutions for high-traffic areas.",
    },
    {
      title: "Dumbwaiter",
      href: "/dumbwaiter",
      description: "Compact service lifts for small goods, food, or laundry.",
    },
    {
      title: "Generator",
      href: "/generator",
      description: "Backup power solutions to ensure uninterrupted lift operation.",
    },
    {
      title: "Lift Accessories",
      href: "/lift-accessories",
      description: "Essential components and parts for lift maintenance and upgrades.",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-center px-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 h-42 w-42 md:w-56 lg:p-6" aria-label="Asian Lift Bangladesh">
            <LogoWithText />
          </Link>
        </div>

        <nav className="hidden lg:flex" aria-label="Main Navigation">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-4 lg:gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="-mr-2">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 w-[500px] grid-cols-2 lg:w-[600px]">
                    {productsItems.map((product) => (
                      <ListItem
                        key={product.title}
                        title={product.title}
                        href={product.href}
                      >
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4 md:w-50 justify-end">
          <ThemeToggle />
          <div className="hidden lg:flex">
            <GetQuote />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTitle className="hidden">Navbar</SheetTitle>
            <SheetDescription className="hidden">Mobile Navbar</SheetDescription>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <MdMenu className="size-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
                <Link href="/" className="flex items-center space-x-2 h-fit w-full pr-16" aria-label="Asian Lift Bangladesh" onClick={() => setIsOpen(false)}>
                  <LogoWithText />
                </Link>
                <Link href={"/"}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}>
                      Home
                  </Link>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="products">
                    <AccordionTrigger className="text-lg font-medium hover:text-primary">Products</AccordionTrigger>
                    <AccordionContent className="pl-2">
                      <ul className="space-y-2">
                        {productsItems.map((product) => (
                          <li key={product.title}>
                            <Link
                              href={product.href}
                              onClick={() => setIsOpen(false)}
                              className="text-muted-foreground hover:text-primary text-sm block"
                            >
                              {product.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <GetQuote />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm lg:text-base leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}