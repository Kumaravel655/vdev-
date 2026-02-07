import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  Target,
  Eye,
  Users,
  Shield,
  Zap,
  Award,
  Globe,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About Us - VelanDev",
  description: "Learn about VelanDev, a product and service based IT company delivering modern digital products and enterprise software solutions.",
}

const values = [
  {
    title: "Innovation",
    description: "We embrace new technologies and methodologies to deliver cutting-edge solutions.",
    icon: Zap,
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in code quality, testing, and delivery.",
    icon: Award,
  },
  {
    title: "Transparency",
    description: "We believe in open communication and honest relationships with our clients.",
    icon: Eye,
  },
  {
    title: "Collaboration",
    description: "We work as partners with our clients, not just as service providers.",
    icon: Users,
  },
  {
    title: "Security",
    description: "We prioritize security in every aspect of our development process.",
    icon: Shield,
  },
  {
    title: "Global Reach",
    description: "We serve clients worldwide with solutions that scale across regions.",
    icon: Globe,
  },
]

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Team Members" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              About VelanDev
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About VelanDev
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              A product and service based IT company focused on delivering modern digital
              products and enterprise software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    VelanDev is a product and service based IT company focused on delivering
                    modern digital products and enterprise software solutions. We help
                    organizations transform their operations through custom software,
                    automation platforms and AI driven systems.
                  </p>
                  <p className="leading-relaxed">
                    Our team combines strong engineering practices, modern frameworks and
                    cloud technologies to build secure, scalable and future-ready software
                    that drives real business value.
                  </p>
                  <p className="leading-relaxed">
                    From startups to enterprises, we partner with organizations across
                    industries to turn their ideas into reliable, high-performing software
                    products.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <Card key={stat.label} className="border-0 bg-muted/50 text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 bg-background">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To empower businesses with innovative software solutions that drive
                    growth, efficiency, and competitive advantage. We strive to be a
                    trusted technology partner that delivers exceptional value through
                    quality craftsmanship and client-focused service.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 bg-background">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To be a globally recognized technology company known for building
                    reliable, scalable software products that transform how businesses
                    operate. We envision a future where technology empowers every
                    organization to achieve its full potential.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
              <p className="mt-4 text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="border bg-card text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
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

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Want to Work With Us?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              {"Let's discuss how we can help transform your business with modern technology."}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link href="/careers">
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
