"use client"

import { Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { CtaPanel, PageHero, Section } from "@/components/page-sections"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Contact"
        icon={Mail}
        title="Tell us what"
        accent="you're building"
        description="Send a message, call or email — whichever suits you. We reply within 24 hours on working days with a clear next step and a free estimate."
        primary={{ href: "#message", label: "Send a message" }}
        secondary={{ href: "tel:+916369472659", label: "Call +91 63694 72659" }}
        media={{ src: "/contact-hero.mp4", label: "Animated envelope" }}
      />

      <Section id="message" eyebrow="Get in touch" title="Send us a message" description="Share a few details about your project. The more you tell us, the more accurate our first estimate.">
        {(inView) => <ContactForm inView={inView} />}
      </Section>

      <CtaPanel
        title="Want to see prices first?"
        description="Every plan has a published starting price, so you know the range before we talk."
        primary={{ href: "/pricing", label: "View pricing" }}
        secondary={{ href: "/services", label: "View services" }}
      />
    </div>
  )
}
