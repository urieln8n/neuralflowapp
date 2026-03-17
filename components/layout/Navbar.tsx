"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react" // Necesitas instalar lucide-react o usar SVGs

const links = [
  { name: "Home", href: "/" },
  { name: "Automations", href: "/automations" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "CRM", href: "/dashboard/leads" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // Estado para el menú móvil

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight cursor-pointer bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            NeuralFlow
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link, i) => {
            const isActive = pathname === link.href
            return (
              <Link key={i} href={link.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`relative transition cursor-pointer ${
                    isActive ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="underline"
                      className="absolute left-0 -bottom-2 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-blue-400" 
                    />
                  )}
                </motion.span>
              </Link>
            )
          })}
        </div>

        {/* BOTÓN MÓVIL + CTA */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-6 py-2 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/20"
          >
            Launch AI
          </motion.button>

          {/* Icono Hamburguesa */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href}
                  className={`text-lg ${pathname === link.href ? "text-cyan-400" : "text-gray-300"}`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500">
                Launch AI
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}