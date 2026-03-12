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
    <section id="vision" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <p className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            The Vision
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            A UN That Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group p-8 bg-card border border-border hover:border-secondary/50 transition-colors"
              >
                <principle.icon className="w-10 h-10 text-secondary mb-6" />
                <h4 className="font-serif text-xl text-foreground mb-3">
                  {principle.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Election Matters */}
        <div className="bg-primary text-primary-foreground p-12 lg:p-16">
          <div className="max-w-4xl">
            <h3 className="font-serif text-2xl md:text-3xl mb-6">
              Why This Election Matters
            </h3>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              The issue is not symbolism. The issue is whether the next
              Secretary-General can make the institution more useful&mdash;to
              member states navigating impossible pressures, and to people whose
              lives depend on what the UN does next.
            </p>
            <blockquote className="border-l-4 border-secondary pl-6 text-2xl font-serif italic">
              &ldquo;The world does not need a caretaker. It needs a leader who
              has walked through fire.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
