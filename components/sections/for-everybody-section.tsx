"use client"

import Image from "next/image"
import { Heart, Users2, Leaf, Stethoscope } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import type { DeliveryArea } from "@/lib/types"
import { DOT_PATTERN_SM, DOT_PATTERN_SIZE_MD } from "@/lib/constants"

const deliveryAreas: DeliveryArea[] = [
  {
    icon: Stethoscope,
    title: "Rays of Hope: Cancer Care",
    description:
      "A flagship initiative bringing cancer diagnosis and treatment to over 40 countries with little or no access to radiation therapy. Not a program on paper—actual equipment deployed, actual oncologists trained, actual patients treated. This is what delivery looks like.",
    stat: "40+",
    statLabel: "Countries Reached",
  },
  {
    icon: Heart,
    title: "Food Security & Agriculture",
    description:
      "Technical cooperation on nuclear applications for agriculture, helping nations feed their populations sustainably. From soil fertility to pest control to food preservation—practical technologies that improve lives at scale across developing nations.",
    stat: "160+",
    statLabel: "Active Projects",
  },
  {
    icon: Leaf,
    title: "Clean Energy Transition",
    description:
      "Supporting countries navigating the energy transition with nuclear power expertise, environmental monitoring, and climate science. Helping nations reduce emissions while meeting growing energy demand—the defining challenge of our era.",
    stat: "70+",
    statLabel: "Nations Supported",
  },
  {
    icon: Users2,
    title: "Gender Parity: From 28% to 52%",
    description:
      "Women in Nuclear awarded Grossi the 2025 Changemaker of Distinction Award. He increased women in leadership from 28% to 52%—true parity. The Marie Sklodowska-Curie and Lise Meitner Programmes now bring women scientists from developing nations into nuclear fields worldwide.",
    stat: "52%",
    statLabel: "Women in Leadership",
  },
]

const genderAchievements = [
  "28% to 52% women in senior management",
  "2025 Changemaker of Distinction Award",
  "International Gender Champion",
]

