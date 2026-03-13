"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FileText, BarChart3, Award, Eye, Download, ArrowRight } from "lucide-react"

const commitments = [
  {
    icon: Eye,
    title: "Full Financial Disclosure",
    description: "Complete transparency on personal finances, potential conflicts, and outside interests. If member states are asked to trust the Secretary-General, they deserve to know there are no hidden entanglements.",
  },
  {
    icon: FileText,
    title: "Public Documents & Positions",
    description: "All major speeches, statements, and policy positions freely accessible and searchable. Decisions should be explainable. Positions should be documented. Transparency is not optional.",
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description: "Clear benchmarks for measuring institutional effectiveness, reported annually and honestly. The UN cannot demand accountability from member states while exempting itself from scrutiny.",
  },
  {
    icon: Award,
    title: "Merit-Based Appointments",
    description: "Commitment to qualification over politics in all senior appointments. The Secretariat must be staffed by the best people available, regardless of nationality or political patronage.",
  },
]

const documents = [
  { title: "Vision Statement", type: "PDF", date: "2025" },
  { title: "Governance Reform Proposal", type: "PDF", date: "2025" },
  { title: "Financial Disclosure", type: "PDF", date: "2025" },
  { title: "Career Summary", type: "PDF", date: "2025" },
]

const metrics = [
  { label: "Speed", description: "Response time to emerging crises" },
  { label: "Reach", description: "Access to all parties in all conflicts" },
  { label: "Results", description: "Tangible outcomes for people and states" },
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

export function TransparencySection() {
  const headerAnim = useInView()
  const imageAnim = useInView(0.2)
  const commitAnim = useInView()
  const disciplineAnim = useInView()
  const cultureAnim = useInView()
  const metricsAnim = useInView()

  return (
    <section id="transparency" className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 py-40 lg:py-56">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={`max-w-6xl mb-24 transition-all duration-1200 ${headerAnim.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex items-center gap-6 mb-10">
            <span className={`h-px bg-secondary transition-all duration-1000 delay-300 ${headerAnim.inView ? 'w-20' : 'w-0'}`} />
            <p className="text-secondary uppercase tracking-[0.4em] text-[10px] font-medium">
              Section 05
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              The Standard
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h2 className={`font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] tracking-tight transition-all duration-1000 delay-200 ${headerAnim.inView ? 'translate-y-0' : 'translate-y-full'}`}>
              Open to
              <span className="block text-secondary italic">Everybody</span>
            </h2>
          </div>
          
          <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mt-12 font-light transition-all duration-1000 delay-500 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How he would run the institution with transparency and discipline.
          </p>
        </div>

        {/* Cinematic Hero Image */}
        <div 
          ref={imageAnim.ref}
          className={`relative mb-40 transition-all duration-1500 ${imageAnim.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative aspect-cinema overflow-hidden film-grain vignette">
            <div className="absolute inset-0 ken-burns">
              <Image
                src="/images/grossi-iaea-board.jpg"
                alt="Rafael Grossi smiling during a Board of Governors session at IAEA headquarters in Vienna, demonstrating institutional leadership"
                fill
                quality={85}
                className="object-cover color-grade-cool"
                sizes="100vw"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            
            {/* Letterbox */}
            <div className="absolute top-0 left-0 right-0 h-[8%] bg-black" />
            <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black" />
          </div>
          
          {/* Quote overlay */}
          <div className="absolute bottom-[14%] left-0 right-0 px-8 lg:px-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-secondary" />
              <span className="text-white/50 text-[10px] uppercase tracking-[0.3em]">Accountability</span>
            </div>
            <p className="text-white text-xl md:text-2xl lg:text-3xl font-light max-w-3xl leading-relaxed">
              Accountability is not a constraint on leadership. It is what gives leadership legitimacy.
            </p>
          </div>

          {/* Frame accents */}
          <div className="absolute top-[12%] left-8 w-16 h-16 border-l-2 border-t-2 border-white/20" />
          <div className="absolute top-[12%] right-8 w-16 h-16 border-r-2 border-t-2 border-white/20" />
        </div>

        {/* Transparency Commitments */}
        <div ref={commitAnim.ref} className="mb-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {commitments.map((item, index) => (
              <div
                key={item.title}
                className={`group p-10 lg:p-12 bg-card border border-border hover:bg-secondary hover:border-secondary transition-all duration-700 ${commitAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: commitAnim.inView ? `${index * 100}ms` : '0ms' }}
              >
                <item.icon className="w-10 h-10 text-secondary group-hover:text-secondary-foreground mb-8 transition-colors duration-500" />
                <h4 className="font-serif text-xl text-foreground group-hover:text-secondary-foreground mb-4 transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-secondary-foreground/70 text-sm leading-relaxed transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Governance in Practice Image */}
        <div className="relative aspect-[16/9] overflow-hidden mb-40 group">
          <Image
            src="/images/transparency-governance.jpg"
            alt="Rafael Grossi in IAEA field vest preparing for a mission near Zaporizhzhia, demonstrating hands-on leadership in crisis zones"
            fill
            quality={85}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">In the Field</p>
            <p className="text-lg text-white/90 font-medium">Leadership means being present where it matters.</p>
          </div>
        </div>

        {/* Management Discipline + Document Hub */}
        <div 
          ref={disciplineAnim.ref}
          className="grid lg:grid-cols-12 gap-20 items-start mb-40"
        >
          <div className={`lg:col-span-6 transition-all duration-1000 ${disciplineAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative mb-8">
              <span className="text-[150px] font-serif text-foreground/[0.03] absolute -top-20 -left-4 leading-none select-none">05</span>
              <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] relative">
                Management
                <span className="block text-secondary/70">Discipline</span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The UN system is vast, complex, and often duplicative. Thirty-plus
              agencies, funds, and programs—each with its own governance, budget,
              and institutional culture. Coordination is difficult by design.
              But difficulty is not an excuse for dysfunction.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The next Secretary-General must be willing to set clear priorities,
              reduce overlap, improve coordination, and accelerate response
              times. This requires both diplomatic skill (the agencies are
              semi-autonomous) and operational expertise (the Secretariat must
              lead by example).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Grossi has managed a large international organization through
              crisis. He understands the difference between reform on paper
              and reform in practice. He knows that institutional change
              requires persistence, coalition-building, and results that
              demonstrate the value of doing things differently.
            </p>
            
            <div className="space-y-4">
              {[
                "Clear strategic priorities, publicly stated",
                "Reduced duplication across agencies",
                "Faster crisis response mechanisms"
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`flex items-center gap-5 p-5 bg-muted transition-all duration-500 ${disciplineAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: disciplineAnim.inView ? `${i * 100 + 300}ms` : '0ms' }}
                >
                  <span className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary font-serif text-xl flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Document Hub */}
          <div className={`lg:col-span-6 transition-all duration-1200 delay-300 ${disciplineAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-muted p-10 lg:p-14">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-px bg-secondary" />
                <h4 className="font-serif text-2xl text-foreground">
                  Transparency Hub
                </h4>
              </div>
              <p className="text-muted-foreground mb-10">
                Access key documents, speeches, and disclosures.
              </p>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={doc.title}
                    className="group flex items-center justify-between p-5 bg-card border border-border hover:border-secondary hover:bg-secondary/5 transition-all duration-300 cursor-pointer"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <FileText className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                      <span className="text-foreground group-hover:text-secondary transition-colors">{doc.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {doc.type}
                      </span>
                      <Download className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="#" className="group inline-flex items-center gap-3 mt-8 text-secondary font-medium text-sm uppercase tracking-wider">
                <span>View All Documents</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Institutional Culture - Cinematic Block */}
        <div 
          ref={cultureAnim.ref}
          className={`relative mb-40 transition-all duration-1200 ${cultureAnim.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="bg-foreground text-background p-16 lg:p-28 relative overflow-hidden film-grain">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="relative max-w-4xl">
              <span className="inline-flex items-center gap-4 text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mb-10">
                <span className="w-8 h-px bg-secondary" />
                The Culture
              </span>
              
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-[1.1]">
                Institutional Culture
                <span className="block text-secondary">and Merit</span>
              </h3>
              
              <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-8 max-w-3xl font-light">
                &ldquo;What we need is a Secretary-General chosen for their
                merits. Someone should be chosen for their vision, not because
                after 80 years of men in the position it&apos;s time for a
                woman, or someone with blue eyes, or a secularist.&rdquo;
              </p>
              
              <p className="text-lg leading-relaxed opacity-70 mb-8 max-w-3xl">
                Grossi&apos;s record speaks: at the IAEA, he increased women in
                leadership from 28% to 52%. Women in Nuclear awarded him the
                2025 Changemaker of Distinction Award. He launched the Marie
                Sklodowska-Curie and Lise Meitner Programmes for women
                scientists from developing nations.
              </p>
              
              <p className="text-lg leading-relaxed opacity-70 mb-16 max-w-3xl">
                The principle is clear: results over rhetoric, merit over
                patronage, structural change over symbolic gestures. Grossi
                has proven this can be done. The UN Secretariat—40,000 staff
                worldwide—deserves the same commitment.
              </p>
              
              <blockquote className="relative pl-10 border-l-2 border-secondary">
                <p className="text-3xl md:text-4xl font-serif italic leading-[1.3]">
                  &ldquo;I increased women in leadership from 28% to 52%. These
                  are facts, not words.&rdquo;
                </p>
                <cite className="block mt-6 text-sm opacity-60 not-italic">
                  — Rafael Grossi, El Pa&iacute;s, December 2025
                </cite>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Measuring Performance */}
        <div 
          ref={metricsAnim.ref}
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${metricsAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <span className="text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mb-6 block">The Measure</span>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1]">
            How a Better-Run UN<br />Should Be Judged
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            Not by the number of meetings held, but by crises averted. Not by
            statements issued, but by agreements reached. Not by budgets spent,
            but by outcomes delivered.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-2xl mx-auto">
            Grossi would bring a results-oriented culture to the UN—one that
            asks not &ldquo;Did we follow the process?&rdquo; but &ldquo;Did we
            make a difference?&rdquo; This is the only standard that matters.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-1">
            {metrics.map((metric, index) => (
              <div 
                key={metric.label}
                className={`p-12 bg-muted hover:bg-secondary group transition-all duration-500 ${metricsAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: metricsAnim.inView ? `${index * 100 + 200}ms` : '0ms' }}
              >
                <p className="text-5xl md:text-6xl font-serif text-secondary group-hover:text-secondary-foreground mb-4 transition-colors duration-500">
                  {metric.label}
                </p>
                <p className="text-muted-foreground group-hover:text-secondary-foreground/70 text-sm transition-colors duration-500">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
