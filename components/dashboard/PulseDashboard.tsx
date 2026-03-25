"use client";
import React from 'react';
import { motion } from 'framer-motion';
// SOLUCIÓN DEFINITIVA ERROR LÍNEA 109
import { Cpu, Activity, TrendingUp, Zap, ArrowUpRight } from 'lucide-react';

export default function PulseDashboard() {
  return (
    <div className="relative min-h-[400px] p-12 bg-[#050505] rounded-[60px] border border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
      {/* Icono de Fondo Institucional */}
      <div className="absolute top-10 right-10 opacity-[0.03] text-cyan-500 scale-[2.5] pointer-events-none">
        <Cpu size={140} />
      </div>
      
      <div className="relative z-10 space-y-10">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-500 font-black uppercase tracking-[0.4em] text-[10px] italic">
                Network_Status // Stable
              </span>
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white">Bitcoin</h2>
          </div>
          <div className="text-right">
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Market_Cap</p>
            <p className="text-xl font-mono font-bold text-white tracking-tighter">$1.2T</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Price_Index', value: '$68,432.12', color: 'text-emerald-400', icon: TrendingUp },
            { label: 'Neural_Confidence', value: '98.2%', color: 'text-cyan-500', icon: Zap },
            { label: 'Liquidity_Pool', value: 'High_Cap', color: 'text-zinc-400', icon: Activity },
          ].map((stat, i) => (stat && (
            <div key={i} className="p-6 rounded-[32px] bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <stat.icon size={16} className={`${stat.color} mb-4`} />
              <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">{stat.label}</p>
              <p className={`text-2xl font-black italic tracking-tighter ${stat.color}`}>{stat.value}</p>
            </div>
          )))}
        </div>
      </div>
    </div>
  );
}