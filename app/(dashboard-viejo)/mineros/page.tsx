"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Shield, ChevronRight, Database, Flame, TrendingUp, Gauge } from 'lucide-react';
import { useWeb3 } from "@/context/Web3Context";

const MINERS_DATA = [
  { id: 'm1', name: 'STARTER_NODE', price: '27.50', power: '25 GH/s', daily: '1.20', color: 'zinc' },
  { id: 'm2', name: 'ENTRY_NODE', price: '55.00', power: '50 GH/s', daily: '2.50', color: 'cyan' },
  { id: 'm3', name: 'PRO_NODE', price: '330.00', power: '300 GH/s', daily: '15.80', color: 'emerald' },
  { id: 'm4', name: 'WHALE_INSTITUTIONAL', price: '1100.00', power: '1.2 TH/s', daily: '62.00', color: 'purple' }
];

export default function MinerosPage() {
  const { account, connectWallet } = useWeb3() as any;
  const [selectedMiner, setSelectedMiner] = useState<string | null>(null);

  return (
    <div className="p-10 space-y-12 italic overflow-y-auto h-full custom-scrollbar pb-32">
      
      {/* HEADER DINÁMICO: FLUJO DE CAPITAL */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/5 pb-10 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">Capital_Injection_Protocol</span>
          </div>
          <h1 className="text-7xl font-black text-white italic tracking-tighter uppercase leading-none">Power_Nodes</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-8 bg-zinc-950 p-6 rounded-[30px] border border-white/5">
          <div className="text-right border-r border-white/5 pr-8">
            <p className="text-[8px] font-black text-zinc-600 uppercase mb-1">Total_Network_Power</p>
            <p className="text-xl font-black text-white uppercase italic tracking-tighter">4.82 <span className="text-cyan-500 text-xs italic">PH/s</span></p>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-black text-zinc-600 uppercase mb-1">Flow_Burn_Rate</p>
            <p className="text-xl font-black text-orange-500 uppercase italic tracking-tighter">12.4% <span className="text-zinc-700 text-xs italic">EST</span></p>
          </div>
        </div>
      </div>

      {/* GRID DE MINERÍA ESTRATÉGICA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MINERS_DATA.map((miner, index) => (
          <motion.div 
            key={miner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setSelectedMiner(miner.id)}
            className={`p-8 rounded-[45px] bg-zinc-950 border transition-all duration-500 group relative overflow-hidden ${
              selectedMiner === miner.id ? 'border-cyan-500/50 scale-[1.02] shadow-[0_20px_50px_rgba(6,182,212,0.1)]' : 'border-white/5'
            }`}
          >
            {/* BACKGROUND ICON */}
            <Database className="absolute -bottom-10 -right-10 text-white opacity-[0.01] group-hover:opacity-[0.04] transition-opacity duration-700" size={180} />
            
            <div className="flex justify-between items-center mb-10">
              <div className={`p-4 rounded-2xl bg-white/5 ${selectedMiner === miner.id ? 'text-cyan-400' : 'text-zinc-600'} transition-colors`}>
                <Cpu size={20} />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[8px] font-black text-zinc-700 uppercase tracking-widest leading-none">Node_Class</span>
                <span className="text-[10px] font-black text-white italic">LVL_{index + 1}</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-8 leading-none">{miner.name.replace('_', ' ')}</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <p className="text-[8px] font-black text-zinc-600 uppercase italic">Computing_Power</p>
                <p className="text-sm font-black text-cyan-500 italic uppercase">{miner.power}</p>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <p className="text-[8px] font-black text-zinc-600 uppercase italic">Est_Daily_$FLOW</p>
                <p className="text-sm font-black text-emerald-500 italic uppercase">+{miner.daily}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[8px] font-black text-zinc-600 uppercase italic">ROI_Target</p>
                <p className="text-sm font-black text-white italic uppercase">45 DAYS</p>
              </div>
            </div>

            <div className="pt-6 flex flex-col gap-4 relative z-10">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[8px] font-black text-zinc-600 uppercase italic mb-1 tracking-[0.2em]">Investment_USDT</p>
                  <p className="text-4xl font-black text-white italic tracking-tighter leading-none">${miner.price}</p>
                </div>
                <button 
                  onClick={!account ? connectWallet : () => alert(`Iniciando compra de ${miner.name}`)}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    selectedMiner === miner.id ? 'bg-cyan-500 text-white shadow-[0_0_20px_#06b6d4]' : 'bg-white text-black'
                  }`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER: PROTOCOLO DE QUEMA & ESCASEZ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-10 rounded-[50px] bg-gradient-to-r from-zinc-950 to-black border border-orange-500/20 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <Flame size={120} className="text-orange-600" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-2 mb-4 bg-orange-500/10 px-4 py-1 rounded-full border border-orange-500/20">
                    <Flame size={12} className="text-orange-500" />
                    <span className="text-[8px] font-black text-orange-500 uppercase tracking-widest italic">Protocolo_de_Escasez_Activo</span>
                </div>
                <h4 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4">Mecanismo_Deflacionario</h4>
                <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
                    El <span className="text-white font-bold">20% de las ventas de mineurs</span> se inyecta directamente en la liquidez del par $FLOW/USDT para ejecutar <span className="text-orange-500 font-bold uppercase italic underline decoration-orange-500/30 underline-offset-4">Quemas Algorítmicas</span>.
                </p>
            </div>
            <div className="flex-1 w-full md:w-auto h-px md:h-20 bg-white/5" />
            <div className="flex flex-col items-center">
                <p className="text-[8px] font-black text-zinc-600 uppercase mb-2">Suministro_Eliminado</p>
                <p className="text-4xl font-black text-white italic tabular-nums">1.4M</p>
                <p className="text-[10px] text-orange-500 font-bold italic">$FLOW_BURNED</p>
            </div>
        </div>

        <div className="p-10 rounded-[50px] bg-zinc-950 border border-white/5 flex flex-col justify-between group cursor-pointer hover:border-cyan-500/30 transition-all">
            <div className="flex justify-between items-start">
                <TrendingUp size={24} className="text-zinc-700 group-hover:text-cyan-500 transition-colors" />
                <span className="text-[8px] font-black text-zinc-800 uppercase tracking-[0.3em]">Market_Impact</span>
            </div>
            <div className="space-y-1">
                <p className="text-xs text-zinc-500 uppercase font-black italic">Buyback_Power</p>
                <h5 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none">$42,500 <span className="text-[10px] text-zinc-700 underline underline-offset-2">READY</span></h5>
            </div>
        </div>
      </div>
    </div>
  );
}