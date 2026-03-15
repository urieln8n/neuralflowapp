"use client"

import { motion } from "framer-motion"
import { Sparkles, Rocket, Bot, ArrowRight, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-28 px-6 lg:px-24">

      {/* Fondo glow radial */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.15),transparent_40%)]"/>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXTO HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold bg-white/5 border border-white/10 rounded-full backdrop-blur">
            <Sparkles size={14} className="text-cyan-400"/>
            AI Automation Platform
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Lanza tu negocio con  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Automatización con IA
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-lg mb-10 max-w-lg">
            Sistemas inteligentes que capturan leads, automatizan ventas, responden clientes y ejecutan procesos 24/7 para escalar tu negocio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition"
            >
              <Rocket size={18}/> Lanzar MVP
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-7 py-4 border border-white/10 rounded-xl hover:bg-white/5 transition"
            >
              Ver Demo <ArrowRight size={16}/>
            </motion.button>
          </div>

          {/* Social proof */}
          <div className="flex gap-8 mt-10 text-sm text-gray-500">
            <Stat label="+120" desc="startups lanzadas"/>
            <Stat label="48h" desc="tiempo promedio MVP"/>
            <Stat label="24/7" desc="automatización IA"/>
          </div>

        </motion.div>

        {/* PANEL VISUAL / PRODUCTO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
            <h3 className="text-lg font-semibold mb-6">AI Automation Stack</h3>
            <div className="space-y-5">
              <FeatureItem icon={<Bot size={18}/>} title="ChatWidget IA" desc="Responde clientes automáticamente"/>
              <FeatureItem icon={<Sparkles size={18}/>} title="Asistente WhatsApp" desc="Conversaciones automatizadas"/>
              <FeatureItem icon={<Rocket size={18}/>} title="Landing optimizada" desc="Lista para captar clientes"/>
              <FeatureItem icon={<ArrowRight size={18}/>} title="CRM básico" desc="Gestión de leads automática"/>
              <FeatureItem icon={<Zap size={18}/>} title="Automatizaciones" desc="Flujos de trabajo inteligentes y rápidos"/>
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
      className="flex items-start gap-4"
    >
      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </motion.div>
  )
}

function Stat({label, desc}: {label: string, desc: string}) {
  return (
    <div className="text-center">
      <p className="text-xl font-bold text-white">{label}</p>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  )
}