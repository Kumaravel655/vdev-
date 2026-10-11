import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Gift, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JsonLd, OfferGrid, PlanTable, SectionTitle, breadcrumbSchema } from "@/components/pricing-blocks"
import { inr, offers, websitePlans, whatsappPlans } from "@/lib/pricing"
import { site, whatsappLink } from "@/lib/site"

const PATH = "/offers"

export const metadata: Metadata = {
  title: `Offers: Websites from ${inr(websitePlans[0].price)}, WhatsApp Bot from ${inr(whatsappPlans[0].price)}/month`,
  description: `Current VelanDev offers: setup free on yearly BotForge WhatsApp plans, website + WhatsApp bot combo, a free website audit and upgrade credit. Websites from ${inr(websitePlans[0].price)}.`,
  keywords: ["website offer", "whatsapp bot offer", "website design discount chennai", "low cost website and whatsapp bot", "website combo offer"],
  alternates: { canonical: PATH },
  openGraph: { title: "VelanDev offers on websites and WhatsApp bots", url: PATH, type: "website" },
}

export default function OffersPage() {
  return (
    <div className="flex flex-col">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: `${site.name} offers`,
          url: `${site.url}${PATH}`,
          itemListElement: offers.map((o) => ({ "@type": "Offer", name: o.title, description: o.detail, url: `${site.url}${o.href}` })),
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Offers", path: PATH }])} />

      <section className="bg-gradient-to-b from-accent/30 via-muted/20 to-background pb-16 pt-32 text-center lg:pb-20 lg:pt-40">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-sm font-medium text-amber-700 dark:text-gold">
            <Gift className="h-4 w-4" aria-hidden />
            Current offers
          </p>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            More for less on websites & WhatsApp bots
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
            Websites from {inr(websitePlans[0].price)} one-time. WhatsApp bots from {inr(whatsappPlans[0].price)}/month, setup free on yearly plans. Combine them and save more.
          </p>
          <Button size="lg" asChild className="mt-8 h-12">
            <a href={whatsappLink("Hi VelanDev, I'd like to know more about your current offers.")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden /> Ask about an offer on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <OfferGrid offers={offers} />
        </div>
      </section>

      <section className="bg-muted/20 py-20 lg:py-24">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Websites" title="Website prices" />
            <PlanTable plans={websitePlans} caption="Website plans and one-time prices" />
            <p className="mt-6 text-center">
              <Link href="/website-design-cost" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Full website plans <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </p>
          </div>
          <div>
            <SectionTitle eyebrow="WhatsApp" title="WhatsApp bot prices" />
            <PlanTable plans={whatsappPlans} caption="WhatsApp bot plans and monthly prices" />
            <p className="mt-6 text-center">
              <Link href="/whatsapp-bot" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Full WhatsApp bot plans <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
