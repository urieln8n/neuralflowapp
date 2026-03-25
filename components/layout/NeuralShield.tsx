"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Zap, Book, Users, Home } from 'lucide-react';

// Importaciones de tus módulos
import PulseDashboard from "@/components/dashboard/PulseDashboard";
import NeuralEngine from "@/components/engine/NeuralEngine";
import Protocol72h from "@/components/training/Protocol72h";
import GrowthMap from "@/components/economy/GrowthMap";

// Definimos la interfaz para evitar el error en la línea 15
interface NeuralShieldProps {
  children?: React.ReactNode;
}

export default function NeuralShield({ children }: NeuralShieldProps) {
  const [activeTab, setActiveTab] = useState('MARKETING');

  const menuItems = [
    { id: 'MARKETING', name: 'HOME', icon: <Home size={18} /> },
    { id: 'BRIDGE', name: 'BRIDGE', icon: <LayoutGrid size={18} /> },
    { id: 'ENGINE', name: 'NEURAL ENGINE', icon: <Zap size={18} /> },
    { id: 'PROTOCOL', name: 'PROTOCOL 72H', icon: <Book size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'MARKETING': return children; // Aquí se muestra el Hero/Marketing
      case 'BRIDGE': return <PulseDashboard />;
      case 'ENGINE': return <NeuralEngine />;
      case 'PROTOCOL': return <Protocol72h />;
      default: return children;
    }
  };

  return (
    <div className="flex h-screen w-full bg-black overflow-hidden">
      
      {/* ASIDE: Siempre fijo a la izquierda */}
      <aside className="w-[280px] h-full border-r border-white/10 bg-[#050505] flex flex-col p-8 shrink-0 z-50">
        <div className="mb-12 px-2">
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black text-xl shadow-lg">NF</div>
           <p className="text-[10px] font-black text-white uppercase tracking-[.3em] mt-4">NeuralFlow</p>
           <p className="text-[8px] text-cyan-500 font-bold uppercase mt-1">Sovereign Layer Active</p>
        </div>

        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
                activeTab === item.id 
                ? 'bg-white text-black shadow-xl scale-[1.05]' 
                : 'text-zinc-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN: El contenido de la derecha con scroll independiente */}
      <main className="flex-1 h-full overflow-y-auto bg-[#080808] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}