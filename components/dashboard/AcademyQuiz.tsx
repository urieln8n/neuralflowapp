"use client";

import React, { useState } from "react";
// CORRECCIÓN LÍNEA 4: Usamos framer-motion
import { motion, AnimatePresence } from "framer-motion"; 
import { 
  BrainCircuit, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  ArrowRight,
  ShieldAlert 
} from "lucide-react";

// Hook de economía blindado
import { useEconomy } from "@/hooks/useEconomy";

interface QuizProps {
  course: {
    id: string;
    title: string;
    rewardValue: number;
    question: string;
    options: string[];
    correct: number;
  };
  onClose: () => void;
}

export const AcademyQuiz = ({ course, onClose }: QuizProps) => {
  const { addFlow, spendEnergy } = useEconomy();
  const [status, setStatus] = useState<"testing" | "passed" | "failed">("testing");
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  const handleSubmit = () => {
    if (selectedOpt === course.correct) {
      setStatus("passed");
      addFlow(course.rewardValue); // Recompensa institucional
    } else {
      setStatus("failed");
      spendEnergy(15); // Penalización del 15% de energía
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-xl bg-zinc-950 border border-white/10 rounded-[40px] p-10 relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)]"
      >
        {status === "testing" && (
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <BrainCircuit className="text-purple-500" size={20} />
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">Neural_Verify_System</span>
            </div>

            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-tight">
              {course.question}
            </h3>

            <div className="space-y-3">
              {course.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOpt(i)}
                  className={`w-full p-5 rounded-2xl text-left text-xs font-bold uppercase transition-all border
                    ${selectedOpt === i 
                      ? "bg-white text-black border-white" 
                      : "bg-zinc-900/50 text-zinc-500 border-white/5 hover:border-white/20"}
                  `}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              disabled={selectedOpt === null}
              onClick={handleSubmit}
              className="w-full py-5 bg-purple-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-purple-500 disabled:opacity-30 flex items-center justify-center gap-2"
            >
              Validar_Respuesta <ArrowRight size={14} />
            </button>
          </div>
        )}

        <AnimatePresence>
          {status === "passed" && (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center py-6">
              <CheckCircle2 size={80} className="mx-auto text-emerald-500 mb-6" />
              <h2 className="text-4xl font-black text-white italic uppercase mb-2">Validado</h2>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-8">
                Inyectando {course.rewardValue} $FLOW en el Vault...
              </p>
              <button onClick={onClose} className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase text-[10px]">Cerrar</button>
            </motion.div>
          )}

          {status === "failed" && (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center py-6">
              <ShieldAlert size={80} className="mx-auto text-red-500 mb-6" />
              <h2 className="text-4xl font-black text-white italic uppercase mb-2">Error_Neural</h2>
              <p className="text-red-500 text-[10px] font-black uppercase mb-8">-15% Energía del Núcleo</p>
              <button onClick={onClose} className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-black uppercase text-[10px]">Reintentar</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};