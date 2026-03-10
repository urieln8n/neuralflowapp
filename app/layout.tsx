import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/Navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "NeuralFlow",
  description: "AI automation platform for modern businesses",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-black text-white antialiased`}>
        
        {/* Navbar global */}
        <Navbar />

        {/* contenido */}
        <main className="pt-[80px]">
          {children}
        </main>

      </body>
    </html>
  )
}