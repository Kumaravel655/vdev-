import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

// AI crawlers (GPTBot, PerplexityBot, Google-Extended, ClaudeBot…) are allowed on purpose: being quoted in AI answers is the goal.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
