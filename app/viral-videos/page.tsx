// app/mission/day-1/page.tsx
"use client";

import { useState } from "react";
import { Flame, CheckCircle2, Circle, ArrowRight, Play } from "lucide-react";
import VideoCard from "@/components/ui/VideoCard";

export default function MissionDayOne() {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [videos, setVideos] = useState<any[]>([]); // Aquí conectarías tu fetch de YouTube

  const steps = [
    { id: 1, title: "Inspiración Viral", desc: "Analiza 3 videos de tu nicho" },
    { id: 2, title: "El Gancho (Hook)", desc: "Escribe 3 variantes de hooks" },
    { id: 3, title: "Estructura", desc: "Define el cuerpo del video" },
    { id: 4, title: "Checklist Final", desc: "¡Listo para grabar!" },
  ];

  const toggleStep = (id: number) => {
    if (completedSteps.includes(id)) {
      setCompletedSteps(completedSteps.filter(s => s !== id));
    } else {
      setCompletedSteps([...completedSteps, id]);
      if (step < 4) setStep(id + 1);
    }
  };

  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* Header de Misión */}
      <header className="border-b border-white/5 p-4 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-red-600/20 p-2 rounded-lg">
              <Flame className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight">MISIÓN: DÍA 1</h1>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Fundamentos Virales</p>
            </div>
          </div>
          
          {/* Barra de Progreso Minimalista */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-500" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-mono text-red-500">{Math.round(progress)}%</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row">
        {/* LADO IZQUIERDO: AREA DE TRABAJO (Videos) */}
        <section className="flex-1 p-8 border-r border-white/5 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Laboratorio de Inspiración</h2>
              <p className="text-gray-400">Encuentra patrones en estos videos que podrías replicar.</p>
            </div>
            
            {/* Aquí reutilizamos el componente de búsqueda y grid que ya creamos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80 hover:opacity-100 transition-opacity">
               {/* Mapeo de videos aquí... */}
               <div className="aspect-video bg-[#111] rounded-xl border border-dashed border-white/10 flex items-center justify-center text-gray-600">
                  Panel de Videos Virales Conectado
               </div>
            </div>
          </div>
        </section>

        {/* LADO DERECHO: MISSION CONTROL */}
        <aside className="w-full lg:w-[400px] bg-[#0A0A0A] p-8 flex flex-col gap-8">
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Pasos de la Misión</h3>
            <div className="space-y-4">
              {steps.map((s) => (
                <div 
                  key={s.id}
                  onClick={() => setStep(s.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    step === s.id ? 'bg-red-600/10 border-red-500/50' : 'bg-white/5 border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {completedSteps.includes(s.id) ? (
                        <CheckCircle2 className="text-green-500 w-5 h-5" />
                      ) : (
                        <Circle className="text-gray-600 w-5 h-5" />
                      )}
                      <span className={`font-medium ${step === s.id ? 'text-white' : 'text-gray-400'}`}>
                        {s.title}
                      </span>
                    </div>
                    {step === s.id && <ArrowRight className="text-red-500 w-4 h-4 animate-pulse" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <button 
              onClick={() => toggleStep(step)}
              className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-red-600/20"
            >
              MARCAR PASO {step} COMPLETADO
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}