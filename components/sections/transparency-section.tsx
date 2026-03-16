import Image from "next/image"
import { FileText, Download } from "lucide-react"
import { BLUR_DATA_URL } from "@/lib/constants"
import { COMMITMENTS, DOCUMENTS, MANAGEMENT_PRIORITIES, METRICS } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { SectionContainer } from "@/components/section-container"
import { SectionHeader } from "@/components/section-header"
import { Blockquote } from "@/components/blockquote"
import { DarkPanel } from "@/components/dark-panel"
import { CinematicImage } from "@/components/cinematic-image"
import { ContentCard, CardIconLarge, CardTitle, CardDescription } from "@/components/content-card"

export function TransparencySection() {
  return (
    <SectionContainer id="transparency">
      <Reveal direction="up">
        <SectionHeader
          number="05"
          label="The Standard"
          title={<>Open to <span className="text-secondary italic">Everybody</span></>}
          subtitle="How he would run the institution with transparency and discipline."
          size="large"
        />
      </Reveal>

      {/* Cinematic Hero Image */}
      <Reveal direction="fade" threshold={0.05}>
        <div className="relative mb-36">
          <CinematicImage
            src="/images/grossi-iaea-board.jpg"
            alt="Rafael Grossi smiling during a Board of Governors session at IAEA headquarters in Vienna, demonstrating institutional leadership"
            aspect="cinema"
            kenBurns
            colorGrade="cool"
            filmGrain
            vignette
            cornerAccents
            overlayContent={
              <div className="px-8 lg:px-20 pb-[14%]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-px bg-gradient-to-r from-secondary to-secondary/30" />
                  <span className="text-white/50 text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] text-shadow-overlay">Accountability</span>
                </div>
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-light max-w-3xl leading-relaxed text-shadow-overlay">
                  Accountability is not a constraint on leadership. It is what gives leadership legitimacy.
                </p>
              </div>
            }
          />
        </div>
      </Reveal>

      {/* Transparency Commitments */}
      <div className="mb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border">
          {COMMITMENTS.map((item, index) => (
            <Reveal key={item.title} direction="scale" delay={index * 120}>
              <ContentCard index={index}>
                <CardIconLarge icon={item.icon} />
                <div className="mt-8">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </ContentCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Governance in Practice Image */}
      <div className="relative aspect-[16/9] overflow-hidden mb-36 group bg-black">
        <Image
          src="/images/transparency-governance.jpg"
          alt="Rafael Grossi in IAEA field vest preparing for a mission near Zaporizhzhia, demonstrating hands-on leadership in crisis zones"
          fill
          quality={85}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] text-white/50 text-shadow-overlay mb-2">In the Field</p>
          <p className="text-lg text-white/85 font-medium text-shadow-overlay">Leadership means being present where it matters.</p>
        </div>
      </div>

      {/* Management Discipline + Document Hub */}
      <div className="grid lg:grid-cols-12 gap-20 items-start mb-36">
        <Reveal direction="up" className="lg:col-span-6">
          <div className="relative mb-10">
            <span className="text-[clamp(8rem,12vw,10rem)] font-serif text-foreground/[0.03] absolute -top-16 -left-4 leading-none select-none pointer-events-none" aria-hidden="true">05</span>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] relative">
              Management
              <span className="block text-secondary/70">Discipline</span>
            </h3>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            The UN system is vast, complex, and often duplicative. Thirty-plus
            agencies, funds, and programs—each with its own governance, budget,
            and institutional culture. Coordination is difficult by design.
            But difficulty is not an excuse for dysfunction.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            Grossi has managed a large international organization through
            crisis. He understands the difference between reform on paper
            and reform in practice—and knows that institutional change
            requires persistence, coalition-building, and results that
            demonstrate the value of doing things differently.
          </p>
          <div className="space-y-4">
            {MANAGEMENT_PRIORITIES.map((item, i) => (
              <Reveal key={item} direction="right" delay={i * 100 + 300}>
                <div className="flex items-center gap-5 p-5 bg-muted">
                  <span className="w-12 h-12 bg-secondary/[0.08] flex items-center justify-center text-secondary font-serif text-xl flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Document Hub */}
        <Reveal direction="right" delay={300} className="lg:col-span-6">
          <div className="bg-muted p-10 lg:p-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px bg-gradient-to-r from-secondary to-secondary/30" />
              <h4 className="font-serif text-2xl text-foreground">Transparency Hub</h4>
            </div>
            <p className="text-muted-foreground mb-10">
              Access key documents, speeches, and disclosures.
            </p>
            <div className="space-y-3">
              {DOCUMENTS.map((doc) => (
                <div
                  key={doc.title}
                  className="group/doc flex items-center justify-between p-5 bg-card border border-border hover:border-secondary/50 hover:bg-secondary/[0.03] transition-[border-color,background-color] duration-500 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-muted-foreground group-hover/doc:text-secondary transition-colors duration-500" />
                    <span className="text-foreground group-hover/doc:text-secondary transition-colors duration-500">{doc.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{doc.type}</span>
                    <Download className="w-4 h-4 text-muted-foreground group-hover/doc:text-secondary transition-colors duration-500" />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground text-sm uppercase tracking-wider">
              Full document library available upon request
            </p>
          </div>
        </Reveal>
      </div>

      {/* Institutional Culture */}
      <Reveal direction="up">
        <div className="mb-36">
          <DarkPanel label="The Culture">
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-14 leading-[1.1]">
              Institutional Culture
              <span className="block text-secondary">and Merit</span>
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-8 max-w-3xl font-light">
              &ldquo;What we need is a Secretary-General chosen for their
              merits. Someone should be chosen for their vision, not because
              after 80 years of men in the position it&apos;s time for a
              woman, or someone with blue eyes, or a secularist.&rdquo;
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-70 mb-8 max-w-3xl">
              Grossi&apos;s record speaks: at the IAEA, he increased women in
              leadership from 28% to 52%. Women in Nuclear awarded him the
              2025 Changemaker of Distinction Award. He launched the Marie
              Sklodowska-Curie and Lise Meitner Programmes for women
              scientists from developing nations.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-70 mb-16 max-w-3xl">
              The principle is clear: results over rhetoric, merit over
              patronage, structural change over symbolic gestures. Grossi
              has proven this can be done. The UN Secretariat—40,000 staff
              worldwide—deserves the same commitment.
            </p>
            <Blockquote
              size="large"
              cite="— Rafael Grossi, El País, December 2025"
            >
              &ldquo;I increased women in leadership from 28% to 52%. These
              are facts, not words.&rdquo;
            </Blockquote>
          </DarkPanel>
        </div>
      </Reveal>

      {/* Measuring Performance */}
      <Reveal direction="up">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-secondary text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] font-medium mb-6 block">The Measure</span>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-10 leading-[1.1]">
            How a Better-Run UN<br />Should Be Judged
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            Not by the number of meetings held, but by crises averted. Not by
            statements issued, but by agreements reached. Not by budgets spent,
            but by outcomes delivered.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-16 max-w-2xl mx-auto">
            Grossi would bring a results-oriented culture to the UN—one that
            asks not &ldquo;Did we follow the process?&rdquo; but &ldquo;Did we
            make a difference?&rdquo; This is the only standard that matters.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2px] bg-border">
            {METRICS.map((metric, index) => (
              <Reveal key={metric.label} direction="up" delay={index * 120 + 200}>
                <ContentCard index={index} className="bg-muted hover:bg-foreground">
                  <p className="text-5xl md:text-6xl font-serif text-secondary group-hover:text-secondary mb-4 transition-colors duration-500">
                    {metric.label}
                  </p>
                  <CardDescription>{metric.description}</CardDescription>
                </ContentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
