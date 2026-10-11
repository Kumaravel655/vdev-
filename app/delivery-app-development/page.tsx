import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Bike, Check, LayoutDashboard, MessageCircle, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqList, JsonLd, SectionTitle, breadcrumbSchema, faqSchema } from "@/components/pricing-blocks"
import { deliveryApp, deliveryApps, deliveryFaqs, inr } from "@/lib/pricing"
import { site, whatsappLink } from "@/lib/site"

const PATH = "/delivery-app-development"
const from = inr(deliveryApp.from)

export const metadata: Metadata = {
  title: `Delivery App Development from ${from} — Vellore & Chennai`,
  description: `Get your own delivery app from ${from}: customer app, delivery partner app and admin panel with live tracking, UPI payments and Play Store launch. For restaurants, grocery, pharmacy and building-material businesses in Vellore, Chennai and India.`,
  keywords: ["delivery app development", "delivery app cost india", "food delivery app development", "grocery delivery app", "delivery app chennai", "delivery app vellore", "own delivery app for restaurant"],
  alternates: { canonical: PATH },
  openGraph: { title: `Your own delivery app from ${from}`, url: PATH, type: "website" },
}

const appIcons = [Smartphone, Bike, LayoutDashboard]
const useCases = ["Restaurants & cloud kitchens", "Grocery & supermarkets", "Pharmacies", "Building materials & hardware", "Laundry & home services", "Water & gas delivery"]
const process = [
  { title: "Scope", text: "We map your products, delivery area and how orders flow today." },
  { title: "Design", text: "Screens for all three apps, in your brand colours." },
  { title: "Build", text: "Weekly builds you can try on your own phone." },
  { title: "Launch", text: "Published on Google Play under your business name." },
  { title: "Support", text: "Bug fixes, updates and help as orders grow." },
]

export default function DeliveryAppPage() {
  return (
    <div className="flex flex-col">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Delivery App Development",
          description: metadata.description,
          url: `${site.url}${PATH}`,
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: { "@type": "Country", name: "India" },
          offers: { "@type": "Offer", priceCurrency: "INR", price: deliveryApp.from, description: "Starting price for customer app, delivery partner app and admin panel" },
        }}
      />
      <JsonLd data={faqSchema(deliveryFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Delivery App Development", path: PATH }])} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/30 via-muted/20 to-background pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Bike className="h-4 w-4" aria-hidden />
            Delivery app development
          </p>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your own delivery app, from <span className="text-primary">{from}</span>
          </h1>
          {/* Answer-first paragraph for AI answers and featured snippets */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            VelanDev builds delivery apps starting at {from} one-time: a customer app, a delivery partner app and an admin panel, with live tracking and UPI payments, published on Google Play under your business name.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild className="h-12">
              <a href={whatsappLink("Hi VelanDev, I need a delivery app for my business. Can we discuss?")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden /> Discuss your app on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 bg-transparent">
              <Link href="/contact?service=delivery-app">Get a written quote</Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["3 apps in one project", "Live order tracking", "Your brand on Play Store"].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" aria-hidden />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Three apps */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="What you get" title="Three apps, one delivery system" />
          <div className="grid gap-6 md:grid-cols-3">
            {deliveryApps.map((app, i) => {
              const Icon = appIcons[i]
              return (
                <article key={app.name} className="flex flex-col rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{app.name}</h3>
                  <ul className="mt-5 space-y-3 border-t border-border/60 pt-5">
                    {app.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-muted/20 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Who it's for" title="Delivery apps for local businesses" />
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {useCases.map((u) => (
              <li key={u} className="rounded-2xl border border-border/60 bg-card px-5 py-4 text-sm font-medium text-foreground">{u}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Process" title="From idea to Play Store in about 6–10 weeks" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <li key={p.title} className="rounded-2xl border border-border/60 bg-card p-5">
                <span className="text-2xl font-bold tabular-nums text-primary">0{i + 1}</span>
                <h3 className="mt-2 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionTitle eyebrow="FAQ" title="Delivery app questions, answered" />
          <FaqList faqs={deliveryFaqs} />
        </div>
      </section>

      {/* Cross-sell */}
      <section className="px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-violet-700 to-purple-900 px-6 py-14 text-center sm:px-12">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">Connect orders to your billing counter</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Billing OS Premium takes online orders from your own app alongside walk-in bills, so stock and sales stay in one place.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" variant="secondary" asChild className="h-12 w-full sm:w-auto">
              <Link href="/billing-software">See Billing OS <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
