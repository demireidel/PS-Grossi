"use client"

import { forwardRef } from "react"

interface SectionHeaderProps {
  number: string
  label: string
  title: React.ReactNode
  subtitle: string
  size?: "default" | "large"
  animated?: boolean
  inView?: boolean
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  function SectionHeader({ number, label, title, subtitle, size = "default", animated = false, inView = true }, ref) {
    const isLarge = size === "large"

    return (
      <div
        ref={ref}
        className={`${isLarge ? "max-w-6xl mb-28" : "max-w-5xl mb-24"} ${
          animated ? `transition-[opacity,transform] duration-800 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}` : ""
        }`}
      >
        <div className="flex items-center gap-6 mb-8">
          <span className={`h-px bg-secondary ${animated ? `transition-all duration-800 delay-200 ${inView ? "w-16" : "w-0"}` : "w-16"}`} />
          <p className="text-secondary uppercase tracking-[0.3em] text-[10px] md:text-[11px] font-medium">
            Section {number}
          </p>
          <span className="text-secondary/30">/</span>
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px] md:text-[11px]">
            {label}
          </p>
        </div>
        <h2 className={`font-serif text-foreground leading-[0.95] tracking-tight ${
          isLarge
            ? "text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10"
            : "text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10"
        }`}>
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
          {subtitle}
        </p>
      </div>
    )
  }
)
