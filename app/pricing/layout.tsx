import type { Metadata } from "next"
import { inr, priceRanges, websitePlans, whatsappPlans } from "@/lib/pricing"

// The page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: `Pricing — Websites from ${inr(websitePlans[0].price)}, WhatsApp Bots from ${inr(whatsappPlans[0].price)}/month`,
  description: `Transparent prices: websites from ${inr(websitePlans[0].price)}, WhatsApp bots from ${inr(whatsappPlans[0].price)}/month, e-commerce ${inr(priceRanges.ecommerce.from)}–${inr(priceRanges.ecommerce.to)}, CRM from ${inr(priceRanges.crm.from)}/month, school software from ${inr(priceRanges.school.from)}/student/month and custom software from ${inr(priceRanges.custom.from)}.`,
  alternates: { canonical: "/pricing" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
