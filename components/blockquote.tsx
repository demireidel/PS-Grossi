interface BlockquoteProps {
  children: React.ReactNode
  cite?: string
  size?: "default" | "large"
}

export function Blockquote({ children, cite, size = "default" }: BlockquoteProps) {
  return (
    <blockquote className="relative pl-8 border-l-2 border-secondary">
      <p className={`font-serif italic leading-[1.3] ${
        size === "large"
          ? "text-2xl md:text-3xl lg:text-4xl"
          : "text-xl md:text-2xl lg:text-3xl"
      }`}>
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
