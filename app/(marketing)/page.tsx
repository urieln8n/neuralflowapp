"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useTransform, useInView } from 'framer-motion';
import { 
  Zap, Cpu, ShieldCheck, ChevronRight, Orbit, Database, 
  GraduationCap, Play, BrainCircuit, Send, CheckCircle2, 
  Loader2, User, Beaker, Coins, Sparkles, Box, ShieldAlert,
  ArrowDown, Terminal, Globe, Lock, BarChart3, Activity,
  Server, Share2, Layers, MousePointer2, Radio, Target, Search,
  ArrowUpRight, Fingerprint, HardDrive, Wifi, Code2
} from 'lucide-react';
import Link from 'next/link';

// --- [ UTILS & CONSTANTS ] ---
const NEURAL_PURPLE = "#8b5cf6";
const FLOW_CYAN = "#06b6d4";

// --- 1. COMPONENTE: TICKER DE DATOS (DATA_STREAM) ---
const Ticker = () => {
  const tickerData = useMemo(() => [
    { s: "BTC/USD", v: "68,432.12", c: "+2.1%", up: true },
    { s: "ETH/USD", v: "3,821.45", c: "+0.5%", up: true },
    { s: "NEURAL/GOV", v: "4.82", c: "+15.4%", up: true },
    { s: "FLOW/LIQ", v: "1.24", c: "-2.3%", up: false },
    { s: "SOL/USD", v: "185.20", c: "+5.1%", up: true },
    { s: "NODE_LATENCY", v: "12ms", c: "STABLE", up: true },
    { s: "TPS_SYNC", v: "145k", c: "MAX", up: true },
    { s: "SYS_LOAD", v: "14%", c: "LOW", up: true },
  ], []);

  return (
    <div className="fixed top-[72px] left-0 right-0 z-[250] bg-black/60 backdrop-blur-md border-b border-white/5 h-10 flex items-center overflow-hidden">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-16 px-16"
      >
        {[...tickerData, ...tickerData].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-help">
            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] group-hover:text-purple-500 transition-colors">{item.s}</span>
            <span className="text-[10px] font-black text-white italic tracking-tighter">${item.v}</span>
            <span className={`text-[8px] font-black px-2 py-0.5 rounded-full ${item.up ? 'bg-cyan-500/10 text-cyan-400' : 'bg-purple-500/10 text-purple-500'}`}>
              {item.c}
            </span>
            <div className="w-1 h-1 bg-zinc-800 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- 2. COMPONENTE: NAVBAR (NAV_BRIDGE) ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[300] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-10">
        <div className={`flex items-center justify-between px-10 py-3 rounded-[35px] border transition-all duration-1000 ${
          scrolled ? 'bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)]' : 'bg-transparent border-transparent'
        }`}>
          <Link href="/" className="flex items-center gap-4 group">
            <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-2xl group-hover:bg-purple-500 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-500">
              <Zap className="text-purple-500 group-hover:text-white" size={22} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl tracking-tighter uppercase text-white italic">
                Neural<span className="text-cyan-500">Flow</span>
              </span>
              <span className="text-[6px] font-black text-zinc-600 tracking-[0.5em] uppercase">Auth_Verified</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {['Nexus', 'Terminal', 'Sovereignty', 'Ecosystem'].map((t) => (
              <Link key={t} href={`#${t.toLowerCase()}`} className="relative group overflow-hidden">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 group-hover:text-white transition-colors italic">
                  {t}_
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
              <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest italic">Node_Active</span>
            </div>
            <Link href="/dashboard">
              <button className="relative group px-10 py-4 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-purple-600 hover:text-white transition-all shadow-xl active:scale-95 overflow-hidden">
                <span className="relative z-10">Launch_App</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- 3. COMPONENTE: CLAIM_FLOW_MODAL (REWARD_SYSTEM) ---
const ClaimFlowModal = () => {
  const [show, setShow] = useState(false);
  const [claimed, setClaimed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-6">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 50 }} 
        animate={{ scale: 1, opacity: 1, y: 0 }} 
        className="bg-[#050505] border-2 border-purple-500/20 p-16 rounded-[60px] max-w-lg w-full text-center relative overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full" />
        
        {!claimed ? (
          <>
            <div className="w-24 h-24 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
              <Coins className="text-cyan-400 animate-bounce" size={40} />
            </div>
            <h3 className="text-4xl font-black uppercase italic text-white mb-4 tracking-tighter">
              Yield_<span className="text-purple-500">Capture</span>
            </h3>
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-12 max-w-xs mx-auto leading-relaxed">
              Tu nodo ha generado <span className="text-cyan-500">25.50 $FLOW</span> en las últimas 24h. ¿Sincronizar con la bóveda principal?
            </p>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setClaimed(true)} 
                className="w-full py-6 bg-white text-black rounded-[25px] font-black uppercase text-[11px] tracking-[0.4em] hover:bg-cyan-500 hover:text-white transition-all shadow-2xl active:scale-95"
              >
                Claim_Rewards
              </button>
              <button onClick={() => setShow(false)} className="text-[8px] font-black text-zinc-700 uppercase tracking-widest hover:text-zinc-500 transition-colors">ignorar_transmisión</button>
            </div>
          </>
        ) : (
          <div className="py-12 space-y-6">
            <CheckCircle2 className="text-cyan-400 mx-auto animate-pulse" size={60} />
            <h3 className="text-2xl font-black uppercase italic text-white">Sincronización_Completa</h3>
            <div className="h-1 w-32 bg-zinc-900 mx-auto rounded-full overflow-hidden">
              <motion.div initial={{ x: -100 }} animate={{ x: 100 }} transition={{ repeat: Infinity, duration: 1 }} className="h-full w-1/2 bg-cyan-500" />
            </div>
            <button onClick={() => setShow(false)} className="text-[10px] font-black text-zinc-500 uppercase tracking-widest border border-white/5 px-8 py-3 rounded-full hover:bg-white/5 transition-all">Regresar_al_Nexo</button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// --- 4. COMPONENTE: SIDEBAR (IDENTIDAD_SISTEMA) ---
const Sidebar = () => (
  <aside className="fixed left-0 top-0 h-screen w-80 border-r border-white/5 bg-[#030303]/90 backdrop-blur-3xl z-[200] hidden xl:flex flex-col p-12 justify-between italic">
    <div className="space-y-24">
      <div className="flex flex-col gap-1 px-4">
        <h2 className="font-black text-3xl uppercase text-white tracking-tighter group">
          N_<span className="text-purple-500 group-hover:text-cyan-500 transition-colors">Flow</span>
        </h2>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-purple-500 rounded-full" />
          <p className="text-[7px] font-black text-zinc-600 uppercase tracking-[0.5em]">Auth_Socio_Alpha_v2</p>
        </div>
      </div>

      <nav className="space-y-12">
        {[
          { n: 'Dash_Nexus', i: Orbit, c: 'purple' },
          { n: 'Bio_Lab', i: Beaker, c: 'cyan' },
          { n: 'Sec_Protocol', i: Lock, c: 'purple' },
          { n: 'Flow_Academy', i: GraduationCap, c: 'cyan' },
          { n: 'Data_Nodes', i: Database, c: 'purple' },
        ].map(item => (
          <Link key={item.n} href="#" className="flex items-center gap-6 group px-4">
            <item.i size={20} className={`text-zinc-700 group-hover:text-${item.c === 'purple' ? '[#8b5cf6]' : '[#06b6d4]'} transition-all group-hover:scale-110`} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">{item.n}</span>
          </Link>
        ))}
      </nav>
    </div>

    <div className="space-y-8">
      <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-4">
        <div className="flex items-center justify-between text-[8px] font-black text-zinc-500 uppercase tracking-widest">
          <span>Cpu_Load</span>
          <span className="text-cyan-500">34%</span>
        </div>
        <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
          <motion.div animate={{ width: "34%" }} className="h-full bg-cyan-500" />
        </div>
        <div className="flex items-center justify-between text-[8px] font-black text-zinc-500 uppercase tracking-widest">
          <span>Mem_Sync</span>
          <span className="text-purple-500">Secure</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 p-4 rounded-3xl bg-zinc-950 border border-white/5 hover:border-purple-500/30 transition-all group">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center border border-white/5 group-hover:rotate-12 transition-transform">
          <User size={20} className="text-purple-400" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-black text-white uppercase italic tracking-tighter">Socio_Alpha_001</span>
          <span className="text-[7px] text-zinc-600 font-black uppercase tracking-widest mt-1">Status: God_Mode</span>
        </div>
      </div>
    </div>
  </aside>
);

// --- 5. SECCIÓN: FEATURE_GRID (LOS PILARES) ---
const FeatureCard = ({ icon: Icon, title, desc, color }: any) => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="p-16 bg-[#080808] border border-white/5 rounded-[60px] relative overflow-hidden group hover:border-white/10 transition-all"
    >
      <div className={`absolute -top-12 -right-12 w-48 h-48 bg-${color === 'purple' ? 'purple-500' : 'cyan-500'}/5 blur-[60px] rounded-full group-hover:bg-${color === 'purple' ? 'purple-500' : 'cyan-500'}/10 transition-all`} />
      <Icon size={48} className={`mb-10 text-${color === 'purple' ? 'purple-500' : 'cyan-400'} group-hover:scale-110 transition-transform duration-700`} />
      <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-6 underline decoration-white/5 underline-offset-[12px]">{title}</h3>
      <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-[2] group-hover:text-zinc-300 transition-colors italic">
        {desc}
      </p>
    </motion.div>
  );
};

// --- 6. PÁGINA MAESTRA (THE MOTHERBOARD) ---
export default function InstitutionalLanding() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);
  const bannerX = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div className="bg-[#020202] text-white min-h-screen italic selection:bg-purple-500/30 font-sans overflow-x-hidden">
      
      {/* CAPA DE FONDO: EL VACÍO DIGITAL */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03),transparent_100%)]" />
      </div>

      <Navbar />
      <Ticker />
      <ClaimFlowModal />
      <Sidebar />

      {/* BARRA DE PROGRESO ALPHA */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600 z-[301] origin-left" style={{ scaleX: smoothProgress }} />

      <main className="xl:ml-80 relative z-10">
        
        {/* [ HERO_PROTOCOL ] */}
        <section className="relative h-[110vh] flex flex-col justify-center px-12 lg:px-32">
          <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
            <motion.div 
              initial={{ x: -30, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              className="py-3 px-8 border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-black uppercase tracking-[1em] rounded-full mb-12 inline-flex items-center gap-4"
            >
              <Radio size={14} className="animate-pulse" />
              Broadcasting_Neural_Signal_2026
            </motion.div>
            
            <h1 className="text-[15vw] font-black uppercase italic tracking-tighter leading-[0.75] mb-20">
              Neural<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-900 drop-shadow-[0_0_60px_rgba(139,92,246,0.3)]">
                Flow.
              </span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-24 items-start lg:items-center">
              <div className="max-w-xl space-y-8">
                <p className="text-zinc-500 text-base font-black uppercase tracking-[0.2em] leading-relaxed italic border-l-4 border-cyan-500/40 pl-10">
                  La infraestructura soberana definitiva para el 1% digital. Ejecución de baja latencia, <span className="text-white">inteligencia predictiva</span> y protocolos de liquidez para 100 millones de usuarios.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020202] bg-zinc-900 overflow-hidden"><img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="avatar" /></div>)}
                  </div>
                  <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest italic">Actualmente_Sincronizados: 12.4k_SOCIOS</span>
                </div>
              </div>
              <Link href="/dashboard" className="relative group">
                <div className="absolute inset-0 bg-purple-600 blur-[40px] opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                <button className="px-20 py-10 bg-white text-black rounded-[40px] font-black uppercase text-[12px] tracking-[0.6em] hover:bg-purple-600 hover:text-white transition-all shadow-2xl flex items-center gap-8 group overflow-hidden">
                  <span className="relative z-10">INICIAR_SISTEMA</span>
                  <ChevronRight size={24} className="relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
                </button>
              </Link>
            </div>
          </motion.div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
            <ArrowDown size={30} />
          </div>
        </section>

        {/* [ MARQUEE_TECH ] */}
        <section className="py-20 bg-zinc-950/40 border-y border-white/5 overflow-hidden">
          <motion.div style={{ x: bannerX }} className="flex whitespace-nowrap gap-20">
            {Array(10).fill(null).map((_, i) => (
              <span key={i} className="text-[12rem] font-black uppercase italic tracking-tighter opacity-[0.02] select-none">
                Neural_Sovereignty_Flow_Control_AI_Nexus_
              </span>
            ))}
          </motion.div>
        </section>

        {/* [ NEXUS_ENGINEERING ] */}
        <section id="nexus" className="py-64 px-12 lg:px-32 relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <div className="space-y-16">
              <div className="flex items-center gap-6 text-cyan-400 font-black tracking-[1em] text-xs uppercase italic">
                <div className="h-px w-20 bg-cyan-400" /> core_architecture
              </div>
              <h2 className="text-8xl lg:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.8]">
                Doxo_<span className="text-purple-600 underline decoration-purple-600/10 underline-offset-[30px]">Nexus</span>
              </h2>
              <p className="text-zinc-500 text-xl font-black uppercase tracking-[0.1em] leading-relaxed italic max-w-2xl border-l-2 border-purple-500/20 pl-12">
                Nuestra arquitectura de red "Nexus" permite la sincronización total de <span className="text-cyan-500 italic">flujos de capital</span> globales mediante nodos de inteligencia artificial. No es solo software, es un organismo digital.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[45px] hover:border-cyan-500/30 transition-all">
                  <Server className="text-cyan-500 mb-6" size={32} />
                  <h4 className="font-black text-sm uppercase tracking-widest mb-4 italic text-white">Infra_Dedicada</h4>
                  <p className="text-[9px] text-zinc-600 font-black uppercase leading-loose">Servidores de grado institucional con redundancia triple en 4 continentes.</p>
                </div>
                <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[45px] hover:border-purple-500/30 transition-all">
                  <Fingerprint className="text-purple-500 mb-6" size={32} />
                  <h4 className="font-black text-sm uppercase tracking-widest mb-4 italic text-white">Biometría_EVM</h4>
                  <p className="text-[9px] text-zinc-600 font-black uppercase leading-loose">Protocolos de acceso únicos vinculados a tu firma criptográfica soberana.</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-transparent rounded-full blur-[100px] animate-pulse" />
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border border-white/5 rounded-full relative flex items-center justify-center"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_#8b5cf6]" />
                <div className="absolute bottom-1/2 right-0 translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_20px_#06b6d4]" />
                <div className="w-[80%] h-[80%] border border-white/5 rounded-full flex items-center justify-center italic">
                  <div className="text-center">
                    <Cpu size={120} className="text-white mx-auto mb-6 opacity-80" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 italic">Central_Node_Sync</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* [ CORE_FEATURES_GRID ] */}
        <section id="terminal" className="py-64 px-12 lg:px-32 border-t border-white/5 bg-[#030303]/40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1700px] mx-auto">
            <FeatureCard 
              icon={BrainCircuit} 
              title="Predictor_IA" 
              color="purple" 
              desc="Modelos de enjambre que analizan el sentimiento global y flujos 'on-chain' para predecir el próximo movimiento del mercado antes que el 99%." 
            />
            <FeatureCard 
              icon={Activity} 
              title="Execution_Flow" 
              color="cyan" 
              desc="Motor de ejecución ultra-rápida integrado con los mayores DEX y CEX, optimizando el deslizamiento (slippage) a niveles institucionales." 
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="Guardian_V2" 
              color="purple" 
              desc="Blindaje neural multicapa. Protegemos tus activos con una arquitectura de boveda fría (Cold-Flow) integrada directamente en la interfaz." 
            />
            <FeatureCard 
              icon={Globe} 
              title="Multi_Link" 
              color="cyan" 
              desc="Conéctate a cualquier red (Solana, Ethereum, Arbitrum, Base) desde un solo terminal centralizado y soberano." 
            />
            <FeatureCard 
              icon={HardDrive} 
              title="Data_Ledger" 
              color="purple" 
              desc="Historial inmutable de todas tus operaciones. Exportación directa para auditorías de alto nivel y control fiscal privado." 
            />
            <FeatureCard 
              icon={Target} 
              title="Alpha_Scanner" 
              color="cyan" 
              desc="Detección automática de preventas, lanzamientos de liquidez y pools de arbitraje en tiempo real con alertas vía Telegram/Discord." 
            />
          </div>
        </section>

        {/* [ ECOSYSTEM_TERMINAL ] */}
        <section id="ecosystem" className="py-64 px-12 lg:px-32 border-y border-white/5 relative bg-black">
          <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center space-y-24">
            <div className="space-y-8">
              <span className="text-[10px] font-black text-purple-500 uppercase tracking-[1.5em] italic">Knowledge_Access_Protocol</span>
              <h2 className="text-7xl lg:text-[9rem] font-black uppercase italic tracking-tighter leading-none italic">
                Controla_el_<span className="text-cyan-500">Flujo</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5 rounded-[50px] overflow-hidden p-1 shadow-2xl">
              {[
                { t: 'Academia_Alpha', d: 'Domina los conceptos de la IA y el arbitraje.', i: GraduationCap, bg: '0' },
                { t: 'Signals_Terminal', d: 'Recibe señales de entrada/salida 24/7.', i: Radio, bg: '1' },
                { t: 'Laboratorio_I+D', d: 'Prueba tus propios bots en entorno sandbox.', i: Beaker, bg: '2' },
              ].map((item, idx) => (
                <div key={idx} className="bg-black p-20 hover:bg-white/[0.02] transition-all cursor-pointer group">
                  <item.i size={40} className="text-purple-500 mb-8 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-white italic">{item.t}</h4>
                  <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{item.d}</p>
                </div>
              ))}
            </div>

            <Link href="/dashboard">
              <button className="px-16 py-8 border-2 border-white/10 rounded-full text-[12px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all italic">
                Explorar_Ecosistema_Completo
              </button>
            </Link>
          </div>
        </section>

        {/* [ SUBSCRIPTION_ALPHA ] */}
        <section className="py-64 px-12 lg:px-32 bg-[#020202]">
          <div className="relative group overflow-hidden bg-white rounded-[70px] p-20 lg:p-32 flex flex-col lg:flex-row items-center justify-between gap-24 shadow-[0_50px_120px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full" />
            
            <div className="space-y-10 z-10 max-w-2xl">
              <div className="flex items-center gap-4 text-purple-600 font-black tracking-[0.8em] text-xs uppercase italic">
                <Send size={18} /> News_Transmission
              </div>
              <h2 className="text-6xl lg:text-8xl font-black uppercase italic tracking-tighter text-black leading-none italic">
                Sincroniza tu <span className="text-purple-600 underline decoration-purple-600/20 underline-offset-8 italic">Terminal</span>_
              </h2>
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] leading-relaxed italic border-l-2 border-zinc-200 pl-8">
                Recibe el informe "Neural Intelligence" semanal. Los datos que mueven los mercados, entregados en formato crudo para socios Alpha.
              </p>
            </div>

            <form className="w-full lg:w-auto flex-1 max-w-lg z-10 relative">
              <input 
                type="email" 
                placeholder="TU_ENLACE@EMAIL.COM" 
                className="w-full bg-zinc-50 border-b-4 border-zinc-200 p-10 text-[12px] font-black uppercase text-black focus:outline-none focus:border-purple-600 transition-all placeholder:text-zinc-300 italic" 
              />
              <button className="absolute right-6 top-1/2 -translate-y-1/2 p-6 bg-black text-white rounded-[30px] hover:bg-purple-600 transition-all shadow-2xl group/btn">
                <ChevronRight size={30} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

          {/* [ FINAL_FOOTER ] */}
          <footer className="mt-64 flex flex-col lg:flex-row justify-between items-center gap-16 border-t border-white/5 pt-24 pb-20">
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-black uppercase tracking-[1em] text-white italic">NeuralFlow_2026</span>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[8px] font-black text-zinc-700 uppercase tracking-widest italic">All_Systems_Operational_0x442A</span>
              </div>
            </div>

            <div className="flex gap-16">
              {[
                { n: 'Status', i: Radio },
                { n: 'Legal', i: Box },
                { n: 'Privacy', i: ShieldAlert },
                { n: 'X_Channel', i: Share2 },
              ].map(link => (
                <Link key={link.n} href="#" className="flex flex-col items-center gap-3 group">
                  <link.i size={20} className="text-zinc-700 group-hover:text-cyan-500 transition-colors" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-zinc-800 group-hover:text-white transition-colors italic">{link.n}</span>
                </Link>
              ))}
            </div>

            <div className="max-w-[200px] text-right">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-800 leading-loose italic">
                Construido para la generación de los 100M. Sincronización soberana completa. No se requiere permiso.
              </p>
            </div>
          </footer>
        </section>

      </main>

      {/* [ GLOBAL_ENGINE_STYLES ] */}
      <style jsx global>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020202; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #8b5cf6; }
        .font-outline-1 { -webkit-text-stroke: 1px rgba(255,255,255,0.1); color: transparent; }
        @media (max-width: 1024px) {
          .text-[15vw] { font-size: 20vw; }
          .text-[12rem] { font-size: 8rem; }
        }
      `}</style>
    </div>
  );
}