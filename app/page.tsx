"use client"

import Link from "next/link"
import { HeroBackdrop } from "@/components/page-sections"
import { WhatsAppIcon } from "@/components/brand-icons"
import { TechLogo, techColor } from "@/components/tech-logos"
import { site, whatsappLink } from "@/lib/site"
import { BotForgeChatDemo } from "@/components/botforge-chat-demo"
import { TypedPhrases } from "@/components/typed-phrases"
import { useEffect, useState, type CSSProperties, type ReactNode } from "react"
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Truck,
  HeartPulse,
  Factory,
  ShoppingCart,
  Landmark,
  Code2,
  BrainCircuit,
  HeartHandshake,
  MapPin,
  Rocket,
  Database,
  Workflow,
  FileSearch,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { products, statusStyles } from "@/lib/products"
import { inr, startupOffer, websitePlans, whatsappPlans } from "@/lib/pricing"

/* ===== DATA ===== */

const founded = "May 2024"

/** Only facts that are distinct and checkable. */
const facts = [
  { value: "50+", label: "projects delivered" },
  { value: "20+", label: "clients served" },
  { value: "10+", label: "people on the team" },
]

const techStack = [
  { category: "Frontend", tools: ["React", "Next.js", "Flutter"] },
  { category: "Backend", tools: ["Django", "Node.js", "Express"] },
  { category: "Database", tools: ["PostgreSQL", "MongoDB", "MySQL"] },
  { category: "DevOps", tools: ["Docker", "AWS", "CI/CD"] },
  { category: "AI", tools: ["OpenAI", "LangChain", "RAG"] },
]

/** CI/CD and RAG are methods, not brands, so they get neutral icons instead of a logo. */
const conceptIcons: Partial<Record<string, LucideIcon>> = { "CI/CD": Workflow, RAG: FileSearch }

const industries = [
  { name: "Education", icon: GraduationCap, text: "Admissions, fee payments and parent updates" },
  { name: "Logistics", icon: Truck, text: "Delivery tracking and driver apps" },
  { name: "Healthcare", icon: HeartPulse, text: "Appointment booking and patient reminders" },
  { name: "Manufacturing", icon: Factory, text: "Stock, orders and production tracking" },
  { name: "E-Commerce", icon: ShoppingCart, text: "Online stores with UPI payments" },
  { name: "Finance", icon: Landmark, text: "Customer portals and loan tracking" },
]

const processSteps = [
  { title: "Requirements", description: "A call in Tamil or English to map what you need and what it will cost." },
  { title: "Design", description: "Screens you can click through before any code is written." },
  { title: "Development", description: "Weekly builds you can try on your own phone." },
  { title: "Testing", description: "Checked on budget Android phones and slow networks, not just our laptops." },
  { title: "Launch", description: "Live on your domain, Google Play or both, with logins handed to you." },
  { title: "Support", description: "Fixes and updates after launch, a WhatsApp message away." },
]

const whyChooseUs = [
  { title: "Prices on the website", text: `Websites from ${inr(websitePlans[0].price)} and BotForge from ${inr(whatsappPlans[0].price)}/month. You know the cost before you call.` },
  { title: "Tamil & English", text: "Talk to us in the language you're comfortable with, from the first call to support." },
  { title: "Built for everyday phones", text: "Fast on budget Android phones and patchy 4G, where most of your customers are." },
  { title: "AI only where it saves time", text: "We automate the work that eats your hours, not features added for show." },
  { title: "One team, start to finish", text: "The people who design your project also build it and support it." },
  { title: "You own what we build", text: "Your domain, your app listing and your code, handed over at launch." },
]

/** Hero headline endings, one per pillar. */
const heroPhrases = ["earns, automates and gives back.", "grows your business.", "automates the busywork.", "builds apps for good.", "backs new founders."]

