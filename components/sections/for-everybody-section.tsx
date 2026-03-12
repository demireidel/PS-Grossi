"use client"

import Image from "next/image"
import { Heart, Users2, Leaf, Stethoscope } from "lucide-react"

const deliveryAreas = [
  {
    icon: Stethoscope,
    title: "Cancer Care Initiative",
    description:
      "Rays of Hope: bringing cancer diagnosis and treatment to over 40 countries with no access to radiation therapy.",
    stat: "40+",
    statLabel: "Countries Reached",
  },
  {
    icon: Heart,
    title: "Food Security",
    description:
      "Technical cooperation on nuclear applications for agriculture, helping nations feed their populations sustainably.",
    stat: "160",
    statLabel: "Projects Active",
  },
  {
    icon: Leaf,
    title: "Climate & Environment",
    description:
      "Clean energy support and environmental monitoring, helping countries navigate the energy transition.",
    stat: "30%",
    statLabel: "Emissions Focus",
  },
  {
    icon: Users2,
    title: "Gender Equality",
    description:
      "Achieved gender parity in senior positions. Launched the Marie Sklodowska-Curie Fellowship Programme.",
    stat: "50%",
    statLabel: "Senior Leadership",
  },
]

export function ForEverybodySection() {
  return (
    <section id="for-everybody" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <p className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            The Impact
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            For Everybody
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            How leadership is judged by what it delivers for people
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[2/1] mb-20 overflow-hidden">
          <Image
            src="/images/humanitarian-delivery.jpg"
            alt="Humanitarian engagement"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-12 max-w-2xl">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Human Dignity as Purpose
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              The UN must be judged by what it protects and improves. Not by
              resolutions passed, but by lives changed.
            </p>
          </div>
        </div>

        {/* Delivery Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {deliveryAreas.map((area) => (
            <div
              key={area.title}
              className="p-8 lg:p-10 bg-card border border-border hover:border-secondary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <area.icon className="w-10 h-10 text-secondary" />
                <div className="text-right">
                  <p className="text-3xl font-serif text-secondary">
                    {area.stat}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {area.statLabel}
                  </p>
                </div>
              </div>
              <h4 className="font-serif text-xl text-foreground mb-3">
                {area.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gender as Proof */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Gender as Proof of Leadership
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Talk is easy. Results are hard. Under Grossi&apos;s leadership,
              the IAEA achieved something most international organizations only
              promise: true gender parity at senior levels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Marie Sklodowska-Curie Fellowship Programme now brings women
              scientists from developing countries into nuclear fields
              worldwide, building capacity that will last generations.
            </p>
            <ul className="space-y-4 text-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-secondary" />
                50% women in senior management
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-secondary" />
                100+ fellows annually from underrepresented nations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-secondary" />
                First IAEA Director General to prioritize gender as strategic
              </li>
            </ul>
          </div>
          <div className="bg-secondary/10 p-12">
            <blockquote className="font-serif text-2xl text-foreground italic leading-relaxed">
              &ldquo;Inclusion is not a box to check. It is how you build an
              institution that reflects the world it serves.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Why This Matters to Member States */}
        <div className="bg-primary text-primary-foreground p-12 lg:p-16">
          <div className="max-w-4xl">
            <h3 className="font-serif text-2xl md:text-3xl mb-6">
              Why This Matters to Member States
            </h3>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Better outcomes for people also mean stronger, more useful
              multilateralism for states. When the UN delivers tangible
              results&mdash;in health, in food security, in climate
              response&mdash;it earns the credibility to convene on harder
              questions.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Grossi is not a narrow technical candidate. His record proves that
              diplomatic skill and humanitarian impact are not
              opposites&mdash;they are mutually reinforcing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
