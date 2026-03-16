"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "scale"

interface RevealProps {
  children: ReactNode
  direction?: RevealDirection
  delay?: number
  className?: string
  threshold?: number
}

/**
 * Shared IntersectionObserver — one observer for all Reveal instances.
 * Elements are observed once and unobserved after entering view.
 */
const callbacks = new Map<Element, () => void>()
let sharedObserver: IntersectionObserver | null = null

function getObserver(threshold: number): IntersectionObserver {
  if (sharedObserver) return sharedObserver
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target)
          if (cb) {
            cb()
            callbacks.delete(entry.target)
            sharedObserver?.unobserve(entry.target)
          }
        }
      }
    },
    { threshold }
  )
  return sharedObserver
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = getObserver(threshold)
    callbacks.set(el, () => el.classList.add("revealed"))
    observer.observe(el)

    return () => {
      callbacks.delete(el)
      observer.unobserve(el)
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      data-reveal={direction}
      style={delay > 0 ? { "--reveal-delay": `${delay}ms` } as React.CSSProperties : undefined}
      className={cn(className)}
    >
      {children}
    </div>
  )
}
