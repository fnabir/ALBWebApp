import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://asianliftbd.com/#organization",
  name: "Asian Lift Bangladesh",
  url: "https://asianliftbd.com",
  logo: "https://asianliftbd.com/logo.png",
  image: "https://asianliftbd.com/og-image.jpg",
  description:
    "Leading elevator and lift company in Bangladesh, offering installation and maintenance services with skilled engineers and technicians.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Noor Mohal, Anandipur Gate, P.C. Road, Halishahar, Chittagong",
    addressLocality: "Chittagong",
    addressRegion: "Chittagong Division",
    postalCode: "4224",
    addressCountry: "BD",
  },
  telephone: "+8801613748836",
  areaServed: "BD",
  sameAs: [
    "https://www.facebook.com/asianliftbangladesh",
    "https://www.linkedin.com/company/asian-lift-bangladesh",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Asian Lift Bangladesh | Leading Elevator & Lift Company",
    template: "%s | Asian Lift Bangladesh",
  },
  description:
    "Asian Lift Bangladesh is a leading elevator and lift company in Bangladesh. We offer a wide range of elevators and provide expert installation and maintenance services with skilled engineers and technicians.",
  keywords:
    "asian lift, asian lift bangladesh, elevator company Bangladesh, lift company Bangladesh, elevator installation Bangladesh, lift maintenance Bangladesh, Chittagong lift, CEPZ lift",
  alternates: {
    canonical: "https://asianliftbd.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION_CODE",
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://asianliftbd.com",
    title: "Asian Lift Bangladesh | Leading Elevator & Lift Company",
    description:
      "Your trusted partner for expert elevator & lift installation, maintenance, and a wide range of vertical transport solutions across Bangladesh.",
    siteName: "Asian Lift Bangladesh",
    images: [
      {
        url: "https://asianliftbd.com/og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Asian Lift Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asian Lift Bangladesh | Leading Elevator & Lift Company",
    description:
      "Your trusted partner for expert elevator & lift installation, maintenance, and a wide range of vertical transport solutions across Bangladesh.",
    images: ["https://asianliftbd.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-BD" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Script
          src={`https://www.google.com/recaptcha/api.js`}
          strategy="afterInteractive"
        />
      </head>
      <body className={`${openSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
