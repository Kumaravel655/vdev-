import type { Metadata } from "next"

// The page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Industries We Serve — Education, Logistics, Healthcare & More",
  description: "Software, websites and WhatsApp automation for education, logistics, healthcare, manufacturing, e-commerce and finance businesses.",
  alternates: { canonical: "/industries" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
