"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { DOT_PATTERN_SM, DOT_PATTERN_SIZE_SM } from "@/lib/constants"

export function CtaSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section
      ref={ref}
      className="py-32 lg:py-48 bg-foreground text-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: DOT_PATTERN_SM, backgroundSize: DOT_PATTERN_SIZE_SM }} />

      <div className="container mx-auto px-6 lg:px-20 relative">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          <div className="flex items-center justify-center gap-6 mb-10">
            <span className="h-px w-16 bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[10px] font-medium">
              The Decision
            </p>
            <span className="h-px w-16 bg-secondary" />
          </div>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10 leading-[0.95] tracking-tight">
            A UN That <span className="text-secondary italic">Works</span>
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed opacity-70 mb-8 max-w-3xl mx-auto font-light">
            The selection of the next Secretary-General is among the most consequential decisions the international community will make this decade.
          </p>

          <p className="text-lg leading-relaxed opacity-60 mb-16 max-w-3xl mx-auto">
            Rafael Grossi offers something rare: a candidate whose experience matches the demands of the role. Forty years of crisis diplomacy. Leadership of a major UN agency through its most challenging period. A track record of engaging all parties, delivering results, and reforming institutions from within.
          </p>

          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl italic leading-[1.2] mb-16 max-w-4xl mx-auto">
            &ldquo;The UN needs a secretary with boots in the mud—not one who comments from a distance.&rdquo;
          </blockquote>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            <div className="p-8 border border-background/20 text-left">
              <p className="text-secondary text-[10px] uppercase tracking-[0.3em] mb-3">
                For Delegations
              </p>
              <p className="text-lg opacity-80 mb-4">
                Briefing materials and policy positions available upon request.
              </p>
              <Link
                href="mailto:campaign@grossi2026.org"
                className="inline-flex items-center gap-2 text-secondary hover:opacity-80 transition-opacity"
              >
                campaign@grossi2026.org
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-8 border border-background/20 text-left">
              <p className="text-secondary text-[10px] uppercase tracking-[0.3em] mb-3">
                For Media
              </p>
              <p className="text-lg opacity-80 mb-4">
                Press inquiries, interview requests, and background briefings.
              </p>
              <Link
                href="mailto:press@grossi2026.org"
                className="inline-flex items-center gap-2 text-secondary hover:opacity-80 transition-opacity"
              >
                press@grossi2026.org
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-16 border-t border-background/10">
            <p className="text-sm opacity-40 uppercase tracking-[0.2em] mb-4">
              Authorized by the Campaign for Rafael Grossi
            </p>
            <p className="text-sm opacity-40">
              For United Nations Secretary-General 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
