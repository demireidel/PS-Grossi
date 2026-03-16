import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface ContentCardProps {
  index: number
  children: ReactNode
  className?: string
}

/**
 * Premium hover card: bg-card → bg-foreground on hover,
 * golden gradient top bar reveal, shadow lift, color transitions.
 */
export function ContentCard({ index, children, className }: ContentCardProps) {
  return (
    <div
      className={cn(
        "group p-10 lg:p-12 bg-card hover:bg-foreground",
        "transition-[background-color,box-shadow,transform] duration-700 relative overflow-hidden",
        "hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)]",
        className
      )}
      style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
    >
      {/* Golden gradient bar — reveals on hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary/60 via-secondary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      {/* Subtle ambient glow on hover */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

/* ── Sub-components for card content composition ── */

export function CardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="w-8 h-8 text-secondary transition-[transform,color] duration-500 group-hover:scale-110" />
}

export function CardIconLarge({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="w-10 h-10 text-secondary transition-[transform,color] duration-500 group-hover:scale-110" />
}

export function CardNumber({ value }: { value: string }) {
  return (
    <span
      className="text-4xl font-serif text-foreground/[0.08] group-hover:text-background/15 transition-colors duration-500"
      aria-hidden="true"
    >
      {value}
    </span>
  )
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-serif text-xl text-foreground group-hover:text-background mb-4 transition-colors duration-500">
      {children}
    </h4>
  )
}

export function CardDescription({ children }: { children: ReactNode }) {
  return (
    <p className="text-muted-foreground group-hover:text-background/60 leading-relaxed text-sm transition-colors duration-500">
      {children}
    </p>
  )
}

export function CardStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-right">
      <p className="text-4xl font-serif text-secondary transition-colors duration-500">
        {value}
      </p>
      <p className="text-xs text-muted-foreground group-hover:text-background/50 transition-colors duration-500 uppercase tracking-wider">
        {label}
      </p>
    </div>
  )
}

export function CardStatLarge({ value, label }: { value: string; label: string }) {
  return (
    <>
      <p className="text-5xl md:text-6xl font-serif text-secondary mb-6">{value}</p>
      <p className="text-foreground group-hover:text-background font-medium mb-3 transition-colors duration-500">
        {label}
      </p>
    </>
  )
}
