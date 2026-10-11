import type { Metadata } from "next"

// The page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Software Products — WhatsApp Bot, Accountant CRM, ERP & HR",
  description: "Ready-to-run software from VelanDev: BotForge WhatsApp bot (from ₹499/month), Accountant CRM for CA firms, ERP, College ERP, inventory, HR & payroll and CRM.",
  alternates: { canonical: "/products" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
