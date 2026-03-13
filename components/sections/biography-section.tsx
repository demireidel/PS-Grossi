"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, GraduationCap, Briefcase, Globe, Award } from "lucide-react"

const timeline = [
  {
    year: "1961",
    title: "Born in Buenos Aires",
    description: "Rafael Mariano Grossi born in Buenos Aires, Argentina. His grandparents emigrated from Piedmont's Carbonara Scrivia, Italy—which made him honorary citizen in 2025.",
    icon: MapPin,
  },
  {
    year: "1985",
    title: "Joins Argentine Foreign Service",
    description: "Began 40-year diplomatic career. Would later earn a PhD in International Relations from the University of Geneva, where he was named Alumnus of the Year in 2022.",
    icon: GraduationCap,
  },
  {
    year: "1998-2002",
    title: "NATO & European Posts",
    description: "Argentine Representative to NATO. Head of Embassy in Belgium and Luxembourg. Building relationships across Cold War divides.",
    icon: Briefcase,
  },
  {
    year: "2002-2007",
    title: "OPCW Chief of Cabinet",
    description: "Chief of Cabinet at the Organization for the Prohibition of Chemical Weapons in The Hague. First experience leading an international organization.",
    icon: Globe,
  },
  {
    year: "2010-2013",
    title: "IAEA Assistant Director General",
    description: "Assistant Director General for Policy and Chief of Cabinet at the IAEA. Direct experience with nuclear safeguards before taking the top job.",
    icon: Globe,
  },
  {
    year: "2014-2016",
    title: "Nuclear Suppliers Group President",
    description: "First person to serve two consecutive terms as NSG president. In 2015, secured the Vienna Declaration on Nuclear Safety after Fukushima.",
    icon: Award,
  },
  {
    year: "2019",
    title: "IAEA Director General",
    description: "Elected December 3, 2019. First Latin American to lead the agency since its 1957 founding. Re-elected for a second term.",
    icon: Award,
  },
]

const keyFacts = [
  {
    label: "Languages",
    value: "5",
    detail: "Spanish, English, French, Italian, German",
  },
  {
    label: "Honorary Degrees",
    value: "6+",
    detail: "UBA, Milan Polytechnic, Busan, EPFL, Asuncion, and more",
  },
  {
    label: "Years in Diplomacy",
    value: "40",
    detail: "Since joining Argentina's Foreign Service in 1985",
  },
  {
    label: "International Awards",
    value: "15+",
    detail: "Including 2024 Henry DeWolf Smyth Nuclear Statesman Award",
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

export function BiographySection() {
  const headerAnim = useInView()
  const factsAnim = useInView()
  const timelineAnim = useInView()
  const quoteAnim = useInView()

  return (
    <section id="biography" className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="relative container mx-auto px-6 lg:px-20 py-40 lg:py-56">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={`max-w-6xl mb-32 transition-all duration-1200 ${headerAnim.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex items-center gap-6 mb-10">
            <span className={`h-px bg-secondary transition-all duration-1000 delay-300 ${headerAnim.inView ? 'w-20' : 'w-0'}`} />
            <p className="text-secondary uppercase tracking-[0.4em] text-[10px] font-medium">
              Section 06
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              The Candidate
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h2 className={`font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] tracking-tight transition-all duration-1000 delay-200 ${headerAnim.inView ? 'translate-y-0' : 'translate-y-full'}`}>
              Rafael
              <span className="block text-secondary italic">Grossi</span>
            </h2>
          </div>
          
          <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mt-12 font-light transition-all duration-1000 delay-500 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Four decades of diplomatic service. A lifetime of commitment to international peace and security.
          </p>
        </div>

        {/* Key Facts */}
        <div 
          ref={factsAnim.ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1 mb-40"
        >
          {keyFacts.map((fact, index) => (
            <div
              key={fact.label}
              className={`group p-10 lg:p-12 bg-card border border-border hover:bg-foreground transition-all duration-700 ${factsAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: factsAnim.inView ? `${index * 100}ms` : '0ms' }}
            >
              <p className="text-5xl md:text-6xl font-serif text-secondary mb-4">{fact.value}</p>
              <p className="text-foreground group-hover:text-background font-medium mb-2 transition-colors duration-500">
                {fact.label}
              </p>
              <p className="text-muted-foreground group-hover:text-background/60 text-sm transition-colors duration-500">
                {fact.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div ref={timelineAnim.ref} className="mb-40">
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${timelineAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mb-6 block">Career Journey</span>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1]">
              A Life of Service
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${index % 2 === 0 ? '' : 'lg:direction-rtl'} ${timelineAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                  style={{ 
                    transitionDelay: timelineAnim.inView ? `${index * 150}ms` : '0ms',
                    transitionDuration: '700ms'
                  }}
                >
                  {/* Content */}
                  <div className={`pl-20 lg:pl-0 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className={`p-8 bg-card border border-border hover:border-secondary/50 transition-colors duration-300 ${index % 2 === 0 ? '' : 'lg:direction-ltr'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <item.icon className="w-5 h-5 text-secondary lg:hidden" />
                        <span className="text-secondary font-serif text-2xl">{item.year}</span>
                      </div>
                      <h4 className="font-serif text-xl text-foreground mb-3">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-8 lg:left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-secondary border-4 border-background" />
                  
                  {/* Icon (desktop only) */}
                  <div className={`hidden lg:flex absolute left-1/2 top-8 -translate-y-1/2 ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-12'}`}>
                    <div className="w-8 h-8 bg-muted flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div 
          ref={quoteAnim.ref}
          className={`relative transition-all duration-1200 ${quoteAnim.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="bg-muted p-16 lg:p-28 relative overflow-hidden">
            <span className="text-[200px] font-serif text-foreground/[0.03] absolute -top-20 -left-8 leading-none select-none">&ldquo;</span>
            
            <div className="relative max-w-4xl mx-auto text-center">
              <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground italic leading-[1.3] mb-10">
                Whoever holds the position must speak with those who initiated the attacks. 
                That&apos;s the first thing I did: speak with Putin. Many criticized me for it. 
                But who else am I going to talk to?
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-secondary" />
                <p className="text-muted-foreground uppercase tracking-[0.2em] text-sm">Rafael Grossi, El Pa&iacute;s, December 2025</p>
                <span className="w-12 h-px bg-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
