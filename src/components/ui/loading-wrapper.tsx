"use client"

import { useEffect, useState } from "react";
import Loading from "../loading";

export function LoadingWrapper() {
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

  return (
    <>
      {!showLoader && <Loading />}
    </>
  )
}