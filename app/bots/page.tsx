'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Plus, MessageSquare, Settings, BarChart2, Zap, Activity, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import BotWidget from '@/bots/BotWidget'

const BOTS = [
  {
    id: '1',
    name: 'Lead Capture Bot',
    description: 'Qualifies website visitors and captures leads automatically.',
    type: 'LEAD_CAPTURE',
    status: 'ACTIVE',
    conversations: 148,
    leadsCaptures: 34,
    satisfaction: 4.8,
    color: '#00f5ff',
    icon: '🎯',
  },
  {
    id: '2',
    name: 'Customer Support Bot',
    description: 'Handles tier-1 support queries 24/7 with AI-powered responses.',
    type: 'CUSTOMER_SUPPORT',
    status: 'ACTIVE',
    conversations: 312,
    leadsCaptures: 0,
    satisfaction: 4.6,
    color: '#10b981',
    icon: '💬',
  },
  {
    id: '3',
    name: 'Appointment Scheduler',
    description: 'Books discovery calls and demos automatically.',
    type: 'APPOINTMENT',
    status: 'ACTIVE',
    conversations: 67,
    leadsCaptures: 28,
    satisfaction: 4.9,
    color: '#f97316',
    icon: '📅',
  },
  {
    id: '4',
    name: 'Product Qualifier Bot',
    description: 'Identifies best product fit based on user needs.',
    type: 'QUALIFICATION',
    status: 'DRAFT',
    conversations: 0,
    leadsCaptures: 0,
    satisfaction: 0,
    color: '#a855f7',
    icon: '⚡',
  },
]

export default function BotsPage() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="flex h-screen bg-[hsl(220,14%,4%)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-white/5 flex flex-col">
        <div className="p-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-white">
              Neural<span className="text-cyan-400">Flow</span>
            </span>
          </Link>
        </div>
        <nav className="flex-1 px-3 py-6 space-y-1">
          {[
            { label: 'Dashboard', href: '/dashboard', icon: '📊' },
            { label: 'Leads / CRM', href: '/crm', icon: '👥' },
            { label: 'Automations', href: '/automations', icon: '⚡' },
            { label: 'AI Bots', href: '/bots', icon: '🤖', active: true },
          ].map((item) => (
            <Link key={item.label} href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                item.active ? 'bg-white/8 text-white border border-white/10' : 'text-white/40 hover:text-white/70 hover:bg-white/5'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 bg-[hsl(220,14%,4%)]/90 backdrop-blur-xl border-b border-white/5 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-emerald-400" />
              <h1 className="font-display font-bold text-2xl text-white">AI Bots</h1>
              <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 text-xs">
                {BOTS.filter(b => b.status === 'ACTIVE').length} live
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowDemo(!showDemo)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/60 text-sm hover:text-white hover:border-white/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                {showDemo ? 'Hide' : 'Preview'} Widget
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                <Plus className="w-4 h-4" />
                Create Bot
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Total Conversations', value: '527', icon: MessageSquare, color: '#00f5ff' },
              { label: 'Leads from Bots', value: '62', icon: TrendingUp, color: '#a855f7' },
              { label: 'Avg Satisfaction', value: '4.8/5', icon: Activity, color: '#10b981' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="glass rounded-2xl p-5 border border-white/5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${stat.color}15` }}>
                    <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                  </div>
                  <span className="text-xs text-white/40">{stat.label}</span>
                </div>
                <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Bot cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BOTS.map((bot, i) => (
              <motion.div
                key={bot.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{bot.icon}</div>
                    <div>
                      <h3 className="font-display font-semibold text-white mb-1">{bot.name}</h3>
                      <p className="text-xs text-white/40">{bot.description}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full ${
                    bot.status === 'ACTIVE' ? 'text-emerald-400 bg-emerald-400/10' : 'text-white/30 bg-white/5'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${bot.status === 'ACTIVE' ? 'bg-emerald-400 animate-pulse' : 'bg-white/30'}`} />
                    {bot.status.charAt(0) + bot.status.slice(1).toLowerCase()}
                  </div>
                </div>

                {bot.status === 'ACTIVE' && (
                  <div className="grid grid-cols-3 gap-3 mb-4 p-3 rounded-xl bg-white/3">
                    <div className="text-center">
                      <div className="font-display font-bold text-lg text-white">{bot.conversations}</div>
                      <div className="text-xs text-white/30">chats</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display font-bold text-lg" style={{ color: bot.color }}>{bot.leadsCaptures || '—'}</div>
                      <div className="text-xs text-white/30">leads</div>
                    </div>
                    <div className="text-center">
                      <div className="font-display font-bold text-lg text-white">{bot.satisfaction > 0 ? bot.satisfaction : '—'}</div>
                      <div className="text-xs text-white/30">rating</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <button className="flex-1 py-2 rounded-xl border border-white/10 text-xs text-white/50 hover:border-white/20 hover:text-white/70 transition-all flex items-center justify-center gap-1.5">
                    <Settings className="w-3.5 h-3.5" />
                    Configure
                  </button>
                  <button className="flex-1 py-2 rounded-xl border border-white/10 text-xs text-white/50 hover:border-white/20 hover:text-white/70 transition-all flex items-center justify-center gap-1.5">
                    <BarChart2 className="w-3.5 h-3.5" />
                    Analytics
                  </button>
                  <button
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs text-white border border-white/10 hover:border-white/20 transition-all"
                    style={{ background: `${bot.color}15`, borderColor: `${bot.color}30`, color: bot.color }}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Demo bot widget */}
      {showDemo && <BotWidget />}
    </div>
  )
}
