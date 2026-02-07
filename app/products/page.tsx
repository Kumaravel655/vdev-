import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Boxes,
  Users,
  BarChart3,
  Cloud,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Products - VelanDev",
  description: "Explore VelanDev's enterprise software products including ERP systems, inventory management, HR platforms, and custom SaaS solutions.",
}

const products = [
  {
    title: "ERP & Management Systems",
    description: "Comprehensive enterprise resource planning solutions that integrate all facets of your business operations. Manage finance, HR, inventory, and operations from a single unified platform.",
    category: "Enterprise",
    icon: Building2,
    features: ["Multi-module integration", "Real-time analytics", "Custom workflows"],
  },
  {
    title: "College / University ERP",
    description: "Complete academic management system designed for educational institutions. Handles admissions, attendance, examinations, fee management, and student lifecycle tracking.",
    category: "Education",
    icon: GraduationCap,
    features: ["Student information system", "Online admissions", "Result management"],
  },
  {
    title: "Inventory & Import Export Management",
    description: "Smart inventory and logistics platform built for import-export businesses. Track shipments, manage customs documentation, and optimize supply chain operations.",
    category: "Logistics",
    icon: Boxes,
    features: ["Multi-warehouse support", "Shipment tracking", "Customs integration"],
  },
  {
    title: "HR & Payroll Management",
    description: "End-to-end human resource management solution covering recruitment, onboarding, attendance, payroll processing, and performance evaluation.",
    category: "HR Tech",
    icon: Users,
    features: ["Automated payroll", "Leave management", "Performance tracking"],
  },
  {
    title: "CRM & Sales Automation",
    description: "Customer relationship management platform that streamlines sales processes, tracks leads, and automates customer engagement workflows.",
    category: "Sales",
    icon: BarChart3,
    features: ["Lead scoring", "Pipeline management", "Email automation"],
  },
  {
    title: "Custom SaaS Products",
    description: "Bespoke software-as-a-service solutions tailored to your unique business requirements. Built with modern architecture for scalability and performance.",
    category: "Custom",
    icon: Cloud,
    features: ["Multi-tenant architecture", "API-first design", "White-label ready"],
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Software Products
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Enterprise-grade software products designed to transform your business operations
              with modern technology and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.title}
                className="group flex flex-col border bg-card transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <CardTitle className="mt-4 text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1 text-sm leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <div className="mt-6 space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-6 w-full bg-transparent" asChild>
                    <Link href="/contact">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Need a Custom Product?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We can build tailored software products that perfectly match your business requirements.
            </p>
            <Button size="lg" asChild className="mt-8">
              <Link href="/contact">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
