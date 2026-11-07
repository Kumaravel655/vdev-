"use client"

import dynamic from "next/dynamic"

const AIChatbot = dynamic(
  () => import("@/components/ai-chatbot").then((mod) => mod.AIChatbot),
  {
    ssr: false,
    loading: () => null,
  }
)

export function LazyAIChatbot() {
  return <AIChatbot />
}
