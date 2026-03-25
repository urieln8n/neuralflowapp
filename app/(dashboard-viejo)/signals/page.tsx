"use client";

import React, { useState, useEffect } from "react";
import { useWeb3 } from "@/hooks/useWeb3"; // Asegúrate de que useWeb3 devuelva isConnected
import { 
  Zap, ShieldAlert, TrendingUp, BarChart3, 
  Globe, Lock, ArrowUpRight, CheckCircle2 
} from "lucide-react";

export default function SignalsPage() {
  const { account, isConnected, connectWallet } = useWeb3();
  
  // Datos simulados (Pronto vendrán de n8n/Ollama)
  const [signals] = useState([
    { pair: "SOL/USDC", type: "BUY", price: "145.20", confidence: "92%", time: "Reciente", status: "Active" },
    { pair: "JUP/SOL", type: "HOLD", price: "1.12", confidence: "78%", time: "2m ago", status: "Watching" },
    { pair: "PYTH/SOL", type: "BUY", price: "0.45", confidence: "85%", time: "5m ago", status: "Active" },
  ]);

  return (
    <div className="min-h-screen bg-[#020202] p-6 lg:p-10 space-y-10 italic selection:bg-cyan-500/30">
      
      {/* HEADER DINÁMICO DE LA TERMINAL */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white/5 pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em]">Neural_Alpha_Radar_v1.0</span>
          </div>
          <h1 className="text-7xl font-black text-white italic uppercase tracking-tighter leading-none">Terminal_Signals</h1>
        </div>
        
        {isConnected && (
          <div className="bg-zinc-950 border border-white/5 px-6 py-3 rounded-2xl flex items-center gap-4">
            <div className="text-right">
              <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">Socio_Identificado</p>
              <p className="text-[10px] font-black text-white uppercase">{account?.slice(0, 6)}...{account?.slice(-4)}</p>
            </div>
            <CheckCircle2 size={18} className="text-emerald-500" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* COLUMNA DE SEÑALES (EL CORE) */}
        <div className="lg:col-span-8 space-y-4">
          {!isConnected ? (
            /* ESTADO BLOQUEADO: PSICOLOGÍA DE ACCESO */
            <div className="relative min-h-[500px] rounded-[60px] border border-dashed border-white/10 bg-zinc-950/20 flex flex-col items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-cyan-500/50 transition-all duration-700">
                  <Lock size={32} className="text-cyan-500" />
                </div>
                <h2 className="text-3xl font-black text-white uppercase italic mb-4 tracking-tighter">Firma_Digital_Requerida</h2>
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] max-w-sm mb-10 leading-relaxed font-bold">
                  Las señales de alta frecuencia están encriptadas. Conecte su Wallet para activar el Neural Engine y visualizar el Alpha de Solana.
                </p>
                <button 
                  onClick={connectWallet}
                  className="bg-white text-black px-10 py-4 rounded-[22px] font-black uppercase text-[11px] tracking-widest hover:bg-cyan-500 hover:text-white transition-all shadow-2xl"
                >
                  Vincular_MetaMask_Ahora
                </button>
              </div>
              
              {/* FONDO BORROSO (FALSO CONTENIDO) */}
              <div className="w-full p-10 space-y-6 opacity-10 blur-sm">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 bg-zinc-800 rounded-[30px]" />
                ))}
              </div>
            </div>
          ) : (
            /* TERMINAL DESBLOQUEADA */
            <div className="space-y-4 animate-in fade-in duration-700">
              {signals.map((sig, i) => (
                <div key={i} className="group p-8 rounded-[40px] bg-zinc-950 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all" />
                  
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner ${
                      sig.type === 'BUY' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {sig.type === 'BUY' ? <TrendingUp size={24} /> : <BarChart3 size={24} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">{sig.pair}</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="text-[8px] font-black bg-white/5 px-2 py-0.5 rounded text-zinc-500 uppercase">Price: ${sig.price}</span>
                        <span className="text-[8px] font-black bg-cyan-500/10 px-2 py-0.5 rounded text-cyan-500 uppercase">Confianza: {sig.confidence}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-10">
                    <div className="text-right hidden sm:block">
                      <p className="text-[8px] font-black text-zinc-700 uppercase tracking-widest">Time_Log</p>
                      <p className="text-sm font-black text-zinc-400 italic">{sig.time}</p>
                    </div>
                    <button className="flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-[20px] font-black uppercase text-[10px] tracking-widest group-hover:bg-white group-hover:text-black transition-all">
                      Operar <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SIDEBAR DE STATS */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-10 rounded-[50px] bg-zinc-950 border border-white/5 space-y-8">
            <div className="flex items-center gap-3">
              <Globe className="text-cyan-500" size={18} />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Global_Net_Metrics</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-[9px] font-black text-zinc-600 uppercase">Uptime_IA</span>
                <span className="text-[10px] font-black text-emerald-500">99.9%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-[9px] font-black text-zinc-600 uppercase">Latencia_Radar</span>
                <span className="text-[10px] font-black text-white">45ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black text-zinc-600 uppercase">Tokens_Analyzed</span>
                <span className="text-[10px] font-black text-cyan-500">+1.2M</span>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-[50px] bg-gradient-to-br from-zinc-900 to-black border border-white/10 space-y-6 group">
             <ShieldAlert className="text-red-500 group-hover:scale-110 transition-transform" size={32} />
             <h4 className="text-xl font-black text-white uppercase italic leading-none">Aviso_de_Riesgo</h4>
             <p className="text-[9px] font-bold text-zinc-500 uppercase leading-relaxed">
               Las señales del Neural Engine son herramientas de asistencia. El mercado de Solana es altamente volátil. Invierta solo capital que esté dispuesto a perder.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}