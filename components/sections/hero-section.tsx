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
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with cinematic treatment */}
      <div className="absolute inset-0 w-full h-full film-grain">
        <div className="absolute inset-0 w-full h-full ken-burns">
          <Image
            src="/images/grossi-hero.jpg"
            alt="Rafael Grossi"
            fill
            priority
            className="object-cover object-center color-grade-warm"
            sizes="100vw"
          />
        </div>
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        {/* Vignette effect */}
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Letterbox bars for cinematic feel */}
      <div className="absolute top-0 left-0 right-0 h-[3%] bg-black/70 z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[3%] bg-black/70 z-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
        {/* Decorative line */}
        <div className={`flex items-center justify-center gap-8 mb-10 transition-all duration-1000 delay-200 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <span className={`h-px bg-secondary/60 transition-all duration-1000 delay-500 ${loaded ? "w-16" : "w-0"}`} />
          <span className={`h-px bg-secondary/60 transition-all duration-1000 delay-500 ${loaded ? "w-16" : "w-0"}`} />
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/50 uppercase tracking-[0.4em] text-[11px] mb-8 font-light">
            For United Nations Secretary-General
          </p>
        </div>

        <div className="overflow-hidden">
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-[7rem] text-white font-normal leading-[0.95] mb-10 tracking-tight transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            }`}
          >
            <span className="block">A UN That</span>
            <span className="block text-secondary italic">Works</span>
          </h1>
        </div>

        <p
          className={`text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto mb-14 font-light leading-relaxed tracking-wide text-pretty transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Crisis-tested leadership for a world that cannot afford to wait.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#vision"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-secondary text-secondary-foreground font-medium text-[11px] uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-secondary/20"
          >
            <span className="relative z-10">Explore the Vision</span>
            <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
          <a
            href="#dangerous-world"
            className="inline-flex items-center justify-center px-10 py-5 border border-white/20 text-white font-medium text-[11px] uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Why Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator - refined */}
      <div
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 z-10 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#vision"
          className="group flex flex-col items-center text-white/40 hover:text-white/70 transition-colors duration-500"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] mb-3 font-light">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-secondary animate-pulse" />
          </div>
        </a>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-[6%] left-8 w-16 h-16 border-l border-t border-white/10 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute top-[6%] right-8 w-16 h-16 border-r border-t border-white/10 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute bottom-[6%] left-8 w-16 h-16 border-l border-b border-white/10 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute bottom-[6%] right-8 w-16 h-16 border-r border-b border-white/10 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`} />
    </section>
  )
}
