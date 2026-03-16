import Image from "next/image"
import { cn } from "@/lib/utils"
import { BLUR_DATA_URL } from "@/lib/constants"

interface ImageCaptionProps {
  src: string
  alt: string
  label?: string
  caption?: string
  aspect?: "4/3" | "16/9"
  sizes?: string
  className?: string
}

export function ImageCaption({
  src,
  alt,
  label,
  caption,
  aspect = "4/3",
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
}: ImageCaptionProps) {
  return (
    <div className={cn("relative overflow-hidden group bg-black", `aspect-[${aspect}]`, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={85}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="object-cover transition-transform duration-600 group-hover:scale-105"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {(label || caption) && (
        <div className="absolute bottom-6 left-6 right-6">
          {label && (
            <p className="text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] text-white/60 text-shadow-overlay mb-1">
              {label}
            </p>
          )}
          {caption && (
            <p className="text-sm text-white/90 font-medium text-shadow-overlay">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
