"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Code2, Globe, Brain, Cloud, Palette, Link2, Wrench, CheckCircle2, Network, Layers, TestTube, Rocket, Headphones, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, isInView }
}

const services = [
  { title: "Custom Software Development", description: "We build tailored software solutions that address your unique business challenges. Our team follows agile methodologies to deliver high-quality, maintainable code that scales with your business.", icon: Code2, highlights: ["Requirements analysis and solution architecture", "Agile development with iterative delivery", "Comprehensive testing and quality assurance"] },
  { title: "Web & Mobile Application Development", description: "Create powerful web applications and native mobile apps that deliver exceptional user experiences. We use modern frameworks and best practices to build responsive, performant applications.", icon: Globe, highlights: ["Progressive web applications (PWA)", "Native iOS and Android development", "Cross-platform solutions with React Native and Flutter"] },
  { title: "AI & Data Solutions", description: "Leverage the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation. We build intelligent systems that learn and adapt.", icon: Brain, highlights: ["Machine learning model development", "Natural language processing (NLP)", "Predictive analytics and data visualization"] },
  { title: "Cloud & Infrastructure Services", description: "Modernize your infrastructure with cloud-native solutions. We help you migrate, optimize, and manage cloud environments for maximum performance, security, and cost efficiency.", icon: Cloud, highlights: ["Cloud migration and optimization", "DevOps and CI/CD implementation", "Infrastructure as code (IaC)"] },
  { title: "UI/UX & Product Design", description: "Design intuitive, engaging user experiences that delight your customers. Our design team creates beautiful interfaces backed by user research and usability testing.", icon: Palette, highlights: ["User research and persona development", "Wireframing and prototyping", "Design systems and component libraries"] },
  { title: "System Integration", description: "Connect your systems and applications for seamless data flow and process automation. We specialize in API development, third-party integrations, and enterprise application integration.", icon: Link2, highlights: ["API development and management", "Third-party service integration", "Legacy system modernization"] },
  { title: "Ongoing Maintenance & Support", description: "Keep your software running smoothly with our comprehensive maintenance and support services. We provide proactive monitoring, regular updates, and rapid issue resolution.", icon: Wrench, highlights: ["24/7 monitoring and alerting", "Regular security updates and patches", "Performance optimization and scaling"] },
]

const processSteps = [
  { step: "01", title: "Requirement Gathering", icon: Layers },
  { step: "02", title: "UI/UX Design", icon: Palette },
  { step: "03", title: "Development", icon: Code2 },
  { step: "04", title: "Testing", icon: TestTube },
  { step: "05", title: "Deployment", icon: Rocket },
  { step: "06", title: "Support", icon: Headphones },
]

export default function ServicesPage() {
  const heroRef = useInView()
  const listRef = useInView()
  const processRef = useInView()

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute inset-0 neural-grid opacity-20" />
        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
                <Network className="mr-2 h-3.5 w-3.5" />
                Technology Services
              </Badge>
              <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                Our{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-violet-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className={cn("mt-6 text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg lg:max-w-xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                End-to-end technology services to help you design, build, deploy, and maintain exceptional software solutions.
              </p>
              <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-500 justify-center lg:justify-start", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
                <Button size="lg" asChild className="ai-glow"><Link href="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>

            {/* Services Hero Video */}
            <div className={cn("hidden lg:block transition-all duration-1000 delay-300", heroRef.isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0")}>
              <div className="relative mx-auto h-80 w-80 xl:h-96 xl:w-96">
                <div className="absolute inset-0 animate-pulse-soft rounded-3xl bg-gradient-to-br from-primary/20 via-violet-500/10 to-emerald-400/20 blur-2xl" />
                <div className="absolute -inset-4 animate-rotate-slow rounded-full border border-primary/10" style={{ animationDuration: "22s" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                </div>
                <div className="absolute -inset-8 animate-rotate-slow rounded-full border border-violet-500/8" style={{ animationDuration: "28s", animationDirection: "reverse" }}>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
                </div>
                <div className="relative h-full w-full animate-float overflow-hidden rounded-3xl border border-primary/20 ai-glow-intense">
                  <video src="/services-hero.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section ref={listRef.ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={service.title} className={cn("group overflow-hidden border border-border/50 bg-card shadow-xl transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5", listRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="grid gap-0 lg:grid-cols-2">
                  <CardHeader className="flex flex-col justify-center p-8 lg:p-12">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                      <service.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="mt-6 text-2xl">{service.title}</CardTitle>
                    <CardDescription className="mt-4 text-base leading-relaxed">{service.description}</CardDescription>
                    <Button variant="outline" asChild className="mt-6 w-fit border-primary/30 bg-transparent hover:bg-primary/10 hover:border-primary">
                      <Link href="/contact">
                        Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-center bg-muted/20 p-8 lg:p-12">
                    <h4 className="font-semibold text-foreground">Key Highlights</h4>
                    <ul className="mt-4 space-y-3">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef.ref} className="bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", processRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Sparkles className="h-4 w-4" />
              Our Process
            </div>
            <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700", processRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>How We Deliver</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={step.step} className={cn("group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10", processRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")} style={{ transitionDelay: `${300 + i * 80}ms` }}>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">{step.step}</span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                  <step.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 animated-gradient opacity-95" />
        <div className="absolute inset-0 circuit-pattern opacity-15" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Start Your Project?</h2>
            <p className="mt-4 text-white/80">Let us discuss your requirements and create a tailored solution for your business.</p>
            <Button size="lg" variant="secondary" asChild className="mt-8 shadow-2xl transition-all duration-300 hover:scale-105">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
