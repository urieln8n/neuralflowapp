import Hero from "@/components/marketing/Hero"
import Trusted from "@/components/marketing/Trusted"
import Features from "@/components/marketing/Features"
import AIAgents from "@/components/marketing/AIAgents"
import HowItWorks from "@/components/marketing/HowItWorks"
import WhoIsItFor from "@/components/marketing/WhoIsItFor"
import Pricing from "@/components/marketing/Pricing"
import CTA from "@/components/marketing/CTA"
import Footer from "@/components/marketing/Footer"
import ChatWidget from "@/components/ui/ChatWidget"

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <Hero />

      {/* TRUSTED */}
      <Trusted />

      {/* FEATURES */}
      <Features />

      {/* AI AGENTS */}
      <AIAgents />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* WHO IS IT FOR */}
      <WhoIsItFor />

      {/* PRICING */}
      <Pricing />

      {/* CTA */}
      <CTA />

      {/* FOOTER */}
      <Footer />

      {/* CHAT WIDGET */}
      <ChatWidget />

    </main>
  )
}