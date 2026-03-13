"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Definición de tipos para evitar errores de TS
type Lead = {
  id: string | number
  company: string
  industry: string
  phone: string | null
  email: string | null
  website: string | null
  score: number | null
  status: string | null
}

interface Props {
  initialLeads: Lead[]
}

export default function LeadsTable({ initialLeads }: Props) {
  const [query, setQuery] = useState("")
  const [filtered, setFiltered] = useState<Lead[]>(initialLeads)
  const [page, setPage] = useState(1)
  const perPage = 12

  // Filtrado con un pequeño delay (debounce) para rendimiento
  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredResults = initialLeads.filter(l =>
        l.company.toLowerCase().includes(query.toLowerCase()) ||
        l.industry.toLowerCase().includes(query.toLowerCase())
      )
      setFiltered(filteredResults)
      setPage(1)
    }, 200)
    return () => clearTimeout(timer)
  }, [query, initialLeads])

  const totalPages = Math.ceil(filtered.length / perPage)
  const currentLeads = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <div className="p-6 md:p-10 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: NEURALFLOWX STYLE */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#06b6d4]" />
              <span className="text-cyan-500 font-mono text-[10px] tracking-widest uppercase">AI Lead Processing</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter bg-linear-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              Lead Engine
            </h1>
          </div>
          
          {/* BUSCADOR PREMIUM - Corregido md:w-112.5 */}
          <div className="flex p-1 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl w-full md:w-112.5 shadow-2xl focus-within:border-cyan-500/50 transition-all">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por industria o empresa..."
              className="bg-transparent border-none px-4 py-3 rounded-xl w-full focus:ring-0 text-sm text-white"
            />
          </div>
        </header>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {currentLeads.map((lead) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={lead.id}
                className="group bg-zinc-900/30 border border-white/5 p-6 rounded-4xl hover:bg-zinc-800/40 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {lead.company[0]}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] block text-zinc-500 font-bold uppercase tracking-tighter mb-1">AI Score</span>
                    <span className={`text-xs font-black px-2 py-1 rounded-lg ${Number(lead.score) > 70 ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-zinc-800 text-zinc-400'}`}>
                      {lead.score ?? 0}%
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{lead.company}</h3>
                <p className="text-zinc-500 text-sm mb-6 font-medium">{lead.industry}</p>

                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <span className="opacity-40">Email:</span>
                    <span className="truncate">{lead.email ?? 'No disponible'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <span className="opacity-40">Phone:</span>
                    <span>{lead.phone ?? 'No disponible'}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                  <span className="text-[10px] font-black uppercase text-zinc-600 tracking-widest">
                    {lead.status ?? 'Nuevo'}
                  </span>
                  <button className="bg-white text-black text-[11px] font-bold px-5 py-2.5 rounded-2xl hover:bg-cyan-400 transition-colors active:scale-95">
                    Capturar Lead
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* PAGINACIÓN ESTILO MINIMAL */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-8 mt-16 pb-12">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="text-zinc-500 hover:text-white disabled:opacity-20 transition-colors font-bold text-sm"
            >
              Anterior
            </button>
            <span className="text-xs font-mono text-zinc-500 tracking-widest">
              PÁGINA <span className="text-white font-bold">{page}</span> / {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="text-zinc-500 hover:text-white disabled:opacity-20 transition-colors font-bold text-sm"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  )
}