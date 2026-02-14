import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Rocket,
  BookOpen,
  Heart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CareersApply } from "@/components/careers-apply"
import { listJobs } from "@/lib/careers-db"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Careers - VelanDev",
  description: "Join VelanDev and work on real-world products and enterprise systems. We offer a collaborative environment focused on learning, innovation and career growth.",
}

const benefits = [
  {
    title: "Growth Opportunities",
    description: "Clear career paths and continuous learning opportunities to advance your skills.",
    icon: Rocket,
  },
  {
    title: "Collaborative Culture",
    description: "Work alongside talented engineers in a supportive, team-oriented environment.",
    icon: Users,
  },
  {
    title: "Learning & Development",
    description: "Access to training programs, certifications, and conference attendance.",
    icon: BookOpen,
  },
  {
    title: "Work-Life Balance",
    description: "Flexible work arrangements and policies that support your well-being.",
    icon: Heart,
  },
]

export default function CareersPage() {
  const jobs = listJobs()

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Careers at VelanDev
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Join VelanDev and work on real-world products and enterprise systems.
              We offer a collaborative environment focused on learning, innovation
              and career growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Why Join VelanDev?</h2>
              <p className="mt-4 text-muted-foreground">
                We invest in our people and create an environment where talent thrives.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border bg-card">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Open Positions</h2>
              <p className="mt-4 text-muted-foreground">
                Explore our current openings and find your next opportunity.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              {jobs.length === 0 ? (
                <Card className="border-0 bg-background">
                  <CardContent className="p-6 text-center text-sm text-muted-foreground">
                    No roles are posted yet. Submit a general application below.
                  </CardContent>
                </Card>
              ) : (
                jobs.map((job) => (
                  <Card key={job.id} className="border-0 bg-background transition-shadow hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-semibold text-foreground">{job.title}</h3>
                            <Badge variant="secondary">{job.department}</Badge>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{job.description}</p>
                          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <Button asChild className="shrink-0">
                          <Link href="#apply">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <CareersApply jobs={jobs.map((job) => ({ id: job.id, title: job.title }))} />

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {"Don't See a Role That Fits?"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {"We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."}
            </p>
            <Button size="lg" variant="outline" asChild className="mt-8 bg-transparent">
              <Link href="#apply">
                Send Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
