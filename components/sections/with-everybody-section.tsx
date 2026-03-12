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
      "Serious diplomacy is grounded in verification, restraint, and credibility—not declarations made for domestic audiences.",
  },
]

const trackRecords = [
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

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
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
  const recordAnim = useInView()
  const ctaAnim = useInView()

  return (
    <section id="with-everybody" className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 py-40 lg:py-56">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={`max-w-6xl mb-32 transition-all duration-1200 ${headerAnim.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex items-center gap-6 mb-10">
            <span className={`h-px bg-secondary transition-all duration-1000 delay-300 ${headerAnim.inView ? 'w-20' : 'w-0'}`} />
            <p className="text-secondary uppercase tracking-[0.4em] text-[10px] font-medium">
              Section 03
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              The Method
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h2 className={`font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] tracking-tight transition-all duration-1000 delay-200 ${headerAnim.inView ? 'translate-y-0' : 'translate-y-full'}`}>
              With
              <span className="block text-secondary italic">Everybody</span>
            </h2>
          </div>
          
          <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mt-12 font-light transition-all duration-1000 delay-500 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How impartial diplomacy works in a divided world.
          </p>
        </div>

        {/* Main Content Grid */}
        <div 
          ref={contentAnim.ref}
          className="grid lg:grid-cols-12 gap-20 mb-40"
        >
          {/* Left Column - Sticky Image */}
          <div className={`lg:col-span-5 transition-all duration-1200 ${contentAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-[3/4] overflow-hidden film-grain">
                <div className="absolute inset-0 slow-pan">
                  <Image
                    src="/images/global-engagement.jpg"
                    alt="Global diplomatic engagement"
                    fill
                    className="object-cover color-grade-warm"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
                <div className="absolute inset-0 vignette opacity-50" />
              </div>
              
              {/* Frame elements */}
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 border border-secondary/20" />
              
              {/* Caption */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Building Bridges</p>
                <p className="text-sm mt-1 text-white/80">Across Every Divide</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-20">
            <div className={`transition-all duration-1000 delay-300 ${contentAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative mb-8">
                <span className="text-[150px] font-serif text-foreground/[0.03] absolute -top-20 -left-4 leading-none select-none">03</span>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] relative">
                  Impartiality as
                  <span className="block text-secondary/70">Effectiveness</span>
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A Secretary-General cannot help bridge divides while speaking
                only to one camp. The power of the office lies precisely in its
                capacity to engage across every fault line—East and West,
                North and South, across ideological and geopolitical boundaries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is not about being neutral on values. It is about being
                available to all parties so that when crises emerge, there is
                someone in the room who everyone can accept.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-12">
              {engagementPrinciples.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`flex gap-8 p-8 border-l-2 border-secondary/30 hover:border-secondary hover:bg-muted/50 transition-all duration-500 ${contentAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                  style={{ transitionDelay: contentAnim.inView ? `${index * 150 + 400}ms` : '0ms' }}
                >
                  <div className="flex-shrink-0">
                    <span className="font-serif text-5xl text-secondary/30">
                      {principle.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-foreground mb-4">
                      {principle.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Track Record - Cinematic Grid */}
        <div ref={recordAnim.ref} className="mb-40">
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${recordAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mb-6 block">Proven Track Record</span>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              Results Speak Louder
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            {trackRecords.map((record, index) => (
              <div 
                key={record.title}
                className={`group p-12 lg:p-16 bg-muted hover:bg-secondary transition-all duration-700 ${recordAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: recordAnim.inView ? `${index * 100}ms` : '0ms' }}
              >
                <span className="text-6xl font-serif text-foreground/[0.05] group-hover:text-secondary-foreground/10 transition-colors duration-500 block mb-6">
                  0{index + 1}
                </span>
                <h4 className="font-serif text-2xl text-foreground group-hover:text-secondary-foreground mb-4 transition-colors duration-500">
                  {record.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-secondary-foreground/70 leading-relaxed transition-colors duration-500">
                  {record.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Is UN Leadership - Cinematic CTA */}
        <div 
          ref={ctaAnim.ref}
          className={`relative transition-all duration-1200 ${ctaAnim.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="bg-secondary text-secondary-foreground p-16 lg:p-28 relative overflow-hidden film-grain">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="relative max-w-4xl">
              <span className="inline-flex items-center gap-4 text-secondary-foreground/60 text-[10px] uppercase tracking-[0.4em] font-medium mb-10">
                <span className="w-8 h-px bg-secondary-foreground/30" />
                The Essence
              </span>
              
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-[1.1]">
                Why This Is
                <span className="block">UN Leadership</span>
              </h3>
              
              <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-16 max-w-3xl font-light">
                The United Nations was built on the premise that even adversaries
                can share a table. The Secretary-General must be the person who
                sets that table—and who is welcome at every seat around it.
              </p>
              
              <blockquote className="relative pl-10 border-l-2 border-secondary-foreground/30">
                <p className="text-3xl md:text-4xl font-serif italic leading-[1.3]">
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
