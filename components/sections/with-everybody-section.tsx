import { ENGAGEMENT_PRINCIPLES, TRACK_RECORDS } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Blockquote } from "@/components/blockquote"
import { DarkPanel } from "@/components/dark-panel"
import { ContentCard, CardDescription } from "@/components/content-card"
import { ImageCaption } from "@/components/image-caption"

export function WithEverybodySection() {
  return (
    <SectionContainer id="with-everybody">
      <Reveal direction="up">
        <SectionHeader
          number="03"
          label="The Method"
          title={<>With <span className="text-secondary italic">Everybody</span></>}
          subtitle="How impartial diplomacy works in a divided world."
          size="large"
        />
      </Reveal>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-20 mb-32">
        {/* Left Column — Dual Images */}
        <Reveal direction="left" className="lg:col-span-5">
          <div className="lg:sticky lg:top-32 space-y-6">
            <ImageCaption
              src="/images/global-engagement.jpg"
              alt="Rafael Grossi in diplomatic meeting with Ukrainian President Volodymyr Zelensky discussing nuclear safety"
              label="Ukraine"
              caption="With President Zelensky"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
            />
            <ImageCaption
              src="/images/with-putin.jpg"
              alt="Rafael Grossi in diplomatic meeting with Russian President Vladimir Putin discussing nuclear security"
              label="Russia"
              caption="With President Putin"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
            />
            <p className="text-center text-muted-foreground text-sm italic mt-4">
              Diplomacy means talking to everyone.
            </p>
          </div>
        </Reveal>

        {/* Right Column — Content */}
        <div className="lg:col-span-7 space-y-20">
          <Reveal direction="up" delay={300}>
            <div className="relative mb-8">
              <span className="text-[150px] font-serif text-foreground/[0.12] absolute -top-20 -left-4 leading-none select-none" aria-hidden="true">03</span>
              <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] relative">
                Impartiality as
                <span className="block text-secondary/70">Effectiveness</span>
              </h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A Secretary-General cannot help bridge divides while speaking
              only to one camp. The power of the office lies precisely in its
              capacity to engage across every fault line—East and West,
              North and South, across ideological and geopolitical boundaries.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              This is not about being neutral on values. The UN Charter is
              clear about human rights, sovereignty, and the peaceful
              settlement of disputes. It is about being available to all
              parties so that when crises emerge, there is someone in the room
              who everyone can accept as a fair broker.
            </p>
            <Blockquote size="default">
              &ldquo;If the price is criticism, so be it. My job requires dialogue with everyone.&rdquo;
            </Blockquote>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
              Grossi has maintained working relationships with governments that are
              otherwise not speaking to each other. He has reported
              uncomfortable truths to capitals across the spectrum—and
              retained their respect precisely because they will do
              the same to their adversaries.
            </p>
          </Reveal>

          {/* Principles */}
          <div className="space-y-12">
            {ENGAGEMENT_PRINCIPLES.map((principle, index) => (
              <Reveal key={principle.number} direction="right" delay={index * 150 + 400}>
                <div className="flex gap-8 p-8 border-l-2 border-secondary/30 hover:border-secondary hover:bg-muted/50 transition-[border-color,background-color] duration-400">
                  <div className="flex-shrink-0">
                    <span className="font-serif text-5xl text-secondary/30">
                      {principle.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-foreground mb-4">
                      {principle.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Track Record */}
      <Reveal direction="up">
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-secondary text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] font-medium mb-6 block">Proven Track Record</span>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              Results Speak Louder
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-border">
            {TRACK_RECORDS.map((record, index) => (
              <Reveal key={record.title} direction="up" delay={index * 100}>
                <ContentCard index={index} className="bg-muted hover:bg-foreground">
                  <span className="text-6xl font-serif text-foreground/[0.12] group-hover:text-background/20 transition-colors duration-400 block mb-6" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h4 className="font-serif text-2xl text-foreground group-hover:text-background mb-4 transition-colors duration-400">
                    {record.title}
                  </h4>
                  <CardDescription>{record.description}</CardDescription>
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Why This Is UN Leadership */}
      <Reveal direction="fade">
        <DarkPanel label="The Essence">
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-[1.1]">
            Why This Is
            <span className="block text-secondary italic">UN Leadership</span>
          </h3>
          <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-16 max-w-3xl font-light">
            The United Nations was built on the premise that even adversaries
            can share a table. The Secretary-General must be the person who
            sets that table—and who is welcome at every seat around it.
          </p>
          <Blockquote
            size="large"
            cite="— Rafael Grossi, El País, December 2025"
          >
            &ldquo;My job requires dialogue with everyone. Active diplomacy
            must be deployed as an impartial, but not indifferent,
            interlocutor.&rdquo;
          </Blockquote>
        </DarkPanel>
      </Reveal>
    </SectionContainer>
  )
}
