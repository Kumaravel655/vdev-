import type { Metadata } from "next"

// The page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "BotForge WhatsApp Bot - VelanDev's Product",
  description: "BotForge, VelanDev's WhatsApp automation: auto-replies, lead capture, broadcasts and team inbox, from ₹499/month.",
  alternates: { canonical: "/products" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
