"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/grossi-hero.jpg"
          alt="Rafael Grossi"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/70 uppercase tracking-[0.3em] text-sm mb-6">
            For United Nations Secretary-General
          </p>
        </div>

        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-8 text-balance transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          A UN That Works
        </h1>

        <p
          className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed text-pretty transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Crisis-tested leadership for a world that cannot afford to wait.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#vision"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-medium text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors"
          >
            Explore the Vision
          </a>
          <a
            href="#dangerous-world"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Why Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#vision"
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
