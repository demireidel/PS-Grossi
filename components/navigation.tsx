"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#vision", label: "Vision" },
  { href: "#dangerous-world", label: "Experience" },
  { href: "#with-everybody", label: "Diplomacy" },
  { href: "#for-everybody", label: "Delivery" },
  { href: "#platform", label: "Platform" },
  { href: "#global-south", label: "Global South" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-background/98 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-gradient-to-b from-black/40 to-transparent"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span
              className={cn(
                "font-serif text-xl font-semibold tracking-tight transition-colors duration-300",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              Rafael Grossi
            </span>
            <span
              className={cn(
                "text-xs uppercase tracking-[0.2em] transition-colors duration-300",
                scrolled ? "text-muted-foreground" : "text-white/70"
              )}
            >
              For Secretary-General
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[11px] uppercase tracking-[0.12em] font-medium transition-all duration-300 py-2",
                  scrolled
                    ? "text-foreground/60 hover:text-foreground"
                    : "text-white/60 hover:text-white",
                  "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors py-2",
                  scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
