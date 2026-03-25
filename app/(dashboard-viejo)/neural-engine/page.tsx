"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Activity, Brain, Fingerprint, Layers, Zap } from "lucide-react";

export default function NeuralEnginePage() {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(Math.floor(Math.random() * 15) + 30); // Simulación de carga base 30-45%
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] p-6 lg:p-10 space-y-10 italic selection:bg-cyan-500/30">
      
      {/* HEADER DEL MOTOR */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white/5 pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">Neural_Processing_Unit</span>
          </div>
          <h1 className="text-7xl font-black text-white italic uppercase tracking-tighter leading-none">Neural_Engine</h1>
        </div>
        
        <div className="bg-zinc-950 border border-white/5 p-6 rounded-[30px] flex items-center gap-6">
          <div className="text-right">
            <p className="text-[8px] font-black text-zinc-600 uppercase">Modelo_Activo</p>
            <p className="text-sm font-black text-white italic uppercase tracking-widest">Llama-3-Sovereign</p>
          </div>
          <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500">
            <Brain size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* MONITOR DE CARGA NEURAL */}
        <div className="lg:col-span-8 p-10 rounded-[60px] bg-zinc-950 border border-white/5 relative overflow-hidden group shadow-2xl">
          <div className="relative z-10">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-10">Sincronización_Cerebral_en_Tiempo_Real</p>
            
            <div className="flex items-baseline gap-6 mb-16">
              <h2 className="text-[10rem] font-black text-white italic tracking-tighter leading-none tabular-nums">
                {load}<span className="text-4xl text-cyan-500">%</span>
              </h2>
            </div>

            {/* BARRAS DE PROCESAMIENTO */}
            <div className="space-y-6 pt-10 border-t border-white/5">
              {[
                { label: "Inferencia_Lógica", width: "w-[85%]" },
                { label: "Análisis_de_Sentimiento", width: "w-[62%]" },
                { label: "Extracción_de_Alpha", width: "w-[94%]" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[8px] font-black text-zinc-600 uppercase tracking-widest">
                    <span>{item.label}</span>
                    <span className="text-cyan-500/50">Optimal</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: item.width.split('-')[1] }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                      className="h-full bg-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOGS DE INTELIGENCIA */}
        <div className="lg:col-span-4 p-8 rounded-[50px] bg-black border border-white/5 flex flex-col justify-between overflow-hidden">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Fingerprint size={16} className="text-cyan-500" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Cognitive_Logs</span>
            </div>
            
            <div className="space-y-4 font-mono text-[9px] text-zinc-500 uppercase">
              <p className="text-cyan-500/60"> {">"} Inicializando_Pesos_Neuronales...</p>
              <p> {">"} Conectando_con_Ollama_v1.2...</p>
              <p> {">"} Analizando_Bloque_Solana_#4829...</p>
              <p className="text-emerald-500/60"> {">"} Patrón_Alpha_Detectado_en_JUP</p>
              <p> {">"} Re-calculando_Ruta_de_Arbitraje...</p>
              <div className="pt-4 border-t border-white/5">
                 <p className="animate-pulse">_Esperando_Input_del_Socio...</p>
              </div>
            </div>
          </div>

          <button className="w-full py-5 mt-10 bg-white text-black rounded-[25px] font-black uppercase text-[10px] tracking-widest hover:bg-cyan-500 hover:text-white transition-all shadow-xl">
            Reiniciar_Engine
          </button>
        </div>
      </div>
    </div>
  );
}