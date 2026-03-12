"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Twitter, Linkedin, ArrowUp, ChevronRight } from "lucide-react"

const navSections = [
  { href: "#vision", label: "A UN That Works" },
  { href: "#dangerous-world", label: "In a Dangerous World" },
  { href: "#with-everybody", label: "With Everybody" },
  { href: "#for-everybody", label: "For Everybody" },
  { href: "#transparency", label: "Open to Everybody" },
]

const socialLinks = [
  { icon: Mail, href: "mailto:contact@grossiforun.org", label: "contact@grossiforun.org" },
  { icon: Twitter, href: "https://twitter.com/rafaborun", label: "@rafaborun" },
  { icon: Linkedin, href: "https://linkedin.com/in/rafaelgrossi", label: "LinkedIn" },
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

export function Footer() {
  const ctaAnim = useInView()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* CTA Section */}
      <div 
        ref={ctaAnim.ref}
        className="relative border-b border-background/10"
      >
        <div className="container mx-auto px-6 lg:px-16 py-28 lg:py-36">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${ctaAnim.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-secondary" />
                <span className="text-secondary text-[11px] uppercase tracking-[0.3em] font-medium">
                  The Call to Action
                </span>
                <span className="w-12 h-px bg-secondary" />
              </div>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight text-balance">
              The world cannot afford to wait.
            </h2>
            <p className="text-xl md:text-2xl text-background/60 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
              For a United Nations that works &mdash; in a dangerous world, with
              everybody, for everybody, and open to everybody.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="#vision"
                className="group inline-flex items-center justify-center px-10 py-5 bg-secondary text-secondary-foreground font-medium text-xs uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300 hover-lift"
              >
                <span>Explore the Vision</span>
                <ChevronRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:contact@grossiforun.org"
                className="inline-flex items-center justify-center px-10 py-5 border border-background/20 text-background font-medium text-xs uppercase tracking-[0.2em] hover:bg-background/10 hover:border-background/40 transition-all duration-300"
              >
                Contact the Campaign
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="relative container mx-auto px-6 lg:px-16 py-20">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 border border-background/20 flex items-center justify-center">
                  <span className="font-serif text-xl">RG</span>
                </div>
                <div>
                  <span className="font-serif text-2xl block">Rafael Grossi</span>
                  <p className="text-background/40 text-xs uppercase tracking-[0.2em]">
                    For Secretary-General
                  </p>
                </div>
              </div>
            </div>
            <p className="text-background/50 leading-relaxed max-w-sm mb-8">
              Crisis-tested leadership for a world that demands more from its
              institutions. A vision for a UN that delivers results, not just
              resolutions.
            </p>
            
            {/* Back to top */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-background/40 hover:text-background transition-colors duration-300"
            >
              <span className="text-xs uppercase tracking-wider">Back to top</span>
              <div className="w-10 h-10 border border-background/20 flex items-center justify-center group-hover:border-background/40 transition-colors">
                <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              </div>
            </button>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] mb-8 text-background/30">
              Sections
            </h4>
            <ul className="space-y-4">
              {navSections.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 text-background/60 hover:text-background transition-colors duration-300"
                  >
                    <span className="w-4 h-px bg-background/20 group-hover:w-6 group-hover:bg-secondary transition-all duration-300" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] mb-8 text-background/30">
              Connect
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 text-background/60 hover:text-background transition-colors duration-300"
                  >
                    <div className="w-10 h-10 border border-background/10 flex items-center justify-center group-hover:border-secondary/50 transition-colors">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-background/10">
        <div className="container mx-auto px-6 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-background/30 text-sm">
              &copy; {new Date().getFullYear()} Grossi for UN Campaign. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a
                href="#"
                className="text-background/30 hover:text-background/60 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/30 hover:text-background/60 transition-colors duration-300"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-background/30 hover:text-background/60 transition-colors duration-300"
              >
                Media Kit
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-background/5 pointer-events-none" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-background/5 pointer-events-none" />
    </footer>
  )
}
