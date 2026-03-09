"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="relative py-40 bg-black text-white overflow-hidden">

      {/* massive glow */}

      <div className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-blue-600/20 blur-[200px] rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-6xl font-bold mb-8">

            Build Your AI Workforce  
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

              With NeuralFlow

            </span>

          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">

            Deploy AI agents, automate workflows, and scale your business
            with the next generation AI automation platform.

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">

            <button className="px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition shadow-xl">

              Start Free Trial

            </button>

            <button className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:border-cyan-400 transition">

              Book Demo

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}