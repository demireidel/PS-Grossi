import { POLICY_AREAS } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { ContentCard, CardNumber } from "@/components/content-card"

export function PolicyPlatformSection() {
  return (
    <SectionContainer id="platform" bg="muted">
      <Reveal direction="up">
        <SectionHeader
          number="06"
          label="Policy Platform"
          title={<>What Grossi <span className="text-secondary italic">Would Do</span></>}
          subtitle="Concrete proposals across six priority areas. Not aspirations—actionable reforms based on proven experience."
        />
      </Reveal>

      {/* Policy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border mb-32">
        {POLICY_AREAS.map((area, index) => (
          <Reveal key={area.title} direction="scale" delay={index * 120}>
            <ContentCard index={index}>
              <div className="flex items-start justify-between mb-6">
                <area.icon className="w-8 h-8 text-secondary" />
                <CardNumber value={`0${index + 1}`} />
              </div>
              <h3 className="font-serif text-xl text-foreground group-hover:text-background mb-2 transition-colors duration-400">
                {area.title}
              </h3>
              <p className="text-secondary text-sm mb-6 group-hover:text-secondary/80 transition-colors duration-400">
                {area.subtitle}
              </p>
              <ul className="space-y-3 mb-8">
                {area.proposals.map((proposal, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed flex gap-3 transition-colors duration-400"
                  >
                    <span className="text-secondary shrink-0 mt-1">—</span>
                    {proposal}
                  </li>
                ))}
              </ul>
              <blockquote className="text-sm italic text-muted-foreground/80 group-hover:text-background/60 border-l-2 border-secondary/30 pl-4 transition-colors duration-400">
                &ldquo;{area.quote}&rdquo;
              </blockquote>
            </ContentCard>
          </Reveal>
        ))}
      </div>

      {/* Closing Statement */}
      <Reveal direction="up">
        <div className="text-center max-w-3xl mx-auto mt-20">
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-[1.2] mb-6">
            This Is Not a Manifesto. <span className="text-secondary italic">It Is a Track Record.</span>
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every proposal above reflects something Grossi has already done at the IAEA: crisis deployment, nuclear safety zones, gender parity, institutional reform, impartial engagement across all divides.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The UN Secretary-General role is larger in scope. But the principles are the same. And unlike campaign promises, these have been tested under fire.
          </p>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
