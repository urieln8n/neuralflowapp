"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, Lock, ChevronRight, Activity, Terminal, 
  ShieldCheck, Zap, Cpu, Play, X, Monitor, Download, CheckCircle2
} from 'lucide-react';

interface AcademyModule {
  id: number;
  code: string;
  title: string;
  locked: boolean;
  details: string[];
  videoUrl: string;
}

export default function Protocol72h() {
  const [isScanning, setIsScanning] = useState(false);
  const [selectedModule, setSelectedModule] = useState<AcademyModule | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [completedPhases, setCompletedPhases] = useState<number[]>([]);

  const modules: AcademyModule[] = [
    { 
      id: 1, 
      code: "PHASE_01", 
      title: "Arquitectura Soberana", 
      locked: false,
      details: ["Configuración de Nodo", "Seguridad Encriptada", "Genesis Alpha"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
    },
    { 
      id: 2, 
      code: "PHASE_02", 
      title: "Motores de Arbitraje", 
      locked: !completedPhases.includes(1),
      details: ["Liquidity Scanning", "Flash Loans Intro", "Cross-chain Ops"],
      videoUrl: "" 
    },
    { 
      id: 3, 
      code: "PHASE_03", 
      title: "Escalado de Red 100M", 
      locked: !completedPhases.includes(2),
      details: ["Sistemas Autónomos", "IA Integrada", "Sovereign Finality"],
      videoUrl: "" 
    }
  ];

  const handleModuleAccess = (module: AcademyModule) => {
    if (module.locked) return;
    setSelectedModule(module);
    setIsScanning(true);
    
    setTimeout(() => {
      setIsScanning(false);
      setShowContent(true);
    }, 3000);
  };

  const completePhase = (id: number) => {
    setCompletedPhases([...completedPhases, id]);
    setShowContent(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20">
      
      {/* 1. HEADER INSTITUCIONAL */}
      <header className="relative p-10 border border-white/10 rounded-[40px] bg-zinc-900/40 overflow-hidden">
        <div className="flex items-center gap-8 relative z-10">
          <div className="p-5 bg-cyan-500/10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <ShieldAlert className="text-cyan-500" size={40} />
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">
              Neural <span className="text-zinc-500">Academy</span>
            </h1>
            <p className="text-[10px] text-cyan-500 font-mono tracking-[0.3em] uppercase mt-1 italic">
              Nivel de Acceso: Soberano // Ref: 72H-Alpha
            </p>
          </div>
        </div>
      </header>

      {/* 2. GRID DE MÓDULOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {modules.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-8 rounded-[48px] border transition-all duration-700 ${
              m.locked 
              ? 'bg-zinc-900/10 border-white/5 opacity-40' 
              : 'bg-white text-black border-white shadow-2xl scale-[1.02]'
            }`}
          >
            <div className="flex justify-between mb-10 text-[10px] font-black uppercase tracking-widest opacity-40">
              <span>{m.code}</span>
              {completedPhases.includes(m.id) ? <CheckCircle2 size={18} className="text-emerald-500" /> : m.locked ? <Lock size={18} /> : <Zap size={18} className="text-cyan-600 animate-pulse" />}
            </div>
            <h3 className="text-2xl font-black uppercase italic mb-10 leading-none tracking-tighter">{m.title}</h3>
            <button 
              onClick={() => handleModuleAccess(m)}
              disabled={m.locked}
              className={`w-full py-5 rounded-[24px] flex items-center justify-center gap-3 font-black uppercase text-[11px] tracking-widest transition-all ${
                m.locked ? 'bg-zinc-800 text-zinc-600' : 'bg-black text-white hover:bg-cyan-600'
              }`}
            >
              {m.locked ? 'Acceso Restringido' : completedPhases.includes(m.id) ? 'Repasar Fase' : 'Iniciar Fase'}
              {!m.locked && <Play size={14} fill="currentColor" />}
            </button>
          </motion.div>
        ))}
      </div>

      {/* 3. OVERLAY DE ESCANEO */}
      <AnimatePresence>
        {isScanning && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center">
            <div className="text-center space-y-8 max-w-sm w-full p-10">
              <div className="w-32 h-32 border border-cyan-500/20 rounded-full mx-auto flex items-center justify-center relative">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-t-2 border-cyan-500 rounded-full" />
                <ShieldCheck className="text-cyan-500" size={48} />
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-black tracking-[0.4em] uppercase italic">Sincronizando</h3>
                <p className="text-zinc-500 text-[10px] font-mono animate-pulse uppercase">Encriptando túnel de datos para {selectedModule?.code}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MODAL DE CONTENIDO DE VALOR (HOJA DE RUTA Y DESCARGAS) */}
      <AnimatePresence>
        {showContent && selectedModule && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] bg-black overflow-y-auto">
            <div className="min-h-screen w-full p-4 md:p-10 flex items-center justify-center">
              <div className="w-full max-w-6xl bg-[#050505] rounded-[48px] border border-white/10 overflow-hidden shadow-2xl relative">
                
                {/* Header Modal */}
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-zinc-900/20">
                  <div className="flex items-center gap-4">
                    <Monitor className="text-cyan-500" size={20} />
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.2em] italic">
                      Operación: {selectedModule.title} // Genesis_OS
                    </span>
                  </div>
                  <button onClick={() => setShowContent(false)} className="p-3 hover:bg-white/5 rounded-full text-white transition-all"><X size={24} /></button>
                </div>

                <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                  {/* Lado Izquierdo: Hoja de Ruta */}
                  <div className="flex-1 p-10 space-y-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-px flex-1 bg-cyan-500/20"></div>
                      <span className="text-cyan-500 text-[9px] font-black uppercase tracking-widest">Procedimiento de 10 Pasos</span>
                      <div className="h-px flex-1 bg-cyan-500/20"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Protocolo de Arranque", "Mapeo de Red Alpha", "Seguridad Perimetral", 
                        "Inyección de Datos", "Sincronía de Nodos", "Test de Latencia",
                        "Encriptación Final", "Validación Operativa", "Backup en Nube", "Cierre de Fase"
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group">
                          <span className="text-zinc-700 font-black text-xs group-hover:text-cyan-500">0{i+1}</span>
                          <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-tight">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lado Derecho: Descargas */}
                  <div className="w-full lg:w-96 p-10 bg-black/40 space-y-8">
                    <div className="p-6 rounded-[32px] bg-cyan-500/5 border border-cyan-500/10 space-y-6">
                      <h4 className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-3 italic">
                        <Download size={14} className="text-cyan-500" /> Assets Clasificados
                      </h4>
                      <div className="space-y-3">
                        {["MANUAL_ALPHA_V1.pdf", "CONFIG_GENESIS.json", "ASSETS_RESTRIC.zip"].map((file, i) => (
                          <button key={i} className="w-full p-4 rounded-2xl bg-black border border-white/5 flex items-center justify-between group hover:bg-white transition-all">
                            <span className="text-[9px] font-black uppercase group-hover:text-black">{file}</span>
                            <Download size={12} className="text-zinc-600 group-hover:text-black" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => completePhase(selectedModule.id)}
                      className="w-full py-6 rounded-[32px] bg-emerald-500 text-black font-black text-[11px] uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:scale-[1.05] transition-all"
                    >
                      Certificar y Finalizar Fase
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. FOOTER DE CONSOLA */}
      <footer className="p-8 bg-[#050505] border border-white/5 rounded-[40px] flex items-center justify-between">
        <div className="flex items-center gap-4 font-mono">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">
              Sistema Operativo: <span className="text-white">GENESIS_V.2</span> // Sesión Segura
            </span>
        </div>
        <div className="hidden md:flex gap-1.5 opacity-20">
          {[...Array(10)].map((_, i) => <div key={i} className="w-4 h-1 bg-white rounded-full" />)}
        </div>
      </footer>
    </div>
  );
}