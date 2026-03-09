"use client"

import Link from "next/link"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#0b0b0f",
      color: "white"
    }}>

      {/* SIDEBAR */}

      <aside style={{
        width: "240px",
        background: "#111118",
        padding: "30px 20px",
        borderRight: "1px solid #1f1f28"
      }}>

        <h2 style={{
          fontSize: "20px",
          marginBottom: "40px"
        }}>
          NeuralFlow
        </h2>

        <nav style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}>

          <Link style={link} href="/dashboard">Dashboard</Link>

          <Link style={link} href="/dashboard/leads">Leads</Link>

          <Link style={link} href="/dashboard/automations">Automations</Link>

          <Link style={link} href="/dashboard/bots">AI Bots</Link>

          <Link style={link} href="/dashboard/analytics">Analytics</Link>

          <Link style={link} href="/dashboard/settings">Settings</Link>

        </nav>

      </aside>

      {/* CONTENT */}

      <main style={{
        flex: 1,
        padding: "40px"
      }}>

        {children}

      </main>

    </div>
  )
}

const link = {
  color: "white",
  textDecoration: "none",
  padding: "10px 14px",
  borderRadius: "8px",
  background: "#1a1a22"
}