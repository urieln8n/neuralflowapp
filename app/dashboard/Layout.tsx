"use client"

import Link from "next/link"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0b0b0f] text-white">

      {/* SIDEBAR */}
      <aside className="w-60 bg-[#111118] p-8 border-r border-[#1f1f28] flex flex-col">
        <h2 className="text-xl mb-10 font-bold">NeuralFlow</h2>

        <nav className="flex flex-col gap-3">
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/dashboard/leads">Leads</NavLink>
          <NavLink href="/dashboard/automations">Automations</NavLink>
          <NavLink href="/dashboard/bots">AI Bots</NavLink>
          <NavLink href="/dashboard/analytics">Analytics</NavLink>
          <NavLink href="/dashboard/settings">Settings</NavLink>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  )
}

// Componente auxiliar para links con hover
function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white px-4 py-2 rounded-lg bg-[#1a1a22] hover:bg-gray-700 transition-colors"
    >
      {children}
    </Link>
  )
}