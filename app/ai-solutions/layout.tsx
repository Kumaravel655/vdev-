import type { Metadata } from "next"

// The page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "AI Solutions & Chatbots for Business",
  description: "AI chatbots, document automation, predictive analytics and custom AI agents built with OpenAI and LangChain for Indian businesses.",
  alternates: { canonical: "/ai-solutions" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
