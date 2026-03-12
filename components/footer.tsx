import { Mail, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="container mx-auto px-6 lg:px-12 py-20 border-b border-background/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            The world cannot afford to wait.
          </h2>
          <p className="text-xl text-background/70 mb-10 max-w-2xl mx-auto">
            For a United Nations that works&mdash;in a dangerous world, with
            everybody, for everybody, and open to everybody.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#vision"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-medium text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors"
            >
              Explore the Vision
            </a>
            <a
              href="mailto:contact@grossiforun.org"
              className="inline-flex items-center justify-center px-8 py-4 border border-background/30 text-background font-medium text-sm uppercase tracking-wider hover:bg-background/10 transition-colors"
            >
              Contact the Campaign
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="font-serif text-2xl">Rafael Grossi</span>
              <p className="text-background/50 text-sm mt-1">
                For Secretary-General of the United Nations
              </p>
            </div>
            <p className="text-background/60 leading-relaxed max-w-md">
              Crisis-tested leadership for a world that demands more from its
              institutions. A vision for a UN that delivers results, not just
              resolutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-background/50">
              Sections
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#vision"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  A UN That Works
                </a>
              </li>
              <li>
                <a
                  href="#dangerous-world"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  In a Dangerous World
                </a>
              </li>
              <li>
                <a
                  href="#with-everybody"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  With Everybody
                </a>
              </li>
              <li>
                <a
                  href="#for-everybody"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  For Everybody
                </a>
              </li>
              <li>
                <a
                  href="#transparency"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Open to Everybody
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-background/50">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@grossiforun.org"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@grossiforun.org
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/rafaborun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  @rafaborun
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/rafaelgrossi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 lg:px-12 py-8 border-t border-background/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            &copy; {new Date().getFullYear()} Grossi for UN Campaign. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-background/40 hover:text-background/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-background/40 hover:text-background/70 transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
