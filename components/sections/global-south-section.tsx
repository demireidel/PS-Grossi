import Image from "next/image"
import { BLUR_DATA_URL } from "@/lib/constants"
import { PERSPECTIVES, GLOBAL_SOUTH_STATS } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Blockquote } from "@/components/blockquote"
import { CinematicImage } from "@/components/cinematic-image"
import { ContentCard, CardDescription } from "@/components/content-card"

export function GlobalSouthSection() {
  return (
    <SectionContainer id="global-south">
      <Reveal direction="up">
        <SectionHeader
          number="07"
          label="A Voice from the South"
          title={<>The Global South <span className="text-secondary italic">Perspective</span></>}
          subtitle="Grossi is Argentine. He understands what it means to navigate great power politics from outside the traditional centers of power."
        />
      </Reveal>

      {/* Quote Block */}
      <Reveal direction="up">
        <div className="mb-32 max-w-4xl mx-auto py-16">
          <Blockquote variant="centered" size="large" cite="— Rafael Grossi, El País interview, December 2025">
            &ldquo;What we need is a Secretary-General chosen for their merits. Someone should be chosen for their vision, not because after 80 years of men in the position it&apos;s time for a woman, or someone with blue eyes. You should be chosen for what you are, what you have done, what you can do.&rdquo;
          </Blockquote>
        </div>
      </Reveal>

      {/* Stats Row */}
      <div className="mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border">
          {GLOBAL_SOUTH_STATS.map((stat, index) => (
            <Reveal key={stat.label} direction="up" delay={index * 100}>
              <div className="group p-10 lg:p-12 bg-card text-center transition-[background-color] duration-600 relative overflow-hidden hover:bg-foreground">
                <p className="text-4xl md:text-5xl font-serif text-secondary mb-3 transition-transform duration-400 group-hover:scale-110">{stat.value}</p>
                <p className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors duration-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Regional Perspectives */}
      <div className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-border">
          {PERSPECTIVES.map((perspective, index) => (
            <Reveal key={perspective.region} direction="up" delay={index * 100}>
              <ContentCard index={index}>
                <p className="text-secondary text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] mb-4 group-hover:text-secondary/80 transition-colors duration-400">
                  {perspective.region}
                </p>
                <h3 className="font-serif text-2xl text-foreground group-hover:text-background mb-4 transition-colors duration-400">
                  {perspective.title}
                </h3>
                <CardDescription>{perspective.description}</CardDescription>
              </ContentCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* UN Headquarters Image */}
      <Reveal direction="fade" threshold={0.05}>
        <div className="mb-32">
          <CinematicImage
            src="/images/un-headquarters.jpg"
            alt="Rafael Grossi chairing a high-level meeting at IAEA headquarters with international delegates"
            aspect="cinema"
            overlayContent={
              <div className="px-8 lg:px-20 pb-[10%]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-px bg-secondary" />
                  <span className="text-white/60 text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] text-shadow-overlay">The Institution</span>
                </div>
                <p className="text-white/90 text-xl md:text-2xl max-w-2xl font-light leading-relaxed text-shadow-overlay">
                  A voice from the Global South for the world&apos;s most important institution.
                </p>
              </div>
            }
          />
        </div>
      </Reveal>

      {/* Argentina Context */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal direction="left">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            From Buenos Aires to Vienna
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Born in Buenos Aires in 1961. Grandparents from Piedmont, Italy—Carbonara Scrivia made him honorary citizen in 2025. Joined Argentina&apos;s Foreign Service in 1985. Lived through economic crises, hyperinflation, democratic transitions.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            This background matters. Grossi understands what smaller nations face when great powers clash. He knows how developing countries navigate international institutions designed by others. He has spent 40 years building bridges from that position.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            &ldquo;Argentina is a country that has been part of all the multilateral non-proliferation regimes,&rdquo; he notes. &ldquo;We chose not to develop nuclear weapons, even though we could have. That gives me credibility when I talk about these issues.&rdquo;
          </p>
        </Reveal>
        <Reveal direction="right" delay={300}>
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src="/images/grossi-portrait-formal.jpg"
              alt="Rafael Grossi speaking at a podium with senior IAEA officials, first Latin American to lead the agency"
              fill
              quality={85}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  )
}
