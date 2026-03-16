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
    <div className={cn(bgClass, "p-16 lg:p-28 relative overflow-hidden film-grain", className)}>
      {/* Layered depth — ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-black/[0.08]" />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "var(--dot-pattern)",
          backgroundSize: "var(--dot-size-sm)",
        }}
      />
      {/* Edge highlight — top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className={cn("relative", maxWidthMap[maxWidth])}>
        {label && (
          <span className="inline-flex items-center gap-4 text-secondary text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] font-medium mb-12">
            <span className="w-10 h-px bg-gradient-to-r from-secondary to-secondary/30" />
            {label}
          </span>
        )}
        {children}
      </div>
    </div>
  )
}
