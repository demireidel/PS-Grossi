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
      className="py-24 lg:py-32 bg-muted"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <p className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            The Moment
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            In a Dangerous World
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Why this moment requires crisis-tested leadership
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] mb-20 overflow-hidden">
          <Image
            src="/images/crisis-diplomacy.jpg"
            alt="Crisis diplomacy in action"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <p className="text-white/80 text-lg max-w-2xl">
              When crisis meets diplomacy, experience is not optional&mdash;it
              is essential.
            </p>
          </div>
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
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-card border border-border">
            <p className="text-4xl font-serif text-secondary mb-4">15+</p>
            <p className="text-foreground font-medium mb-2">
              Years of Crisis Diplomacy
            </p>
            <p className="text-muted-foreground text-sm">
              From Argentina to Austria, from bilateral negotiations to
              multilateral leadership
            </p>
          </div>
          <div className="p-8 bg-card border border-border">
            <p className="text-4xl font-serif text-secondary mb-4">170+</p>
            <p className="text-foreground font-medium mb-2">
              Member States Engaged
            </p>
            <p className="text-muted-foreground text-sm">
              Deep relationships across every region of the world
            </p>
          </div>
          <div className="p-8 bg-card border border-border">
            <p className="text-4xl font-serif text-secondary mb-4">24/7</p>
            <p className="text-foreground font-medium mb-2">
              Real-Time Decision Making
            </p>
            <p className="text-muted-foreground text-sm">
              Proven judgment when lives and global stability hang in the
              balance
            </p>
          </div>
        </div>

        {/* Why This Fits */}
        <div className="bg-foreground text-background p-12 lg:p-16">
          <div className="max-w-4xl">
            <h3 className="font-serif text-2xl md:text-3xl mb-6">
              Why This Experience Fits the Office
            </h3>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              The Secretary-General is not a commentator. The role demands
              someone who can walk into a war zone, sit across from adversaries,
              maintain composure when stakes are existential, and return with
              something that moves the needle.
            </p>
            <blockquote className="border-l-4 border-secondary pl-6 text-2xl font-serif italic">
              &ldquo;I go where I am needed. I stay until it matters.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
