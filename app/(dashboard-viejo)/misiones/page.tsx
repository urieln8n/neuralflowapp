"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Link as LinkIcon, Database, Shield, ChevronRight } from 'lucide-react';

const NEURAL_BLOCKS = [
  { id: 'B-742', title: 'Data Scrapping Node', reward: 120, difficulty: 'Easy', status: 'available', type: 'IA Analysis' },
  { id: 'B-743', title: 'Lead Validation Hash', reward: 450, difficulty: 'Medium', status: 'locked', type: 'Database' },
  { id: 'B-744', title: 'Viral Pattern Mining', reward: 890, difficulty: 'Hard', status: 'locked', type: 'Social Algorithm' },
];

export default function MiningHub() {
  return (
    <div className="reveal space-y-10 p-4">
      {/* Header Estilo Terminal Cripto */}
      <div className="bg-zinc-950 border border-cyan-500/20 p-8 rounded-[40px] relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Database size={120} className="text-cyan-500" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-black italic uppercase text-white tracking-tighter">Mining Hub</h1>
          <p className="text-cyan-500/60 font-mono text-xs mt-2 uppercase tracking-[0.3em]">Protocolo de Consenso: Proof of AI Work</p>
        </div>
      </div>

      {/* Lista de Bloques (Misiones) */}
      <div className="grid gap-4">
        {NEURAL_BLOCKS.map((block) => (
          <motion.div
            key={block.id}
            whileHover={{ scale: 1.01 }}
            className={`group p-6 rounded-[32px] border transition-all flex items-center justify-between ${
              block.status === 'available' 
              ? 'bg-zinc-900/40 border-white/5 hover:border-cyan-500/40' 
              : 'bg-black/40 border-white/5 opacity-50 grayscale'
            }`}
          >
            <div className="flex items-center gap-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${block.status === 'available' ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-zinc-800 text-zinc-600'}`}>
                {block.status === 'available' ? <Cpu size={24} /> : <Shield size={24} />}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-cyan-500 font-bold tracking-widest uppercase">{block.id}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="text-[10px] font-black text-zinc-500 uppercase">{block.type}</span>
                </div>
                <h3 className="text-xl font-black text-white italic uppercase tracking-tight">{block.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <div className="hidden md:block text-right">
                <p className="text-[9px] font-black text-zinc-600 uppercase mb-1">Recompensa</p>
                <p className="text-xl font-black text-white italic">+{block.reward} <span className="text-cyan-500">$FLOW</span></p>
              </div>
              {block.status === 'available' ? (
                <button className="bg-white text-black px-6 py-3 rounded-xl font-black uppercase text-[10px] hover:bg-cyan-500 transition-colors flex items-center gap-2">
                  Minar Bloque <ChevronRight size={14} />
                </button>
              ) : (
                <div className="px-6 py-3 border border-white/5 rounded-xl text-zinc-600 text-[10px] font-black uppercase tracking-widest">
                  Bloqueado
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}