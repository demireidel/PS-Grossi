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
    <div className={cn(isLarge ? "max-w-6xl mb-32" : "max-w-5xl mb-28", "relative", className)}>
      {/* Watermark section number — large decorative background */}
      <span
        className="absolute -top-16 -left-4 text-[clamp(8rem,14vw,12rem)] font-serif text-foreground/[0.03] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        {number}
      </span>

      <div className="flex items-center gap-6 mb-10 relative">
        <span className="h-px w-20 bg-gradient-to-r from-secondary to-secondary/30" />
        <p className="text-secondary uppercase tracking-[var(--tracking-ultra)] text-[length:var(--text-label)] md:text-[length:var(--text-label-lg)] font-medium">
          Section {number}
        </p>
        <span className="text-secondary/20">/</span>
        <p className="text-muted-foreground uppercase tracking-[var(--tracking-wide)] text-[length:var(--text-label)] md:text-[length:var(--text-label-lg)]">
          {label}
        </p>
      </div>
      <h2
        className={cn(
          "font-serif text-foreground leading-[0.92] tracking-tight mb-10 relative",
          isLarge
            ? "text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            : "text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        )}
      >
        {title}
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
        {subtitle}
      </p>
    </div>
  )
}
