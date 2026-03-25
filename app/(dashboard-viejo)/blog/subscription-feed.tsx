"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';

export default function SubscriptionFeed() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulación de conexión con n8n / Base de Datos
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 2000);
  };

  return (
    <section className="relative p-1 bg-gradient-to-r from-zinc-800 via-white/20 to-zinc-800 rounded-[50px] overflow-hidden shadow-2xl">
      <div className="bg-white rounded-[49px] p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-2 text-zinc-400">
            <ShieldCheck size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Protocolo_Privacidad_Activo</span>
          </div>
          <h4 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-black leading-none">
            Únete al <br /> <span className="text-cyan-600">Feed_Alpha</span>
          </h4>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-relaxed">
            Recibe reportes tácticos de IA y Cripto directamente en tu terminal. Sin spam, solo valor puro.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="relative w-full md:w-auto flex-1 max-w-md">
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div 
                key="input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative group"
              >
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ID_DE_ENLACE@EMAIL.COM" 
                  className="w-full bg-zinc-100 border-b-4 border-zinc-200 p-6 pr-20 text-[11px] font-black uppercase tracking-widest text-black focus:outline-none focus:border-cyan-500 transition-all placeholder:text-zinc-300"
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-4 bg-black text-white rounded-2xl hover:bg-cyan-600 transition-all flex items-center justify-center"
                >
                  {status === 'loading' ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-500/20 text-emerald-600"
              >
                <CheckCircle2 size={40} className="mb-2 animate-bounce" />
                <p className="text-[10px] font-black uppercase tracking-widest text-center">Protocolo_Activado: Revisa tu Nexus</p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

      </div>
    </section>
  );
}