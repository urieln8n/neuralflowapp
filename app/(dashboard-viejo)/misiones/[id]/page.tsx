"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useEconomy } from "@/hooks/useEconomy";
import { ChevronLeft, Zap, Play, CheckCircle } from "lucide-react";

export default function VideoPlayerPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addFlow } = useEconomy();
  const [completed, setCompleted] = useState(false);
  const [claiming, setClaiming] = useState(false);

  const handleComplete = () => {
    setClaiming(true);
    // Simulamos una pequeña carga de red para la "transacción"
    setTimeout(() => {
      addFlow(150); // Recompensa por ver el video
      setCompleted(true);
      setClaiming(false);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest"
      >
        <ChevronLeft size={16} /> Volver a la librería
      </button>

      {/* Area del Video */}
      <div className="aspect-video bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden relative group">
        {!completed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
             <Play size={64} className="text-white mb-4 group-hover:scale-110 transition-transform cursor-pointer" />
             <p className="text-white font-bold uppercase tracking-tighter">Click para iniciar sesión de entrenamiento</p>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-500/10 backdrop-blur-md">
             <CheckCircle size={64} className="text-emerald-500 mb-4" />
             <p className="text-emerald-500 font-black uppercase italic">¡Entrenamiento Completado!</p>
          </div>
        )}
      </div>

      {/* Info y Acción */}
      <div className="flex justify-between items-start bg-zinc-950 p-8 rounded-[32px] border border-white/5">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-white uppercase italic">Módulo {id}: Viralidad Acelerada</h2>
          <p className="text-zinc-500 text-sm max-w-md">Aprende los nodos de conexión neural que hacen que un video sea compartido por millones.</p>
        </div>

        <button
          onClick={handleComplete}
          disabled={completed || claiming}
          className={`px-8 py-4 rounded-2xl font-black uppercase text-xs flex items-center gap-3 transition-all ${
            completed 
            ? "bg-emerald-500/20 text-emerald-500 cursor-default" 
            : "bg-white text-black hover:bg-cyan-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          }`}
        >
          {claiming ? "Procesando Flow..." : completed ? "Recompensa Cobrada" : <><Zap size={16} fill="currentColor"/> Cobrar 150 Flow</>}
        </button>
      </div>
    </div>
  );
}