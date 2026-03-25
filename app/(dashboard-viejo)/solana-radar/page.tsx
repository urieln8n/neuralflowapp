"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Compass, BarChart3, 
  ArrowUpRight, ShieldAlert, Globe,
  Cpu, Terminal as TerminalIcon,
  Search, Filter
} from "lucide-react";

// Simulador de señales de Solana (Próximo paso: Conectar a n8n + RPC)
const generateMockSignal = () => {
  const tokens = ["SOL", "JUP", "PYTH", "BONK", "WIF", "RAY", "RENDER"];
  const types = ["WHALE_MOVE", "LIQUIDITY_ADD", "PUMP_DETECTED", "NEW_LISTING"];
  const dex = ["Raydium", "Jupiter", "Orca"];
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    token: tokens[Math.floor(Math.random() * tokens.length)],
    type: types[Math.floor(Math.random() * types.length)],
    amount: (Math.random() * 5000 + 100).toFixed(2),
    confidence: (Math.random() * 15 + 83).toFixed(1), 
    dex: dex[Math.floor(Math.random() * dex.length)],
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
  };
};

export default function SolanaRadarPage() {
  const [signals, setSignals] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Cargar señales iniciales
    setSignals(Array.from({ length: 4 }, generateMockSignal));

    const interval = setInterval(() => {
      const newSignal = generateMockSignal();
      setSignals((prev) => [newSignal, ...prev].slice(0, 6));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#020202] p-6 lg:p-10 space-y-10 italic selection:bg-purple-500/30">
      
      {/* HEADER TÁCTICO PURPLE_SOL */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white/5 pb-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-purple-500 animate-pulse" />
              <div className="w-1 h-4 bg-purple-500/60 animate-pulse delay-75" />
              <div className="w-1 h-4 bg-purple-500/30 animate-pulse delay-150" />
            </div>
            <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.5em]">Network_Live_Scanner</span>
          </div>
          <h1 className="text-8xl font-black text-white italic uppercase tracking-tighter leading-none">Radar_Sol</h1>
        </div>
        
        <div className="flex gap-4">
           <div className="bg-zinc-950/50 border border-purple-500/20 p-4 rounded-[25px] flex items-center gap-4 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Globe size={18} />
              </div>
              <div>
                <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Mainnet_Status</p>
                <p className="text-xs font-black text-emerald-400 uppercase italic underline decoration-emerald-500/30">Optimal_Performance</p>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SECCIÓN DE SEÑALES (75% del ancho) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex justify-between items-center px-4 mb-6">
            <div className="flex items-center gap-2 text-zinc-500">
              <TerminalIcon size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Incoming_Data_Stream</span>
            </div>
            <div className="flex gap-4">
               <button className="text-zinc-600 hover:text-white transition-colors"><Filter size={16} /></button>
               <button className="text-zinc-600 hover:text-white transition-colors"><Search size={16} /></button>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {signals.map((sig) => (
              <motion.div
                key={sig.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group p-1 bg-gradient-to-r from-purple-500/20 to-transparent rounded-[35px] hover:from-purple-500/40 transition-all"
              >
                <div className="bg-[#050505] p-6 rounded-[32px] flex flex-col md:flex-row justify-between items-center gap-6 border border-white/5">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:border-purple-500/50 transition-all">
                      <Zap size={20} className="group-hover:text-purple-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-black text-white italic">{sig.token}</h3>
                        <span className="text-[9px] px-2 py-0.5 bg-white/5 text-zinc-500 rounded-md font-bold uppercase">{sig.dex}</span>
                      </div>
                      <p className="text-[9px] font-black text-purple-500 uppercase tracking-[0.2em] mt-1">{sig.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="text-center">
                      <p className="text-[8px] font-black text-zinc-600 uppercase mb-1">Volumen_Tx</p>
                      <p className="text-xl font-black text-white italic">{sig.amount}<span className="text-[10px] ml-1 opacity-40">SOL</span></p>
                    </div>
                    <div className="text-center">
                      <p className="text-[8px] font-black text-zinc-600 uppercase mb-1">Confianza_IA</p>
                      <p className="text-xl font-black text-emerald-400 italic">{sig.confidence}%</p>
                    </div>
                    <div className="text-right hidden md:block">
                      <p className="text-[8px] font-black text-zinc-700 uppercase">{sig.time}</p>
                      <ArrowUpRight size={18} className="text-zinc-800 ml-auto mt-1" />
                    </div>
                  </div>

                  <button className="bg-white text-black px-6 py-3 rounded-2xl font-black uppercase text-[9px] tracking-widest hover:bg-purple-500 hover:text-white transition-all">
                    Ejecutar_Scan
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* PANEL DE CONTROL LATERAL (25% del ancho) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-8 rounded-[50px] bg-zinc-950 border border-white/5 space-y-6">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-2">
              <ShieldAlert size={14} className="text-purple-500" /> Rug_Pull_Guard
            </h4>
            <div className="space-y-4">
              {[
                { label: "Liquidez_Bloqueada", status: "Active" },
                { label: "Top_10_Holders", status: "Check" },
                { label: "Mint_Disabled", status: "Verified" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-black rounded-2xl border border-white/5">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase italic">{item.label}</span>
                  <span className="text-[8px] font-black text-emerald-500 uppercase">{item.status}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/5">
               <p className="text-[9px] text-zinc-600 uppercase leading-relaxed font-bold">
                 * El sistema descarta automáticamente tokens con menos de 20 SOL de liquidez inicial.
               </p>
            </div>
          </div>

          <div className="p-10 rounded-[50px] bg-gradient-to-br from-purple-600 to-indigo-900 text-white flex flex-col justify-between min-h-[250px] relative overflow-hidden group">
             <div className="relative z-10">
                <BarChart3 size={32} />
                <h3 className="text-2xl font-black uppercase mt-6 leading-none italic">Sovereign_Alpha</h3>
                <p className="text-[10px] font-black uppercase mt-3 opacity-70">
                  Integración directa con tu Llama 3 para análisis de sentimiento social.
                </p>
             </div>
             <button className="relative z-10 w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-2xl font-black uppercase text-[9px] transition-all">
               Configurar_Filtros_IA
             </button>
             <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
                <Zap size={150} strokeWidth={1} />
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}