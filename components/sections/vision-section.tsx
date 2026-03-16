"use client"

import Image from "next/image"
import { Target, Users, Gauge, RefreshCw } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import type { Principle } from "@/lib/types"
import { SectionHeader } from "@/components/section-header"
import { Blockquote } from "@/components/blockquote"
import { DarkPanel } from "@/components/dark-panel"
import { DOT_PATTERN_SM, DOT_PATTERN_SIZE_LG } from "@/lib/constants"

const principles: Principle[] = [
  {
    icon: Target,
    title: "Act Earlier",
    description:
      "Prevention before crisis. The UN must shift from reactive responses to anticipatory action. Early warning systems exist—what is missing is the political will and operational capacity to act on them before situations deteriorate beyond recovery.",
  },
  {
    icon: Users,
    title: "Engage Across Divides",
    description:
      "Impartial diplomacy that speaks with all parties, not just some. In a world of deepening polarization, the UN's unique value lies in its ability to maintain channels of communication that no single state can replicate.",
  },
  {
    icon: Gauge,
    title: "Deliver for People",
    description:
      "Practical results that matter to states and citizens alike. The measure of UN success is not the number of resolutions passed, but the tangible improvements in human security, health, food, and dignity.",
  },
  {
    icon: RefreshCw,
    title: "Institutional Renewal",
    description:
      "A UN that runs itself with discipline, transparency, and merit. Internal reform is not optional—it is the foundation of external credibility. Staff deserve a workplace of integrity; member states deserve an institution that performs.",
  },
]

export function VisionSection() {
  const headerAnim = useInView()
  const contentAnim = useInView()
  const doctrineAnim = useInView()
  const ctaAnim = useInView()

  return (
    <section id="vision" className="py-32 lg:py-48 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: DOT_PATTERN_SM, backgroundSize: DOT_PATTERN_SIZE_LG }} />

      <div className="container mx-auto px-6 lg:px-20 relative">
        <SectionHeader
          ref={headerAnim.ref}
          number="01"
          label="The Vision"
          title={<>A UN That <span className="text-secondary italic">Works</span></>}
          subtitle="Rafael Grossi's vision for a more operational, credible, and effective United Nations"
          size="large"
          animated
          inView={headerAnim.inView}
        />

        {/* Grossi's Diagnosis */}
        <div
          ref={contentAnim.ref}
          className={`grid lg:grid-cols-2 gap-16 items-center mb-32 transition-[opacity,transform] duration-800 ${contentAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              &ldquo;The UN Has Forgotten Its Purpose&rdquo;
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              In Grossi&apos;s own words: &ldquo;If you read the Charter, you
              understand that the UN was created to prevent wars, to bring about
              peace... and this is not discussed. If you analyze the hotspots of
              war on a world map—Sudan, Gaza, the Sahel, Ukraine—the common
              denominator is the absence of the UN. It is not there. It does not
              act. And this can be remedied.&rdquo;
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              After 40 years navigating international crises—from non-proliferation talks
              to Fukushima, from Tehran to Zaporizhzhia—Grossi sees a UN in
              profound crisis of credibility. The organization remains
              indispensable, but it has become reactive and distant from the
              conflicts that define our era.
            </p>

            <Blockquote size="default">
              &ldquo;The UN needs a secretary with boots in the mud—not one who
              comments from a distance. My conviction was forged through
              experience managing high-tension international crises.&rdquo;
            </Blockquote>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden group">
            <Image
              src="/images/grossi-un-address.jpg"
              alt="Rafael Grossi delivering a keynote address at the IAEA Nuclear Energy Summit podium with international flags, 2024"
              fill
              quality={85}
              className="object-cover transition-transform duration-600 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* The Doctrine */}
        <div ref={doctrineAnim.ref} className="mb-32">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-[opacity,transform] duration-800 ${doctrineAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              The Governing Doctrine
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Early action. Impartial engagement. Practical delivery.
              Institutional renewal. Four principles that define what a working
              UN must embody.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`group p-10 lg:p-12 bg-card hover:bg-foreground transition-[opacity,transform,background-color] duration-600 relative overflow-hidden ${doctrineAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: doctrineAnim.inView ? `${index * 100}ms` : '0ms' }}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                <div className="flex items-start justify-between mb-8">
                  <principle.icon className="w-8 h-8 text-secondary transition-transform duration-400 group-hover:scale-110" />
                  <span className="text-4xl font-serif text-foreground/[0.12] group-hover:text-background/20 transition-colors duration-400" aria-hidden="true">0{index + 1}</span>
                </div>
                <h4 className="font-serif text-xl text-foreground group-hover:text-background mb-4 transition-colors duration-400">
                  {principle.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed text-sm transition-colors duration-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Election Matters */}
        <div
          ref={ctaAnim.ref}
          className={`transition-[opacity,transform] duration-800 ${ctaAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <DarkPanel variant="primary" label="The Stakes">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-[1.1]">
                Why Grossi, <span className="text-secondary italic">Why Now</span>
              </h3>

              <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-8 font-light">
                &ldquo;We are actors in a geopolitical reality we must shape to
                avoid conflict. That is the challenge of diplomacy—today and
                always.&rdquo; Grossi brings not theory, but four decades of
                crisis-tested leadership.
              </p>

              <p className="text-base md:text-lg leading-relaxed opacity-70 mb-8">
                The first Latin American to lead the IAEA. A diplomat who has sat
                across from Putin and Zelensky, Iranian ayatollahs and American
                presidents. Someone who has walked into active war zones—not to
                observe, but to act.
              </p>

              <p className="text-base md:text-lg leading-relaxed opacity-70 mb-12">
                The next Secretary-General cannot afford to learn on the job.
                The crises are too urgent, the divisions too deep, the stakes
                too high. What is needed is someone who has already done the
                hardest version of this work&mdash;and delivered results under
                conditions that most diplomats would consider impossible.
              </p>

              <Blockquote>
                &ldquo;Active diplomacy must be deployed, and solutions proposed
                as an impartial, but not indifferent, interlocutor.&rdquo;
              </Blockquote>
          </DarkPanel>
        </div>
      </div>
    </section>
  )
}
