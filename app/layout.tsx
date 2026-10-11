import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { AIChatbot } from '@/components/ai-chatbot'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { JsonLd } from '@/components/pricing-blocks'
import { site } from '@/lib/site'
import { inr, priceRanges, websitePlans, whatsappPlans } from '@/lib/pricing'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
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
    default: `VelanDev — Websites from ${inr(websitePlans[0].price)} & WhatsApp Bots from ${inr(whatsappPlans[0].price)}/mo, Chennai`,
    template: '%s | VelanDev',
  },
  description: `VelanDev builds affordable business websites (from ${inr(websitePlans[0].price)}), WhatsApp bots (from ${inr(whatsappPlans[0].price)}/month), custom software, ERP and AI solutions for small businesses and enterprises. Based in Chennai, India.`,
  keywords: ['website design vellore', 'website design chennai', 'low cost website', 'whatsapp bot', 'whatsapp chatbot india', 'software company chennai', 'ERP', 'CRM', 'AI solutions', 'mobile app development'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: site.name, locale: 'en_IN', url: '/' },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/logo.png`,
  email: site.email,
  telephone: site.phone,
  foundingDate: site.foundingDate,
  priceRange: `${inr(whatsappPlans[0].price)} - ${inr(priceRanges.custom.to)}+`,
  address: { '@type': 'PostalAddress', ...site.address },
  areaServed: ['Vellore', 'Chennai', 'Tamil Nadu', 'India'],
  openingHours: 'Mo-Fr 09:00-18:00',
  description: `Affordable websites from ${inr(websitePlans[0].price)}, WhatsApp bots from ${inr(whatsappPlans[0].price)}/month, custom software, ERP and AI solutions.`,
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}>
        <JsonLd data={organizationSchema} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <AIChatbot />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
