"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Lock, History, Coins, Zap, 
  BrainCircuit, Fingerprint, ArrowUpRight, ArrowDownLeft 
} from "lucide-react";

export default function VaultPage() {
  const [balance] = useState(19188.00);

  return (
    <div className="min-h-screen bg-[#020202] p-6 lg:p-12 space-y-12 italic relative overflow-hidden">
      {/* GLOWS DE FONDO */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/5 blur-[150px] rounded-full" />

      <header className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white/5 pb-12">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <ShieldCheck size={16} className="text-purple-500" />
            </div>
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.6em]">Neural_Vault_Sovereign</span>
          </div>
          <h1 className="text-7xl lg:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
            La_<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-600">Bóveda.</span>
          </h1>
        </div>
        <div className="px-8 py-4 bg-zinc-950 border border-purple-500/20 rounded-[20px] flex items-center gap-4 backdrop-blur-xl">
          <Fingerprint size={20} className="text-purple-500 animate-pulse" />
          <span className="text-[9px] font-black text-white uppercase tracking-widest">Bio_Auth_Verified</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
        {/* PANEL PRINCIPAL */}
        <div className="lg:col-span-8 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="relative p-12 lg:p-16 rounded-[60px] bg-zinc-950 border border-white/5 overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12">
              <div>
                {/* CORRECCIÓN DE HIDRATACIÓN AQUÍ */}
                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] mb-6 flex items-center gap-2 italic">
                  <span className="w-8 h-[1px] bg-purple-500 block" /> Capital_Total_Neural
                </div>
                <h2 className="text-8xl lg:text-[9rem] font-black text-white italic tracking-tighter leading-none tabular-nums">
                  ${balance.toLocaleString()}<span className="text-3xl text-purple-500 opacity-80">.00</span>
                </h2>
              </div>
              <div className="flex flex-col gap-4 w-full xl:w-72">
                <button className="w-full py-6 bg-purple-600 text-white rounded-[25px] font-black uppercase text-[11px] tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)]">Retirar_Fondos</button>
                <button className="w-full py-6 bg-zinc-900 text-white border border-white/10 rounded-[25px] font-black uppercase text-[11px] tracking-widest hover:border-purple-500/50 transition-all">Depositar</button>
              </div>
            </div>
          </motion.div>

          {/* LISTA DE ACTIVOS */}
          <div className="p-12 rounded-[60px] bg-zinc-950 border border-white/5 shadow-2xl">
            <h3 className="text-[11px] font-black text-white uppercase tracking-[0.5em] mb-12 flex items-center gap-4 italic">
              <Coins size={16} className="text-purple-500" /> Desglose_de_Activos
            </h3>
            <div className="space-y-4">
              {[
                { name: "Neural Token", sym: "NEURAL", amt: "85,420", usd: "12,813.00", icon: BrainCircuit, color: "text-purple-500" },
                { name: "Neural Flow", sym: "FLOW", amt: "450,000", usd: "4,500.00", icon: Zap, color: "text-cyan-400" }
              ].map((asset, i) => (
                <div key={i} className="flex justify-between items-center p-8 bg-white/[0.01] rounded-[35px] border border-white/5 hover:border-purple-500/30 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <asset.icon size={24} className={asset.color} />
                    </div>
                    <div>
                      <p className="text-lg font-black text-white uppercase italic tracking-tighter">{asset.name}</p>
                      <p className="text-[9px] font-bold text-zinc-600">{asset.amt} {asset.sym}</p>
                    </div>
                  </div>
                  <p className="text-xl font-black text-white italic tabular-nums">${asset.usd}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMNA LATERAL */}
        <div className="lg:col-span-4 space-y-10">
          <div className="p-10 rounded-[60px] bg-purple-600 text-white min-h-[400px] flex flex-col justify-between shadow-[0_0_60px_rgba(168,85,247,0.3)] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-20"><Lock size={120} /></div>
             <div className="relative z-10">
                <Lock size={32} className="mb-8" />
                <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none">Vault_Secure</h3>
                <p className="text-[11px] font-bold uppercase mt-6 opacity-80 leading-relaxed tracking-widest italic">Activos blindados bajo protocolo de custodia institucional.</p>
             </div>
             <button className="w-full py-6 bg-black text-white rounded-[25px] font-black uppercase text-[11px] tracking-widest">Configurar_Biometría</button>
          </div>
        </div>
      </div>
    </div>
  );
}