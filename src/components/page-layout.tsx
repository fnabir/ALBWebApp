"use client"

import { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Loading from "./loading";
import ClickToAction from "./cta";

export default function PageLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const [showLoader, setShowLoader] = useState(true);
    
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setShowLoader(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (showLoader) return <Loading />
  return(
    <>
      <Navbar />
      {children}
      <ClickToAction />
      <Footer />
    </>
  )
}