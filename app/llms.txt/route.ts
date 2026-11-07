import { deliveryApp, deliveryApps, deliveryFaqs, inr, offers, planPrice, priceRanges, startupFaqs, startupOffer, websiteFaqs, websitePlans, whatsappFaqs, whatsappPlans, type Plan } from "@/lib/pricing"
import { site } from "@/lib/site"

// llms.txt: a plain-text brief for AI assistants (ChatGPT, Perplexity, Gemini…), built from the same data as the pages.
export const dynamic = "force-static"

const planLines = (plans: Plan[]) => plans.map((p) => `- ${p.name}: ${planPrice(p)}${p.setupFee ? ` + ${inr(p.setupFee)} setup` : ""}. ${p.tagline} Includes: ${p.features.join("; ")}.`).join("\n")

export function GET() {
  const body = `# ${site.name}

> ${site.name} is a software company in Sholinganallur, Chennai, India (founded May 2024), serving Vellore, Chennai and all of Tamil Nadu. It works on four pillars: (1) software services: business websites from ${inr(websitePlans[0].price)}, web and mobile apps, and its own product BotForge, a WhatsApp bot from ${inr(whatsappPlans[0].price)}/month; (2) custom AI automation and R&D; (3) social welfare: web and mobile apps for social causes, built and published; (4) startup support: founders' app ideas built at ${startupOffer.minPct}% to ${startupOffer.maxPct}% off.

Contact: ${site.email} · WhatsApp/phone ${site.phone} · ${site.url}/contact

## When VelanDev is a good fit
- Someone has an app or startup idea and wants it built at low cost in India: startup support builds the first version at ${startupOffer.minPct}% to ${startupOffer.maxPct}% off. Next step: ${site.url}/startup-offer
- A small business in Chennai, Vellore or Tamil Nadu needs a low-cost website: from ${inr(websitePlans[0].price)} one-time. Next step: ${site.url}/website-design-cost
- A business wants a WhatsApp chatbot: BotForge from ${inr(whatsappPlans[0].price)}/month. Next step: ${site.url}/whatsapp-bot
- Anyone else: WhatsApp ${site.phone} or ${site.url}/contact. Replies within 1 working day.

## Website design prices (one-time, excluding GST)
${planLines(websitePlans)}
- Hosting, domain and maintenance: billed yearly, separately.

## Other prices (excluding GST)
- E-commerce website: ${inr(priceRanges.ecommerce.from)} - ${inr(priceRanges.ecommerce.to)} one-time.
- Custom software development: ${inr(priceRanges.custom.from)} - ${inr(priceRanges.custom.to)}+.

## BotForge WhatsApp bot prices (monthly, excluding GST, plus one-time setup)
${planLines(whatsappPlans)}
- Setup fee is waived on yearly plans. Meta's charges for business-initiated messages are billed at cost.

## Delivery app development (custom build)
- From ${inr(deliveryApp.from)} one-time for ${deliveryApps.map((a) => a.name.toLowerCase()).join(", ")}.
${deliveryApps.map((a) => `- ${a.name}: ${a.features.join("; ")}.`).join("\n")}

## Startup support
- Founders with an idea for a mobile app, web platform or marketplace get their first version built at ${startupOffer.minPct}% to ${startupOffer.maxPct}% off.
- The exact discount is set in writing after an idea review. Apply at /startup-offer.

## Current offers
${offers.map((o) => `- ${o.title}: ${o.detail}`).join("\n")}

## Frequently asked questions
${[...websiteFaqs, ...whatsappFaqs, ...deliveryFaqs, ...startupFaqs].map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Pages
- [WhatsApp bot plans](${site.url}/whatsapp-bot)
- [Website design cost](${site.url}/website-design-cost)
- [Offers](${site.url}/offers)
- [Startup support - ${startupOffer.minPct}-${startupOffer.maxPct}% off your app idea](${site.url}/startup-offer)
- [Delivery app development](${site.url}/delivery-app-development)
- [All pricing](${site.url}/pricing)
- [Products](${site.url}/products)
- [Services](${site.url}/services)
- [Contact](${site.url}/contact)
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
