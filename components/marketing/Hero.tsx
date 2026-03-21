"use client"

import { motion } from "framer-motion"
import { Sparkles, Rocket, Bot, ArrowRight, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-24">

      {/* Fondo glow con tus colores Cian/Morado */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.1),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.1),transparent_40%)]"/>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* COLUMNA IZQUIERDA: TEXTO Y VENTAS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge Premium */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 border border-white/10 rounded-full backdrop-blur text-cyan-400">
            <Sparkles size={12}/>
            NeuralFlow Enterprise v2.0
          </div>

          {/* Headline: Más agresivo y enfocado en resultados */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 italic tracking-tighter">
            ESCALA TU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600">
              NEGOCIO CON IA
            </span>
          </h1>

          {/* Subheadline: Enfocado en el beneficio (dinero/tiempo) */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-10 max-w-md sm:max-w-lg leading-relaxed font-medium">
            Sistemas autónomos que capturan leads y cierran ventas 24/7. Deja que la Inteligencia Artificial trabaje mientras tú escalas tu visión.
          </p>

          {/* BOTONES DE CONVERSIÓN */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-black uppercase text-sm tracking-widest transition shadow-xl"
              >
                <Rocket size={18}/> Empezar Misión Gratis
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition backdrop-blur-sm"
            >
              Ver Casos de Éxito <ArrowRight size={16}/>
            </motion.button>
          </div>

          {/* STATS CON ICONOS */}
          <div className="flex flex-wrap gap-8 mt-12 border-t border-white/5 pt-8">
            <Stat icon={<TrendingUp size={16} className="text-green-400"/>} label="+120" desc="SaaS lanzadas"/>
            <Stat icon={<Zap size={16} className="text-yellow-400"/>} label="48h" desc="MVP Listo"/>
            <Stat icon={<Bot size={16} className="text-cyan-400"/>} label="24/7" desc="Agentes Activos"/>
          </div>

        </motion.div>

        {/* COLUMNA DERECHA: EL STACK (Tu diseño de cards) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative mt-10 lg:mt-0"
        >
          {/* Efecto Glow detrás del panel */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl opacity-30 -z-10" />
          
          <div className="bg-[#0A0A0A] border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-10 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-20">
               <Zap size={100} className="text-white" strokeWidth={1}/>
            </div>

            <h3 className="text-xl font-black italic mb-8 tracking-tighter uppercase text-gray-300">
                AI Automation <span className="text-cyan-500">Stack</span>
            </h3>

            <div className="space-y-6">
              <FeatureItem icon={<Bot size={20}/>} title="Chat Agent" desc="Responde y califica leads en tiempo real."/>
              <FeatureItem icon={<MessageCircle size={20}/>} title="WhatsApp Agent" desc="Conversaciones que venden por ti."/>
              <FeatureItem icon={<Rocket size={20}/>} title="Landing Premium" desc="Diseño enfocado a la conversión máxima."/>
              <FeatureItem icon={<TrendingUp size={20}/>} title="CRM Inteligente" desc="Nunca pierdas un cliente de vista."/>
              <FeatureItem icon={<Zap size={20}/>} title="Full Automation" desc="Flujos que conectan todo tu negocio."/>
            </div>

            <button className="w-full mt-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-cyan-500 hover:text-black transition-all duration-500">
                Activar Agentes IA
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// Subcomponentes para mantener el orden
function FeatureItem({icon, title, desc}: {icon: any, title: string, desc: string}) {
  return (
    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 group">
      <div className="p-3 rounded-2xl bg-[#111] border border-white/5 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="font-bold text-sm sm:text-base text-gray-200 uppercase tracking-tight">{title}</p>
        <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

function Stat({label, desc, icon}: {label: string, desc: string, icon: any}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-center sm:text-left">
        <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
            {icon}
            <p className="text-xl font-black text-white">{label}</p>
        </div>
        <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{desc}</p>
      </div>
    </div>
  )
}

// Necesitarás importar MessageCircle de lucide-react arriba si lo usas
import { MessageCircle } from "lucide-react"