"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { SCROLL_THRESHOLD_BACK_TO_TOP } from "@/lib/constants"

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > SCROLL_THRESHOLD_BACK_TO_TOP)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-accent transition-[opacity,transform,background-color] duration-500 group glow-gold ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4 transition-transform duration-400 group-hover:-translate-y-1" />
    </button>
  )
}
