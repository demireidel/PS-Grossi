import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface DarkPanelProps {
  children: ReactNode
  variant?: "dark" | "primary"
  label?: string
  maxWidth?: "3xl" | "4xl" | "5xl"
  className?: string
}

const maxWidthMap = {
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
}

export function DarkPanel({
  children,
  variant = "dark",
  label,
  maxWidth = "4xl",
  className,
}: DarkPanelProps) {
  const bgClass = variant === "dark"
    ? "bg-foreground text-background"
    : "bg-primary text-primary-foreground"

  return (
    <div className={cn(bgClass, "p-20 lg:p-32 relative overflow-hidden film-grain", className)}>
      {/* Multi-layer depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/[0.02] via-transparent to-transparent" />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: "var(--dot-pattern)",
          backgroundSize: "var(--dot-size-sm)",
        }}
      />
      {/* Edge highlight lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-secondary/10 via-transparent to-transparent" />

      <div className={cn("relative", maxWidthMap[maxWidth])}>
        {label && (
          <span className="inline-flex items-center gap-5 text-secondary text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] font-medium mb-14">
            <span className="w-12 h-px bg-gradient-to-r from-secondary to-secondary/20" />
            {label}
          </span>
        )}
        {children}
      </div>
    </div>
  )
}
