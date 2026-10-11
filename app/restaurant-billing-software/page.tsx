import type { Metadata } from "next"
import { BillingLanding } from "@/components/billing-landing"
import { billingFaqs, billingPlans, inr } from "@/lib/pricing"

const PATH = "/restaurant-billing-software"
const from = inr(billingPlans[0].price)
const pro = billingPlans.find((p) => p.popular) ?? billingPlans[1]

export const metadata: Metadata = {
  title: `Restaurant Billing Software from ${from}/outlet/month`,
  description: `Restaurant billing software with KOT, table management, GST bills, inventory and WhatsApp bills, from ${from} per outlet per month. For restaurants, cafés, bakeries and cloud kitchens in Vellore, Chennai and Tamil Nadu.`,
  keywords: ["restaurant billing software", "restaurant pos", "kot software", "restaurant billing software price", "cafe billing software", "hotel billing software chennai", "restaurant billing software vellore", "cloud kitchen billing"],
  alternates: { canonical: PATH },
  openGraph: { title: `Restaurant Billing Software from ${from}/outlet/month`, url: PATH, type: "website" },
}

export default function RestaurantBillingPage() {
  return (
    <BillingLanding
      path={PATH}
      crumb="Restaurant Billing Software"
      schemaName="Billing OS — Restaurant Billing & KOT Software"
      description={metadata.description as string}
      headline={<>Restaurant billing software from <span className="text-primary">{from}/outlet</span></>}
      intro={`Billing OS runs your restaurant counter: GST bills, KOT to the kitchen, table management, stock and bills on WhatsApp. Plans start at ${from} per outlet per month; KOT and table management come with ${pro.name} at ${inr(pro.price)}.`}
      faqs={billingFaqs}
      whatsappMessage={`Hi VelanDev, I'd like a demo of Billing OS for my restaurant.`}
    />
  )
}
