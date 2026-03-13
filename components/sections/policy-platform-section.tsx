"use client"

import { useInView } from "react-intersection-observer"
import { Shield, Users, Zap, Building2, Globe, Scale } from "lucide-react"

const policyAreas = [
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="platform" className="py-32 lg:py-48 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      
      <div className="container mx-auto px-6 lg:px-20 relative" ref={ref}>
        {/* Section Header */}
        <div className="max-w-5xl mb-20">
          <div className="flex items-center gap-6 mb-8">
            <span className="h-px w-16 bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[10px] font-medium">
              Section 06
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              Policy Platform
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-[0.95] tracking-tight">
            What Grossi <span className="text-secondary italic">Would Do</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
            Concrete proposals across six priority areas. Not aspirations—actionable reforms based on proven experience.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mb-24">
          {policyAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group p-10 lg:p-12 bg-card border border-border hover:bg-foreground transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <area.icon className="w-7 h-7 text-secondary" />
                <span className="text-3xl font-serif text-foreground/10 group-hover:text-background/20 transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>
              
              <h3 className="font-serif text-xl text-foreground group-hover:text-background mb-2 transition-colors duration-500">
                {area.title}
              </h3>
              <p className="text-secondary text-sm mb-6 group-hover:text-secondary/80 transition-colors duration-500">
                {area.subtitle}
              </p>
              
              <ul className="space-y-3 mb-8">
                {area.proposals.map((proposal, i) => (
                  <li 
                    key={i}
                    className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed flex gap-3 transition-colors duration-500"
                  >
                    <span className="text-secondary shrink-0 mt-1">—</span>
                    {proposal}
                  </li>
                ))}
              </ul>
              
              <blockquote className="text-sm italic text-muted-foreground/80 group-hover:text-background/60 border-l-2 border-secondary/30 pl-4 transition-colors duration-500">
                &ldquo;{area.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-foreground text-background p-16 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative max-w-3xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl mb-8 leading-[1.1]">
              This Is Not a Manifesto. <span className="text-secondary italic">It Is a Track Record.</span>
            </h3>
            <p className="text-lg opacity-70 mb-6 leading-relaxed">
              Every proposal above reflects something Grossi has already done at the IAEA: crisis deployment, nuclear safety zones, gender parity, institutional reform, impartial engagement across all divides.
            </p>
            <p className="text-lg opacity-70 leading-relaxed">
              The UN Secretary-General role is larger in scope. But the principles are the same. And unlike campaign promises, these have been tested under fire.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
