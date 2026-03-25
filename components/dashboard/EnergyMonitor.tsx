"use client";

import React from "react";
import { useEconomy } from "@/hooks/useEconomy";
import { Battery, Zap, AlertTriangle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const EnergyMonitor = () => {
  const { energy, rechargeEnergy, tokens, isOperational } = useEconomy();

  // Lógica de colores institucional (Dopamina vs Urgencia)
  const getStatusConfig = () => {
    if (energy > 50) return { 
      color: "text-emerald-500", 
      bg: "bg-emerald-500", 
      label: "SISTEMA_ESTABLE",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
    };
    if (energy > 20) return { 
      color: "text-yellow-500", 
      bg: "bg-yellow-500", 
      label: "ENERGÍA_MEDIA",
      glow: "shadow-[0_0_15px_rgba(234,179,8,0.2)]" 
    };
    return { 
      color: "text-red-500", 
      bg: "bg-red-500", 
      label: "CRITICAL_HALT",
      glow: "shadow-[0_0_20px_rgba(239,68,68,0.4)]" 
    };
  };

  const status = getStatusConfig();

  return (
    <div className="p-6 rounded-[35px] bg-zinc-950 border border-white/5 backdrop-blur-3xl relative overflow-hidden group">
      
      {/* Decoración de fondo sutil */}
      <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-[50px] transition-colors duration-1000 ${status.bg}`} />

      <div className="relative z-10">
        {/* Cabecera del Monitor */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl bg-white/5 ${status.color}`}>
              {energy < 20 ? <AlertTriangle size={18} className="animate-pulse" /> : <Battery size={18} />}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 italic">
                {status.label}
              </span>
              <span className="text-[8px] font-bold text-zinc-700 uppercase">Neural_Core_v2.1</span>
            </div>
          </div>
          <div className="text-right">
            <span className={`text-2xl font-black font-mono tracking-tighter ${status.color}`}>
              {energy.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Barra de Progreso Institucional */}
        <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden mb-6 border border-white/5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${energy}%` }}
            transition={{ type: "spring", stiffness: 50 }}
            className={`h-full ${status.bg} ${status.glow} relative`}
          >
            {/* Efecto de flujo en la barra */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[shimmer_2s_infinite] -translate-x-full" />
          </motion.div>
        </div>

        {/* Botón de Acción: Solo aparece o se destaca cuando es necesario */}
        <AnimatePresence>
          {energy < 100 && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={rechargeEnergy}
              disabled={tokens < 5}
              className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 group/btn
                ${energy < 20 
                  ? 'bg-red-500 text-white shadow-[0_10px_20px_rgba(239,68,68,0.2)]' 
                  : 'bg-white/5 text-zinc-400 hover:bg-white hover:text-black border border-white/5'}
                ${tokens < 5 && 'opacity-50 cursor-not-allowed grayscale'}
              `}
            >
              <RefreshCw size={14} className="group-hover/btn:rotate-180 transition-transform duration-700" />
              <span className="text-[10px] font-black uppercase tracking-widest">
                {tokens < 5 ? `SALDO INSUFICIENTE (5 $FLOW)` : `RECARGAR_PROTOCOLO (5 $FLOW)`}
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {!isOperational && (
          <p className="text-center mt-4 text-[9px] font-bold text-red-500/50 uppercase tracking-tighter animate-pulse italic">
            Producción de $FLOW detenida por falta de energía
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};