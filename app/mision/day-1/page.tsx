"use client";

import { useState, useEffect } from "react";
import { Loader2, Zap, CheckCircle, Flame, Crown, CheckCircle2 } from "lucide-react";
import VideoCard from "@/components/ui/VideoCard";

// --- COMPONENTE: EL MODAL DE PAGO (PAYWALL) ---
function PaywallModal() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-500">
      <div className="bg-[#0A0A0A] border border-red-500/30 w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(220,38,38,0.25)]">
        <div className="bg-gradient-to-b from-red-600/20 to-transparent p-10 text-center">
          <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-600/40 rotate-6">
            <Crown className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Neural<span className="text-red-600">Flow</span> Pro
          </h2>
          <p className="text-gray-400 text-sm mt-3">Misiones gratuitas agotadas.</p>
        </div>
        <div className="p-10 pt-0 space-y-4">
          <div className="flex items-center gap-3 text-gray-300">
            <CheckCircle2 className="text-red-500 w-5 h-5" /> <span>IA Ilimitada</span>
          </div>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl transition-all active:scale-95 mt-6 shadow-xl shadow-red-600/20 flex items-center justify-center gap-2">
            <Zap size={20} fill="white" /> DESBLOQUEAR AHORA
          </button>
        </div>
      </div>
    </div>
  );
}

// --- PÁGINA PRINCIPAL ---
export default function MissionDayOne() {
  // 1. Tipamos el estado como any[] para evitar el error de setVideos
  const [step, setStep] = useState<number>(1);
  const [videos, setVideos] = useState<any[]>([]); 
  const [niche, setNiche] = useState<string>("");
  const [aiHooks, setAiHooks] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPaywall, setShowPaywall] = useState<boolean>(false);

  // 2. useEffect corregido con validación estricta
  useEffect(() => {
    const fetchInspiration = async () => {
      try {
        const res = await fetch("/api/youtube?q=viral hooks marketing");
        const data = await res.json();
        
        // Aquí forzamos el reconocimiento del array para limpiar la línea 52
        if (Array.isArray(data)) {
          setVideos(data as any[]);
        } else {
          setVideos([]);
        }
      } catch (e) {
        console.error("Error en fetchInspiration:", e);
        setVideos([]);
      }
    };
    fetchInspiration();
  }, []);

  const handleAiGeneration = async () => {
    if (!niche.trim()) return alert("Por favor, escribe tu nicho");
    
    setLoading(true);
    try {
      const res = await fetch("/api/ai/hooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ niche }),
      });

      const data = await res.json();

      if (res.status === 402 || data.isPaywall) {
        setShowPaywall(true);
        return;
      }

      setAiHooks(data.hooks || "");
      setStep(3);
    } catch (err) {
      console.error("Error en IA:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col lg:flex-row font-sans">
      
      {showPaywall && <PaywallModal />}

      <aside className="w-full lg:w-80 border-r border-white/5 p-8 bg-black/50">
        <div className="flex items-center gap-3 mb-12">
          <Flame className="text-red-600 w-8 h-8" />
          <h2 className="text-xl font-black italic tracking-tighter">NEURAL<span className="text-red-600">FLOW</span></h2>
        </div>
        
        <nav className="space-y-8">
          <StepIndicator num={1} title="Inspiración" active={step === 1} done={step > 1} />
          <StepIndicator num={2} title="IA Viral Hooks" active={step === 2} done={step > 2} />
          <StepIndicator num={3} title="Resultado" active={step === 3} done={step > 3} />
        </nav>
      </aside>

      <main className="flex-1 p-6 lg:p-16 overflow-y-auto">
        {step === 1 && (
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
            <h1 className="text-5xl font-black mb-4 tracking-tighter italic uppercase">Día 1: Inspiración</h1>
            <p className="text-gray-500 mb-12 text-lg font-medium tracking-tight text-balance">Estudia los mejores videos antes de crear.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.length > 0 ? (
                videos.map((v: any) => (
                  <VideoCard key={v.id?.videoId || Math.random()} video={v} />
                ))
              ) : (
                <div className="col-span-full h-64 bg-white/5 rounded-3xl animate-pulse flex items-center justify-center text-gray-500">
                  Cargando Laboratorio Viral...
                </div>
              )}
            </div>
            <button 
              onClick={() => setStep(2)}
              className="mt-12 bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-red-600 hover:text-white transition-all active:scale-95"
            >
              SIGUIENTE PASO: USAR IA
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-xl mx-auto py-20 text-center animate-in zoom-in duration-500">
            <div className="inline-block p-4 bg-red-600/20 rounded-3xl mb-6 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
              <Zap className="text-red-500 w-10 h-10" fill="currentColor" />
            </div>
            <h1 className="text-4xl font-black mb-4 tracking-tight uppercase">Define tu Nicho</h1>
            <input 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="Ej: Finanzas Personales..."
              className="w-full bg-[#111] border border-white/10 p-6 rounded-2xl mb-6 text-center text-xl focus:border-red-600 outline-none transition-all"
            />
            <button 
              onClick={handleAiGeneration}
              disabled={loading}
              className="w-full bg-red-600 py-5 rounded-2xl font-black text-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : "GENERAR CON IA PREMIUM"}
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-2xl mx-auto animate-in fade-in zoom-in duration-500">
            <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-3xl mb-8 flex items-center gap-4">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="font-bold text-green-500 uppercase tracking-widest text-sm">Misión completada</p>
            </div>
            <div className="bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <h2 className="text-xs font-black text-red-500 uppercase tracking-[0.2em] mb-6">Hooks Sugeridos</h2>
              <p className="text-2xl text-gray-200 leading-relaxed font-medium whitespace-pre-line italic">
                {aiHooks}
              </p>
            </div>
            <button onClick={() => window.location.reload()} className="mt-8 text-gray-600 hover:text-white text-xs font-bold uppercase tracking-widest">Reiniciar</button>
          </div>
        )}
      </main>
    </div>
  );
}

// --- COMPONENTE AUXILIAR PARA PASOS ---
function StepIndicator({ num, title, active, done }: { num: number; title: string; active: boolean; done: boolean }) {
  return (
    <div className={`flex items-center gap-5 transition-all duration-500 ${active ? 'scale-105 opacity-100' : 'opacity-30'}`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${done ? 'bg-green-500 text-white' : active ? 'bg-red-600 text-white' : 'bg-white/10 text-gray-400'}`}>
        {done ? "✓" : num}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Etapa</span>
        <span className={`font-black text-xs uppercase tracking-tight ${active ? 'text-white' : 'text-gray-400'}`}>{title}</span>
      </div>
    </div>
  );
}