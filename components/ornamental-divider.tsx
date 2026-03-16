import { cn } from "@/lib/utils"

interface OrnamentalDividerProps {
  label?: string
  className?: string
  variant?: "diamond" | "label"
}

export function OrnamentalDivider({ label, className, variant = "label" }: OrnamentalDividerProps) {
  if (variant === "diamond") {
    return (
      <div className={cn("flex items-center justify-center gap-4", className)}>
        <span className="h-px w-36 bg-gradient-to-r from-transparent via-secondary/30 to-secondary/40" />
        <div className="relative flex items-center justify-center">
          <div className="w-[5px] h-[5px] rotate-45 border border-secondary/35" />
        </div>
        <span className="h-px w-36 bg-gradient-to-l from-transparent via-secondary/30 to-secondary/40" />
      </div>
    )
  }

  return (
    <div className={cn("flex items-center justify-center gap-6", className)}>
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-secondary/50" />
      {label && (
        <p className="text-secondary/80 uppercase tracking-[var(--tracking-ultra)] text-[length:var(--text-label)] font-medium">
          {label}
        </p>
      )}
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-secondary/50" />
    </div>
  )
}
