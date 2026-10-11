"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Code2, Globe, Brain, Cloud, Palette, Link2, Check, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { HeroMedia } from "@/components/hero-media"

type Service = { slug: string; title: string; description: string; icon: LucideIcon; highlights: string[] }

const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    description: "Software built around how your team already works. We map the workflow, build in short cycles and hand over code your team can maintain.",
    icon: Code2,
    highlights: ["Enterprise architecture", "Agile delivery", "QA automation"],
  },
  {
    slug: "web-mobile",
    title: "Web & Mobile Applications",
    description: "Web apps and native or cross-platform mobile apps that load fast on everyday phones and keep up as your users grow.",
    icon: Globe,
    highlights: ["Progressive web apps", "iOS & Android native", "React Native / Flutter"],
  },
  {
    slug: "ai-data",
    title: "AI & Data Solutions",
    description: "Put your data to work with predictive models, machine learning and language processing that take repetitive decisions off your team.",
    icon: Brain,
    highlights: ["Predictive analytics", "NLP integration", "Custom ML models"],
  },
  {
    slug: "cloud",
    title: "Cloud & Infrastructure",
    description: "Move to the cloud, or tidy up what already runs there. We migrate, optimise and secure workloads on AWS, Azure and GCP.",
    icon: Cloud,
    highlights: ["Cloud migration", "DevOps & CI/CD", "Infrastructure as code"],
  },
  {
    slug: "design",
    title: "UI/UX & Product Design",
    description: "Interfaces shaped by user research, so people find what they need and finish what they started.",
    icon: Palette,
    highlights: ["User research", "Rapid prototyping", "Design systems"],
  },
  {
    slug: "integration",
    title: "System Integration",
    description: "Connect the tools you already use. We build APIs and middleware so data moves between systems without re-typing.",
    icon: Link2,
    highlights: ["API development", "Legacy modernisation", "Middleware"],
  },
]

export default function ServicesPage() {
  const heroRef = useInView()
  const gridRef = useInView()
  const ctaRef = useInView()

  const reveal = (inView: boolean) => (inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
                <Layers className="mr-2 h-3.5 w-3.5" aria-hidden />
                Services
              </Badge>
              <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl lg:text-6xl", reveal(heroRef.isInView))}>
                Software services, <span className="text-primary">end to end</span>
              </h1>
              <p className={cn("mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg lg:mx-0", reveal(heroRef.isInView))}>
                Custom software, apps, AI, cloud, design and integration. One team takes your project from scoping to launch and keeps supporting it after.
              </p>
              <div className={cn("mt-8 flex flex-col justify-center gap-3 transition-all duration-700 delay-500 sm:flex-row lg:justify-start", reveal(heroRef.isInView))}>
                <Button size="lg" asChild>
                  <Link href="/contact">Discuss your project <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="#services">See all services</Link>
                </Button>
              </div>
            </div>

            <div className={cn("transition-all duration-1000 delay-300", reveal(heroRef.isInView))}>
              <HeroMedia src="/services-hero.mp4" label="Animated code panels" />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" ref={gridRef.ref} className="scroll-mt-28 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className={cn("mx-auto max-w-2xl text-center transition-all duration-700", reveal(gridRef.isInView))}>
              <p className="text-sm font-semibold uppercase text-primary">What we do</p>
              <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">Six services, one team</h2>
              <p className="mt-4 text-pretty text-muted-foreground">Pick one, or combine them. Most projects use two or three.</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.slug}
                  id={service.slug}
                  className={cn(
                    "group flex scroll-mt-28 flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-7",
                    reveal(gridRef.isInView)
                  )}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                      <service.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" aria-hidden />
                    </div>
                    <span className="text-sm font-semibold tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-5 flex-1 space-y-2 border-t border-border/60 pt-5">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Discuss this service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — same gradient panel as the home page */}
      <section ref={ctaRef.ref} className="px-4 pb-20 lg:pb-28">
        <div className={cn("relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-violet-700 to-purple-900 px-6 py-16 text-center sm:px-12 lg:py-20 transition-all duration-700", reveal(ctaRef.isInView))}>
          <div aria-hidden className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Ready to build?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
              Tell us what you need. We&apos;ll come back with a scope, a timeline and the team to deliver it.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" asChild className="group h-12 w-full px-7 text-base sm:w-auto">
                <Link href="/contact">
                  Talk to our team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 w-full border-white/40 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white sm:w-auto">
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
