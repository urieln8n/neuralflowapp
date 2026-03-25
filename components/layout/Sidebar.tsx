"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, Zap, ShieldCheck, Beaker, 
  BarChart3, Search, Wallet, Activity, Flame, 
  Coins, Server, Users, GraduationCap, ChevronDown,
  Radar, User, ArrowLeft, BrainCircuit, Lock,
  History, Shield, Sparkles
} from "lucide-react";

const navConfig = [
  {
    label: "Mando_Central",
    icon: <LayoutDashboard size={16} />,
    items: [
      { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={14} /> },
      { name: "Génesis", path: "/genesis", icon: <Sparkles size={14} />, badge: "Origin" },
      { name: "Perfil_Neural", path: "/perfil", icon: <User size={14} />, badge: "Elite" },
      { name: "Signals", path: "/signals", icon: <Zap size={14} />, badge: "Live" },
      { name: "Solana Radar", path: "/solana-radar", icon: <Radar size={14} /> },
    ]
  },
  {
    label: "Sectores_I+D",
    icon: <Beaker size={16} />,
    items: [
      { name: "Laboratorio", path: "/laboratorio", icon: <Beaker size={14} /> },
      { name: "Analizador", path: "/analizador", icon: <BarChart3 size={14} /> },
      { name: "Localizador", path: "/localizador", icon: <Search size={14} /> },
    ]
  },
  {
    label: "Gobernanza_IA",
    icon: <BrainCircuit size={16} className="text-purple-500" />,
    items: [
      { name: "El Oráculo", path: "/neural", icon: <BrainCircuit size={14} />, badge: "Locked" },
      { name: "Votaciones", path: "/neural-votos", icon: <Users size={14} /> },
    ]
  },
  {
    label: "Economía_Soberana",
    icon: <Wallet size={16} />,
    items: [
      { name: "Nexo Capital", path: "/liquidity-nexus", icon: <Wallet size={14} />, badge: "Vault" },
      { name: "Mineros", path: "/mineros", icon: <Activity size={14} /> },
      { name: "Staking", path: "/staking", icon: <Coins size={14} />, badge: "APY" },
      { name: "Quema", path: "/quema", icon: <Flame size={14} />, badge: "Hot" },
      { name: "Vault", path: "/vault", icon: <ShieldCheck size={14} /> },
    ]
  },
  {
    label: "Blindaje_Alpha",
    icon: <Shield size={16} className="text-cyan-400" />,
    items: [
      { name: "Seguridad", path: "/security", icon: <Shield size={14} />, badge: "Active" },
      { name: "Archivo_Log", path: "/history", icon: <History size={14} /> },
    ]
  },
  {
    label: "Infraestructura",
    icon: <Server size={16} />,
    items: [
      { name: "Servidor VPS", path: "/servidor", icon: <Server size={14} /> },
      { name: "Mi Red", path: "/red", icon: <Users size={14} />, badge: "100M" },
      { name: "Academia", path: "/academia", icon: <GraduationCap size={14} /> },
    ]
  }
];

// CAMBIO CRÍTICO: Usamos 'export default' para que Next.js no dé error en el layout
export default function Sidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(["Mando_Central", "Gobernanza_IA", "Blindaje_Alpha"]);

  const toggleSection = (label: string) => {
    setOpenSections(prev => 
      prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label]
    );
  };

  return (
    <aside className="sticky top-0 left-0 w-72 h-screen bg-[#050505] border-r border-white/5 p-6 flex flex-col italic z-[100] flex-shrink-0 overflow-y-auto custom-scrollbar shadow-2xl transition-all">
      
      {/* LOGO */}
      <Link href="/" className="group mb-12 px-2 flex items-center gap-3 cursor-pointer">
        <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-500">
          <Zap size={22} className="text-cyan-500 group-hover:text-black" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase leading-none italic">
            Neural<span className="text-cyan-500">Flow</span>
          </h2>
          <div className="flex items-center gap-1 mt-1">
            <ArrowLeft size={8} className="text-zinc-700" />
            <p className="text-[7px] font-black text-zinc-600 tracking-[0.4em] uppercase">Volver_al_Nexo</p>
          </div>
        </div>
      </Link>

      <div className="flex-1 space-y-4">
        {navConfig.map((section) => {
          const isOpen = openSections.includes(section.label);
          const isNeural = section.label === "Gobernanza_IA";
          const isSecurity = section.label === "Blindaje_Alpha";

          return (
            <div key={section.label} className="space-y-1">
              <button 
                onClick={() => toggleSection(section.label)}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-xl transition-all ${
                    isOpen ? "bg-white/[0.02] text-white" : "text-zinc-600 hover:text-zinc-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${isOpen ? (isNeural ? "text-purple-500" : isSecurity ? "text-cyan-400" : "text-cyan-500") : ""} opacity-70`}>{section.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em]">{section.label}</span>
                </div>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={`overflow-hidden ml-4 border-l ${isNeural ? "border-purple-500/20" : isSecurity ? "border-cyan-400/20" : "border-white/5"} space-y-1 mt-1`}
                  >
                    {section.items.map((item) => {
                      const isActive = pathname === item.path;
                      const isLocked = item.badge === "Locked";

                      return (
                        <Link 
                          key={item.path} 
                          href={item.path}
                          className={`flex items-center justify-between px-6 py-2.5 rounded-r-2xl transition-all group ${
                            isActive 
                            ? (isNeural ? "text-purple-500 border-l-2 border-purple-500 bg-purple-500/5" : "text-cyan-500 border-l-2 border-cyan-500 bg-cyan-500/5")
                            : "text-zinc-600 hover:text-white hover:bg-white/[0.02]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`${isActive ? (isNeural ? "text-purple-500" : "text-cyan-500") : "group-hover:text-cyan-500"}`}>
                                {isLocked ? <Lock size={12} /> : item.icon}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
}