import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, BadgeCheck, MessageCircle, Receipt, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqList, JsonLd, OfferGrid, PlanGrid, PlanTable, SectionTitle, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/pricing-blocks"
import { billingIndustries, billingPlans, inr, offers, whatsappPlans, type Faq } from "@/lib/pricing"
import { whatsappLink } from "@/lib/site"

const receipt = [
  { item: "Paneer Butter Masala", qty: 1, amt: 220 },
  { item: "Butter Naan", qty: 3, amt: 135 },
  { item: "Fresh Lime Soda", qty: 2, amt: 120 },
]

/**
 * One layout for every Billing OS landing page (general + industry-specific URLs).
 * Pages differ only in headline, intro, FAQ order and breadcrumb, so each can target its own search.
 */
export function BillingLanding({ path, crumb, schemaName, description, headline, intro, faqs, whatsappMessage }: {
  path: string
  crumb: string
  schemaName: string
  description: string
  headline: ReactNode
  intro: string
  faqs: Faq[]
  whatsappMessage: string
}) {
  const subtotal = receipt.reduce((s, r) => s + r.amt, 0)
  const gst = Math.round(subtotal * 0.05)
  const featuredOffers = offers.filter((o) => ["startup", "yearly", "free-audit"].includes(o.id))

  return (
    <div className="flex flex-col">
      <JsonLd data={serviceSchema(schemaName, description, path, billingPlans)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: crumb, path }])} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/30 via-muted/20 to-background pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Receipt className="h-4 w-4" aria-hidden />
                Billing OS · GST billing & POS
              </p>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{headline}</h1>
              {/* Answer-first paragraph for AI answers and featured snippets */}
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">{intro}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Button size="lg" asChild className="h-12">
                  <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" aria-hidden /> Book a free demo on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-12 bg-transparent">
                  <Link href="#plans">See plans</Link>
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
                {["GST invoices", "Works with thermal printers", "Setup free on yearly plans"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>

            {/* Receipt preview: shows the product's output instead of describing it */}
            <div role="img" aria-label="Example GST bill printed from Billing OS" className="mx-auto w-full max-w-xs rotate-1 rounded-t-xl bg-white p-6 font-mono text-[13px] text-neutral-800 shadow-2xl shadow-primary/20 [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),95%_100%,90%_calc(100%-8px),85%_100%,80%_calc(100%-8px),75%_100%,70%_calc(100%-8px),65%_100%,60%_calc(100%-8px),55%_100%,50%_calc(100%-8px),45%_100%,40%_calc(100%-8px),35%_100%,30%_calc(100%-8px),25%_100%,20%_calc(100%-8px),15%_100%,10%_calc(100%-8px),5%_100%,0_calc(100%-8px))]">
              <p className="text-center font-bold">YOUR RESTAURANT</p>
              <p className="text-center text-[11px] text-neutral-500">GSTIN 33XXXXX0000X1ZX · Table 4</p>
              <div className="my-3 border-t border-dashed border-neutral-400" />
              {receipt.map((r) => (
                <p key={r.item} className="flex justify-between gap-2"><span>{r.qty} × {r.item}</span><span>{r.amt.toFixed(2)}</span></p>
              ))}
              <div className="my-3 border-t border-dashed border-neutral-400" />
              <p className="flex justify-between"><span>Subtotal</span><span>{subtotal.toFixed(2)}</span></p>
              <p className="flex justify-between text-neutral-500"><span>CGST 2.5% + SGST 2.5%</span><span>{gst.toFixed(2)}</span></p>
              <p className="mt-1 flex justify-between font-bold"><span>TOTAL</span><span>₹{(subtotal + gst).toFixed(2)}</span></p>
              <div className="mx-auto mt-4 grid h-16 w-16 grid-cols-4 gap-0.5" aria-hidden>
                {Array.from({ length: 16 }, (_, i) => <span key={i} className={(i * 7) % 3 ? "bg-neutral-800" : "bg-white"} />)}
              </div>
              <p className="mt-2 pb-2 text-center text-[11px] text-neutral-500">Scan to pay by UPI · Bill sent on WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Plans" title="Billing OS pricing" intro={`Priced per outlet per month. One-time setup ${inr(billingPlans[0].setupFee ?? 0)}, free when you pay yearly.`} />
          <PlanGrid plans={billingPlans} contactService="billing-os" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
            Prices exclude GST. Printer, scanner and computer or tablet are not included; we can suggest compatible hardware.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-muted/20 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Every industry" title="Billing software for your kind of business" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {billingIndustries.map((ind) => (
              <div key={ind.name} className="rounded-2xl border border-border/60 bg-card p-6">
                <Store className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-4 font-semibold text-foreground">{ind.name}</h3>
                <ul className="mt-2 space-y-1">
                  {ind.points.map((pt) => <li key={pt} className="text-sm text-muted-foreground">{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/restaurant-billing-software" className="text-sm font-semibold text-primary">Restaurant billing software →</Link>
          </p>
        </div>
      </section>

      {/* Compare */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionTitle eyebrow="Compare" title="Billing OS plans at a glance" />
          <PlanTable plans={billingPlans} caption="Billing OS plans and monthly price per outlet" />
        </div>
      </section>

      {/* Offers */}
      <section className="bg-muted/20 py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Offers" title="Current offers" />
          <OfferGrid offers={featuredOffers} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionTitle eyebrow="FAQ" title="Billing software questions, answered" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* Cross-sell */}
      <section className="px-4 pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-violet-700 to-purple-900 px-6 py-14 text-center sm:px-12">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">Send every bill on WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Pair Billing OS with a BotForge WhatsApp bot from {inr(whatsappPlans[0].price)}/month to send bills, offers and order updates automatically.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" asChild className="h-12 w-full sm:w-auto">
              <Link href="/whatsapp-bot">See BotForge plans <ArrowRight className="ml-2 h-4 w-4" aria-hidden /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 w-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">
              <Link href="/delivery-app-development">Need a delivery app?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
