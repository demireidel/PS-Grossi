"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { OrnamentalDivider } from "@/components/ornamental-divider"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image — cinematic treatment */}
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
        {/* 5-layer gradient system for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/10 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-black/60" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 40%, transparent 5%, rgba(0,0,0,0.8) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.4) 100%)' }} />
        <div className="absolute inset-0 film-grain" />
      </div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[7%] bg-gradient-to-b from-black to-black/80 z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[7%] bg-gradient-to-t from-black to-black/80 z-20" />

      {/* Ambient light — warm pools */}
      <div className="absolute top-1/5 left-1/5 w-[900px] h-[900px] bg-secondary/[0.02] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[600px] h-[600px] bg-secondary/[0.012] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.008] rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Ornamental divider */}
        <div className={cn(
          "transition-[opacity] duration-[1800ms] delay-300",
          loaded ? "opacity-100" : "opacity-0"
        )}>
          <OrnamentalDivider variant="diamond" className="mb-20" />
        </div>

        {/* Subtitle */}
        <div className={cn(
          "transition-[opacity,transform] duration-[1600ms] delay-[400ms]",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <p className="text-white/30 uppercase tracking-[var(--tracking-hero)] text-[length:var(--text-label)] mb-14 font-light">
            For United Nations Secretary-General
          </p>
        </div>

        {/* Hero name — oversized, dramatic */}
        <div className="overflow-hidden mb-6">
          <h1 className={cn(
            "font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white font-normal leading-[0.78] tracking-tight text-shadow-premium",
            "transition-[opacity,transform] duration-[1800ms] delay-[500ms]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
          )}>
            <span className="block font-extralight">Rafael</span>
            <span className="block text-gradient-gold-shimmer italic font-medium mt-4">Grossi</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden">
          <p className={cn(
            "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white/60 mb-20 tracking-wide font-light",
            "transition-[opacity,transform] duration-[1400ms] delay-[700ms]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            A UN That <span className="italic text-white/85 font-normal">Works</span>
          </p>
        </div>

        {/* Body text */}
        <p className={cn(
          "text-base md:text-lg lg:text-xl text-white/40 max-w-xl mx-auto font-light leading-[1.8] tracking-wide",
          "transition-[opacity,transform] duration-[1400ms] delay-[900ms]",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}>
          40 years of diplomacy. First Latin American IAEA Director General.
          A leader with boots in the mud.
        </p>

        {/* CTA */}
        <div className={cn(
          "mt-24 transition-[opacity,transform] duration-[1400ms] delay-[1100ms]",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <a
            href="#vision"
            className="group inline-flex items-center gap-5 text-secondary/50 hover:text-secondary transition-colors duration-600"
          >
            <span className="text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] font-light">
              Explore the Vision
            </span>
            <span className="w-12 h-px bg-secondary/20 group-hover:w-20 group-hover:bg-secondary/60 transition-all duration-600" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator — animated line */}
      <div className={cn(
        "absolute bottom-[8%] left-1/2 -translate-x-1/2 z-30",
        "transition-[opacity] duration-[1600ms] delay-[1300ms]",
        loaded ? "opacity-100" : "opacity-0"
      )}>
        <a
          href="#vision"
          className="group flex flex-col items-center text-white/15 hover:text-white/40 transition-colors duration-600"
          aria-label="Scroll to content"
        >
          <span className="text-[length:var(--text-micro)] uppercase tracking-[var(--tracking-extreme)] mb-5 font-light">
            Scroll
          </span>
          <div className="w-px h-20 bg-white/[0.06] relative overflow-hidden">
            <div className="absolute left-0 w-full h-5 bg-gradient-to-b from-secondary/50 to-transparent scroll-indicator-line" />
          </div>
        </a>
      </div>

      {/* Corner accents — elongated, more refined */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className={cn(
          "absolute z-20 transition-[opacity] duration-[2000ms] delay-[800ms]",
          loaded ? "opacity-100" : "opacity-0",
          i === 0 && "top-[8%] left-8",
          i === 1 && "top-[8%] right-8",
          i === 2 && "bottom-[8%] left-8",
          i === 3 && "bottom-[8%] right-8",
        )}>
          <div className={cn(
            "absolute h-px",
            i < 2 ? "top-0" : "bottom-0",
            i % 2 === 0
              ? "left-0 w-28 bg-gradient-to-r from-white/[0.07] to-transparent"
              : "right-0 w-28 bg-gradient-to-l from-white/[0.07] to-transparent",
          )} />
          <div className={cn(
            "absolute w-px",
            i % 2 === 0 ? "left-0" : "right-0",
            i < 2
              ? "top-0 h-28 bg-gradient-to-b from-white/[0.07] to-transparent"
              : "bottom-0 h-28 bg-gradient-to-t from-white/[0.07] to-transparent",
          )} />
        </div>
      ))}
    </section>
  )
}
