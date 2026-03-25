"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Bell, Target, TrendingUp, X } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "ARBITRAGE" | "REWARD" | "SYSTEM";
}

export function NeuralNotifications() {
  const [notif, setNotif] = useState<Notification | null>(null);

  // SIMULACIÓN: Disparar una alerta aleatoria cada 45 segundos para generar dopamina
  useEffect(() => {
    const trigger = setTimeout(() => {
      setNotif({
        id: "1",
        title: "Oportunidad_Arbitraje",
        message: "Detectado diferencial de +1.2% en nodo_Beta. Ejecución recomendada.",
        type: "ARBITRAGE"
      });
    }, 5000); // Aparece a los 5 segundos de entrar

    return () => clearTimeout(trigger);
  }, []);

  return (
    <div className="fixed top-24 right-8 z-[999] w-80 pointer-events-none">
      <AnimatePresence>
        {notif && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            className="pointer-events-auto p-6 rounded-[35px] bg-zinc-950/80 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden group"
          >
            {/* Efecto de escaneo de fondo */}
            <motion.div 
              animate={{ y: [0, 100, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent h-1/2 opacity-20 pointer-events-none"
            />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                <Target size={18} />
              </div>
              <div className="flex-1 italic">
                <div className="flex justify-between items-start">
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest leading-none">
                    {notif.title}
                  </h4>
                  <button onClick={() => setNotif(null)} className="text-zinc-700 hover:text-white transition-colors">
                    <X size={12} />
                  </button>
                </div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase leading-relaxed mt-2">
                  {notif.message}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5 }}
                      className="h-full bg-cyan-500"
                    />
                  </div>
                  <span className="text-[8px] font-black text-cyan-500">EXPIRA</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}