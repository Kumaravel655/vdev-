"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Building2, GraduationCap, Boxes, Users, BarChart3, Cloud, Cpu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, isInView }
}

const products = [
  { title: "ERP & Management Systems", description: "Comprehensive enterprise resource planning solutions that integrate all facets of your business operations.", category: "Enterprise", status: "Live", icon: Building2, features: ["Multi-module integration", "Real-time analytics", "Custom workflows"] },
  { title: "College / University ERP", description: "Complete academic management system designed for educational institutions with admissions, attendance, and exams.", category: "Education", status: "Live", icon: GraduationCap, features: ["Student information system", "Online admissions", "Result management"] },
  { title: "Inventory & Import Export Management", description: "Smart inventory and logistics platform built for import-export businesses with shipment tracking.", category: "Logistics", status: "Live", icon: Boxes, features: ["Multi-warehouse support", "Shipment tracking", "Customs integration"] },
  { title: "HR & Payroll Management", description: "End-to-end human resource management covering recruitment, onboarding, attendance, and payroll.", category: "HR Tech", status: "Live", icon: Users, features: ["Automated payroll", "Leave management", "Performance tracking"] },
  { title: "CRM & Sales Automation", description: "Customer relationship management that streamlines sales processes, tracks leads, and automates engagement.", category: "Sales", status: "Beta", icon: BarChart3, features: ["Lead scoring", "Pipeline management", "Email automation"] },
  { title: "Custom SaaS Products", description: "Bespoke software-as-a-service solutions tailored to your unique business requirements.", category: "Custom", status: "Coming Soon", icon: Cloud, features: ["Multi-tenant architecture", "API-first design", "White-label ready"] },
]

const statusColors: Record<string, string> = {
  "Live": "border-primary/30 bg-primary/10 text-primary",
  "Beta": "border-violet-500/30 bg-violet-500/10 text-violet-400",
  "Coming Soon": "border-gold/30 bg-gold/10 text-gold",
}

export default function ProductsPage() {
  const heroRef = useInView()
  const gridRef = useInView()

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute inset-0 neural-grid opacity-20" />
        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
                <Cpu className="mr-2 h-3.5 w-3.5" />
                Software Products
              </Badge>
              <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                Our <span className="bg-gradient-to-r from-primary via-emerald-400 to-violet-400 bg-clip-text text-transparent">Products</span>
              </h1>
              <p className={cn("mt-6 text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg lg:max-w-xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                Enterprise-grade software products designed to transform your business operations with modern technology.
              </p>
              <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-500 justify-center lg:justify-start", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <Button size="lg" asChild className="ai-glow"><Link href="/contact">Request a Demo <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>

            <div className={cn("transition-all duration-1000 delay-300", heroRef.isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0")}>
              <div className="relative mx-auto h-80 w-80 xl:h-96 xl:w-96">
                <div className="absolute inset-0 animate-pulse-soft rounded-3xl bg-gradient-to-br from-primary/20 via-violet-500/10 to-emerald-400/20 blur-2xl" />
                <div className="absolute -inset-4 animate-rotate-slow rounded-full border border-primary/10" style={{ animationDuration: "22s" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                </div>
                <div className="absolute -inset-8 animate-rotate-slow rounded-full border border-violet-500/8" style={{ animationDuration: "30s", animationDirection: "reverse" }}>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
                </div>
                <div className="relative h-full w-full animate-float overflow-hidden rounded-3xl border border-primary/20 ai-glow-intense">
                  <video src="/products-hero.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={gridRef.ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Card key={product.title} className={cn("group flex flex-col border border-border/50 bg-card shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5", gridRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")} style={{ transitionDelay: `${i * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                      <product.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">{product.category}</Badge>
                      <Badge variant="outline" className={cn("text-xs", statusColors[product.status])}>{product.status}</Badge>
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1 text-sm leading-relaxed">{product.description}</CardDescription>
                  <div className="mt-6 space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2">
                    <Button variant="outline" className="flex-1 bg-transparent border-primary/30 hover:bg-primary/10 hover:border-primary" asChild>
                      <Link href="/contact">Request Demo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Need a Custom Product?</h2>
            <p className="mt-4 text-muted-foreground">We can build tailored software products that perfectly match your business requirements.</p>
            <Button size="lg" asChild className="mt-8 ai-glow">
              <Link href="/contact">Discuss Your Requirements <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
