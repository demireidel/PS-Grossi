import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type BgVariant = "default" | "muted" | "dark" | "primary"

interface SectionContainerProps {
  id?: string
  bg?: BgVariant
  children: ReactNode
  className?: string
  withGradientOverlay?: boolean
}

const bgMap: Record<BgVariant, string> = {
  default: "bg-background",
  muted: "bg-muted",
  dark: "bg-foreground text-background",
  primary: "bg-primary text-primary-foreground",
}

export function SectionContainer({
  id,
  bg = "default",
  children,
  className,
  withGradientOverlay = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-40 lg:py-56 relative overflow-hidden", bgMap[bg], className)}
    >
      {withGradientOverlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />
      )}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
        {children}
      </div>
    </section>
  )
}
