"use client"

import { motion } from "framer-motion"
import { Sparkles, Rocket, Bot, ArrowRight, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-24">

      {/* Fondo glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.15),transparent_40%)]"/>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-xs font-semibold bg-white/5 border border-white/10 rounded-full backdrop-blur">
            <Sparkles size={14} className="text-cyan-400"/>
            AI Automation Platform
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Lanza tu negocio con  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Automatización con IA
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-md sm:max-w-lg">
            Sistemas inteligentes que capturan leads, automatizan ventas y responden clientes 24/7 para escalar tu negocio.
          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition"
            >
              <Rocket size={18}/> Lanzar MVP
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-4 border border-white/10 rounded-xl hover:bg-white/5 transition"
            >
              Ver Demo <ArrowRight size={16}/>
            </motion.button>
          </div>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-8 text-sm text-gray-500">
            <Stat label="+120" desc="startups lanzadas"/>
            <Stat label="48h" desc="tiempo promedio MVP"/>
            <Stat label="24/7" desc="automatización IA"/>
          </div>

        </motion.div>

        {/* PANEL DERECHO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative mt-10 lg:mt-0"
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <h3 className="text-lg font-semibold mb-6">AI Automation Stack</h3>

            <div className="space-y-4 sm:space-y-5">
              <FeatureItem icon={<Bot size={18}/>} title="Chatbot IA" desc="Responde clientes automáticamente"/>
              <FeatureItem icon={<Sparkles size={18}/>} title="WhatsApp IA" desc="Conversaciones automatizadas"/>
              <FeatureItem icon={<Rocket size={18}/>} title="Landing optimizada" desc="Captación de clientes"/>
              <FeatureItem icon={<ArrowRight size={18}/>} title="CRM básico" desc="Gestión de leads"/>
              <FeatureItem icon={<Zap size={18}/>} title="Automatizaciones" desc="Flujos inteligentes"/>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function FeatureItem({icon, title, desc}: {icon: any, title: string, desc: string}) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-start gap-3 sm:gap-4"
    >
      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm sm:text-base">{title}</p>
        <p className="text-xs sm:text-sm text-gray-400">{desc}</p>
      </div>
    </motion.div>
  )
}

function Stat({label, desc}: {label: string, desc: string}) {
  return (
    <div className="text-center">
      <p className="text-lg sm:text-xl font-bold text-white">{label}</p>
      <p className="text-gray-400 text-xs sm:text-sm">{desc}</p>
    </div>
  )
}