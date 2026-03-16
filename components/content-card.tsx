import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface ContentCardProps {
  index: number
  children: ReactNode
  className?: string
}

/**
 * Premium hover card with floating lift, ambient glow,
 * golden gradient bar, and silky color transitions.
 */
export function ContentCard({ index, children, className }: ContentCardProps) {
  return (
    <div
      className={cn(
        "group p-10 lg:p-14 bg-card hover:bg-foreground",
        "transition-[background-color,box-shadow,transform] duration-[800ms]",
        "hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15),0_40px_80px_-20px_rgba(0,0,0,0.1)]",
        "hover:-translate-y-1",
        "relative overflow-hidden",
        className
      )}
      style={{ "--reveal-delay": `${index * 100}ms`, transitionTimingFunction: 'var(--ease-out-expo)' } as React.CSSProperties}
    >
      {/* Golden gradient bar — reveals on hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary via-secondary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-[800ms] origin-left" style={{ transitionTimingFunction: 'var(--ease-out-expo)' }} />
      {/* Ambient gold glow on hover */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-secondary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms]" />
      {/* Bottom edge highlight */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-secondary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms]" />
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

/* ── Sub-components for card content composition ── */

export function CardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="w-8 h-8 text-secondary transition-[transform,color] duration-600 group-hover:scale-110" strokeWidth={1.5} />
}

export function CardIconLarge({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="w-10 h-10 text-secondary transition-[transform,color] duration-600 group-hover:scale-110" strokeWidth={1.5} />
}

export function CardNumber({ value }: { value: string }) {
  return (
    <span
      className="text-5xl font-serif text-foreground/[0.05] group-hover:text-background/10 transition-colors duration-600 font-light"
      aria-hidden="true"
    >
      {value}
    </span>
  )
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-serif text-xl text-foreground group-hover:text-background mb-4 transition-colors duration-600">
      {children}
    </h4>
  )
}

export function CardDescription({ children }: { children: ReactNode }) {
  return (
    <p className="text-muted-foreground group-hover:text-background/55 leading-relaxed text-sm transition-colors duration-600">
      {children}
    </p>
  )
}

export function CardStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-right">
      <p className="text-4xl font-serif text-secondary font-light transition-colors duration-600">
        {value}
      </p>
      <p className="text-xs text-muted-foreground group-hover:text-background/45 transition-colors duration-600 uppercase tracking-wider">
        {label}
      </p>
    </div>
  )
}

export function CardStatLarge({ value, label }: { value: string; label: string }) {
  return (
    <>
      <p className="text-5xl md:text-6xl font-serif text-secondary mb-6 font-light">{value}</p>
      <p className="text-foreground group-hover:text-background font-medium mb-3 transition-colors duration-600">
        {label}
      </p>
    </>
  )
}
