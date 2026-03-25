"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, ShieldCheck, Activity } from 'lucide-react';

// Tipado para el motor de logs
interface LogEntry {
  id: number;
  time: string;
  msg: string;
  type: 'success' | 'info' | 'action';
}

export default function NeuralEngine() {
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: 1, time: "00:00:01", msg: "INITIALIZING_CORE_V2...", type: "info" }
  ]);
  const [load, setLoad] = useState(84.2);

  // EFECTO 1: Generador de Dopamina (Logs en tiempo real)
  useEffect(() => {
    const messages = [
      "SCANNING_LIQUIDITY_POOL_X92",
      "ARBITRAGE_OPPORTUNITY_DETECTED",
      "ENCRYPTING_TRANSACTION_BLOCK",
      "NEURAL_NODE_SYNCHRONIZED",
      "EXECUTING_SMART_CONTRACT_V4",
      "SHIELD_PROTOCOL_REINFORCED"
    ];

    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString('en-GB', { hour12: false }),
        msg: messages[Math.floor(Math.random() * messages.length)],
        type: Math.random() > 0.7 ? 'success' : 'action'
      };

      setLogs(prev => [newLog, ...prev].slice(0, 6)); // Mantiene solo los últimos 6
      setLoad(prev => +(prev + (Math.random() * 2 - 1)).toFixed(1)); // Fluctuación de carga
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-8 md:p-12 bg-[#020202] rounded-[40px] md:rounded-[60px] border border-white/5 overflow-hidden backdrop-blur-2xl">
      {/* Glow Effect de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[120px] -z-10" />

      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-cyan-500/10 rounded-3xl border border-cyan-500/20">
            <Cpu className="text-cyan-500 animate-pulse" size={32} />
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">Neural Engine</h2>
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Protocol_v1.0.4_Active</p>
          </div>
        </div>
        
        {/* Indicadores de Actividad */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
              className="h-2 w-2 bg-cyan-500 rounded-full" 
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Terminal de Ejecución Dinámica */}
        <div className="bg-black rounded-[40px] p-8 border border-white/5 font-mono text-[11px] min-h-[220px]">
          <div className="flex items-center gap-3 text-zinc-700 pb-4 border-b border-white/5 mb-4">
            <Terminal size={14} className="text-cyan-500" /> 
            <span className="font-black italic uppercase tracking-widest">System_Live_Stream</span>
          </div>
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {logs.map((log) => (
                <motion.div 
                  key={log.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex gap-4"
                >
                  <span className="text-zinc-800">[{log.time}]</span>
                  <span className={
                    log.type === 'success' ? 'text-emerald-500' : 
                    log.type === 'action' ? 'text-cyan-400 font-bold' : 'text-zinc-500'
                  }>
                    {log.msg}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Status Card con Load Dinámico */}
        <div className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-500">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
               <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Neural_Load</p>
               <Activity size={14} className="text-cyan-500 animate-bounce" />
            </div>
            <motion.p 
              key={load}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-5xl font-black italic tracking-tighter text-white"
            >
              {load}%
            </motion.p>
          </div>
          
          <div className="pt-6 border-t border-white/5 flex justify-between items-center">
            <span className="text-[10px] font-black uppercase italic text-cyan-500 group-hover:tracking-[0.2em] transition-all">Sovereign_Shield_Active</span>
            <ShieldCheck size={20} className="text-cyan-500" />
          </div>
        </div>
      </div>
    </div>
  );
}