import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asian Lift Bangladesh | Leading Elevator & Lift Company",
  description: 
    "Asian Lift Bangladesh is a leading elevator and lift company in Bangladesh. We offer a wide range of elevators and provide expert installation and maintenance services with skilled engineers and technicians.",
  keywords: "asian lift, asian lift bangladesh, elevator company Bangladesh, lift company Bangladesh, elevator installation Bangladesh, lift maintenance Bangladesh, Chittagong lift, CEPZ lift",
  alternates: {
    canonical: "https://asianliftbd.com/",
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
    description: "Your trusted partner for expert elevator & lift installation, maintenance, and a wide range of vertical transport solutions across Bangladesh.",
    images: ["https://asianliftbd.com/og-image.jpg"],
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-BD" suppressHydrationWarning>
      <head>
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
