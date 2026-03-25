"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Fingerprint, Lock, ShieldCheck, Zap, Activity } from "lucide-react";

export default function SecurityPage() {
  const [securityLevel, setSecurityLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setSecurityLevel(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-12 max-w-7xl mx-auto px-4 py-12">
      {/* CABECERA DE OPERACIONES */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-cyan-400" />
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-500/70 uppercase">Protocolo de Blindaje Activo</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
          SEGURIDAD_<span className="text-cyan-400">SOBERANA</span>
        </h1>
        <p className="text-gray-400 max-w-xl text-sm italic">
          Gestión de capas de cifrado y acceso biométrico para la infraestructura NeuralFlow. 
          Protección institucional para 100M de activos Alpha.
        </p>
      </header>

      {/* PANEL DE CONTROL CENTRAL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CARD: BIOMETRÍA (WEBAUTHN) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <Fingerprint className="w-20 h-20 text-cyan-400" />
          </div>
          <Fingerprint className="w-12 h-12 text-cyan-400 mb-6" />
          <h3 className="text-xl font-bold mb-2">ACCESO BIOMÉTRICO</h3>
          <p className="text-gray-500 text-xs mb-8">Vincular FaceID o TouchID como llave maestra para el Vault.</p>
          <button className="w-full py-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-2xl font-bold hover:bg-cyan-500 hover:text-black transition-all duration-300">
            VINCULAR LLAVE
          </button>
        </motion.div>

        {/* CARD: ESTADO DEL FIREWALL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl relative"
        >
          <Activity className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-xl font-bold mb-2">NODOS ALPHA</h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-5xl font-mono font-bold">124</span>
            <span className="text-purple-500 text-sm mb-2 font-bold animate-pulse">LIVE</span>
          </div>
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="h-full bg-gradient-to-r from-purple-600 to-cyan-400" 
            />
          </div>
          <p className="text-gray-500 text-[10px] mt-4 font-mono uppercase tracking-widest">Sincronización de Red: Óptima</p>
        </motion.div>

        {/* CARD: TIME-LOCK PROTOCOL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl group"
        >
          <Lock className="w-12 h-12 text-emerald-500 mb-6" />
          <h3 className="text-xl font-bold mb-2">TIME-LOCK VAULT</h3>
          <p className="text-gray-500 text-xs mb-6">Bloqueo de retiros por seguridad ante actividad inusual.</p>
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-mono text-emerald-500 font-bold">ACTIVO (72h Delay)</span>
          </div>
        </motion.div>

      </div>

      {/* TERMINAL DE LOGS DE AMENAZAS */}
      <footer className="bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-[10px] text-cyan-500/60">
        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
          <span>SISTEMA_INMUNE_LOGS</span>
          <span className="flex items-center gap-2 italic">
            <Zap className="w-3 h-3 fill-current" /> Nivel de Amenaza: CERO
          </span>
        </div>
        <div className="space-y-1">
          <p>[INFO] Escaneo de integridad completado: 0 vulnerabilidades detectadas.</p>
          <p>[INFO] Protocolo 100M-Scale preparado para balanceo de carga.</p>
          <p className="text-purple-500 animate-pulse">[SCAN] Monitoreando IPs de la red Alpha en tiempo real...</p>
        </div>
      </footer>
    </div>
  );
}