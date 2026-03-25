"use client";

import { Brain, Cpu, Coins, Rocket, MessageCircle, Shield } from "lucide-react";

const features = [
  {
    title: "Agentes de Captura IA",
    desc: "No es un chat común; es un agente entrenado con tus propios videos para cerrar ventas 24/7.",
    icon: Brain,
    color: "text-cyan-400"
  },
  {
    title: "Economía de Flow",
    desc: "Gana recompensas por cada interacción exitosa de tu agente y por ayudar a la comunidad.",
    icon: Coins,
    color: "text-yellow-500"
  },
  {
    title: "Nodos de Automatización",
    desc: "Sincroniza WhatsApp, Web y CRM en un solo flujo neural de alta velocidad.",
    icon: Cpu,
    color: "text-purple-500"
  }
];

export default function FeaturesModern() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 p-10 rounded-[40px] hover:border-cyan-500/30 transition-all group">
            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${f.color}`}>
              <f.icon size={28} />
            </div>
            <h3 className="text-xl font-black uppercase italic text-white mb-4 tracking-tighter">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}