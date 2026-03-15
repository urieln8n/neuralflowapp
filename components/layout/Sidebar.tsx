"use client"

import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">NeuralFlow</h1>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:bg-gray-800 px-4 py-2 rounded">Dashboard</Link>
        <Link href="/dashboard/leads" className="hover:bg-gray-800 px-4 py-2 rounded">Leads</Link>
        <Link href="/dashboard/automations" className="hover:bg-gray-800 px-4 py-2 rounded">Automations</Link>
        <Link href="/dashboard/settings" className="hover:bg-gray-800 px-4 py-2 rounded">Settings</Link>
      </nav>
    </div>
  )
}