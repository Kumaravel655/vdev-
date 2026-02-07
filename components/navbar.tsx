"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, BrainCircuit, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-smooth",
        scrolled
          ? "border-b bg-background/80 shadow-lg shadow-primary/5 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-cyan-500 to-blue-500 shadow-lg shadow-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/40 ai-glow">
            <BrainCircuit className="h-5 w-5 text-primary-foreground" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ animationDelay: `${index * 50}ms` }}
              className={cn(
                "group relative px-4 py-2 text-sm font-medium transition-all duration-300",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ease-out",
                  pathname === link.href
                    ? "w-1/2"
                    : "group-hover:w-1/3"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button
            asChild
            className="group relative overflow-hidden px-6 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 ai-glow"
          >
            <Link href="/contact">
              <span className="relative z-10 flex items-center gap-2">
                Start AI Project
                <Sparkles className="h-4 w-4 animate-pulse transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
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
          "overflow-hidden border-t bg-background/95 backdrop-blur-xl transition-all duration-500 ease-out lg:hidden",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
                "border-b border-border/50 py-4 text-sm font-medium transition-all duration-300",
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
            <Button asChild className="w-full shadow-lg shadow-primary/20 ai-glow">
              <Link href="/contact">
                <span className="flex items-center justify-center gap-2">
                  Start AI Project
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </span>
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
