"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Leads", href: "/dashboard/leads" },
  { label: "Pricing", href: "/pricing" },
  { label: "Settings", href: "/settings" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 min-h-screen p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">neuralfloX</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-lg text-white ${
              pathname.startsWith(link.href) ? "bg-purple-700" : "hover:bg-gray-800"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}