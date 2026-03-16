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
  borderColor = "border-secondary",
}: BlockquoteProps) {
  const textSize =
    size === "large"
      ? "text-2xl md:text-3xl lg:text-4xl"
      : "text-xl md:text-2xl lg:text-3xl"

  if (variant === "centered") {
    return (
      <blockquote className="text-center">
        <p className={`font-serif italic leading-[1.2] ${textSize}`}>
          {children}
        </p>
        {cite && (
          <cite className="block mt-6 text-sm opacity-60 not-italic">
            {cite}
          </cite>
        )}
      </blockquote>
    )
  }

  return (
    <blockquote className={`relative pl-8 border-l-2 ${borderColor}`}>
      <p className={`font-serif italic leading-[1.3] ${textSize}`}>
        {children}
      </p>
      {cite && (
        <cite className="block mt-6 text-sm opacity-60 not-italic">
          {cite}
        </cite>
      )}
    </blockquote>
  )
}
