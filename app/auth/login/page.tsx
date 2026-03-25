"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, ShieldCheck, Zap, Loader2, LockIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NeuralAuthPage() {
  const [status, setStatus] = useState<"idle" | "scanning" | "verifying" | "granted">("idle");
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const startAuth = () => {
    setStatus("scanning");
    // Simulación de escaneo de red y biometría
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("verifying");
          setTimeout(() => {
            setStatus("granted");
            setTimeout(() => router.push("/laboratorio"), 1200);
          }, 1500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
  };

  return (
    <div className="min-h-screen bg-[#020202] flex items-center justify-center p-6 italic">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d405_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-12 rounded-[60px] bg-zinc-950 border border-white/5 relative overflow-hidden shadow-2xl"
      >
        {/* LÍNEA DE ESCANEO ANIMADA */}
        <AnimatePresence>
          {status === "scanning" && (
            <motion.div 
              initial={{ top: 0 }}
              animate={{ top: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-cyan-500 shadow-[0_0_15px_#06b6d4] z-20"
            />
          )}
        </AnimatePresence>

        <div className="text-center space-y-8 relative z-10">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 relative">
              {status === "granted" ? (
                <ShieldCheck className="text-emerald-500" size={40} />
              ) : (
                <Fingerprint className={status === "scanning" ? "text-cyan-500 animate-pulse" : "text-zinc-700"} size={40} />
              )}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">
              {status === "idle" && "Neural_Auth"}
              {status === "scanning" && "Escaneando_Nodo"}
              {status === "verifying" && "Verificando_Hash"}
              {status === "granted" && "Acceso_Concedido"}
            </h2>
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-2">
              Protocolo_Sovereign_v2.0
            </p>
          </div>

          {status === "idle" ? (
            <button 
              onClick={startAuth}
              className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase text-xs hover:bg-cyan-500 hover:text-white transition-all shadow-xl active:scale-95"
            >
              Iniciar_Sincronización
            </button>
          ) : (
            <div className="space-y-4">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-[8px] font-black text-zinc-600 uppercase tracking-widest">
                <span>Cargando_Core...</span>
                <span>{progress}%</span>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-white/5 flex items-center justify-center gap-2">
            <LockIcon size={12} className="text-zinc-800" />
            <span className="text-[8px] font-black text-zinc-800 uppercase tracking-widest">Encriptación_End_to_End_256bit</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}