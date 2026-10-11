import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

// Money pages first: these are the ones we want ranking for price searches.
const routes: [path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly"][] = [
  ["/", 1, "weekly"],
  ["/whatsapp-bot", 0.9, "weekly"],
  ["/website-design-cost", 0.9, "weekly"],
  ["/offers", 0.9, "weekly"],
  ["/startup-offer", 0.9, "weekly"],
  ["/billing-software", 0.9, "weekly"],
  ["/restaurant-billing-software", 0.9, "weekly"],
  ["/delivery-app-development", 0.8, "monthly"],
  ["/pricing", 0.8, "monthly"],
  ["/products", 0.8, "monthly"],
  ["/services", 0.8, "monthly"],
  ["/ai-solutions", 0.6, "monthly"],
  ["/industries", 0.6, "monthly"],
  ["/about", 0.5, "monthly"],
  ["/contact", 0.7, "monthly"],
  ["/careers", 0.4, "monthly"],
  ["/privacy", 0.2, "yearly"],
  ["/terms", 0.2, "yearly"],
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(([path, priority, changeFrequency]) => ({ url: `${site.url}${path}`, lastModified, changeFrequency, priority }))
}
