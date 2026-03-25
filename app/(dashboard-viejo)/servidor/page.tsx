"use client";

import React, { useState, useEffect } from "react";
import { 
  Server, Cpu, Database, Activity, 
  ShieldCheck, HardDrive, Zap, Globe 
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServidorPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#020202] p-6 lg:p-10 space-y-12 italic selection:bg-cyan-500/30">
      
      {/* HEADER DE INFRAESTRUCTURA */}
      <div className="space-y-2 border-l-4 border-cyan-500 pl-6">
        <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">System_Infrastructure_Core</span>
        <h1 className="text-7xl font-black text-white italic uppercase tracking-tighter leading-none">VPS_Cluster</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: DOCKER ORCHESTRATOR */}
        <div className="lg:col-span-2 p-10 rounded-[60px] bg-zinc-950 border border-white/5 relative overflow-hidden group shadow-2xl">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-500">
                <Server size={24} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic">Docker_Containers</h3>
            </div>
            <span className="px-4 py-1 bg-zinc-800 text-zinc-500 rounded-full text-[8px] font-black uppercase tracking-widest">Status: Standby</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "n8n_Automation", icon: <Zap size={14}/>, status: "Waiting", color: "text-zinc-600" },
              { name: "Flowise_AI", icon: <Cpu size={14}/>, status: "Waiting", color: "text-zinc-600" },
              { name: "Ollama_Llama3", icon: <Activity size={14}/>, status: "Waiting", color: "text-zinc-600" },
              { name: "PostgreSQL_DB", icon: <Database size={14}/>, status: "Waiting", color: "text-zinc-600" },
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 5 }}
                className="p-6 rounded-[30px] bg-black border border-white/5 flex justify-between items-center group-hover:border-cyan-500/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-cyan-500/50">{service.icon}</span>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{service.name}</span>
                </div>
                <span className={`${service.color} text-[8px] font-black uppercase`}>{service.status}</span>
              </motion.div>
            ))}
          </div>

          {/* BACKGROUND DECO */}
          <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
             <Server size={300} strokeWidth={1} />
          </div>
        </div>

        {/* COLUMNA DERECHA: HARDWARE SPECS (RECOMENDADO) */}
        <div className="space-y-8">
          <div className="p-10 rounded-[60px] bg-cyan-500 text-black shadow-[0_0_60px_rgba(6,182,212,0.2)] flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex justify-between items-start">
                <HardDrive size={40} strokeWidth={2.5} />
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-3xl font-black uppercase mt-8 leading-none">Nodo_Institucional</h3>
              <p className="text-[11px] font-black uppercase mt-4 opacity-80 leading-relaxed">
                Recomendado para 100M usuarios: <br/> 
                - 16 vCPU <br/>
                - 64GB RAM NVMe <br/>
                - GPU A100 (Opcional)
              </p>
            </div>
            
            <button className="w-full py-5 bg-black text-white rounded-[25px] font-black uppercase text-[10px] tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
              Vincular_VPS_Externo
            </button>
          </div>

          <div className="p-8 rounded-[40px] bg-zinc-950 border border-white/5 flex items-center gap-4">
             <Globe className="text-zinc-700" size={20} />
             <div>
                <p className="text-[8px] font-black text-zinc-600 uppercase">IP_Estatica</p>
                <p className="text-xs font-mono text-white tracking-widest">---.---.---.---</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}