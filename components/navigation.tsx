"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_ITEMS, SCROLL_THRESHOLD_NAV } from "@/lib/constants"
import { useActiveSection } from "@/hooks/use-active-section"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const sectionIds = useMemo(
    () => NAV_ITEMS.map((item) => item.href.replace("#", "")),
    []
  )
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD_NAV)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0)
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("keydown", handleEscape)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-[800ms]",
          scrolled
            ? "bg-background/60 glass border-b border-border/15 shadow-[0_1px_50px_-15px_rgba(0,0,0,0.05)]"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
        )}
      >
        <nav className="container mx-auto px-6 md:px-12 lg:px-24" aria-label="Main navigation">
          <div className="flex items-center justify-between h-[80px]">
            <button
              onClick={scrollToTop}
              className="group flex flex-col text-left"
            >
              <span
                className={cn(
                  "font-serif text-xl font-semibold tracking-tight transition-colors duration-600",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                Rafael Grossi
              </span>
              <span
                className={cn(
                  "text-[length:var(--text-label)] uppercase tracking-[var(--tracking-wider)] transition-colors duration-600",
                  scrolled ? "text-muted-foreground/60" : "text-white/40"
                )}
              >
                For Secretary-General
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-14">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-[length:var(--text-label-lg)] uppercase tracking-[var(--tracking-normal)] font-medium transition-colors duration-600 py-2",
                      "after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-600",
                      isActive
                        ? cn(
                            "after:w-full after:bg-secondary/60",
                            scrolled ? "text-foreground" : "text-white"
                          )
                        : cn(
                            "after:w-0 after:bg-secondary/40 hover:after:w-full",
                            scrolled ? "text-foreground/35 hover:text-foreground" : "text-white/35 hover:text-white"
                          )
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors z-[60]",
                scrolled ? "text-foreground" : "text-white"
              )}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Scroll progress bar — hairline gold */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-px transition-opacity duration-600",
            scrolled ? "opacity-100" : "opacity-0"
          )}
          style={{
            width: `${scrollProgress * 100}%`,
            background: `linear-gradient(90deg, oklch(0.72 0.15 55 / 0.4), oklch(0.80 0.13 60 / 0.7), oklch(0.72 0.15 55 / 0.2))`,
          }}
        />
      </header>

      {/* Mobile navigation — backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/75 backdrop-blur-lg z-40 lg:hidden transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile navigation — panel */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal={isOpen}
        className={cn(
          "fixed inset-0 z-50 lg:hidden bg-foreground text-background",
          "flex flex-col justify-center items-center",
          "transition-[opacity,transform] duration-700",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: "var(--dot-pattern)",
            backgroundSize: "var(--dot-size-sm)",
          }}
        />

        <button
          onClick={closeMenu}
          className="absolute top-0 right-0 p-7 text-background/30 hover:text-background transition-colors z-10"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="relative flex flex-col items-center gap-12">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "font-serif text-3xl text-background/60 hover:text-background transition-[opacity,transform,color] duration-700",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isOpen ? `${i * 80 + 300}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className={cn(
            "absolute bottom-16 text-center transition-[opacity] duration-700",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
        >
          <span className="h-px w-14 bg-secondary/25 block mx-auto mb-5" />
          <p className="text-background/25 text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)]">
            For Secretary-General
          </p>
        </div>
      </div>
    </>
  )
}
