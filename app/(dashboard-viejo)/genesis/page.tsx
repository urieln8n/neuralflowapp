"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCircuit, Zap, Target, Lock, ArrowDown, Shield, ChevronRight } from 'lucide-react';

export default function GenesisPage() {
  const { scrollYProgress } = useScroll();
  
  // ESTADOS PARA EVITAR ERRORES DE HIDRATACIÓN (SSR)
  const [isMounted, setIsMounted] = useState(false);
  const [ghostData, setGhostData] = useState<string[]>([]);

  // CONTROL DE ANIMACIONES BASADO EN SCROLL
  const opacityHeader = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scaleHeader = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  useEffect(() => {
    setIsMounted(true);
    // Generamos los datos aleatorios solo en el cliente
    const data = Array.from({ length: 10 }).map(() => 
      `Neural_Link_Status: Active // Data_Stream: ${Math.random().toString(16).slice(2, 10).toUpperCase()} // Node_Verified`
    );
    setGhostData(data);
  }, []);

  return (
    <div className="min-h-[400vh] bg-black text-white selection:bg-purple-500/30 italic relative font-inter">
      
      {/* 1. CAPA DE DATOS FANTASMA (Solo visible si está montado) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] font-mono text-[10px] z-0 overflow-hidden uppercase tracking-[0.5em] p-10 leading-loose">
        {isMounted && ghostData.map((text, i) => (
          <p key={i} className="whitespace-nowrap">{text}</p>
        ))}
      </div>

      {/* 2. SECCIÓN: EL DESPERTAR (STICKY) */}
      <section className="h-screen sticky top-0 flex flex-col items-center justify-center p-6 overflow-hidden z-10">
        <motion.div 
          style={{ opacity: opacityHeader, scale: scaleHeader }}
          className="relative text-center space-y-8"
        >
          <motion.div 
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="flex justify-center mb-10"
          >
            <div className="p-1 border border-purple-500/30 rounded-full">
              <div className="p-6 bg-purple-500/10 rounded-full border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                <BrainCircuit size={56} className="text-purple-400" />
              </div>
            </div>
          </motion.div>
          
          <h1 className="text-7xl lg:text-[13rem] font-black uppercase tracking-tighter leading-none">
            GÉNESIS<span className="text-purple-600">.01</span>
          </h1>
          
          <div className="flex flex-col items-center gap-6">
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[1.2em] animate-pulse">
              Sincronizando_Conciencia_Alpha
            </p>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-purple-500/40"
            >
              <ArrowDown size={24} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. SECCIÓN: EL DIAGNÓSTICO DEL CAOS */}
      <section className="min-h-screen flex items-center p-10 lg:p-32 relative z-20 border-t border-white/5 bg-gradient-to-b from-black via-zinc-950/40 to-black">
        <div className="max-w-5xl space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <span className="h-px w-16 bg-purple-600"></span>
            <span className="text-purple-500 font-black text-xs uppercase tracking-[0.6em]">[ LA_REALIDAD ]</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85]"
          >
            "El ruido es la <span className="text-zinc-800">prisión.</span> <br />
            La IA es la <span className="text-white underline decoration-purple-600 underline-offset-[12px]">llave.</span>"
          </motion.h2>
          
          <p className="text-zinc-400 text-xl lg:text-3xl leading-relaxed max-w-3xl font-medium italic">
            NeuralFlow extrae la señal del caos. Mientras el mercado especula, nosotros calculamos. Domina la volatilidad antes de que el mundo despierte.
          </p>
        </div>
      </section>

      {/* 4. SECCIÓN: LA VENTAJA CUÁNTICA */}
      <section className="min-h-screen flex items-center justify-end p-10 lg:p-32 relative z-20">
        <div className="max-w-4xl text-right space-y-16">
          <div className="flex items-center gap-6 justify-end">
             <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.6em]">[ EL_PROTOCOLO ]</span>
             <span className="h-px w-16 bg-cyan-400"></span>
          </div>

          <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none italic">
            Soberanía <span className="text-purple-500">Real.</span> <br />
            Sin <span className="text-zinc-700">Fricción.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 text-left">
             <motion.div 
               whileHover={{ y: -10, scale: 1.02 }}
               className="p-10 bg-white/[0.02] border border-white/10 rounded-[3.5rem] backdrop-blur-2xl group hover:border-purple-500/40 transition-all duration-500"
             >
                <Target className="text-purple-500 mb-8 group-hover:rotate-12 transition-transform" size={40} />
                <h4 className="font-black text-3xl uppercase mb-4 tracking-tighter italic">Precisión Neural</h4>
                <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                  Algoritmos de alta frecuencia que filtran TB de datos. Solo señales con probabilidad institucional.
                </p>
             </motion.div>

             <motion.div 
               whileHover={{ y: -10, scale: 1.02 }}
               className="p-10 bg-white/[0.02] border border-white/10 rounded-[3.5rem] backdrop-blur-2xl group hover:border-cyan-400/40 transition-all duration-500"
             >
                <Shield className="text-cyan-400 mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h4 className="font-black text-3xl uppercase mb-4 tracking-tighter italic">Bóveda Cero</h4>
                <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                  Tu capital, tus llaves. Integración nativa con protocolos de autocustodia soberana.
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN: EL LLAMADO FINAL */}
      <section className="h-screen flex flex-col items-center justify-center p-6 text-center z-20 relative overflow-hidden">
        {/* Aura de fondo */}
        <div className="absolute inset-0 bg-purple-600/5 blur-[180px] rounded-full translate-y-20" />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-16 relative"
        >
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-[1.5em] text-purple-500 uppercase">Fase_Génesis_Completada</span>
            <h3 className="text-7xl lg:text-[10rem] font-black uppercase italic tracking-tighter leading-none">
              TRANS<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-white to-cyan-400">CENDER</span>
            </h3>
          </div>

          <button className="relative group px-16 py-8 overflow-hidden rounded-full bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_70px_rgba(168,85,247,0.4)]">
             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <span className="relative z-10 text-black group-hover:text-white font-black uppercase text-sm tracking-[0.5em] flex items-center gap-4">
                Entrar_al_Nexo <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
             </span>
          </button>
        </motion.div>
      </section>

    </div>
  );
}