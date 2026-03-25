"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  UserPlus, 
  Layers, 
  ArrowUpRight, 
  Copy,
  Zap,
  Globe
} from "lucide-react";

// Hook de economía para ver el impacto en el balance
import { useEconomy } from "@/hooks/useEconomy";

export default function EquipoPage() {
  const { tokens } = useEconomy();

  // Datos simulados de nivel institucional
  const stats = [
    { label: "Directos", value: "1,240", icon: Users, color: "text-cyan-500" },
    { label: "Volumen Red", value: "450,200 $FLOW", icon: TrendingUp, color: "text-purple-500" },
    { label: "Mi Margen", value: "16%", icon: Zap, color: "text-emerald-500" }, // Rango Builder
  ];

  const teamMembers = [
    { id: 1, name: "ID_8824...12", rank: "PROMOTER", margin: "13%", volume: "12,400", active: true },
    { id: 2, name: "ID_1029...99", rank: "STARTER", margin: "10%", volume: "2,100", active: true },
    { id: 3, name: "ID_5521...40", rank: "BUILDER", margin: "16%", volume: "45,000", active: false },
  ];

  return (
    <div className="p-10 space-y-10 bg-[#020202] min-h-screen italic">
      
      {/* HEADER E INVITACIÓN */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-10">
        <div>
          <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">Global_Network_Expansion</span>
          <h1 className="text-7xl font-black text-white italic tracking-tighter uppercase">Mi_Equipo</h1>
        </div>
        
        <div className="w-full md:w-auto">
          <p className="text-[9px] font-black text-zinc-600 uppercase mb-2 ml-1">Enlace de Invitación Único</p>
          <div className="flex items-center bg-zinc-950 border border-white/10 p-2 rounded-2xl">
            <code className="text-[10px] text-cyan-500 font-mono px-4">neuralflow.io/ref=id_2881</code>
            <button className="p-3 bg-white text-black rounded-xl hover:bg-cyan-500 hover:text-white transition-all">
              <Copy size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* STATS DE RED */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="p-8 rounded-[40px] bg-zinc-900/30 border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-black text-white mt-1 italic tracking-tighter">{stat.value}</p>
            </div>
            <div className={`p-4 rounded-2xl bg-white/5 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* TABLA DE EQUIPO (BLINDADA) */}
      <div className="bg-zinc-950 border border-white/5 rounded-[50px] overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Layers className="text-zinc-500" size={18} />
            <h2 className="text-sm font-black text-white uppercase italic tracking-widest">Desglose_de_Red</h2>
          </div>
          <span className="text-[10px] font-black text-zinc-500 uppercase">Total_Partners: {teamMembers.length}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/[0.02] text-[9px] font-black text-zinc-500 uppercase tracking-widest">
              <tr>
                <th className="px-8 py-5">Socio_ID</th>
                <th className="px-8 py-5">Rango</th>
                <th className="px-8 py-5">Margen</th>
                <th className="px-8 py-5">Volumen_Mensual</th>
                <th className="px-8 py-5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {teamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-white/[0.01] transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] font-black text-zinc-500">
                        {member.name.slice(3,5)}
                      </div>
                      <span className="text-xs font-bold text-white tracking-tight">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[10px] font-black text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                      {member.rank}
                    </span>
                  </td>
                  <td className="px-8 py-6 font-mono text-xs text-zinc-400">{member.margin}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-white italic">{member.volume}</span>
                      <span className="text-[9px] font-bold text-zinc-600">$FLOW</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${member.active ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                      <span className="text-[9px] font-black text-zinc-500 uppercase italic">
                        {member.active ? 'Operational' : 'Offline'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MARGE DIFFÉRENTIELLE EXPLAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-[40px] bg-emerald-500/5 border border-emerald-500/10 flex gap-6 items-center">
          <div className="p-4 bg-emerald-500/20 rounded-3xl text-emerald-500">
            <ArrowUpRight size={28} />
          </div>
          <div>
            <h4 className="text-sm font-black text-white uppercase italic mb-1">Tu Diferencial Actual</h4>
            <p className="text-[11px] text-zinc-500 leading-relaxed italic">
              Estás ganando un <span className="text-emerald-500 font-bold">6% adicional</span> sobre el volumen de tus socios STARTER (Tú 16% - Ellos 10%).
            </p>
          </div>
        </div>
        
        <div className="p-8 rounded-[40px] bg-cyan-500/5 border border-cyan-500/10 flex gap-6 items-center">
          <div className="p-4 bg-cyan-500/20 rounded-3xl text-cyan-500">
            <Globe size={28} />
          </div>
          <div>
            <h4 className="text-sm font-black text-white uppercase italic mb-1">Alcance Global</h4>
            <p className="text-[11px] text-zinc-500 leading-relaxed italic">
              Tu red se extiende por <span className="text-cyan-500 font-bold">12 países</span>. El protocolo NeuralFlow liquida comisiones cada 24h.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}