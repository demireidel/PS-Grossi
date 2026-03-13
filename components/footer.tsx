"use client"

import { Mail, Twitter, Linkedin, ArrowUp, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Footer() {
  const ctaAnim = useInView()
  const linksAnim = useInView()

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      {/* CTA Section */}
      <div 
        ref={ctaAnim.ref}
        className="relative container mx-auto px-6 lg:px-20 py-32 lg:py-44 border-b border-background/10"
      >
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1200 ${ctaAnim.inView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Overline */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <span className={`h-px bg-secondary transition-all duration-1000 delay-300 ${ctaAnim.inView ? 'w-16' : 'w-0'}`} />
            <p className="text-secondary uppercase tracking-[0.4em] text-[10px] font-medium">
              The Call
            </p>
            <span className={`h-px bg-secondary transition-all duration-1000 delay-300 ${ctaAnim.inView ? 'w-16' : 'w-0'}`} />
          </div>
          
          <div className="overflow-hidden">
            <h2 className={`font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-10 leading-[0.95] transition-all duration-1000 delay-200 ${ctaAnim.inView ? 'translate-y-0' : 'translate-y-full'}`}>
              The world cannot
              <span className="block text-secondary italic">afford to wait.</span>
            </h2>
          </div>
          
          <p className={`text-xl md:text-2xl text-background/60 mb-14 max-w-3xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-500 ${ctaAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            For a United Nations that works—in a dangerous world, with
            everybody, for everybody, and open to everybody.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-700 ${ctaAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="#vision"
              className="group relative inline-flex items-center justify-center px-12 py-6 bg-secondary text-secondary-foreground font-medium text-[11px] uppercase tracking-[0.25em] overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore the Vision
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
            <a
              href="mailto:contact@grossiforun.org"
              className="inline-flex items-center justify-center px-12 py-6 border border-background/20 text-background font-medium text-[11px] uppercase tracking-[0.25em] hover:bg-background/10 transition-all duration-300"
            >
              Contact the Campaign
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div 
        ref={linksAnim.ref}
        className="relative container mx-auto px-6 lg:px-20 py-20"
      >
        <div className={`grid md:grid-cols-12 gap-16 transition-all duration-1000 ${linksAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-8">
              <div className="w-16 h-16 border border-background/20 flex items-center justify-center mb-6">
                <span className="font-serif text-2xl">RG</span>
              </div>
              <span className="font-serif text-3xl block mb-2">Rafael Grossi</span>
              <p className="text-background/60 text-sm uppercase tracking-[0.2em]">
                For Secretary-General of the United Nations
              </p>
            </div>
            <p className="text-background/60 leading-relaxed max-w-md text-sm">
              Crisis-tested leadership for a world that demands more from its
              institutions. A vision for a UN that delivers results, not just
              resolutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-medium text-[10px] uppercase tracking-[0.3em] mb-8 text-background/60">
              Sections
            </h4>
            <ul className="space-y-4">
              {[
                { href: "#vision", label: "A UN That Works" },
                { href: "#dangerous-world", label: "In a Dangerous World" },
                { href: "#with-everybody", label: "With Everybody" },
                { href: "#for-everybody", label: "For Everybody" },
                { href: "#transparency", label: "Open to Everybody" },
                { href: "#global-south", label: "Global South" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-background/60 hover:text-background transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-secondary transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-medium text-[10px] uppercase tracking-[0.3em] mb-8 text-background/60">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@grossiforun.org"
                  className="group flex items-center gap-4 text-background/60 hover:text-background transition-colors duration-300"
                >
                  <div className="w-10 h-10 border border-background/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300">
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
                  className="group flex items-center gap-4 text-background/60 hover:text-background transition-colors duration-300"
                >
                  <div className="w-10 h-10 border border-background/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300">
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
                  className="group flex items-center gap-4 text-background/60 hover:text-background transition-colors duration-300"
                >
                  <div className="w-10 h-10 border border-background/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative container mx-auto px-6 lg:px-20 py-10 border-t border-background/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/60 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Grossi for UN Campaign. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-background/60 hover:text-background/60 transition-colors text-xs uppercase tracking-wider"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-background/60 hover:text-background/60 transition-colors text-xs uppercase tracking-wider"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a
        href="#"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
      </a>
    </footer>
  )
}
