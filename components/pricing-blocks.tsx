import Link from "next/link"
import { ArrowRight, Check, ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { inr, planPeriod, planPrice, type Faq, type Offer, type Plan } from "@/lib/pricing"
import { site, whatsappLink } from "@/lib/site"

/* Server components: everything here renders as plain HTML, so crawlers and AI answer engines read it without JS. */

export function JsonLd({ data }: { data: object }) {
  // Escape "<" so a value can never close the script tag.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
}

export function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-pretty text-muted-foreground">{intro}</p>}
    </div>
  )
}

export function PlanGrid({ plans, contactService }: { plans: Plan[]; contactService: string }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.id}
          id={plan.id}
          className={cn(
            "relative flex scroll-mt-28 flex-col rounded-3xl border bg-card p-6 sm:p-8",
            plan.popular ? "border-primary shadow-2xl shadow-primary/15" : "border-border/60"
          )}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Most chosen
            </span>
          )}
          <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
          <p className="mt-1 min-h-10 text-sm text-muted-foreground">{plan.tagline}</p>
          <p className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold tabular-nums text-foreground">{inr(plan.price)}</span>
            <span className="text-sm text-muted-foreground">{planPeriod(plan) || "one-time"}</span>
          </p>
          {plan.setupFee && (
            <p className="mt-1 text-sm text-muted-foreground">
              + {inr(plan.setupFee)} one-time setup <span className="font-medium text-primary">(free on yearly)</span>
            </p>
          )}
          <ul className="mt-6 flex-1 space-y-3 border-t border-border/60 pt-6">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-2">
            <Button asChild variant={plan.popular ? "default" : "outline"} className={cn("h-11 w-full", !plan.popular && "border-primary/40 bg-transparent hover:bg-primary/10")}>
              <a href={whatsappLink(`Hi VelanDev, I'm interested in the ${plan.name} (${planPrice(plan)}).`)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
                Get this on WhatsApp
              </a>
            </Button>
            <Link href={`/contact?service=${contactService}`} className="py-1 text-center text-sm font-medium text-muted-foreground hover:text-primary">
              or request a callback
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

/** Plan comparison as a real table: answer engines lift tables directly into responses. */
export function PlanTable({ plans, caption }: { plans: Plan[]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/60">
      <table className="w-full min-w-[520px] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-muted/50 text-foreground">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold">Plan</th>
            <th scope="col" className="px-4 py-3 font-semibold">Price</th>
            <th scope="col" className="px-4 py-3 font-semibold">Best for</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((p) => (
            <tr key={p.id} className="border-t border-border/60">
              <th scope="row" className="px-4 py-3 font-medium text-foreground">{p.name}</th>
              <td className="px-4 py-3 tabular-nums text-foreground">
                {planPrice(p)}
                {p.setupFee && <span className="block text-xs text-muted-foreground">+ {inr(p.setupFee)} setup</span>}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{p.tagline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Native <details>: no JS, keyboard accessible, and answers stay in the HTML for crawlers. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card">
      {faqs.map((f, i) => (
        <details key={f.q} className="group px-5 py-4 sm:px-6" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
            <h3 className="text-base">{f.q}</h3>
            <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function OfferGrid({ offers }: { offers: Offer[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((o) => (
        <Link
          key={o.id}
          id={o.id}
          href={o.href}
          className="group flex scroll-mt-28 flex-col rounded-2xl border border-gold/30 bg-card p-6 transition-colors hover:border-gold/60"
        >
          <span className="w-fit rounded-md bg-gold/15 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:text-gold">{o.tag}</span>
          <h3 className="mt-4 text-lg font-semibold text-foreground">{o.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{o.detail}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Claim this offer
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </Link>
      ))}
    </div>
  )
}

/* ===== Structured data builders ===== */

const provider = { "@type": "Organization", name: site.name, url: site.url }

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
})

export const serviceSchema = (name: string, description: string, path: string, plans: Plan[]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `${site.url}${path}`,
  provider,
  areaServed: { "@type": "Country", name: "India" },
  offers: plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    description: p.setupFee ? `${p.tagline} One-time setup ${inr(p.setupFee)}, waived on yearly plans.` : p.tagline,
    price: p.price,
    priceCurrency: "INR",
    url: `${site.url}${path}#${p.id}`,
    ...(p.period === "month" && {
      priceSpecification: { "@type": "UnitPriceSpecification", price: p.price, priceCurrency: "INR", unitCode: "MON", billingDuration: "P1M" },
    }),
  })),
})

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
})
