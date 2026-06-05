"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Github, Facebook, ArrowUpRight, Mail, MapPin, Phone, Sparkles, Shield, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  solutions: [
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/ai-solutions", label: "AI Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/pricing", label: "Pricing" },
  ],
  resources: [
    { href: "/portfolio", label: "Case Studies" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

const socialLinks = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Facebook, label: "Facebook" },
]

const contactInfo = [
  { icon: Mail, text: "hello@velandev.in" },
  { icon: Phone, text: "6369472659" },
  { icon: MapPin, text: "Sholinganallur, Chennai, Tamil Nadu, India" },
]

const trustBadges = [
  { icon: Shield, text: "SSL Secured" },
  { icon: FileText, text: "NDA Available" },
  { icon: Shield, text: "Data Protection" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-muted/20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16">
        {/* Newsletter */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-primary/10 via-violet-500/8 to-emerald-400/10 p-8 backdrop-blur-sm md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 neural-grid opacity-15" />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center relative">
            <div className="max-w-md">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                <Sparkles className="h-3 w-3 animate-pulse" />
                Newsletter
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Stay ahead with AI insights
              </h3>
              <p className="mt-2 text-muted-foreground">
                Get the latest AI trends, technology insights, and product updates.
              </p>
            </div>
            <div className="flex w-full max-w-sm gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-background/80 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <Button className="group shrink-0 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 ai-glow">
                Subscribe
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-105">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-emerald-400 to-violet-500 shadow-lg shadow-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/40 ai-glow">
                <Image src="/logo.jpg" alt="VelanDev logo" width={40} height={40} className="h-10 w-10 object-contain rounded-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground">VelanDev</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">AI-Powered Solutions</span>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              VelanDev is an AI-powered technology company delivering intelligent
              software solutions, machine learning platforms, and next-generation
              digital products for enterprises worldwide. Founded May 2024.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              {contactInfo.map((item) => (
                <div key={item.text} className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              Mon–Fri: 9:00 AM – 6:00 PM IST
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} className="group flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg hover:shadow-primary/30" aria-label={social.label}>
                  <social.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-primary">
                    <span className="mr-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-primary">
                    <span className="mr-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-primary">
                    <span className="mr-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Trust & Security</h3>
              <div className="mt-3 space-y-2">
                {trustBadges.map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <badge.icon className="h-3.5 w-3.5 text-primary" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VelanDev. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
