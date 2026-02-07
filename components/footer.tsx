"use client"

import Link from "next/link"
import { Linkedin, Twitter, Github, Facebook, ArrowUpRight, Mail, MapPin, Phone, BrainCircuit, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  solutions: [
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
  ],
  resources: [
    { href: "#", label: "Documentation" },
    { href: "#", label: "Case Studies" },
    { href: "#", label: "Blog" },
  ],
}

const socialLinks = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Facebook, label: "Facebook" },
]

const contactInfo = [
  { icon: Mail, text: "hello@velandev.com" },
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: MapPin, text: "San Francisco, CA" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-muted/30">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16">
        {/* Top Section - Newsletter */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-primary/10 via-cyan-500/10 to-blue-500/10 p-8 backdrop-blur-sm md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 neural-grid opacity-20" />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center relative">
            <div className="max-w-md">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                <Sparkles className="h-3 w-3 animate-pulse" />
                AI Newsletter
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

        {/* Main Footer Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-cyan-500 to-blue-500 shadow-lg shadow-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/40 ai-glow">
                <BrainCircuit className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground">
                  VelanDev
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  AI-Powered Solutions
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              VelanDev is an AI-powered technology company delivering intelligent
              software solutions, machine learning platforms, and next-generation
              digital products for enterprises worldwide.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              {contactInfo.map((item) => (
                <div
                  key={item.text}
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg hover:shadow-primary/30"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    <span className="mr-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Solutions
            </h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    <span className="mr-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    <span className="mr-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} VelanDev. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
