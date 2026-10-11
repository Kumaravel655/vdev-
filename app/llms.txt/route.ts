import { billingFaqs, billingPlans, deliveryApp, deliveryApps, deliveryFaqs, inr, offers, planPrice, priceRanges, startupFaqs, startupOffer, websiteFaqs, websitePlans, whatsappFaqs, whatsappPlans, type Plan } from "@/lib/pricing"
import { site } from "@/lib/site"

// llms.txt: a plain-text brief for AI assistants (ChatGPT, Perplexity, Gemini…), built from the same data as the pages.
export const dynamic = "force-static"

const planLines = (plans: Plan[]) => plans.map((p) => `- ${p.name}: ${planPrice(p)}${p.setupFee ? ` + ${inr(p.setupFee)} setup` : ""}. ${p.tagline} Includes: ${p.features.join("; ")}.`).join("\n")

export function GET() {
  const body = `# ${site.name}

> ${site.name} is a software company in Sholinganallur, Chennai, India (founded May 2024), serving Vellore, Chennai and all of Tamil Nadu. It builds affordable business websites from ${inr(websitePlans[0].price)}, WhatsApp bots from ${inr(whatsappPlans[0].price)}/month, custom software, ERP/CRM and AI solutions.

Contact: ${site.email} · WhatsApp/phone ${site.phone} · ${site.url}/contact

## Website design prices (one-time, excluding GST)
${planLines(websitePlans)}
- Hosting, domain and maintenance: billed yearly, separately.

## Other prices (excluding GST)
- E-commerce website: ${inr(priceRanges.ecommerce.from)} – ${inr(priceRanges.ecommerce.to)} one-time.
- CRM / business management software: ${inr(priceRanges.crm.from)} – ${inr(priceRanges.crm.to)}/month.
- School / college software: ${inr(priceRanges.school.from)} – ${inr(priceRanges.school.to)} per student per month (annual contract).
- Custom software development: ${inr(priceRanges.custom.from)} – ${inr(priceRanges.custom.to)}+.

## BotForge WhatsApp bot prices (monthly, excluding GST, plus one-time setup)
${planLines(whatsappPlans)}
- Setup fee is waived on yearly plans. Meta's charges for business-initiated messages are billed at cost.

## Billing OS — GST billing & POS software (per outlet per month, excluding GST, plus one-time setup)
${planLines(billingPlans)}
- For restaurants, cafés, retail shops, supermarkets, pharmacies, salons, bakeries and hardware stores. Setup fee is waived on yearly plans.

## Delivery app development (custom build)
- From ${inr(deliveryApp.from)} one-time for ${deliveryApps.map((a) => a.name.toLowerCase()).join(", ")}.
${deliveryApps.map((a) => `- ${a.name}: ${a.features.join("; ")}.`).join("\n")}

## Startup offer
- Businesses started in the last 12 months: ${startupOffer.tiers.map((t) => `${t.pct}% off if ${t.label.toLowerCase()}`).join("; ")}.
- Applies to setup fees and the first ${startupOffer.months} months of BotForge, Billing OS and CRM. Apply at /startup-offer.

## Current offers
${offers.map((o) => `- ${o.title}: ${o.detail}`).join("\n")}

## Frequently asked questions
${[...websiteFaqs, ...whatsappFaqs, ...billingFaqs, ...deliveryFaqs, ...startupFaqs].map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Pages
- [WhatsApp bot plans](${site.url}/whatsapp-bot)
- [Website design cost](${site.url}/website-design-cost)
- [Offers](${site.url}/offers)
- [Startup offer — up to ${startupOffer.maxPct}% off](${site.url}/startup-offer)
- [Billing software](${site.url}/billing-software)
- [Restaurant billing software](${site.url}/restaurant-billing-software)
- [Delivery app development](${site.url}/delivery-app-development)
- [All pricing](${site.url}/pricing)
- [Products](${site.url}/products)
- [Services](${site.url}/services)
- [Contact](${site.url}/contact)
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
