"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Lock, Zap, Server, BarChart3, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [isEntering, setIsEntering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { label: "PHASE", value: "ALPHA GENESIS", icon: Zap },
    { label: "OPERATORS", value: "12,402 (WHITELIST)", icon: Server },
    { label: "NETWORK STATUS", value: "PRE-LAUNCH", icon: BarChart3 }
  ];

  const handleLaunch = () => {
    setIsEntering(true);
    setTimeout(() => router.push('/laboratorio'), 2200);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#030303] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      
      {/* FONDO CORREGIDO (Línea 54 corregida aquí) */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-5 py-2.5 bg-zinc-900/70 border border-white/10 rounded-full mb-14 backdrop-blur-md"
        >
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </div>
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em]">
            Neural Sovereign Network <span className="text-white">// Genesis Alpha</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <h1 className="text-8xl md:text-[160px] font-black italic uppercase tracking-tighter leading-[0.8] text-white">
            Neural<br/>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-400 to-zinc-700">
              Flow
            </span>
          </h1>
          <p className="mt-7 text-2xl md:text-3xl font-black italic uppercase text-zinc-600 tracking-wider">
            The Autonomous Liquidity Layer
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-xl justify-center mb-32">
          <button 
            onClick={handleLaunch}
            disabled={isEntering}
            className="w-full md:w-auto px-14 py-7 bg-white rounded-[28px] overflow-hidden transition-all hover:scale-[1.04] active:scale-[0.97] relative group shadow-xl"
          >
            <div className="absolute inset-0 w-full h-full bg-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative z-10 flex items-center justify-center gap-3 text-black font-black uppercase italic tracking-widest text-sm">
              {isEntering ? "Authenticating..." : "Access Genesis Node"}
              {!isEntering && <ArrowUpRight size={22} />}
            </span>
          </button>

          <button className="w-full md:w-auto px-14 py-7 bg-transparent border border-white/10 rounded-[28px] text-white font-black uppercase italic tracking-widest text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3 group">
            <Lock size={18} className="text-zinc-600 group-hover:text-cyan-500" />
            Genesis Whitelist
          </button>
        </div>

        {/* MÉTRICAS (Línea 124 corregida aquí) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (i * 0.1) }}
                className="flex flex-col md:flex-row items-center gap-5 bg-zinc-950/50 p-7 rounded-3xl border border-white/5 group hover:border-cyan-500/20 transition-all"
              >
                <div className="p-4 bg-zinc-900 rounded-2xl border border-white/10 text-cyan-500 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <div className="text-center md:text-left">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600">{stat.label}</span>
                  <p className="text-2xl font-black italic text-white tracking-tighter mt-1.5">{stat.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {isEntering && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 backdrop-blur-xl"
          >
            <div className="w-80 h-[2px] bg-zinc-900 rounded-full overflow-hidden mb-7">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-cyan-500 shadow-[0_0_25px_#06b6d4]"
              />
            </div>
            <span className="text-[10px] font-black text-cyan-500 tracking-[0.6em] animate-pulse">
              SYNCING NEURAL LAYER
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}