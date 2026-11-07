import { site } from "./site"
/**
 * Every price, plan and offer on the site lives here. Pages, structured data (JSON-LD), the chatbot and llms.txt
 * read from this file, so search engines and AI answers always quote the same numbers the visitor sees.
 *
 * Margin rules behind these numbers: low entry prices win the lead; template-based Starter keeps it profitable;
 * setup fees and yearly hosting/maintenance are where the margin comes from. Discounts trade a fee for a yearly commitment.
 */

export type Plan = {
  id: string
  name: string
  price: number // INR, excluding GST
  period: "one-time" | "month"
  setupFee?: number // one-time, INR
  unit?: string // priced per unit, e.g. "outlet" → ₹499/outlet/month
  tagline: string
  features: string[]
  popular?: boolean
}

export type Faq = { q: string; a: string }

export type Offer = { id: string; title: string; detail: string; href: string; tag: string }

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`
export const planPeriod = (p: Plan) => (p.period === "month" ? `${p.unit ? `/${p.unit}` : ""}/month` : "")
export const planPrice = (p: Plan) => `${inr(p.price)}${planPeriod(p)}`

/* ===== WEBSITES ===== */

export const websitePlans: Plan[] = [
  {
    id: "website-starter",
    name: "Starter Website",
    price: 4999,
    period: "one-time",
    tagline: "Get your business online fast with a ready-made design.",
    features: [
      "Up to 5 pages, ready-made design",
      "Mobile-friendly",
      "WhatsApp chat & call buttons",
      "Contact form & Google Maps",
      "Basic SEO setup",
      "30 days bug-fix support",
    ],
  },
  {
    id: "website-business",
    name: "Business Website",
    price: 9999,
    period: "one-time",
    popular: true,
    tagline: "Custom design for shops, clinics, schools and service businesses.",
    features: [
      "Up to 8 pages, custom design",
      "Everything in Starter",
      "On-page SEO for every page",
      "Google Business Profile setup",
      "Google Analytics & Search Console",
      "30 days bug-fix support",
    ],
  },
  {
    id: "website-pro",
    name: "Pro Website",
    price: 14999,
    period: "one-time",
    tagline: "A larger site you can update yourself.",
    features: [
      "Up to 10 pages, custom design",
      "Everything in Business",
      "Admin panel to edit your content",
      "Blog or news section",
      "Speed optimisation for budget phones",
      "60 days bug-fix support",
    ],
  },
]

/** Other one-time and recurring price ranges, shown on /pricing and quoted in answers. */
export const priceRanges = {
  ecommerce: { from: 14999, to: 39999 },
  custom: { from: 25000, to: 200000 },
} as const

export const websiteFaqs: Faq[] = [
  {
    q: "How much does a website cost in India?",
    a: `At VelanDev, a professional business website costs ${inr(4999)} to ${inr(14999)} one-time. The Starter plan (${inr(4999)}) is up to 5 pages on a ready-made design, the Business plan (${inr(9999)}) is up to 8 pages with custom design, and the Pro plan (${inr(14999)}) is up to 10 pages with an admin panel. E-commerce websites cost ${inr(priceRanges.ecommerce.from)} to ${inr(priceRanges.ecommerce.to)}.`,
  },
  {
    q: "What is the cheapest website plan you offer?",
    a: `The Starter Website at ${inr(4999)} one-time: up to 5 pages on a ready-made, mobile-friendly design with WhatsApp and call buttons, a contact form, Google Maps and basic SEO.`,
  },
  {
    q: "Are hosting and maintenance included?",
    a: "Hosting, domain renewal and maintenance are billed yearly, separately from the one-time website price. We quote the exact yearly cost before you pay, so there are no surprises later.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A Starter website goes live in about a week. Business and Pro websites usually take 2 to 3 weeks, depending on how quickly content and photos are ready.",
  },
  {
    q: "Do you build websites for small businesses in Vellore and Chennai?",
    a: "Yes. VelanDev builds websites for shops, clinics, schools, restaurants, builders and service businesses in Vellore, Chennai and across Tamil Nadu and India.",
  },
  {
    q: "How much does an e-commerce website cost?",
    a: `An online store with product catalogue, cart, admin panel and payment gateway costs ${inr(priceRanges.ecommerce.from)} to ${inr(priceRanges.ecommerce.to)}, depending on the number of products and features.`,
  },
]

/* ===== WHATSAPP BOT (BotForge) ===== */

export const whatsappPlans: Plan[] = [
  {
    id: "whatsapp-starter",
    name: "BotForge Starter",
    price: 499,
    period: "month",
    setupFee: 999,
    tagline: "Never miss a customer message again.",
    features: [
      "Instant auto-reply & welcome message",
      "Menu-based FAQ bot",
      "Enquiry capture",
      "Business hours & away messages",
      "1 WhatsApp number",
    ],
  },
  {
    id: "whatsapp-growth",
    name: "BotForge Growth",
    price: 1499,
    period: "month",
    setupFee: 2499,
    popular: true,
    tagline: "Capture leads and follow up automatically.",
    features: [
      "Everything in Starter",
      "Lead management & Google Sheets sync",
      "Broadcast campaigns",
      "Shared team inbox (up to 3 agents)",
      "Hand over from bot to a person",
    ],
  },
  {
    id: "whatsapp-business",
    name: "BotForge Business",
    price: 2999,
    period: "month",
    setupFee: 4999,
    tagline: "AI replies, orders and bookings on autopilot.",
    features: [
      "Everything in Growth",
      "AI replies trained on your business",
      "Order & appointment booking flows",
      "Product catalogue in chat",
      "Up to 10 agents, API & webhooks",
    ],
  },
]

export const whatsappFaqs: Faq[] = [
  {
    q: "What is the cheapest WhatsApp bot in India?",
    a: `VelanDev's BotForge Starter WhatsApp bot costs ${inr(499)} per month plus a one-time ${inr(999)} setup, and the setup is free on yearly plans. It sends instant auto-replies, welcome and away messages, captures enquiries and runs a menu-based FAQ on your WhatsApp Business number.`,
  },
  {
    q: "How much does a WhatsApp chatbot cost per month?",
    a: `BotForge WhatsApp bot plans cost ${inr(499)}/month (Starter), ${inr(1499)}/month (Growth, with lead management and broadcasts) and ${inr(2999)}/month (Business, with AI replies and order booking). One-time setup is ${inr(999)} to ${inr(4999)}, waived when you pay yearly.`,
  },
  {
    q: "Are WhatsApp message charges included?",
    a: "Replies to customers who message you first are free on WhatsApp. Messages you start, such as broadcasts and reminders, are charged by Meta at its official per-message rates and billed at cost. We show you the rates before you send.",
  },
  {
    q: "Do I need the official WhatsApp Business API?",
    a: "Yes. Setup includes connecting and verifying your number on the official WhatsApp Business Platform, so your number stays safe from the bans unofficial tools risk.",
  },
  {
    q: "Can the WhatsApp bot reply automatically 24/7?",
    a: "Yes. The bot answers customers instantly at any time, collects their details, and hands the chat to your team when a person is needed.",
  },
  {
    q: "Which businesses use a WhatsApp bot?",
    a: "Shops, clinics, coaching centres, restaurants, real estate agents, builders and service businesses use it to answer enquiries, share price lists, take orders and book appointments.",
  },
]

