"use client";
import React from 'react';
import { Users, MessageSquare, Globe, Zap } from 'lucide-react';

export default function ComunidadPage() {
  return (
    <div className="pt-32 pb-20 px-10 max-w-7xl mx-auto text-center">
      <Users size={48} className="mx-auto text-cyan-500 mb-8" />
      <h1 className="text-7xl font-black italic uppercase tracking-tighter mb-6">
        The_Swarm<span className="text-cyan-500">.</span>
      </h1>
      <p className="max-w-xl mx-auto text-zinc-500 mb-16 italic font-medium">
        Únete a la red global de NeuralFlow. Una colmena de arbitraje e inteligencia colectiva.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: MessageSquare, label: "Discord_Private", members: "42k+" },
          { icon: Globe, label: "Global_Nodes", members: "84k+" },
          { icon: Zap, label: "Alpha_Group", members: "1.2k" },
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-[40px] border border-white/5 bg-zinc-950 hover:border-cyan-500/30 transition-all group">
            <item.icon className="mx-auto mb-6 text-zinc-700 group-hover:text-cyan-500" />
            <h4 className="text-xl font-black uppercase italic mb-2">{item.label}</h4>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{item.members}_Socios</span>
          </div>
        ))}
      </div>
    </div>
  );
}