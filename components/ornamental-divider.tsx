import { cn } from "@/lib/utils"

interface OrnamentalDividerProps {
  label?: string
  className?: string
  variant?: "diamond" | "label"
}

export function OrnamentalDivider({ label, className, variant = "label" }: OrnamentalDividerProps) {
  if (variant === "diamond") {
    return (
      <div className={cn("flex items-center justify-center gap-6", className)}>
        <span className="h-px w-28 bg-gradient-to-r from-transparent via-secondary/60 to-secondary/60" />
        <div className="w-1.5 h-1.5 rotate-45 border border-secondary/50" />
        <span className="h-px w-28 bg-gradient-to-l from-transparent via-secondary/60 to-secondary/60" />
      </div>
    )
  }

  return (
    <div className={cn("flex items-center justify-center gap-6", className)}>
      <span className="h-px w-16 bg-secondary" />
      {label && (
        <p className="text-secondary uppercase tracking-[var(--tracking-ultra)] text-[length:var(--text-label)] font-medium">
          {label}
        </p>
      )}
      <span className="h-px w-16 bg-secondary" />
    </div>
  )
}
