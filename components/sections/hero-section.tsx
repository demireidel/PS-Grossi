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
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay film-grain" />
      </div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[5%] bg-black z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-black z-20" />

      {/* Subtle ambient light */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className={cn("transition-[opacity,transform] duration-800 delay-100", loaded ? "opacity-100" : "opacity-0")}>
          <OrnamentalDivider variant="diamond" className="mb-14" />
        </div>

        <div className={cn("transition-[opacity,transform] duration-800 delay-100", loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="text-white/50 uppercase tracking-[var(--tracking-hero)] text-[length:var(--text-label)] mb-10 font-light">
            For United Nations Secretary-General
          </p>
        </div>

        <div className="overflow-hidden mb-8">
          <h1 className={cn(
            "font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-normal leading-[0.85] tracking-tight text-shadow-premium",
            "transition-[opacity,transform] duration-800 delay-200",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
          )}>
            <span className="block font-light">Rafael</span>
            <span className="block text-gradient-gold-shimmer italic font-medium mt-2">Grossi</span>
          </h1>
        </div>

        <div className="overflow-hidden">
          <p className={cn(
            "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white/80 mb-14 tracking-wide",
            "transition-[opacity,transform] duration-800 delay-[400ms]",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            A UN That <span className="italic text-white">Works</span>
          </p>
        </div>

        <p className={cn(
          "text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed tracking-wide text-pretty",
          "transition-[opacity,transform] duration-800 delay-500",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          40 years of diplomacy. First Latin American IAEA Director General.
          A leader with boots in the mud.
        </p>

        {/* CTA hint */}
        <div className={cn(
          "mt-16 transition-[opacity,transform] duration-800 delay-[600ms]",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <a
            href="#vision"
            className="group inline-flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors duration-400"
          >
            <span className="text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] font-light">Explore the Vision</span>
            <span className="w-8 h-px bg-secondary/40 group-hover:w-12 group-hover:bg-secondary transition-all duration-400" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={cn(
        "absolute bottom-16 left-1/2 -translate-x-1/2 z-30",
        "transition-[opacity,transform] duration-800 delay-700",
        loaded ? "opacity-100" : "opacity-0"
      )}>
        <a
          href="#vision"
          className="group flex flex-col items-center text-white/30 hover:text-white/60 transition-colors duration-400"
          aria-label="Scroll to content"
        >
          <span className="text-[length:var(--text-micro)] uppercase tracking-[var(--tracking-extreme)] mb-3 font-light">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-secondary to-transparent animate-pulse" />
          </div>
        </a>
      </div>

      {/* Corner accents */}
      {[
        "top-[6%] left-10 border-t border-l from-white/15 to-transparent bg-gradient-to-r bg-gradient-to-b",
        "top-[6%] right-10 border-t border-r from-white/15 to-transparent bg-gradient-to-l bg-gradient-to-b",
        "bottom-[6%] left-10 border-b border-l from-white/15 to-transparent bg-gradient-to-r bg-gradient-to-t",
        "bottom-[6%] right-10 border-b border-r from-white/15 to-transparent bg-gradient-to-l bg-gradient-to-t",
      ].map((_, i) => (
        <div key={i} className={cn(
          "absolute w-20 h-20 transition-[opacity,transform] duration-800 delay-500",
          loaded ? "opacity-100" : "opacity-0",
          i === 0 && "top-[6%] left-10",
          i === 1 && "top-[6%] right-10",
          i === 2 && "bottom-[6%] left-10",
          i === 3 && "bottom-[6%] right-10",
        )}>
          <div className={cn(
            "absolute w-full h-px bg-gradient-to-r from-white/15 to-transparent",
            i < 2 ? "top-0" : "bottom-0",
            i % 2 === 1 && "bg-gradient-to-l",
            i < 2 ? (i === 0 ? "left-0" : "right-0") : (i === 2 ? "left-0" : "right-0"),
          )} />
          <div className={cn(
            "absolute w-px h-full",
            i < 2 ? "bg-gradient-to-b from-white/15 to-transparent" : "bg-gradient-to-t from-white/15 to-transparent",
            i % 2 === 0 ? "left-0" : "right-0",
            i < 2 ? "top-0" : "bottom-0",
          )} />
        </div>
      ))}
    </section>
  )
}
