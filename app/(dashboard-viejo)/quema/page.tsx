"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, TrendingDown, History, Info, ExternalLink, ShieldAlert, BarChart3 } from 'lucide-react';

// Simulación de datos de quema en tiempo real
const RECENT_BURNS = [
  { id: '1', amount: '45,200', value: '1,240', hash: '0x74a...f21', time: '2 min ago' },
  { id: '2', amount: '12,800', value: '350', hash: '0x92b...e88', time: '14 min ago' },
  { id: '3', amount: '110,000', value: '3,100', hash: '0x11c...a44', time: '1 hour ago' },
];

export default function QuemaPage() {
  const [totalBurned, setTotalBurned] = useState(1420500);

  // Efecto visual de contador subiendo
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalBurned(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10 space-y-12 italic pb-20">
      
      {/* HEADER: EL INFERNÁCULO */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-orange-500/20 pb-10 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Flame size={16} className="text-orange-500 animate-pulse" />
            <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.5em]">Deflationary_Execution_Protocol</span>
          </div>
          <h1 className="text-7xl font-black text-white italic tracking-tighter uppercase leading-none">Burn_Dash</h1>
        </div>

        <div className="bg-orange-500/5 border border-orange-500/20 p-6 rounded-[30px] text-right">
          <p className="text-[8px] font-black text-orange-300 uppercase mb-1">Current_Circulating_Supply</p>
          <p className="text-2xl font-black text-white italic tracking-tighter">84,579,211 <span className="text-zinc-600 text-xs">$FLOW</span></p>
        </div>
      </div>

      {/* MÉTRICAS DE IMPACTO CRÍTICO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CONTADOR MAESTRO */}
        <div className="lg:col-span-2 p-12 rounded-[60px] bg-zinc-950 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 blur-[120px] rounded-full -z-10 group-hover:bg-orange-600/20 transition-all duration-1000" />
          
          <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">Total_Tokens_Incinerated</p>
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-[8vw] font-black text-white italic leading-none tracking-tighter tabular-nums">
              {totalBurned.toLocaleString()}
            </span>
            <span className="text-2xl font-black text-orange-500 uppercase tracking-widest">$FLOW</span>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
            <div>
              <p className="text-[8px] font-black text-zinc-600 uppercase mb-1 tracking-widest">Market_Value</p>
              <p className="text-xl font-black text-white italic">$39,120 <span className="text-[10px] text-zinc-700">USD</span></p>
            </div>
            <div>
              <p className="text-[8px] font-black text-zinc-600 uppercase mb-1 tracking-widest">Supply_Burned</p>
              <p className="text-xl font-black text-orange-500 italic">1.64%</p>
            </div>
            <div>
              <p className="text-[8px] font-black text-zinc-600 uppercase mb-1 tracking-widest">Next_Batch</p>
              <p className="text-xl font-black text-zinc-400 italic">22:14:05</p>
            </div>
          </div>
        </div>

        {/* INFO DE MECANISMO */}
        <div className="p-10 rounded-[50px] bg-orange-600 text-black flex flex-col justify-between relative overflow-hidden group shadow-[0_20px_50px_rgba(234,88,12,0.2)]">
          <ShieldAlert size={140} className="absolute -bottom-10 -right-10 text-black/10 group-hover:rotate-12 transition-transform duration-700" />
          <div>
            <h4 className="text-2xl font-black uppercase italic leading-tight mb-4 tracking-tighter">Escasez_Programada</h4>
            <p className="text-[11px] font-bold uppercase leading-relaxed opacity-80">
              Cada compra de minero activa una recompra automática (Buyback) en el mercado y su posterior eliminación definitiva del suministro. No hay vuelta atrás.
            </p>
          </div>
          <div className="pt-8 flex items-center gap-2">
            <div className="w-2 h-2 bg-black rounded-full animate-ping" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Auto_Burn_v2.1_Enabled</span>
          </div>
        </div>
      </div>

      {/* REGISTRO DE EJECUCIONES (HISTORIAL) */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 px-4">
          <History size={16} className="text-zinc-600" />
          <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Historial_de_Incineración</h3>
        </div>

        <div className="space-y-2">
          {RECENT_BURNS.map((burn) => (
            <motion.div 
              key={burn.id}
              whileHover={{ x: 10 }}
              className="p-6 rounded-[30px] bg-zinc-950 border border-white/5 flex flex-wrap items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-6">
                <div className="p-3 bg-orange-500/10 rounded-2xl">
                  <Flame size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-xs font-black text-white italic uppercase tracking-tighter">-{burn.amount} $FLOW</p>
                  <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">{burn.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div className="hidden md:block">
                  <p className="text-[8px] font-black text-zinc-700 uppercase mb-1">Valor_Destruido</p>
                  <p className="text-xs font-black text-emerald-500 italic">${burn.value} USDT</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-[8px] font-black text-zinc-700 uppercase mb-1 tracking-widest">Tx_Hash</p>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 group-hover:text-cyan-500 transition-colors">
                    {burn.hash}
                    <ExternalLink size={10} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER: ADVERTENCIA DE MERCADO */}
      <div className="p-8 rounded-[40px] bg-white/5 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
        <div className="flex items-center gap-4">
          <BarChart3 className="text-zinc-500" size={24} />
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic leading-relaxed">
            La quema de tokens reduce el suministro total, aumentando la escasez relativa. El valor del mercado es volátil y depende de la demanda externa.
          </p>
        </div>
        <button className="px-6 py-3 bg-zinc-900 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-white hover:bg-white hover:text-black transition-all">
          Ver_Smart_Contract
        </button>
      </div>

    </div>
  );
}