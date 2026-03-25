"use client";
import React from 'react';
import { LayoutDashboard, Cpu, GraduationCap, Link2 } from 'lucide-react';

// INTERFAZ DE GRADO INSTITUCIONAL
interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const navItems = [
    { id: 'dashboard', label: 'DASHBOARD', icon: LayoutDashboard },
    { id: 'engine', label: 'NEURAL ENGINE', icon: Cpu },
    { id: 'academy', label: 'PROTOCOL 72H', icon: GraduationCap },
  ];

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-6">
      <nav className="flex items-center gap-2 p-3 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ${
              activeSection === item.id 
                ? 'bg-white text-black scale-105' 
                : 'text-zinc-500 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon size={16} strokeWidth={activeSection === item.id ? 3 : 2} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">
              {item.label}
            </span>
          </button>
        ))}
        <div className="w-[1px] h-6 bg-white/10 mx-2" />
        <button className="p-3 bg-white text-black rounded-full hover:bg-cyan-500 transition-colors">
          <Link2 size={18} />
        </button>
      </nav>
    </div>
  );
}