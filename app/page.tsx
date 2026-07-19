"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Package,
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
  Shield,
  Globe,
  Brain,
  Cpu,
  Network,
  CircuitBoard,
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

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

const products = [
  {
    title: "AI-Powered ERP Systems",
    description: "Intelligent ERP platforms with machine learning for education, HR, inventory, and finance.",
    icon: BrainCircuit,
    color: "from-primary/20 to-purple-400/10",
  },
  {
    title: "Smart Supply Chain",
    description: "AI-driven inventory and logistics platforms with predictive analytics.",
    icon: Network,
    color: "from-purple-400/20 to-violet-500/10",
  },
  {
    title: "Intelligent HR Platforms",
    description: "AI-enhanced employee management with smart attendance and performance insights.",
    icon: Brain,
    color: "from-violet-500/20 to-purple-300/10",
  },
  {
    title: "Custom AI Solutions",
    description: "Scalable AI-powered SaaS products built for modern enterprises.",
    icon: Cpu,
    color: "from-purple-300/20 to-primary/10",
  },
]

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

function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}

function TypewriterEffect({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
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

  return (
    <span className="inline-block relative">
      <span className="relative z-10 text-primary">{currentText}</span>
      <span className="ml-[2px] inline-block h-[1.1em] w-[2px] animate-pulse bg-foreground align-middle" />
    </span>
  )
}

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const { ref, isInView } = useInView()

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ""))
      if (isNaN(numericValue)) {
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

/* ===== BACKGROUND COMPONENTS ===== */


function HeroVideoVisualization() {
  return (
    <div className="relative mx-auto h-72 w-72 lg:h-96 lg:w-96">
      {/* Outer glow rings */}
      <div className="absolute inset-0 animate-pulse-soft rounded-full bg-gradient-to-br from-primary/20 via-violet-500/10 to-purple-400/20 blur-2xl" />
      <div className="absolute -inset-4 animate-rotate-slow rounded-full border border-primary/10" style={{ animationDuration: "20s" }}>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
      </div>
      <div className="absolute -inset-8 animate-rotate-slow rounded-full border border-violet-500/8" style={{ animationDuration: "30s", animationDirection: "reverse" }}>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
      </div>
      <div className="absolute -inset-12 animate-rotate-slow rounded-full border border-gold/5" style={{ animationDuration: "25s" }}>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-gold shadow-lg shadow-gold/50" />
      </div>

      {/* Video container */}
      <div className="relative h-full w-full animate-float overflow-hidden rounded-full border border-primary/20 ai-glow-intense bg-white">
        <video
          src="/A_premium_cinematic_logo_anima.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        {/* Subtle overlay gradient for blend */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
      </div>

      {/* Corner accent dots */}
      {[
        { top: "-6%", left: "20%", delay: "0s" },
        { top: "15%", left: "105%", delay: "0.8s" },
        { top: "85%", left: "105%", delay: "1.6s" },
        { top: "105%", left: "50%", delay: "2.4s" },
        { top: "60%", left: "-6%", delay: "3.2s" },
      ].map((pos, i) => (
        <div key={i} className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 animate-bounce-soft" style={{ top: pos.top, left: pos.left, animationDelay: pos.delay }}>
          <div className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/30" />
        </div>
      ))}
    </div>
  )
}

/* ===== PAGE ===== */

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

  return (
    <div className="flex flex-col overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen overflow-hidden bg-background py-20 lg:py-32">
        {/* Professional Realistic Background */}
        <div className="absolute inset-0 z-0 bg-black/20">
          <video
            src="/Create_an_ultra_realistic_ci.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <Badge
                variant="outline"
                className={cn(
                  "mb-6 border-white/30 bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-700",
                  heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                <BrainCircuit className="mr-2 h-4 w-4 text-primary" />
                AI-Powered Software Solutions
              </Badge>

              <h1
                className={cn(
                  "text-balance text-4xl font-extrabold tracking-tight text-white drop-shadow-xl transition-all duration-700 delay-150 sm:text-5xl lg:text-6xl leading-[1.1]",
                  heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ textShadow: "0 4px 15px rgba(0,0,0,0.6)" }}
              >
                Building the Future with <br className="hidden sm:block mt-2" />
                <TypewriterEffect words={["Artificial Intelligence.", "Machine Learning.", "Automation.", "Intelligent Systems."]} />
              </h1>

              <p
                className={cn(
                  "mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/95 transition-all duration-700 delay-300 lg:mx-0 font-medium drop-shadow-md",
                  heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
              >
                VelanDev delivers intelligent software solutions powered by cutting-edge AI
                and machine learning for enterprises ready to transform their digital future.
              </p>

              <div
                className={cn(
                  "mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-500 sm:flex-row lg:justify-start",
                  heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
              >
                <Button size="lg" asChild className="group px-8 py-6 text-base shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40">
                  <Link href="/contact">
                    <span className="flex items-center gap-2 font-semibold">
                      Start Your Project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group border-2 border-white/40 bg-black/20 px-8 py-6 text-base text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 hover:shadow-lg">
                  <Link href="/portfolio">
                    <span className="flex items-center gap-2 font-medium">
                      <Package className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      View Portfolio
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className={cn("transition-all duration-1000 delay-300", heroRef.isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0")}>
              <HeroVideoVisualization />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={cn("mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-6 transition-all duration-1000 delay-700 lg:grid-cols-4", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")}>
            {trustIndicators.map((item, index) => (
              <div key={item.label} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10" style={{ transitionDelay: `${800 + index * 100}ms` }}>
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <item.icon className="relative mb-3 h-7 w-7 text-primary" />
                <div className="relative text-3xl font-bold text-foreground">
                  <AnimatedCounter value={item.value} />
                </div>
                <div className="relative mt-1 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY STATS BAR ===== */}
      <section ref={statsRef.ref} className="relative border-y border-border/50 bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className={cn("grid grid-cols-2 gap-8 lg:grid-cols-4", statsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
            {companyStats.map((stat, index) => (
              <div key={stat.label} className={cn("flex items-center gap-4 transition-all duration-500", statsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="font-semibold text-foreground">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY STACK ===== */}
      <section ref={techRef.ref} className="relative py-24 border-y border-border/50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tech_stack_bg.png"
            alt="Technology Stack Background"
            fill
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center">
            <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-700", techRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <CircuitBoard className="h-4 w-4 text-primary" />
              Technology Stack
            </div>
            <h2 className={cn("text-3xl font-extrabold text-white transition-all duration-700 sm:text-4xl drop-shadow-md", techRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              Technologies We Master
            </h2>
            <div className={cn("mx-auto mt-6 h-1 w-16 bg-white/50 transition-all duration-700 delay-150", techRef.isInView ? "scale-x-100" : "scale-x-0")} />
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {Object.entries(techStack).map(([category, techs], catIdx) => (
              <div key={category} className={cn("transition-all duration-500", techRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")} style={{ transitionDelay: `${300 + catIdx * 100}ms` }}>
                <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/70 border-b border-white/20 pb-2 drop-shadow-sm">{category}</h3>
                <div className="space-y-3">
                  {techs.map((tech) => (
                    <div key={tech.name} className="group relative flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 hover:border-primary hover:bg-black/60 hover:shadow-md hover:shadow-primary/20">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 transition-colors group-hover:bg-primary/20">
                        <tech.icon className="h-4 w-4 text-white/70 transition-colors group-hover:text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-white/90 group-hover:text-white drop-shadow-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section ref={productsRef.ref} className="relative bg-gradient-to-b from-muted/20 via-accent/10 to-background py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 circuit-pattern opacity-20" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Cpu className="h-4 w-4 animate-pulse" />
              AI Products
            </div>
            <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl", productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              Intelligent Solutions
            </h2>
            <div className={cn("mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-purple-400 to-violet-400 transition-all duration-700 delay-150", productsRef.isInView ? "scale-x-100" : "scale-x-0")} />
            <p className={cn("mx-auto mt-6 max-w-2xl text-muted-foreground transition-all duration-700 delay-200", productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              AI-powered enterprise solutions that learn, adapt, and optimize your business operations.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Card key={product.title} className={cn("group relative cursor-pointer overflow-hidden border-0 bg-card shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10", productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100", product.color)} />
                <CardHeader className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-xl group-hover:shadow-primary/30">
                    <product.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg transition-colors duration-300">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={cn("mt-12 text-center transition-all duration-700 delay-700", productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
            <Button asChild className="group ai-glow">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section ref={servicesRef.ref} className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", servicesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Network className="h-4 w-4" />
              Services
            </div>
            <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl", servicesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              Technology Services
            </h2>
            <div className={cn("mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-purple-400 to-violet-400 transition-all duration-700 delay-150", servicesRef.isInView ? "scale-x-100" : "scale-x-0")} />
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.name} className={cn("group flex cursor-pointer items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/10", servicesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                  <service.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{service.name}</span>
              </div>
            ))}
          </div>

          <div className={cn("mt-12 text-center transition-all duration-700 delay-700", servicesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
            <Button variant="outline" asChild className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/10">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section ref={testimonialsRef.ref} className="relative bg-gradient-to-b from-muted/20 to-background py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", testimonialsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Star className="h-4 w-4" />
              Testimonials
            </div>
            <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl", testimonialsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              What Our Clients Say
            </h2>
            <div className={cn("mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-purple-400 to-violet-400 transition-all duration-700 delay-150", testimonialsRef.isInView ? "scale-x-100" : "scale-x-0")} />
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={cn("group relative overflow-hidden border-0 bg-card shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10", testimonialsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")} style={{ transitionDelay: `${300 + index * 150}ms` }}>
                <CardContent className="relative pt-8 pb-6">
                  <Quote className="mb-4 h-8 w-8 text-primary/30" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{testimonial.text}</p>
                  <div className="mt-6 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="mt-4 border-t border-border/50 pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section ref={processRef.ref} className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", processRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Layers className="h-4 w-4" />
              Our Process
            </div>
            <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl", processRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              How We Work
            </h2>
            <div className={cn("mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-purple-400 to-violet-400 transition-all duration-700 delay-150", processRef.isInView ? "scale-x-100" : "scale-x-0")} />
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.step} className={cn("group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10", processRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-3xl font-bold text-transparent">{step.step}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                    <step.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section ref={industriesRef.ref} className="relative bg-gradient-to-b from-muted/20 to-background py-24">
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", industriesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Building2 className="h-4 w-4" />
              Industries
            </div>
            <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl", industriesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              Industries We Serve
            </h2>
            <div className={cn("mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-purple-400 to-violet-400 transition-all duration-700 delay-150", industriesRef.isInView ? "scale-x-100" : "scale-x-0")} />
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card key={industry.name} className={cn("group cursor-pointer border-0 bg-card text-center shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10", industriesRef.isInView ? "scale-100 opacity-100" : "scale-95 opacity-0")} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                <CardContent className="pt-8 pb-6">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-xl group-hover:shadow-primary/30">
                    <industry.icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section ref={whyUsRef.ref} className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", whyUsRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0")}>
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  Why Choose Us
                </div>
                <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl", whyUsRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0")}>
                  AI-First Development
                </h2>
                <div className={cn("mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-purple-400 to-violet-400 transition-all duration-700 delay-150", whyUsRef.isInView ? "scale-x-100" : "scale-x-0")} />
                <p className={cn("mt-6 text-muted-foreground transition-all duration-700 delay-300", whyUsRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0")}>
                  We combine cutting-edge AI technologies with deep business understanding to deliver solutions that drive exponential results.
                </p>
              </div>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={item} className={cn("group flex items-start gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10", whyUsRef.isInView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0")} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                      <CheckCircle2 className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <span className="pt-2 font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section ref={ctaRef.ref} className="relative overflow-hidden py-24">
        <div className="absolute inset-0 animated-gradient opacity-95" />
        <div className="absolute inset-0 circuit-pattern opacity-15" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-10 h-40 w-40 animate-float rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-52 w-52 animate-float-slow rounded-full bg-white/10 blur-3xl" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute h-2 w-2 animate-particle rounded-full bg-white/30" style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%`, animationDelay: `${i * 0.8}s` }} />
          ))}
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-700", ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Bot className="h-4 w-4 animate-bounce-soft" />
              Start Your Journey
            </div>
            <h2 className={cn("text-3xl font-bold text-white transition-all duration-700 sm:text-4xl lg:text-5xl", ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              Ready to transform with AI?
            </h2>
            <p className={cn("mx-auto mt-6 max-w-2xl text-lg text-white/90 transition-all duration-700 delay-200", ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              Partner with VelanDev to harness the power of artificial intelligence
              and build the next generation of intelligent digital products.
            </p>
            <div className={cn("mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-500 delay-400", ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              <Button size="lg" variant="secondary" asChild className="px-8 py-6 text-base shadow-2xl transition-all duration-300 hover:scale-105">
                <Link href="/contact" className="group flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  Talk to Our Experts
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white/30 bg-transparent px-8 py-6 text-base text-white hover:bg-white/10 hover:border-white/50">
                <Link href="/pricing" className="flex items-center gap-2">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
