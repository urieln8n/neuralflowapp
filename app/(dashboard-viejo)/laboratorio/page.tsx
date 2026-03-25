"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Activity, Terminal, Fingerprint, 
  ShieldCheck, ArrowUpRight, Cpu, Beaker,
  Search, BarChart3, Binary, FlaskConical, Globe,
  Layers, Database, Network, Box, RefreshCcw, 
  Settings, Power, HardDrive, Share2, Code2,
  Lock, Unlock, CpuIcon, Workflow, Container
} from "lucide-react";

// --- TIPOS Y SCHEMAS PARA EL LABORATORIO ALPHA ---
interface NodeStatus {
  id: string;
  name: string;
  status: 'online' | 'syncing' | 'offline';
  load: number;
  temp: number;
  uptime: string;
  type: 'Docker' | 'Ollama' | 'n8n' | 'Flowise';
}

interface ArbitrageLog {
  id: string;
  pair: string;
  route: string;
  profit: string;
  latency: string;
  timestamp: string;
}

// --- CONSTANTES DE INFRAESTRUCTURA ---
const AGENT_TASKS = [
  "ANALIZANDO_VULNERABILIDADES_DE_LIQUIDEZ...",
  "OPTIMIZANDO_PESOS_NEURALES_V4...",
  "ESCANEO_DEX_SOLANA_COMPLETO",
  "SINCRONIZANDO_N8N_WORKFLOW_ALPHA",
  "LLM_OLLAMA_LISTO_PARA_INFERENCIA",
  "PUERTO_NGROK_ESTABLE_PROTOCOL_77"
];

// --- HELPER DE SIMULACIÓN AVANZADA ---
const generateLog = (): ArbitrageLog => {
  const pairs = ["SOL/USDC", "NEURAL/SOL", "BTC/FLOW", "JUP/USDC"];
  const routes = ["Binance > n8n > Orca", "Raydium > Flowise > Jupiter", "Ollama > Core > DEX"];
  return {
    id: Math.random().toString(36).substr(2, 9).toUpperCase(),
    pair: pairs[Math.floor(Math.random() * pairs.length)],
    route: routes[Math.floor(Math.random() * routes.length)],
    profit: `+${(Math.random() * 1.5).toFixed(4)}%`,
    latency: `${(Math.random() * 150 + 20).toFixed(0)}ms`,
    timestamp: new Date().toLocaleTimeString()
  };
};

