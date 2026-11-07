import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { JsonLd } from '@/components/pricing-blocks'
import { site } from '@/lib/site'
import { inr, priceRanges, websitePlans, whatsappPlans } from '@/lib/pricing'

// Body: Geist (one variable file). Headings: Plus Jakarta Sans.
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `VelanDev - Websites from ${inr(websitePlans[0].price)} & WhatsApp Bots from ${inr(whatsappPlans[0].price)}/mo, Chennai`,
    template: '%s | VelanDev',
  },
  description: `VelanDev builds software that earns, automates and gives back: websites (from ${inr(websitePlans[0].price)}), apps and BotForge WhatsApp bots (from ${inr(whatsappPlans[0].price)}/month), custom AI automation, apps for social causes, and 50-70% off app builds for startups. Based in Chennai, India.`,
  keywords: ['website design vellore', 'website design chennai', 'low cost website', 'whatsapp bot', 'whatsapp chatbot india', 'software company chennai', 'AI automation', 'app development for startups', 'mobile app development', 'social welfare apps'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: site.name, locale: 'en_IN', url: '/' },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: { url: "/icon-round.png", type: "image/png", sizes: "192x192" },
    apple: "/logo.jpg",
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.jpg`,
  image: `${site.url}/logo.jpg`,
  email: site.email,
  telephone: site.phone,
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', telephone: site.phone, email: site.email, url: `${site.url}/contact`, areaServed: 'IN', availableLanguage: ['English', 'Tamil'] },
  knowsAbout: ['Low-cost website design', 'Mobile app development for startups', 'MVP development', 'WhatsApp chatbots', 'AI automation', 'Delivery app development'],
  foundingDate: site.foundingDate,
  priceRange: `${inr(whatsappPlans[0].price)} - ${inr(priceRanges.custom.to)}+`,
  address: { '@type': 'PostalAddress', ...site.address },
  areaServed: ['Vellore', 'Chennai', 'Tamil Nadu', 'India'],
  openingHours: 'Mo-Fr 09:00-18:00',
  description: `Websites from ${inr(websitePlans[0].price)}, WhatsApp bots from ${inr(whatsappPlans[0].price)}/month, custom AI automation, social welfare apps and 50-70% off for startups.`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7c3aed' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0a12' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${jakarta.variable} font-sans antialiased`}>
        <JsonLd data={organizationSchema} />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <AIChatbot />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}
