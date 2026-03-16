import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface ContentCardProps {
  index: number
  children: ReactNode
  className?: string
}

/**
 * The repeated hover card pattern: bg-card → bg-foreground on hover,
 * gradient top bar reveal, color transitions.
 */
export function ContentCard({ index, children, className }: ContentCardProps) {
  return (
    <div
      className={cn(
        "group p-10 lg:p-12 bg-card hover:bg-foreground",
        "transition-[background-color] duration-600 relative overflow-hidden",
        className
      )}
      style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
      {children}
    </div>
  )
}

/* ── Sub-components for card content composition ── */

export function CardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="w-8 h-8 text-secondary transition-transform duration-400 group-hover:scale-110" />
}

export function CardIconLarge({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="w-10 h-10 text-secondary transition-transform duration-400 group-hover:scale-110" />
}

export function CardNumber({ value }: { value: string }) {
  return (
    <span
      className="text-4xl font-serif text-foreground/[0.12] group-hover:text-background/20 transition-colors duration-400"
      aria-hidden="true"
    >
      {value}
    </span>
  )
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-serif text-xl text-foreground group-hover:text-background mb-4 transition-colors duration-400">
      {children}
    </h4>
  )
}

export function CardDescription({ children }: { children: ReactNode }) {
  return (
    <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed text-sm transition-colors duration-400">
      {children}
    </p>
  )
}

export function CardStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-right">
      <p className="text-4xl font-serif text-secondary transition-colors duration-400">
        {value}
      </p>
      <p className="text-xs text-muted-foreground group-hover:text-background/60 transition-colors duration-400 uppercase tracking-wider">
        {label}
      </p>
    </div>
  )
}

export function CardStatLarge({ value, label }: { value: string; label: string }) {
  return (
    <>
      <p className="text-5xl md:text-6xl font-serif text-secondary mb-6">{value}</p>
      <p className="text-foreground group-hover:text-background font-medium mb-3 transition-colors duration-400">
        {label}
      </p>
    </>
  )
}
