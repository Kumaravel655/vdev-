"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Sparkles, Brain, Users, Building2, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

const projects = [
  { title: "BuildMart", category: "Construction Management", problem: "Construction companies struggled with manual tracking of project progress, budgets, and resource allocation across multiple sites.", solution: "Built a comprehensive digital platform for real-time project tracking, budget management, and resource allocation with mobile access for on-site teams.", technologies: ["React", "Django", "PostgreSQL", "Docker", "Redis"], results: [{ metric: "40%", label: "Efficiency Improvement" }, { metric: "3x", label: "Faster Reporting" }, { metric: "25%", label: "Cost Reduction" }], icon: Building2 },
  { title: "NGO Management System", category: "Nonprofit Technology", problem: "An NGO was managing donors, projects, and reporting through scattered spreadsheets, leading to data loss and inefficient operations.", solution: "Centralized platform for donor lifecycle management, project tracking, automated reporting, and transparency dashboards for stakeholders.", technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"], results: [{ metric: "3x", label: "Faster Reporting" }, { metric: "60%", label: "Time Saved on Admin" }, { metric: "100%", label: "Data Accuracy" }], icon: Users },
  { title: "HRMS Platform", category: "Human Resources", problem: "A growing company was drowning in manual HR processes — from recruitment tracking to payroll calculations — wasting hundreds of hours monthly.", solution: "End-to-end HR automation system covering recruitment, onboarding, attendance tracking, leave management, payroll processing, and performance evaluation.", technologies: ["React", "Django", "PostgreSQL", "Celery"], results: [{ metric: "60%", label: "Time Savings" }, { metric: "Zero", label: "Payroll Errors" }, { metric: "95%", label: "Satisfaction" }], icon: Users },
  { title: "Loan Management System", category: "Fintech", problem: "A financial institution processed loan applications on paper forms, causing delays, errors, and customer dissatisfaction.", solution: "Digital loan origination system with automated credit scoring, document verification, EMI calculation, and repayment tracking dashboards.", technologies: ["React", "Django", "PostgreSQL", "Redis", "Celery"], results: [{ metric: "50%", label: "Faster Processing" }, { metric: "80%", label: "Fewer Errors" }, { metric: "2x", label: "Capacity" }], icon: CreditCard },
  { title: "AI Document Processor", category: "AI / Automation", problem: "A legal firm spent thousands of hours annually reviewing and extracting data from contracts and legal documents manually.", solution: "AI-powered document analysis system using OpenAI and LangChain for intelligent extraction, classification, and summarization of legal documents.", technologies: ["Python", "OpenAI", "LangChain", "FastAPI", "React"], results: [{ metric: "90%", label: "Less Manual Review" }, { metric: "10x", label: "Faster" }, { metric: "99%", label: "Accuracy" }], icon: Brain },
]

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "15+", label: "Technologies Used" },
]

export default function PortfolioPage() {
  const heroRef = useInView()
  const statsRef = useInView()
  const projRef = useInView()

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute inset-0 neural-grid opacity-20" />
        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}><Sparkles className="mr-2 h-3.5 w-3.5" />Case Studies</Badge>
            <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>Our <span className="bg-gradient-to-r from-primary via-emerald-400 to-violet-400 bg-clip-text text-transparent">Portfolio</span></h1>
            <p className={cn("mt-6 text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>Real projects, real results. See how we have helped businesses transform with technology.</p>
          </div>
        </div>
      </section>

      <section ref={statsRef.ref} className="border-y border-border/50 bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={cn("text-center transition-all duration-500", statsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={projRef.ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {projects.map((p, i) => (
              <Card key={p.title} className={cn("overflow-hidden border border-border/50 bg-card shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5", projRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="grid gap-0 lg:grid-cols-5">
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10"><p.icon className="h-6 w-6 text-primary" /></div>
                      <div><h3 className="text-xl font-bold text-foreground">{p.title}</h3><Badge variant="outline" className="text-xs border-primary/20">{p.category}</Badge></div>
                    </div>
                    <div className="space-y-4 mt-6">
                      <div><h4 className="text-sm font-semibold text-destructive/80 uppercase tracking-wider">Problem</h4><p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.problem}</p></div>
                      <div><h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Solution</h4><p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.solution}</p></div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">{p.technologies.map((t) => (<Badge key={t} variant="secondary" className="text-xs">{t}</Badge>))}</div>
                  </div>
                  <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 via-muted/30 to-violet-500/5 p-8 lg:p-10 flex flex-col justify-center">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Results</h4>
                    <div className="space-y-6">{p.results.map((r) => (<div key={r.label}><div className="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">{r.metric}</div><div className="text-sm text-muted-foreground">{r.label}</div></div>))}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 animated-gradient opacity-95" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Have a Similar Project?</h2>
            <p className="mt-4 text-white/80">{"Let's discuss how we can deliver similar results for your business."}</p>
            <Button size="lg" variant="secondary" asChild className="mt-8 shadow-2xl transition-all duration-300 hover:scale-105"><Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