export function ForEverybodySection() {
  const headerAnim = useInView()
  const imageAnim = useInView(0.2)
  const gridAnim = useInView()
  const genderAnim = useInView()
  const ctaAnim = useInView()

  return (
    <section id="for-everybody" className="relative bg-muted overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-30" />

      <div className="relative container mx-auto px-6 lg:px-20 py-32 lg:py-48">
        {/* Section Header */}
        <div
          ref={headerAnim.ref}
          className={`max-w-6xl mb-24 transition-all duration-800 ${headerAnim.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex items-center gap-6 mb-10">
            <span className={`h-px bg-secondary transition-all duration-800 delay-300 ${headerAnim.inView ? 'w-20' : 'w-0'}`} />
            <p className="text-secondary uppercase tracking-[0.4em] text-[10px] font-medium">
              Section 04
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              The Impact
            </p>
          </div>

          <div className="overflow-hidden">
            <h2 className={`font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] tracking-tight transition-all duration-800 delay-200 ${headerAnim.inView ? 'translate-y-0' : 'translate-y-full'}`}>
              For
              <span className="block text-secondary italic">Everybody</span>
            </h2>
          </div>

          <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mt-12 font-light transition-all duration-800 delay-500 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How leadership is judged by what it delivers for people.
          </p>
        </div>

        {/* Cinematic Hero Image */}
        <div
          ref={imageAnim.ref}
          className={`relative mb-40 transition-all duration-800 ${imageAnim.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative aspect-[16/9] lg:aspect-wide overflow-hidden film-grain vignette">
            <div className="absolute inset-0 ken-burns">
              <Image
                src="/images/grossi-rays-of-hope.jpg"
                alt="Rafael Grossi with his IAEA delegation at the African Union headquarters in Addis Ababa after launching the Rays of Hope cancer care initiative, February 2022"
                fill
                quality={85}
                className="object-cover color-grade-warm"
                sizes="100vw"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          <div className="absolute inset-0 flex items-center px-8 lg:px-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-secondary" />
                <span className="text-white/50 text-[10px] uppercase tracking-[0.3em]">Human Dignity</span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Human Dignity
                <span className="block text-secondary/80 italic">as Purpose</span>
              </h3>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
                The UN must be judged by what it protects and improves. Not by
                resolutions passed, but by lives changed.
              </p>
            </div>
          </div>

          <div className="absolute top-[10%] left-8 w-16 h-16 border-l-2 border-t-2 border-white/20" />
          <div className="absolute bottom-[10%] right-8 w-16 h-16 border-r-2 border-b-2 border-white/20" />
        </div>

        {/* Delivery Areas Grid */}
        <div ref={gridAnim.ref} className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border">
            {deliveryAreas.map((area, index) => (
              <div
                key={area.title}
                className={`group p-10 lg:p-12 bg-card hover:bg-foreground transition-all duration-600 relative overflow-hidden ${gridAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: gridAnim.inView ? `${index * 100}ms` : '0ms' }}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                <div className="flex items-start justify-between mb-8">
                  <area.icon className="w-10 h-10 text-secondary transition-transform duration-400 group-hover:scale-110" />
                  <div className="text-right">
                    <p className="text-4xl font-serif text-secondary transition-colors duration-400">
                      {area.stat}
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-background/60 transition-colors duration-400 uppercase tracking-wider">
                      {area.statLabel}
                    </p>
                  </div>
                </div>
                <h4 className="font-serif text-xl text-foreground group-hover:text-background mb-4 transition-colors duration-400">
                  {area.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed text-sm transition-colors duration-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gender as Proof */}
        <div
          ref={genderAnim.ref}
          className="grid lg:grid-cols-12 gap-20 items-center mb-40"
        >
          <div className={`lg:col-span-6 transition-all duration-800 ${genderAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative mb-8">
              <span className="text-[150px] font-serif text-foreground/[0.08] absolute -top-20 -left-4 leading-none select-none" aria-hidden="true">04</span>
              <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] relative">
                Gender as Proof
                <span className="block text-secondary/70">of Leadership</span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Grossi&apos;s approach to gender equality is the same as his
              approach to everything else: measure it, resource it, deliver
              it. At the IAEA, he didn&apos;t announce targets&mdash;he changed
              the institution from within.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Actions over words: Grossi increased women in IAEA leadership from
              28% to 52%. Women in Nuclear awarded him the 2025 Changemaker of
              Distinction Award. He launched the Marie Sklodowska-Curie
              Fellowship and Lise Meitner Programmes, bringing women scientists
              from developing nations into nuclear fields.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              As an International Gender Champion, Grossi proved that gender
              equality is not about rhetoric—it&apos;s about structural change.
              The same commitment to merit, inclusion, and institutional reform
              would define his approach to the UN Secretariat.
            </p>

            <ul className="space-y-5">
              {genderAchievements.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-4 text-foreground transition-all duration-400 ${genderAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: genderAnim.inView ? `${i * 100 + 300}ms` : '0ms' }}
                >
                  <span className="w-3 h-3 bg-secondary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`lg:col-span-6 transition-all duration-800 delay-300 ${genderAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-secondary/10 p-12 lg:p-16 relative">
              <span className="text-8xl font-serif text-secondary/10 absolute top-4 right-4 leading-none" aria-hidden="true">&ldquo;</span>
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed relative">
                The Marie Sklodowska-Curie Programme is not charity. It is
                an investment in the talent the world cannot afford to waste.
              </blockquote>
              <cite className="block mt-6 text-sm text-muted-foreground not-italic">
                — Rafael Grossi, on expanding opportunities for women scientists
              </cite>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div
          ref={ctaAnim.ref}
          className={`relative transition-all duration-800 ${ctaAnim.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="bg-primary text-primary-foreground p-16 lg:p-28 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: DOT_PATTERN_SM, backgroundSize: DOT_PATTERN_SIZE_MD }} />

            <div className="relative max-w-4xl">
              <span className="inline-flex items-center gap-4 text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mb-10">
                <span className="w-8 h-px bg-secondary" />
                The Connection
              </span>

              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-[1.1]">
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

              <p className="text-lg leading-relaxed opacity-70 mb-8 max-w-3xl">
                Member states invest in the UN because they expect a return:
                problems solved, crises managed, collective goods provided. A
                Secretary-General who understands operational delivery—not
                just diplomatic representation—can make that investment pay.
              </p>

              <p className="text-lg leading-relaxed opacity-60 max-w-3xl">
                Grossi is not a narrow technical candidate. His record proves
                that diplomatic skill and humanitarian impact are not
                opposites—they are mutually reinforcing. The same leader who
                negotiates with heads of state also makes sure cancer patients
                in Africa get treated. That combination is rare. It is what the
                role requires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
