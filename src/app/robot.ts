import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/static/", "/server-sitemap.xml"], 
    },
    sitemap: "https://asianliftbd.com/sitemap.xml",
  }
}