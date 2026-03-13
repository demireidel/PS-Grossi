"use client"

import Image from "next/image"
import { Shield, AlertTriangle, Compass } from "lucide-react"

const experiences = [
  {
    icon: Shield,
    title: "Zaporizhzhia: Into the Fire",
    description:
      "In 2022, Grossi personally led the first IAEA mission to Zaporizhzhia—Europe's largest nuclear plant—crossing the front line under active fire. His convoy was attacked in the gray zone. He established permanent monitoring while shells fell nearby, negotiating access with both Moscow and Kyiv. 'I have to maintain this operation,' he says. 'It is very important for peace and security in the world.'",
  },
  {
    icon: AlertTriangle,
    title: "Iran: Doors Others Closed",
    description:
      "When the JCPOA collapsed and tensions peaked, Grossi kept verification channels open. He traveled to Tehran repeatedly, meeting Iran's highest leadership while upholding inspection standards. After the 2025 Israeli strikes, he negotiated renewed access to facilities. Iran still holds 400kg of 60%-enriched uranium—almost military grade. 'Inspectors must restart work,' Grossi insists.",
  },
  {
    icon: Compass,
    title: "Chernobyl: The Sarcophagus Crisis",
    description:
      "In early 2025, a drone attack compromised Chernobyl's protective sarcophagus, threatening to release radioactive contamination. Grossi's team assessed the damage over months. 'The sarcophagus's insulation capacity is compromised,' he reported. 'The repair must be extended to ensure protection.' Even 40 years later, nuclear dangers require constant vigilance.",
  },
]

