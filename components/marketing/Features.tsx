"use client"

import { motion } from "framer-motion"
import { Bot, Zap, Brain } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Deploy intelligent AI agents that automate business processes, answer questions, and assist your team 24/7.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Connect APIs, tools, and services to automate repetitive tasks and optimize your operational efficiency.",
  },
  {
    icon: Brain,
    title: "Local AI Models",
    description:
      "Run powerful AI models locally with Ollama for secure, private, and high-performance AI interactions.",
  },
]

export default function Features() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      {/* glow background */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* title */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6">

            Powerful AI Automation

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            NeuralFlow helps teams automate workflows, integrate AI agents,
            and scale operations with intelligent automation.
          </p>

        </motion.div>

        {/* cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}

                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}

                className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300"
              >

                {/* hover glow */}

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-600/20 to-cyan-500/20 blur-xl"></div>

                <div className="relative z-10">

                  {/* icon */}

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">

                    <Icon size={24} />

                  </div>

                  {/* title */}

                  <h3 className="text-xl font-semibold mb-3">

                    {feature.title}

                  </h3>

                  {/* description */}

                  <p className="text-gray-400 text-sm leading-relaxed">

                    {feature.description}

                  </p>

                </div>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}