const startingPrices = [
  { href: "/website-design-cost", label: "Business website", price: inr(websitePlans[0].price), unit: "one-time", note: `Starter, Business & Pro, up to ${inr(websitePlans[2].price)}` },
  { href: "/whatsapp-bot", label: "WhatsApp bot", price: inr(whatsappPlans[0].price), unit: "per month", note: "BotForge · setup free on yearly plans" },
  { href: "/startup-offer", label: "Startup app build", price: `${startupOffer.minPct}–${startupOffer.maxPct}%`, unit: "off your first version", note: "Your app idea, built for less" },
]

/** The four pillars VelanDev is positioned on. Services fund the other three. */
const pillars = [
  {
    name: "Software services",
    image: "/images/pillar-services.webp",
    alt: "A shop owner managing an online saree store on a laptop at the counter of a busy textile shop",
    icon: Code2,
    summary: "Websites, web and mobile apps, and BotForge WhatsApp automation for businesses, at published starting prices.",
    points: [`Business websites from ${inr(websitePlans[0].price)}`, "Web & mobile apps built around your workflow", `BotForge WhatsApp bot from ${inr(whatsappPlans[0].price)}/month`],
    href: "/services",
    cta: "See our services",
  },
  {
    name: "AI automation",
    image: "/images/pillar-ai.webp",
    alt: "A developer's desk at night with code on one screen and an automation flow diagram on the other",
    icon: BrainCircuit,
    summary: "Custom AI automation and R&D. When an off-the-shelf tool doesn't fit your work, we research it and build it.",
    points: ["Custom AI agents & workflows", "Assistants trained on your own data", "R&D, prototypes & proofs of concept"],
    href: "/ai-solutions",
    cta: "See AI automation",
  },
  {
    name: "Social welfare",
    image: "/images/pillar-social.webp",
    alt: "A community health worker entering a record on a phone on the steps of a village health centre",
    icon: HeartHandshake,
    summary: "Web and mobile apps for social causes. We design them, build them and publish them.",
    points: ["Apps for NGOs, trusts & community groups", "Web and mobile, from idea to launch", "Published on Google Play & the web"],
    href: "/contact?service=social-welfare",
    cta: "Discuss a social project",
  },
  {
    name: "Startup support",
    image: "/images/pillar-startup.webp",
    alt: "A founder's table covered in hand-sketched app screens, sticky notes and building-material samples",
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

/** Left-aligned heading with the description on the right on desktop. */
function SplitHeading({ eyebrow, title, description, action, inView, id }: {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
  inView: boolean
  id?: string
}) {
  return (
    <div className={cn("grid gap-4 transition-all duration-700 lg:grid-cols-2 lg:items-end lg:gap-16", inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
      <div>
        <p className="text-sm font-semibold uppercase text-primary">{eyebrow}</p>
        <h2 id={id} className="mt-3 text-balance text-4xl font-bold text-foreground sm:text-5xl">{title}</h2>
      </div>
      {(description || action) && (
        <div className="max-w-md lg:justify-self-end">
          {description && <p className="text-pretty text-muted-foreground">{description}</p>}
          {action && <div className={cn(description && "mt-4")}>{action}</div>}
        </div>
      )}
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
        {/* City lights sit on the right, behind the glass price card; the left stays dark for the headline */}
        <HeroBackdrop name="home-hero" position="70% center" overlay="bg-gradient-to-t from-black via-black/75 to-black/45 lg:bg-gradient-to-r lg:from-black lg:via-black/55 lg:to-black/10" />
        <div className="relative w-full">
        <div ref={heroRef.ref} className="container mx-auto px-4 pb-14 pt-24 sm:pt-28 lg:pt-32">
          <div className="mx-auto grid max-w-6xl items-end gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className={cn("flex items-center gap-2 text-xs font-semibold uppercase text-purple-200 transition-all duration-700", reveal(heroRef.isInView))}>
                <MapPin className="h-4 w-4" aria-hidden />
                Chennai · Support in Tamil &amp; English
              </p>

              <h1 className={cn("mt-4 text-balance text-[2.5rem] font-extrabold leading-[1.02] text-white transition-all duration-700 delay-150 sm:text-6xl lg:text-7xl", reveal(heroRef.isInView))}>
                <span className="sr-only">Software that earns, automates and gives back.</span>
                {/* Visual version cycles through the four pillars; two lines reserved so nothing below jumps */}
                <span aria-hidden>
                  Software that
                  <TypedPhrases phrases={heroPhrases} className="min-h-[2.04em] text-purple-300" />
                </span>
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
                {facts[0].value} projects delivered since {founded}
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
      <div className="flex flex-col">
        {/* Four pillars: the positioning, straight after the hero */}
        <section ref={pillarsRef.ref} id="pillars" className="glow-right scroll-mt-16 px-4 py-16 sm:py-20 lg:py-28">
          <Panel>
            <SplitHeading
              inView={pillarsRef.isInView}
              eyebrow="What we do"
              title="Four pillars, one team"
              description="Our software services pay the bills. They also let us run AI research, build apps for social causes and back new founders."
            />

            <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3 lg:gap-5">
              {pillars.filter((p) => !p.featured).map((pillar, index) => {
                const lead = index === 0
                return (
                  <Link
                    key={pillar.name}
                    href={pillar.href}
                    className={cn(
                      "group relative isolate flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-3xl bg-black p-6 text-white transition-all duration-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 sm:p-8",
                      lead ? "lg:col-span-2 lg:row-span-2 lg:min-h-[41rem] lg:p-10" : "lg:min-h-[20rem]",
                      reveal(pillarsRef.isInView),
                    )}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- images are unoptimized */}
                    <img src={pillar.image} alt={pillar.alt} width={1200} height={900} loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
                    <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/5" />

                    <span className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md sm:left-8 sm:top-8">
                      <pillar.icon className="h-5 w-5" aria-hidden />
                    </span>

                    <h3 className={cn("font-bold", lead ? "text-3xl sm:text-4xl" : "text-2xl")}>{pillar.name}</h3>
                    <p className={cn("mt-2 max-w-xl text-pretty leading-relaxed text-white/80", !lead && "text-sm")}>{pillar.summary}</p>
                    {lead ? (
                      <ul className="mt-5 grid gap-2 sm:grid-cols-3 sm:gap-4">
                        {pillar.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 border-t border-white/20 pt-3 text-sm text-white/90">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-300" aria-hidden />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-200">
                      {pillar.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                )
              })}

              {/* Startup support: the one pillar with a price-like offer, so it gets the full-width band */}
              {pillars.filter((p) => p.featured).map((pillar) => (
                <div
                  key={pillar.name}
                  className={cn("grid overflow-hidden rounded-3xl border border-gold/50 bg-gold/10 transition-all duration-700 delay-200 lg:col-span-3 lg:grid-cols-[5fr_7fr]", reveal(pillarsRef.isInView))}
                >
                  <div className="relative aspect-[16/10] lg:aspect-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element -- images are unoptimized */}
                    <img src={pillar.image} alt={pillar.alt} width={1200} height={900} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase text-amber-700 dark:text-gold">
                      <pillar.icon className="h-4 w-4" aria-hidden />
                      {pillar.name}
                    </p>
                    <h3 className="mt-3 font-display text-5xl font-extrabold tabular-nums text-foreground sm:text-6xl">
                      {startupOffer.minPct}–{startupOffer.maxPct}% <span className="block text-2xl font-bold sm:text-3xl">off building your app idea</span>
                    </h3>
                    <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">{pillar.summary}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-gold" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={pillar.href}
                      className="group mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-gold px-6 font-semibold text-black transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
                    >
                      {pillar.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        {/* Company facts: one statement, three numbers */}
        <section ref={statsRef.ref} aria-labelledby="facts-title" className="glow-left px-4 py-16 sm:py-20 lg:py-28">
          <Panel>
            <div className={cn("grid gap-10 transition-all duration-700 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:gap-16", reveal(statsRef.isInView))}>
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase text-primary">
                  <MapPin className="h-4 w-4" aria-hidden />
                  Chennai · since {founded}
                </p>
                <h2 id="facts-title" className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">Small team, steady delivery</h2>
                <p className="mt-3 max-w-sm text-pretty text-muted-foreground">
                  One team in Sholinganallur designs, builds and supports everything we ship, in Tamil and English.
                </p>
              </div>

              <dl className="grid grid-cols-3 divide-x divide-border/60">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col-reverse px-3 first:pl-0 last:pr-0 sm:px-8">
                    <dt className="mt-2 text-xs text-muted-foreground sm:text-sm">{fact.label}</dt>
                    <dd className="font-display text-4xl font-extrabold tabular-nums text-foreground sm:text-6xl">
                      <AnimatedCounter value={fact.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Panel>
        </section>

        {/* Products */}
        <section ref={productsRef.ref} className="glow-right px-4 py-16 sm:py-20 lg:py-28">
          <Panel>
            <SectionHeading
              inView={productsRef.isInView}
              eyebrow="Our product"
              title="BotForge, our WhatsApp automation"
              action={<ArrowLink href="/whatsapp-bot">See BotForge plans</ArrowLink>}
            />

            <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 lg:grid-cols-[0.8fr_1fr] lg:gap-12">
              <figure className={cn("relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl shadow-primary/20 transition-all duration-700", reveal(productsRef.isInView))}>
                {/* eslint-disable-next-line @next/next/no-img-element -- images are unoptimized */}
                <img src="/images/botforge-phone.webp" alt="BotForge answering a customer's order on WhatsApp, on a phone held up at a busy Chennai tiffin counter" width={610} height={900} loading="lazy" decoding="async" className="h-auto w-full" />
                {/* Screen area of the photo, measured in percent of the image */}
                <BotForgeChatDemo className="absolute left-[30.9%] top-[16.6%] flex h-[60.4%] w-[38.8%] flex-col overflow-hidden rounded-[9%/4%] bg-[#efeae2] [container-type:inline-size]" />
              </figure>
              {products.map((product, index) => (
                <Link
                  key={product.slug}
                  href={product.href ?? `/products#${product.slug}`}
                  className={cn("surface-light group relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-2xl shadow-black/40 transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 sm:p-8", reveal(productsRef.isInView))}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                      <product.icon className="h-7 w-7" aria-hidden />
                    </div>
                    <Badge variant="outline" className={cn("text-xs font-medium", statusStyles[product.status], "dark:text-amber-800")}>{product.status}</Badge>
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

        {/* Technology stack: plain type, no chips */}
        <section ref={techRef.ref} className="glow-left px-4 py-16 sm:py-20 lg:py-28">
          <Panel>
            <SplitHeading
              inView={techRef.isInView}
              eyebrow="Technology stack"
              title="Tools we use every day"
              description="Widely used, well-supported technology, so what we build stays easy to maintain and hire for."
            />
            <dl className="mt-10 border-b border-border/60 sm:mt-12">
              {techStack.map((row, index) => (
                <div
                  key={row.category}
                  className={cn("grid gap-4 border-t border-border/60 py-6 transition-all duration-500 lg:grid-cols-[9rem_1fr] lg:items-center lg:gap-6", reveal(techRef.isInView))}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <dt className="text-xs font-semibold uppercase text-primary">{row.category}</dt>
                  <dd className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-[repeat(3,minmax(0,16rem))]">
                    {row.tools.map((tool) => {
                      const Concept = conceptIcons[tool]
                      // Concepts use the brand purple; logos use their brand colour; black-and-white brands follow the text colour
                      const color = Concept ? "#A78BFA" : techColor(tool)
                      return (
                        <span key={tool} className="flex min-w-0 items-center gap-2.5 font-display text-base font-semibold text-foreground sm:gap-3 sm:text-lg lg:text-2xl">
                          <span
                            className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border sm:h-11 sm:w-11",
                              color
                                ? "border-[color-mix(in_srgb,var(--brand)_35%,transparent)] bg-[color-mix(in_srgb,var(--brand)_14%,transparent)] text-[var(--brand)]"
                                : "border-border/60 bg-muted/40 text-foreground",
                            )}
                            style={color ? ({ "--brand": color } as CSSProperties) : undefined}
                          >
                            {Concept ? <Concept className="h-6 w-6" aria-hidden /> : <TechLogo name={tool} className="h-6 w-6" />}
                          </span>
                          {tool}
                        </span>
                      )
                    })}
                  </dd>
                </div>
              ))}
            </dl>
          </Panel>
        </section>

        {/* Process: one connected timeline, vertical on phones */}
        <section ref={processRef.ref} className="glow-right px-4 py-16 sm:py-20 lg:py-28">
          <Panel>
            <SplitHeading inView={processRef.isInView} eyebrow="Our process" title="How we work" description="Six steps from the first call to long-term support." />
            <ol className="relative mt-10 grid gap-8 sm:mt-12 lg:grid-cols-6 lg:gap-6">
              <span aria-hidden className="absolute bottom-5 left-5 top-5 w-px bg-border lg:bottom-auto lg:left-5 lg:right-5 lg:top-5 lg:h-px lg:w-auto" />
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className={cn("relative pl-16 transition-all duration-500 lg:pl-0", reveal(processRef.isInView))}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-sm font-semibold tabular-nums text-primary lg:static">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pt-2 font-semibold text-foreground lg:mt-5 lg:pt-0">{step.title}</h3>
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>
          </Panel>
        </section>

        {/* Industries: what we build for each, not just a name */}
        <section ref={industriesRef.ref} className="glow-left px-4 py-16 sm:py-20 lg:py-28">
          <Panel>
            <SplitHeading
              inView={industriesRef.isInView}
              eyebrow="Industries"
              title="Industries we serve"
              action={<ArrowLink href="/industries">See industry solutions</ArrowLink>}
            />
            <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <li
                  key={industry.name}
                  className={cn("surface-light flex items-start gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-black/30 transition-all duration-500", reveal(industriesRef.isInView))}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <industry.icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{industry.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{industry.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </section>

        {/* Why us: concrete reasons, heading pinned beside them on desktop */}
        <section ref={whyUsRef.ref} className="glow-right px-4 py-16 sm:py-20 lg:py-28">
          <Panel>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div className={cn("transition-all duration-700 lg:sticky lg:top-28 lg:self-start", reveal(whyUsRef.isInView))}>
                <p className="text-sm font-semibold uppercase text-primary">Why VelanDev</p>
                <h2 className="mt-3 text-balance text-4xl font-bold text-foreground sm:text-5xl">What working with us is like</h2>
                <p className="mt-4 max-w-sm text-pretty text-muted-foreground">Six things our clients can count on, whichever pillar their project falls under.</p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {whyChooseUs.map((item, index) => (
                  <li
                    key={item.title}
                    className={cn("surface-light rounded-2xl bg-white p-6 shadow-lg shadow-black/30 transition-all duration-500", reveal(whyUsRef.isInView))}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <h3 className="flex items-center gap-2 font-semibold text-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                      {item.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </section>

        {/* Closing CTA: the three real ways to reach us */}
        <section ref={ctaRef.ref} className="glow-left px-4 py-16 sm:py-20 lg:py-28">
          <Panel filled className="bg-gradient-to-br from-primary via-violet-700 to-purple-900">
            <div className={cn("grid gap-8 transition-all duration-700 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16", reveal(ctaRef.isInView))}>
              <div>
                <h2 className="text-balance text-4xl font-bold text-white sm:text-5xl">Have something to build?</h2>
                <p className="mt-4 max-w-xl text-pretty text-lg text-white/85">
                  Tell us about it on WhatsApp or through the form. We reply within 24 hours on working days, in Tamil or English.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button size="lg" variant="secondary" asChild className="group h-12 px-7 text-base active:scale-[0.98]">
                  <Link href="/contact">
                    Start your project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </Link>
                </Button>
                <Button size="lg" asChild className="h-12 bg-[#25D366] px-7 text-base text-black hover:bg-[#25D366]/90">
                  <a href={whatsappLink("Hi VelanDev! I'd like to discuss a project.")} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <a href={`tel:${site.phone}`} className="text-center text-sm font-medium text-white/85 underline-offset-4 hover:text-white hover:underline">
                  Or call +91 90426 55224
                </a>
              </div>
            </div>
          </Panel>
        </section>
      </div>
    </div>
  )
}
