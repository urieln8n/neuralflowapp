"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 flex flex-col items-center">

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-12 shadow-2xl flex flex-col gap-8"
      >

        <h1 className="text-4xl font-extrabold text-center">
          ¿Listo para <span className="text-cyan-400">NeuralFlow</span>?
        </h1>

        <p className="text-gray-400 text-center">
          Déjanos un mensaje y nuestro equipo de IA se pondrá en contacto contigo.
        </p>

        <form className="flex flex-col gap-6">

          <InputField label="Nombre" placeholder="Tu nombre" type="text" />
          <InputField label="Email" placeholder="nombre@empresa.com" type="email" />
          <InputField label="Mensaje" placeholder="¿En qué podemos ayudarte?" type="textarea" />

          <motion.button 
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold text-black transition-all text-lg"
          >
            Enviar Mensaje
          </motion.button>

        </form>
      </motion.div>

      <p className="mt-10 text-gray-600 text-sm">
        Ecosistema NeuralFlow • Soporte Prioritario
      </p>
    </section>
  )
}

function InputField({ label, placeholder, type }: { label: string, placeholder: string, type: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{label}</label>
      {type === "textarea" ? (
        <textarea 
          placeholder={placeholder}
          className="p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none placeholder-gray-500 focus:border-cyan-400 focus:bg-white/10 transition-all min-h-[120px] resize-none"
        />
      ) : (
        <input 
          type={type}
          placeholder={placeholder}
          className="p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none placeholder-gray-500 focus:border-cyan-400 focus:bg-white/10 transition-all"
        />
      )}
    </div>
  )
}