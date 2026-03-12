"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Shield, AlertTriangle, Compass } from "lucide-react"

const experiences = [
  {
    icon: Shield,
    title: "Nuclear Safeguards in Conflict Zones",
    description:
      "Led IAEA missions to Zaporizhzhia nuclear plant under active military conflict, establishing on-site monitoring while shells fell around the facility.",
  },
  {
    icon: AlertTriangle,
    title: "Iran Nuclear Negotiations",
    description:
      "Maintained continuous dialogue with Tehran while upholding verification standards, proving that impartiality and rigor can coexist under pressure.",
  },
  {
    icon: Compass,
    title: "Global Crisis Response",
    description:
      "Coordinated international technical response across multiple continents, from North Korea to the Middle East to Latin America.",
  },
]

const stats = [
  { value: "15+", label: "Years of Crisis Diplomacy", detail: "From Buenos Aires to Vienna, bilateral to multilateral" },
  { value: "170+", label: "Member States Engaged", detail: "Deep relationships across every region" },
  { value: "24/7", label: "Real-Time Decision Making", detail: "When lives and stability hang in balance" },
]

function useInView(threshold = 0.2) {
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

export function DangerousWorldSection() {
  const headerAnim = useInView()
  const imageAnim = useInView(0.3)
  const expAnim = useInView()
  const statsAnim = useInView()
  const quoteAnim = useInView()

  return (
    <section id="dangerous-world" className="relative bg-muted overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />

      <div className="relative container mx-auto px-6 lg:px-16 py-32 lg:py-44">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={`max-w-5xl mb-24 transition-all duration-1000 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-px bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[11px] font-medium">
              Section 02 &mdash; The Moment
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-[1.1] tracking-tight">
            In a Dangerous World
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
            This moment requires leadership forged in crisis, not commentary from a distance.
          </p>
        </div>

        {/* Hero Image - Full Width */}
        <div 
          ref={imageAnim.ref}
          className={`relative mb-32 transition-all duration-1000 ${imageAnim.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="/images/crisis-diplomacy.jpg"
              alt="Crisis diplomacy in action"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Premium overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-foreground/40" />
          </div>
          
          {/* Quote overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-secondary" />
              <span className="text-white/60 text-[11px] uppercase tracking-[0.2em]">Field Experience</span>
            </div>
            <p className="text-white text-xl md:text-2xl font-serif italic max-w-2xl leading-relaxed">
              &ldquo;When crisis meets diplomacy, experience is not optional &mdash; it is essential.&rdquo;
            </p>
          </div>

          {/* Frame accents */}
          <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-white/20" />
          <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-white/20" />
        </div>

        {/* The Stakes + Experience */}
        <div 
          ref={expAnim.ref}
          className="grid lg:grid-cols-2 gap-20 items-start mb-32"
        >
          <div className={`transition-all duration-1000 ${expAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug gold-line">
              The Stakes Have Never Been Higher
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                This is a moment of active conflict, nuclear escalation risk, and
                unprecedented institutional strain. Wars rage on multiple
                continents. The international order faces challenges it was not
                designed to handle.
              </p>
              <p>
                The next Secretary-General cannot learn on the job. They must
                arrive ready to engage in danger, not merely comment on it from a
                distance.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title} 
                className={`flex gap-6 p-6 bg-card border border-border hover:border-secondary/30 transition-all duration-500 hover-lift ${expAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                style={{ transitionDelay: expAnim.inView ? `${index * 150 + 200}ms` : '0ms' }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center">
                    <exp.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div 
          ref={statsAnim.ref}
          className="grid md:grid-cols-3 gap-0 mb-32"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`relative p-12 bg-card border border-border group hover:bg-secondary hover:border-secondary transition-all duration-500 ${statsAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: statsAnim.inView ? `${index * 100}ms` : '0ms' }}
            >
              <p className="text-6xl md:text-7xl font-serif text-secondary group-hover:text-secondary-foreground transition-colors duration-500 mb-4">
                {stat.value}
              </p>
              <p className="text-foreground font-medium mb-2 group-hover:text-secondary-foreground transition-colors duration-500">
                {stat.label}
              </p>
              <p className="text-muted-foreground text-sm group-hover:text-secondary-foreground/70 transition-colors duration-500">
                {stat.detail}
              </p>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-secondary/20 group-hover:border-secondary-foreground/20 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Why This Fits */}
        <div 
          ref={quoteAnim.ref}
          className={`relative transition-all duration-1000 ${quoteAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="bg-foreground text-background p-16 lg:p-24 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <div className="relative max-w-4xl">
              <span className="text-secondary text-[11px] uppercase tracking-[0.3em] font-medium mb-6 block">
                The Qualification
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-tight">
                Why This Experience Fits the Office
              </h3>
              <p className="text-xl leading-relaxed opacity-80 mb-12 max-w-3xl">
                The Secretary-General is not a commentator. The role demands
                someone who can walk into a war zone, sit across from adversaries,
                maintain composure when stakes are existential, and return with
                something that moves the needle.
              </p>
              <blockquote className="relative pl-8 border-l-2 border-secondary">
                <p className="text-2xl md:text-3xl font-serif italic leading-snug">
                  &ldquo;I go where I am needed. I stay until it matters.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