export default function LaboratorioPage() {
  // --- ESTADOS DE LA PLATAFORMA ---
  const [mounted, setMounted] = useState(false);
  const [isMining, setIsMining] = useState(false);
  const [balance, setBalance] = useState(0);
  const [activeTab, setActiveTab] = useState<'orchestrator' | 'terminal' | 'infrastructure'>('orchestrator');
  const [logs, setLogs] = useState<ArbitrageLog[]>([]);
  const [nodes, setNodes] = useState<NodeStatus[]>([
    { id: '1', name: 'Docker_Engine_Main', status: 'online', load: 42, temp: 38, uptime: '14d 2h', type: 'Docker' },
    { id: '2', name: 'Ollama_Llama3_Node', status: 'syncing', load: 88, temp: 54, uptime: '02d 5h', type: 'Ollama' },
    { id: '3', name: 'n8n_Automator', status: 'online', load: 15, temp: 31, uptime: '45d 1h', type: 'n8n' },
    { id: '4', name: 'Flowise_Agent_UI', status: 'online', load: 24, temp: 33, uptime: '12d 8h', type: 'Flowise' },
  ]);
  const [commandInput, setCommandInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>(["SISTEMA_INICIALIZADO_V2.0", "CARGANDO_KERNELES_DE_IA..."]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const miningRate = 0.000185;

  // --- EFECTOS DE INICIALIZACIÓN ---
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("neural_lab_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      setBalance(parsed.balance || 0);
      setIsMining(parsed.isMining || false);
    }
  }, []);

  useEffect(() => {
    if (isMining && mounted) {
      const interval = setInterval(() => {
        setBalance(prev => {
          const next = prev + miningRate;
          if (Math.random() > 0.95) {
            localStorage.setItem("neural_lab_state", JSON.stringify({ balance: next, isMining: true }));
          }
          return next;
        });
      }, 100);

      const logInterval = setInterval(() => {
        setLogs(prev => [generateLog(), ...prev].slice(0, 10));
        setTerminalOutput(prev => [...prev, AGENT_TASKS[Math.floor(Math.random() * AGENT_TASKS.length)]].slice(-15));
      }, 2500);

      return () => {
        clearInterval(interval);
        clearInterval(logInterval);
      };
    }
  }, [isMining, mounted]);

  // --- HANDLERS ---
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput) return;
    setTerminalOutput(prev => [...prev, `> user@neural: ${commandInput}`, `EJECUTANDO_PROCESO_${commandInput.toUpperCase()}...`]);
    setCommandInput("");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-purple-500/30 overflow-hidden">
      
      {/* CAPA DE FONDO CINEMÁTICA */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <main className="relative z-10 p-4 lg:p-8 max-w-[1800px] mx-auto space-y-8">
        
        {/* HEADER TÁCTICO */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-8 italic">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#8b5cf6]" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-ping" />
              </div>
              <span className="text-[10px] font-black tracking-[0.5em] text-zinc-500 uppercase">Neural_Core_Lab / 2026_V1</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase leading-none">
              Laboratorio <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">I+D_</span>
            </h1>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/50 p-2 rounded-[30px] border border-white/5 backdrop-blur-md">
            {['orchestrator', 'terminal', 'infrastructure'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-3 rounded-[22px] text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* DASHBOARD PRINCIPAL (GRID 12 COLUMNAS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          
          {/* PANEL IZQUIERDO: CONTROL DE POTENCIA */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-zinc-950 border border-white/5 rounded-[50px] p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu size={80} className="text-purple-500" />
              </div>
              
              <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-6 italic">Sistema_Energético</p>
              
              <div className="space-y-2 mb-12">
                <span className="text-5xl font-black italic tracking-tighter tabular-nums block">
                  {balance.toFixed(6)}
                </span>
                <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] italic">$NEURAL_CONCENTRADO</span>
              </div>

              <button 
                onClick={() => setIsMining(!isMining)}
                className={`w-full py-8 rounded-[35px] flex flex-col items-center justify-center gap-4 transition-all duration-500 border-2 ${
                  isMining 
                  ? "bg-purple-600 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.3)]" 
                  : "bg-white border-white text-black hover:bg-purple-500 hover:text-white"
                }`}
              >
                <Power size={32} className={isMining ? "animate-pulse" : ""} />
                <span className="text-[11px] font-black uppercase tracking-[0.4em]">
                  {isMining ? "APAGAR_REACTOR" : "INICIAR_REACTOR"}
                </span>
              </button>
            </div>

            <div className="bg-zinc-950 border border-white/5 rounded-[50px] p-8 space-y-6">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic border-b border-white/5 pb-4">Métricas_En_Vivo</h3>
              {[
                { label: 'Carga_Docker', val: '64%', color: 'text-cyan-400' },
                { label: 'Uso_GPU_Ollama', val: '82%', color: 'text-purple-500' },
                { label: 'Tráfico_n8n', val: '1.2GB/s', color: 'text-white' },
                { label: 'Túnel_Ngrok', val: 'Activo', color: 'text-emerald-500' },
              ].map((m, i) => (
                <div key={i} className="flex justify-between items-end group cursor-default">
                  <span className="text-[9px] font-black text-zinc-600 uppercase group-hover:text-zinc-400 transition-colors">{m.label}</span>
                  <span className={`text-lg font-black italic ${m.color}`}>{m.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PANEL CENTRAL: VISUALIZACIÓN DINÁMICA */}
          <div className="lg:col-span-6 space-y-8">
            <AnimatePresence mode="wait">
              {activeTab === 'orchestrator' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  className="bg-zinc-950 border border-white/5 rounded-[60px] p-10 h-[650px] relative overflow-hidden flex flex-col"
                >
                  <div className="flex justify-between items-center mb-10 relative z-10">
                    <div>
                      <h2 className="text-3xl font-black uppercase italic tracking-tighter">Orquestador_Neural</h2>
                      <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1 italic">Mapeo_de_agentes_en_tiempo_real</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-500"><Network size={16} /></div>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400"><Share2 size={16} /></div>
                    </div>
                  </div>

                  {/* Visualización de Nodos (Simulación de Red) */}
                  <div className="flex-1 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent)] animate-pulse" />
                    <div className="grid grid-cols-2 gap-12 relative z-10">
                      {nodes.map((node) => (
                        <motion.div 
                          key={node.id}
                          whileHover={{ scale: 1.05, rotate: 1 }}
                          className="bg-black/40 border border-white/5 p-6 rounded-[40px] w-64 backdrop-blur-xl group/node relative overflow-hidden"
                        >
                          <div className={`absolute top-0 left-0 w-1 h-full ${node.status === 'online' ? 'bg-emerald-500' : 'bg-yellow-500'}`} />
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-white/5 rounded-2xl group-hover/node:bg-purple-500/20 transition-colors">
                              {node.type === 'Docker' && <Container size={20} className="text-cyan-400" />}
                              {node.type === 'Ollama' && <CpuIcon size={20} className="text-purple-500" />}
                              {node.type === 'n8n' && <Workflow size={20} className="text-white" />}
                              {node.type === 'Flowise' && <Layers size={20} className="text-zinc-400" />}
                            </div>
                            <span className="text-[8px] font-black text-zinc-700 uppercase">{node.status}</span>
                          </div>
                          <h4 className="text-[11px] font-black uppercase tracking-widest mb-1 truncate">{node.name}</h4>
                          <p className="text-[8px] text-zinc-500 font-mono mb-4 italic">Load: {node.load}% / Temp: {node.temp}°C</p>
                          <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: `${node.load}%` }} 
                              className={`h-full ${node.load > 80 ? 'bg-red-500' : 'bg-purple-500'}`} 
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-white/5 rounded-[30px] flex items-center justify-between italic">
                    <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Protocolo_De_Seguridad: AES-256_ACTIVE</span>
                    <ShieldCheck size={18} className="text-emerald-500" />
                  </div>
                </motion.div>
              )}

              {activeTab === 'terminal' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
                  className="bg-black border border-purple-500/20 rounded-[60px] h-[650px] flex flex-col font-mono overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.1)]"
                >
                  <div className="p-6 border-b border-white/5 bg-zinc-950 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                    </div>
                    <span className="text-[10px] text-purple-500/50 font-black tracking-widest italic">NEURAL_KERNEL_TERMINAL</span>
                  </div>
                  
                  <div className="flex-1 p-8 overflow-y-auto space-y-2 text-[11px] custom-scrollbar">
                    {terminalOutput.map((out, i) => (
                      <p key={i} className={out.startsWith('>') ? "text-white" : "text-purple-400/80 italic font-medium"}>
                        <span className="text-zinc-700 mr-3">[{new Date().toLocaleTimeString()}]</span> {out}
                      </p>
                    ))}
                    <div className="flex items-center gap-3 pt-4 text-white">
                      <span>{'>'}</span>
                      <form onSubmit={handleCommand} className="flex-1">
                        <input 
                          autoFocus
                          value={commandInput}
                          onChange={(e) => setCommandInput(e.target.value)}
                          className="bg-transparent border-none outline-none w-full placeholder:text-zinc-800"
                          placeholder="Escribir_Comando_Soberano..."
                        />
                      </form>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* PANEL DERECHO: ARBITRAJE Y DATA FEED */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-zinc-950 border border-white/5 rounded-[50px] p-8 h-[650px] flex flex-col">
              <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
                <Activity size={18} className="text-cyan-400" />
                <h3 className="text-[10px] font-black uppercase tracking-widest italic">Live_Arbitrage_Feed</h3>
              </div>

              <div className="flex-1 space-y-4 overflow-y-hidden relative">
                <AnimatePresence>
                  {logs.map((log) => (
                    <motion.div 
                      key={log.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-6 bg-white/[0.02] border border-white/5 rounded-[30px] space-y-3 relative group hover:bg-white/[0.04] transition-colors italic"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black text-white">{log.pair}</span>
                        <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">{log.profit}</span>
                      </div>
                      <p className="text-[9px] text-zinc-600 uppercase font-mono truncate">{log.route}</p>
                      <div className="flex justify-between items-center text-[8px] text-zinc-700 font-black">
                        <span>LATENCY: {log.latency}</span>
                        <span>ID: {log.id}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="flex justify-between text-[9px] font-black text-zinc-600 uppercase italic mb-2">
                  <span>Sincronía_Escáner</span>
                  <span className="text-cyan-400 animate-pulse">99.9%</span>
                </div>
                <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="h-full w-1/2 bg-gradient-to-r from-cyan-400 to-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SECCIÓN INFERIOR: MISIONES Y DESBLOQUEOS (ALTA DENSIDAD) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
          {[
            { 
              name: "Nodal_Infector", 
              desc: "Simulador de inyección de liquidez en capas L2.", 
              icon: <Binary />, 
              status: 'locked' 
            },
            { 
              name: "Ollama_Brain_v4", 
              desc: "Entrenamiento de modelos LLM locales con datos de mercado.", 
              icon: <BrainCircuit />, 
              status: 'unlocked' 
            },
            { 
              name: "Flowise_Auto_Pilot", 
              desc: "Agentes autónomos que operan mientras duermes.", 
              icon: <Workflow />, 
              status: 'locked' 
            }
          ].map((item, i) => (
            <div 
              key={i}
              className={`p-10 rounded-[45px] border border-dashed transition-all duration-500 flex flex-col gap-6 relative group ${
                item.status === 'locked' 
                ? 'border-white/5 opacity-40 grayscale hover:grayscale-0' 
                : 'border-purple-500/30 bg-purple-500/[0.02] opacity-100 hover:border-purple-500'
              }`}
            >
              <div className="flex justify-between items-start italic">
                <div className={`p-5 rounded-[25px] ${item.status === 'locked' ? 'bg-zinc-900' : 'bg-purple-500/20 text-purple-500'}`}>
                  {item.icon}
                </div>
                {item.status === 'locked' ? <Lock size={16} className="text-zinc-800" /> : <Unlock size={16} className="text-purple-500" />}
              </div>
              <div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter mb-2">{item.name}</h4>
                <p className="text-[10px] text-zinc-500 font-bold leading-relaxed uppercase tracking-widest">{item.desc}</p>
              </div>
              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER TÉCNICO */}
        <footer className="pt-24 pb-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30 italic">
          <div className="flex items-center gap-6">
            <span className="text-[8px] font-black uppercase tracking-[0.6em]">NeuralFlow_Systems_LLC</span>
            <div className="w-1 h-1 rounded-full bg-zinc-800" />
            <span className="text-[8px] font-black uppercase tracking-[0.6em]">Soberanía_Digital_2026</span>
          </div>
          <div className="flex gap-8 text-[8px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-purple-500 transition-colors underline decoration-purple-500/20 underline-offset-8">Kernel_Update</a>
            <a href="#" className="hover:text-cyan-400 transition-colors underline decoration-cyan-400/20 underline-offset-8">Alpha_Access</a>
            <a href="#" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-8">Nodes_Map</a>
          </div>
        </footer>

      </main>

      {/* ESTILOS ADICIONALES PARA SCROLLBAR Y ANIMACIONES */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(139, 92, 246, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(139, 92, 246, 0.5); }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </div>
  );
}

// Iconos adicionales necesarios
const BrainCircuit = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.241 4.987 4.987 0 0 0 8.003-3.136" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.52 8.241 4.987 4.987 0 0 1-8.003-3.136" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="12" y1="10" x2="12" y2="16" />
  </svg>
);