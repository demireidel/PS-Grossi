interface SectionHeaderProps {
  number: string
  label: string
  title: React.ReactNode
  subtitle: string
  size?: "default" | "large"
}

export function SectionHeader({ number, label, title, subtitle, size = "default" }: SectionHeaderProps) {
  return (
    <div className={size === "large" ? "max-w-6xl mb-28" : "max-w-5xl mb-24"}>
      <div className="flex items-center gap-6 mb-8">
        <span className="h-px w-16 bg-secondary" />
        <p className="text-secondary uppercase tracking-[0.3em] text-[10px] font-medium">
          Section {number}
        </p>
        <span className="text-secondary/30">/</span>
        <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
          {label}
        </p>
      </div>
      <h2 className={`font-serif text-foreground leading-[0.95] tracking-tight ${
        size === "large"
          ? "text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10"
          : "text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10"
      }`}>
        {title}
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
        {subtitle}
      </p>
    </div>
  )
}
