"use client"

import Image from "next/image"
import { Target, Users, Gauge, RefreshCw } from "lucide-react"

const principles = [
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
              Section 01
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              The Vision
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-10 leading-[0.95] tracking-tight">
            A UN That <span className="text-secondary italic">Works</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
            Rafael Grossi&apos;s vision for a more operational, credible, and
            effective United Nations
          </p>
        </div>

        {/* Grossi's Diagnosis */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              &ldquo;The UN Has Forgotten Its Purpose&rdquo;
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In Grossi&apos;s own words: &ldquo;If you read the Charter, you
              understand that the UN was created to prevent wars, to bring about
              peace... and this is not discussed. If you analyze the hotspots of
              war on a world map—Sudan, Gaza, the Sahel, Ukraine—the common
              denominator is the absence of the UN. It is not there. It does not
              act. And this can be remedied.&rdquo;
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              After 40 years navigating international crises—from the Falklands
              to Fukushima, from Tehran to Zaporizhzhia—Grossi sees a UN in
              profound crisis of credibility. The organization remains
              indispensable, but it has become reactive and distant from the
              conflicts that define our era.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              &ldquo;The UN is in a profound crisis of credibility,&rdquo; he
              states. The world is experiencing &ldquo;tremendous
              fragmentation&rdquo;: overlapping conflicts, weakened alliances,
              trade wars, and a growing number of countries desiring nuclear
              capabilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              &ldquo;The UN needs a secretary with boots in the mud—not one who
              comments from a distance. My conviction was forged through
              experience managing high-tension international crises.&rdquo;
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/grossi-un-address.jpg"
              alt="Rafael Grossi delivering an address to the United Nations General Assembly on nuclear security and multilateral cooperation"
              fill
              quality={85}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
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
                className="group p-10 lg:p-12 bg-card border border-border hover:bg-primary transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <principle.icon className="w-8 h-8 text-secondary" />
                  <span className="text-4xl font-serif text-foreground/10 group-hover:text-primary-foreground/20 transition-colors duration-500">0{index + 1}</span>
                </div>
                <h4 className="font-serif text-xl text-foreground group-hover:text-primary-foreground mb-4 transition-colors duration-500">
                  {principle.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed text-sm transition-colors duration-500">
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
              Why Grossi, <span className="text-secondary italic">Why Now</span>
            </h3>
            
            <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-8 font-light">
              &ldquo;We are actors in a geopolitical reality we must shape to
              avoid conflict. That is the challenge of diplomacy—today and
              always.&rdquo; Grossi brings not theory, but four decades of
              crisis-tested leadership.
            </p>
            
            <p className="text-lg leading-relaxed opacity-70 mb-8">
              The first Latin American to lead the IAEA. A diplomat who has sat
              across from Putin and Zelensky, Iranian ayatollahs and American
              presidents. Someone who has walked into active war zones—not to
              observe, but to act. Grossi received death threats for his work
              and continues under security protection because experts consider
              them credible.
            </p>
            
            <p className="text-lg leading-relaxed opacity-70 mb-12">
              &ldquo;If the price is criticism, so be it,&rdquo; Grossi says of
              the accusations he receives from all sides. &ldquo;My job requires
              dialogue with everyone. Some say I&apos;m a Zionist puppet, others
              the opposite. One day the pro-Ukrainians claim I&apos;m in
              Putin&apos;s pocket; when I meet with Zelensky, the pro-Russians
              say the reverse. That is precisely what diplomacy requires.&rdquo;
            </p>
            
            <blockquote className="relative pl-8 border-l-2 border-secondary">
              <p className="text-2xl md:text-3xl font-serif italic leading-[1.3]">
                &ldquo;Active diplomacy must be deployed, and solutions proposed
                as an impartial, but not indifferent, interlocutor.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
