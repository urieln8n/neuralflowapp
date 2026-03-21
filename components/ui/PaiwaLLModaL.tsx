"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lock, Rocket, MessageCircle, X } from "lucide-react";

export default function PaiwallModaL({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("¡Hola! Quiero desbloquear el Plan de 30 días de NeuralFlow para escalar mi negocio 🚀");
    window.open(`https://wa.me/TU_NUMERO?text=${msg}`, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
          className="relative bg-[#0A0A0A] border border-white/10 p-8 rounded-[2.5rem] max-w-md w-full shadow-2xl text-center"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white">
            <X size={20} />
          </button>

          <div className="w-20 h-20 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            <Lock size={40} className="text-white" />
          </div>

          <h2 className="text-3xl font-black italic mb-4 tracking-tighter uppercase">
            Misión <span className="text-cyan-400">Bloqueada</span>
          </h2>
          
          <p className="text-gray-400 mb-8 font-medium">
            Has completado la fase gratuita. Para acceder a la hoja de ruta completa de 30 días y las herramientas avanzadas de IA, necesitas el **Plan Pro**.
          </p>

          <div className="space-y-4">
            <button 
              onClick={handleWhatsApp}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-black text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:scale-105 transition-transform"
            >
              <Rocket size={18} /> Desbloquear ahora
            </button>
            
            <button 
              onClick={handleWhatsApp}
              className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> Hablar con soporte
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}