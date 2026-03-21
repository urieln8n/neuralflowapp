// components/ui/PaywallModal.tsx
import { Crown, CheckCircle2, Zap } from "lucide-react";

export default function PaywallModal() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#0A0A0A] border border-red-500/30 w-full max-w-md rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.2)]">
        
        {/* Header con Gradiente */}
        <div className="bg-gradient-to-b from-red-600/20 to-transparent p-8 text-center">
          <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-600/40 rotate-3">
            <Crown className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter">
            Neural<span className="text-red-600">Flow</span> Pro
          </h2>
          <p className="text-gray-400 text-sm mt-2">Has desbloqueado el potencial, ahora domínalo.</p>
        </div>

        {/* Beneficios */}
        <div className="p-8 space-y-4">
          <BenefitItem text="IA Ilimitada (30 días de misiones)" />
          <BenefitItem text="Estrategias de Retención Pro" />
          <BenefitItem text="Hooks Psicológicos Avanzados" />
          <BenefitItem text="Acceso a la Comunidad VIP" />
        </div>

        {/* Botón de Pago */}
        <div className="p-8 pt-0">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-red-600/20 flex items-center justify-center gap-2">
            <Zap size={18} fill="white" />
            DESBLOQUEAR ACCESO PRO
          </button>
          <p className="text-[10px] text-center text-gray-600 mt-4 uppercase tracking-widest">
            Pago único · Acceso inmediato
          </p>
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="text-red-500 w-5 h-5 flex-shrink-0" />
      <span className="text-gray-300 text-sm font-medium">{text}</span>
    </div>
  );
}