"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Lock, CheckCircle2, Clock, BarChart } from "lucide-react";

const CATEGORY_DATA: any = {
  ia: { title: "Inteligencia_Artificial", color: "text-cyan-500", border: "border-cyan-500/20" },
  web3: { title: "Protocolos_Web3", color: "text-emerald-500", border: "border-emerald-500/20" },
  red: { title: "Estrategia_de_Expansión", color: "text-purple-500", border: "border-purple-500/20" },
};

const MODULES = [
  { id: 1, title: "Introducción a Redes Neuronales", duration: "45min", status: "completed" },
  { id: 2, title: "Optimización de Prompts Avanzados", duration: "1h 10min", status: "current" },
  { id: 3, title: "Integración de Agentes Autónomos", duration: "55min", status: "locked" },
];

export default function CategoriaPage() {
  const params = useParams();
  const router = useRouter();
  const cat = (params.categoria as string) || "ia";
  const data = CATEGORY_DATA[cat] || CATEGORY_DATA.ia;

  return (
    <div className="p-10 space-y-10 italic min-h-screen pb-32">
      
      {/* BOTÓN VOLVER & TÍTULO */}
      <div className="flex items-center gap-6">
        <button 
          onClick={() => router.back()}
          className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <span className={`text-[10px] font-black uppercase tracking-[0.5em] ${data.color}`}>Módulo_Especializado</span>
          <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">{data.title}</h1>
        </div>
      </div>

      {/* LISTA DE LECCIONES (EL PASO A PASO) */}
      <div className="max-w-4xl space-y-4">
        {MODULES.map((mod, i) => (
          <motion.div 
            key={mod.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 rounded-[35px] bg-zinc-950 border ${mod.status === 'current' ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'border-white/5'} flex items-center justify-between group`}
          >
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm
                ${mod.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' : 
                  mod.status === 'current' ? 'bg-cyan-500 text-black animate-pulse' : 'bg-zinc-900 text-zinc-700'}`}>
                {mod.status === 'completed' ? <CheckCircle2 size={20} /> : mod.id}
              </div>
              <div>
                <h4 className={`text-xl font-black uppercase tracking-tighter ${mod.status === 'locked' ? 'text-zinc-700' : 'text-white'}`}>
                    {mod.title}
                </h4>
                <div className="flex items-center gap-4 mt-1">
                    <div className="flex items-center gap-1 text-zinc-600 text-[9px] font-bold uppercase">
                        <Clock size={10} /> {mod.duration}
                    </div>
                    <div className="flex items-center gap-1 text-zinc-600 text-[9px] font-bold uppercase">
                        <BarChart size={10} /> +50 XP
                    </div>
                </div>
              </div>
            </div>

            <button className={`p-4 rounded-xl transition-all
                ${mod.status === 'locked' ? 'text-zinc-800' : 'bg-white/5 text-white hover:bg-white hover:text-black'}`}>
              {mod.status === 'locked' ? <Lock size={18} /> : <Play size={18} fill="currentColor" />}
            </button>
          </motion.div>
        ))}
      </div>

      {/* FOOTER DE PROGRESO DE CATEGORÍA */}
      <div className={`p-10 rounded-[50px] bg-zinc-950 border ${data.border} flex flex-col md:flex-row items-center justify-between gap-8`}>
        <div className="space-y-1 text-center md:text-left">
            <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em]">Estado_de_Especialización</p>
            <p className="text-2xl font-black text-white italic uppercase tracking-tighter">Casi_Maestro en {data.title}</p>
        </div>
        <div className="flex-1 max-w-xs h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 w-[65%]" />
        </div>
        <button className="px-8 py-4 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-cyan-500 hover:text-white transition-all">
            Examen_Certificación
        </button>
      </div>
    </div>
  );
}