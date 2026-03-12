"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setLoaded(true)
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/images/grossi-hero.jpg"
          alt="Rafael Grossi"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
        />
        {/* Premium multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        {/* Subtle color tint */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
        {/* Overline */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-secondary" />
            <p className="text-white/80 uppercase tracking-[0.4em] text-xs font-light">
              For United Nations Secretary-General
            </p>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-secondary" />
          </div>
        </div>

        {/* Name */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-2xl md:text-3xl text-white/60 font-light tracking-wide mb-4">
            Rafael Mariano Grossi
          </h2>
        </div>

        {/* Main Headline */}
        <h1
          className={`font-serif text-6xl md:text-8xl lg:text-9xl text-white font-normal leading-none mb-10 text-balance text-glow transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          A UN That
          <span className="block mt-2 italic text-secondary">Works</span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-14 font-light leading-relaxed tracking-wide text-pretty transition-all duration-1000 delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Crisis-tested leadership for a world that cannot afford to wait.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#vision"
            className="group inline-flex items-center justify-center px-10 py-5 bg-secondary text-secondary-foreground font-medium text-xs uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300 hover-lift"
          >
            <span>Explore the Vision</span>
            <ChevronDown className="w-4 h-4 ml-3 transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#dangerous-world"
            className="inline-flex items-center justify-center px-10 py-5 border border-white/25 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            Why Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#vision"
          className="flex flex-col items-center text-white/40 hover:text-white/70 transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] mb-3 font-light">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent scroll-indicator" />
        </a>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10" />
    </section>
  )
}