/* ===== DELIVERY APP (custom build) ===== */

export const deliveryApp = { from: 49999 } as const

export const deliveryApps = [
  {
    name: "Customer app",
    features: ["Browse products or menu", "Cart, UPI & cash on delivery", "Live order tracking", "Order history & reorder", "Offers & coupons"],
  },
  {
    name: "Delivery partner app",
    features: ["New order alerts", "Pickup & drop navigation", "Proof of delivery photo", "Cash collection tracking", "Daily earnings"],
  },
  {
    name: "Admin & store panel",
    features: ["Orders & dispatch board", "Assign delivery partners", "Products, prices & stock", "Delivery zones & charges", "Sales & payout reports"],
  },
]

export const deliveryFaqs: Faq[] = [
  {
    q: "How much does a delivery app cost in India?",
    a: `A delivery app from VelanDev starts at ${inr(49999)} one-time for a customer app, delivery partner app and admin panel. The final price depends on features such as multiple vendors, payment options and integrations.`,
  },
  {
    q: "How long does it take to build a delivery app?",
    a: "A standard delivery app takes about 6 to 10 weeks from scoping to Play Store launch.",
  },
  {
    q: "Will my app be on the Google Play Store?",
    a: "Yes. We publish the customer and delivery partner apps on Google Play under your business name. App Store (iPhone) publishing is available on request.",
  },
  {
    q: "Does it include live delivery tracking?",
    a: "Yes. Customers see their order move on a map, and you see every delivery partner on the admin dispatch board.",
  },
  {
    q: "Who owns the app?",
    a: "You do. The app is published under your business name and brand.",
  },
]

