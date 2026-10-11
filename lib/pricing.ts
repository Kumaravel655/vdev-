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
  crm: { from: 999, to: 4999 }, // per month
  school: { from: 15, to: 50 }, // per student per month, minimum annual contract
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

/* ===== BILLING OS ===== */

export const billingPlans: Plan[] = [
  {
    id: "billing-starter",
    name: "Billing OS Starter",
    price: 499,
    period: "month",
    unit: "outlet",
    setupFee: 1999,
    tagline: "Fast GST billing for a single counter.",
    features: [
      "Quick billing with item search",
      "GST invoices",
      "Thermal printer & barcode scanner",
      "UPI QR code on every bill",
      "Daily sales report",
    ],
  },
  {
    id: "billing-pro",
    name: "Billing OS Pro",
    price: 999,
    period: "month",
    unit: "outlet",
    setupFee: 1999,
    popular: true,
    tagline: "Stock, kitchen orders and repeat customers.",
    features: [
      "Everything in Starter",
      "Inventory & low-stock alerts",
      "KOT & table management (restaurants)",
      "Customer list & loyalty points",
      "Send bills on WhatsApp",
      "Staff logins with permissions",
    ],
  },
  {
    id: "billing-premium",
    name: "Billing OS Premium",
    price: 1499,
    period: "month",
    unit: "outlet",
    setupFee: 1999,
    tagline: "Run several outlets from one dashboard.",
    features: [
      "Everything in Pro",
      "Multi-outlet dashboard",
      "Purchase & supplier management",
      "Online orders from your own website or app",
      "Advanced reports & Excel export",
    ],
  },
]

export const billingIndustries = [
  { name: "Restaurants & cafés", points: ["KOT & table management", "Dine-in, takeaway & delivery bills"] },
  { name: "Retail & supermarkets", points: ["Barcode billing", "Stock & reorder alerts"] },
  { name: "Pharmacies", points: ["Batch & expiry tracking", "GST invoices"] },
  { name: "Salons & spas", points: ["Service & package billing", "Customer history & loyalty"] },
  { name: "Bakeries & sweet shops", points: ["Weight-based billing", "Daily production & sales"] },
  { name: "Hardware & building supply", points: ["Credit customers & dues", "Supplier purchases"] },
]

export const billingFaqs: Faq[] = [
  {
    q: "How much does restaurant billing software cost?",
    a: `VelanDev Billing OS costs ${inr(499)} to ${inr(1499)} per outlet per month, plus a one-time ${inr(1999)} setup that is free on yearly plans. The Pro plan (${inr(999)}/outlet/month) adds KOT, table management, inventory and WhatsApp bills for restaurants.`,
  },
  {
    q: "What is the best billing software for small shops in Chennai and Vellore?",
    a: `For small shops, VelanDev Billing OS Starter (${inr(499)}/outlet/month) covers fast GST billing, thermal printing, barcode scanning and a UPI QR on every bill. We set it up for you and support you in Tamil and English.`,
  },
  {
    q: "Does Billing OS create GST invoices?",
    a: "Yes. Every plan creates GST-compliant invoices with your GSTIN, HSN/SAC codes and tax breakup, and gives you daily and monthly sales reports for filing.",
  },
  {
    q: "Does it work with thermal printers and barcode scanners?",
    a: "Yes. Billing OS works with standard 2-inch and 3-inch thermal printers and USB barcode scanners.",
  },
  {
    q: "Can I send bills to customers on WhatsApp?",
    a: "Yes, on the Pro and Premium plans. Customers get their bill on WhatsApp instead of paper, and you build a customer list for offers.",
  },
  {
    q: "Which businesses can use Billing OS?",
    a: "Restaurants, cafés, retail shops, supermarkets, pharmacies, salons, bakeries, sweet shops, and hardware and building-supply stores.",
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

/* ===== STARTUP OFFER ===== */
// Honest "up to": the tiers are published, verified from the business start date before billing.

export const startupOffer = {
  maxPct: 50,
  months: 3,
  tiers: [
    { maxMonths: 3, pct: 50, label: "Started less than 3 months ago" },
    { maxMonths: 12, pct: 30, label: "Started 3 to 12 months ago" },
  ],
} as const

export const startupFaqs: Faq[] = [
  {
    q: "Who qualifies for the startup offer?",
    a: "Any business started or registered in the last 12 months. We check the start date from your GST, Udyam or shop licence, or another proof of start date if you are not registered yet.",
  },
  {
    q: "What does the startup discount apply to?",
    a: `Setup fees and the first ${startupOffer.months} months of any subscription: BotForge WhatsApp bot, Billing OS and CRM. Businesses under 3 months old get 50% off; businesses 3 to 12 months old get 30% off. One-time builds such as websites stay at their normal price.`,
  },
  {
    q: "Can I combine the startup offer with other offers?",
    a: "No. The startup offer is one per business and can't be combined with other offers. We apply whichever saves you more.",
  },
  {
    q: "How do I apply?",
    a: "Fill in the short form with your business details. We confirm your discount and reply on WhatsApp within 1 working day.",
  },
]

/* ===== OFFERS ===== */
// Honest offers only: no fake countdowns or "only 2 left". Each one trades a discount for commitment, so margin holds.

export const offers: Offer[] = [
  {
    id: "startup",
    tag: `Up to ${startupOffer.maxPct}% off`,
    title: "Just started? Startup offer",
    detail: `Businesses under 12 months old get up to ${startupOffer.maxPct}% off setup and the first ${startupOffer.months} months of BotForge, Billing OS or CRM. Apply with your business details.`,
    href: "/startup-offer",
  },
  {
    id: "yearly",
    tag: "Setup free",
    title: "Pay yearly, skip the setup fee",
    detail: `Choose yearly billing on any BotForge or Billing OS plan and the one-time setup fee is waived. Save up to ${inr(4999)}.`,
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
