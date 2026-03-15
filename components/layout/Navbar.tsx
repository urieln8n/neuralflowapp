"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", href: "/" },
  { name: "Automations", href: "/automations" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "CRM", href: "/dashboard/leads" }, // BOTÓN CRM AÑADIDO
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {

  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <motion.nav

      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}

      className={`fixed top-0 w-full z-50 transition-all duration-500
      ${scrolled
        ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
      }`}

    >

      <div className="max-w-7xl mx-auto px-6 h-80px] flex items-center justify-between">

        {/* LOGO */}

        <Link href="/">

          <motion.div

            whileHover={{ scale: 1.05 }}

            className="text-2xl font-bold tracking-tight cursor-pointer
            bg-linear-to-r from-purple-400 via-cyan-400 to-blue-400
            bg-clip-text text-transparent"

          >

            NeuralFlow

          </motion.div>

        </Link>


        {/* NAV LINKS */}

        <div className="hidden md:flex items-center gap-10">

          {links.map((link, i) => {

            const isActive = pathname === link.href

            return (

              <Link key={i} href={link.href}>

                <motion.span

                  whileHover={{ y: -2 }}

                  className={`relative transition cursor-pointer
                  ${isActive ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-white"}
                  `}

                >

                  {link.name}

                  <span className={`absolute left-0 -bottom-2 h-[2px]
                  bg-gradient-to-r from-cyan-400 to-blue-400
                  transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}></span>

                </motion.span>

              </Link>

            )

          })}

        </div>


        {/* CTA */}

        <motion.button

          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

          className="px-6 py-2 rounded-xl font-semibold
          bg-gradient-to-r from-cyan-500 to-blue-500
          shadow-lg shadow-cyan-500/20"

        >

          Launch AI

        </motion.button>

      </div>

    </motion.nav>

  )
}