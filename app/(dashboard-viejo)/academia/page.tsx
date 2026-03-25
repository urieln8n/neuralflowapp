"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  PlayCircle, 
  BookOpen, 
  Lightbulb, 
  BrainCircuit, 
  Cpu, 
  ShieldCheck, 
  ChevronRight,
  Clock,
  Star,
  Zap
} from "lucide-react";

const COURSES = [
  {
    id: 1,
    category: "IA_GEN",
    title: "Mastering Prompt Engineering",
    duration: "2h 15min",
    level: "Intermedio",
    icon: <BrainCircuit size={20} />,
    color: "text-cyan-500",
    progress: 100,
  },
  {
    id: 2,
    category: "WEB3",
    title: "Seguridad y Custodia de Activos",
    duration: "1h 45min",
    level: "Básico",
    icon: <ShieldCheck size={20} />,
    color: "text-emerald-500",
    progress: 45,
  },
  {
    id: 3,
    category: "STRATEGY",
    title: "Escalado de Red 100M",
    duration: "3h 10min",
    level: "Avanzado",
    icon: <Cpu size={20} />,
    color: "text-purple-500",
    progress: 0,
  },
];

export default function AcademiaPage() {
  return (
    <div className="p-10 space-y-12 italic pb-32 bg-[#020202] min-h-screen">
      
      {/* HEADER: ACADEMIA DE PODER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/5 pb-10 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-purple-500" />
            <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.5em]">Neural_Knowledge_Protocol</span>
          </div>
          <h1 className="text-7xl font-black text-white italic tracking-tighter uppercase leading-none">Academia</h1>
        </div>
        
        <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] flex gap-8">
          <div className="text-center">
            <p className="text-2xl font-black text-white italic tracking-tighter">12</p>
            <p className="text-[8px] font-black text-zinc-600 uppercase">Cursos_Completos</p>
          </div>
          <div className="w-[1px] h-10 bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-black text-purple-500 italic tracking-tighter">850</p>
            <p className="text-[8px] font-black text-zinc-600 uppercase">Neural_XP</p>
          </div>
        </div>
      </div>

      {/* SECCIÓN: CURSO DESTACADO (VIDEO HERO) */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="relative group h-[400px] rounded-[60px] overflow-hidden border border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
        
        <div className="absolute bottom-0 left-0 p-12 z-20 space-y-4 max-w-2xl">
          <span className="px-4 py-1 bg-cyan-500 text-black text-[9px] font-black uppercase rounded-full tracking-widest">Nuevo_Contenido</span>
          <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter leading-none">IA & Cripto: El Futuro de la Economía Neural</h2>
          <p className="text-sm text-zinc-300 font-bold uppercase italic opacity-80">Aprende cómo el protocolo Flow integra modelos de lenguaje para predecir movimientos de ballenas.</p>
          <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] hover:bg-cyan-500 hover:text-white transition-all">
            <PlayCircle size={18} /> Iniciar_Módulo
          </button>
        </div>
      </motion.div>

      {/* GRID DE CURSOS DISPONIBLES */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 px-4">
            <BookOpen size={18} className="text-zinc-700" />
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Currículum_Operativo</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[45px] bg-zinc-950 border border-white/5 flex flex-col justify-between group hover:border-white/20 transition-all min-h-[320px]"
            >
              <div className="flex justify-between items-start">
                <div className={`p-4 rounded-2xl bg-white/5 ${course.color}`}>
                  {course.icon}
                </div>
                <div className="text-right">
                    <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">{course.category}</span>
                    <div className="flex items-center gap-1 mt-1 justify-end">
                        <Clock size={10} className="text-zinc-600" />
                        <span className="text-[9px] font-bold text-zinc-500 italic">{course.duration}</span>
                    </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h4>
                <div className="flex items-center gap-2">
                    <Star size={10} className="text-amber-500" />
                    <p className="text-[9px] font-black text-zinc-500 uppercase">{course.level}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        className={`h-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-cyan-500'}`}
                    />
                </div>
                <button className="w-full py-4 border border-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white hover:text-black transition-all">
                  {course.progress === 100 ? "Repetir_Módulo" : "Continuar_Lección"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER DE VALOR: TIPS RÁPIDOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
        <div className="p-8 rounded-[40px] bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 flex gap-6 items-center">
            <div className="p-5 bg-purple-500 rounded-2xl text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Lightbulb size={24} />
            </div>
            <div>
                <h5 className="text-lg font-black text-white italic uppercase tracking-tighter">Tip del Día</h5>
                <p className="text-[10px] text-zinc-400 font-bold uppercase italic leading-relaxed">"La IA no te quitará el trabajo, alguien que use IA sí. En NeuralFlow te enseñamos a ser ese alguien."</p>
            </div>
        </div>
        <div className="p-8 rounded-[40px] bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/20 flex gap-6 items-center">
            <div className="p-5 bg-cyan-500 rounded-2xl text-black">
                <Zap size={24} />
            </div>
            <div>
                <h5 className="text-lg font-black text-white italic uppercase tracking-tighter">Fast_Knowledge</h5>
                <p className="text-[10px] text-zinc-400 font-bold uppercase italic leading-relaxed">"Recuerda que cada curso completado aumenta tu Multiplicador de Recompensa en el Staking."</p>
            </div>
        </div>
      </div>
    </div>
  );
}