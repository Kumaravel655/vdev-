"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl transition-all duration-500 ease-smooth",
        mobileMenuOpen ? "rounded-3xl" : "rounded-full",
        "surface-light border border-white/60 bg-white/95 backdrop-blur-xl shadow-lg shadow-black/20"
      )}
    >
      {/* Divider under the bar while the mobile menu is open */}
      {mobileMenuOpen && (
        <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      )}

      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3"
        >
          {/* Brand: peacock mark + the wordmark cut from the official logo file */}
          <Image
            src="/icon-round.png"
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 rounded-full shadow-md shadow-primary/25 ring-1 ring-primary/15 sm:h-11 sm:w-11"
            priority
          />
          <Image
            src="/wordmark.png"
            alt="VelanDev Solutions Pvt Ltd"
            width={417}
            height={70}
            className="h-6 w-auto sm:h-7 xl:h-6 2xl:h-7"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ animationDelay: `${index * 50}ms` }}
              className={cn(
                "group relative whitespace-nowrap px-2 py-2 text-sm font-medium transition-all duration-300 2xl:px-3",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-purple-400 transition-all duration-300 ease-out",
                  pathname === link.href
                    ? "w-1/2"
                    : "group-hover:w-1/3"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 xl:flex">
          <Button
            asChild
            className="group relative overflow-hidden px-6 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <Link href="/contact">
              <span className="relative z-10 flex items-center gap-2">
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-400 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 xl:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="relative overflow-hidden transition-transform duration-200 active:scale-95"
          >
            <div
              className={cn(
                "absolute inset-0 bg-primary/10 transition-transform duration-300",
                mobileMenuOpen ? "scale-100" : "scale-0"
              )}
            />
            {mobileMenuOpen ? (
              <X className="relative h-5 w-5 transition-transform duration-300" />
            ) : (
              <Menu className="relative h-5 w-5 transition-transform duration-300" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "overflow-hidden border-t border-primary/10 bg-white transition-all duration-500 ease-out xl:hidden",
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
          "rounded-b-3xl"
        )}
      >
        <nav className="container mx-auto flex flex-col px-4 py-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
              className={cn(
                "border-b border-border/50 py-3.5 text-sm font-medium transition-all duration-300",
                mobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={cn(
              "mt-4 border-t pt-4 transition-all duration-300",
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: mobileMenuOpen
                ? `${navLinks.length * 50}ms`
                : "0ms",
            }}
          >
            <Button asChild className="w-full shadow-lg shadow-primary/20">
              <Link href="/contact">
                <span className="flex items-center justify-center gap-2">
                  Start your project
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
