"use client"

import { prisma } from "../../../../../packages/database/client"
import { motion } from "framer-motion"

type Lead = {
  id: string
  nombre: string
  telefono?: string
  "correo electrónico"?: string
  mensaje?: string
  fuente?: string
  "creado en": string
}

export default async function LeadsPage() {
  const leads: Lead[] = await prisma.plomo.findMany({
    orderBy: { "creado en": "desc" },
  })

  return (
    <div className="min-h-screen bg-black text-white px-8 py-20 font-sans">
      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <header className="mb-12 border-b border-gray-800 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">CRM de Leads</h1>
          <p className="text-gray-400">Clientes capturados automáticamente por el chatbot IA</p>
        </header>

        {/* Leads Grid */}
        <div className="grid gap-8">
          {leads.length === 0 ? (
            <div className="py-20 text-center border-2 border-dashed border-gray-700 rounded-xl">
              <p className="text-gray-500">Esperando el primer lead desde el chat...</p>
            </div>
          ) : (
            leads.map((lead, i) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Nombre y Fuente */}
                <div className="flex justify-between items-center mb-4">
                  <strong className="text-cyan-400 text-xl md:text-2xl">{lead.nombre}</strong>
                  <span className="text-xs md:text-sm px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-400 bg-gray-900/20">
                    {lead.fuente || "Chat"}
                  </span>
                </div>

                {/* Contacto */}
                <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-4">
                  <span>📧 {lead["correo electrónico"] || "Sin email"}</span>
                  {lead.telefono && <span>📞 {lead.telefono}</span>}
                </div>

                {/* Mensaje */}
                <div className="p-4 bg-gray-900 rounded-lg border-l-4 border-cyan-400 text-gray-200 mb-2">
                  {lead.mensaje || "Sin mensaje adicional."}
                </div>

                {/* Fecha */}
                <div className="text-gray-500 text-xs text-right">
                  📅 {new Date(lead["creado en"]).toLocaleString()}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}