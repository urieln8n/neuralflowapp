"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldAlert, CheckCircle2, Lock, AlertTriangle, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Bloqueo_Inicial",
    desc: "Al generar dividendos o depositar, los activos entran en fase de validación neural.",
    time: "0h - 24h",
    status: "Validando"
  },
  {
    title: "Maduración_Soberana",
    desc: "El Neural Engine estabiliza los fondos en la pool de liquidez institucional.",
    time: "24h - 48h",
    status: "Procesando"
  },
  {
    title: "Liberación_Final",
    desc: "Los fondos están 100% disponibles para retiro a tu wallet externa.",
    time: "48h - 72h",
    status: "Completado"
  }
];

export default function Protocolo72Page() {
  return (
    <div className="min-h-screen bg-[#020202] p-6 lg:p-10 space-y-12 italic">
      
      {/* HEADER TÁCTICO */}
      <div className="border-l-4 border-red-600 pl-6 space-y-2">
        <div className="flex items-center gap-2">
          <ShieldAlert size={14} className="text-red-600" />
          <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.5em]">Security_Protocol_Active</span>
        </div>
        <h1 className="text-7xl font-black text-white italic uppercase tracking-tighter leading-none">Protocolo_72h</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* EXPLICACIÓN DEL TIEMPO */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-10 rounded-[50px] bg-zinc-950 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent" />
            
            <p className="text-[11px] font-bold text-zinc-400 uppercase leading-relaxed mb-10">
              Para garantizar la estabilidad de los 100M de usuarios, implementamos un sistema de salida programada. 
              Esto evita la manipulación del mercado y protege tu capital frente a la volatilidad extrema.
            </p>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-black border border-white/5 hover:border-red-600/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-red-600 font-black">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-black text-white uppercase">{step.title}</h3>
                      <span className="text-[8px] font-black text-red-600 tracking-widest uppercase">{step.time}</span>
                    </div>
                    <p className="text-[10px] text-zinc-600 font-bold uppercase leading-tight">{step.desc}</p>
                  </div>
                  <CheckCircle2 size={16} className="text-zinc-800 group-hover:text-red-600 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* MONITOR DE ESTADO Y BLOQUEO */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-10 rounded-[60px] bg-red-600 text-white shadow-[0_20px_50px_rgba(220,38,38,0.2)]">
            <Clock size={40} strokeWidth={2.5} />
            <h3 className="text-3xl font-black uppercase mt-8 leading-none italic">Tiempo_de_Espera</h3>
            <div className="mt-10 space-y-2">
              <p className="text-6xl font-black italic tracking-tighter tabular-nums">71:59:58</p>
              <p className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]">Sincronizando_con_Blockchain...</p>
            </div>
          </div>

          <div className="p-8 rounded-[40px] bg-zinc-950 border border-white/5 space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-yellow-500" size={18} />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Aviso_Importante</span>
            </div>
            <p className="text-[9px] text-zinc-500 font-bold uppercase leading-relaxed">
              Cualquier intento de forzar el retiro antes del tiempo estipulado resultará en una penalización del 15% del capital, destinada a la quema (Burn) de tokens del ecosistema.
            </p>
            <button className="w-full flex items-center justify-center gap-2 py-4 border border-white/10 rounded-2xl text-[9px] font-black uppercase hover:bg-white hover:text-black transition-all group">
              Leer_Whitepaper <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}