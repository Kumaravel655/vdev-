import type { LucideIcon } from "lucide-react"
import { MessageCircle, Calculator, Building2, GraduationCap, Boxes, Users, BarChart3, Cloud, Receipt, Bike } from "lucide-react"

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

/** Newest first. Products with status "New" are featured on the home and products pages. */
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
  {
    slug: "billing-os",
    title: "Billing OS",
    description: "GST billing and POS for restaurants, shops, supermarkets, pharmacies and salons, priced per outlet per month.",
    category: "Billing & POS",
    status: "New",
    icon: Receipt,
    features: ["GST invoices & thermal printing", "KOT & table management", "Inventory & WhatsApp bills"],
    href: "/billing-software",
  },
  {
    slug: "accountant-crm",
    title: "Accountant CRM",
    description: "One place for CA firms and accounting practices to manage clients, GST and ITR deadlines, documents and fee collection.",
    category: "Finance",
    status: "New",
    icon: Calculator,
    features: ["Compliance due-date calendar", "Client document collection", "Fee & invoice tracking"],
  },
  {
    slug: "delivery-app",
    title: "Delivery App",
    description: "Your own customer app, delivery partner app and admin panel with live tracking, published on Google Play.",
    category: "Custom",
    status: "Live",
    icon: Bike,
    features: ["Customer & rider apps", "Live order tracking", "Admin dispatch panel"],
    href: "/delivery-app-development",
  },
  { slug: "erp", title: "ERP & Management Systems", description: "Enterprise resource planning that connects finance, operations and reporting in one system.", category: "Enterprise", status: "Live", icon: Building2, features: ["Multi-module integration", "Real-time analytics", "Custom workflows"] },
  { slug: "college-erp", title: "College / University ERP", description: "Academic management for colleges and universities: admissions, attendance, exams and results.", category: "Education", status: "Live", icon: GraduationCap, features: ["Student information system", "Online admissions", "Result management"] },
  { slug: "inventory", title: "Inventory & Import Export Management", description: "Inventory and logistics platform for import-export businesses, with shipment tracking.", category: "Logistics", status: "Live", icon: Boxes, features: ["Multi-warehouse support", "Shipment tracking", "Customs integration"] },
  { slug: "hr-payroll", title: "HR & Payroll Management", description: "Recruitment, onboarding, attendance and payroll in one HR system.", category: "HR Tech", status: "Live", icon: Users, features: ["Automated payroll", "Leave management", "Performance tracking"] },
  { slug: "crm", title: "CRM & Sales Automation", description: "Track leads, manage your sales pipeline and automate follow-ups.", category: "Sales", status: "Beta", icon: BarChart3, features: ["Lead scoring", "Pipeline management", "Email automation"] },
  { slug: "custom-saas", title: "Custom SaaS Products", description: "Software-as-a-service built around your own business requirements.", category: "Custom", status: "Coming Soon", icon: Cloud, features: ["Multi-tenant architecture", "API-first design", "White-label ready"] },
]

export const statusStyles: Record<ProductStatus, string> = {
  "New": "border-gold/40 bg-gold/15 text-amber-700 dark:text-gold",
  "Live": "border-primary/30 bg-primary/10 text-primary",
  "Beta": "border-violet-400/30 bg-violet-400/10 text-violet-700 dark:text-violet-300",
  "Coming Soon": "border-border bg-muted text-muted-foreground",
}
