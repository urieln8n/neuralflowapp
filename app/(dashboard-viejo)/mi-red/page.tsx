"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Share2, Network, Zap, 
  TrendingUp, Globe, Copy, Check 
} from "lucide-react";

export default function NeuralNetworkPage() {
  const [copied, setCopied] = React.useState(false);
  const inviteCode = "NEURAL-777-X";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-10 space-y-12 bg-[#020202] min-h-screen italic">
      
      {/* HEADER DE EXPANSIÓN */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
        <div>
          <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.5em]">Protocolo_Expansion_Global</span>
          <h1 className="text-6xl font-black text-white italic uppercase tracking-tighter leading-none mt-2">Mi_Red_Neural</h1>
        </div>
        <div className="bg-white/5 p-4 rounded-3xl border border-white/10 flex items-center gap-6">
          <div>
            <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Tu_Código_de_Nodo</p>
            <p className="text-lg font-black text-white tracking-tighter">{inviteCode}</p>
          </div>
          <button 
            onClick={copyToClipboard}
            className={`p-4 rounded-2xl transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-white text-black hover:bg-cyan-500 hover:text-white'}`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>

      {/* MÉTRICAS DE IMPACTO COLECTIVO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Nodos_Directos", val: "142", icon: Users, color: "text-cyan-400" },
          { label: "Volumen_de_Red", val: "12,405 $FLOW", icon: TrendingUp, color: "text-purple-400" },
          { label: "Alcance_Global", val: "12 Países", icon: Globe, color: "text-emerald-400" },
        ].map((stat, i) => (
          <div key={i} className="p-8 rounded-[40px] bg-zinc-950 border border-white/5">
            <stat.icon size={20} className={`${stat.color} mb-4`} />
            <p className="text-3xl font-black text-white italic tracking-tighter">{stat.val}</p>
            <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* VISUALIZACIÓN DE NIVELES (DOPAMINA DE ESCALA) */}
      <div className="p-10 rounded-[60px] bg-gradient-to-br from-zinc-900 to-black border border-white/10 relative overflow-hidden">
        <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-12 flex items-center gap-3">
          <Network size={16} className="text-cyan-500" /> Jerarquía_de_Bonificación
        </h3>
        
        <div className="space-y-8 relative z-10">
          {[
            { level: "Lvl 1", share: "10%", desc: "Afiliados Directos", active: true },
            { level: "Lvl 2", share: "5%", desc: "Red Secundaria", active: true },
            { level: "Lvl 3", share: "2%", desc: "Expansión Profunda", active: false },
          ].map((lvl, i) => (
            <div key={i} className={`flex items-center gap-6 ${!lvl.active && 'opacity-30'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black italic border ${lvl.active ? 'border-cyan-500 text-cyan-500 bg-cyan-500/5' : 'border-zinc-800 text-zinc-800'}`}>
                {lvl.level}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-black text-white uppercase italic">{lvl.desc}</p>
                  <span className="text-xs font-black text-white">{lvl.share}</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: lvl.active ? "100%" : "0%" }}
                    className="h-full bg-cyan-500"
                  />
                </div>
              </div>
              {!lvl.active && <span className="text-[8px] font-black text-zinc-700 uppercase">Bloqueado</span>}
            </div>
          ))}
        </div>
        
        {/* DECORACIÓN FONDO */}
        <div className="absolute -bottom-20 -right-20 opacity-5">
          <Share2 size={300} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}