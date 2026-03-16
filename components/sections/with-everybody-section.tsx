"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeader } from "@/components/section-header"
import { Blockquote } from "@/components/blockquote"
import { DarkPanel } from "@/components/dark-panel"
import { BLUR_DATA_URL } from "@/lib/constants"

const engagementPrinciples = [
  {
    number: "01",
    title: "Neutrality Is Not Passivity",
    description:
      "Impartiality is what creates reach and usefulness. It is the operating system of effective multilateralism. A Secretary-General who is seen as aligned with one camp loses the ability to mediate, facilitate, or convene. Neutrality is not weakness—it is the source of the office's unique power.",
  },
  {
    number: "02",
    title: "Access Without Alignment",
    description:
      "Engaging everyone is not endorsing everyone. The UN must be able to talk to all parties while standing for its principles. This requires the discipline to separate dialogue from approval, and the skill to maintain relationships that others have abandoned. Grossi has proven this can be done.",
  },
  {
    number: "03",
    title: "Facts Before Positions",
    description:
      "Serious diplomacy is grounded in verification, restraint, and credibility—not declarations made for domestic audiences. The IAEA's authority comes from its technical rigor. The Secretary-General's authority must come from the same commitment to truth over convenience.",
  },
]

const trackRecords = [
  {
    title: "Moscow and Kyiv",
    description: "In the first weeks of Russia's invasion, Grossi went to Moscow. Then to Kyiv. Then to Zaporizhzhia itself, crossing the front line. When asked why he talks to Putin: \"Who else am I going to talk to? The conflict is there.\" Both capitals accepted his presence.",
  },
  {
    title: "Tehran Under Maximum Pressure",
    description: "After the 2025 Israeli strikes on Iranian facilities, inspectors were blocked. Grossi negotiated renewed access—meeting Supreme Leader Khamenei directly. Iran holds 400kg of near-weapons-grade uranium. The verification dialogue continues only because he kept the channel open.",
  },
  {
    title: "Critics Prove the Method",
    description: "Pro-Ukrainians call him pro-Russian. Pro-Russians call him pro-Ukrainian. Pro-Israel and pro-Iran lobbies each claim bias. For Grossi, this symmetry proves the approach works. An impartial broker will be attacked by all sides. That's the job.",
  },
  {
    title: "Personal Cost",
    description: "Death threats. Round-the-clock security. His convoy attacked in the gray zone near Zaporizhzhia. Grossi continues working because the alternative—abandoning crisis zones to avoid risk—is worse. \"One must not give in to threats.\"",
  },
]

export function WithEverybodySection() {
  const headerAnim = useInView()
  const contentAnim = useInView()
  const recordAnim = useInView()
  const ctaAnim = useInView()

  return (
    <section id="with-everybody" className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-32 lg:py-48">
        <SectionHeader
          ref={headerAnim.ref}
          number="03"
          label="The Method"
          title={<>With <span className="text-secondary italic">Everybody</span></>}
          subtitle="How impartial diplomacy works in a divided world."
          size="large"
          animated
          inView={headerAnim.inView}
        />

        {/* Main Content Grid */}
        <div
          ref={contentAnim.ref}
          className="grid lg:grid-cols-12 gap-20 mb-32"
        >
          {/* Left Column - Dual Images */}
          <div className={`lg:col-span-5 transition-[opacity,transform] duration-800 ${contentAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden group bg-black">
                <Image
                  src="/images/global-engagement.jpg"
                  alt="Rafael Grossi in diplomatic meeting with Ukrainian President Volodymyr Zelensky discussing nuclear safety"
                  fill
                  quality={85}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 text-shadow-overlay mb-1">Ukraine</p>
                  <p className="text-sm text-white/90 font-medium text-shadow-overlay">With President Zelensky</p>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden group bg-black">
                <Image
                  src="/images/with-putin.jpg"
                  alt="Rafael Grossi in diplomatic meeting with Russian President Vladimir Putin discussing nuclear security"
                  fill
                  quality={85}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 text-shadow-overlay mb-1">Russia</p>
                  <p className="text-sm text-white/90 font-medium text-shadow-overlay">With President Putin</p>
                </div>
              </div>

              <p className="text-center text-muted-foreground text-sm italic mt-4">
                Diplomacy means talking to everyone.
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-20">
            <div className={`transition-[opacity,transform] duration-800 delay-300 ${contentAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
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
            </div>

            {/* Principles */}
            <div className="space-y-12">
              {engagementPrinciples.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`flex gap-8 p-8 border-l-2 border-secondary/30 hover:border-secondary hover:bg-muted/50 transition-[border-color,background-color] duration-400 ${contentAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                  style={{ transitionDelay: contentAnim.inView ? `${index * 150 + 400}ms` : '0ms' }}
                >
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
              ))}
            </div>
          </div>
        </div>

        {/* Track Record */}
        <div ref={recordAnim.ref} className="mb-32">
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-[opacity,transform] duration-800 ${recordAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="text-secondary text-[10px] uppercase tracking-[0.3em] font-medium mb-6 block">Proven Track Record</span>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              Results Speak Louder
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-border">
            {trackRecords.map((record, index) => (
              <div
                key={record.title}
                className={`group p-10 lg:p-12 bg-muted hover:bg-foreground transition-[opacity,transform,background-color] duration-600 relative overflow-hidden ${recordAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: recordAnim.inView ? `${index * 100}ms` : '0ms' }}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                <span className="text-6xl font-serif text-foreground/[0.12] group-hover:text-background/20 transition-colors duration-400 block mb-6" aria-hidden="true">
                  0{index + 1}
                </span>
                <h4 className="font-serif text-2xl text-foreground group-hover:text-background mb-4 transition-colors duration-400">
                  {record.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors duration-400">
                  {record.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Is UN Leadership */}
        <div
          ref={ctaAnim.ref}
          className={`relative transition-[opacity] duration-800 ${ctaAnim.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <DarkPanel label="The Essence" dotPatternSize="md">
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
        </div>
      </div>
    </section>
  )
}
