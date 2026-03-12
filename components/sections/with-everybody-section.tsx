"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const engagementPrinciples = [
  {
    number: "01",
    title: "Neutrality Is Not Passivity",
    description:
      "Impartiality is what creates reach and usefulness. It is the operating system of effective multilateralism.",
  },
  {
    number: "02",
    title: "Access Without Alignment",
    description:
      "Engaging everyone is not endorsing everyone. The UN must be able to talk to all parties while standing for its principles.",
  },
  {
    number: "03",
    title: "Facts Before Positions",
    description:
      "Serious diplomacy is grounded in verification, restraint, and credibility &mdash; not declarations made for domestic audiences.",
  },
]

const trackRecord = [
  {
    title: "Maintained Dialogue with Tehran",
    description: "Even at moments of maximum tension, kept verification channels open and delivered tangible outcomes while others chose confrontation.",
  },
  {
    title: "Engaged Moscow on Nuclear Safety",
    description: "Negotiated access to Zaporizhzhia with Russian authorities while maintaining full cooperation with Kyiv. Both sides accepted his presence.",
  },
  {
    title: "Built Consensus Across the Board",
    description: "From Beijing to Washington, from Riyadh to Brussels, earned the respect of capitals that agree on very little else.",
  },
  {
    title: "Spoke Truth to All Parties",
    description: "Never sacrificed verification for access, never diluted findings for political convenience. Credibility maintained through rigor.",
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function WithEverybodySection() {
  const headerAnim = useInView()
  const contentAnim = useInView()
  const trackAnim = useInView()
  const quoteAnim = useInView()

  return (
    <section id="with-everybody" className="relative bg-background overflow-hidden">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 py-32 lg:py-44">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={`max-w-5xl mb-28 transition-all duration-1000 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-px bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[11px] font-medium">
              Section 03 &mdash; The Method
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-[1.1] tracking-tight">
            With Everybody
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
            How impartial diplomacy works in a divided world &mdash; and why it is the only path forward.
          </p>
        </div>

        {/* Main Content Grid */}
        <div 
          ref={contentAnim.ref}
          className="grid lg:grid-cols-12 gap-20 mb-36"
        >
          {/* Left Column - Image */}
          <div className={`lg:col-span-5 transition-all duration-1000 ${contentAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative sticky top-32">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/global-engagement.jpg"
                  alt="Global diplomatic engagement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>
              {/* Frame accents */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-secondary/30" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-secondary/30" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`lg:col-span-7 space-y-20 transition-all duration-1000 delay-200 ${contentAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug gold-line">
                Impartiality as Effectiveness
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A Secretary-General cannot help bridge divides while speaking
                  only to one camp. The power of the office lies precisely in its
                  capacity to engage across every fault line &mdash; East and West,
                  North and South, across ideological and geopolitical boundaries.
                </p>
                <p>
                  This is not about being neutral on values. It is about being
                  available to all parties so that when crises emerge, there is
                  someone in the room who everyone can accept.
                </p>
              </div>
            </div>

            {/* Principles */}
            <div className="space-y-10">
              {engagementPrinciples.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`group flex gap-8 p-8 border-l-2 border-secondary/30 hover:border-secondary transition-all duration-500 bg-muted/30 hover:bg-muted/60 ${contentAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                  style={{ transitionDelay: contentAnim.inView ? `${index * 150 + 400}ms` : '0ms' }}
                >
                  <div className="flex-shrink-0">
                    <span className="font-serif text-5xl text-secondary/20 group-hover:text-secondary/40 transition-colors duration-500">
                      {principle.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-4">
                      {principle.title}
                    </h4>
                    <p
                      className="text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: principle.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Track Record */}
        <div ref={trackAnim.ref} className="mb-36">
          <div className={`text-center mb-16 transition-all duration-1000 ${trackAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Proven Track Record
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Results that demonstrate the power of impartial engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {trackRecord.map((item, index) => (
              <div 
                key={item.title}
                className={`group p-10 bg-muted hover:bg-secondary transition-all duration-500 hover-lift ${trackAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: trackAnim.inView ? `${index * 100 + 200}ms` : '0ms' }}
              >
                <h4 className="font-serif text-xl text-foreground group-hover:text-secondary-foreground mb-4 transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-secondary-foreground/80 leading-relaxed transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Is UN Leadership */}
        <div 
          ref={quoteAnim.ref}
          className={`relative transition-all duration-1000 ${quoteAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="bg-secondary text-secondary-foreground p-16 lg:p-24 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '28px 28px' }} />
            
            <div className="relative max-w-4xl">
              <span className="text-secondary-foreground/60 text-[11px] uppercase tracking-[0.3em] font-medium mb-6 block">
                UN Leadership
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-tight">
                Why This Is UN Leadership
              </h3>
              <p className="text-xl leading-relaxed opacity-90 mb-12 max-w-3xl">
                The United Nations was built on the premise that even adversaries
                can share a table. The Secretary-General must be the person who
                sets that table &mdash; and who is welcome at every seat around it.
              </p>
              <blockquote className="relative pl-8 border-l-2 border-secondary-foreground/30">
                <p className="text-2xl md:text-3xl font-serif italic leading-snug">
                  &ldquo;Diplomacy means talking to everyone. Otherwise, it is just
                  a conversation among friends.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
