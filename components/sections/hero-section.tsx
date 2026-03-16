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

  const show = (delay: string, transform = true) =>
    cn(
      "transition-[opacity,transform] duration-[1200ms]",
      `delay-${delay}`,
      loaded
        ? "opacity-100 translate-y-0"
        : cn("opacity-0", transform && "translate-y-6")
    )

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
        {/* Multi-layer gradient system for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/15 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 35% 45%, transparent 8%, rgba(0,0,0,0.75) 100%)' }} />
        <div className="absolute inset-0 film-grain" />
      </div>

      {/* Letterbox bars — cinematic framing */}
      <div className="absolute top-0 left-0 right-0 h-[6%] bg-black z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black z-20" />

      {/* Ambient light pools */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-secondary/[0.025] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/[0.015] rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className={cn(
          "transition-[opacity] duration-[1400ms] delay-200",
          loaded ? "opacity-100" : "opacity-0"
        )}>
          <OrnamentalDivider variant="diamond" className="mb-16" />
        </div>

        <div className={show("[200ms]")}>
          <p className="text-white/40 uppercase tracking-[var(--tracking-hero)] text-[length:var(--text-label)] mb-12 font-light">
            For United Nations Secretary-General
          </p>
        </div>

        <div className="overflow-hidden mb-10">
          <h1 className={cn(
            "font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-normal leading-[0.82] tracking-tight text-shadow-premium",
            "transition-[opacity,transform] duration-[1400ms] delay-[300ms]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
          )}>
            <span className="block font-light">Rafael</span>
            <span className="block text-gradient-gold-shimmer italic font-medium mt-3">Grossi</span>
          </h1>
        </div>

        <div className="overflow-hidden">
          <p className={cn(
            "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white/70 mb-16 tracking-wide",
            "transition-[opacity,transform] duration-[1200ms] delay-[500ms]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            A UN That <span className="italic text-white/90">Works</span>
          </p>
        </div>

        <p className={cn(
          "text-base md:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed tracking-wide text-pretty",
          "transition-[opacity,transform] duration-[1200ms] delay-[650ms]",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          40 years of diplomacy. First Latin American IAEA Director General.
          A leader with boots in the mud.
        </p>

        {/* CTA hint */}
        <div className={cn(
          "mt-20 transition-[opacity,transform] duration-[1200ms] delay-[800ms]",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <a
            href="#vision"
            className="group inline-flex items-center gap-4 text-secondary/60 hover:text-secondary transition-colors duration-500"
          >
            <span className="text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] font-light">
              Explore the Vision
            </span>
            <span className="w-10 h-px bg-secondary/30 group-hover:w-16 group-hover:bg-secondary/70 transition-all duration-500" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={cn(
        "absolute bottom-[8%] left-1/2 -translate-x-1/2 z-30",
        "transition-[opacity,transform] duration-[1200ms] delay-[1000ms]",
        loaded ? "opacity-100" : "opacity-0"
      )}>
        <a
          href="#vision"
          className="group flex flex-col items-center text-white/20 hover:text-white/50 transition-colors duration-500"
          aria-label="Scroll to content"
        >
          <span className="text-[length:var(--text-micro)] uppercase tracking-[var(--tracking-extreme)] mb-4 font-light">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-secondary/60 to-transparent animate-pulse" />
          </div>
        </a>
      </div>

      {/* Corner accents — refined cinematic frame */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className={cn(
          "absolute w-24 h-24 z-20 transition-[opacity] duration-[1400ms] delay-[600ms]",
          loaded ? "opacity-100" : "opacity-0",
          i === 0 && "top-[7%] left-8",
          i === 1 && "top-[7%] right-8",
          i === 2 && "bottom-[7%] left-8",
          i === 3 && "bottom-[7%] right-8",
        )}>
          <div className={cn(
            "absolute w-full h-px",
            i < 2 ? "top-0" : "bottom-0",
            i % 2 === 0
              ? "left-0 bg-gradient-to-r from-white/10 to-transparent"
              : "right-0 bg-gradient-to-l from-white/10 to-transparent",
          )} />
          <div className={cn(
            "absolute w-px h-full",
            i % 2 === 0 ? "left-0" : "right-0",
            i < 2
              ? "top-0 bg-gradient-to-b from-white/10 to-transparent"
              : "bottom-0 bg-gradient-to-t from-white/10 to-transparent",
          )} />
        </div>
      ))}
    </section>
  )
}
