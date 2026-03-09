"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const lines = [
  "> Initializing AI workflow...",
  "> Connecting data sources...",
  "> Analyzing customer behavior...",
  "> Generating automation pipeline...",
  "> Deploying AI agents...",
  "> System running successfully.",
]

export default function AISection() {
  const [text, setText] = useState<string[]>([])

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setText((prev) => [...prev, lines[i]])
      i++

      if (i === lines.length) {
        clearInterval(interval)
      }
    }, 900)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      {/* glow background */}

      <div className="absolute left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* text */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6">

            Your AI Workforce  
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              Running Automatically

            </span>

          </h2>

          <p className="text-gray-400 mb-8 max-w-lg">
            NeuralFlow deploys intelligent AI agents that automate workflows,
            interact with systems, and make decisions in real time.
          </p>

          <div className="flex gap-4">

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:scale-105 transition">
              Launch AI
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition">
              Explore Plans
            </button>

          </div>

        </motion.div>

        {/* terminal */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* glass terminal */}

          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 font-mono text-sm shadow-2xl">

            {/* mac buttons */}

            <div className="flex gap-2 mb-4">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

            </div>

            {/* lines */}

            <div className="space-y-2 text-green-400">

              {text.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {line}
                </motion.div>
              ))}

              {/* cursor */}

              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ▋
              </motion.span>

            </div>

          </div>

          {/* glow */}

          <div className="absolute inset-0 bg-green-500/10 blur-2xl rounded-2xl -z-10"></div>

        </motion.div>

      </div>

    </section>
  )
}