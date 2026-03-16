"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 40% 50%, transparent 10%, rgba(0,0,0,0.7) 100%)' }} />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[5%] bg-black z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-black z-20" />

      {/* Subtle ambient light */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
        {/* Ornamental line */}
        <div className={`flex items-center justify-center gap-6 mb-14 transition-all duration-800 delay-100 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <span className={`h-px bg-gradient-to-r from-transparent via-secondary/60 to-secondary/60 transition-all duration-800 delay-200 ${loaded ? "w-28" : "w-0"}`} />
          <div className="w-1.5 h-1.5 rotate-45 border border-secondary/50 transition-all duration-800 delay-300" />
          <span className={`h-px bg-gradient-to-l from-transparent via-secondary/60 to-secondary/60 transition-all duration-800 delay-200 ${loaded ? "w-28" : "w-0"}`} />
        </div>

        <div
          className={`transition-all duration-800 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/50 uppercase tracking-[0.6em] text-[10px] mb-10 font-light">
            For United Nations Secretary-General
          </p>
        </div>

        <div className="overflow-hidden mb-8">
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-normal leading-[0.85] tracking-tight text-shadow-premium transition-all duration-800 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            }`}
          >
            <span className="block font-light">Rafael</span>
            <span className="block text-gradient-gold-shimmer italic font-medium mt-2">Grossi</span>
          </h1>
        </div>

        <div className="overflow-hidden">
          <p
            className={`font-serif text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white/80 mb-14 tracking-wide transition-all duration-800 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A UN That <span className="italic text-white">Works</span>
          </p>
        </div>

        <p
          className={`text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed tracking-wide text-pretty transition-all duration-800 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          40 years of diplomacy. First Latin American IAEA Director General.
          A leader with boots in the mud.
        </p>

        {/* Subtle CTA hint */}
        <div
          className={`mt-16 transition-all duration-800 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#vision"
            className="group inline-flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors duration-500"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-light">Explore the Vision</span>
            <span className="w-8 h-px bg-secondary/40 group-hover:w-12 group-hover:bg-secondary transition-all duration-500" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-all duration-800 delay-700 z-10 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#vision"
          className="group flex flex-col items-center text-white/30 hover:text-white/60 transition-colors duration-500"
          aria-label="Scroll to content"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] mb-3 font-light">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-secondary to-transparent animate-pulse" />
          </div>
        </a>
      </div>

      {/* Corner accents - thinner, more refined */}
      <div className={`absolute top-[6%] left-10 w-20 h-20 transition-all duration-800 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/15 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/15 to-transparent" />
      </div>
      <div className={`absolute top-[6%] right-10 w-20 h-20 transition-all duration-800 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-white/15 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-white/15 to-transparent" />
      </div>
      <div className={`absolute bottom-[6%] left-10 w-20 h-20 transition-all duration-800 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/15 to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-white/15 to-transparent" />
      </div>
      <div className={`absolute bottom-[6%] right-10 w-20 h-20 transition-all duration-800 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-white/15 to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-white/15 to-transparent" />
      </div>
    </section>
  )
}
