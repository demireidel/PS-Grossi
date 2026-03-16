import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  number: string
  label: string
  title: ReactNode
  subtitle: string
  size?: "default" | "large"
  className?: string
}

export function SectionHeader({
  number,
  label,
  title,
  subtitle,
  size = "default",
  className,
}: SectionHeaderProps) {
  const isLarge = size === "large"

  return (
    <div className={cn(isLarge ? "max-w-6xl mb-36" : "max-w-5xl mb-32", "relative", className)}>
      {/* Oversized watermark number */}
      <span
        className="absolute -top-20 -left-6 text-[clamp(10rem,18vw,16rem)] font-serif text-foreground/[0.02] leading-none select-none pointer-events-none font-light"
        aria-hidden="true"
      >
        {number}
      </span>

      <div className="flex items-center gap-6 mb-12 relative">
        <span className="h-px w-24 bg-gradient-to-r from-secondary to-secondary/20" />
        <p className="text-secondary uppercase tracking-[var(--tracking-ultra)] text-[length:var(--text-label)] md:text-[length:var(--text-label-lg)] font-medium">
          Section {number}
        </p>
        <span className="text-secondary/15">/</span>
        <p className="text-muted-foreground/70 uppercase tracking-[var(--tracking-wide)] text-[length:var(--text-label)] md:text-[length:var(--text-label-lg)]">
          {label}
        </p>
      </div>
      <h2
        className={cn(
          "font-serif text-foreground leading-[0.88] tracking-tight mb-12 relative",
          isLarge
            ? "text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            : "text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        )}
      >
        {title}
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground leading-[1.6] font-light max-w-3xl">
        {subtitle}
      </p>
    </div>
  )
}
