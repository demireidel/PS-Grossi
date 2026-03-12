"use client"

import Image from "next/image"
import { Shield, AlertTriangle, Compass } from "lucide-react"

const experiences = [
  {
    icon: Shield,
    title: "Nuclear Safeguards in Conflict Zones",
    description:
      "Led IAEA missions to Zaporizhzhia nuclear plant under active military conflict, establishing on-site monitoring while shells fell.",
  },
  {
    icon: AlertTriangle,
    title: "Iran Nuclear Negotiations",
    description:
      "Maintained continuous dialogue with Tehran while upholding verification standards, proving that impartiality and rigor can coexist.",
  },
  {
    icon: Compass,
    title: "Global Crisis Response",
    description:
      "Coordinated international technical response across multiple continents, from North Korea to the Middle East to Latin America.",
  },
]

export function DangerousWorldSection() {
  return (
    <section
      id="dangerous-world"
      className="py-32 lg:py-48 bg-muted relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      
      <div className="container mx-auto px-6 lg:px-20 relative">
        {/* Section Header */}
        <div className="max-w-5xl mb-24">
          <div className="flex items-center gap-6 mb-8">
            <span className="h-px w-16 bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[10px] font-medium">
              Section 02
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              The Moment
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-10 leading-[0.95] tracking-tight">
            In a Dangerous <span className="text-secondary italic">World</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
            Why this moment requires crisis-tested leadership
          </p>
        </div>

        {/* Hero Image - Cinematic */}
        <div className="relative aspect-cinema mb-24 overflow-hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/DG_Interview_%2801119848%29_%2850370421978%29.jpg/1280px-DG_Interview_%2801119848%29_%2850370421978%29.jpg"
            alt="Crisis diplomacy in action"
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
          
          {/* Letterbox */}
          <div className="absolute top-0 left-0 right-0 h-[6%] bg-black" />
          <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black" />
          
          <div className="absolute bottom-[10%] left-0 right-0 px-8 lg:px-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-secondary" />
              <span className="text-white/50 text-[10px] uppercase tracking-[0.3em]">On the Ground</span>
            </div>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
              When crisis meets diplomacy, experience is not optional&mdash;it
              is essential.
            </p>
          </div>
          
          {/* Frame accents */}
          <div className="absolute top-[10%] left-8 w-16 h-16 border-l-2 border-t-2 border-white/20" />
          <div className="absolute top-[10%] right-8 w-16 h-16 border-r-2 border-t-2 border-white/20" />
        </div>

        {/* The Stakes */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              The Stakes Have Never Been Higher
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This is a moment of active conflict, nuclear escalation risk, and
              unprecedented institutional strain. Wars rage on multiple
              continents. The international order faces challenges it was not
              designed to handle.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The next Secretary-General cannot learn on the job. They must
              arrive ready to engage in danger, not merely comment on it from a
              distance.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center">
                    <exp.icon className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Judgment Under Pressure */}
        <div className="grid md:grid-cols-3 gap-1 mb-24">
          <div className="group p-12 lg:p-14 bg-card border border-border hover:bg-foreground transition-all duration-500">
            <p className="text-5xl md:text-6xl font-serif text-secondary mb-6">15+</p>
            <p className="text-foreground group-hover:text-background font-medium mb-3 transition-colors duration-500">
              Years of Crisis Diplomacy
            </p>
            <p className="text-muted-foreground group-hover:text-background/60 text-sm transition-colors duration-500">
              From Argentina to Austria, from bilateral negotiations to
              multilateral leadership
            </p>
          </div>
          <div className="group p-12 lg:p-14 bg-card border border-border hover:bg-foreground transition-all duration-500">
            <p className="text-5xl md:text-6xl font-serif text-secondary mb-6">170+</p>
            <p className="text-foreground group-hover:text-background font-medium mb-3 transition-colors duration-500">
              Member States Engaged
            </p>
            <p className="text-muted-foreground group-hover:text-background/60 text-sm transition-colors duration-500">
              Deep relationships across every region of the world
            </p>
          </div>
          <div className="group p-12 lg:p-14 bg-card border border-border hover:bg-foreground transition-all duration-500">
            <p className="text-5xl md:text-6xl font-serif text-secondary mb-6">24/7</p>
            <p className="text-foreground group-hover:text-background font-medium mb-3 transition-colors duration-500">
              Real-Time Decision Making
            </p>
            <p className="text-muted-foreground group-hover:text-background/60 text-sm transition-colors duration-500">
              Proven judgment when lives and global stability hang in the
              balance
            </p>
          </div>
        </div>

        {/* Why This Fits */}
        <div className="bg-foreground text-background p-16 lg:p-24 relative overflow-hidden film-grain">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative max-w-4xl">
            <span className="inline-flex items-center gap-4 text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mb-10">
              <span className="w-8 h-px bg-secondary" />
              The Fit
            </span>
            
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-[1.1]">
              Why This Experience <span className="text-secondary italic">Fits</span>
            </h3>
            
            <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-12 font-light">
              The Secretary-General is not a commentator. The role demands
              someone who can walk into a war zone, sit across from adversaries,
              maintain composure when stakes are existential, and return with
              something that moves the needle.
            </p>
            
            <blockquote className="relative pl-8 border-l-2 border-secondary">
              <p className="text-2xl md:text-3xl font-serif italic leading-[1.3]">
                &ldquo;I go where I am needed. I stay until it matters.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
