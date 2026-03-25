"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X, ChevronRight, Globe, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Detectar el scroll para cambiar el estado del Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[300] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`relative flex items-center justify-between px-6 py-3 rounded-[30px] transition-all duration-700 border ${
            isScrolled 
            ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent'
          }`}
        >
          {/* LOGO IZQUIERDA */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500 transition-all duration-500">
              <Zap className="text-cyan-500 group-hover:text-black" size={20} />
            </div>
            <span className="font-black text-lg tracking-tighter uppercase text-white italic">
              Neural<span className={`${isScrolled ? 'text-cyan-500' : 'text-purple-500'} transition-colors`}>Flow</span>
            </span>
          </Link>

          {/* MENÚ CENTRAL (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {['Tecnología', 'Ecosistema', 'Seguridad', 'Academia'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-cyan-500 transition-colors italic"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* ACCIONES DERECHA */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 mr-4">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest italic">Node_Active</span>
            </div>

            <Link href="/dashboard">
              <button className="px-6 py-3 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-cyan-500 hover:text-white transition-all shadow-lg active:scale-95">
                Acceso_Nexo
              </button>
            </Link>

            {/* MOBILE TOGGLE */}
            <button 
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2 text-white hover:bg-white/5 rounded-xl transition-all"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* MENÚ MÓVIL (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-10 gap-8">
              {['Tecnología', 'Ecosistema', 'Seguridad', 'Academia'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  onClick={() => setMobileMenu(false)}
                  className="text-2xl font-black uppercase italic tracking-tighter text-zinc-500 hover:text-cyan-500"
                >
                  {item}_
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}