export function DangerousWorldSection() {
  return (
    <section
      id="dangerous-world"
      className="py-32 lg:py-48 bg-muted relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      
      <div className="container mx-auto px-6 lg:px-20 relative">
        {/* Section Header */}
        <div className="max-w-5xl mb-24">
          <div className="flex items-center gap-6 mb-8">
            <span className="h-px w-16 bg-secondary" />
            <p className="text-secondary uppercase tracking-[0.3em] text-[10px] font-medium">
              Section 02
            </p>
            <span className="text-secondary/30">/</span>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
              The Moment
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-10 leading-[0.95] tracking-tight">
            In a Dangerous <span className="text-secondary italic">World</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
            Why this moment requires crisis-tested leadership
          </p>
        </div>

        {/* Hero Image - Cinematic */}
        <div className="relative aspect-cinema mb-24 overflow-hidden">
          <Image
            src="/images/grossi-zaporizhzhia.jpg"
            alt="IAEA Director General Rafael Grossi wearing combat helmet at the frontline crossing near Zaporizhzhia Nuclear Power Plant, September 2024"
            fill
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
          
          {/* Letterbox */}
          <div className="absolute top-0 left-0 right-0 h-[6%] bg-black" />
          <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black" />
          
          <div className="absolute bottom-[10%] left-0 right-0 px-8 lg:px-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-secondary" />
              <span className="text-white/50 text-[10px] uppercase tracking-[0.3em]">On the Ground</span>
            </div>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
              When crisis meets diplomacy, experience is not optional&mdash;it
              is essential.
            </p>
          </div>
          
          {/* Frame accents */}
          <div className="absolute top-[10%] left-8 w-16 h-16 border-l-2 border-t-2 border-white/20" />
          <div className="absolute top-[10%] right-8 w-16 h-16 border-r-2 border-t-2 border-white/20" />
        </div>

        {/* Secondary Image - Crisis Diplomacy */}
        <div className="grid lg:grid-cols-2 gap-2 mb-24">
          <div className="relative aspect-[4/3] overflow-hidden group">
            <Image
              src="/images/crisis-diplomacy.jpg"
              alt="Rafael Grossi in IAEA field vest during the first Support and Assistance Mission to Zaporizhzhia (ISAMZ), August 2022"
              fill
              quality={85}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-1">Crisis Response</p>
              <p className="text-sm text-white/90 font-medium">Frontline Diplomacy in Action</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden group">
            <Image
              src="/images/grossi-tehran.jpg"
              alt="Rafael Grossi briefing the press on IAEA verification activities in Iran, Vienna, May 2024"
              fill
              quality={85}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-1">Iran</p>
              <p className="text-sm text-white/90 font-medium">Nuclear Negotiations, Tehran</p>
            </div>
          </div>
        </div>

        {/* The Stakes */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              &ldquo;A Fragmented and Volatile World&rdquo;
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Grossi&apos;s assessment is unflinching: &ldquo;There is a revival
              of nuclear deterrence. Nuclear-weapon states are maintaining and
              even modernizing their arsenals. Strong proliferation pressures
              are emerging in countries considering acquiring nuclear
              capabilities as a deterrent.&rdquo;
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              On Putin&apos;s nuclear threats: &ldquo;I haven&apos;t registered
              any threats of a nuclear attack. What has happened is statements
              warning that, in the event of an existential threat, nuclear
              weapons are available. This is actually the doctrine of nuclear
              weapons use for almost all countries.&rdquo;
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              On Zaporizhzhia: &ldquo;It remains extremely fragile, very
              dangerous. We must not forget that it is a nuclear plant located
              in a combat zone. On the front line. In territory that Russia has
              fully occupied.&rdquo; The plant was Europe&apos;s largest—now
              relying on portable diesel generators.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Grossi has received death threats for his work. &ldquo;The death
              threats have been traumatic,&rdquo; he admits. &ldquo;I continue
              with personal security because experts consider the threats
              credible. But in moments of tension like this, one must not give
              in—much less to threats.&rdquo;
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center">
                    <exp.icon className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grossi's Career */}
        <div className="grid md:grid-cols-3 gap-1 mb-24">
          <div className="group p-12 lg:p-14 bg-card border border-border hover:bg-foreground transition-all duration-500">
            <p className="text-5xl md:text-6xl font-serif text-secondary mb-6">40</p>
            <p className="text-foreground group-hover:text-background font-medium mb-3 transition-colors duration-500">
              Years in Diplomacy
            </p>
            <p className="text-muted-foreground group-hover:text-background/60 text-sm transition-colors duration-500">
              Joined Argentina&apos;s Foreign Ministry in 1985. Ambassador to
              Austria. Chief of Cabinet at OPCW. First Latin American to lead
              the IAEA. PhD in International Relations from Geneva.
            </p>
          </div>
          <div className="group p-12 lg:p-14 bg-card border border-border hover:bg-foreground transition-all duration-500">
            <p className="text-5xl md:text-6xl font-serif text-secondary mb-6">2019</p>
            <p className="text-foreground group-hover:text-background font-medium mb-3 transition-colors duration-500">
              IAEA Director General
            </p>
            <p className="text-muted-foreground group-hover:text-background/60 text-sm transition-colors duration-500">
              Elected December 2019. Led the agency through COVID, the Ukraine
              war, Iran tensions, and the return of nuclear deterrence rhetoric.
              Re-elected for a second term.
            </p>
          </div>
          <div className="group p-12 lg:p-14 bg-card border border-border hover:bg-foreground transition-all duration-500">
            <p className="text-5xl md:text-6xl font-serif text-secondary mb-6">1st</p>
            <p className="text-foreground group-hover:text-background font-medium mb-3 transition-colors duration-500">
              Latin American IAEA Chief
            </p>
            <p className="text-muted-foreground group-hover:text-background/60 text-sm transition-colors duration-500">
              First from the region since the agency&apos;s founding in 1957.
              Also first to serve two consecutive terms as president of the
              Nuclear Suppliers Group.
            </p>
          </div>
        </div>

        {/* Why This Fits */}
        <div className="bg-foreground text-background p-16 lg:p-24 relative overflow-hidden film-grain">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative max-w-4xl">
            <span className="inline-flex items-center gap-4 text-secondary text-[10px] uppercase tracking-[0.4em] font-medium mb-10">
              <span className="w-8 h-px bg-secondary" />
              The Fit
            </span>
            
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-[1.1]">
              The Grossi <span className="text-secondary italic">Doctrine</span>
            </h3>
            
            <p className="text-xl md:text-2xl leading-relaxed opacity-80 mb-8 font-light">
              &ldquo;Whoever holds the position must speak with those who
              initiated the attacks. That&apos;s the first thing I did: speak
              with Putin, and many people criticized me for it. But who else am
              I going to talk to?&rdquo;
            </p>
            
            <p className="text-lg leading-relaxed opacity-70 mb-8">
              This is the Grossi doctrine: go where the crisis is, talk to
              whoever is relevant, maintain impartiality without indifference,
              and return with something concrete. When Zaporizhzhia was under
              bombardment, he went personally. When Iran closed doors, he found
              a way back in.
            </p>
            
            <p className="text-lg leading-relaxed opacity-70 mb-12">
              On accusations of bias: &ldquo;Some say I&apos;m a Zionist puppet,
              others say the opposite. One day the pro-Ukrainians claim I&apos;m
              in Putin&apos;s pocket, and when I meet with President Zelensky,
              the pro-Russians say I&apos;m on the other side. If the price is
              criticism, so be it.&rdquo;
            </p>
            
            <blockquote className="relative pl-8 border-l-2 border-secondary">
              <p className="text-2xl md:text-3xl font-serif italic leading-[1.3]">
                &ldquo;My job requires dialogue with everyone. Active diplomacy
                must be deployed, and solutions proposed as an impartial, but
                not indifferent, interlocutor.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
