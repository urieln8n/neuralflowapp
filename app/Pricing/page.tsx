"use client"

import { motion } from "framer-motion"

interface PricingProps {
  service: string
  price: string
  ctaText: string
}

export default function Pricing({ service, price, ctaText }: PricingProps) {

  const features = [
    "Landing page profesional",
    "ChatWidget con IA",
    "Asistente automatizado en WhatsApp",
    "CRM básico de leads",
    "Automatización de respuestas",
    "Sistema listo para captar clientes"
  ]

  return (
    <section className="relative bg-[#0b0b0f] text-white py-28 px-6 overflow-hidden">

      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] pointer-events-none"/>

      <div className="max-w-5xl mx-auto text-center relative">

        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">
          Lanza tu sistema de captación con IA
        </h2>

        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Todo lo que necesitas para empezar a captar clientes automáticamente.
        </p>

        {/* Pricing Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 max-w-xl mx-auto"
        >

          {/* Plan name */}
          <h3 className="text-2xl font-bold mb-4">
            NeuralFlow MVP
          </h3>

          {/* Service description */}
          <p className="text-gray-400 mb-8">
            {service}
          </p>

          {/* Price */}
          <div className="text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            {price}
          </div>

          {/* Features */}
          <div className="text-left space-y-4 mb-10 text-gray-300">

            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3">

                <span className="text-green-400">✔</span>

                <span>{item}</span>

              </div>
            ))}

          </div>

          {/* CTA */}
          <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 transition p-4 rounded-xl font-semibold">
            {ctaText}
          </button>

          {/* Note */}
          <p className="text-gray-500 text-sm mt-4">
            Configuración rápida para empezar cuanto antes.
          </p>

        </motion.div>

      </div>

    </section>
  )
}