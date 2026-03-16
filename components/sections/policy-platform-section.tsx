"use client"

import { Shield, Users, Zap, Building2, Globe, Scale } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import type { PolicyArea } from "@/lib/types"
import { SectionHeader } from "@/components/section-header"


const policyAreas: PolicyArea[] = [
  {
    icon: Shield,
    title: "Peace and Security",
    subtitle: "From Commentary to Action",
    proposals: [
      "Deploy UN presence to conflict zones before full escalation—not after",
      "Strengthen the Secretary-General's good offices with dedicated crisis response capacity",
      "Reform peacekeeping mandates to match operational realities on the ground",
      "Establish direct communication channels with all parties in active conflicts",
    ],
    quote: "The UN must be present where conflicts are, not comment from afar.",
  },
  {
    icon: Zap,
    title: "Nuclear Risk Reduction",
    subtitle: "Grossi's Core Expertise",
    proposals: [
      "Reinforce global non-proliferation architecture with strengthened verification",
      "Establish safety zones around nuclear facilities in conflict areas",
      "Lead dialogue on new arms control frameworks for a multipolar era",
      "Support states in peaceful nuclear energy transition with IAEA model",
    ],
    quote: "Nuclear risks are rising. We cannot afford to wait for the next crisis.",
  },
  {
    icon: Globe,
    title: "Climate and Development",
    subtitle: "Delivery Over Declarations",
    proposals: [
      "Accelerate clean energy support for developing nations—technical, not just financial",
      "Integrate climate action across all UN agencies, not siloed programs",
      "Expand models like Rays of Hope: tangible projects with measurable impact",
      "Bridge North-South divide with practical cooperation, not lectures",
    ],
    quote: "The Global South needs partners, not patrons.",
  },
  {
    icon: Building2,
    title: "Institutional Reform",
    subtitle: "Merit and Results",
    proposals: [
      "Appoint senior staff based on qualification, not political patronage",
      "Set clear performance metrics for all UN agencies and report publicly",
      "Reduce bureaucratic overlap and accelerate crisis response times",
      "Build workplace culture of integrity—zero tolerance for harassment",
    ],
    quote: "The UN must demand of itself what it demands of member states.",
  },
  {
    icon: Users,
    title: "Inclusion and Representation",
    subtitle: "Proven Track Record",
    proposals: [
      "Continue gender parity achievements: from 28% to 52% at IAEA, now UN-wide",
      "Expand programs like Marie Sklodowska-Curie for developing nation scientists",
      "Ensure Global South voices in senior leadership—not token appointments",
      "Merit-based selection: vision and experience over identity quotas",
    ],
    quote: "I increased women in leadership from 28% to 52%. These are facts, not words.",
  },
  {
    icon: Scale,
    title: "Multilateral System",
    subtitle: "Rebuilding Trust",
    proposals: [
      "Demonstrate UN utility through concrete results that matter to states",
      "Maintain impartiality as the foundation of the office's unique value",
      "Speak truth to all parties—even when uncomfortable",
      "Earn credibility through delivery, not rhetoric",
    ],
    quote: "The UN's authority must be earned through performance.",
  },
]

export function PolicyPlatformSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="platform" className="py-32 lg:py-48 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative" ref={ref}>
        <SectionHeader
          number="06"
          label="Policy Platform"
          title={<>What Grossi <span className="text-secondary italic">Would Do</span></>}
          subtitle="Concrete proposals across six priority areas. Not aspirations—actionable reforms based on proven experience."
          animated
          inView={inView}
        />

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border mb-32">
          {policyAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group p-10 lg:p-12 bg-card hover:bg-foreground transition-[opacity,transform,background-color] duration-600 relative overflow-hidden ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary/40 via-secondary/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
              <div className="flex items-start justify-between mb-6">
                <area.icon className="w-8 h-8 text-secondary" />
                <span className="text-3xl font-serif text-foreground/[0.12] group-hover:text-background/20 transition-colors duration-400" aria-hidden="true">
                  0{index + 1}
                </span>
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
            </div>
          ))}
        </div>

        {/* Closing Statement */}
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
      </div>
    </section>
  )
}
