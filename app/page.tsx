"use client"

import Link from "next/link"
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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const trustIndicators = [
  { value: "100+", label: "Projects Delivered", icon: Sparkles },
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "99%", label: "Client Satisfaction", icon: Shield },
  { value: "24/7", label: "AI-Powered Support", icon: Bot },
]

const products = [
  {
    title: "AI-Powered ERP Systems",
    description: "Intelligent ERP platforms with machine learning for education, HR, inventory, and finance.",
    icon: BrainCircuit,
    color: "from-primary/20 to-cyan-500/10",
  },
  {
    title: "Smart Supply Chain",
    description: "AI-driven inventory and logistics platforms with predictive analytics.",
    icon: Network,
    color: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Intelligent HR Platforms",
    description: "AI-enhanced employee management with smart attendance and performance insights.",
    icon: Brain,
    color: "from-blue-500/20 to-indigo-500/10",
  },
  {
    title: "Custom AI Solutions",
    description: "Scalable AI-powered SaaS products built for modern enterprises.",
    icon: Cpu,
    color: "from-indigo-500/20 to-primary/10",
  },
]

const services = [
  { name: "AI & Machine Learning", icon: Brain },
  { name: "Custom Software Development", icon: Code2 },
  { name: "Web Application Development", icon: Globe },
  { name: "Mobile App Development", icon: Zap },
  { name: "Cloud & DevOps Services", icon: Cloud },
  { name: "Neural Network Solutions", icon: Network },
]

const industries = [
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: Truck },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Manufacturing", icon: Factory },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Finance", icon: Landmark },
]

const whyChooseUs = [
  "AI-first development approach",
  "Cutting-edge machine learning integration",
  "Scalable neural network architecture",
  "Real-time intelligent automation",
  "Dedicated AI engineering teams",
  "Continuous learning systems",
]

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

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const { ref, isInView } = useInView()
  
  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ""))
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
  
  return <span ref={ref}>{displayValue}{suffix}</span>
}

// Neural Network Background Component
function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 neural-grid opacity-50" />
      
      {/* Floating AI Orbs */}
      <div className="absolute left-[10%] top-[20%] h-4 w-4 animate-particle rounded-full bg-primary/40 blur-sm" />
      <div className="absolute left-[80%] top-[30%] h-3 w-3 animate-particle rounded-full bg-cyan-400/40 blur-sm" style={{ animationDelay: "1s" }} />
      <div className="absolute left-[20%] top-[70%] h-5 w-5 animate-particle rounded-full bg-blue-400/30 blur-sm" style={{ animationDelay: "2s" }} />
      <div className="absolute left-[70%] top-[80%] h-4 w-4 animate-particle rounded-full bg-primary/30 blur-sm" style={{ animationDelay: "3s" }} />
      <div className="absolute left-[50%] top-[10%] h-3 w-3 animate-particle rounded-full bg-indigo-400/40 blur-sm" style={{ animationDelay: "4s" }} />
      
      {/* Glowing Orbs */}
      <div className="absolute -left-20 top-20 h-96 w-96 animate-float rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-[500px] w-[500px] animate-float-slow rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft rounded-full bg-blue-500/5 blur-3xl" />
      
      {/* Circuit Lines */}
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(199, 89%, 48%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 200 Q 200 100 400 200 T 800 200"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          fill="none"
          className="animate-data-flow"
          style={{ strokeDasharray: "1000", strokeDashoffset: "1000" }}
        />
        <path
          d="M0 400 Q 300 300 600 400 T 1200 400"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          fill="none"
          className="animate-data-flow"
          style={{ strokeDasharray: "1000", strokeDashoffset: "1000", animationDelay: "2s" }}
        />
      </svg>
    </div>
  )
}

