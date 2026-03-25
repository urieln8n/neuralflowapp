"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Activity, PieChart, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';

const MARKET_SIGNALS = [
  { pair: "FLOW/USDT", price: "0.2445", change: "+12.4%", status: "BULLISH", strength: 85 },
  { pair: "BTC/USDT", price: "64,210", change: "-1.2%", status: "NEUTRAL", strength: 45 },
  { pair: "SOL/USDT", price: "145.30", change: "+5.8%", status: "BULLISH", strength: 72 },
];

export default function AnalizadorPage() {
  return (
    <div className="p-10 space-y-10 italic pb-20">
      {/* HEADER */}
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <div>
          <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">Market_Intelligence_Unit</span>
          <h1 className="text-6xl font-black text-white italic tracking-tighter uppercase">Analizador_Alpha</h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 text-right">
            <p className="text-[8px] font-black text-zinc-600 uppercase">Global_Volume_24h</p>
            <p className="text-xl font-black text-white">$1.2B <span className="text-emerald-500 text-[10px]">+4%</span></p>
          </div>
        </div>
      </div>

      {/* MONITOR DE SEÑALES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {MARKET_SIGNALS.map((signal, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[40px] bg-zinc-950 border border-white/5 group"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter">{signal.pair}</h3>
              <div className={`px-3 py-1 rounded-full text-[8px] font-black ${signal.status === 'BULLISH' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-800 text-zinc-400'}`}>
                {signal.status}
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-4xl font-black text-white italic tracking-tighter">${signal.price}</p>
              <div className="flex items-center gap-2">
                {signal.change.startsWith('+') ? <ArrowUpRight className="text-emerald-500" size={16}/> : <ArrowDownRight className="text-red-500" size={16}/>}
                <span className={`text-xs font-bold ${signal.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>{signal.change}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex justify-between text-[8px] font-black text-zinc-600 uppercase mb-2">
                <span>Signal_Strength</span>
                <span>{signal.strength}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${signal.strength}%` }}
                  className={`h-full ${signal.strength > 70 ? 'bg-cyan-500' : 'bg-zinc-600'}`} 
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ÁREA DE GRÁFICOS SIMULADOS */}
      <div className="p-10 rounded-[50px] bg-zinc-950 border border-white/5 h-80 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="text-center z-10">
            <BarChart3 size={48} className="text-zinc-800 mx-auto mb-4" />
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">Engine_Core_Loading_Visualizer...</p>
        </div>
      </div>
    </div>
  );
}