import { DOT_PATTERN_SM, DOT_PATTERN_SIZE_SM, DOT_PATTERN_SIZE_MD } from "@/lib/constants"

interface DarkPanelProps {
  children: React.ReactNode
  variant?: "dark" | "primary"
  label?: string
  align?: "left" | "center"
  maxWidth?: "3xl" | "4xl" | "5xl"
  dotPatternSize?: "sm" | "md"
  className?: string
}

const maxWidthMap = {
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
}

const dotSizeMap = {
  sm: DOT_PATTERN_SIZE_SM,
  md: DOT_PATTERN_SIZE_MD,
}

export function DarkPanel({
  children,
  variant = "dark",
  label,
  align = "left",
  maxWidth = "4xl",
  dotPatternSize = "sm",
  className,
}: DarkPanelProps) {
  const bgClass = variant === "dark"
    ? "bg-foreground text-background"
    : "bg-primary text-primary-foreground"

  const alignClass = align === "center" ? "mx-auto text-center" : ""

  return (
    <div className={`${bgClass} p-16 lg:p-24 relative overflow-hidden film-grain ${className ?? ""}`}>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: DOT_PATTERN_SM, backgroundSize: dotSizeMap[dotPatternSize] }}
      />

      <div className={`relative ${maxWidthMap[maxWidth]} ${alignClass}`}>
        {label && (
          <span className="inline-flex items-center gap-4 text-secondary text-[10px] uppercase tracking-[0.3em] font-medium mb-10">
            <span className="w-8 h-px bg-secondary" />
            {label}
          </span>
        )}
        {children}
      </div>
    </div>
  )
}
