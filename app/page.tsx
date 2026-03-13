import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { VisionSection } from "@/components/sections/vision-section"
import { DangerousWorldSection } from "@/components/sections/dangerous-world-section"
import { WithEverybodySection } from "@/components/sections/with-everybody-section"
import { ForEverybodySection } from "@/components/sections/for-everybody-section"
import { TransparencySection } from "@/components/sections/transparency-section"
import { PolicyPlatformSection } from "@/components/sections/policy-platform-section"
import { GlobalSouthSection } from "@/components/sections/global-south-section"

import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VisionSection />
      <DangerousWorldSection />
      <WithEverybodySection />
      <ForEverybodySection />
      <TransparencySection />
      <PolicyPlatformSection />
      <GlobalSouthSection />

      <CtaSection />
      <Footer />
    </main>
  )
}
