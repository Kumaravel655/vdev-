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
  Coffee,
  Laptop,
  Trophy,
  Sparkles,
  GraduationCap,
  Zap,
  Globe,
  Wifi,
  Star,
  Code2,
  Brain,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CareersApply } from "@/components/careers-apply"
import { listJobs } from "@/lib/careers-db"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Careers — Software Jobs in Chennai",
  alternates: { canonical: "/careers" },
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

const perks = [
  { icon: Coffee, label: "Free Beverages" },
  { icon: Laptop, label: "Latest Hardware" },
  { icon: Trophy, label: "Awards & Recognition" },
  { icon: Zap, label: "Flexible Hours" },
  { icon: Globe, label: "Remote-Friendly" },
  { icon: Star, label: "Competitive Pay" },
]

const academyPrograms = [
  {
    title: "Full-Stack Development Internship",
    description: "6-month hands-on internship covering React, Next.js, Node.js, and cloud deployment. Work on real client projects.",
    type: "Internship",
    duration: "6 Months",
    icon: Code2,
  },
  {
    title: "AI & Machine Learning Training",
    description: "Intensive training program in Python, TensorFlow, NLP, and LangChain with real-world AI project experience.",
    type: "Training",
    duration: "3 Months",
    icon: Brain,
  },
  {
    title: "UI/UX Design Bootcamp",
    description: "Learn Figma, design systems, prototyping, and user research methodologies from industry professionals.",
    type: "Training",
    duration: "3 Months",
    icon: Sparkles,
  },
]

export default function CareersPage() {
  const jobs = listJobs()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-40">
        <div className="aurora-bg absolute inset-0" />
        <div className="neural-grid absolute inset-0 opacity-30" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Badge variant="secondary" className="border-purple-500/30 bg-purple-500/10 text-purple-400">
                Join Our Team
              </Badge>
              <Badge variant="secondary" className="border-violet-500/30 bg-violet-500/10 text-violet-400">
                <Wifi className="mr-1 h-3 w-3" />
                Remote Opportunities Available
              </Badge>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-violet-400 bg-clip-text text-transparent">
                Build Your Career
              </span>
              <br />
              <span className="text-foreground">at VelanDev</span>
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
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 border-purple-500/30 bg-purple-500/10 text-purple-400">
                Why VelanDev
              </Badge>
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Why Join VelanDev?
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                We invest in our people and create an environment where talent thrives.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Card
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <CardContent className="relative flex items-start gap-4 pt-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/15 to-purple-600/5 ring-1 ring-purple-500/20 transition-all duration-300 group-hover:ring-purple-400/40 group-hover:ai-glow">
                      <benefit.icon className="h-6 w-6 text-purple-400" />
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

      {/* Life at VelanDev — Perks */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 border-violet-500/30 bg-violet-500/10 text-violet-400">
                Culture
              </Badge>
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-primary bg-clip-text text-transparent">
                  Life at VelanDev
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                More than just a workplace — a community where creativity and growth thrive.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {perks.map((perk, index) => (
                <div key={perk.label} className="group flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-card transition-all duration-300 group-hover:border-purple-500/30 group-hover:ai-glow">
                    <perk.icon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-purple-400" />
                  </div>
                  <span className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {perk.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 border-purple-500/30 bg-purple-500/10 text-purple-400">
                Open Roles
              </Badge>
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Open Positions
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Explore our current openings and find your next opportunity.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              {jobs.length === 0 ? (
                <Card className="overflow-hidden rounded-2xl border border-border/50 bg-card">
                  <CardContent className="p-8 text-center text-sm text-muted-foreground">
                    <Sparkles className="mx-auto mb-3 h-8 w-8 text-purple-400/50" />
                    No roles are posted yet. Submit a general application below.
                  </CardContent>
                </Card>
              ) : (
                jobs.map((job) => (
                  <Card
                    key={job.id}
                    className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                    <CardContent className="relative p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-semibold text-foreground">{job.title}</h3>
                            <Badge variant="secondary" className="border-violet-500/20 bg-violet-500/10 text-violet-400">
                              {job.department}
                            </Badge>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{job.description}</p>
                          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-purple-400" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-violet-400" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <Button asChild className="shrink-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-400 hover:to-purple-500 shadow-lg shadow-purple-500/20">
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

      {/* VelanDev Academy — Internships & Training */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 border-amber-500/30 bg-amber-500/10 text-amber-400">
                <GraduationCap className="mr-1 h-3 w-3" />
                VelanDev Academy
              </Badge>
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Internships & Training Programs
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Launch your tech career with hands-on experience and mentorship from industry professionals.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {academyPrograms.map((program, index) => (
                <Card
                  key={program.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <CardContent className="relative pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/15 to-violet-500/10 ring-1 ring-purple-500/20 transition-all duration-300 group-hover:ring-purple-400/40">
                        <program.icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs">
                        {program.type}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{program.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-purple-400">
                      <Clock className="h-3 w-3" />
                      {program.duration}
                    </div>
                    <Button variant="outline" size="sm" asChild className="mt-4 w-full border-purple-500/30 bg-transparent text-purple-400 hover:bg-purple-500/10 hover:text-purple-300">
                      <Link href="#apply">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CareersApply jobs={jobs.map((job) => ({ id: job.id, title: job.title }))} />

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div className="animated-gradient absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto mb-4 h-10 w-10 text-white/80" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {"Don't See a Role That Fits?"}
            </h2>
            <p className="mt-4 text-white/80">
              {"We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."}
            </p>
            <Button size="lg" asChild className="mt-8 bg-white text-gray-900 hover:bg-white/90 shadow-lg">
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
