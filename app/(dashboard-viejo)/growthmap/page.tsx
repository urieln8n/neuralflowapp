"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Flag, Rocket, Users, Target, Trophy, Star, 
  ChevronRight, Zap, Cpu 
} from "lucide-react";

// --- ESTRUCTURA DE HITOS (CORREGIDA PARA TYPESCRIPT) ---
const milestones = [
  {
    phase: "Fase_01",
    title: "Ignición_Neural",
    desc: "Lanzamiento del motor Llama 3 y primer grupo de 10,000 socios fundadores.",
    status: "Completado",
    icon: Rocket, // Referencia al componente, no JSX
    color: "bg-emerald-500",
    iconColor: "text-white"
  },
  {
    phase: "Fase_02",
    title: "Expansión_Solana",
    desc: "Integración total del Radar de señales y apertura de la Bóveda Institucional.",
    status: "En_Progreso",
    icon: Zap,
    color: "bg-cyan-500",
    iconColor: "text-black"
  },
  {
    phase: "Fase_03",
    title: "Dominio_Social",
    desc: "Despliegue de la Red de Referidos Global. Objetivo: 1 Millón de usuarios activos.",
    status: "Pendiente",
    icon: Users,
    color: "bg-zinc-800",
    iconColor: "text-zinc-500"
  },
  {
    phase: "Fase_04",
    title: "Soberanía_Total",
    desc: "Ecosistema autónomo. 100 Millones de usuarios operando bajo el Neural Engine.",
    status: "Pendiente",
    icon: Trophy,
    color: "bg-zinc-800",
    iconColor: "text-zinc-500"
  }
];

export default function GrowthMapPage() {
  return (
    <div className="min-h-screen bg-[#020202] p-6 lg:p-10 space-y-12 italic selection:bg-cyan-500/30">
      
      {/* HEADER ESTRATÉGICO */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-zinc-900 rounded-lg text-cyan-500">
            <Target size={20} />
          </div>
          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.5em]">Global_Expansion_Plan</span>
        </div>
        <h1 className="text-8xl font-black text-white italic uppercase tracking-tighter leading-none">Growth_Map</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LÍNEA DE TIEMPO VERTICAL */}
        <div className="lg:col-span-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 via-zinc-800 to-transparent" />

          <div className="space-y-12 relative z-10">
            {milestones.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-10 group"
              >
                <div className={`w-16 h-16 shrink-0 rounded-[22px] ${m.color} flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)] group-hover:scale-110 transition-transform`}>
                  {/* AQUÍ RENDERIZAMOS EL ICONO CORREGIDO */}
                  <m.icon size={24} className={m.iconColor} />
                </div>
                
                <div className="pt-2 space-y-3 pb-12 border-b border-white/5 w-full">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">{m.phase}</span>
                    <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase ${m.status === 'Completado' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-900 text-zinc-500'}`}>
                      {m.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase italic leading-none">{m.title}</h3>
                  <p className="text-sm text-zinc-500 font-bold uppercase leading-relaxed max-w-xl">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INFO LATERAL: TU PROGRESO */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-10 rounded-[50px] bg-zinc-950 border border-white/5 space-y-8">
            <div className="flex items-center gap-3">
              <Star className="text-yellow-500" size={18} />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Tu_Contribución</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-[8px] font-black text-zinc-600 uppercase mb-2">Puntos_de_Impacto</p>
                <p className="text-4xl font-black text-white italic">2,450 <span className="text-xs text-zinc-700">PTS</span></p>
              </div>
              <div>
                <p className="text-[8px] font-black text-zinc-600 uppercase mb-2">Rango_Soberano</p>
                <p className="text-xl font-black text-cyan-500 italic uppercase underline decoration-cyan-500/30 underline-offset-4">Explorador_Alpha</p>
              </div>
            </div>

            <button className="w-full py-5 bg-white text-black rounded-[25px] font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-cyan-500 hover:text-white transition-all">
              Aumentar_Impacto <ChevronRight size={14} />
            </button>
          </div>

          <div className="p-10 rounded-[50px] bg-gradient-to-br from-zinc-900 to-black border border-white/10">
             <Users className="text-zinc-500 mb-6" size={32} />
             <h4 className="text-sm font-black text-white uppercase italic">Red_Global</h4>
             <p className="text-[10px] text-zinc-500 uppercase mt-2 leading-relaxed font-bold">
               Estamos al 14% de la meta de la Fase 02. Cada nuevo socio fortalece el Neural Engine.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}