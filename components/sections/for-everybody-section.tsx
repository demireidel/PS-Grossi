"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Heart, Users2, Leaf, Stethoscope, ArrowUpRight } from "lucide-react"

const deliveryAreas = [
  {
    icon: Stethoscope,
    title: "Cancer Care Initiative",
    description: "Rays of Hope: bringing cancer diagnosis and treatment to over 40 countries with no access to radiation therapy.",
    stat: "40+",
    statLabel: "Countries Reached",
  },
  {
    icon: Heart,
    title: "Food Security",
    description: "Technical cooperation on nuclear applications for agriculture, helping nations feed their populations sustainably.",
    stat: "160",
    statLabel: "Projects Active",
  },
  {
    icon: Leaf,
    title: "Climate & Environment",
    description: "Clean energy support and environmental monitoring, helping countries navigate the energy transition.",
    stat: "30%",
    statLabel: "Emissions Focus",
  },
  {
    icon: Users2,
    title: "Gender Equality",
    description: "Achieved gender parity in senior positions. Launched the Marie Sklodowska-Curie Fellowship Programme.",
    stat: "50%",
    statLabel: "Senior Leadership",
  },
]

const achievements = [
  "50% women in senior management",
  "100+ fellows annually from underrepresented nations",
  "First IAEA Director General to prioritize gender as strategic",
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function ForEverybodySection() {
  const headerAnim = useInView()
  const imageAnim = useInView(0.3)
  const cardsAnim = useInView()
  const genderAnim = useInView()
  const ctaAnim = useInView()

  return (
    <section id="for-everybody" className="relative bg-muted overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-40" />

      <div className="relative container mx-auto px-6 lg:px-16 py-32 lg:py-44">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={`max-w-5xl mb-24 transition-all duration-1000 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-px bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[11px] font-medium">
              Section 04 &mdash; The Impact
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-[1.1] tracking-tight">
            For Everybody
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
            Leadership is judged by what it delivers for people &mdash; not by process, but by outcomes.
          </p>
        </div>

        {/* Hero Image */}
        <div 
          ref={imageAnim.ref}
          className={`relative mb-32 transition-all duration-1000 ${imageAnim.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="relative aspect-[2/1] overflow-hidden">
            <Image
              src="/images/humanitarian-delivery.jpg"
              alt="Humanitarian engagement"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Premium overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          </div>
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 p-10 lg:p-16 max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-secondary" />
              <span className="text-white/60 text-[11px] uppercase tracking-[0.2em]">Human Dignity</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-snug">
              Human Dignity as Purpose
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              The UN must be judged by what it protects and improves. Not by
              resolutions passed, but by lives changed.
            </p>
          </div>

          {/* Frame */}
          <div className="absolute top-6 right-6 w-20 h-20 border-r-2 border-t-2 border-white/20" />
        </div>

        {/* Delivery Areas */}
        <div 
          ref={cardsAnim.ref}
          className="grid md:grid-cols-2 gap-6 mb-36"
        >
          {deliveryAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative p-10 lg:p-12 bg-card border border-border hover:border-secondary/40 transition-all duration-500 hover-lift overflow-hidden ${cardsAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: cardsAnim.inView ? `${index * 100}ms` : '0ms' }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
                  <area.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors duration-500" />
                </div>
                <div className="text-right">
                  <p className="text-5xl font-serif text-secondary mb-1">
                    {area.stat}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {area.statLabel}
                  </p>
                </div>
              </div>
              <h4 className="font-serif text-2xl text-foreground mb-4">
                {area.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
              
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Gender as Proof */}
        <div 
          ref={genderAnim.ref}
          className={`grid lg:grid-cols-2 gap-20 items-center mb-36 transition-all duration-1000 ${genderAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug gold-line">
              Gender as Proof of Leadership
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                Talk is easy. Results are hard. Under Grossi&apos;s leadership,
                the IAEA achieved something most international organizations only
                promise: true gender parity at senior levels.
              </p>
              <p>
                The Marie Sklodowska-Curie Fellowship Programme now brings women
                scientists from developing countries into nuclear fields
                worldwide, building capacity that will last generations.
              </p>
            </div>
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li 
                  key={index}
                  className={`flex items-center gap-4 text-foreground transition-all duration-500 ${genderAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: genderAnim.inView ? `${index * 100 + 400}ms` : '0ms' }}
                >
                  <span className="w-2 h-2 bg-secondary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${genderAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-secondary/10 p-12 lg:p-16 relative">
              <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-secondary/30" />
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed">
                &ldquo;Inclusion is not a box to check. It is how you build an
                institution that reflects the world it serves.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Why This Matters to Member States */}
        <div 
          ref={ctaAnim.ref}
          className={`relative transition-all duration-1000 ${ctaAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="bg-primary text-primary-foreground p-16 lg:p-24 relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            
            <div className="relative max-w-4xl">
              <span className="text-secondary text-[11px] uppercase tracking-[0.3em] font-medium mb-6 block">
                Member States
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-tight">
                Why This Matters to Member States
              </h3>
              <p className="text-xl leading-relaxed opacity-90 mb-8 max-w-3xl">
                Better outcomes for people also mean stronger, more useful
                multilateralism for states. When the UN delivers tangible
                results &mdash; in health, in food security, in climate
                response &mdash; it earns the credibility to convene on harder
                questions.
              </p>
              <p className="text-lg leading-relaxed opacity-70">
                Grossi is not a narrow technical candidate. His record proves that
                diplomatic skill and humanitarian impact are not
                opposites &mdash; they are mutually reinforcing.
              </p>
              
              <a 
                href="#transparency" 
                className="inline-flex items-center gap-3 mt-10 text-secondary font-medium text-sm uppercase tracking-wider group"
              >
                <span>See Governance Standards</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
