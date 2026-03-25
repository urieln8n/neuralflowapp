"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  UserPlus, 
  Share2, 
  TrendingUp, 
  Network, 
  Zap, 
  DollarSign, 
  ChevronRight,
  Copy,
  Globe
} from "lucide-react";

const TEAM_STATS = [
  { label: "Equipo_Total", value: "1,240", icon: <Users size={16} />, color: "text-cyan-500" },
  { label: "Activos_24h", value: "856", icon: <Activity size={16} />, color: "text-emerald-500" },
  { label: "Nivel_Red", value: "Nivel 4", icon: <Network size={16} />, color: "text-purple-500" },
  { label: "Comisión_Total", value: "12,450 $FLOW", icon: <DollarSign size={16} />, color: "text-amber-500" },
];

const DIRECT_REFERRALS = [
  { id: 1, user: "Socio_Crypto_99", rank: "Builder", team: 142, earnings: "1,200", status: "online" },
  { id: 2, user: "Alpha_Node_02", rank: "Promoter", team: 45, earnings: "450", status: "online" },
  { id: 3, user: "Ghost_Miner", rank: "Starter", team: 12, earnings: "120", status: "offline" },
];

export default function RedExpansionPage() {
  const referralLink = "https://neuralflow.io/ref/alpha001";

  return (
    <div className="p-10 space-y-10 italic pb-32">
      
      {/* HEADER: PROTOCOLO DE EXPANSIÓN */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/5 pb-10 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-cyan-500 animate-spin-slow" />
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">Global_Expansion_Protocol</span>
          </div>
          <h1 className="text-7xl font-black text-white italic tracking-tighter uppercase leading-none">Mi_Red</h1>
        </div>

        {/* LINK DE REFERIDO ESTILO "CYBER" */}
        <div className="w-full lg:w-auto bg-zinc-950 border border-white/10 p-2 pl-6 rounded-3xl flex items-center justify-between gap-6">
          <p className="text-[9px] font-mono text-zinc-500 truncate">{referralLink}</p>
          <button 
            onClick={() => navigator.clipboard.writeText(referralLink)}
            className="bg-white text-black p-4 rounded-2xl hover:bg-cyan-500 hover:text-white transition-all group"
          >
            <Copy size={16} className="group-active:scale-90 transition-transform" />
          </button>
        </div>
      </div>

      {/* MÉTRICAS DE EQUIPO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_STATS.map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-[40px] bg-zinc-950 border border-white/5 flex flex-col justify-between"
          >
            <div className={`${stat.color} mb-6`}>{stat.icon}</div>
            <div>
              <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-white italic tracking-tighter">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PANEL PRINCIPAL: MAPA Y LISTA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* VISUALIZADOR DE NODOS (SIMULADO) */}
        <div className="lg:col-span-2 p-10 rounded-[60px] bg-zinc-950 border border-white/5 relative overflow-hidden group min-h-[400px]">
          <div className="absolute top-0 left-0 p-8">
            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Mapa_de_Nodos_Activos</h3>
            <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest mt-1">Sincronización_Global_v2.0</p>
          </div>
          
          {/* Gráfico de Red Estilizado */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <Network size={300} className="text-cyan-500 animate-pulse" />
          </div>

          <div className="absolute bottom-10 right-10 flex gap-4">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[8px] font-black text-white uppercase tracking-widest">Live_Nodes</span>
             </div>
          </div>
        </div>

        {/* COMISIONES RECIENTES */}
        <div className="p-10 rounded-[60px] bg-emerald-600 text-black flex flex-col justify-between relative overflow-hidden shadow-[0_30px_60px_rgba(16,185,129,0.2)]">
          <TrendingUp size={120} className="absolute -top-10 -right-10 opacity-20 rotate-12" />
          
          <div>
            <h3 className="text-3xl font-black uppercase italic leading-none tracking-tighter mb-8">Incentivos_Alpha</h3>
            <div className="space-y-6">
               <div className="border-b border-black/10 pb-4">
                  <p className="text-[8px] font-black uppercase opacity-60">Ganancias_Hoy</p>
                  <p className="text-4xl font-black italic tracking-tighter">+420.50 <span className="text-sm uppercase">$FLOW</span></p>
               </div>
               <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase italic">
                    <span>Nivel 1 (10%)</span>
                    <span>300 FLOW</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-black uppercase italic opacity-60">
                    <span>Nivel 2 (5%)</span>
                    <span>120 FLOW</span>
                  </div>
               </div>
            </div>
          </div>

          <button className="w-full py-5 bg-black text-white rounded-[25px] font-black uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-900 transition-all mt-10">
            Retirar_Fondos
          </button>
        </div>
      </div>

      {/* TABLA DE SOCIOS DIRECTOS */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 px-4">
            <UserPlus size={18} className="text-zinc-700" />
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Mis_Socios_Directos</h3>
        </div>

        <div className="space-y-2">
          {DIRECT_REFERRALS.map((ref) => (
            <motion.div 
              key={ref.id}
              whileHover={{ x: 10 }}
              className="p-6 rounded-[35px] bg-zinc-950 border border-white/5 flex flex-wrap items-center justify-between gap-6 group hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Users size={20} className="text-zinc-400 group-hover:text-cyan-500 transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white italic uppercase tracking-tighter leading-none mb-1">{ref.user}</h4>
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${ref.status === 'online' ? 'bg-emerald-500' : 'bg-zinc-700'}`} />
                    <p className="text-[8px] text-zinc-500 font-bold uppercase tracking-widest">{ref.rank}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div className="hidden sm:block text-right">
                    <p className="text-[8px] font-black text-zinc-700 uppercase mb-1">Equipo_Neto</p>
                    <p className="text-xs font-black text-white italic">{ref.team} Usuarios</p>
                </div>
                <div className="text-right">
                    <p className="text-[8px] font-black text-zinc-700 uppercase mb-1">Aportación_Comisión</p>
                    <p className="text-xs font-black text-emerald-500 italic">{ref.earnings} $FLOW</p>
                </div>
                <button className="p-3 bg-white/5 rounded-xl text-zinc-600 hover:text-white transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Icono faltante en los imports si lo necesitas
function Activity({ size, className }: { size: number, className?: string }) {
    return <Zap size={size} className={className} />;
}