"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowRight, 
  Sparkles, 
  Layout, 
  CheckCircle2, 
  Copy, 
  ChevronRight,
  Zap
} from "lucide-react";

export default function MisionDay2() {
  const [step, setStep] = useState(1);
  const [tema, setTema] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  // Función para avanzar de etapa y asegurar que el scroll suba
  const handleNext = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      {/* NAVBAR UNIFICADA */}
      <nav className="p-6 border-b border-white/5 bg-black/80 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => router.push('/dashboard')}>
            <div className="p-1 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg">
              <Zap size={18} fill="white" />
            </div>
            <span className="font-black uppercase italic text-xl tracking-tighter">
              Neural<span className="text-purple-500">Flow</span>
            </span>
          </div>
          <button 
            onClick={() => router.push('/dashboard')}
            className="text-[10px] font-black uppercase text-gray-500 hover:text-white transition-all tracking-[0.2em] border border-white/10 px-4 py-2 rounded-full hover:bg-white/5"
          >
            Volver al Panel
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-8 lg:p-20">
        
        {/* PASO 1: INTRODUCCIÓN A LA ESTRUCTURA */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <header className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest">Nivel 02</span>
              </div>
              <h1 className="text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mb-6">
                Guion <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Magnético
                </span>
              </h1>
              <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs max-w-xl">
                Diseña la columna vertebral de tus videos para maximizar la retención orgánica.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="p-10 bg-[#080808] border border-white/10 rounded-[3rem] hover:border-purple-500/40 transition-all group">
                <Layout className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tight">Estructura AIDA</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Atención, Interés, Deseo y Acción. La fórmula clásica que nunca falla en Reels y TikTok.</p>
              </div>
              <div className="p-10 bg-[#080808] border border-white/10 rounded-[3rem] hover:border-pink-500/40 transition-all group border-dashed">
                <div className="w-10 h-10 rounded-full border-2 border-white/5 flex items-center justify-center text-gray-700 mb-6 font-black italic text-xl">?</div>
                <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tight text-gray-500">Personalizado</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Próximamente: Crea tus propias plantillas de guion basadas en tu estilo único.</p>
              </div>
            </div>

            <button 
              onClick={handleNext}
              className="group w-full py-10 bg-white text-black font-black uppercase tracking-[0.2em] rounded-[2.5rem] hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-4 text-2xl shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              CONTINUAR AL MOTOR IA <ChevronRight size={32} />
            </button>
          </div>
        )}

        {/* PASO 2: GENERACIÓN DE CONTENIDO */}
        {step === 2 && (
          <div className="animate-in zoom-in-95 duration-700 flex flex-col items-center py-10">
            <div className="relative mb-12">
               <div className="absolute inset-0 bg-purple-500 blur-[60px] opacity-20 animate-pulse"></div>
               <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-600 rounded-[2rem] flex items-center justify-center relative z-10 shadow-2xl">
                 <Sparkles size={50} className="text-white" />
               </div>
            </div>
            
            <h2 className="text-5xl font-black italic uppercase mb-4 text-center tracking-tighter">¿Sobre qué <span className="text-purple-500">escribimos?</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-12">Introduce el tema que validaste en el Día 1.</p>
            
            <textarea 
              className="w-full max-w-2xl bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-2xl font-bold focus:border-purple-500 outline-none mb-10 transition-all shadow-inner min-h-[250px] placeholder:text-white/10"
              placeholder="Ej: 3 trucos para mejorar el maquillaje de noche..."
              value={tema}
              onChange={(e) => setTema(e.target.value)}
            />
            
            <button 
              onClick={() => {
                setIsProcessing(true);
                setTimeout(() => { setIsProcessing(false); handleNext(); }, 3000);
              }}
              disabled={!tema || isProcessing}
              className={`w-full max-w-2xl py-8 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xl transition-all shadow-2xl ${
                isProcessing ? "bg-white/5 text-gray-700 animate-pulse" : "bg-purple-600 text-white hover:bg-white hover:text-black"
              }`}
            >
              {isProcessing ? "INGENIERÍA DE PROMPTS..." : "TRANSFORMAR EN GUION"}
            </button>
          </div>
        )}

        {/* PASO 3: RESULTADO FINAL (GUION COMPLETO) */}
        {step === 3 && (
          <div className="animate-in slide-in-from-right-12 duration-1000">
            <div className="flex items-center gap-4 mb-10">
               <div className="h-[2px] w-12 bg-purple-500"></div>
               <h2 className="text-5xl font-black uppercase italic tracking-tighter">Guion <span className="text-white/20">Final</span></h2>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 p-10 md:p-16 rounded-[4rem] mb-12 space-y-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                <Layout size={300} strokeWidth={1} />
              </div>

              {[
                { label: "00-05s: El Gancho", content: `¡Deja de cometer este error si quieres dominar ${tema}! La mayoría lo ignora, pero aquí está el truco.` },
                { label: "05-40s: El Valor", content: `Paso 1: Limpia tu zona de trabajo. Paso 2: Aplica la técnica NeuralFlow. Paso 3: Observa cómo el resultado cambia instantáneamente.` },
                { label: "40-60s: El Cierre", content: `Guarda este video para tu próxima sesión de ${tema} y sígueme para más secretos de IA.` }
              ].map((section, idx) => (
                <div key={idx} className="relative z-10 group">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em]">{section.label}</span>
                    <button className="text-gray-600 hover:text-white transition-colors"><Copy size={18} /></button>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold leading-tight italic tracking-tight group-hover:text-purple-100 transition-colors">
                    "{section.content}"
                  </p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                localStorage.setItem("day-2_completed", "true");
                router.push('/dashboard');
              }} 
              className="w-full py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black uppercase tracking-[0.5em] rounded-[3rem] shadow-[0_30px_60px_rgba(168,85,247,0.3)] flex items-center justify-center gap-6 text-3xl hover:scale-[1.02] transition-all"
            >
              COMPLETAR DÍA 2 <CheckCircle2 size={40} />
            </button>
          </div>
        )}

      </main>
    </div>
  );
}