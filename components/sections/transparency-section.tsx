"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FileText, BarChart3, Award, Eye, Download, ArrowRight } from "lucide-react"

const commitments = [
  {
    icon: Eye,
    title: "Full Financial Disclosure",
    description: "Complete transparency on personal finances, potential conflicts, and outside interests.",
  },
  {
    icon: FileText,
    title: "Public Documents",
    description: "All major speeches, statements, and policy positions freely accessible and searchable.",
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description: "Clear benchmarks for measuring institutional effectiveness, reported annually.",
  },
  {
    icon: Award,
    title: "Merit-Based Appointments",
    description: "Commitment to qualification over politics in all senior appointments.",
  },
]

const documents = [
  { title: "Vision Statement", type: "PDF", size: "2.4 MB" },
  { title: "Governance Reform Proposal", type: "PDF", size: "1.8 MB" },
  { title: "Financial Disclosure", type: "PDF", size: "0.9 MB" },
  { title: "Career Summary", type: "PDF", size: "0.5 MB" },
]

const priorities = [
  { num: "1", text: "Clear strategic priorities, publicly stated" },
  { num: "2", text: "Reduced duplication across agencies" },
  { num: "3", text: "Faster crisis response mechanisms" },
]

const metrics = [
  { label: "Speed", detail: "Response time to emerging crises" },
  { label: "Reach", detail: "Access to all parties in all conflicts" },
  { label: "Results", detail: "Tangible outcomes for people and states" },
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

export function TransparencySection() {
  const headerAnim = useInView()
  const imageAnim = useInView(0.3)
  const commitmentsAnim = useInView()
  const mgmtAnim = useInView()
  const cultureAnim = useInView()
  const metricsAnim = useInView()

  return (
    <section id="transparency" className="relative bg-background overflow-hidden">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 py-32 lg:py-44">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={`max-w-5xl mb-24 transition-all duration-1000 ${headerAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-px bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[11px] font-medium">
              Section 05 &mdash; The Standard
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-10 leading-[1.1] tracking-tight">
            Open to Everybody
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light">
            How he would run the institution with transparency, discipline, and accountability.
          </p>
        </div>

        {/* Hero Image */}
        <div 
          ref={imageAnim.ref}
          className={`relative mb-32 transition-all duration-1000 ${imageAnim.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="/images/transparency-governance.jpg"
              alt="Press conference and transparent governance"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-transparent to-foreground/30" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-secondary" />
              <span className="text-white/60 text-[11px] uppercase tracking-[0.2em]">Accountability</span>
            </div>
            <p className="text-white text-xl md:text-2xl font-serif italic max-w-2xl leading-relaxed">
              &ldquo;Accountability is not a constraint on leadership. It is what gives leadership legitimacy.&rdquo;
            </p>
          </div>

          <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-white/20" />
          <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-white/20" />
        </div>

        {/* Transparency Commitments */}
        <div 
          ref={commitmentsAnim.ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-36"
        >
          {commitments.map((item, index) => (
            <div
              key={item.title}
              className={`group relative p-10 bg-card border border-border hover:border-secondary/40 transition-all duration-500 hover-lift ${commitmentsAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: commitmentsAnim.inView ? `${index * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-500">
                <item.icon className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors duration-500" />
              </div>
              <h4 className="font-serif text-lg text-foreground mb-4">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Management Discipline + Document Hub */}
        <div 
          ref={mgmtAnim.ref}
          className="grid lg:grid-cols-2 gap-20 items-start mb-36"
        >
          <div className={`transition-all duration-1000 ${mgmtAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug gold-line">
              Management Discipline
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                The UN system is vast, complex, and often duplicative. The next
                Secretary-General must be willing to set clear priorities, reduce
                overlap, improve coordination, and accelerate response times.
              </p>
              <p>
                This is not about bureaucratic tinkering. It is about making the
                system capable of matching the speed and scale of modern crises.
              </p>
            </div>
            
            <div className="space-y-4">
              {priorities.map((item, index) => (
                <div 
                  key={item.num}
                  className={`flex items-center gap-6 transition-all duration-500 ${mgmtAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: mgmtAnim.inView ? `${index * 100 + 400}ms` : '0ms' }}
                >
                  <span className="w-14 h-14 bg-secondary/10 flex items-center justify-center text-secondary font-serif text-xl flex-shrink-0">
                    {item.num}
                  </span>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Document Hub */}
          <div className={`transition-all duration-1000 delay-200 ${mgmtAnim.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-muted p-10 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-secondary" />
                <span className="text-secondary text-[11px] uppercase tracking-[0.2em] font-medium">
                  Documents
                </span>
              </div>
              <h4 className="font-serif text-2xl text-foreground mb-3">
                Transparency Hub
              </h4>
              <p className="text-muted-foreground mb-10">
                Access key documents, speeches, and disclosures.
              </p>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <button
                    key={doc.title}
                    className={`w-full flex items-center justify-between p-5 bg-card border border-border hover:border-secondary/40 transition-all duration-500 hover-lift group ${mgmtAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: mgmtAnim.inView ? `${index * 100 + 500}ms` : '0ms' }}
                  >
                    <div className="flex items-center gap-4">
                      <FileText className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                      <span className="text-foreground text-left">{doc.title}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground">{doc.size}</span>
                      <Download className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Culture */}
        <div 
          ref={cultureAnim.ref}
          className={`relative mb-36 transition-all duration-1000 ${cultureAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="bg-foreground text-background p-16 lg:p-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <div className="relative max-w-4xl">
              <span className="text-secondary text-[11px] uppercase tracking-[0.3em] font-medium mb-6 block">
                Institutional Culture
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-tight">
                Institutional Culture and Merit
              </h3>
              <p className="text-xl leading-relaxed opacity-80 mb-12 max-w-3xl">
                A Secretary-General sets the tone for the entire UN system.
                Grossi&apos;s commitment: integrity over politics, seriousness
                over performance, inclusion over tokenism, and standards that
                apply equally to everyone.
              </p>
              <blockquote className="relative pl-8 border-l-2 border-secondary">
                <p className="text-2xl md:text-3xl font-serif italic leading-snug">
                  &ldquo;The UN belongs to its member states. But it must be run as
                  if every staff member&apos;s dignity depends on it &mdash; because
                  it does.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Measuring Performance */}
        <div 
          ref={metricsAnim.ref}
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${metricsAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            How a Better-Run UN Should Be Judged
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-2xl mx-auto">
            Not by the number of meetings held, but by crises averted. Not by
            statements issued, but by agreements reached. Not by budgets spent,
            but by outcomes delivered.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {metrics.map((item, index) => (
              <div 
                key={item.label}
                className={`group p-10 border border-border hover:border-secondary/40 transition-all duration-500 hover-lift ${metricsAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: metricsAnim.inView ? `${index * 100 + 200}ms` : '0ms' }}
              >
                <p className="text-5xl font-serif text-secondary mb-4 group-hover:scale-110 transition-transform duration-500">
                  {item.label}
                </p>
                <p className="text-muted-foreground text-sm">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          
          <a 
            href="#vision" 
            className="inline-flex items-center gap-3 mt-16 text-secondary font-medium text-sm uppercase tracking-wider group"
          >
            <span>Return to Vision</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
