"use client"

import Image from "next/image"
import { Target, Users, Gauge, RefreshCw } from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "Act Earlier",
    description:
      "Prevention before crisis. Early warning becomes early action.",
  },
  {
    icon: Users,
    title: "Engage Across Divides",
    description:
      "Impartial diplomacy that speaks with all parties, not just some.",
  },
  {
    icon: Gauge,
    title: "Deliver for People",
    description:
      "Practical results that matter to states and citizens alike.",
  },
  {
    icon: RefreshCw,
    title: "Institutional Renewal",
    description:
      "A UN that runs itself with discipline, transparency, and merit.",
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="py-32 lg:py-48 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      
      <div className="container mx-auto px-6 lg:px-20 relative">
        {/* Section Header */}
        <div className="max-w-5xl mb-24">
          <div className="flex items-center gap-6 mb-8">
            <span className="h-px w-16 bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[10px] font-medium">
              The Vision
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-[0.95] tracking-tight">
            A UN That <span className="text-secondary italic">Works</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
            Rafael Grossi&apos;s vision for a more operational, credible, and
            effective United Nations
          </p>
        </div>

        {/* The Problem */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              The Challenge We Face
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The United Nations is too often reactive, fragmented, and distant
              from practical results. In a world of accelerating crises, the gap
              between what the UN promises and what it delivers has become
              impossible to ignore.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is not a failure of purpose. It is a failure of
              performance&mdash;one that can be corrected with the right
              leadership.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/un-headquarters.jpg"
              alt="United Nations Headquarters"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* The Doctrine */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              The Governing Doctrine
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Early action. Impartial engagement. Practical delivery.
              Institutional renewal. Four principles that define what a working
              UN must embody.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group p-10 lg:p-12 bg-card border border-border hover:bg-foreground transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <principle.icon className="w-8 h-8 text-secondary group-hover:text-secondary transition-colors duration-500" />
                  <span className="text-4xl font-serif text-foreground/5 group-hover:text-background/10 transition-colors duration-500">0{index + 1}</span>
                </div>
                <h4 className="font-serif text-xl text-foreground group-hover:text-background mb-4 transition-colors duration-500">
                  {principle.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed text-sm transition-colors duration-500">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Election Matters */}
        <div className="bg-primary text-primary-foreground p-16 lg:p-24 relative overflow-hidden film-grain">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative max-w-4xl">
            <span className="inline-flex items-center gap-4 text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mb-10">
              <span className="w-8 h-px bg-secondary" />
              The Stakes
            </span>
            
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-[1.1]">
              Why This Election <span className="text-secondary italic">Matters</span>
            </h3>
            
            <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-12 font-light">
              The issue is not symbolism. The issue is whether the next
              Secretary-General can make the institution more useful&mdash;to
              member states navigating impossible pressures, and to people whose
              lives depend on what the UN does next.
            </p>
            
            <blockquote className="relative pl-8 border-l-2 border-secondary">
              <p className="text-2xl md:text-3xl font-serif italic leading-[1.3]">
                &ldquo;The world does not need a caretaker. It needs a leader who
                has walked through fire.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
