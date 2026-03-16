import Image from "next/image"
import { BLUR_DATA_URL } from "@/lib/constants"
import { PRINCIPLES } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Blockquote } from "@/components/blockquote"
import { DarkPanel } from "@/components/dark-panel"
import { ContentCard, CardIcon, CardNumber, CardTitle, CardDescription } from "@/components/content-card"

export function VisionSection() {
  return (
    <SectionContainer id="vision">
      <Reveal direction="up">
        <SectionHeader
          number="01"
          label="The Vision"
          title={<>A UN That <span className="text-secondary italic">Works</span></>}
          subtitle="Rafael Grossi's vision for a more operational, credible, and effective United Nations"
          size="large"
        />
      </Reveal>

      {/* Grossi's Diagnosis */}
      <Reveal direction="up">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-36">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
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
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
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
          <div className="relative aspect-[4/3] overflow-hidden group bg-muted">
            <Image
              src="/images/grossi-un-address.jpg"
              alt="Rafael Grossi delivering a keynote address at the IAEA Nuclear Energy Summit podium with international flags, 2024"
              fill
              quality={85}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* The Doctrine */}
      <Reveal direction="up">
        <div className="mb-36">
          <div className="text-center max-w-3xl mx-auto mb-20">
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
            {PRINCIPLES.map((principle, index) => (
              <Reveal key={principle.title} direction="up" delay={index * 120}>
                <ContentCard index={index}>
                  <div className="flex items-start justify-between mb-8">
                    <CardIcon icon={principle.icon} />
                    <CardNumber value={`0${index + 1}`} />
                  </div>
                  <CardTitle>{principle.title}</CardTitle>
                  <CardDescription>{principle.description}</CardDescription>
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Why This Election Matters */}
      <Reveal direction="fade">
        <DarkPanel variant="primary" label="The Stakes">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-12 leading-[1.1]">
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
          <p className="text-base md:text-lg leading-relaxed opacity-70 mb-14">
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
      </Reveal>
    </SectionContainer>
  )
}
