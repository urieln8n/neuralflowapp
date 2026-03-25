"use client";
import { motion } from "framer-motion";

export default function LoadingEntry() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      {/* Círculos de Escaneo */}
      <div className="relative w-48 h-48 mb-8">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-t-cyan-500 border-r-transparent border-b-transparent border-l-transparent rounded-full"
        />
        <div className="absolute inset-4 border border-white/5 rounded-full flex items-center justify-center">
          <span className="text-cyan-500 font-black italic animate-pulse">CONNECTING</span>
        </div>
      </div>
      
      {/* Texto de Carga de Datos */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-[2px] w-64 bg-zinc-900 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]"
          />
        </div>
        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">
          Decrypting Neural Layer...
        </span>
      </div>
    </motion.div>
  );
}