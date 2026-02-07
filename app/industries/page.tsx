import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  GraduationCap,
  Truck,
  HeartPulse,
  Factory,
  ShoppingCart,
  Landmark,
  Building,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Industries - VelanDev",
  description: "VelanDev delivers tailored software solutions across education, logistics, healthcare, manufacturing, retail, finance, and government sectors.",
}

const industries = [
  {
    title: "Education",
    description: "Comprehensive digital solutions for schools, colleges, and universities. We build learning management systems, student portals, and administrative platforms that modernize educational institutions.",
    icon: GraduationCap,
    solutions: ["Learning Management Systems", "Student Information Systems", "Online Examination Platforms", "Fee Management Systems"],
  },
  {
    title: "Logistics & Import Export",
    description: "Streamline your supply chain with intelligent logistics solutions. From inventory management to customs documentation, we help import-export businesses operate efficiently.",
    icon: Truck,
    solutions: ["Warehouse Management", "Shipment Tracking", "Customs Documentation", "Supply Chain Analytics"],
  },
  {
    title: "Healthcare",
    description: "Digital health solutions that improve patient care and operational efficiency. We build HIPAA-compliant systems for hospitals, clinics, and healthcare providers.",
    icon: HeartPulse,
    solutions: ["Hospital Management Systems", "Electronic Health Records", "Telemedicine Platforms", "Patient Portals"],
  },
  {
    title: "Manufacturing",
    description: "Industry 4.0 solutions for modern manufacturing. Automate production, optimize quality control, and gain real-time visibility into your manufacturing operations.",
    icon: Factory,
    solutions: ["Production Planning", "Quality Management", "Equipment Monitoring", "Inventory Control"],
  },
  {
    title: "Retail",
    description: "Omnichannel retail solutions that connect your online and offline presence. Build engaging customer experiences and optimize your retail operations.",
    icon: ShoppingCart,
    solutions: ["E-commerce Platforms", "POS Systems", "Inventory Management", "Customer Loyalty Programs"],
  },
  {
    title: "Finance",
    description: "Secure, compliant financial technology solutions for banks, fintech companies, and corporate finance departments. Automate processes and reduce operational risk.",
    icon: Landmark,
    solutions: ["Banking Systems", "Payment Gateways", "Risk Management", "Regulatory Compliance"],
  },
  {
    title: "Government & NGOs",
    description: "Citizen-centric digital government solutions that improve public services and organizational efficiency. We build secure, accessible platforms for public sector organizations.",
    icon: Building,
    solutions: ["Citizen Portals", "Document Management", "Grant Management", "Public Service Delivery"],
  },
]

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Industry Expertise
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              We bring deep domain expertise across diverse industries, delivering solutions
              that address sector-specific challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card
                key={industry.title}
                className="group flex flex-col border bg-card transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <industry.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="text-sm leading-relaxed">
                    {industry.description}
                  </CardDescription>
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-foreground">Key Solutions</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.solutions.map((solution) => (
                        <Badge key={solution} variant="secondary" className="text-xs">
                          {solution}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {"Don't See Your Industry?"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              We have experience across many more sectors. Contact us to discuss how we can help your specific industry.
            </p>
            <Button size="lg" asChild className="mt-8">
              <Link href="/contact">
                Discuss Your Industry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
