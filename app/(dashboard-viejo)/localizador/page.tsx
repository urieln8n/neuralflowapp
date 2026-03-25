"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Radar, Eye, UserCheck, ArrowRight, Crosshair, MapPin } from 'lucide-react';

const WHALE_MOVEMENTS = [
  { wallet: "0x7a1...882f", action: "BUY", amount: "500,000 $FLOW", time: "30s ago", type: "Institución" },
  { wallet: "0x12d...44e1", action: "TRANSFER", amount: "1.2M $FLOW", time: "5m ago", type: "Exchange" },
  { wallet: "0xf92...cc01", action: "STAKE", amount: "250,000 $FLOW", time: "12m ago", type: "Whale" },
];

export default function LocalizadorPage() {
  return (
    <div className="p-10 space-y-10 italic pb-20">
      {/* HEADER */}
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <div>
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em]">Deep_Chain_Scanning</span>
          <h1 className="text-6xl font-black text-white italic tracking-tighter uppercase">Localizador_Whales</h1>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Rastrear Wallet 0x..." 
            className="bg-zinc-950 border border-white/10 rounded-2xl px-6 py-3 text-xs w-80 outline-none focus:border-cyan-500 transition-all text-white font-mono"
          />
          <Search className="absolute right-4 top-3 text-zinc-700" size={18} />
        </div>
      </div>

      {/* MAPA DE CALOR / RADAR */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 p-1 rounded-[50px] bg-gradient-to-br from-cyan-500/20 to-transparent">
          <div className="bg-black w-full h-full rounded-[49px] p-10 relative overflow-hidden flex flex-col items-center justify-center border border-white/5">
            <Radar size={120} className="text-cyan-500/20 animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Crosshair size={40} className="text-cyan-500" />
            </div>
            <p className="mt-6 text-[9px] font-black text-zinc-600 uppercase tracking-[0.5em]">Escaneando_Liquidez_en_Tiempo_Real...</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-[40px] bg-zinc-950 border border-white/5">
            <h4 className="text-[10px] font-black text-zinc-500 uppercase mb-4 tracking-widest">Alerta_de_Movimiento</h4>
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
              <p className="text-xs font-black text-white uppercase">Gran_Volumen_Detectado</p>
            </div>
          </div>
          <div className="p-8 rounded-[40px] bg-cyan-600 text-black">
            <h4 className="text-[10px] font-black uppercase mb-2 tracking-widest opacity-70">Target_Lock</h4>
            <p className="text-xl font-black uppercase leading-none italic tracking-tighter">Wall_Street_Fund_04</p>
          </div>
        </div>
      </div>

      {/* LISTA DE MOVIMIENTOS */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] px-4">Live_Feed_Blockchain</h3>
        {WHALE_MOVEMENTS.map((move, i) => (
          <div key={i} className="p-6 rounded-[30px] bg-zinc-950 border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-6">
              <div className={`p-3 rounded-xl ${move.action === 'BUY' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'}`}>
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-400">{move.wallet}</p>
                <p className="text-[8px] font-black text-zinc-600 uppercase mt-1">{move.type}</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm font-black text-white italic uppercase tracking-tighter">{move.amount}</p>
              <p className="text-[8px] font-black text-zinc-700 uppercase">{move.action}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-zinc-500 uppercase">{move.time}</p>
              <button className="text-cyan-500 hover:text-white transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}