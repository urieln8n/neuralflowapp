"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, Zap, Shield, Radar, 
  Orbit, Gauge, Cpu, Globe, 
  ChevronRight, Terminal, Radio,
  BrainCircuit
} from 'lucide-react';

// --- COMPONENTE DE TELEMETRÍA (Módulos flotantes) ---
const TelemetryCard = ({ title, value, unit, icon: Icon, color }: any) => (
  <div className="p-6 rounded-[30px] bg-zinc-950 border border-white/5 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity text-${color}-500`}>
      <Icon size={40} />
    </div>
    <p className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-4">{title}</p>
    <div className="flex items-baseline gap-2">
      <span className="text-4xl font-black text-white italic tracking-tighter">{value}</span>
      <span className={`text-[10px] font-black text-${color}-500 uppercase`}>{unit}</span>
    </div>
    <div className="mt-4 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }} 
        animate={{ width: "70%" }} 
        className={`h-full bg-${color}-500 shadow-[0_0_10px_#06b6d4]`} 
      />
    </div>
  </div>
);

export default function SpaceDashboard() {
  return (
    <div className="min-h-screen bg-[#020202] text-white p-6 lg:p-12 italic overflow-hidden">
      
      {/* HEADER: STATUS DE LA NAVE */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">Sistema_Operativo_Nivel_V</span>
          </div>
          <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none">Puente_de_Mando.</h1>
        </div>
        
        <div className="flex gap-4 p-2 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-xl">
           <div className="px-4 py-2 text-center border-r border-white/10">
              <p className="text-[7px] font-black text-zinc-600 uppercase">Propulsión</p>
              <p className="text-xs font-black text-emerald-500">OPTIMAL</p>
           </div>
           <div className="px-4 py-2 text-center">
              <p className="text-[7px] font-black text-zinc-600 uppercase">Escudos</p>
              <p className="text-xs font-black text-cyan-500">98.4%</p>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUMNA IZQUIERDA: TELEMETRÍA */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TelemetryCard title="Carga_Neural" value="14.2" unit="XP/S" icon={Cpu} color="cyan" />
            <TelemetryCard title="Velocidad_Red" value="0.04" unit="MS" icon={Zap} color="emerald" />
            <TelemetryCard title="Capacidad_IA" value="89" unit="TOPS" icon={BrainCircuit} color="purple" />
          </div>

          {/* VISUALIZADOR CENTRAL (RADARES) */}
          <div className="relative h-[450px] rounded-[50px] bg-zinc-950 border border-white/5 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            {/* Radar Animado */}
            <div className="relative w-80 h-80">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-cyan-500/20 rounded-full border-t-cyan-500" 
              />
              <div className="absolute inset-4 border border-white/5 rounded-full" />
              <div className="absolute inset-12 border border-white/5 rounded-full" />
              <Radar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-500/40" size={40} />
              
              {/* Puntos de Señal */}
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-20 right-10 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute bottom-24 left-16 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />
            </div>

            <div className="absolute bottom-10 left-10 space-y-2">
               <p className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                 <Radio size={12} className="text-red-500" /> Detección_Activa: DEX_Solana
               </p>
               <p className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.3em]">Coordenadas: 40.7128° N, 74.0060° W</p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: LOG DE SISTEMA */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-8 rounded-[40px] bg-zinc-950 border border-white/5 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-zinc-500">
               <Terminal size={14} />
               <span className="text-[10px] font-black uppercase tracking-widest">Consola_Sistema</span>
            </div>
            
            <div className="flex-1 font-mono text-[9px] text-emerald-500/70 space-y-4">
              <p className="">{`> Iniciando Protocolo de Expansión...`}</p>
              <p className="">{`> Sincronizando con N8N Webhook... OK`}</p>
              <p className="text-cyan-500">{`> Inyectando Inteligencia de Flujo...`}</p>
              <p className="text-white animate-pulse">{`> NUEVA SEÑAL DETECTADA: $SOL +4.2%`}</p>
              <p className="">{`> Escaneando billeteras ballena... 892 encontradas`}</p>
              <p className="text-zinc-700">{`> Esperando comandos del Socio_Alpha...`}</p>
            </div>

            <button className="mt-8 w-full py-6 bg-white text-black rounded-[25px] font-black uppercase text-[10px] tracking-widest hover:bg-cyan-500 hover:text-white transition-all flex items-center justify-center gap-4">
              Ejecutar_Orden <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}