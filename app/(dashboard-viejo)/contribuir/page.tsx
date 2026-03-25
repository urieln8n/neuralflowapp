"use client";

import React from "react";
import { Youtube, Music, Play, Sparkles, Zap } from "lucide-react";
import { useWallet } from "@/context/Web3Context"; // Asegúrate de que la ruta sea correcta

const plataformas = [
  { id: "yt", name: "YouTube", icon: Youtube, color: "text-red-500", reward: 50, desc: "Entrenamiento de modelos de visión avanzada." },
  { id: "tk", name: "TikTok", icon: Music, color: "text-pink-500", reward: 75, desc: "Análisis de tendencias y flujos virales." },
];

export default function ContribuirPage() {
  const { addFlow, balance, formatBalance } = useWallet();

  return (
    <div className="max-w-5xl mx-auto space-y-12 p-6">
      <header className="flex justify-between items-end border-b border-white/5 pb-10">
        <div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">
            Entrenar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Cerebro IA</span>
          </h1>
          <p className="text-zinc-500 text-xs mt-4 font-bold uppercase tracking-[0.3em]">
            Sincronización de nodos de datos activos
          </p>
        </div>
        <div className="text-right bg-zinc-950 p-6 rounded-[30px] border border-white/5">
          <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1">Tu_Flow_Actual</p>
          <p className="text-2xl font-black italic text-purple-500">{formatBalance(balance)} <span className="text-[10px]">NW</span></p>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {plataformas.map((Plat) => (
          <div key={Plat.id} className="bg-zinc-950 border border-white/5 p-10 rounded-[45px] hover:border-purple-500/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Plat.icon size={80} />
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
              <Plat.icon className={Plat.color} size={28} />
            </div>
            
            <h3 className="text-2xl font-black text-white uppercase italic mb-3">{Plat.name}</h3>
            <p className="text-zinc-500 text-xs mb-10 font-bold uppercase leading-relaxed tracking-wider">
              {Plat.desc}
            </p>
            
            <button 
              onClick={() => addFlow(Plat.reward)}
              className="w-full bg-white text-black py-6 rounded-[25px] font-black text-[11px] uppercase tracking-[0.2em] hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              <Zap size={16} fill="currentColor" /> Iniciar Inyección (+{Plat.reward})
            </button>
          </div>
        ))}
      </div>

      <footer className="bg-purple-500/5 border border-purple-500/10 p-8 rounded-[40px] flex items-center gap-6">
        <Sparkles className="text-purple-500" size={32} />
        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-loose">
          Cada sincronización aumenta la capacidad de respuesta de tu <span className="text-white">Agente Soberano</span> en un 0.02%. Los datos son procesados localmente mediante el núcleo Ollama.
        </p>
      </footer>
    </div>
  );
}