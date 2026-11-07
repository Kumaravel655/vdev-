import type { LucideIcon } from "lucide-react"
import { MessageCircle } from "lucide-react"

export type ProductStatus = "New" | "Live" | "Beta" | "Coming Soon"

export type Product = {
  slug: string
  title: string
  description: string
  category: string
  status: ProductStatus
  icon: LucideIcon
  features: string[]
  href?: string // dedicated pricing/landing page, when one exists
}

/** VelanDev's own products. BotForge is the only one; everything else we build is a service (see the four pillars on the home page). */
export const products: Product[] = [
  {
    slug: "whatsapp-bot",
    title: "BotForge WhatsApp Bot Automation",
    description: "Answer customers on WhatsApp automatically: order updates, appointment reminders, lead capture and support replies, without a person on every chat.",
    category: "Automation",
    status: "New",
    icon: MessageCircle,
    features: ["Automated reply flows", "Broadcast campaigns", "Team inbox & handover"],
    href: "/whatsapp-bot",
  },
]

export const statusStyles: Record<ProductStatus, string> = {
  "New": "border-gold/40 bg-gold/15 text-amber-700 dark:text-gold",
  "Live": "border-primary/30 bg-primary/10 text-primary",
  "Beta": "border-violet-400/30 bg-violet-400/10 text-violet-700 dark:text-violet-300",
  "Coming Soon": "border-border bg-muted text-muted-foreground",
}
