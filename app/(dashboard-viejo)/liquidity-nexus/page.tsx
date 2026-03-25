"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coins, BrainCircuit, Zap, Flame, 
  ArrowUpRight, TrendingUp, ShieldCheck, 
  BarChart3, Wallet
} from 'lucide-react';

export default function LiquidityNexusPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white p-6 lg:p-12 italic relative overflow-hidden">
      
      {/* FONDO ATMOSFÉRICO: COLISIÓN DE PODERES */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-600/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-purple-600/10 blur-[150px] rounded-full" />

      {/* HEADER TIPO BANCO SUIZO DEL FUTURO */}
      <header className="relative z-10 mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            <Wallet size={24} className="text-white" />
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-white/20 to-transparent" />
          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.5em]">Global_Liquidity_Vault</span>
        </div>
        <h1 className="text-6xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
          Nexo_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500">Capital.</span>
        </h1>
        <p className="max-w-2xl text-zinc-500 text-xs font-black uppercase tracking-widest leading-relaxed">
          Sincronización de activos en tiempo real. Aquí, el flujo de <span className="text-cyan-500">$FLOW</span> se transmuta en el capital institucional de <span className="text-purple-500">$NEURAL</span>.
        </p>
      </header>

      {/* GRID PRINCIPAL DE CAPITAL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 mb-20">
        
        {/* $FLOW: EL MOTOR DE LIQUIDEZ */}
        <div className="group p-10 rounded-[60px] bg-zinc-950 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-700 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.05)]">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap size={140} className="text-cyan-500" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-16">
              <span className="px-4 py-1 bg-cyan-500/10 text-cyan-500 rounded-full text-[8px] font-black uppercase tracking-widest border border-cyan-500/20">Activo_Circulante</span>
              <TrendingUp size={20} className="text-cyan-500" />
            </div>
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-4 italic italic">Balance_Total_Flow</p>
            <h2 className="text-7xl font-black italic text-white tracking-tighter mb-8 leading-none">
              1,250,000.<span className="text-cyan-500 text-3xl">00</span>
            </h2>
            <div className="flex gap-4">
              <button className="flex-1 py-5 bg-cyan-500 text-black rounded-3xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">Inyectar_Capital</button>
              <button className="px-8 py-5 border border-white/5 rounded-3xl hover:bg-white/5 transition-all"><ArrowUpRight size={18}/></button>
            </div>
          </div>
        </div>

        {/* $NEURAL: EL CAPITAL DE PODER (PÚRPURA AGRESIVO) */}
        <div className="group p-10 rounded-[60px] bg-zinc-950 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-700 relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)]">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
            <BrainCircuit size={140} className="text-purple-500" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-16">
              <span className="px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-[8px] font-black uppercase tracking-widest border border-purple-500/30">Capital_Gobernanza</span>
              <ShieldCheck size={20} className="text-purple-500" />
            </div>
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-4 italic">Bóveda_Neural_Sovereign</p>
            <h2 className="text-7xl font-black italic text-white tracking-tighter mb-8 leading-none">
              45,800.<span className="text-purple-500 text-3xl">89</span>
            </h2>
            <div className="flex gap-4">
              <button className="flex-1 py-5 bg-purple-600 text-white rounded-3xl font-black uppercase text-[10px] tracking-widest hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all">Ejecutar_Staking</button>
              <button className="px-8 py-5 border border-purple-500/20 rounded-3xl bg-purple-500/5 text-purple-500"><Coins size={18}/></button>
            </div>
          </div>
        </div>

      </div>

      {/* SECCIÓN INFERIOR: MÉTRICAS DE MIL MILLONES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          { label: 'Market_Cap_Live', value: '$84.2M', icon: <BarChart3 size={14}/>, color: 'text-white' },
          { label: 'Burned_Total', value: '1.2M $FLOW', icon: <Flame size={14}/>, color: 'text-rose-500' },
          { label: 'Staking_APY', value: '420.5%', icon: <Zap size={14}/>, color: 'text-cyan-500' },
        ].map((stat, i) => (
          <div key={i} className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-xl flex items-center justify-between">
            <div>
              <p className="text-[8px] font-black text-zinc-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                {stat.icon} {stat.label}
              </p>
              <p className={`text-3xl font-black italic tracking-tighter ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}