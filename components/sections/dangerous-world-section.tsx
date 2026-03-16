import Image from "next/image"
import { BLUR_DATA_URL } from "@/lib/constants"
import { EXPERIENCES, CAREER_STATS } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Blockquote } from "@/components/blockquote"
import { DarkPanel } from "@/components/dark-panel"
import { ImageCaption } from "@/components/image-caption"
import { ContentCard, CardStatLarge, CardDescription } from "@/components/content-card"

export function DangerousWorldSection() {
  return (
    <SectionContainer id="dangerous-world" bg="muted" withGradientOverlay>
      <Reveal direction="up">
        <SectionHeader
          number="02"
          label="The Moment"
          title={<>In a Dangerous <span className="text-secondary italic">World</span></>}
          subtitle="Why this moment requires crisis-tested leadership"
        />
      </Reveal>

      {/* Hero Image — Cinematic */}
      <Reveal direction="fade" threshold={0.05}>
        <div className="relative aspect-[16/9] lg:aspect-cinema mb-32 overflow-hidden bg-black">
          <div className="absolute inset-0 clip-reveal revealed">
            <Image
              src="/images/grossi-zaporizhzhia.jpg"
              alt="IAEA Director General Rafael Grossi wearing combat helmet at the frontline crossing near Zaporizhzhia Nuclear Power Plant, September 2024"
              fill
              quality={85}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-[6%] bg-black z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black z-10" />
          <div className="absolute bottom-[10%] left-0 right-0 px-8 lg:px-20 z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-secondary" />
              <span className="text-white/60 text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] text-shadow-overlay">On the Ground</span>
            </div>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl font-light leading-relaxed text-shadow-overlay">
              When crisis meets diplomacy, experience is not optional&mdash;it is essential.
            </p>
          </div>
          <div className="absolute top-[10%] left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 z-10" />
          <div className="absolute top-[10%] right-8 w-16 h-16 border-r-2 border-t-2 border-white/20 z-10" />
        </div>
      </Reveal>

      {/* Secondary Images */}
      <Reveal direction="up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-32">
          <ImageCaption
            src="/images/crisis-diplomacy.jpg"
            alt="Rafael Grossi in IAEA field vest during the first Support and Assistance Mission to Zaporizhzhia (ISAMZ), August 2022"
            label="Crisis Response"
            caption="Frontline Diplomacy in Action"
          />
          <ImageCaption
            src="/images/grossi-tehran.jpg"
            alt="Rafael Grossi briefing the press on IAEA verification activities in Iran, Vienna, May 2024"
            label="Iran"
            caption="Nuclear Negotiations, Tehran"
          />
        </div>
      </Reveal>

      {/* The Stakes */}
      <Reveal direction="up">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              &ldquo;A Fragmented and Volatile World&rdquo;
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Grossi&apos;s assessment is unflinching: &ldquo;There is a revival
              of nuclear deterrence. Nuclear-weapon states are maintaining and
              even modernizing their arsenals. Strong proliferation pressures
              are emerging in countries considering acquiring nuclear
              capabilities as a deterrent.&rdquo;
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              On Putin&apos;s nuclear threats: &ldquo;I haven&apos;t registered
              any threats of a nuclear attack. What has happened is statements
              warning that, in the event of an existential threat, nuclear
              weapons are available. This is actually the doctrine of nuclear
              weapons use for almost all countries.&rdquo;
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              On Zaporizhzhia: &ldquo;It remains extremely fragile, very
              dangerous. We must not forget that it is a nuclear plant located
              in a combat zone. On the front line. In territory that Russia has
              fully occupied.&rdquo; The plant was Europe&apos;s largest—now
              relying on portable diesel generators.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Grossi has received death threats for his work. &ldquo;The death
              threats have been traumatic,&rdquo; he admits. &ldquo;I continue
              with personal security because experts consider the threats
              credible. But in moments of tension like this, one must not give
              in—much less to threats.&rdquo;
            </p>
          </div>
          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center">
                    <exp.icon className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">{exp.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Career Stats */}
      <Reveal direction="up">
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-border">
            {CAREER_STATS.map((card, index) => (
              <Reveal key={card.title} direction="up" delay={index * 100}>
                <ContentCard index={index}>
                  <CardStatLarge value={card.stat} label={card.title} />
                  <CardDescription>{card.description}</CardDescription>
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* The Grossi Doctrine */}
      <Reveal direction="up">
        <DarkPanel label="The Fit">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-[1.1]">
            The Grossi <span className="text-secondary italic">Doctrine</span>
          </h3>
          <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-8 font-light">
            &ldquo;Whoever holds the position must speak with those who
            initiated the attacks. That&apos;s the first thing I did: speak
            with Putin, and many people criticized me for it. But who else am
            I going to talk to?&rdquo;
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-8">
            This is the Grossi doctrine: go where the crisis is, talk to
            whoever is relevant, maintain impartiality without indifference,
            and return with something concrete. When Zaporizhzhia was under
            bombardment, he went personally. When Iran closed doors, he found
            a way back in.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-12">
            On accusations of bias: &ldquo;Some say I&apos;m a Zionist puppet,
            others say the opposite. One day the pro-Ukrainians claim I&apos;m
            in Putin&apos;s pocket, and when I meet with President Zelensky,
            the pro-Russians say I&apos;m on the other side. If the price is
            criticism, so be it.&rdquo;
          </p>
          <Blockquote>
            &ldquo;My job requires dialogue with everyone. Active diplomacy
            must be deployed, and solutions proposed as an impartial, but
            not indifferent, interlocutor.&rdquo;
          </Blockquote>
        </DarkPanel>
      </Reveal>
    </SectionContainer>
  )
}
