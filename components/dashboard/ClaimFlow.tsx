"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Zap, ChevronRight, Sparkles, Box } from 'lucide-react';

export default function ClaimFlow() {
  const [showModal, setShowModal] = useState(false);
  const [claimed, setClaimed] = useState(false);

  // Datos simulados (Esto vendrá de tu base de datos mañana con n8n)
  const userStats = {
    baseReward: 10,
    minerMultiplier: 2.5, // Si tiene mineros potentes, gana 2.5x más
    totalToClaim: 25
  };

  useEffect(() => {
    // Verificamos si ya reclamó hoy en el almacenamiento local
    const lastClaim = localStorage.getItem('last_flow_claim');
    const today = new Date().toDateString();

    if (lastClaim !== today) {
      setTimeout(() => setShowModal(true), 1500); // Aparece tras 1.5s de entrar
    }
  }, []);

  const handleClaim = () => {
    setClaimed(true);
    localStorage.setItem('last_flow_claim', new Date().toDateString());
    
    // Aquí dispararíamos la actualización en la DB
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-zinc-950 border border-cyan-500/30 rounded-[50px] p-10 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.2)] text-center"
          >
            {/* Efecto de fondo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full" />

            {!claimed ? (
              <>
                <div className="relative mb-8 flex justify-center">
                  <div className="p-6 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                    <Coins size={50} className="text-cyan-400 animate-bounce" />
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-full" 
                  />
                </div>

                <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-2">
                  Sincronización_Diaria
                </h3>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-8 leading-relaxed">
                  Detectado nuevo flujo de energía neural.<br /> Reclama tus activos de hoy.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-white/5 rounded-3xl border border-white/5">
                    <p className="text-[7px] font-black text-zinc-600 uppercase mb-1">Base_Drop</p>
                    <p className="text-xl font-black text-white italic">{userStats.baseReward} <span className="text-[8px] text-cyan-500">$FLOW</span></p>
                  </div>
                  <div className="p-4 bg-cyan-500/5 rounded-3xl border border-cyan-500/10">
                    <p className="text-[7px] font-black text-cyan-600 uppercase mb-1 flex items-center justify-center gap-1">
                      <Zap size={8} /> Bono_Minero
                    </p>
                    <p className="text-xl font-black text-cyan-500 italic">x{userStats.minerMultiplier}</p>
                  </div>
                </div>

                <button 
                  onClick={handleClaim}
                  className="w-full py-6 bg-white text-black rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-cyan-500 hover:text-white transition-all flex items-center justify-center gap-3 group"
                >
                  Reclamar_{userStats.totalToClaim}_$FLOW <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10"
              >
                <Sparkles size={60} className="text-emerald-500 mx-auto mb-6" />
                <h3 className="text-4xl font-black uppercase italic tracking-tighter text-emerald-500 mb-2">
                  ¡Transferido!
                </h3>
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em]">
                  Balance actualizado en tu Bóveda.
                </p>
              </motion.div>
            )}

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Box size={12} className="text-zinc-700" />
                <span className="text-[7px] font-black text-zinc-700 uppercase tracking-widest italic">Encrypted_Transaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}