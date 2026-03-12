"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Heart, Users2, Leaf, Stethoscope } from "lucide-react"

const deliveryAreas = [
  {
    icon: Stethoscope,
    title: "Cancer Care Initiative",
    description:
      "Rays of Hope: bringing cancer diagnosis and treatment to over 40 countries with no access to radiation therapy.",
    stat: "40+",
    statLabel: "Countries Reached",
  },
  {
    icon: Heart,
    title: "Food Security",
    description:
      "Technical cooperation on nuclear applications for agriculture, helping nations feed their populations sustainably.",
    stat: "160",
    statLabel: "Projects Active",
  },
  {
    icon: Leaf,
    title: "Climate & Environment",
    description:
      "Clean energy support and environmental monitoring, helping countries navigate the energy transition.",
    stat: "30%",
    statLabel: "Emissions Focus",
  },
  {
    icon: Users2,
    title: "Gender Equality",
    description:
      "Achieved gender parity in senior positions. Launched the Marie Sklodowska-Curie Fellowship Programme.",
    stat: "50%",
    statLabel: "Senior Leadership",
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function ForEverybodySection() {
  const headerAnim = useInView()
  const imageAnim = useInView(0.2)
  const gridAnim = useInView()
  const genderAnim = useInView()
  const ctaAnim = useInView()

  return (
    <section id="for-everybody" className="relative bg-muted overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-30" />

      <div className="relative container mx-auto px-6 lg:px-20 py-40 lg:py-56">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={`max-w-6xl mb-24 transition-all duration-1200 ${headerAnim.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex items-center gap-6 mb-10">
            <span className={`h-px bg-secondary transition-all duration-1000 delay-300 ${headerAnim.inView ? 'w-20' : 'w-0'}`} />
            <p className="text-secondary uppercase tracking-[0.4em] text-[10px] font-medium">
              Section 04
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              The Impact
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h2 className={`font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] tracking-tight transition-all duration-1000 delay-200 ${headerAnim.inView ? 'translate-y-0' : 'translate-y-full'}`}>
              For
              <span className="block text-secondary italic">Everybody</span>
            </h2>
          </div>
          
          <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mt-12 font-light transition-all duration-1000 delay-500 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How leadership is judged by what it delivers for people.
          </p>
        </div>

        {/* Cinematic Hero Image */}
        <div 
          ref={imageAnim.ref}
          className={`relative mb-40 transition-all duration-1500 ${imageAnim.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative aspect-wide overflow-hidden film-grain vignette">
            <div className="absolute inset-0 ken-burns">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/DG%27s_Reception_2020_%2801313756%29_%2849467835397%29.jpg/1280px-DG%27s_Reception_2020_%2801313756%29_%2849467835397%29.jpg"
                alt="Humanitarian engagement"
                fill
                unoptimized
                className="object-cover color-grade-warm"
                sizes="100vw"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            
            {/* Letterbox */}
            <div className="absolute top-0 left-0 right-0 h-[6%] bg-black" />
            <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black" />
          </div>
          
          {/* Content overlay */}
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

          {/* Frame accents */}
          <div className="absolute top-[10%] left-8 w-16 h-16 border-l-2 border-t-2 border-white/20" />
          <div className="absolute bottom-[10%] right-8 w-16 h-16 border-r-2 border-b-2 border-white/20" />
        </div>

        {/* Delivery Areas Grid */}
        <div ref={gridAnim.ref} className="mb-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {deliveryAreas.map((area, index) => (
              <div
                key={area.title}
                className={`group p-10 lg:p-12 bg-card border border-border hover:bg-foreground transition-all duration-700 ${gridAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: gridAnim.inView ? `${index * 100}ms` : '0ms' }}
              >
                <div className="flex items-start justify-between mb-8">
                  <area.icon className="w-10 h-10 text-secondary group-hover:text-secondary transition-colors duration-500" />
                  <div className="text-right">
                    <p className="text-4xl font-serif text-secondary group-hover:text-secondary transition-colors duration-500">
                      {area.stat}
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-background/60 transition-colors duration-500 uppercase tracking-wider">
                      {area.statLabel}
                    </p>
                  </div>
                </div>
                <h4 className="font-serif text-xl text-foreground group-hover:text-background mb-4 transition-colors duration-500">
                  {area.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed text-sm transition-colors duration-500">
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
          <div className={`lg:col-span-6 transition-all duration-1000 ${genderAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative mb-8">
              <span className="text-[150px] font-serif text-foreground/[0.03] absolute -top-20 -left-4 leading-none select-none">04</span>
              <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] relative">
                Gender as Proof
                <span className="block text-secondary/70">of Leadership</span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Talk is easy. Results are hard. Under Grossi&apos;s leadership,
              the IAEA achieved something most international organizations only
              promise: true gender parity at senior levels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              The Marie Sklodowska-Curie Fellowship Programme now brings women
              scientists from developing countries into nuclear fields
              worldwide, building capacity that will last generations.
            </p>
            
            <ul className="space-y-5">
              {[
                "50% women in senior management",
                "100+ fellows annually from underrepresented nations",
                "First IAEA Director General to prioritize gender as strategic"
              ].map((item, i) => (
                <li 
                  key={i} 
                  className={`flex items-center gap-4 text-foreground transition-all duration-500 ${genderAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: genderAnim.inView ? `${i * 100 + 300}ms` : '0ms' }}
                >
                  <span className="w-3 h-3 bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`lg:col-span-6 transition-all duration-1200 delay-300 ${genderAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-secondary/10 p-12 lg:p-16 relative">
              <span className="text-8xl font-serif text-secondary/10 absolute top-4 right-4 leading-none">&ldquo;</span>
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed relative">
                Inclusion is not a box to check. It is how you build an
                institution that reflects the world it serves.
              </blockquote>
            </div>
          </div>
        </div>

        {/* Why This Matters - Cinematic CTA */}
        <div 
          ref={ctaAnim.ref}
          className={`relative transition-all duration-1200 ${ctaAnim.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="bg-primary text-primary-foreground p-16 lg:p-28 relative overflow-hidden film-grain">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="relative max-w-4xl">
              <span className="inline-flex items-center gap-4 text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mb-10">
                <span className="w-8 h-px bg-secondary" />
                The Connection
              </span>
              
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-[1.1]">
                Why This Matters
                <span className="block text-secondary">to Member States</span>
              </h3>
              
              <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-10 max-w-3xl font-light">
                Better outcomes for people also mean stronger, more useful
                multilateralism for states. When the UN delivers tangible
                results—in health, in food security, in climate
                response—it earns the credibility to convene on harder
                questions.
              </p>
              
              <p className="text-lg leading-relaxed opacity-60 max-w-3xl">
                Grossi is not a narrow technical candidate. His record proves that
                diplomatic skill and humanitarian impact are not
                opposites—they are mutually reinforcing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
