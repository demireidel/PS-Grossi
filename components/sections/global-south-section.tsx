"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"

const perspectives = [
  {
    region: "Latin America",
    title: "First from the Region",
    description:
      "In nearly 80 years of the IAEA, no Latin American had led the agency. Grossi changed that in 2019. Now he seeks to bring the same perspective to the UN—an institution where no Secretary-General has come from Latin America since Javier Pérez de Cuéllar (Peru, 1982-1991).",
  },
  {
    region: "Africa",
    title: "Rays of Hope",
    description:
      "Grossi's flagship cancer care initiative has reached 40+ African nations with little access to radiation therapy. Not studies—actual equipment, trained oncologists, patients treated. 'The Global South needs partners, not patrons,' he says.",
  },
  {
    region: "Asia-Pacific",
    title: "Nuclear Cooperation",
    description:
      "From Busan to Bangkok, Grossi has built IAEA technical cooperation across the region. Honorary doctorates from universities in South Korea, Vietnam, and the Philippines reflect relationships built through delivery, not diplomacy alone.",
  },
  {
    region: "Middle East",
    title: "Engaged with All",
    description:
      "Iran, Israel, Saudi Arabia, UAE—Grossi maintains working relationships across the region's deepest divides. 'Some call me a Zionist puppet, others the opposite,' he notes. That is precisely the point.",
  },
]

const stats = [
  { value: "40+", label: "Years as a diplomat from Argentina" },
  { value: "1st", label: "Latin American IAEA Director General" },
  { value: "40+", label: "African nations reached by Rays of Hope" },
  { value: "6+", label: "Honorary degrees from Global South universities" },
]

export function GlobalSouthSection() {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="global-south" className="py-32 lg:py-48 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      
      <div className="container mx-auto px-6 lg:px-20 relative">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-5xl mb-20 transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-center gap-6 mb-8">
            <span className="h-px w-16 bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[10px] font-medium">
              Section 07
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              A Voice from the South
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-[0.95] tracking-tight">
            The Global South <span className="text-secondary italic">Perspective</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
            Grossi is Argentine. He understands what it means to navigate great power politics from outside the traditional centers of power.
          </p>
        </div>

        {/* Quote Block */}
        <div 
          ref={contentRef}
          className={`bg-primary text-primary-foreground p-12 lg:p-16 mb-20 transition-all duration-1000 delay-200 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-[1.3] max-w-4xl">
            &ldquo;What we need is a Secretary-General chosen for their merits. Someone should be chosen for their vision, not because after 80 years of men in the position it&apos;s time for a woman, or someone with blue eyes. You should be chosen for what you are, what you have done, what you can do.&rdquo;
          </blockquote>
          <cite className="block mt-8 text-sm opacity-60 not-italic">
            — Rafael Grossi, El País interview, December 2025
          </cite>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`p-8 lg:p-10 bg-card border border-border text-center transition-all duration-700 ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl font-serif text-secondary mb-3">{stat.value}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Regional Perspectives */}
        <div className="grid md:grid-cols-2 gap-1 mb-20">
          {perspectives.map((perspective, index) => (
            <div 
              key={perspective.region}
              className={`group p-10 lg:p-14 bg-card border border-border hover:bg-foreground transition-all duration-700 ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <p className="text-secondary text-[10px] uppercase tracking-[0.3em] mb-4 group-hover:text-secondary/80 transition-colors duration-500">
                {perspective.region}
              </p>
              <h3 className="font-serif text-2xl text-foreground group-hover:text-background mb-4 transition-colors duration-500">
                {perspective.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors duration-500">
                {perspective.description}
              </p>
            </div>
          ))}
        </div>

        {/* Argentina Context */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              From Buenos Aires to Vienna
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Born in Buenos Aires in 1961. Grandparents from Piedmont, Italy—Carbonara Scrivia made him honorary citizen in 2025. Joined Argentina&apos;s Foreign Service in 1985. Lived through the Falklands, hyperinflation, democratic transitions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This background matters. Grossi understands what smaller nations face when great powers clash. He knows how developing countries navigate international institutions designed by others. He has spent 40 years building bridges from that position.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              &ldquo;Argentina is a country that has been part of all the multilateral non-proliferation regimes,&rdquo; he notes. &ldquo;We chose not to develop nuclear weapons, even though we could have. That gives me credibility when I talk about these issues.&rdquo;
            </p>
          </div>
          <div className={`relative aspect-[4/3] overflow-hidden transition-all duration-1000 delay-300 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <Image
              src="/images/grossi-portrait-formal.jpg"
              alt="Rafael Grossi formal portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
