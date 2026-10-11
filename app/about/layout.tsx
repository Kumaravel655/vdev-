import type { Metadata } from "next"

// The page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "About VelanDev — Software Company in Chennai",
  description: "VelanDev is a Chennai-based product and services IT company founded in May 2024, building websites, WhatsApp automation, ERP and AI solutions.",
  alternates: { canonical: "/about" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
