"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#vision", label: "Vision" },
  { href: "#dangerous-world", label: "Experience" },
  { href: "#with-everybody", label: "Method" },
  { href: "#for-everybody", label: "Delivery" },
  { href: "#transparency", label: "Governance" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      
      // Determine active section
      const sections = navItems.map(item => item.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-4">
            {/* Monogram */}
            <div className={cn(
              "w-12 h-12 flex items-center justify-center border transition-all duration-500",
              scrolled 
                ? "border-foreground/20 text-foreground" 
                : "border-white/30 text-white"
            )}>
              <span className="font-serif text-xl font-medium">RG</span>
            </div>
            <div className="hidden sm:block">
              <span
                className={cn(
                  "font-serif text-lg font-medium tracking-tight transition-colors duration-500 block leading-tight",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                Rafael Grossi
              </span>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-[0.25em] transition-colors duration-500",
                  scrolled ? "text-muted-foreground" : "text-white/60"
                )}
              >
                For Secretary-General
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-5 py-2 text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-300",
                  scrolled
                    ? activeSection === item.href.replace('#', '')
                      ? "text-secondary"
                      : "text-foreground/60 hover:text-foreground"
                    : activeSection === item.href.replace('#', '')
                      ? "text-secondary"
                      : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full" />
                )}
              </a>
            ))}
            
            {/* CTA */}
            <a
              href="#transparency"
              className={cn(
                "ml-6 px-6 py-3 text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-300 border",
                scrolled
                  ? "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                  : "border-white/30 text-white hover:bg-white hover:text-foreground"
              )}
            >
              Full Platform
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-3 transition-colors",
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
            "lg:hidden overflow-hidden transition-all duration-500",
            isOpen ? "max-h-[400px] pb-8" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors py-3 px-4 border-l-2",
                  scrolled
                    ? activeSection === item.href.replace('#', '')
                      ? "text-secondary border-secondary"
                      : "text-foreground/60 hover:text-foreground border-transparent"
                    : activeSection === item.href.replace('#', '')
                      ? "text-secondary border-secondary"
                      : "text-white/70 hover:text-white border-transparent"
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
