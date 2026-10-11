"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Building, Building2, Check, Factory, GraduationCap, HardHat, Heart, HeartPulse, Landmark, ShoppingCart, Truck } from "lucide-react"
import { cn } from "@/lib/utils"
import { CtaPanel, PageHero, Section, cardClass, reveal, trackSpotlight } from "@/components/page-sections"

type Industry = { title: string; description: string; icon: LucideIcon; solutions: string[] }

const industries: Industry[] = [
  { title: "Education", description: "Schools, colleges and coaching centres — admissions, classes, fees and exams in one system.", icon: GraduationCap, solutions: ["Learning management", "Student information system", "Online examinations", "Fee management"] },
  { title: "Logistics & Import-Export", description: "Track every shipment, warehouse and customs document from a single dashboard.", icon: Truck, solutions: ["Warehouse management", "Shipment tracking", "Customs documentation", "Supply chain analytics"] },
  { title: "Healthcare", description: "Hospital and clinic software that keeps patient records, appointments and billing together.", icon: HeartPulse, solutions: ["Hospital management", "Electronic health records", "Telemedicine", "Patient portals"] },
  { title: "Manufacturing", description: "Plan production, track quality and see stock levels from the shop floor to the office.", icon: Factory, solutions: ["Production planning", "Quality management", "Equipment monitoring", "Inventory control"] },
  { title: "Retail & E-Commerce", description: "Sell online and in store from the same inventory and the same customer list.", icon: ShoppingCart, solutions: ["E-commerce stores", "POS & billing", "Inventory management", "Loyalty programmes"] },
  { title: "Finance", description: "Lending, payments and compliance tools built with security and audit trails from day one.", icon: Landmark, solutions: ["Loan management", "Payment gateways", "Risk management", "Regulatory compliance"] },
  { title: "Real Estate", description: "List properties, follow up on leads and manage tenants without juggling spreadsheets.", icon: Building2, solutions: ["Property listings", "CRM for agents", "Virtual tours", "Tenant management"] },
  { title: "Construction", description: "Estimate costs, track progress across sites and plan people and materials per project.", icon: HardHat, solutions: ["Project tracking", "Cost estimation", "Resource planning", "Safety compliance"] },
  { title: "Government & NGOs", description: "Citizen portals and donor management that make reporting to stakeholders simple.", icon: Heart, solutions: ["Citizen portals", "Donor management", "Grant management", "Public service delivery"] },
]

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Industries"
        icon={Building}
        title="Software for the way"
        accent="your industry works"
        description="From schools and hospitals to warehouses and building sites, we build the systems each sector actually runs on — not a generic template bent to fit."
        primary={{ href: "/contact", label: "Discuss your industry" }}
        secondary={{ href: "#industries", label: "See all industries" }}
        media={{ src: "/industries-hero.mp4", label: "Industry solutions preview" }}
      />

      <Section id="industries" eyebrow="Who we work with" title="Nine industries, one team" description="Find your sector and the systems we typically build for it.">
        {(inView) => (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <article key={industry.title} onPointerMove={trackSpotlight} className={cn(cardClass, reveal(inView))} style={{ transitionDelay: `${index * 60}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                  <industry.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{industry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-border/60 pt-5">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {solution}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Discuss your project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        )}
      </Section>

      <CtaPanel
        title="Don't see your industry?"
        description="We've worked across many more sectors. Tell us how your business runs and we'll show you what we'd build."
        primary={{ href: "/contact", label: "Discuss your industry" }}
        secondary={{ href: "/services", label: "View services" }}
      />
    </div>
  )
}
