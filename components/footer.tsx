import { Mail, Twitter, Linkedin, ChevronRight } from "lucide-react"
import { NAV_ITEMS, CURRENT_YEAR } from "@/lib/constants"
import { Reveal } from "@/components/reveal"
import { OrnamentalDivider } from "@/components/ornamental-divider"
import { BackToTop } from "@/components/back-to-top"

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: "var(--dot-pattern)",
          backgroundSize: "var(--dot-size-sm)",
        }}
      />
      {/* Ambient depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-transparent to-black/[0.06]" />

      {/* CTA Section */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 py-40 lg:py-56 border-b border-background/[0.06]">
        <Reveal direction="fade">
          <div className="max-w-5xl mx-auto text-center">
            <OrnamentalDivider label="The Call" className="mb-12" />

            <div className="overflow-hidden">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-[0.92]">
                The world cannot
                <span className="block text-secondary italic">afford to wait.</span>
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-background/50 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              For a United Nations that works—in a dangerous world, with
              everybody, for everybody, and open to everybody.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#vision"
                className="group relative inline-flex items-center justify-center px-14 py-6 bg-secondary text-secondary-foreground font-medium text-[length:var(--text-label-lg)] uppercase tracking-[var(--tracking-wider)] overflow-hidden transition-colors duration-500 glow-gold"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore the Vision
                  <ChevronRight className="w-4 h-4 transition-transform duration-400 group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </a>
              <a
                href="mailto:contact@grossiforun.org"
                className="group inline-flex items-center justify-center px-14 py-6 border border-background/10 text-background font-medium text-[length:var(--text-label-lg)] uppercase tracking-[var(--tracking-wider)] hover:border-background/25 hover:bg-background/[0.03] transition-[border-color,background-color] duration-500"
              >
                Contact the Campaign
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer Links */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 py-24">
        <Reveal direction="up">
          <div className="grid md:grid-cols-12 gap-16">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="mb-10">
                <div className="w-16 h-16 border border-background/10 flex items-center justify-center mb-6 relative group">
                  <span className="font-serif text-2xl text-gradient-gold">RG</span>
                  <div className="absolute inset-0 border border-secondary/0 group-hover:border-secondary/15 transition-colors duration-500" />
                </div>
                <span className="font-serif text-3xl block mb-2">Rafael Grossi</span>
                <p className="text-background/50 text-sm uppercase tracking-[var(--tracking-wide)]">
                  For Secretary-General of the United Nations
                </p>
              </div>
              <p className="text-background/40 leading-relaxed max-w-md text-sm">
                Crisis-tested leadership for a world that demands more from its
                institutions. A vision for a UN that delivers results, not just
                resolutions.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3" role="navigation" aria-label="Footer navigation">
              <h4 className="font-medium text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] mb-8 text-background/40">
                Sections
              </h4>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-2 text-background/50 hover:text-background transition-colors duration-400"
                    >
                      <span className="w-0 h-px bg-secondary transition-all duration-400 group-hover:w-4" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h4 className="font-medium text-[length:var(--text-label)] uppercase tracking-[var(--tracking-ultra)] mb-8 text-background/40">
                Connect
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:contact@grossiforun.org"
                    className="group flex items-center gap-4 text-background/50 hover:text-background transition-colors duration-400"
                  >
                    <div className="w-10 h-10 border border-background/10 flex items-center justify-center group-hover:border-secondary/40 group-hover:bg-secondary/[0.06] transition-[border-color,background-color] duration-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>contact@grossiforun.org</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/rafaborun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-background/50 hover:text-background transition-colors duration-400"
                  >
                    <div className="w-10 h-10 border border-background/10 flex items-center justify-center group-hover:border-secondary/40 group-hover:bg-secondary/[0.06] transition-[border-color,background-color] duration-400">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <span>@rafaborun</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/rafaelgrossi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-background/50 hover:text-background transition-colors duration-400"
                  >
                    <div className="w-10 h-10 border border-background/10 flex items-center justify-center group-hover:border-secondary/40 group-hover:bg-secondary/[0.06] transition-[border-color,background-color] duration-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Copyright */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 py-10 border-t border-background/[0.06]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/40 text-xs uppercase tracking-wider">
            &copy; {CURRENT_YEAR} Grossi for UN Campaign. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-background/30 text-xs uppercase tracking-wider">
              Privacy Policy
            </span>
            <span className="text-background/30 text-xs uppercase tracking-wider">
              Terms of Use
            </span>
          </div>
        </div>
      </div>

      <BackToTop />
    </footer>
  )
}
