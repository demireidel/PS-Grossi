"use client"

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
      "Serious diplomacy is grounded in verification, restraint, and credibility&mdash;not declarations made for domestic audiences.",
  },
]

export function WithEverybodySection() {
  return (
    <section id="with-everybody" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <p className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            The Method
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            With Everybody
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            How impartial diplomacy works in a divided world
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          {/* Left Column - Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden sticky top-24">
              <Image
                src="/images/global-engagement.jpg"
                alt="Global diplomatic engagement"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Impartiality as Effectiveness
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A Secretary-General cannot help bridge divides while speaking
                only to one camp. The power of the office lies precisely in its
                capacity to engage across every fault line&mdash;East and West,
                North and South, across ideological and geopolitical
                boundaries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is not about being neutral on values. It is about being
                available to all parties so that when crises emerge, there is
                someone in the room who everyone can accept.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-12">
              {engagementPrinciples.map((principle) => (
                <div
                  key={principle.number}
                  className="flex gap-8 border-l-2 border-secondary pl-8"
                >
                  <div className="flex-shrink-0">
                    <span className="font-serif text-4xl text-secondary/30">
                      {principle.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-3">
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
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 lg:p-12 bg-muted">
            <h4 className="font-serif text-xl text-foreground mb-4">
              Maintained Dialogue with Tehran
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Even at moments of maximum tension, kept verification channels
              open and delivered tangible outcomes while others chose
              confrontation.
            </p>
          </div>
          <div className="p-8 lg:p-12 bg-muted">
            <h4 className="font-serif text-xl text-foreground mb-4">
              Engaged Moscow on Nuclear Safety
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Negotiated access to Zaporizhzhia with Russian authorities while
              maintaining full cooperation with Kyiv. Both sides accepted his
              presence.
            </p>
          </div>
          <div className="p-8 lg:p-12 bg-muted">
            <h4 className="font-serif text-xl text-foreground mb-4">
              Built Consensus Across the Board
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              From Beijing to Washington, from Riyadh to Brussels, earned the
              respect of capitals that agree on very little else.
            </p>
          </div>
          <div className="p-8 lg:p-12 bg-muted">
            <h4 className="font-serif text-xl text-foreground mb-4">
              Spoke Truth to All Parties
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Never sacrificed verification for access, never diluted findings
              for political convenience. Credibility maintained through rigor.
            </p>
          </div>
        </div>

        {/* Why This Is UN Leadership */}
        <div className="bg-secondary text-secondary-foreground p-12 lg:p-16">
          <div className="max-w-4xl">
            <h3 className="font-serif text-2xl md:text-3xl mb-6">
              Why This Is UN Leadership
            </h3>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              The United Nations was built on the premise that even adversaries
              can share a table. The Secretary-General must be the person who
              sets that table&mdash;and who is welcome at every seat around it.
            </p>
            <blockquote className="border-l-4 border-white/30 pl-6 text-2xl font-serif italic">
              &ldquo;Diplomacy means talking to everyone. Otherwise, it is just
              a conversation among friends.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
