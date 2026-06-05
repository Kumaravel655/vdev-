"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  Target,
  Eye,
  Users,
  Shield,
  Zap,
  Award,
  Globe,
  Calendar,
  MapPin,
  BrainCircuit,
  Code2,
  Palette,
  Server,
  Briefcase,
  Sparkles,
} from "lucide-react"

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

const values = [
  { title: "Innovation", description: "We embrace new technologies and methodologies to deliver cutting-edge solutions.", icon: Zap },
  { title: "Quality", description: "We maintain the highest standards in code quality, testing, and delivery.", icon: Award },
  { title: "Transparency", description: "We believe in open communication and honest relationships with our clients.", icon: Eye },
  { title: "Collaboration", description: "We work as partners with our clients, not just as service providers.", icon: Users },
  { title: "Security", description: "We prioritize security in every aspect of our development process.", icon: Shield },
  { title: "Global Reach", description: "We serve clients worldwide with solutions that scale across regions.", icon: Globe },
]

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Team Members" },
]

const team = [
  { name: "Velan", role: "Founder & CEO", description: "Full-stack developer, AI enthusiast, and visionary leader driving VelanDev's mission.", icon: BrainCircuit },
  { name: "Priya", role: "Lead Developer", description: "React & Next.js specialist with 5+ years building enterprise web applications.", icon: Code2 },
  { name: "Karthik", role: "AI Engineer", description: "Machine learning, NLP, and LangChain expert building intelligent systems.", icon: BrainCircuit },
  { name: "Divya", role: "UI/UX Designer", description: "User experience design specialist creating beautiful, intuitive interfaces.", icon: Palette },
  { name: "Ravi", role: "DevOps Engineer", description: "Docker, AWS, CI/CD, and Linux administration expert ensuring reliable deployments.", icon: Server },
  { name: "Anitha", role: "Project Manager", description: "Agile methodology practitioner ensuring smooth client communication and delivery.", icon: Briefcase },
]

const timeline = [
  { date: "May 2024", title: "Founded", description: "VelanDev established in Chennai, India" },
  { date: "Jun 2024", title: "First Client", description: "Delivered our first enterprise project" },
  { date: "Sep 2024", title: "10 Projects", description: "Milestone of 10 successful deliveries" },
  { date: "Jan 2025", title: "Academy Launch", description: "VelanDev Academy for training programs" },
  { date: "Mar 2025", title: "AI Division", description: "Dedicated AI & ML solutions team formed" },
  { date: "Jun 2025", title: "50+ Projects", description: "Serving 20+ clients across industries" },
]

export default function AboutPage() {
  const heroRef = useInView()
  const storyRef = useInView()
  const timelineRef = useInView()
  const teamRef = useInView()
  const missionRef = useInView()
  const valuesRef = useInView()

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 aurora-bg" />
        <div className="pointer-events-none absolute inset-0 neural-grid opacity-20" />
        <div ref={heroRef.ref} className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className={cn("mb-4 border border-primary/30 bg-primary/10 text-primary transition-all duration-700", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              About VelanDev
            </Badge>
            <h1 className={cn("text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-150 sm:text-5xl", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              Pioneering{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-violet-400 bg-clip-text text-transparent">
                AI-Driven
              </span>{" "}
              Innovation
            </h1>
            <p className={cn("mt-6 text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 sm:text-lg", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              A product and service based IT company focused on delivering modern digital
              products and enterprise software solutions since May 2024.
            </p>
            <div className={cn("mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground transition-all duration-700 delay-500", heroRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Founded May 5, 2024</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Sholinganallur, Chennai, India</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> 10+ Team Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story + Stats */}
      <section ref={storyRef.ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className={cn("transition-all duration-700", storyRef.isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0")}>
                <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-emerald-400" />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p className="leading-relaxed">VelanDev is a product and service based IT company focused on delivering modern digital products and enterprise software solutions. We help organizations transform their operations through custom software, automation platforms and AI driven systems.</p>
                  <p className="leading-relaxed">Our team combines strong engineering practices, modern frameworks and cloud technologies to build secure, scalable and future-ready software that drives real business value.</p>
                  <p className="leading-relaxed">From startups to enterprises, we partner with organizations across industries to turn their ideas into reliable, high-performing software products.</p>
                </div>
              </div>
              <div className={cn("grid grid-cols-2 gap-6 transition-all duration-700 delay-200", storyRef.isInView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0")}>
                {stats.map((stat, i) => (
                  <Card key={stat.label} className="group border-0 bg-card text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/10" style={{ transitionDelay: `${300 + i * 100}ms` }}>
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">{stat.value}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef.ref} className="bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700", timelineRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>Our Journey</h2>
              <div className={cn("mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-emerald-400 transition-all duration-700 delay-150", timelineRef.isInView ? "scale-x-100" : "scale-x-0")} />
            </div>
            <div className="relative mt-12">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-violet-500/30 to-transparent hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={item.date} className={cn("flex flex-col gap-4 md:flex-row md:items-center", i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse", "transition-all duration-500", timelineRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                    <div className={cn("flex-1", i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8")}>
                      <Badge variant="secondary" className="mb-2 border-primary/20 bg-primary/10 text-primary text-xs">{item.date}</Badge>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="hidden md:flex h-4 w-4 shrink-0 rounded-full bg-primary shadow-lg shadow-primary/30" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef.ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-700", teamRef.isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}>
                <Users className="h-4 w-4" />
                Our Team
              </div>
              <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700 sm:text-4xl", teamRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>Meet the People Behind VelanDev</h2>
              <div className={cn("mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-violet-400 transition-all duration-700 delay-150", teamRef.isInView ? "scale-x-100" : "scale-x-0")} />
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, i) => (
                <Card key={member.name} className={cn("group border-0 bg-card shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/10", teamRef.isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0")} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-violet-500/20 transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-violet-500 group-hover:shadow-xl group-hover:shadow-primary/20">
                      <member.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef.ref} className="bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className={cn("grid gap-8 md:grid-cols-2 transition-all duration-700", missionRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
              <Card className="border-0 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To empower businesses with innovative software solutions that drive growth, efficiency, and competitive advantage. We strive to be a trusted technology partner that delivers exceptional value through quality craftsmanship and client-focused service.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-card via-card to-violet-500/5 shadow-xl">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                    <Eye className="h-6 w-6 text-violet-400" />
                  </div>
                  <CardTitle className="mt-4">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To be a globally recognized technology company known for building reliable, scalable software products that transform how businesses operate. We envision a future where technology empowers every organization to achieve its full potential.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef.ref} className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className={cn("text-3xl font-bold text-foreground transition-all duration-700", valuesRef.isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>Our Core Values</h2>
              <div className={cn("mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-violet-400 transition-all duration-700 delay-150", valuesRef.isInView ? "scale-x-100" : "scale-x-0")} />
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, i) => (
                <Card key={value.title} className={cn("group border-0 bg-card text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/10", valuesRef.isInView ? "scale-100 opacity-100" : "scale-95 opacity-0")} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                  <CardContent className="pt-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                      <value.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 animated-gradient opacity-95" />
        <div className="absolute inset-0 circuit-pattern opacity-15" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Want to Work With Us?</h2>
            <p className="mt-4 text-white/80">{"Let's discuss how we can help transform your business with modern technology."}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild className="shadow-2xl transition-all duration-300 hover:scale-105">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
