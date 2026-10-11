"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { Mail, Building2, Send, CheckCircle2, MapPin, Phone, Clock, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { cardClass, reveal, trackSpotlight } from "@/components/page-sections"
import { billingPlans, deliveryApp, inr, websitePlans, whatsappPlans } from "@/lib/pricing"

const contactInfo = [
  {
    label: "Email",
    value: "hello@velandev.in",
    icon: Mail,
    href: "mailto:hello@velandev.in",
  },
  {
    label: "Phone",
    value: "+91 6369472659",
    icon: Phone,
    href: "tel:+916369472659",
  },
  {
    label: "Location",
    value: "Sholinganallur, Chennai, Tamil Nadu, India",
    icon: MapPin,
  },
  {
    label: "Website",
    value: "velandev.in",
    icon: Globe,
    href: "https://velandev.in",
  },
]

type ContactPayload = {
  fullName: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

export function ContactForm({ inView = true }: { inView?: boolean }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const serviceRef = useRef<HTMLSelectElement>(null)

  // Plan pages link here as /contact?service=whatsapp-bot so the lead arrives tagged.
  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("service")
    if (service && serviceRef.current) serviceRef.current.value = service
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload: ContactPayload = {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        setErrorMessage(data?.error || "Something went wrong. Please try again.")
        return
      }

      setIsSubmitted(true)
      form.reset()
    } catch {
      setErrorMessage("Unable to send your message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5">
            {/* Contact Form */}
            <div className={cn("transition-all duration-700 lg:col-span-3", reveal(inView))}>
              <Card className="h-full rounded-2xl border border-border/60 bg-card shadow-xl shadow-primary/5">
                <CardHeader>
                  <CardTitle>Project details</CardTitle>
                  <CardDescription>
                    Name, email and message are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ai-glow">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-foreground">
                        Message sent
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {"Thank you for contacting us. We'll get back to you shortly."}
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6 bg-transparent border-primary/30 hover:bg-primary/10"
                        onClick={() => {
                          setIsSubmitted(false)
                          setErrorMessage(null)
                        }}
                      >
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full name</Label>
                          <Input id="fullName" name="fullName" placeholder="Your name" required className="transition-all duration-300 focus:border-primary focus:ring-primary/20" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" placeholder="you@company.com" required className="transition-all duration-300 focus:border-primary focus:ring-primary/20" />
                        </div>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone number</Label>
                          <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="transition-all duration-300 focus:border-primary focus:ring-primary/20" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company name</Label>
                          <Input id="company" name="company" placeholder="Your Company" className="transition-all duration-300 focus:border-primary focus:ring-primary/20" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">What do you need?</Label>
                        <select
                          id="service"
                          name="service"
                          ref={serviceRef}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          <option value="website-package">Website package (from {inr(websitePlans[0].price)})</option>
                          <option value="whatsapp-bot">BotForge WhatsApp bot (from {inr(whatsappPlans[0].price)}/month)</option>
                          <option value="billing-os">Billing OS (from {inr(billingPlans[0].price)}/outlet/month)</option>
                          <option value="delivery-app">Delivery app (from {inr(deliveryApp.from)})</option>
                          <option value="startup-offer">Startup offer (new business)</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="ai-solutions">AI Solutions</option>
                          <option value="erp-crm">ERP / CRM Development</option>
                          <option value="cloud-devops">Cloud & DevOps</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="What are you building, who is it for, and when do you need it?"
                          rows={5}
                          required
                          className="transition-all duration-300 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                          "Sending..."
                        ) : (
                          <>
                            Send message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                      {errorMessage ? (
                        <p role="alert" className="text-sm text-destructive">{errorMessage}</p>
                      ) : null}
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className={cn("transition-all duration-700 delay-150 lg:col-span-2", reveal(inView))}>
              <Card onPointerMove={trackSpotlight} className={cn(cardClass, "h-full p-0 sm:p-0 hover:translate-y-0")}>
                <CardHeader>
                  <CardTitle>Other ways to reach us</CardTitle>
                  <CardDescription>
                    Prefer to talk? Call or email us directly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 hover:bg-primary/20">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-border/50 pt-6">
                    <h4 className="font-medium text-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Business hours
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Monday – Friday: 9:00 AM – 6:00 PM IST
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Saturday – Sunday: Closed
                    </p>
                  </div>

                  {/* Free consultation CTA */}
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <p className="text-sm font-semibold text-foreground">Free consultation</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Every enquiry gets a free project estimate. Ask for an AI readiness check too.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
  )
}