// AI Brain Animation Component
function AIBrainVisualization() {
  return (
    <div className="relative mx-auto h-64 w-64 lg:h-80 lg:w-80">
      {/* Central Brain */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-primary via-cyan-500 to-blue-500 ai-glow-intense">
          <Brain className="h-16 w-16 text-white animate-pulse-soft" />
          
          {/* Orbiting Elements */}
          <div className="absolute h-full w-full animate-rotate-slow" style={{ animationDuration: "10s" }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
          </div>
          <div className="absolute h-full w-full animate-rotate-slow" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
          </div>
          <div className="absolute h-full w-full animate-rotate-slow" style={{ animationDuration: "12s" }}>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
          </div>
        </div>
      </div>
      
      {/* Neural Connections */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-24 origin-left animate-neural"
            style={{
              transform: `rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <div className="h-full w-full bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
          </div>
        ))}
      </div>
      
      {/* Floating Nodes */}
      {[
        { top: "10%", left: "50%", delay: "0s" },
        { top: "30%", left: "90%", delay: "0.5s" },
        { top: "70%", left: "90%", delay: "1s" },
        { top: "90%", left: "50%", delay: "1.5s" },
        { top: "70%", left: "10%", delay: "2s" },
        { top: "30%", left: "10%", delay: "2.5s" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 animate-bounce-soft"
          style={{ top: pos.top, left: pos.left, animationDelay: pos.delay }}
        >
          <div className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/30" />
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  const heroRef = useInView()
  const aboutRef = useInView()
  const productsRef = useInView()
  const servicesRef = useInView()
  const industriesRef = useInView()
  const whyUsRef = useInView()
  const ctaRef = useInView()

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-accent/20 to-background py-20 lg:py-32">
        <NeuralBackground />

        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <Badge
                variant="secondary"
                className={cn(
                  "mb-8 border border-primary/30 bg-primary/10 px-4 py-2 text-primary backdrop-blur-sm transition-all duration-700",
                  heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                <BrainCircuit className="mr-2 h-4 w-4 animate-pulse" />
                AI-Powered Software Solutions
              </Badge>
              
              <h1
                className={cn(
                  "text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl lg:text-6xl xl:text-7xl",
                  heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
              >
                Building the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Future
                  </span>
                  <span className="absolute -bottom-2 left-0 h-3 w-full bg-primary/30 blur-xl" />
                </span>
                {" "}with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    AI
                  </span>
                  <Sparkles className="absolute -right-6 -top-2 h-5 w-5 animate-bounce-soft text-primary" />
                </span>
              </h1>
              
              <p
                className={cn(
                  "mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-300 lg:mx-0",
                  heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
              >
                VelanDev delivers intelligent software solutions powered by cutting-edge AI
                and machine learning for enterprises ready to transform their digital future.
              </p>
              
              <div
                className={cn(
                  "mt-12 flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-500 sm:flex-row lg:justify-start",
                  heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
              >
                <Button
                  size="lg"
                  asChild
                  className="group relative overflow-hidden px-8 py-6 text-base ai-glow transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      Start AI Project
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-primary bg-[length:200%_100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="group border-2 border-primary/30 bg-background/50 px-8 py-6 text-base backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/10"
                >
                  <Link href="/products">
                    <span className="flex items-center gap-2">
                      <Bot className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      Explore AI Products
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* AI Visualization */}
            <div
              className={cn(
                "hidden lg:block transition-all duration-1000 delay-300",
                heroRef.isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              )}
            >
              <AIBrainVisualization />
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className={cn(
              "mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-6 transition-all duration-1000 delay-700 lg:grid-cols-4",
              heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
          >
            {trustIndicators.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 neural-grid" />
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

      {/* About Preview Section */}
      <section ref={aboutRef.ref} className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700",
                aboutRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              <CircuitBoard className="h-4 w-4" />
              About VelanDev
            </div>
            <h2
              className={cn(
                "text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl lg:text-5xl",
                aboutRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              Pioneering AI-Driven Innovation
            </h2>
            <div
              className={cn(
                "mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-blue-500 transition-all duration-700 delay-150",
                aboutRef.isInView ? "scale-x-100" : "scale-x-0"
              )}
            />
            <p
              className={cn(
                "mt-8 text-pretty text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-300",
                aboutRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              VelanDev is a next-generation technology company specializing in
              AI-powered digital products and intelligent software solutions. We leverage
              machine learning, neural networks, and advanced automation to deliver
              transformative solutions for global enterprises.
            </p>
            <Button
              variant="link"
              asChild
              className={cn(
                "mt-8 text-primary transition-all duration-700 delay-500",
                aboutRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <Link href="/about" className="group flex items-center gap-2">
                Discover our AI journey
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section ref={productsRef.ref} className="relative bg-gradient-to-b from-muted/30 via-accent/20 to-background py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 circuit-pattern opacity-30" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700",
                productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              <Cpu className="h-4 w-4 animate-pulse" />
              AI Products
            </div>
            <h2
              className={cn(
                "text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl lg:text-5xl",
                productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              Intelligent Solutions
            </h2>
            <div
              className={cn(
                "mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-blue-500 transition-all duration-700 delay-150",
                productsRef.isInView ? "scale-x-100" : "scale-x-0"
              )}
            />
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-muted-foreground transition-all duration-700 delay-200",
                productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              AI-powered enterprise solutions that learn, adapt, and optimize your business operations.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Card
                key={product.title}
                className={cn(
                  "group relative cursor-pointer overflow-hidden border-0 bg-card shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20",
                  productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100", product.color)} />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30 neural-grid" />
                <CardHeader className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-xl group-hover:shadow-primary/40">
                    <product.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg transition-colors duration-300">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div
            className={cn(
              "mt-12 text-center transition-all duration-700 delay-700",
              productsRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <Button asChild className="group ai-glow">
              <Link href="/products">
                View All AI Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef.ref} className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700",
                servicesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              <Network className="h-4 w-4" />
              AI Services
            </div>
            <h2
              className={cn(
                "text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl lg:text-5xl",
                servicesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              Technology Services
            </h2>
            <div
              className={cn(
                "mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-blue-500 transition-all duration-700 delay-150",
                servicesRef.isInView ? "scale-x-100" : "scale-x-0"
              )}
            />
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-muted-foreground transition-all duration-700 delay-200",
                servicesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              End-to-end AI development services to transform your business with intelligent automation.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={cn(
                  "group flex cursor-pointer items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/20",
                  servicesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/40">
                  <service.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{service.name}</span>
              </div>
            ))}
          </div>
          
          <div
            className={cn(
              "mt-12 text-center transition-all duration-700 delay-700",
              servicesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <Button variant="outline" asChild className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/10">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Preview Section */}
      <section ref={industriesRef.ref} className="relative bg-gradient-to-b from-muted/30 to-background py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700",
                industriesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              <Building2 className="h-4 w-4" />
              Industries
            </div>
            <h2
              className={cn(
                "text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl lg:text-5xl",
                industriesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              AI-Transformed Industries
            </h2>
            <div
              className={cn(
                "mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-blue-500 transition-all duration-700 delay-150",
                industriesRef.isInView ? "scale-x-100" : "scale-x-0"
              )}
            />
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-muted-foreground transition-all duration-700 delay-200",
                industriesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              Delivering intelligent AI solutions across diverse industry verticals.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card
                key={industry.name}
                className={cn(
                  "group cursor-pointer border-0 bg-card text-center shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20",
                  industriesRef.isInView ? "scale-100 opacity-100" : "scale-95 opacity-0"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-xl group-hover:shadow-primary/40">
                    <industry.icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why VelanDev Section */}
      <section ref={whyUsRef.ref} className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <div
                  className={cn(
                    "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700",
                    whyUsRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  )}
                >
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  Why Choose Us
                </div>
                <h2
                  className={cn(
                    "text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl lg:text-5xl",
                    whyUsRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  )}
                >
                  AI-First Development
                </h2>
                <div
                  className={cn(
                    "mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-blue-500 transition-all duration-700 delay-150",
                    whyUsRef.isInView ? "scale-x-100" : "scale-x-0"
                  )}
                />
                <p
                  className={cn(
                    "mt-6 text-muted-foreground transition-all duration-700 delay-300",
                    whyUsRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  )}
                >
                  We combine cutting-edge AI technologies with deep business understanding to deliver solutions that drive exponential results.
                </p>
              </div>
              
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={item}
                    className={cn(
                      "group flex items-start gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10",
                      whyUsRef.isInView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                    )}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
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

      {/* CTA Section */}
      <section ref={ctaRef.ref} className="relative overflow-hidden py-24">
        <div className="absolute inset-0 animated-gradient opacity-95" />
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-10 h-40 w-40 animate-float rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-52 w-52 animate-float-slow rounded-full bg-white/10 blur-3xl" />
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 animate-particle rounded-full bg-white/30"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-700",
                ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              <Bot className="h-4 w-4 animate-bounce-soft" />
              Start Your AI Journey
            </div>
            <h2
              className={cn(
                "text-3xl font-bold text-white transition-all duration-700 sm:text-4xl lg:text-5xl",
                ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              Ready to transform with AI?
            </h2>
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-lg text-white/90 transition-all duration-700 delay-200",
                ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              Partner with VelanDev to harness the power of artificial intelligence
              and build the next generation of intelligent digital products.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className={cn(
                "mt-10 px-8 py-6 text-base shadow-2xl transition-all duration-500 delay-400 hover:scale-105",
                ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <Link href="/contact" className="group flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Talk to Our AI Experts
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
