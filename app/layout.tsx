"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import ParticlesBackground from "@/components/ui/ParticlesBackground"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-black text-white antialiased scroll-smooth relative`}>

        {/* Fondo partículas */}
        <ParticlesBackground />

        {/* Sidebar opcional (puedes habilitar luego) */}
        {/* <aside className="w-64 h-screen bg-gray-900 p-4 hidden md:block">
          <h2 className="text-xl font-bold mb-4">NeuralFlow</h2>
          <nav className="flex flex-col gap-3">
            <a href="#hero" className="hover:text-blue-500">Hero</a>
            <a href="#pricing" className="hover:text-blue-500">Pricing</a>
            <a href="#ai-agents" className="hover:text-blue-500">AI Agents</a>
            <a href="#trusted" className="hover:text-blue-500">Trusted</a>
          </nav>
        </aside> */}

        {/* Navbar global */}
        <Navbar />

        {/* Contenido principal */}
        <main className="relative z-10 pt-[80px]">{children}</main>

        {/* Footer */}
        <footer className="text-gray-500 text-center py-6 mt-20 z-10 relative">
          © {new Date().getFullYear()} NeuralFlow • AI Automation Platform
        </footer>
      </body>
    </html>
  )
}