"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_ITEMS, SCROLL_THRESHOLD_NAV, DOT_PATTERN_SM, DOT_PATTERN_SIZE_SM } from "@/lib/constants"
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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-600",
          scrolled
            ? "bg-background/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-border/30 shadow-[0_1px_30px_-10px_rgba(0,0,0,0.08)]"
            : "bg-gradient-to-b from-black/50 via-black/20 to-transparent"
        )}
      >
        <nav className="container mx-auto px-6 md:px-12 lg:px-20" aria-label="Main navigation">
          <div className="flex items-center justify-between h-[76px]">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="group flex flex-col"
            >
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
            </a>

            <div className="hidden lg:flex items-center gap-12">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-400 py-2",
                      "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gradient-to-r after:from-secondary after:to-secondary/50 after:transition-all after:duration-400",
                      isActive
                        ? cn(
                            "after:w-full",
                            scrolled ? "text-foreground" : "text-white"
                          )
                        : cn(
                            "after:w-0 hover:after:w-full",
                            scrolled
                              ? "text-foreground/50 hover:text-foreground"
                              : "text-white/50 hover:text-white"
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

        {/* Scroll progress bar */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-px bg-secondary/60 transition-opacity duration-400",
            scrolled ? "opacity-100" : "opacity-0"
          )}
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </header>

      {/* Mobile navigation — full-screen overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal={isOpen}
        className={cn(
          "fixed inset-0 z-50 lg:hidden bg-foreground text-background",
          "flex flex-col justify-center items-center",
          "transition-[opacity,transform] duration-500",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: DOT_PATTERN_SM, backgroundSize: DOT_PATTERN_SIZE_SM }}
        />

        {/* Close button */}
        <button
          onClick={closeMenu}
          className="absolute top-0 right-0 p-6 text-background/60 hover:text-background transition-colors z-10"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="relative flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "font-serif text-3xl text-background/80 hover:text-background transition-[opacity,transform,color] duration-500",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isOpen ? `${i * 60 + 200}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className={cn(
            "absolute bottom-12 text-center transition-[opacity] duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
        >
          <span className="h-px w-12 bg-secondary/40 block mx-auto mb-4" />
          <p className="text-background/40 text-[10px] uppercase tracking-[0.3em]">
            For Secretary-General
          </p>
        </div>
      </div>
    </>
  )
}