/* ===== STARTUP SUPPORT (pillar 4) ===== */
// Honest range: the exact percentage is set after we review the idea, never promised up front.

export const startupOffer = { minPct: 50, maxPct: 70 } as const

export const startupFaqs: Faq[] = [
  {
    q: "Who is VelanDev's startup support for?",
    a: "Founders with an idea for a mobile app, web platform or marketplace, for example an app that lets people order building materials from local suppliers. You can be at the idea stage with nothing built yet.",
  },
  {
    q: "How much does it cost to build my app idea in India?",
    a: `At VelanDev, custom apps normally cost ${inr(priceRanges.custom.from)} to ${inr(priceRanges.custom.to)}+ depending on scope. Startups pay ${startupOffer.minPct}% to ${startupOffer.maxPct}% less, so a first version normally priced at ${inr(100000)} costs ${inr(100000 * (1 - startupOffer.maxPct / 100))} to ${inr(100000 * (1 - startupOffer.minPct / 100))}. Share your idea at ${site.url}/startup-offer or WhatsApp ${site.phone} for a free idea review.`,
  },
  {
    q: "What is the cheapest way to build an MVP for my startup idea?",
    a: `Build only the core feature first, then add the rest after real users try it. VelanDev's startup support builds that first version (Android, iPhone or web) at ${startupOffer.minPct}% to ${startupOffer.maxPct}% off, and you own the app and code. Apply at ${site.url}/startup-offer.`,
  },
  {
    q: "What does the 50% to 70% discount cover?",
    a: `The build of your first version: design, development and publishing on Google Play and the web. You pay ${startupOffer.minPct}% to ${startupOffer.maxPct}% less than our normal price for the same scope.`,
  },
  {
    q: "How do you decide between 50% and 70% off?",
    a: "We review your idea first: the problem it solves, how ready you are to launch, and the scope of the first version. We tell you the exact discount, in writing, before any work starts.",
  },
  {
    q: "Who owns the app?",
    a: "You do. The app is published under your startup's name, and the code is handed over to you.",
  },
  {
    q: "How do I apply?",
    a: "Fill in the short form about your idea. We reply on WhatsApp within 1 working day to set up an idea review call.",
  },
]

/* ===== OFFERS ===== */
// Honest offers only: no fake countdowns or "only 2 left". Each one trades a discount for commitment, so margin holds.

export const offers: Offer[] = [
  {
    id: "startup",
    tag: `${startupOffer.minPct}-${startupOffer.maxPct}% off`,
    title: "Startup support: build your idea for less",
    detail: `Have an idea for a mobile app or platform? We build your first version at ${startupOffer.minPct}% to ${startupOffer.maxPct}% off, with the exact discount set after we review your idea.`,
    href: "/startup-offer",
  },
  {
    id: "yearly",
    tag: "Setup free",
    title: "Pay yearly, skip the setup fee",
    detail: `Choose yearly billing on any BotForge plan and the one-time setup fee is waived. Save up to ${inr(4999)}.`,
    href: "/whatsapp-bot#plans",
  },
  {
    id: "combo",
    tag: "Combo",
    title: "Website + WhatsApp bot combo",
    detail: `Buy a Business or Pro website and get BotForge Starter setup free plus your first month free (worth ${inr(999 + 499)}).`,
    href: "/offers#combo",
  },
  {
    id: "free-audit",
    tag: "Free",
    title: "Free website & WhatsApp audit",
    detail: "Send us your current website or WhatsApp number. We'll reply with 5 specific fixes to get more enquiries, at no cost.",
    href: "/contact?service=website-package",
  },
  {
    id: "upgrade",
    tag: "Upgrade credit",
    title: "Start small, upgrade anytime",
    detail: "Begin with the Starter Website. Upgrade within 6 months and the full amount you paid counts towards the bigger plan.",
    href: "/website-design-cost#plans",
  },
]
