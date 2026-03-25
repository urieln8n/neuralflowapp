"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Wallet, ChevronDown } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <div className="flex min-h-screen bg-[#020202] text-white selection:bg-cyan-500/30 overflow-hidden">
      
      {/* FONDO ESTRUCTURAL */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5" />
      </div>

      {/* SIDEBAR CONECTADO */}
      <Sidebar />

      {/* CUERPO CENTRAL */}
      <main className="flex-1 flex flex-col min-w-0 relative z-10">
        
        {/* NAVBAR SUPERIOR */}
        <header className="h-20 border-b border-white/5 bg-black/40 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-[40]">
          <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-xl">
            <Search size={14} className="text-zinc-500" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">Escaneando_Nexo...</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-2xl">
              <Wallet size={14} className="text-cyan-500" />
              <span className="text-[10px] font-black italic tracking-tighter text-cyan-400">SOL_ACTIVE</span>
            </div>
          </div>
        </header>

        {/* RENDERIZADO DE PÁGINAS (Aquí es donde aparecen Génesis, Seguridad, etc.) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}