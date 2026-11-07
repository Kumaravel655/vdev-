"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, type ReactNode } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Cloud,
  GraduationCap,
  Truck,
  HeartPulse,
  Factory,
  ShoppingCart,
  Landmark,
  Code2,
  Sparkles,
  Zap,
  Globe,
  Brain,
  Cpu,
  Network,
  BrainCircuit,
  HeartHandshake,
  Bot,
  Calendar,
  MapPin,
  Layers,
  Palette,
  TestTube,
  Rocket,
  Headphones,
  Database,
  Server,
  Container,
  Monitor,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { products, statusStyles } from "@/lib/products"
import { inr, startupOffer, websitePlans, whatsappPlans } from "@/lib/pricing"

/* ===== DATA ===== */

const trustIndicators = [
  { value: "50+", label: "Projects Delivered", icon: Sparkles },
  { value: "20+", label: "Happy Clients", icon: Users },
  { value: "10+", label: "Technologies", icon: Cpu },
  { value: "24/7", label: "AI-Powered Support", icon: Bot },
]

const companyStats = [
  { icon: Calendar, label: "Founded", value: "May 2024" },
  { icon: MapPin, label: "Headquarters", value: "Chennai, India" },
  { icon: Users, label: "Team Size", value: "10+" },
  { icon: Globe, label: "Clients Worldwide", value: "20+" },
]

const techStack = {
  frontend: [
    { name: "React", icon: Monitor },
    { name: "Next.js", icon: Globe },
    { name: "Flutter", icon: Layers },
  ],
  backend: [
    { name: "Django", icon: Server },
    { name: "Node.js", icon: Cpu },
    { name: "Express", icon: Zap },
  ],
  database: [
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
  ],
  devops: [
    { name: "Docker", icon: Container },
    { name: "AWS", icon: Cloud },
    { name: "CI/CD", icon: Rocket },
  ],
  ai: [
    { name: "OpenAI", icon: Brain },
    { name: "LangChain", icon: Network },
    { name: "RAG", icon: BrainCircuit },
  ],
}


const industries = [
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: Truck },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Manufacturing", icon: Factory },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Finance", icon: Landmark },
]

const processSteps = [
  { step: "01", title: "Requirement Gathering", description: "Deep-dive into your business needs", icon: Layers },
  { step: "02", title: "UI/UX Design", description: "Beautiful, intuitive interfaces", icon: Palette },
  { step: "03", title: "Development", description: "Clean, scalable code", icon: Code2 },
  { step: "04", title: "Testing", description: "Rigorous quality assurance", icon: TestTube },
  { step: "05", title: "Deployment", description: "Smooth launch to production", icon: Rocket },
  { step: "06", title: "Support", description: "Ongoing maintenance & updates", icon: Headphones },
]

const whyChooseUs = [
  "AI-first development approach",
  "Cutting-edge machine learning integration",
  "Scalable architecture design",
  "Real-time intelligent automation",
  "Dedicated engineering teams",
  "Continuous learning systems",
]

const startingPrices = [
  { href: "/website-design-cost", label: "Business website", price: inr(websitePlans[0].price), unit: "one-time", note: `Starter, Business & Pro, up to ${inr(websitePlans[2].price)}` },
  { href: "/whatsapp-bot", label: "WhatsApp bot", price: inr(whatsappPlans[0].price), unit: "per month", note: "BotForge · setup free on yearly plans" },
  { href: "/startup-offer", label: "Startup app build", price: `${startupOffer.minPct}–${startupOffer.maxPct}%`, unit: "off your first version", note: "Your app idea, built for less" },
]

/** The four pillars VelanDev is positioned on. Services fund the other three. */
const pillars = [
  {
    name: "Software services",
    icon: Code2,
    summary: "Websites, web and mobile apps, and BotForge WhatsApp automation for businesses, at published starting prices.",
    points: [`Business websites from ${inr(websitePlans[0].price)}`, "Web & mobile apps built around your workflow", `BotForge WhatsApp bot from ${inr(whatsappPlans[0].price)}/month`],
    href: "/services",
    cta: "See our services",
  },
  {
    name: "AI automation",
    icon: BrainCircuit,
    summary: "Custom AI automation and R&D. When an off-the-shelf tool doesn't fit your work, we research it and build it.",
    points: ["Custom AI agents & workflows", "Assistants trained on your own data", "R&D, prototypes & proofs of concept"],
    href: "/ai-solutions",
    cta: "See AI automation",
  },
  {
    name: "Social welfare",
    icon: HeartHandshake,
    summary: "Web and mobile apps for social causes. We design them, build them and publish them.",
    points: ["Apps for NGOs, trusts & community groups", "Web and mobile, from idea to launch", "Published on Google Play & the web"],
    href: "/contact?service=social-welfare",
    cta: "Discuss a social project",
  },
  {
    name: "Startup support",
    icon: Rocket,
    summary: "Have an idea for an app, like a marketplace for building materials? We build your first version for much less.",
    points: ["Design, development & Play Store launch", "Discount set in writing after an idea review", "You own the app and the code"],
    href: "/startup-offer",
    cta: "Apply with your idea",
    featured: true,
  },
]

