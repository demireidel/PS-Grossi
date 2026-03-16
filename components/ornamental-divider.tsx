import { cn } from "@/lib/utils"

interface OrnamentalDividerProps {
  label?: string
  className?: string
  variant?: "diamond" | "label"
}

export function OrnamentalDivider({ label, className, variant = "label" }: OrnamentalDividerProps) {
  if (variant === "diamond") {
    return (
      <div className={cn("flex items-center justify-center gap-5", className)}>
        <span className="h-px w-32 bg-gradient-to-r from-transparent via-secondary/40 to-secondary/50" />
        <div className="w-[5px] h-[5px] rotate-45 border border-secondary/40" />
        <span className="h-px w-32 bg-gradient-to-l from-transparent via-secondary/40 to-secondary/50" />
      </div>
    )
  }

  return (
    <div className={cn("flex items-center justify-center gap-6", className)}>
      <span className="h-px w-20 bg-gradient-to-r from-transparent to-secondary/60" />
      {label && (
        <p className="text-secondary uppercase tracking-[var(--tracking-ultra)] text-[length:var(--text-label)] font-medium">
          {label}
        </p>
      )}
      <span className="h-px w-20 bg-gradient-to-l from-transparent to-secondary/60" />
    </div>
  )
}
