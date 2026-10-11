import type { Metadata } from "next"

// The page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Software Development Services in Chennai",
  description: "Custom software, web & mobile apps, AI & data, cloud, UI/UX design and system integration. One team from scoping to support, based in Chennai.",
  alternates: { canonical: "/services" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
