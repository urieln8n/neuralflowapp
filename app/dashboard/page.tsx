"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Zap, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  BarChart3, 
  PlayCircle,
  Trophy,
  Video,
  Star
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({
    day1: false,
    day2: false,
    day3: false
  });

  useEffect(() => {
    // Verificación de estados en LocalStorage
    const d1 = localStorage.getItem("day-1_completed") === "true";
    const d2 = localStorage.getItem("day-2_completed") === "true";
    const d3 = localStorage.getItem("day-3_completed") === "true";
    
    setCompletedSteps({ day1: d1, day2: d2, day3: d3 });
    
    // Cálculo de progreso (33.3% por cada día)
    let total = 0;
    if (d1) total += 33.3;
    if (d2) total += 33.3;
    if (d3) total += 33.4; // Ajuste para llegar al 100%
    setProgress(Math.round(total));
  }, []);

  const misiones = [
    { 
      id: "day-1", 
      titulo: "Bóveda e IA Viral", 
      icon: <PlayCircle className="text-cyan-400" size={32} />,
      color: "from-cyan-500/20 to-blue-500/5",
      locked: false,
      done: completedSteps.day1
    },
    { 
      id: "day-2", 
      titulo: "Guion Magnético", 
      icon: <BarChart3 className="text-purple-400" size={32} />,
      color: "from-purple-500/20 to-pink-500/5",
      locked: !completedSteps.day1,
      done: completedSteps.day2
    },
    { 
      id: "day-3", 
      titulo: "Edición y Lanzamiento", 
      icon: <Video className="text-emerald-400" size={32} />,
      color: "from-emerald-500/20 to-teal-500/5",
      locked: !completedSteps.day2,
      done: completedSteps.day3
    }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-cyan-500/30">
      
      {/* NAVBAR */}
      <nav className="p-8 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Zap size={20} fill="white" />
            </div>
            <span className="text-2xl font-black uppercase italic tracking-tighter">
              Neural<span className="text-cyan-400">Flow</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
             <Trophy size={20} className={progress === 100 ? "text-yellow-500 animate-bounce" : "text-gray-700"} />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8 lg:p-20">
        
        {/* BARRA DE PROGRESO */}
        <section className="mb-20 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-2">Misiones</h1>
              <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px]">Estatus de entrenamiento: <span className="text-white">{progress}% Completado</span></p>
            </div>
            {progress === 100 && (
              <div className="animate-in slide-in-from-right-10 px-6 py-3 bg-yellow-500/10 border border-yellow-500/50 rounded-2xl flex items-center gap-3">
                <Star className="text-yellow-500" fill="currentColor" size={20} />
                <span className="text-yellow-500 font-black uppercase italic text-sm tracking-widest">Certificado Disponible</span>
              </div>
            )}
          </div>
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        {/* GRID DE MISIONES (3 COLUMNAS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {misiones.map((m) => (
            <div 
              key={m.id}
              className={`relative p-8 rounded-[3rem] border transition-all duration-500 flex flex-col justify-between h-[450px] ${
                m.locked 
                ? "bg-black border-white/5 opacity-40" 
                : `bg-gradient-to-br ${m.color} border-white/10 hover:border-white/30 hover:scale-[1.02]`
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-black/50 rounded-2xl border border-white/5">
                    {m.done ? <CheckCircle2 className="text-green-400" size={28} /> : m.icon}
                  </div>
                  {m.locked && <Lock size={18} className="text-gray-700" />}
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4 leading-none">
                  {m.titulo}
                </h3>
              </div>

              <button 
                disabled={m.locked}
                onClick={() => router.push(`/mision/${m.id}`)}
                className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${
                  m.locked 
                  ? "bg-white/5 text-gray-700" 
                  : "bg-white text-black hover:bg-cyan-500 hover:text-white"
                }`}
              >
                {m.locked ? "Fase Bloqueada" : m.done ? "Repetir" : "Iniciar"} 
                {!m.locked && <ArrowRight size={14} />}
              </button>
            </div>
          ))}
        </div>

        {/* ESTADO FINAL: CERTIFICADO */}
        {progress === 100 && (
          <div className="mt-20 p-1 bg-gradient-to-r from-yellow-500 via-white to-yellow-500 rounded-[4rem] animate-pulse">
            <div className="bg-black rounded-[3.9rem] p-16 text-center">
              <Trophy size={80} className="text-yellow-500 mx-auto mb-8" />
              <h2 className="text-5xl font-black italic uppercase mb-4 tracking-tighter">¡Entrenamiento <span className="text-yellow-500">Completado!</span></h2>
              <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mb-10">Has dominado el sistema NeuralFlow Enterprise V3.0</p>
              <button className="px-12 py-6 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-2xl hover:scale-110 transition-transform">
                Descargar Certificado
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}