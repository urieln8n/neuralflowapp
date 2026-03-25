"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  ShieldCheck, 
  Zap, 
  Users, 
  BarChart3,
  Star,
  Lock as LockIcon, 
  User as UserIcon,
  Fingerprint,
  ChevronRight,
  Globe,
  TrendingUp
} from "lucide-react";
import { useEconomy } from "@/hooks/useEconomy";

export default function PerfilRangoPage() {
  const { tokens, isLoaded } = useEconomy() as any;

  if (!isLoaded) return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <Fingerprint className="text-cyan-500 animate-pulse" size={48} />
    </div>
  );

  const RANGOS = [
    { name: "Starter", margin: "10%", minVol: "0", color: "bg-zinc-600", active: false, shadow: "" },
    { name: "Promoter", margin: "13%", minVol: "5k", color: "bg-cyan-500", active: false, shadow: "shadow-[0_0_15px_rgba(6,182,212,0.4)]" },
    { name: "Builder", margin: "16%", minVol: "20k", color: "bg-purple-500", active: true, shadow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]" },
    { name: "Leader", margin: "20%", minVol: "100k", color: "bg-emerald-500", active: false, shadow: "" },
    { name: "Ambassador", margin: "25%", minVol: "500k", color: "bg-amber-500", active: false, shadow: "" },
  ];

  return (
    <div className="p-6 lg:p-12 space-y-10 bg-[#020202] min-h-screen italic overflow-x-hidden">
      
      {/* TARJETA DE IDENTIDAD ALPHA */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative group overflow-hidden p-10 rounded-[50px] bg-gradient-to-br from-zinc-900 to-black border border-white/5"
      >
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
            <Fingerprint size={200} />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="relative">
            <div className="w-40 h-40 rounded-[45px] bg-gradient-to-tr from-purple-600 via-cyan-500 to-emerald-500 p-[3px] animate-gradient-xy">
              <div className="w-full h-full rounded-[42px] bg-black flex items-center justify-center overflow-hidden border-4 border-black">
                <UserIcon size={60} className="text-zinc-800" />
                {/* Overlay de escaneo */}
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 shadow-[0_0_15px_#06b6d4] animate-scan" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-purple-600 p-3 rounded-2xl border-4 border-[#020202] shadow-xl">
              <ShieldCheck size={20} className="text-white" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.6em]">System_Authorized_User</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">Socio_Alpha</h1>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">Global_ID</p>
                <p className="text-sm font-mono text-cyan-500 font-bold">NF-8824-X99</p>
              </div>
              <div className="px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-md">
                <p className="text-[8px] font-black text-purple-500 uppercase tracking-widest">Network_Rank</p>
                <p className="text-sm font-black text-purple-400 italic uppercase">Builder_Class</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MÉTRICAS DE PODER Y PROGRESO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 p-10 rounded-[60px] bg-zinc-950 border border-white/5 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Ascenso_Programado</h3>
              <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] mt-1">Próximo Hito: <span className="text-emerald-500">Leader_Rank</span></p>
            </div>
            <div className="text-right">
                <p className="text-4xl font-black text-white italic leading-none">45.2%</p>
                <p className="text-[8px] font-black text-zinc-700 uppercase">Progreso_Total</p>
            </div>
          </div>

          {/* Barra de Progreso Estilo "Cyber" */}
          <div className="relative h-6 w-full bg-white/5 rounded-2xl overflow-hidden border border-white/5 p-1 mb-12">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "45.2%" }} 
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 rounded-xl relative"
            >
                <div className="absolute top-0 right-0 w-4 h-full bg-white/20 skew-x-12 animate-pulse" />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Directos", val: "12", icon: Users, color: "text-blue-500" },
              { label: "Volumen", val: "45.2k", icon: BarChart3, color: "text-purple-500" },
              { label: "Loyalty", val: "880", icon: Star, color: "text-amber-500" },
              { label: "Flow_Balance", val: tokens?.toFixed(2) || "0.00", icon: Zap, color: "text-cyan-500" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-[35px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <stat.icon size={16} className={`${stat.color} mb-3`} />
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-xl font-black text-white italic tracking-tighter">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CARD DE BENEFICIOS (COLOR BLOCK) */}
        <div className="p-10 rounded-[60px] bg-purple-600 text-white flex flex-col justify-between relative overflow-hidden shadow-[0_30px_60px_rgba(168,85,247,0.3)]">
          <Award size={120} className="absolute -top-10 -right-10 opacity-20 rotate-12" />
          
          <div>
            <h3 className="text-4xl font-black uppercase italic leading-none tracking-tighter mb-8">Privilegios_Builder</h3>
            <ul className="space-y-5">
              {[
                { t: "16% Margen Diferencial", icon: <TrendingUp size={12}/> },
                { t: "Soporte Alpha 24/7", icon: <ShieldCheck size={12}/> },
                { t: "Acceso Nodos Neurales", icon: <Globe size={12}/> },
                { t: "Bono de Liderazgo", icon: <Star size={12}/> }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[11px] font-black uppercase italic tracking-tight">
                  <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                    {item.icon}
                  </div> 
                  {item.t}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-5 bg-white text-black rounded-[25px] font-black uppercase text-[10px] tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500 mt-10">
            Mejorar_Suscripción
          </button>
        </div>
      </div>

      {/* ESCALAFÓN DE RANGOS */}
      <div className="space-y-8 pb-32">
        <div className="flex items-center gap-4 px-4">
            <BarChart3 size={18} className="text-zinc-700" />
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.5em]">Global_Ranking_Hierarchy</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {RANGOS.map((rango, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 10 }}
              className={`p-8 rounded-[40px] border transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6
              ${rango.active 
                ? 'bg-gradient-to-r from-zinc-900 to-black border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.1)]' 
                : 'bg-transparent border-white/5 opacity-40 hover:opacity-100 hover:bg-white/[0.02]'}`}
            >
              <div className="flex items-center gap-8">
                <div className={`w-4 h-4 rounded-full ${rango.color} ${rango.shadow}`} />
                <div>
                  <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none mb-1">{rango.name}</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase italic tracking-widest">
                    Margen: <span className="text-white">{rango.margin}</span> | Volumen Requerido: <span className="text-white">{rango.minVol} $FLOW</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                {rango.active ? (
                  <div className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-2xl font-black text-[10px] uppercase italic tracking-widest shadow-lg">
                    <ShieldCheck size={14} /> Rango_Confirmado
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-zinc-700">
                    <span className="text-[9px] font-black uppercase italic">Bloqueado</span>
                    <LockIcon size={18} />
                  </div>
                )}
                <ChevronRight size={20} className="text-zinc-800" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Estilos extra para animaciones en Tailwind (Añade a tu globals.css si no existen)
// @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
// .animate-scan { animation: scan 3s linear infinite; }