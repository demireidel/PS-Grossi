"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"

const photos = [
  {
    src: "/images/grossi-hero.jpg",
    alt: "Rafael Grossi at IAEA headquarters",
    caption: "At IAEA Headquarters, Vienna",
    size: "large" as const,
  },
  {
    src: "/images/grossi-zaporizhzhia.jpg",
    alt: "Inspecting Zaporizhzhia Nuclear Power Plant",
    caption: "Zaporizhzhia NPP Inspection, 2022",
    size: "medium" as const,
  },
  {
    src: "/images/grossi-un-address.jpg",
    alt: "Addressing the United Nations",
    caption: "UN General Assembly Address",
    size: "medium" as const,
  },
  {
    src: "/images/grossi-tehran.jpg",
    alt: "Diplomatic meeting in Tehran",
    caption: "Nuclear Negotiations, Tehran",
    size: "small" as const,
  },
  {
    src: "/images/grossi-rays-of-hope.jpg",
    alt: "Visiting cancer treatment facility",
    caption: "Rays of Hope Initiative, Africa",
    size: "small" as const,
  },
  {
    src: "/images/grossi-iaea-board.jpg",
    alt: "Presiding over IAEA Board of Governors",
    caption: "IAEA Board of Governors",
    size: "small" as const,
  },
  {
    src: "/images/grossi-security-council.jpg",
    alt: "Briefing the UN Security Council",
    caption: "UN Security Council Briefing",
    size: "medium" as const,
  },
  {
    src: "/images/grossi-portrait-formal.jpg",
    alt: "Rafael Grossi formal portrait",
    caption: "Official Portrait, 2025",
    size: "medium" as const,
  },
]

export function PhotoGallerySection() {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: galleryRef, inView: galleryInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-32 lg:py-48 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-5xl mb-20 transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-center gap-6 mb-8">
            <span className="h-px w-16 bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[10px] font-medium">
              Gallery
            </p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[0.95] tracking-tight">
            A Career in <span className="text-secondary italic">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            From crisis zones to diplomatic halls, four decades of hands-on international leadership.
          </p>
        </div>

        {/* Photo Grid */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2"
        >
          {photos.map((photo, index) => {
            const colSpan = photo.size === 'large' ? 'col-span-2 md:col-span-2 lg:col-span-3' : 
                           photo.size === 'medium' ? 'col-span-2 md:col-span-2 lg:col-span-2' : 
                           'col-span-1 md:col-span-1 lg:col-span-1'
            const rowSpan = photo.size === 'large' ? 'row-span-2' : 
                           photo.size === 'medium' ? 'row-span-1' : 
                           'row-span-1'
            
            return (
              <div
                key={photo.src}
                className={`group relative overflow-hidden ${colSpan} ${rowSpan} transition-all duration-700 ${
                  galleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  aspectRatio: photo.size === 'large' ? '4/3' : photo.size === 'medium' ? '3/2' : '1/1'
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
