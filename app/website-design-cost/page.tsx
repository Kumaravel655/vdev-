import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Globe, Lock, MapPin, MessageCircle, Search, Smartphone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqList, JsonLd, OfferGrid, PlanGrid, PlanTable, SectionTitle, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/pricing-blocks"
import { inr, offers, planPrice, priceRanges, websiteFaqs, websitePlans, whatsappPlans } from "@/lib/pricing"
import { whatsappLink } from "@/lib/site"

const PATH = "/website-design-cost"
const lowest = websitePlans[0].price
const highest = websitePlans[websitePlans.length - 1].price

export const metadata: Metadata = {
  title: `Website Design from ${inr(lowest)} | Vellore & Chennai`,
  description: `Professional business websites from ${inr(lowest)} to ${inr(highest)} one-time. Mobile-friendly, SEO-ready, WhatsApp button and Google Maps included. For small businesses in Vellore, Chennai and across Tamil Nadu.`,
  keywords: ["website design cost", "low cost website design", "affordable website design chennai", "website price in india", "cheap website for small business", "website design 6000", "business website chennai", "website developer tamil nadu"],
  alternates: { canonical: PATH },
  openGraph: { title: `Websites from ${inr(lowest)} — VelanDev`, description: "Mobile-friendly, SEO-ready business websites with WhatsApp button. One-time price, no hidden fees.", url: PATH, type: "website" },
}

const included = [
  { icon: Smartphone, title: "Mobile-friendly", text: "Looks right and loads fast on everyday phones." },
  { icon: MessageCircle, title: "WhatsApp & call buttons", text: "Visitors reach you in one tap." },
  { icon: Search, title: "SEO setup", text: "Titles, descriptions and sitemap so Google can find you." },
  { icon: MapPin, title: "Google Maps", text: "Your location on the page for walk-in customers." },
  { icon: Lock, title: "Secure https", text: "SSL padlock set up with your hosting plan." },
  { icon: Zap, title: "Fast delivery", text: "Starter sites go live in about a week." },
]

export default function WebsiteCostPage() {
  const featuredOffers = offers.filter((o) => ["combo", "upgrade", "free-audit"].includes(o.id))

  return (
    <div className="flex flex-col">
      <JsonLd data={serviceSchema("Website Design", metadata.description as string, PATH, websitePlans)} />
      <JsonLd data={faqSchema(websiteFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Website Design Cost", path: PATH }])} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-muted/20 to-background pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Globe className="h-4 w-4" aria-hidden />
                Website packages
              </p>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Business websites from <span className="text-primary">{inr(lowest)}</span>
              </h1>
              {/* Answer-first paragraph: the sentence AI answers and featured snippets quote. */}
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
                A professional website from VelanDev costs {inr(lowest)} to {inr(highest)}, one-time. Every plan is mobile-friendly and includes a WhatsApp button, contact form, Google Maps and SEO setup, with no hidden fees.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button size="lg" asChild className="h-12">
                  <a href={whatsappLink(`Hi VelanDev, I want a website. Please share details of the ${inr(lowest)} plan.`)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" aria-hidden /> Get a quote on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-12 bg-transparent">
                  <Link href="#plans">Compare plans</Link>
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
                {["One-time price", "No hidden fees", "Hosting quoted upfront"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>

            {/* Price ladder: the three numbers people search for, visible at a glance */}
            <ol className="mx-auto w-full max-w-sm space-y-3">
              {websitePlans.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`} className={`flex items-center justify-between rounded-2xl border bg-card px-5 py-4 transition-colors hover:border-primary/50 ${p.popular ? "border-primary shadow-xl shadow-primary/15" : "border-border/60"}`}>
                    <span>
                      <span className="block font-semibold text-foreground">{p.name}</span>
                      <span className="text-sm text-muted-foreground">{p.features[0]}</span>
                    </span>
                    <span className="text-2xl font-bold tabular-nums text-foreground">{planPrice(p)}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Plans" title="Website design packages" intro="Pick a plan, share your content, and we build it. Upgrade anytime and what you paid counts towards the bigger plan." />
          <PlanGrid plans={websitePlans} contactService="website-package" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
            Prices exclude GST. Hosting, domain and maintenance are billed yearly, separately; we quote them before you pay. Need an online store? E-commerce websites cost {inr(priceRanges.ecommerce.from)} to {inr(priceRanges.ecommerce.to)}.
          </p>
        </div>
      </section>

      {/* Included */}
      <section className="bg-muted/20 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Every plan" title="Included in every website" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((u) => (
              <div key={u.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <u.icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-4 font-semibold text-foreground">{u.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionTitle eyebrow="Compare" title="Website prices at a glance" />
          <PlanTable plans={websitePlans} caption="VelanDev website design plans and one-time prices" />
        </div>
      </section>

      {/* Offers */}
      <section className="bg-muted/20 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Offers" title="Current offers" />
          <OfferGrid offers={featuredOffers} />
          <p className="mt-8 text-center">
            <Link href="/offers" className="text-sm font-semibold text-primary">See all offers →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionTitle eyebrow="FAQ" title="Website cost questions, answered" />
          <FaqList faqs={websiteFaqs} />
        </div>
      </section>

      {/* Cross-sell + CTA */}
      <section className="px-4 pb-20 lg:pb-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-violet-700 to-purple-900 px-6 py-14 text-center sm:px-12">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">Turn visitors into WhatsApp leads</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Add a BotForge WhatsApp bot from {inr(whatsappPlans[0].price)}/month that replies instantly and collects every enquiry, even after hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" asChild className="h-12 w-full sm:w-auto">
              <Link href="/whatsapp-bot">See WhatsApp bot plans <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 w-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">
              <Link href="/offers">All offers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
