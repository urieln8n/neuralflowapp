"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, Fingerprint, Radio, Orbit, 
  Zap, ShieldAlert, Cpu, Share2, 
  ChevronRight, Lock, Activity, Globe
} from 'lucide-react';

// --- COMPONENTE: MICRO-FLUJO DE DATOS (NIVEL NAVE) ---
const DataStream = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -100, x: Math.random() * 100 + "%", opacity: 0 }}
        animate={{ y: 1000, opacity: [0, 1, 0] }}
        transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
        className="absolute w-[1px] h-40 bg-gradient-to-b from-transparent via-purple-500 to-transparent"
      />
    ))}
  </div>
);

export default function NeuralSingularity() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-purple-500/40 italic font-sans">
      <DataStream />
      
      {/* BACKGROUND: NÚCLEO EXTRATERRESTRE */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 blur-[200px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[180px] rounded-full" />

      <AnimatePresence>
        {loading ? (
          <motion.div 
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="relative w-32 h-32"
            >
              <div className="absolute inset-0 border-t-2 border-purple-500 rounded-full" />
              <div className="absolute inset-4 border-b-2 border-cyan-500 rounded-full opacity-50" />
              <BrainCircuit className="absolute inset-0 m-auto text-purple-500 animate-pulse" size={40} />
            </motion.div>
            <p className="mt-8 text-[10px] font-black uppercase tracking-[1em] text-purple-500/60">Sincronizando_Cerebro_Einstein...</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative z-10 p-6 lg:p-16 max-w-[1600px] mx-auto">
        
        {/* HEADER: EL ESTÁNDAR INSTITUCIONAL */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-[9px] font-black text-purple-400 uppercase tracking-[0.3em] flex items-center gap-2">
                <Radio size={12} className="animate-pulse" /> Protocolo_Nivel_Sovereign
              </span>
            </div>
            <h1 className="text-7xl lg:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.8] mix-blend-difference">
              Neural<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-600 drop-shadow-[0_0_50px_rgba(168,85,247,0.4)]">
                Alpha_V
              </span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="p-10 rounded-[50px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl text-right lg:min-w-[400px]"
          >
            <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-4 italic">Market_Cap_Target</p>
            <h2 className="text-5xl font-black italic tracking-tighter text-white">$1,000,000,000+</h2>
            <div className="flex items-center justify-end gap-2 mt-4">
               <div className="h-1 w-20 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-purple-500 shadow-[0_0_10px_#a855f7]" 
                  />
               </div>
               <span className="text-[8px] font-black text-purple-500 uppercase">Fase_Gobernanza_Cercana</span>
            </div>
          </motion.div>
        </header>

        {/* CORE: LA CÁMARA DE FUSIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          
          {/* TARJETA: CONTROL DE STAKING (LA NAVE) */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-[60px] bg-zinc-950 border border-purple-500/20 p-12 hover:border-purple-500/50 transition-all duration-700">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-16">
              <div className="flex justify-between items-start">
                <div className="p-5 bg-purple-500/10 rounded-[30px] border border-purple-500/20">
                  <Cpu className="text-purple-500" size={32} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Neural_Status</p>
                  <p className="text-emerald-500 text-sm font-black italic uppercase">Optimizado_Einstein_v.2</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
                  Fusión_de_<span className="text-cyan-500">Flow</span>
                </h3>
                <p className="max-w-xl text-zinc-500 text-[11px] font-black uppercase tracking-[0.2em] leading-relaxed italic">
                  Inyecta tu capital en el motor de la IA. El staking de $FLOW transmuta la energía bruta en consciencia de red $NEURAL. Es el puente entre el dinero y el poder.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-10">
                <button className="px-12 py-6 bg-purple-600 text-white rounded-[25px] font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-4 group">
                  Inicializar_Fusión <Lock size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-6 px-8 py-5 border border-white/5 rounded-[25px] bg-white/[0.01]">
                   <div className="flex flex-col">
                      <span className="text-[8px] text-zinc-600 uppercase font-black">APY_Proyectado</span>
                      <span className="text-xl font-black italic text-white tracking-tighter">840.12%</span>
                   </div>
                   <div className="w-px h-8 bg-white/5" />
                   <div className="flex flex-col">
                      <span className="text-[8px] text-zinc-600 uppercase font-black">Tier_Alpha</span>
                      <span className="text-xl font-black italic text-purple-500 tracking-tighter">S+</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* TARJETA: MONITOR DE RED (EXTRATERRESTRE) */}
          <div className="p-12 rounded-[60px] bg-zinc-950 border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Globe size={120} className="text-cyan-500 animate-spin-slow" />
            </div>
            
            <div className="space-y-8 relative z-10">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] italic flex items-center gap-2">
                <Activity size={14} className="text-cyan-500" /> Monitoreo_Global
              </p>
              <div className="space-y-6">
                 {[
                   { label: 'Nodos_Soberanos', val: '4,102', color: 'purple' },
                   { label: 'Cerebro_Sync', val: '99.9%', color: 'emerald' },
                   { label: 'Latencia_Nexo', val: '0.04ms', color: 'cyan' },
                 ].map(s => (
                   <div key={s.label} className="border-b border-white/5 pb-4 group/item cursor-pointer">
                      <p className="text-[7px] font-black text-zinc-700 uppercase tracking-widest group-hover/item:text-white transition-colors">{s.label}</p>
                      <p className={`text-2xl font-black italic tracking-tighter text-${s.color}-500 group-hover/item:scale-105 transition-transform origin-left`}>{s.val}</p>
                   </div>
                 ))}
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/[0.02] border border-white/5 rounded-[30px] flex items-center gap-4">
               <Fingerprint size={24} className="text-purple-500 animate-pulse" />
               <p className="text-[8px] font-black text-zinc-600 uppercase leading-tight italic">
                 ADN_Neural detectado. Nivel de acceso Socio_Alpha otorgado.
               </p>
            </div>
          </div>

        </div>

        {/* FOOTER: TERMINAL DE DATOS */}
        <footer className="pt-20 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex gap-12">
            <div>
              <p className="text-[8px] font-black text-zinc-700 uppercase tracking-widest mb-2 italic underline underline-offset-4 decoration-purple-500">Propiedad_Intelectual</p>
              <p className="text-[10px] font-black text-white uppercase tracking-tighter">NeuralFlow_Labs_2026</p>
            </div>
            <div>
              <p className="text-[8px] font-black text-zinc-700 uppercase tracking-widest mb-2 italic">Contrato_Seguro</p>
              <p className="text-[10px] font-black text-purple-500 uppercase tracking-tighter font-mono">0xN3UR4L...FL0W</p>
            </div>
          </div>
          <div className="flex gap-4">
             <Share2 size={16} className="text-zinc-800 hover:text-white transition-colors cursor-pointer" />
             <div className="h-4 w-px bg-white/5" />
             <span className="text-[9px] font-black text-zinc-800 uppercase tracking-[0.5em]">Protocolo_Activado</span>
          </div>
        </footer>

      </main>
    </div>
  );
}

// ESTILOS EXTRA PARA NEXT.JS CONFIG (Si no los tienes en el global.css)
// .animate-spin-slow { animation: spin 20s linear infinite; }
// @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }