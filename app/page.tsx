import Hero from "@/components/marketing/Hero"
import Features from "@/components/marketing/Features"
import HowItWorks from "@/components/marketing/HowItWorks"
import AISection from "@/components/marketing/AISection"
import Pricing from "@/components/marketing/Pricing"
import CTA from "@/components/marketing/CTA"
import Footer from "@/components/marketing/Footer"
import ChatWidget from "@/components/ui/ChatWidget"

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Hero />

      <Features />

      <HowItWorks />

      <AISection />

      <Pricing />

      <CTA />

      <Footer />

      {/* AI Chat Widget */}
      <ChatWidget />

    </main>
  )
}