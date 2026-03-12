"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Target, Users, Gauge, RefreshCw, ArrowRight } from "lucide-react"

const principles = [
  {
    icon: Target,
    number: "01",
    title: "Act Earlier",
    description: "Prevention before crisis. Transform early warning into decisive early action.",
  },
  {
    icon: Users,
    number: "02",
    title: "Engage Across Divides",
    description: "Impartial diplomacy that speaks with all parties, building bridges where others see walls.",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Deliver for People",
    description: "Practical results that matter to states and citizens alike. Outcomes over process.",
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Institutional Renewal",
    description: "A UN that runs itself with discipline, transparency, and merit at every level.",
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function VisionSection() {
  const headerAnim = useInView()
  const problemAnim = useInView()
  const doctrineAnim = useInView()
  const ctaAnim = useInView()

  return (
    <section id="vision" className="relative bg-background overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 py-32 lg:py-44">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={`max-w-5xl mb-28 transition-all duration-1000 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-px bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[11px] font-medium">
              Section 01 &mdash; The Vision
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-[1.1] tracking-tight">
            A UN That Works
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
            A vision for a more operational, credible, and effective United Nations &mdash; 
            one that delivers results in a world that cannot wait.
          </p>
        </div>

        {/* The Problem */}
        <div 
          ref={problemAnim.ref}
          className={`grid lg:grid-cols-2 gap-20 items-center mb-36 transition-all duration-1000 delay-200 ${problemAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug gold-line">
              The Challenge We Face
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The United Nations is too often reactive, fragmented, and distant
                from practical results. In a world of accelerating crises, the gap
                between what the UN promises and what it delivers has become
                impossible to ignore.
              </p>
              <p>
                This is not a failure of purpose. It is a failure of
                performance &mdash; one that can be corrected with the right
                leadership and the courage to demand better.
              </p>
            </div>
            <a 
              href="#dangerous-world" 
              className="inline-flex items-center gap-3 mt-10 text-secondary font-medium text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300"
            >
              <span>See the Experience</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/un-headquarters.jpg"
                alt="United Nations Headquarters"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Premium image treatment */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-secondary/30" />
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-secondary/30" />
          </div>
        </div>

        {/* The Doctrine */}
        <div ref={doctrineAnim.ref}>
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${doctrineAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug">
              The Governing Doctrine
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Four principles that define what a working UN must embody. 
              Each one tested in the crucible of real-world crisis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`group relative p-10 bg-card border border-border hover:border-secondary/40 transition-all duration-500 hover-lift ${doctrineAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: doctrineAnim.inView ? `${index * 100 + 200}ms` : '0ms' }}
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-[10px] font-medium tracking-wider text-muted-foreground/40">
                  {principle.number}
                </span>
                
                <principle.icon className="w-8 h-8 text-secondary mb-8 transition-transform duration-500 group-hover:scale-110" />
                <h4 className="font-serif text-xl text-foreground mb-4">
                  {principle.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {principle.description}
                </p>
                
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Why This Election Matters */}
        <div 
          ref={ctaAnim.ref}
          className={`mt-36 relative transition-all duration-1000 ${ctaAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="bg-primary text-primary-foreground p-16 lg:p-24 relative overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            
            <div className="relative max-w-4xl">
              <span className="text-secondary text-[11px] uppercase tracking-[0.3em] font-medium mb-6 block">
                The Stakes
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-tight">
                Why This Election Matters
              </h3>
              <p className="text-xl leading-relaxed opacity-80 mb-12 max-w-3xl">
                The issue is not symbolism. The issue is whether the next
                Secretary-General can make the institution more useful &mdash; to
                member states navigating impossible pressures, and to people whose
                lives depend on what the UN does next.
              </p>
              <blockquote className="relative pl-8 border-l-2 border-secondary">
                <p className="text-2xl md:text-3xl font-serif italic leading-snug">
                  &ldquo;The world does not need a caretaker. It needs a leader who
                  has walked through fire.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
