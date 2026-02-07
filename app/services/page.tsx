import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  Code2,
  Globe,
  Brain,
  Cloud,
  Palette,
  Link2,
  Wrench,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Services - VelanDev",
  description: "VelanDev offers custom software development, web and mobile app development, AI solutions, cloud services, UI/UX design, and ongoing maintenance support.",
}

const services = [
  {
    title: "Custom Software Development",
    description: "We build tailored software solutions that address your unique business challenges. Our team follows agile methodologies to deliver high-quality, maintainable code that scales with your business.",
    icon: Code2,
    highlights: [
      "Requirements analysis and solution architecture",
      "Agile development with iterative delivery",
      "Comprehensive testing and quality assurance",
    ],
  },
  {
    title: "Web & Mobile Application Development",
    description: "Create powerful web applications and native mobile apps that deliver exceptional user experiences. We use modern frameworks and best practices to build responsive, performant applications.",
    icon: Globe,
    highlights: [
      "Progressive web applications (PWA)",
      "Native iOS and Android development",
      "Cross-platform solutions with React Native and Flutter",
    ],
  },
  {
    title: "AI & Data Solutions",
    description: "Leverage the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation. We build intelligent systems that learn and adapt to your needs.",
    icon: Brain,
    highlights: [
      "Machine learning model development",
      "Natural language processing (NLP)",
      "Predictive analytics and data visualization",
    ],
  },
  {
    title: "Cloud & Infrastructure Services",
    description: "Modernize your infrastructure with cloud-native solutions. We help you migrate, optimize, and manage cloud environments for maximum performance, security, and cost efficiency.",
    icon: Cloud,
    highlights: [
      "Cloud migration and optimization",
      "DevOps and CI/CD implementation",
      "Infrastructure as code (IaC)",
    ],
  },
  {
    title: "UI/UX & Product Design",
    description: "Design intuitive, engaging user experiences that delight your customers. Our design team creates beautiful interfaces backed by user research and usability testing.",
    icon: Palette,
    highlights: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Design systems and component libraries",
    ],
  },
  {
    title: "System Integration",
    description: "Connect your systems and applications for seamless data flow and process automation. We specialize in API development, third-party integrations, and enterprise application integration.",
    icon: Link2,
    highlights: [
      "API development and management",
      "Third-party service integration",
      "Legacy system modernization",
    ],
  },
  {
    title: "Ongoing Maintenance & Support",
    description: "Keep your software running smoothly with our comprehensive maintenance and support services. We provide proactive monitoring, regular updates, and rapid issue resolution.",
    icon: Wrench,
    highlights: [
      "24/7 monitoring and alerting",
      "Regular security updates and patches",
      "Performance optimization and scaling",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Technology Services
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              End-to-end technology services to help you design, build, deploy, and maintain
              exceptional software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="overflow-hidden border bg-card"
              >
                <div className={`grid gap-6 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <CardHeader className="flex flex-col justify-center p-8 lg:p-12">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="mt-6 text-2xl">{service.title}</CardTitle>
                    <CardDescription className="mt-4 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-center bg-muted/30 p-8 lg:p-12">
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

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Let us discuss your requirements and create a tailored solution for your business.
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-8">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
