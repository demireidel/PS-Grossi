import Image from "next/image"
import { cn } from "@/lib/utils"
import { BLUR_DATA_URL } from "@/lib/constants"
import type { ReactNode } from "react"

interface CinematicImageProps {
  src: string
  alt: string
  aspect?: "cinema" | "wide" | "16/9" | "4/3"
  kenBurns?: boolean
  colorGrade?: "warm" | "cool" | "none"
  letterbox?: boolean
  cornerAccents?: boolean
  filmGrain?: boolean
  vignette?: boolean
  priority?: boolean
  overlayContent?: ReactNode
  className?: string
}

const aspectMap = {
  cinema: "aspect-cinema",
  wide: "aspect-wide",
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
}

const gradeMap = {
  warm: "color-grade-warm",
  cool: "color-grade-cool",
  none: "",
}

export function CinematicImage({
  src,
  alt,
  aspect = "16/9",
  kenBurns = false,
  colorGrade = "none",
  letterbox = false,
  cornerAccents = false,
  filmGrain = false,
  vignette = false,
  priority = false,
  overlayContent,
  className,
}: CinematicImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-black",
        aspectMap[aspect] ?? `aspect-[${aspect}]`,
        filmGrain && "film-grain",
        vignette && "vignette",
        className
      )}
    >
      {/* Image layer */}
      <div className={cn("absolute inset-0", kenBurns && "ken-burns")}>
        <Image
          src={src}
          alt={alt}
          fill
          quality={85}
          priority={priority}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className={cn("object-cover", gradeMap[colorGrade])}
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Letterbox bars */}
      {letterbox && (
        <>
          <div className="absolute top-0 left-0 right-0 h-[6%] bg-black z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black z-10" />
        </>
      )}

      {/* Corner accent frames */}
      {cornerAccents && (
        <>
          <div className="absolute top-[10%] left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 z-10" />
          <div className="absolute top-[10%] right-8 w-16 h-16 border-r-2 border-t-2 border-white/20 z-10" />
        </>
      )}

      {/* Overlay content (text, labels) */}
      {overlayContent && (
        <div className="absolute inset-0 z-10 flex items-end">
          {overlayContent}
        </div>
      )}
    </div>
  )
}
