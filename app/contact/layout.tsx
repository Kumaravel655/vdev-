import type { Metadata } from "next"

// The page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact Us — Free Quote for Websites, WhatsApp Bots & Software",
  alternates: { canonical: "/contact" },
  description: "Get in touch with VelanDev for your software development needs. Request a free quote, book a consultation, or discuss your project requirements.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