/* ===== HOOKS ===== */


function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const { ref, isInView } = useInView()

  useEffect(() => {
    if (isInView) {
      // Only count up plain numbers like "50+" or "98%"; "24/7" and reduced-motion users get the final value.
      const match = value.match(/^(\d+)[+%]?$/)
      const numericValue = match ? parseInt(match[1]) : NaN
      if (isNaN(numericValue) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplayValue(value)
        return
      }
      const duration = 2000
      const steps = 60
      const increment = numericValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current).toString() + (value.includes("+") ? "+" : value.includes("%") ? "%" : ""))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return <span ref={ref}>{displayValue}</span>
}

/* ===== LAYOUT PIECES ===== */

/** Centered eyebrow + title, with optional description and link underneath. */
function SectionHeading({ eyebrow, title, description, action, inView, invert = false }: {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
  inView: boolean
  invert?: boolean
}) {
  return (
    <div className={cn("mx-auto flex max-w-2xl flex-col items-center text-center transition-all duration-700", inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
      <p className={cn("text-sm font-semibold uppercase", invert ? "text-purple-300" : "text-primary")}>{eyebrow}</p>
      <h2 className={cn("mt-3 text-balance text-3xl font-bold sm:text-4xl", invert ? "text-white" : "text-foreground")}>{title}</h2>
      {description && <p className={cn("mt-4 text-pretty", invert ? "text-white/75" : "text-muted-foreground")}>{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

/** Shared width for every home section below the hero. `filled` panels (image or gradient background) get rounded padding. */
function Panel({ children, className, background, filled = false }: {
  children: ReactNode
  className?: string
  background?: ReactNode
  filled?: boolean
}) {
  return (
    <div className={cn("relative mx-auto max-w-6xl", filled && "overflow-hidden rounded-3xl px-5 py-14 sm:px-10 lg:px-14 lg:py-20", className)}>
      {background}
      <div className="relative">{children}</div>
    </div>
  )
}

function ArrowLink({ href, children, invert = false }: { href: string; children: ReactNode; invert?: boolean }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-2 text-sm font-semibold", invert ? "text-white" : "text-primary")}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </Link>
  )
}

/* ===== PAGE ===== */


export default function HomePage() {
  const heroRef = useInView()
  const pillarsRef = useInView()
  const statsRef = useInView()
  const techRef = useInView()
  const productsRef = useInView()
  const industriesRef = useInView()
  const processRef = useInView()
  const whyUsRef = useInView()
  const ctaRef = useInView()

  const reveal = (inView: boolean) => (inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")

  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-black">
        <div aria-hidden className="pointer-events-none absolute inset-0 aurora-bg" />
        <div aria-hidden className="pointer-events-none absolute inset-0 neural-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        {/* Glow behind the price card so the glass has something to blur */}
        <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl lg:right-[8%] lg:top-1/3" />
        <div className="relative w-full">
        <div ref={heroRef.ref} className="container mx-auto px-4 pb-14 pt-24 sm:pt-28 lg:pt-32">
          <div className="mx-auto grid max-w-6xl items-end gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className={cn("flex items-center gap-2 text-xs font-semibold uppercase text-purple-200 transition-all duration-700", reveal(heroRef.isInView))}>
                <MapPin className="h-4 w-4" aria-hidden />
                Chennai · Support in Tamil &amp; English
              </p>

              <h1 className={cn("mt-4 text-balance text-[2.5rem] font-extrabold leading-[1.02] text-white transition-all duration-700 delay-150 sm:text-6xl lg:text-7xl", reveal(heroRef.isInView))}>
                Software that earns, automates <span className="text-purple-300">and gives back.</span>
              </h1>

              <p className={cn("mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/85 transition-all duration-700 delay-300 sm:text-lg", reveal(heroRef.isInView))}>
                Software services and custom AI automation for businesses, apps for social causes, and {startupOffer.minPct}–{startupOffer.maxPct}% off for founders building their first product.
              </p>

              <div className={cn("mt-7 flex gap-3 transition-all duration-700 delay-500 sm:mt-9", reveal(heroRef.isInView))}>
                <Button size="lg" asChild className="group h-12 flex-1 px-6 text-base shadow-xl shadow-primary/30 active:scale-[0.98] sm:flex-none">
                  <Link href="/contact">
                    Start your project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-12 flex-1 border-white/40 bg-white/5 px-6 text-base text-white hover:bg-white/15 hover:text-white active:scale-[0.98] sm:flex-none">
                  <Link href="/products">Products</Link>
                </Button>
              </div>

              <p className={cn("mt-5 hidden text-sm text-white/70 transition-all duration-700 delay-500 sm:block", reveal(heroRef.isInView))}>
                {trustIndicators[0].value} projects delivered since {companyStats[0].value}
              </p>
            </div>

            {/* Signature element: the starting prices people search for, on a glass rate card */}
            <div className={cn("rounded-3xl border border-white/15 bg-black/70 p-2 shadow-2xl shadow-black/40 transition-all duration-700 delay-700 supports-[backdrop-filter]:bg-white/10 supports-[backdrop-filter]:backdrop-blur-xl", reveal(heroRef.isInView))}>
              <p id="hero-prices" className="px-4 pb-1 pt-3 text-xs font-semibold uppercase text-white/70">Starting prices</p>
              {/* Phones: compact 3-across strip so the pinned stage fits one screen. Desktop: stacked rows with notes. */}
              <ul aria-labelledby="hero-prices" className="grid grid-cols-3 divide-x divide-white/10 lg:grid-cols-1 lg:divide-x-0 lg:divide-y">
                {startingPrices.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="group flex h-full flex-col gap-1 rounded-2xl px-3 py-3 outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-purple-300 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-4 lg:py-4">
                      <span className="min-w-0">
                        <span className="block text-xs font-medium text-white/80 sm:text-sm">{item.label}</span>
                        <span className="mt-0.5 hidden truncate text-xs text-white/60 lg:block">{item.note}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-3">
                        <span className="lg:text-right">
                          <span className="block font-display text-xl font-bold tabular-nums text-white sm:text-2xl lg:text-3xl">{item.price}</span>
                          <span className="block text-xs text-white/60">{item.unit}</span>
                        </span>
                        <ArrowRight className="hidden h-4 w-4 text-purple-300 transition-transform duration-300 group-hover:translate-x-1 lg:block" aria-hidden />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ===== SECTIONS ===== */}
      <div className="container mx-auto flex flex-col gap-20 px-4 py-16 sm:gap-24 lg:gap-32 lg:py-24">
        {/* Four pillars: the positioning, straight after the hero */}
        <section ref={pillarsRef.ref} id="pillars" className="scroll-mt-28">
          <Panel>
            <SectionHeading
              inView={pillarsRef.isInView}
              eyebrow="What we do"
              title="Four pillars, one team"
              description="Our software services pay the bills. They also let us run AI research, build apps for social causes and back new founders."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {pillars.map((pillar, index) => (
                <Link
                  key={pillar.name}
                  href={pillar.href}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 sm:p-8",
                    pillar.featured ? "border-gold/50 bg-gold/10 hover:border-gold" : "border-border/60 bg-card hover:border-primary/40",
                    reveal(pillarsRef.isInView),
                  )}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", pillar.featured ? "bg-gold text-black" : "bg-primary/10 text-primary")}>
                      <pillar.icon className="h-6 w-6" aria-hidden />
                    </div>
                    {pillar.featured && (
                      <span className="text-right font-display text-3xl font-extrabold tabular-nums text-amber-700 dark:text-gold sm:text-4xl">
                        {startupOffer.minPct}–{startupOffer.maxPct}%<span className="block text-xs font-semibold uppercase">off your build</span>
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">{pillar.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{pillar.summary}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", pillar.featured ? "text-amber-700 dark:text-gold" : "text-primary")} aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {pillar.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </Panel>
        </section>

        {/* Company stats */}
        <section ref={statsRef.ref} aria-label="Company facts">
          <Panel>
            <dl className="grid grid-cols-2 gap-6 border-b border-border/60 pb-8 text-center lg:grid-cols-4">
              {trustIndicators.map((item, index) => (
                <div key={item.label} className={cn("flex flex-col items-center transition-all duration-500", reveal(statsRef.isInView))} style={{ transitionDelay: `${index * 60}ms` }}>
                  <item.icon className="mb-3 h-6 w-6 text-primary" aria-hidden />
                  <dd className="text-3xl font-bold tabular-nums text-foreground sm:text-4xl">
                    <AnimatedCounter value={item.value} />
                  </dd>
                  <dt className="mt-1 text-sm text-muted-foreground">{item.label}</dt>
                </div>
              ))}
            </dl>
            <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {companyStats.map((stat, index) => (
                <div key={stat.label} className={cn("flex flex-col items-center gap-3 text-center transition-all duration-500 sm:flex-row sm:justify-center sm:text-left", reveal(statsRef.isInView))} style={{ transitionDelay: `${index * 60}ms` }}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" aria-hidden />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="font-semibold text-foreground">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        {/* Products */}
        <section ref={productsRef.ref}>
          <Panel>
            <SectionHeading
              inView={productsRef.isInView}
              eyebrow="Our product"
              title="BotForge, our WhatsApp automation"
              action={<ArrowLink href="/whatsapp-bot">See BotForge plans</ArrowLink>}
            />

            <div className="mx-auto mt-12 max-w-2xl">
              {products.map((product, index) => (
                <Link
                  key={product.slug}
                  href={product.href ?? `/products#${product.slug}`}
                  className={cn("group relative flex flex-col overflow-hidden rounded-3xl border border-primary/25 bg-card p-6 shadow-xl shadow-primary/5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 sm:p-8", reveal(productsRef.isInView))}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                      <product.icon className="h-7 w-7" aria-hidden />
                    </div>
                    <Badge variant="outline" className={cn("text-xs font-medium", statusStyles[product.status])}>{product.status}</Badge>
                  </div>
                  <h3 className="relative mt-6 text-2xl font-bold text-foreground">{product.title}</h3>
                  <p className="relative mt-3 flex-1 leading-relaxed text-muted-foreground">{product.description}</p>
                  <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>

          </Panel>
        </section>

        {/* Technology stack */}
        <section ref={techRef.ref}>
          <Panel
            filled
            background={
              <>
                <Image src="/tech_stack_bg.png" alt="" fill sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/75" />
              </>
            }
          >
            <SectionHeading inView={techRef.isInView} invert eyebrow="Technology stack" title="Technologies we work in every day" />

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {Object.entries(techStack).map(([category, techs], catIdx) => (
                <div key={category} className={cn("transition-all duration-500", reveal(techRef.isInView))} style={{ transitionDelay: `${catIdx * 60}ms` }}>
                  <h3 className="mb-4 border-b border-white/20 pb-2 text-xs font-bold uppercase text-white/70">{category === "ai" ? "AI" : category}</h3>
                  <ul className="space-y-3">
                    {techs.map((tech) => (
                      <li key={tech.name} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
                        <tech.icon className="h-4 w-4 shrink-0 text-purple-300" aria-hidden />
                        <span className="text-sm font-semibold text-white/90">{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        {/* Process */}
        <section ref={processRef.ref}>
          <Panel>
            <SectionHeading inView={processRef.isInView} eyebrow="Our process" title="How we work" description="Six steps from first call to long-term support." />

            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <li key={step.step} className={cn("rounded-2xl border border-border/60 bg-card p-6 transition-all duration-500", reveal(processRef.isInView))} style={{ transitionDelay: `${index * 60}ms` }}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-3xl font-bold tabular-nums text-primary">{step.step}</span>
                    <step.icon className="h-5 w-5 text-muted-foreground" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>
          </Panel>
        </section>

        {/* Industries */}
        <section ref={industriesRef.ref}>
          <Panel>
            <SectionHeading
              inView={industriesRef.isInView}
              eyebrow="Industries"
              title="Industries we serve"
              action={<ArrowLink href="/industries">See industry solutions</ArrowLink>}
            />

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {industries.map((industry, index) => (
                <div key={industry.name} className={cn("flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-6 text-center transition-all duration-500", reveal(industriesRef.isInView))} style={{ transitionDelay: `${index * 50}ms` }}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <industry.icon className="h-7 w-7 text-primary" aria-hidden />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{industry.name}</h3>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        {/* Why us */}
        <section ref={whyUsRef.ref}>
          <Panel>
            <SectionHeading
              inView={whyUsRef.isInView}
              eyebrow="Why choose us"
              title="AI-first development"
              description="We pair modern AI tools with a clear understanding of how your business runs, so automation removes real work instead of adding new screens."
            />

            <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => (
                <li key={item} className={cn("flex items-start gap-3 rounded-2xl border border-border/60 bg-card/60 p-4 transition-all duration-500", reveal(whyUsRef.isInView))} style={{ transitionDelay: `${index * 60}ms` }}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </section>

        {/* CTA */}
        <section ref={ctaRef.ref}>
          <Panel filled className="bg-gradient-to-br from-primary via-violet-700 to-purple-900 text-center">
            <div aria-hidden className="absolute -inset-20 circuit-pattern opacity-20" />
            <div className={cn("relative mx-auto max-w-2xl transition-all duration-700", reveal(ctaRef.isInView))}>
              <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Ready to put AI to work?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                Tell us what slows your team down. We&apos;ll show you what to automate first and what it will take.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" asChild className="group h-12 w-full px-7 text-base active:scale-[0.98] sm:w-auto">
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
          </Panel>
        </section>
      </div>
    </div>
  )
}
