"use client"

import Image from "next/image"
import { FileText, BarChart3, Award, Eye } from "lucide-react"

const commitments = [
  {
    icon: Eye,
    title: "Full Financial Disclosure",
    description:
      "Complete transparency on personal finances, potential conflicts, and outside interests.",
  },
  {
    icon: FileText,
    title: "Public Documents",
    description:
      "All major speeches, statements, and policy positions freely accessible and searchable.",
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description:
      "Clear benchmarks for measuring institutional effectiveness, reported annually.",
  },
  {
    icon: Award,
    title: "Merit-Based Appointments",
    description:
      "Commitment to qualification over politics in all senior appointments.",
  },
]

const documents = [
  {
    title: "Vision Statement",
    type: "PDF",
    date: "2025",
  },
  {
    title: "Governance Reform Proposal",
    type: "PDF",
    date: "2025",
  },
  {
    title: "Financial Disclosure",
    type: "PDF",
    date: "2025",
  },
  {
    title: "Career Summary",
    type: "PDF",
    date: "2025",
  },
]

export function TransparencySection() {
  return (
    <section id="transparency" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <p className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            The Standard
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            Open to Everybody
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            How he would run the institution with transparency and discipline
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] mb-20 overflow-hidden">
          <Image
            src="/images/transparency-governance.jpg"
            alt="Press conference and transparent governance"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <p className="text-white text-lg max-w-2xl">
              Accountability is not a constraint on leadership. It is what gives
              leadership legitimacy.
            </p>
          </div>
        </div>

        {/* Transparency Commitments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-card border border-border hover:border-secondary/30 transition-colors"
            >
              <item.icon className="w-10 h-10 text-secondary mb-6" />
              <h4 className="font-serif text-lg text-foreground mb-3">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Management Discipline */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Management Discipline
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The UN system is vast, complex, and often duplicative. The next
              Secretary-General must be willing to set clear priorities, reduce
              overlap, improve coordination, and accelerate response times.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This is not about bureaucratic tinkering. It is about making the
              system capable of matching the speed and scale of modern crises.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary font-serif text-xl">
                  1
                </span>
                <span className="text-foreground">Clear strategic priorities, publicly stated</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary font-serif text-xl">
                  2
                </span>
                <span className="text-foreground">Reduced duplication across agencies</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary font-serif text-xl">
                  3
                </span>
                <span className="text-foreground">Faster crisis response mechanisms</span>
              </div>
            </div>
          </div>

          {/* Document Hub */}
          <div className="bg-muted p-8 lg:p-10">
            <h4 className="font-serif text-xl text-foreground mb-6">
              Transparency Hub
            </h4>
            <p className="text-muted-foreground mb-8">
              Access key documents, speeches, and disclosures.
            </p>
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.title}
                  className="flex items-center justify-between p-4 bg-card border border-border hover:border-secondary/30 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                    <span className="text-foreground">{doc.title}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {doc.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Institutional Culture */}
        <div className="bg-foreground text-background p-12 lg:p-16 mb-20">
          <div className="max-w-4xl">
            <h3 className="font-serif text-2xl md:text-3xl mb-6">
              Institutional Culture and Merit
            </h3>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              A Secretary-General sets the tone for the entire UN system.
              Grossi&apos;s commitment: integrity over politics, seriousness
              over performance, inclusion over tokenism, and standards that
              apply equally to everyone.
            </p>
            <blockquote className="border-l-4 border-secondary pl-6 text-2xl font-serif italic">
              &ldquo;The UN belongs to its member states. But it must be run as
              if every staff member&apos;s dignity depends on it&mdash;because
              it does.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Measuring Performance */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            How a Better-Run UN Should Be Judged
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Not by the number of meetings held, but by crises averted. Not by
            statements issued, but by agreements reached. Not by budgets spent,
            but by outcomes delivered.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-serif text-secondary mb-2">Speed</p>
              <p className="text-muted-foreground text-sm">
                Response time to emerging crises
              </p>
            </div>
            <div>
              <p className="text-4xl font-serif text-secondary mb-2">Reach</p>
              <p className="text-muted-foreground text-sm">
                Access to all parties in all conflicts
              </p>
            </div>
            <div>
              <p className="text-4xl font-serif text-secondary mb-2">Results</p>
              <p className="text-muted-foreground text-sm">
                Tangible outcomes for people and states
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
