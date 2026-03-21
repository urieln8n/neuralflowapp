"use client";

import { CheckCircle2, Lock, PlayCircle, Flame, Trophy, Zap } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Configuración de las misiones (Aquí puedes ir añadiendo títulos a los días)
  const missions = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    title: i === 0 ? "Inspiración Viral" : i === 1 ? "Ganchos Psicológicos" : i === 2 ? "Edición Retentiva" : "Misión de Crecimiento",
    status: i === 0 ? "completed" : i === 1 ? "available" : "locked",
  }));

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 lg:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Superior Premium */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-900/20 to-transparent border border-red-500/20 rounded-[2.5rem] p-8 md:p-12 mb-12">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-red-500 mb-4">
              <Flame size={20} fill="currentColor" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Racha de 1 día</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">
              TU CAMINO A LA <span className="text-red-600 underline decoration-white/10">VIRALIDAD</span>
            </h1>
            <p className="text-gray-400 max-w-xl font-medium">
              Completa las 30 misiones diarias diseñadas para hackear el algoritmo y escalar tu marca personal.
            </p>
          </div>
          {/* Decoración de fondo */}
          <Zap className="absolute right-[-20px] top-[-20px] text-white/5 w-64 h-64 -rotate-12" />
        </div>

        {/* Grid de Misiones */}
        <div className="flex items-center justify-between mb-8 px-2">
          <h2 className="text-sm font-black text-gray-500 uppercase tracking-[0.3em]">Hoja de Ruta: 30 Días</h2>
          <div className="flex items-center gap-2 text-xs font-bold text-green-500 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
            <Trophy size={14} /> 1/30 COMPLETADO
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {missions.map((m) => (
            <Link 
              key={m.day}
              href={m.status !== "locked" ? `/mision/day-${m.day}` : "#"}
              className={`group relative p-8 rounded-[2rem] border transition-all duration-500 ${
                m.status === "locked" 
                ? "bg-white/[0.01] border-white/5 opacity-30 cursor-not-allowed" 
                : "bg-[#0A0A0A] border-white/10 hover:border-red-600/50 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] hover:scale-[1.03]"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`text-3xl font-black italic ${m.status === "completed" ? "text-red-600" : "text-white/10 group-hover:text-white/30 transition-colors"}`}>
                  {m.day < 10 ? `0${m.day}` : m.day}
                </span>
                {m.status === "locked" ? (
                  <Lock size={18} className="text-gray-700" />
                ) : m.status === "completed" ? (
                  <CheckCircle2 size={22} className="text-green-500" />
                ) : (
                  <div className="bg-red-600 p-2 rounded-lg shadow-lg shadow-red-600/20">
                    <PlayCircle size={18} className="text-white" />
                  </div>
                )}
              </div>
              
              <h3 className={`font-black text-sm uppercase tracking-tight leading-tight ${m.status === "locked" ? "text-gray-700" : "text-gray-200"}`}>
                {m.title}
              </h3>

              {m.status === "available" && (
                <span className="absolute bottom-6 right-8 text-[10px] font-black text-red-500 animate-pulse">EMPEZAR AHORA</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}