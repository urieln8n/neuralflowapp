"use client";

import React from "react";
import { BookOpen, Award, CheckCircle2, Lock } from "lucide-react";
import { useEconomy } from "@/hooks/useEconomy";

const COURSES = [
  { id: "ai-1", title: "Fundamentos de Prompting", reward: 10, difficulty: "Básico" },
  { id: "ai-2", title: "Arbitraje con Modelos LLM", reward: 50, difficulty: "Avanzado" },
];

export const AcademyRewards = () => {
  const { isOperational } = useEconomy();

  return (
    <div className="p-8 rounded-[40px] bg-zinc-950 border border-white/5 relative overflow-hidden">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-500">
          <BookOpen size={24} />
        </div>
        <div>
          <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">Neural_Academy</h2>
          <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest text-glow">Formación = Multiplicador de Hashrate</p>
        </div>
      </div>

      <div className="space-y-4">
        {COURSES.map((course) => (
          <div key={course.id} className="p-5 rounded-[25px] bg-zinc-900/50 border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-cyan-500 uppercase italic mb-1">{course.difficulty}</span>
              <span className="text-sm font-bold text-white uppercase tracking-tight">{course.title}</span>
            </div>
            
            {isOperational ? (
              <button className="px-6 py-2 bg-white text-black text-[10px] font-black rounded-xl hover:bg-cyan-500 hover:text-white transition-all uppercase italic">
                Iniciar_Módulo
              </button>
            ) : (
              <div className="flex items-center gap-2 text-zinc-700">
                <Lock size={14} />
                <span className="text-[9px] font-black uppercase italic">Nodo_Sin_Energía</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER DE SOSTENIBILIDAD */}
      <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
        <Award className="text-zinc-600" size={16} />
        <p className="text-[9px] font-medium text-zinc-500 italic leading-tight">
          Las recompensas educativas se distribuyen desde el <span className="text-white">Fondo de Tesorería de NeuralFlow</span> y no afectan el suministro circulante del mercado.
        </p>
      </div>
    </div>
  );
};