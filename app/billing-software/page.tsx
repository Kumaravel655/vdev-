import type { Metadata } from "next"
import { BillingLanding } from "@/components/billing-landing"
import { billingFaqs, billingPlans, inr } from "@/lib/pricing"

const PATH = "/billing-software"
const from = inr(billingPlans[0].price)

export const metadata: Metadata = {
  title: `Billing Software from ${from}/outlet/month — GST & POS`,
  description: `Billing OS: GST billing and POS software for restaurants, shops, supermarkets, pharmacies and salons from ${from} per outlet per month. Thermal printer, barcode, UPI QR and WhatsApp bills. Vellore, Chennai and Tamil Nadu.`,
  keywords: ["billing software", "gst billing software", "pos software", "billing software for shop", "billing software price", "billing software chennai", "billing software vellore", "supermarket billing software", "pharmacy billing software"],
  alternates: { canonical: PATH },
  openGraph: { title: `Billing Software from ${from}/outlet/month`, url: PATH, type: "website" },
}

export default function BillingSoftwarePage() {
  return (
    <BillingLanding
      path={PATH}
      crumb="Billing Software"
      schemaName="Billing OS — GST Billing & POS Software"
      description={metadata.description as string}
      headline={<>GST billing software from <span className="text-primary">{from}/outlet</span></>}
      intro={`Billing OS is GST billing and POS software for restaurants, shops and every retail business, from ${from} per outlet per month. Print bills on thermal printers, scan barcodes, show a UPI QR on every bill and send bills on WhatsApp.`}
      faqs={billingFaqs}
      whatsappMessage={`Hi VelanDev, I'd like a demo of Billing OS (from ${from}/outlet/month).`}
    />
  )
}
