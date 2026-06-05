"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, GraduationCap, Truck, HeartPulse, Factory, ShoppingCart, Landmark, Building, Building2, HardHat, Heart, Sparkles } from "lucide-react"
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

const industries = [
  { title: "Education", description: "Comprehensive digital solutions for schools, colleges, and universities.", icon: GraduationCap, solutions: ["Learning Management Systems", "Student Information Systems", "Online Examination Platforms", "Fee Management Systems"] },
  { title: "Logistics & Import Export", description: "Streamline your supply chain with intelligent logistics solutions.", icon: Truck, solutions: ["Warehouse Management", "Shipment Tracking", "Customs Documentation", "Supply Chain Analytics"] },
  { title: "Healthcare", description: "Digital health solutions that improve patient care and operational efficiency.", icon: HeartPulse, solutions: ["Hospital Management Systems", "Electronic Health Records", "Telemedicine Platforms", "Patient Portals"] },
  { title: "Manufacturing", description: "Industry 4.0 solutions for modern manufacturing operations.", icon: Factory, solutions: ["Production Planning", "Quality Management", "Equipment Monitoring", "Inventory Control"] },
  { title: "Retail & E-Commerce", description: "Omnichannel retail solutions connecting online and offline experiences.", icon: ShoppingCart, solutions: ["E-commerce Platforms", "POS Systems", "Inventory Management", "Customer Loyalty Programs"] },
  { title: "Finance", description: "Secure, compliant financial technology solutions.", icon: Landmark, solutions: ["Banking Systems", "Payment Gateways", "Risk Management", "Regulatory Compliance"] },
  { title: "Real Estate", description: "Property management and listing platforms for the real estate industry.", icon: Building2, solutions: ["Property Listings", "CRM for Agents", "Virtual Tours", "Tenant Management"] },
  { title: "Construction", description: "Project management and estimation tools for construction businesses.", icon: HardHat, solutions: ["Project Tracking", "Cost Estimation", "Resource Planning", "Safety Compliance"] },
  { title: "Government & NGOs", description: "Citizen-centric digital government and nonprofit management solutions.", icon: Heart, solutions: ["Citizen Portals", "Donor Management", "Grant Management", "Public Service Delivery"] },
]

export default function IndustriesPage() {
  const heroRef = useInView()
  const gridRef = useInView()

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
                <Building className="mr-2 h-3.5 w-3.5" />
                Industry Expertise
              </Badge>
              <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                Industries <span className="bg-gradient-to-r from-primary via-emerald-400 to-violet-400 bg-clip-text text-transparent">We Serve</span>
              </h1>
              <p className={cn("mt-6 text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg lg:max-w-xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                Deep domain expertise across diverse industries, delivering solutions that address sector-specific challenges.
              </p>
              <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-500 justify-center lg:justify-start", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <Button size="lg" asChild className="ai-glow"><Link href="/contact">Discuss Your Industry <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>

            <div className={cn("transition-all duration-1000 delay-300", heroRef.isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0")}>
              <div className="relative mx-auto h-80 w-80 xl:h-96 xl:w-96">
                <div className="absolute inset-0 animate-pulse-soft rounded-3xl bg-gradient-to-br from-primary/20 via-violet-500/10 to-emerald-400/20 blur-2xl" />
                <div className="absolute -inset-4 animate-rotate-slow rounded-full border border-primary/10" style={{ animationDuration: "25s" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                </div>
                <div className="absolute -inset-8 animate-rotate-slow rounded-full border border-violet-500/8" style={{ animationDuration: "35s", animationDirection: "reverse" }}>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
                </div>
                <div className="relative h-full w-full animate-float overflow-hidden rounded-3xl border border-primary/20 ai-glow-intense">
                  <video src="/industries-hero.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
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
            {industries.map((industry, i) => (
              <Card key={industry.title} className={cn("group flex flex-col border border-border/50 bg-card shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5", gridRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")} style={{ transitionDelay: `${i * 80}ms` }}>
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                    <industry.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="text-sm leading-relaxed">{industry.description}</CardDescription>
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-foreground">Key Solutions</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.solutions.map((solution) => (
                        <Badge key={solution} variant="secondary" className="text-xs border-border/50">{solution}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 animated-gradient opacity-95" />
        <div className="absolute inset-0 circuit-pattern opacity-15" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{"Don't See Your Industry?"}</h2>
            <p className="mt-4 text-white/80">We have experience across many more sectors. Contact us to discuss your needs.</p>
            <Button size="lg" variant="secondary" asChild className="mt-8 shadow-2xl transition-all duration-300 hover:scale-105">
              <Link href="/contact">Discuss Your Industry <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
