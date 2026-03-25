"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Vote, Landmark, Timer, 
  ChevronRight, Lock, BarChart, 
  CheckCircle2, AlertCircle, Terminal
} from 'lucide-react';

const ProposalCard = ({ title, status, positive, negative, expires }: any) => (
  <div className="relative group p-8 rounded-[40px] bg-zinc-950 border border-white/5 hover:border-purple-500/30 transition-all overflow-hidden shadow-2xl">
    <div className="flex justify-between items-start mb-6">
      <div className="space-y-1 text-left">
        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">ID_PROPO_v26_{Math.floor(Math.random() * 1000)}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-[7px] font-black uppercase tracking-widest border ${
        status === 'Activa' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 animate-pulse' : 'bg-zinc-900 text-zinc-500 border-white/5'
      }`}>
        {status}
      </span>
    </div>

    <div className="space-y-4 mb-8">
      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest italic">
        <span className="text-emerald-500">A favor: {positive}%</span>
        <span className="text-rose-500">En contra: {negative}%</span>
      </div>
      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden flex">
        <motion.div 
          initial={{ width: 0 }} animate={{ width: `${positive}%` }}
          className="h-full bg-emerald-500 shadow-[0_0_15px_#10b981]" 
        />
        <motion.div 
          initial={{ width: 0 }} animate={{ width: `${negative}%` }}
          className="h-full bg-rose-500" 
        />
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-zinc-500 text-[8px] font-black uppercase italic">
        <Timer size={12} /> Expira_en: {expires}
      </div>
      <button disabled className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-zinc-700 cursor-not-allowed group-hover:bg-purple-500 group-hover:text-white transition-all">
        Votar_Ahora <Lock size={10} />
      </button>
    </div>
  </div>
);

export default function VotacionesNeural() {
  return (
    <div className="min-h-screen bg-[#020202] text-white p-6 lg:p-12 italic relative overflow-hidden">
      
      {/* GLOW DE AMBIENTE PÚRPURA SUPERIOR */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[200px] rounded-full" />
      
      <header className="relative z-10 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="text-purple-500" size={24} />
          <div className="h-[1px] w-12 bg-purple-500/30" />
          <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.5em]">Consenso_Neural-Votos</span>
        </div>
        <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
          Votaciones_<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">Colectivas.</span>
        </h1>
        <p className="text-zinc-500 text-xs font-black uppercase tracking-widest max-w-2xl leading-relaxed">
          Decisiones de la red neural-votos. Aquí el enjambre determina la quema de <span className="text-cyan-500">$FLOW</span> y la evolución de <span className="text-purple-500">$NEURAL</span>.
        </p>
      </header>

      {/* STATS DE GOBERNANZA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
        {[
          { label: 'Participación', value: '0.0%', sub: 'Mínimo_Alpha: 40%' },
          { label: 'Poder_Voto_Total', value: '85,420', sub: '$NEURAL Staked' },
          { label: 'Propuestas_Red', value: '14', sub: 'Gestión_Ecosistema' },
        ].map((s, i) => (
          <div key={i} className="p-8 rounded-[40px] bg-zinc-950 border border-white/5 shadow-xl hover:border-purple-500/20 transition-all">
            <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-2 italic">{s.label}</p>
            <div className="text-4xl font-black italic tracking-tighter text-white mb-2">{s.value}</div>
            <p className="text-[7px] font-black text-purple-500 uppercase tracking-widest opacity-60 font-mono">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        <ProposalCard 
          title="Inyectar_Liquidez_Sector_I+D" 
          status="Activa" 
          positive={85} 
          negative={15} 
          expires="1d 22h 10m" 
        />
        <ProposalCard 
          title="Protocolo_Quema_Flow_v2" 
          status="Activa" 
          positive={42} 
          negative={58} 
          expires="3d 10h 45m" 
        />
      </div>

    </div>
  );
}