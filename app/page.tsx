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
  Bot,
  Star,
  Quote,
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
import { ScrollFrames } from "@/components/scroll-frames"
import { products, statusStyles } from "@/lib/products"
import { billingPlans, inr, startupOffer, websitePlans, whatsappPlans } from "@/lib/pricing"

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


const services = [
  { name: "AI & Machine Learning", icon: Brain },
  { name: "Custom Software Development", icon: Code2 },
  { name: "Web Application Development", icon: Globe },
  { name: "Mobile App Development", icon: Zap },
  { name: "Cloud & DevOps Services", icon: Cloud },
  { name: "UI/UX Design", icon: Palette },
]

const industries = [
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: Truck },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Manufacturing", icon: Factory },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Finance", icon: Landmark },
]

const testimonials = [
  {
    name: "Arun Kumar",
    company: "TechStart Solutions",
    text: "VelanDev transformed our business operations with a custom ERP solution. Their team's expertise in AI integration gave us a competitive edge we never thought possible.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "EduConnect Academy",
    text: "The college management system VelanDev built for us is outstanding. Student enrollment, attendance, and exam management are now completely automated.",
    rating: 5,
  },
  {
    name: "Rajesh Nair",
    company: "GreenLogix",
    text: "Their supply chain platform reduced our operational costs by 35%. The real-time tracking and AI predictions are game-changers for our logistics business.",
    rating: 5,
  },
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

/* ===== HOOKS ===== */


function TypewriterEffect({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrentText(words[0])
      return
    }
    const word = words[currentWordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1))
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1))
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 75 : 40) // Typed slightly slower, deleted faster for corporate feel

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a))

  // Invisible longest word reserves the final height so the hero never jumps while typing.
  return (
    <span className="grid">
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden className="invisible col-start-1 row-start-1">{longest}</span>
      <span aria-hidden className="col-start-1 row-start-1 text-purple-300">
        {currentText}
        <span className="ml-[2px] inline-block h-[0.9em] w-[3px] animate-pulse bg-white align-middle" />
      </span>
    </span>
  )
}

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

const featuredProducts = products.filter((p) => p.status === "New")
const moreProducts = products.filter((p) => p.status !== "New").slice(0, 4)

