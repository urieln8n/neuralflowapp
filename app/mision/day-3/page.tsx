"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Video, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Scissors, 
  UploadCloud,
  ExternalLink
} from "lucide-react";

export default function MisionDay3() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const finishMission = () => {
    localStorage.setItem("day-3_completed", "true");
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
      {/* NAVBAR */}
      <nav className="p-6 border-b border-white/5 bg-black/80 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/dashboard')}>
            <div className="p-1 bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-lg">
              <Zap size={18} fill="white" />
            </div>
            <span className="font-black uppercase italic text-xl tracking-tighter">
              Neural<span className="text-emerald-400">Flow</span>
            </span>
          </div>
          <button onClick={() => router.push('/dashboard')} className="text-[10px] font-black uppercase text-gray-500 hover:text-white tracking-widest px-4 py-2 border border-white/10 rounded-full">
            Panel de Control
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-8 lg:p-20">
        
        {/* PASO 1: CHECKLIST DE EDICIÓN */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h1 className="text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Edición <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Magnética</span>
            </h1>
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mb-16">
              Aplica los cortes y efectos que retienen al espectador.
            </p>

            <div className="space-y-4 mb-16">
              {[
                "Cortes cada 2-3 segundos (Jump cuts)",
                "Subtítulos dinámicos en el centro",
                "Zoom-in/Zoom-out en puntos clave",
                "Música de fondo (Sound design)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-8 bg-[#080808] border border-white/5 rounded-[2.5rem] hover:border-emerald-500/30 transition-all group">
                  <div className="w-8 h-8 rounded-full border-2 border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                    <Scissors size={16} className="text-emerald-500" />
                  </div>
                  <span className="text-xl font-bold italic">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => { setStep(2); window.scrollTo(0,0); }}
              className="w-full py-10 bg-white text-black font-black uppercase tracking-[0.2em] rounded-[2.5rem] hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-4 text-2xl shadow-2xl"
            >
              SIGUIENTE: PUBLICACIÓN <ArrowRight size={32} />
            </button>
          </div>
        )}

        {/* PASO 2: ESTRATEGIA DE POSTEO */}
        {step === 2 && (
          <div className="animate-in zoom-in-95 duration-500 text-center">
            <div className="w-32 h-32 bg-emerald-500/10 rounded-[3rem] flex items-center justify-center mx-auto mb-10 border border-emerald-500/20">
              <UploadCloud size={60} className="text-emerald-500" />
            </div>
            <h2 className="text-5xl font-black italic uppercase mb-4 tracking-tighter">Listos para <span className="text-emerald-400">Lanzar</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-16">Configura tu publicación para el algoritmo.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem]">
                <h4 className="text-emerald-400 font-black uppercase text-xs tracking-widest mb-4">Copy Sugerido</h4>
                <p className="text-lg font-medium italic">"Lo que nadie te dice sobre este proceso... 👀 #IA #NeuralFlow #Emprendimiento"</p>
              </div>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem]">
                <h4 className="text-emerald-400 font-black uppercase text-xs tracking-widest mb-4">Mejor Hora</h4>
                <p className="text-4xl font-black italic tracking-tighter">19:00 - 21:00</p>
                <p className="text-gray-600 text-[10px] font-bold mt-2 uppercase">Zona horaria local</p>
              </div>
            </div>

            <button 
              onClick={finishMission}
              className="w-full py-12 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black uppercase tracking-[0.4em] rounded-[3rem] shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center justify-center gap-6 text-3xl hover:scale-[1.02] transition-all"
            >
              FINALIZAR ENTRENAMIENTO <CheckCircle2 size={40} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}