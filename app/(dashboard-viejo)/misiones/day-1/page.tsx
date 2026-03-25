"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles, Search, CheckCircle2, Copy, Play } from "lucide-react";

export default function MisionDay1() {
  const [step, setStep] = useState(1);
  const [nicho, setNicho] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* HEADER ESTATICO */}
      <nav className="p-6 border-b border-white/5 bg-black/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-black uppercase italic text-xl tracking-tighter">
            NeuralFlow <span className="text-cyan-400">Misión 01</span>
          </span>
          <button onClick={() => router.push('/dashboard')} className="text-[10px] font-black uppercase text-gray-500 hover:text-white transition-colors tracking-widest">
            Volver al Panel
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8 lg:p-16">
        
        {/* ETAPA 1: BÓVEDA DE INSPIRACIÓN */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-7xl font-black italic uppercase tracking-tighter mb-4 leading-none">
              Bóveda de <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Inspiración</span>
            </h1>
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-12">Analiza los patrones de mayor retención del mercado.</p>

            <div className="relative mb-12 group">
              <input type="text" placeholder="Buscar nicho (Belleza, Finanzas, IA...)" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl text-xl focus:border-cyan-400 outline-none pl-16 transition-all" />
              <Search className="absolute left-6 top-7 text-gray-500 group-focus-within:text-cyan-400" size={24} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[9/16] bg-black rounded-[2.5rem] border border-white/5 overflow-hidden relative group hover:border-cyan-500/50 transition-all shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center bg-white/5 group-hover:bg-transparent transition-colors">
                    <Play size={48} className="text-cyan-400 opacity-50 group-hover:opacity-100" />
                  </div>
                  <iframe className="w-full h-full opacity-40 group-hover:opacity-100" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=0" title={`Viral ${i}`} />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Patrón Viral {i}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => { setStep(2); window.scrollTo(0,0); }}
              className="w-full py-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-black uppercase tracking-[0.2em] rounded-[2.5rem] hover:scale-[1.01] transition-all flex items-center justify-center gap-4 text-xl shadow-[0_20px_40px_rgba(6,182,212,0.2)]"
            >
              SIGUIENTE PASO: USAR IA <ArrowRight size={24} />
            </button>
          </div>
        )}

        {/* ETAPA 2: MOTOR DE IA (HOOTS/HOOKS) */}
        {step === 2 && (
          <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center py-10">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <Sparkles size={48} className="text-white" />
            </div>
            <h2 className="text-5xl font-black italic uppercase mb-4 text-center tracking-tighter">Define tu <span className="text-cyan-400">Nicho</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-12">La IA generará ganchos específicos para tu audiencia.</p>
            
            <input 
              className="w-full max-w-xl bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-3xl text-center font-black uppercase focus:border-cyan-500 outline-none mb-8 transition-all shadow-inner"
              placeholder="Ej: Belleza..."
              value={nicho}
              onChange={(e) => setNicho(e.target.value)}
            />
            
            <button 
              onClick={() => {
                setIsGenerating(true);
                setTimeout(() => { setIsGenerating(false); setStep(3); window.scrollTo(0,0); }, 2500);
              }}
              disabled={!nicho || isGenerating}
              className={`w-full max-w-xl py-8 rounded-[2rem] font-black uppercase tracking-widest text-xl transition-all shadow-2xl ${
                isGenerating ? "bg-white/5 text-gray-600 animate-pulse cursor-wait" : "bg-white text-black hover:bg-cyan-500 hover:text-white"
              }`}
            >
              {isGenerating ? "ENTRENANDO ALGORITMO..." : "GENERAR GANCHOS VIRALES"}
            </button>
          </div>
        )}

        {/* ETAPA 3: RESULTADOS (HOOKS SUGERIDOS) */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-10 duration-700">
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Análisis Finalizado</p>
                <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none">Hooks <span className="text-white/20">Sugeridos</span></h2>
              </div>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 p-12 rounded-[3.5rem] mb-12 space-y-6 shadow-inner relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-9xl font-black italic text-white/[0.02] uppercase pointer-events-none tracking-tighter">
                {nicho || "Viral"}
              </div>
              
              <p className="text-gray-500 font-bold italic mb-6 uppercase text-[10px] tracking-widest relative z-10">
                Copia estos ganchos para tus videos de {nicho}:
              </p>

              {[1, 2, 3].map((i) => (
                <div key={i} className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl flex justify-between items-center hover:border-cyan-500/30 transition-all relative z-10">
                  <p className="text-2xl font-bold italic pr-8">
                    {i === 1 ? `¿Sabías que el 90% en ${nicho} falla por este error?` : 
                     i === 2 ? `¡STOP! Antes de gastar dinero en ${nicho}, mira esto.` : 
                     `El secreto de 3 segundos para dominar ${nicho}.`}
                  </p>
                  <button className="p-4 bg-white/5 rounded-2xl hover:bg-cyan-500 hover:text-black transition-all">
                    <Copy size={24} />
                  </button>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                localStorage.setItem("day-1_completed", "true");
                router.push('/dashboard');
              }} 
              className="w-full py-10 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-black uppercase tracking-[0.4em] rounded-[2.5rem] shadow-2xl flex items-center justify-center gap-4 text-2xl hover:scale-[1.02] transition-all"
            >
              FINALIZAR DÍA 1 <CheckCircle2 size={32} />
            </button>
          </div>
        )}

      </main>
    </div>
  );
}