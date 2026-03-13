import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { VisionSection } from "@/components/sections/vision-section"
import { Footer } from "@/components/footer"

const DangerousWorldSection = dynamic(() => import("@/components/sections/dangerous-world-section").then(m => ({ default: m.DangerousWorldSection })))
const WithEverybodySection = dynamic(() => import("@/components/sections/with-everybody-section").then(m => ({ default: m.WithEverybodySection })))
const ForEverybodySection = dynamic(() => import("@/components/sections/for-everybody-section").then(m => ({ default: m.ForEverybodySection })))
const TransparencySection = dynamic(() => import("@/components/sections/transparency-section").then(m => ({ default: m.TransparencySection })))
const PolicyPlatformSection = dynamic(() => import("@/components/sections/policy-platform-section").then(m => ({ default: m.PolicyPlatformSection })))
const GlobalSouthSection = dynamic(() => import("@/components/sections/global-south-section").then(m => ({ default: m.GlobalSouthSection })))
const CtaSection = dynamic(() => import("@/components/sections/cta-section").then(m => ({ default: m.CtaSection })))

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
