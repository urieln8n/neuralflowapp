import "./globals.css"

import Navbar from "@/components/layout/Navbar"
import Particles from "@/components/ui/Particles"

import { Geist } from "next/font/google"
import { cn } from "@/lib/utils"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "NeuralFlow",
  description: "AI automation platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
    >

      <body className="bg-black text-white antialiased">

        {/* AI PARTICLES BACKGROUND */}

        <Particles />

        {/* GLOBAL GLOW BACKGROUNDS */}

        <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-purple-600/20 blur-[200px] rounded-full -z-10"></div>

        <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-cyan-500/20 blur-[200px] rounded-full -z-10"></div>

        {/* NAVBAR */}

        <Navbar />

        {/* MAIN CONTENT */}

        <main className="pt-20 relative z-10">

          {children}

        </main>

      </body>

    </html>

  )
}