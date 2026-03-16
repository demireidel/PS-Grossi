import { cn } from "@/lib/utils"

interface BlockquoteProps {
  children: React.ReactNode
  cite?: string
  size?: "default" | "large"
  variant?: "bordered" | "panel" | "centered"
  borderColor?: string
}

export function Blockquote({
  children,
  cite,
  size = "default",
  variant = "bordered",
  borderColor = "border-secondary/60",
}: BlockquoteProps) {
  const textSize =
    size === "large"
      ? "text-2xl md:text-3xl lg:text-4xl"
      : "text-xl md:text-2xl lg:text-3xl"

  if (variant === "centered") {
    return (
      <blockquote className="text-center relative">
        <span className="block font-serif text-[6rem] leading-none text-secondary/[0.06] absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
        <p className={cn("font-serif italic leading-[1.2] relative", textSize)}>
          {children}
        </p>
        {cite && (
          <cite className="block mt-8 text-sm opacity-50 not-italic tracking-wide">
            {cite}
          </cite>
        )}
      </blockquote>
    )
  }

  return (
    <blockquote className={cn("relative pl-8 border-l-2", borderColor)}>
      <p className={cn("font-serif italic leading-[1.3]", textSize)}>
        {children}
      </p>
      {cite && (
        <cite className="block mt-8 text-sm opacity-50 not-italic tracking-wide">
          {cite}
        </cite>
      )}
    </blockquote>
  )
}
