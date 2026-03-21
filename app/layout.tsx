"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/Navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-black text-white antialiased scroll-smooth relative`}>

        <Navbar />

        <main className="relative z-10 pt-[80px]">{children}</main>

        <footer className="text-gray-500 text-center py-6 mt-20 z-10 relative">
          © {new Date().getFullYear()} NeuralFlow • AI Automation Platform
        </footer>
      </body>
    </html>
  )
}