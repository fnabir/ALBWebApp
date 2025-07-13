"use client"

import LogoWithText from "@/images/logo-text"
import Link from "next/link"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    {
      label: "Products",
      items: [
        {
          label: "Passenger Lift",
          href: "/passenger-lift",
        },
        {
          label: "Cargo Lift",
          href: "/cargo-lift",
        },
        {
          label: "Hospital Lift",
          href: "/hospital-lift",
        },
        {
          label: "Capsule Lift",
          href: "/capsule-lift",
        },
        {
          label: "Escalator",
          href: "/escalator",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          label: "About",
          href: "/about"
        },
        {
          label: "C&F Agent",
          href: "/ahsan-enterprise"
        },
        {
          label: "Contact",
          href: "/contact"
        },
        {
          label: "Terms of Use",
          href: "/terms-of-use"
        },
        {
          label: "Privacy Policy",
          href: "/privacy-policy"
        }
      ]
    }
  ]

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/asianliftbangladesh",
      icon: FaFacebookF,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/asian-lift-bangladesh",
      icon: FaLinkedinIn,
    },
    {
      label: "Youtube",
      href: "https://www.youtube.com/@asianliftbangladesh3262",
      icon: FaYoutube,
    },
  ]

  return (
    <footer className="flex justify-center border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <LogoWithText className="w-2/3"/>
            <p className="text-sm lg:text-base text-muted-foreground">
              Your trusted partner for premium elevator and lift solutions, ensuring safety, reliability, and expert service across Bangladesh.
            </p>
          </div>
          {links.map((section) => (
            <div key={section.label} className="lg:mx-auto lg:text-center space-y-4">
              <h3 className="lg:text-lg font-semibold mb-2">{section.label}</h3>
              <nav aria-label="Links">
                <ul className="space-y-2 text-sm lg:text-base">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
          <div className="space-y-4">
            <h3 className="lg:text-lg font-semibold mb-2">Contact Us</h3>
            <div className="space-y-2 text-sm lg:text-base">
                <a href="https://maps.app.goo.gl/hgSperUkHNgRsFdh8" className="text-muted-foreground hover:text-foreground flex items-center space-x-4" target="_blank">
                  <FaMapMarkerAlt className="w-5 h-5"/>
                  <div>Noor Mohal, Anandipur Gate, P.C. Road <br/> Halishahar, Chittagong-4224, Bangladesh</div>
                </a>
                <a href="mailto:contact@asianliftbd.com" className="text-muted-foreground hover:text-foreground flex items-center space-x-4" target="_blank">
                  <FaEnvelope className="w-5 h-5"/>
                  <div>contact@asianliftbd.com</div>
                </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm lg:text-base text-muted-foreground">© 2010-{currentYear} Asian Lift Bangladesh. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.label} 
                href={item.href}
                className="text-muted-foreground hover:text-foreground"
                aria-label={item.label}>
                <item.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
