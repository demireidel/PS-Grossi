"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Use requestAnimationFrame to trigger animations after paint
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with cinematic treatment */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full ken-burns">
          <Image
            src="/images/grossi-hero.jpg"
            alt="Rafael Grossi, IAEA Director General and candidate for UN Secretary-General"
            fill
            priority
            quality={90}
            className="object-cover object-left"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 100%)' }} />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[5%] bg-black z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-black z-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
        <div className={`flex items-center justify-center gap-6 mb-12 transition-all duration-1000 delay-200 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <span className={`h-px bg-gradient-to-r from-transparent to-secondary/60 transition-all duration-1000 delay-500 ${loaded ? "w-24" : "w-0"}`} />
          <div className="w-2 h-2 rotate-45 border border-secondary/60" />
          <span className={`h-px bg-gradient-to-l from-transparent to-secondary/60 transition-all duration-1000 delay-500 ${loaded ? "w-24" : "w-0"}`} />
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/60 uppercase tracking-[0.5em] text-[10px] mb-8 font-light">
            For United Nations Secretary-General
          </p>
        </div>

        <div className="overflow-hidden mb-6">
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-normal leading-[0.85] tracking-tight text-shadow-premium transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            }`}
          >
            <span className="block font-light">Rafael</span>
            <span className="block text-gradient-gold italic font-medium">Grossi</span>
          </h1>
        </div>

        <div className="overflow-hidden">
          <p
            className={`font-serif text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white/80 mb-12 tracking-wide transition-all duration-1000 delay-600 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A UN That <span className="italic text-white">Works</span>
          </p>
        </div>

        <p
          className={`text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed tracking-wide text-pretty transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          40 years of diplomacy. First Latin American IAEA Director General.
          A leader with boots in the mud.
        </p>
      </div>

      {/* Scroll Indicator */}
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
