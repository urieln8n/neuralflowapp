"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Zap, TrendingUp } from 'lucide-react';

export default function GrowthMap() {
  // Datos simulados de escalabilidad (Proyección a 100M)
  const stats = [
    { label: "Active_Nodes", value: "1,204", color: "text-cyan-500" },
    { label: "Throughput", value: "48.2k/s", color: "text-white" },
    { label: "Expansion", value: "+22%", color: "text-emerald-500" },
  ];

  return (
    <div className="p-8 bg-zinc-950 border border-white/5 rounded-[40px] relative overflow-hidden group">
      {/* Grid de fondo decorativo */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Globe size={14} className="text-cyan-500 animate-spin-slow" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Global_Economic_Reach</span>
            </div>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter">Growth Map</h3>
          </div>
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-colors">
            <TrendingUp className="text-cyan-500" />
          </div>
        </div>

        {/* Visualización de la Gráfica (Brutalista) */}
        <div className="h-32 flex items-end gap-1 mb-8">
          {[40, 70, 45, 90, 65, 80, 100, 85, 95, 110].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: i * 0.1, duration: 1, ease: "circOut" }}
              className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-500 border-t border-cyan-400/50"
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[9px] font-black uppercase text-zinc-600 tracking-widest">{stat.label}</p>
              <p className={`text-xl font-black italic ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Call to Action: Neural Flow Direct */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-8 py-4 bg-white text-black font-black italic uppercase text-xs flex items-center justify-center gap-2 rounded-2xl hover:bg-cyan-500 transition-colors"
        >
          Expand Network <ArrowUpRight size={16} />
        </motion.button>
      </div>
    </div>
  );
}