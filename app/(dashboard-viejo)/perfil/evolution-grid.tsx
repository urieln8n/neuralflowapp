"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, Shield, Award, Flame, 
  Cpu, Target, Fingerprint, Activity,
  ChevronRight, Star
} from "lucide-react";

// Mapeo de Logros con Meta-Datos
const ACHIEVEMENTS = [
  { 
    id: 1, 
    name: "Arquitecto_Prompt", 
    icon: <Cpu size={20} />, 
    level: "LVL 3", 
    color: "text-cyan-400", 
    glow: "shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    desc: "Inferencia de IA Optimizada" 
  },
  { 
    id: 2, 
    name: "Minería_Sincro", 
    icon: <Activity size={20} />, 
    level: "MAX", 
    color: "text-orange-500", 
    glow: "shadow-[0_0_15px_rgba(249,115,22,0.2)]",
    desc: "Uptime de Nodo: 99.9%" 
  },
  { 
    id: 3, 
    name: "Guardián_Vault", 
    icon: <Shield size={20} />, 
    level: "LVL 1", 
    color: "text-emerald-500", 
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.2)]",
    desc: "Cifrado de Capa 7 Activo" 
  },
  { 
    id: 4, 
    name: "Líder_100M", 
    icon: <Star size={20} />, 
    level: "Pte", 
    color: "text-purple-500", 
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.2)]",
    desc: "Expansión de Red en Curso" 
  },
];

export default function NeuralEvolutionGrid() {
  return (
    <div className="space-y-10 italic">
      
      {/* HEADER DE SUB-SECCIÓN */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
            <div className="w-1 h-4 bg-cyan-500 rounded-full animate-pulse" />
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.5em]">Protocol_Achievements</h3>
        </div>
        <div className="flex items-center gap-4">
            <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Total_XP_Sync</span>
            <span className="text-sm font-black text-white tabular-nums tracking-tighter">14,200 <span className="text-[10px] text-cyan-500 italic">XP</span></span>
        </div>
      </div>

      {/* GRID DE MEDALLAS DINÁMICAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ACHIEVEMENTS.map((ach) => (
          <motion.div 
            key={ach.id}
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.02)" }}
            className={`p-8 rounded-[40px] bg-zinc-950 border border-white/5 relative overflow-hidden group transition-all duration-500 ${ach.glow}`}
          >
            {/* Fondo decorativo de ID */}
            <div className="absolute -top-4 -right-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity text-white">
                <Fingerprint size={100} />
            </div>

            <div className={`mb-6 ${ach.color} transition-transform duration-500 group-hover:scale-110`}>
              {ach.icon}
            </div>
            
            <div className="space-y-1 mb-6">
                <p className="text-sm font-black text-white uppercase tracking-tighter italic">{ach.name}</p>
                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest leading-none">{ach.desc}</p>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <span className={`text-[9px] font-black px-3 py-1 rounded-lg border border-current ${ach.color} opacity-80 bg-current/5`}>
                {ach.level}
              </span>
              <div className="flex gap-1">
                {[1, 2, 3].map(s => (
                    <div key={s} className={`w-1 h-1 rounded-full ${s <= (ach.id === 2 ? 3 : ach.id) ? 'bg-cyan-500 shadow-[0_0_5px_#06b6d4]' : 'bg-zinc-800'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* STATUS DE ASCENSO */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-10 rounded-[55px] bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border border-white/5 relative overflow-hidden group cursor-pointer"
      >
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
                <Zap size={12} className="text-yellow-500 animate-pulse" />
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em]">Next_Evolution_Phase</span>
            </div>
            <h4 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">Neural_Commander</h4>
            <p className="text-[10px] text-zinc-600 font-bold uppercase italic tracking-[0.2em]">Acceso desbloqueado al 85% de los nodos de red.</p>
          </div>

          <div className="flex-1 max-w-lg">
            <div className="flex justify-between text-[10px] font-black mb-3 uppercase italic tracking-widest">
              <span className="text-zinc-500">Status_Progress</span>
              <span className="text-cyan-500 animate-pulse">1,500 XP LEFT</span>
            </div>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/10 shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 2, ease: "circOut" }}
                className="h-full bg-gradient-to-r from-cyan-600 via-purple-600 to-emerald-500 rounded-full relative"
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite] skew-x-12" />
              </motion.div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-xl">
                <ChevronRight size={28} />
            </div>
          </div>
        </div>

        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#a855f708_0%,transparent_40%)]" />
      </motion.div>
    </div>
  );
}