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
    <div className={cn(bgClass, "p-16 lg:p-24 relative overflow-hidden film-grain", className)}>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "var(--dot-pattern)",
          backgroundSize: "var(--dot-size-sm)",
        }}
      />
      <div className={cn("relative", maxWidthMap[maxWidth])}>
        {label && (
          <span className="inline-flex items-center gap-4 text-secondary text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] font-medium mb-10">
            <span className="w-8 h-px bg-secondary" />
            {label}
          </span>
        )}
        {children}
      </div>
    </div>
  )
}
