"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_ITEMS, SCROLL_THRESHOLD_NAV } from "@/lib/constants"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD_NAV)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-600",
        scrolled
          ? "bg-background/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-border/30 shadow-[0_1px_30px_-10px_rgba(0,0,0,0.08)]"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-20" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[76px]">
          <Link href="/" className="group flex flex-col">
            <span
              className={cn(
                "font-serif text-xl font-semibold tracking-tight transition-colors duration-400",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              Rafael Grossi
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] transition-colors duration-400",
                scrolled ? "text-muted-foreground" : "text-white/60"
              )}
            >
              For Secretary-General
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-400 py-2",
                  scrolled
                    ? "text-foreground/50 hover:text-foreground"
                    : "text-white/50 hover:text-white",
                  "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-secondary after:to-secondary/50 after:transition-all after:duration-400 hover:after:w-full"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          role="region"
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height,padding] duration-300",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
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
