import { DELIVERY_AREAS, GENDER_ACHIEVEMENTS } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Blockquote } from "@/components/blockquote"
import { DarkPanel } from "@/components/dark-panel"
import { CinematicImage } from "@/components/cinematic-image"
import { ContentCard, CardIconLarge, CardStat, CardTitle, CardDescription } from "@/components/content-card"

export function ForEverybodySection() {
  return (
    <SectionContainer id="for-everybody" bg="muted">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-30" />

      <div className="relative">
        <Reveal direction="up">
          <SectionHeader
            number="04"
            label="The Impact"
            title={<>For <span className="text-secondary italic">Everybody</span></>}
            subtitle="How leadership is judged by what it delivers for people."
            size="large"
          />
        </Reveal>

        {/* Cinematic Hero Image */}
        <Reveal direction="fade" threshold={0.05}>
          <div className="relative mb-44">
            <CinematicImage
              src="/images/grossi-rays-of-hope.jpg"
              alt="Rafael Grossi with his IAEA delegation at the African Union headquarters in Addis Ababa after launching the Rays of Hope cancer care initiative, February 2022"
              aspect="wide"
              kenBurns
              colorGrade="warm"
              filmGrain
              vignette
              overlayContent={
                <div className="flex items-center px-8 lg:px-20 pb-[10%]">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-px bg-gradient-to-r from-secondary to-secondary/30" />
                      <span className="text-white/50 text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] text-shadow-overlay">Human Dignity</span>
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 text-shadow-overlay">
                      Human Dignity
                      <span className="block text-secondary/80 italic">as Purpose</span>
                    </h3>
                    <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-xl text-shadow-overlay">
                      The UN must be judged by what it protects and improves. Not by
                      resolutions passed, but by lives changed.
                    </p>
                  </div>
                </div>
              }
            />
            <div className="absolute top-[10%] left-8 w-16 h-16 border-l-2 border-t-2 border-white/15 z-20" />
            <div className="absolute bottom-[10%] right-8 w-16 h-16 border-r-2 border-b-2 border-white/15 z-20" />
          </div>
        </Reveal>

        {/* Delivery Areas Grid */}
        <div className="mb-44">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border">
            {DELIVERY_AREAS.map((area, index) => (
              <Reveal key={area.title} direction="up" delay={index * 120}>
                <ContentCard index={index}>
                  <div className="flex items-start justify-between mb-8">
                    <CardIconLarge icon={area.icon} />
                    <CardStat value={area.stat} label={area.statLabel} />
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Gender as Proof */}
        <div className="grid lg:grid-cols-12 gap-24 items-center mb-44">
          <Reveal direction="up" className="lg:col-span-6">
            <div className="relative mb-10">
              <span className="text-[clamp(8rem,12vw,10rem)] font-serif text-foreground/[0.03] absolute -top-16 -left-4 leading-none select-none pointer-events-none" aria-hidden="true">04</span>
              <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] relative">
                Gender as Proof
                <span className="block text-secondary/70">of Leadership</span>
              </h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Grossi&apos;s approach to gender equality is the same as his
              approach to everything else: measure it, resource it, deliver
              it. At the IAEA, he didn&apos;t announce targets&mdash;he changed
              the institution from within.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
              Actions over words: he increased women in IAEA leadership from
              28% to 52%, launched the Marie Sklodowska-Curie
              Fellowship and Lise Meitner Programmes, and earned the 2025
              Changemaker of Distinction Award from Women in Nuclear.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
              As an International Gender Champion, Grossi proved that gender
              equality is not about rhetoric—it&apos;s about structural change.
              The same commitment to merit, inclusion, and institutional reform
              would define his approach to the UN Secretariat.
            </p>
            <ul className="space-y-5">
              {GENDER_ACHIEVEMENTS.map((item, i) => (
                <Reveal key={item} direction="right" delay={i * 100 + 300}>
                  <li className="flex items-center gap-4 text-foreground">
                    <span className="w-3 h-3 bg-secondary/80 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={300} className="lg:col-span-6">
            <div className="bg-secondary/[0.06] p-12 lg:p-16 relative">
              <span className="text-8xl font-serif text-secondary/[0.06] absolute top-4 right-6 leading-none select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
              <Blockquote>
                The Marie Sklodowska-Curie Programme is not charity. It is
                an investment in the talent the world cannot afford to waste.
              </Blockquote>
              <cite className="block mt-8 text-sm text-muted-foreground not-italic tracking-wide">
                — Rafael Grossi, on expanding opportunities for women scientists
              </cite>
            </div>
          </Reveal>
        </div>

        {/* Why This Matters */}
        <Reveal direction="up">
          <DarkPanel variant="primary" label="The Connection">
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-14 leading-[1.1]">
              Why This Matters
              <span className="block text-secondary">to Member States</span>
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-8 max-w-3xl font-light">
              Better outcomes for people also mean stronger, more useful
              multilateralism for states. When the UN delivers tangible
              results—in health, in food security, in climate
              response—it earns the credibility to convene on harder
              questions.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-70 mb-8 max-w-3xl">
              Member states invest in the UN because they expect a return:
              problems solved, crises managed, collective goods provided. A
              Secretary-General who understands operational delivery—not
              just diplomatic representation—can make that investment pay.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-70 max-w-3xl">
              Grossi is not a narrow technical candidate. His record proves
              that diplomatic skill and humanitarian impact are not
              opposites—they are mutually reinforcing. The same leader who
              negotiates with heads of state also makes sure cancer patients
              in Africa get treated. That combination is rare. It is what the
              role requires.
            </p>
          </DarkPanel>
        </Reveal>
      </div>
    </SectionContainer>
  )
}
