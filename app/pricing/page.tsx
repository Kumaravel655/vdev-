"use client"

import Link from "next/link"
import { ArrowRight, Check, ChevronDown, Code2, Globe, GraduationCap, MessageCircle, Receipt, ShoppingCart, Star, Tag } from "lucide-react"
import { billingPlans, deliveryApp, inr, priceRanges, websitePlans, whatsappPlans } from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { CtaPanel, PageHero, Section, cardClass, reveal, trackSpotlight } from "@/components/page-sections"

const r = priceRanges
const tiers = [
  { title: "Business Website", price: inr(websitePlans[0].price), period: `– ${inr(websitePlans[2].price)} one-time`, icon: Globe, popular: true, href: "/website-design-cost", features: ["5 to 10 pages", "Mobile-friendly & SEO-ready", "Contact form & WhatsApp button", "Google Maps & Business Profile", "Hosting & maintenance billed yearly"] },
  { title: "E-Commerce Website", price: inr(r.ecommerce.from), period: `– ${inr(r.ecommerce.to)} one-time`, icon: ShoppingCart, popular: false, features: ["Product catalogue", "Cart & checkout", "Payment gateway integration", "Admin panel & order management", "Hosting & maintenance billed yearly"] },
  { title: "WhatsApp Bot (BotForge)", price: inr(whatsappPlans[0].price), period: `– ${inr(whatsappPlans[2].price)}/month`, icon: MessageCircle, popular: false, href: "/whatsapp-bot", features: ["Instant 24/7 auto-replies", "Enquiry capture & lead management", "Broadcasts & basic automation", `Setup ${inr(whatsappPlans[0].setupFee ?? 0)} – ${inr(whatsappPlans[2].setupFee ?? 0)}, free on yearly`, "Meta messaging charges at cost"] },
  { title: "Billing OS & CRM", price: inr(billingPlans[0].price), period: "/outlet/month", icon: Receipt, popular: false, href: "/billing-software", features: ["GST billing & POS for every industry", "KOT & table management for restaurants", "Inventory & WhatsApp bills", `CRM from ${inr(r.crm.from)}/month`, `Setup ${inr(billingPlans[0].setupFee ?? 0)}, free on yearly`] },
  { title: "School / College Software", price: inr(r.school.from), period: `– ${inr(r.school.to)} per student/month`, icon: GraduationCap, popular: false, features: ["Attendance", "Fee collection & receipts", "Student records", "Parent communication", "Minimum annual contract"] },
  { title: "Custom Software & Delivery Apps", price: inr(r.custom.from), period: `– ${inr(r.custom.to)}+`, icon: Code2, popular: false, href: "/delivery-app-development", features: [`Delivery apps from ${inr(deliveryApp.from)}`, "Tailored software & dashboards", "Mobile apps & ERP", "AI agents & automation", "Fixed quote after scoping"] },
]

const faqs = [
  { q: "What is included in the starting price?", a: "The starting price covers a standard scope. Complex features, custom integrations and advanced requirements can increase the cost. You get a detailed estimate once we understand what you need." },
  { q: "Do you offer payment plans?", a: "Yes. Typically 40% upfront, 30% at the midpoint and 30% on delivery. For larger projects we can arrange monthly instalments." },
  { q: "How long does a typical project take?", a: "A Starter website takes about a week and a Business or Pro website 2 to 3 weeks. E-commerce sites take 3 to 6 weeks. Custom software, mobile apps and ERP take 1 to 6 months depending on scope." },
  { q: "What if I need changes after delivery?", a: "Every plan includes a support period for bug fixes and minor changes. Larger feature additions can be planned as a new phase or a maintenance contract." },
  { q: "Do you provide hosting and maintenance?", a: "Yes. We set up and manage hosting on AWS, DigitalOcean or your preferred provider. Hosting and maintenance are billed yearly, separately from the build price, and quoted before you start." },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Pricing"
        icon={Tag}
        title="Clear prices,"
        accent="before we start"
        description="Starting prices for websites, WhatsApp bots, billing software and custom builds. After a short scoping call you get a fixed quote, with hosting and maintenance priced in writing up front."
        primary={{ href: "/contact", label: "Get a custom quote" }}
        secondary={{ href: "#plans", label: "See plans" }}
        media={{ src: "/pricing-hero.mp4", label: "Pricing preview" }}
      />

      <Section id="plans" eyebrow="Plans" title="Starting prices by product" description="All prices in Indian rupees. Your final quote depends on scope.">
        {(inView) => (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <article
                key={tier.title}
                onPointerMove={trackSpotlight}
                className={cn(cardClass, tier.popular && "border-primary/50 shadow-xl shadow-primary/10 ring-1 ring-primary/30", reveal(inView))}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                    <tier.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" aria-hidden />
                  </div>
                  {tier.popular && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      <Star className="h-3 w-3" aria-hidden /> Most popular
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{tier.title}</h3>
                <p className="mt-2">
                  <span className="text-3xl font-bold tabular-nums text-foreground">{tier.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">{tier.period}</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-border/60 pt-5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm font-medium text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={tier.href ?? "/contact"} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {tier.href ? "See all plans" : "Get a quote"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section muted eyebrow="FAQ" title="Questions about pricing">
        {(inView) => (
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                className={cn("group rounded-2xl border border-border/60 bg-card transition-all duration-500 open:border-primary/30", reveal(inView))}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" aria-hidden />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        )}
      </Section>

      <CtaPanel
        title="Need a custom quote?"
        description="Every project is different. Tell us what you need and we'll send a fixed estimate with no surprises later."
        primary={{ href: "/contact", label: "Get a custom quote" }}
        secondary={{ href: "/services", label: "View services" }}
      />
    </div>
  )
}
