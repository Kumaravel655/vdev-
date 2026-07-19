"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, Code2, Globe, Brain, Cloud, Palette, Link2, Wrench, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true)
    }, { threshold })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, isInView }
}

const services = [
  { 
    title: "Custom Software Development", 
    description: "We architect and build bespoke software solutions that map precisely to your enterprise workflows. Our agile squads deliver maintainable, highly-scalable code.", 
    icon: Code2, 
    highlights: ["Enterprise architecture", "Agile delivery", "QA automation"] 
  },
  { 
    title: "Web & Mobile Applications", 
    description: "Native and cross-platform applications that deliver frictionless user experiences. Built on modern stacks to ensure peak performance and seamless scaling.", 
    icon: Globe, 
    highlights: ["Progressive Web Apps", "iOS & Android Native", "React Native / Flutter"] 
  },
  { 
    title: "AI & Data Solutions", 
    description: "Transform raw data into strategic assets. We integrate predictive models, machine learning, and NLP to automate complex decision-making processes.", 
    icon: Brain, 
    highlights: ["Predictive Analytics", "NLP Integration", "Custom ML Models"] 
  },
  { 
    title: "Cloud & Infrastructure", 
    description: "Future-proof your operations with resilient cloud architectures. We migrate, optimize, and secure your environments across AWS, Azure, and GCP.", 
    icon: Cloud, 
    highlights: ["Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code"] 
  },
  { 
    title: "UI/UX & Product Design", 
    description: "Data-driven design that prioritizes user conversion. We craft intuitive interfaces rooted in rigorous user research and behavioral psychology.", 
    icon: Palette, 
    highlights: ["Behavioral Research", "Rapid Prototyping", "Design Systems"] 
  },
  { 
    title: "System Integration", 
    description: "Break down data silos. We build robust middleware and API layers to seamlessly connect your disparate enterprise systems and third-party tools.", 
    icon: Link2, 
    highlights: ["API Development", "Legacy Modernization", "Middleware Logic"] 
  },
]

export default function ServicesPage() {
  const heroRef = useInView()
  const ctaRef = useInView()

  return (
    <div className="flex flex-col bg-background selection:bg-primary/30">
      {/* Editorial Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Subtle video background overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] mix-blend-luminosity grayscale">
          <video src="/services-hero.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
        </div>
        
        <div ref={heroRef.ref} className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="max-w-5xl">
            <h1 
              className={cn(
                "font-extrabold tracking-tighter text-foreground transition-all duration-1000 ease-out",
                "text-[clamp(3rem,8vw,7rem)] leading-[0.9]",
                heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              )}
            >
              Enterprise<br />
              <span className="text-muted-foreground">Capabilities.</span>
            </h1>
            
            <p 
              className={cn(
                "mt-10 max-w-2xl text-xl md:text-2xl font-medium leading-relaxed text-foreground/80 transition-all duration-1000 delay-300",
                heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              We engineer intelligent systems, robust architectures, and digital experiences that define industry leaders.
            </p>
            
            <div 
              className={cn(
                "mt-12 transition-all duration-1000 delay-500",
                heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              <Button size="lg" asChild className="rounded-full px-8 py-7 text-lg font-bold shadow-2xl hover:-translate-y-1 transition-transform duration-300">
                <Link href="/contact">
                  Discuss Your Project <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services List - Alternating Bands with Exaggerated Typography */}
      <section className="flex flex-col">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <ServiceBand 
              key={service.title} 
              service={service} 
              index={index} 
              isEven={isEven} 
            />
          );
        })}
      </section>

      {/* Brutalist / High-Contrast CTA */}
      <section ref={ctaRef.ref} className="bg-foreground text-background py-32 lg:py-48 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 
            className={cn(
              "font-black tracking-tight text-[clamp(2.5rem,6vw,5.5rem)] leading-none transition-all duration-1000",
              ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            )}
          >
            Ready to Build?
          </h2>
          <p 
            className={cn(
              "mx-auto mt-8 max-w-2xl text-xl text-background/70 transition-all duration-1000 delay-200",
              ctaRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            Partner with our engineering team to accelerate your digital transformation.
          </p>
          <div 
            className={cn(
              "mt-12 transition-all duration-1000 delay-400",
              ctaRef.isInView ? "scale-100 opacity-100" : "scale-95 opacity-0"
            )}
          >
            <Button size="lg" variant="outline" asChild className="rounded-full border-background bg-transparent text-background hover:bg-background hover:text-foreground px-10 py-8 text-xl font-bold transition-all duration-300">
              <Link href="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceBand({ service, index, isEven }: { service: any, index: number, isEven: boolean }) {
  const bandRef = useInView(0.2)
  
  return (
    <div 
      className={cn(
        "relative py-24 lg:py-32 overflow-hidden border-t border-border/40",
        isEven ? "bg-background" : "bg-muted/10"
      )}
    >
      {/* Massive Background Number */}
      <div 
        className={cn(
          "pointer-events-none absolute -top-10 -left-10 text-[20rem] font-black leading-none text-muted/20 select-none transition-all duration-1000",
          bandRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
        )}
      >
        0{index + 1}
      </div>

      <div ref={bandRef.ref} className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-start">
          
          <div 
            className={cn(
              "transition-all duration-1000 delay-100",
              bandRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-8 shadow-xl shadow-primary/20">
              <service.icon className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {service.title}
            </h2>
          </div>

          <div 
            className={cn(
              "lg:pt-2 transition-all duration-1000 delay-300",
              bandRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
          >
            <p className="text-xl leading-relaxed text-muted-foreground mb-10">
              {service.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {service.highlights.map((highlight: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <span className="text-lg font-medium text-foreground/80">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="link" asChild className="mt-10 px-0 text-lg font-semibold text-primary hover:text-primary/80 group">
              <Link href="/contact" className="flex items-center">
                Learn more 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}