export default function HomePage() {
  const heroRef = useInView()
  const statsRef = useInView()
  const techRef = useInView()
  const productsRef = useInView()
  const servicesRef = useInView()
  const industriesRef = useInView()
  const testimonialsRef = useInView()
  const processRef = useInView()
  const whyUsRef = useInView()
  const ctaRef = useInView()

  const reveal = (inView: boolean) => (inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")

  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <ScrollFrames
        overlay={
          <>
            {/* Scrim keeps headline contrast readable over any frame */}
            <div aria-hidden className="absolute inset-0 bg-black/60" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
          </>
        }
      >
        <div ref={heroRef.ref} className="container mx-auto px-4 pb-16 pt-28 lg:pt-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
                <Badge variant="outline" className={cn("mb-6 border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
                  <BrainCircuit className="mr-2 h-4 w-4 text-purple-300" aria-hidden />
                  AI-powered software · Chennai
                </Badge>

                <h1 className={cn("text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white transition-all duration-700 delay-150 sm:text-6xl lg:text-7xl", reveal(heroRef.isInView))}>
                  Building the future with
                  <TypewriterEffect words={["Artificial Intelligence.", "Machine Learning.", "Automation.", "Intelligent Systems."]} />
                </h1>

                <p className={cn("mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85 transition-all duration-700 delay-300", reveal(heroRef.isInView))}>
                  VelanDev builds software products and custom platforms with AI and automation built in, for businesses ready to move off spreadsheets and manual work.
                </p>

                <div className={cn("mt-10 flex flex-col items-center justify-center gap-3 transition-all duration-700 delay-500 sm:flex-row", reveal(heroRef.isInView))}>
                  <Button size="lg" asChild className="group h-12 w-full px-7 text-base shadow-xl shadow-primary/30 active:scale-[0.98] sm:w-auto">
                    <Link href="/contact">
                      Start your project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 w-full border-white/40 bg-white/5 px-7 sm:w-auto text-base text-white backdrop-blur-sm hover:bg-white/15 hover:text-white active:scale-[0.98]">
                    <Link href="/products">See our products</Link>
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </ScrollFrames>

      {/* ===== SECTIONS ===== */}
      <div className="container mx-auto flex flex-col gap-20 px-4 py-16 sm:gap-24 lg:gap-32 lg:py-24">
        {/* Price band + startup strip: the starting prices people search for, straight after the hero */}
        <div className="flex flex-col gap-4">
          <section aria-label="Starting prices" className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-3">
            {[
              { href: "/website-design-cost", label: "Business websites", price: inr(websitePlans[0].price), unit: "one-time", note: `Starter, Business & Pro plans up to ${inr(websitePlans[2].price)}` },
              { href: "/whatsapp-bot", label: "WhatsApp bot", price: inr(whatsappPlans[0].price), unit: "/month", note: "BotForge · setup free on yearly plans" },
              { href: "/billing-software", label: "Billing software", price: inr(billingPlans[0].price), unit: "/outlet/month", note: "Billing OS · restaurants, shops & more" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group flex items-center justify-between gap-4 rounded-3xl border border-primary/25 bg-card p-6 transition-colors hover:border-primary/60 sm:p-8">
                <span>
                  <span className="block text-sm font-semibold uppercase text-primary">{item.label} from</span>
                  <span className="mt-1 block text-4xl font-bold tabular-nums text-foreground">
                    {item.price}<span className="text-base font-medium text-muted-foreground"> {item.unit}</span>
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">{item.note}</span>
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" aria-hidden />
                  <span className="sr-only">See {item.label.toLowerCase()} plans</span>
                </span>
              </Link>
            ))}
          </section>

          {/* Startup offer strip */}
          <Link href="/startup-offer" className="group mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-6 py-4 transition-colors hover:border-gold/70 sm:flex-row sm:items-center">
            <span className="text-sm text-foreground sm:text-base">
              <span className="font-semibold text-amber-700 dark:text-gold">Just started your business?</span> Get up to {startupOffer.maxPct}% off setup and your first {startupOffer.months} months.
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
              Check my discount <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </div>

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
              eyebrow="Products"
              title="Ready-to-run platforms"
              description="Our newest releases, plus the systems already running in schools, warehouses and offices."
              action={<ArrowLink href="/products">View all products</ArrowLink>}
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product, index) => (
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

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {moreProducts.map((product, index) => (
                <Link
                  key={product.slug}
                  href={product.href ?? `/products#${product.slug}`}
                  className={cn("group flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5", reveal(productsRef.isInView))}
                  style={{ transitionDelay: `${160 + index * 60}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                    <product.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-semibold text-foreground">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
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

        {/* Services */}
        <section ref={servicesRef.ref}>
          <Panel>
            <SectionHeading
              inView={servicesRef.isInView}
              eyebrow="Services"
              title="Technology services"
              action={<ArrowLink href="/services">Explore all services</ArrowLink>}
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Link
                  key={service.name}
                  href="/services"
                  className={cn("group flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 transition-all duration-500 hover:border-primary/40 hover:bg-primary/5", reveal(servicesRef.isInView))}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                    <service.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" aria-hidden />
                  </div>
                  <span className="font-medium text-foreground">{service.name}</span>
                </Link>
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

        {/* Testimonials */}
        <section ref={testimonialsRef.ref}>
          <Panel>
            <SectionHeading inView={testimonialsRef.isInView} eyebrow="Testimonials" title="What our clients say" />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <figure key={testimonial.name} className={cn("flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-500", reveal(testimonialsRef.isInView))} style={{ transitionDelay: `${index * 80}ms` }}>
                  <Quote className="mb-4 h-7 w-7 text-primary/40" aria-hidden />
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">{testimonial.text}</blockquote>
                  <div className="mt-6 flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                    ))}
                  </div>
                  <figcaption className="mt-4 border-t border-border/50 pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
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
