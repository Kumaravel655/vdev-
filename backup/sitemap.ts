import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://velandev.in"

const routes = [
  "/",
  "/about",
  "/products",
  "/services",
  "/industries",
  "/careers",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }))
}