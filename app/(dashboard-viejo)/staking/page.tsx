"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Coins, TrendingUp, ShieldCheck, Timer } from 'lucide-react';

const STAKING_POOLS = [
  { id: 'p1', duration: '30 Días', apr: '12%', multiplier: '1.2x', min: '500' },
  { id: 'p2', duration: '90 Días', apr: '28%', multiplier: '2.5x', min: '1000' },
  { id: 'p3', duration: '180 Días', apr: '45%', multiplier: '4.0x', min: '5000' },
];

export default function StakingPage() {
  const [amount, setAmount] = useState('');

  return (
    <div className="p-10 space-y-10 italic pb-20">
      {/* HEADER */}
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <div>
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em]">Minting_Authorized</span>
          <h1 className="text-6xl font-black text-white italic tracking-tighter uppercase">Staking_Vault</h1>
        </div>
        <div className="text-right bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10">
          <p className="text-[8px] font-black text-emerald-500 uppercase mb-1">Tu_Balance_Staked</p>
          <p className="text-xl font-black text-white italic">0.00 <span className="text-zinc-600 text-xs">$FLOW</span></p>
        </div>
      </div>

      {/* CARDS DE POOLS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STAKING_POOLS.map((pool) => (
          <motion.div 
            key={pool.id}
            whileHover={{ y: -5 }}
            className="p-8 rounded-[40px] bg-zinc-950 border border-white/5 hover:border-emerald-500/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-white/5 rounded-xl text-emerald-500">
                <Timer size={20} />
              </div>
              <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">{pool.duration}</span>
            </div>
            
            <h3 className="text-4xl font-black text-white italic mb-2">{pool.apr} <span className="text-sm text-emerald-500 font-bold uppercase">APR</span></h3>
            <p className="text-[10px] font-black text-zinc-500 uppercase mb-8 tracking-widest text-emerald-500/50">Multiplicador: {pool.multiplier}</p>
            
            <div className="space-y-4 pt-6 border-t border-white/5">
              <input 
                type="number" 
                placeholder={`Min: ${pool.min}`}
                className="w-full bg-black border border-white/5 rounded-xl p-3 text-xs text-white focus:border-emerald-500 outline-none italic transition-all"
              />
              <button className="w-full py-4 bg-white text-black font-black uppercase text-[10px] rounded-xl hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
                Bloquear_Capital
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* RECOMPENSAS ACUMULADAS */}
      <div className="p-10 rounded-[50px] bg-gradient-to-br from-zinc-950 to-black border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
            <TrendingUp size={30} className="text-emerald-500" />
          </div>
          <div>
            <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none mb-2">Recompensas_Generadas</h4>
            <p className="text-xs text-zinc-500 font-bold italic uppercase">Acuñación en tiempo real basada en el protocolo PoS.</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-3xl font-black text-white italic tabular-nums">0.0000</p>
            <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Acuñado_Hoy</p>
          </div>
          <button className="p-5 bg-zinc-900 border border-white/10 text-white rounded-2xl hover:bg-emerald-500 transition-all font-black uppercase text-[10px]">
            Claim_Rewards
          </button>
        </div>
      </div>
    </div>
  );
}